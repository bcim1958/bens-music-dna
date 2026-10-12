'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {boot}=require('./w41-daily-regression.cjs');
const date='2026-10-12T13:00:00+02:00',day='bmd-week-2026-W42-day2-v1',journal='bmd-rating-transaction-v1';
const d1=['0290eeW1DvuplJkqwhErTL','068KPJISmxyjh0pdetMKdP','65k71e3Z4ZY6JhXSsz6spz'].map(x=>'pilot-'+x),r1=['0tv2Vj73NTUs0FbUoHFOdZ','1bMV1Dw8B2feFudpLAdZQ8'].map(x=>'pilot-'+x);
const flat=n=>[n,...(n.children||[]).flatMap(flat)];
function fixture(){return new Map(Object.entries({
 'bmd-week-2026-W42-day1-selection-v1':{ids:d1},
 'bmd-week-2026-W42-day1-v1':Object.fromEntries(d1.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11'}])),
 'bmd-week-2026-W42-day1-reserve-selection-v1':{ids:r1},
 'bmd-week-2026-W42-day1-reserve-v1':Object.fromEntries(r1.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11',meter:false}]))
 }).map(([k,v])=>[k,JSON.stringify(v)]));}
function click(p,label){p.nodes.screen.children.find(n=>n.className==='card').onclick();flat(p.nodes.screen).find(n=>n.textContent===label).onclick();}
function preserved(before,s){for(const[k,v]of before)if(/^(bmd-week-.*day1-|bmd-positive-playlist-history|bmd-delivery)/.test(k))assert.equal(s.get(k),v,k);}
(async()=>{
 const evidence=[];
 for(const [label,rating]of [['❤️ RAAK','raak'],['👍 GOED','goed'],['😐 TERUGKOMEN','twijfel'],['👎 NIET','nee']])for(const target of [journal,day,'bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1','remove-journal']){
  if(target==='bmd-quarterly-doubt-v1'&&rating!=='twijfel')continue;
  if(target==='bmd-positive-bank-v1'&&!['raak','goed'].includes(rating))continue;
  const s=fixture(),p=await boot('daily.html',s,date),before=new Map(s),oldBank=p.read('bmd-positive-bank-v1');let enabled=true;
  s.set=function(k,v){if(enabled&&k===target)throw Error('synthetic quota '+target);return Map.prototype.set.call(this,k,v)};
  s.delete=function(k){if(enabled&&target==='remove-journal'&&k===journal)throw Error('synthetic remove denied');return Map.prototype.delete.call(this,k)};
  assert.doesNotThrow(()=>click(p,label));assert.match(p.nodes.screen.innerHTML,/Beoordeling niet bevestigd/,label+" "+target);assert(!flat(p.nodes.screen).some(n=>n.textContent==='✓ Beoordeeld'));preserved(before,s);
  if(target===journal){for(const[k,v]of before)assert.equal(s.get(k),v,k);assert(!s.has(day));}
  else{
   assert(s.has(journal));const pending=s.get(journal),j=JSON.parse(pending);
   for(let i=0;i<2;i++){const re=await boot('daily.html',s,date);assert.equal(re.c.MUSIC_DNA_LEARNING,undefined);assert.match(re.nodes.screen.innerHTML,/Beoordeling niet bevestigd/);assert.equal(s.get(journal),pending);preserved(before,s);}
   enabled=false;const re=await boot('daily.html',s,date);assert(!s.has(journal));const id=Object.keys(re.read(day))[0];assert.equal(re.read(day)[id].rating,rating);assert.equal(re.read('bmd-learning-v1').signals[id].rating,rating);assert.equal(!!re.read('bmd-positive-bank-v1').items[id],['raak','goed'].includes(rating));assert.equal(!!re.read('bmd-quarterly-doubt-v1').items[id],rating==='twijfel');
   for(const id of r1)for(const field of ['firstPositiveAt','playlistUses','lastPlaylistWeek'])assert.equal(re.read('bmd-positive-bank-v1').items[id][field],oldBank.items[id][field]);preserved(before,s);
   const stored=s.get(day);await boot('daily.html',s,date);assert.equal(s.get(day),stored);
   assert.equal(s.get(day),j.after[day]);
  }
  evidence.push({rating,failure:target,visibleFailure:true,persistentReopenBlocked:target!==journal,historicalRatingsPreserved:true});
 }
 // A conflicting value is never overwritten, even if other components need repair.
 for(const target of [day,'bmd-learning-v1','bmd-positive-bank-v1','bmd-week-2026-W42-day1-v1']){
  const s=fixture(),p=await boot('daily.html',s,date),set=p.c.localStorage.setItem;p.c.localStorage.setItem=(k,v)=>{if(k==='bmd-positive-bank-v1')throw Error('quota');return set(k,v)};click(p,'👍 GOED');assert(s.has(journal));s.set(target,JSON.stringify({conflicting:'other writer'}));const before=new Map(s),re=await boot('daily.html',s,date);assert.equal(re.c.MUSIC_DNA_LEARNING,undefined);assert.match(re.nodes.screen.innerHTML,/Opslagconflict/);assert.deepEqual([...s],[...before]);
 }
 // Interruption at any durable boundary, including after a successful write.
 
 for(let boundary=1;boundary<=6;boundary++){
  const s=fixture(),p=await boot('daily.html',s,date),before=new Map(s);let n=0;
  const set=p.c.localStorage.setItem,remove=p.c.localStorage.removeItem;
  p.c.localStorage.setItem=(k,v)=>{set(k,v);if(++n===boundary)throw Error('synthetic interruption after write')};p.c.localStorage.removeItem=k=>{remove(k);if(++n===boundary)throw Error('synthetic interruption after removal')};click(p,'😐 TERUGKOMEN');assert.match(p.nodes.screen.innerHTML,/niet bevestigd/);
  const re=await boot('daily.html',s,date);assert(!s.has(journal));assert.equal(Object.values(re.read(day))[0].rating,'twijfel');preserved(before,s);
 }
 // Invalid journals fail closed before hydration and retain bytes.
 for(const raw of ['{broken','null',JSON.stringify({version:1,before:{},after:{unrelated:'{}'}})]){const s=fixture();s.set(journal,raw);const before=new Map(s),p=await boot('daily.html',s,date);assert.equal(p.c.MUSIC_DNA_LEARNING,undefined);assert.deepEqual([...s],[...before]);assert.match(p.nodes.screen.innerHTML,/niet bevestigd/);}
 // Native storage failure on startup no longer disappears inside learning.
 for(const key of ['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1']){const s=fixture();s.set=function(k,v){if(k===key)throw Error('persistent startup quota');return Map.prototype.set.call(this,k,v)};const p=await boot('daily.html',s,date);assert.match(p.nodes.screen.innerHTML,/niet bevestigd/);assert(!s.has(day));}
 // Reserve path uses the same transaction and preserves meter=false.
 {const s=fixture();s.delete('bmd-week-2026-W42-day1-reserve-v1');const p=await boot('daily.html',s,'2026-10-11T13:00:00+02:00');p.nodes.screen.children.find(n=>n.className==='card reserve').onclick();flat(p.nodes.screen).find(n=>n.textContent==='👍 GOED').onclick();assert.equal(p.read('bmd-week-2026-W42-day1-reserve-v1')[r1[0]].meter,false);assert(!s.has(journal));}
 // No reliance on replacing the native Storage method, plus actual delayed callbacks.
 {const s=fixture(),callbacks=[],p=await boot('daily.html',s,date,{configure:c=>Object.defineProperty(c.localStorage,'setItem',{value:c.localStorage.setItem,writable:false}),setTimeout:fn=>callbacks.push(fn)});
  const set=s.set;s.set=function(k,v){if(k==='bmd-learning-v1')throw Error('delayed quota');return set.call(this,k,v)};callbacks[0]();assert.match(p.nodes.screen.innerHTML,/niet bevestigd/);assert(p.c.MUSIC_DNA_STORAGE_BLOCKED);const before=new Map(s);for(const fn of callbacks.slice(1))fn();assert.deepEqual([...s],[...before]);
 }
 {const s=fixture(),p=await boot('daily.html',s,date,{configure:c=>Object.defineProperty(c.localStorage,'setItem',{value:c.localStorage.setItem,writable:false})});click(p,'👍 GOED');assert.equal(Object.values(p.read(day))[0].rating,'goed');assert(!s.has(journal));}
 // Reject unreadable state and changed selections at click time without replacing bytes.
 for(const target of [day,'bmd-week-2026-W42-day2-selection-v1']){const s=fixture(),p=await boot('daily.html',s,date);s.set(target,target===day?'{broken':JSON.stringify({ids:['changed']}));const before=new Map(s);click(p,'👍 GOED');assert.match(p.nodes.screen.innerHTML,/niet bevestigd/);assert.deepEqual([...s],[...before]);}
 // Browsers can fire script.onload even when script evaluation threw.
 {const s=fixture();await boot('daily.html',s,date);const bank=s.get('bmd-positive-bank-v1');s.set=function(k,v){if(k==='bmd-learning-v1')throw Error('startup learning quota');return Map.prototype.set.call(this,k,v)};const p=await boot('daily.html',s,date,{runtimeErrorsUseOnload:true});assert.match(p.nodes.screen.innerHTML,/Learning kon niet veilig starten/);assert.equal(s.get('bmd-positive-bank-v1'),bank);assert.equal(p.c.MUSIC_DNA_POSITIVE_BANK,undefined);}
 if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify({pass:true,fixture:true,realBrowser:false,spotifyWrites:0,evidence,conflicts:4,interruptionBoundaries:6,delayedCallbackFailure:true,nativeMethodReplacementNotRequired:true,runtimeScriptErrorLoadModel:true,malformedClickStateBlocked:true},null,2)+'\n');
 console.log('PASS: 19 fault/rating combinations; persistent reopen; forward recovery; four conflicts; six interruptions; startup writes; reserve; FIFO preservation. Synthetic fixtures only.');
})().catch(e=>{console.error(e);process.exitCode=1});
