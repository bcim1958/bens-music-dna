'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const {boot}=require('./w41-daily-regression.cjs');
const date='2026-10-12T13:00:00+02:00',day='bmd-week-2026-W42-day2-v1',KEY='bmd-rating-transaction-v1';
const flat=n=>[n,...(n.children||[]).flatMap(flat)];
function fixture(){const ids=['0290eeW1DvuplJkqwhErTL','068KPJISmxyjh0pdetMKdP','65k71e3Z4ZY6JhXSsz6spz'].map(x=>'pilot-'+x);const reserve=['0tv2Vj73NTUs0FbUoHFOdZ','1bMV1Dw8B2feFudpLAdZQ8'].map(x=>'pilot-'+x);return new Map([['bmd-week-2026-W42-day1-selection-v1',JSON.stringify({ids})],['bmd-week-2026-W42-day1-v1',JSON.stringify(Object.fromEntries(ids.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11'}])))] ,['bmd-week-2026-W42-day1-reserve-selection-v1',JSON.stringify({ids:reserve})],['bmd-week-2026-W42-day1-reserve-v1',JSON.stringify(Object.fromEntries(reserve.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11',meter:false}])))]]);}
function click(p){p.nodes.screen.children.find(n=>n.className==='card').onclick();flat(p.nodes.screen).find(n=>n.textContent==='👍 GOED').onclick();}
async function pending(){const s=fixture(),p=await boot('daily.html',s,date),set=p.c.localStorage.setItem;p.c.localStorage.setItem=(k,v)=>{if(k===day)throw Error('injected crash before rating write');return set(k,v);};click(p);assert(s.has(KEY));return {s,j:JSON.parse(s.get(KEY))};}
(async()=>{
 const baseline=process.argv.includes('--baseline'),evidence=[];
 for(const key of ['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1','bmd-positive-playlist-history-v1'])for(const raw of ['{broken','null','[]','{}','']){
  const s=fixture();s.set(key,raw);const p=await boot('daily.html',s,date);
  if(baseline){evidence.push({case:'invalid-existing-component',key,raw,overwritten:s.get(key)!==raw,bankWritten:s.has('bmd-positive-bank-v1'),visible:p.nodes.screen.innerHTML});}else{assert.equal(s.get(key),raw);assert.match(p.nodes.screen.innerHTML,/Veilige wachtstand/);}
 }
 for(const key of ['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1','bmd-positive-playlist-history-v1']){const s=fixture(),p=await boot('daily.html',s,date);s.set(key,'{broken');const before=[...s],fn=()=>key.includes('learning')||key.includes('doubt')?p.c.MUSIC_DNA_LEARNING.resyncStoredRatings():p.c.MUSIC_DNA_POSITIVE_BANK.sync();if(baseline){let error;try{fn()}catch(e){error=e.message}evidence.push({case:'corrupt-live-component',key,overwritten:s.get(key)!=='{broken',error});}else{assert.throws(fn);assert.deepEqual([...s],before,key);}}
 // Empty bytes are present data, not an absent journal.
 {const s=fixture();s.set(KEY,'');const before=[...s],p=await boot('daily.html',s,date);if(baseline){evidence.push({case:'empty-journal',baseline:'recover treats empty bytes as absent',visible:p.nodes.screen.innerHTML});}else{assert.equal(p.c.MUSIC_DNA_LEARNING,undefined);assert.deepEqual([...s],before);}}
 for(const mutation of ['empty-components','delete-rating','invalid-rating','remove-learning-signal','change-reserve-rating','remove-reserve','reset-fifo']){
  const {s,j}=await pending();
  if(mutation==='empty-components')for(const k of Object.keys(j.after))j.after[k]='{}';
  if(mutation==='delete-rating')j.after[day]='{}';
  if(mutation==='invalid-rating'){const r=JSON.parse(j.after[day]);Object.values(r)[0].rating='corrupt';j.after[day]=JSON.stringify(r);}
  if(mutation==='remove-learning-signal'){const m=JSON.parse(j.after['bmd-learning-v1']);delete m.signals[Object.keys(JSON.parse(s.get('bmd-learning-v1')).signals)[0]];j.after['bmd-learning-v1']=JSON.stringify(m);}
  if(mutation==='change-reserve-rating'){const m=JSON.parse(j.after['bmd-learning-v1']),b=JSON.parse(j.after['bmd-positive-bank-v1']),id=Object.keys(JSON.parse(s.get('bmd-learning-v1')).signals)[0];m.signals[id].rating='nee';m.signals[id].weight=-2;delete b.items[id];j.after['bmd-learning-v1']=JSON.stringify(m);j.after['bmd-positive-bank-v1']=JSON.stringify(b);}
  if(mutation==='remove-reserve'){const b=JSON.parse(j.after['bmd-positive-bank-v1']);delete b.items[Object.keys(JSON.parse(s.get('bmd-positive-bank-v1')).items)[0]];j.after['bmd-positive-bank-v1']=JSON.stringify(b);}
  if(mutation==='reset-fifo'){const b=JSON.parse(j.after['bmd-positive-bank-v1']);Object.values(b.items)[0].firstPositiveAt='2099-01-01';j.after['bmd-positive-bank-v1']=JSON.stringify(b);}
  s.set(KEY,JSON.stringify(j));const before=[...s];
  // Call recovery directly, before hydration could conceal the destructive write.
  const p=await boot('daily.html',new Map(before),date);
  if(baseline){assert(!p.nodes.screen.innerHTML.includes('Ongeldige herstel'));evidence.push({case:mutation,baseline:'accepted by recovery'});}else{assert.equal(p.c.MUSIC_DNA_LEARNING,undefined,mutation);}
  // A fresh storage-only context avoids unrelated startup writes for exact byte checks.
  const vm=require('node:vm'),store=new Map(before),c={window:null,location:{origin:'http://test'},localStorage:{get length(){return store.size},key:i=>[...store.keys()][i],getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)}};c.navigator={locks:{request:(name,opts,fn)=>Promise.resolve(fn({name}))}};c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync('test/music-dna-rating-transaction-v1.js','utf8'),c);
  if(c.MUSIC_DNA_RATING_TRANSACTION.acquire)await c.MUSIC_DNA_RATING_TRANSACTION.acquire();
  if(baseline){c.MUSIC_DNA_RATING_TRANSACTION.recover();assert(!store.has(KEY));}else{assert.throws(()=>c.MUSIC_DNA_RATING_TRANSACTION.recover());assert.deepEqual([...store],before,mutation);}
 }
 if(!baseline)for(const mutation of ['wrong-origin','wrong-version','missing-component','array-component','extra-component','stale-selection','stale-history','stale-doubt','stale-delivery']){
  const {s,j}=await pending();
  if(mutation==='wrong-origin')j.origin='https://other.invalid';
  if(mutation==='wrong-version')j.version=2;
  if(mutation==='missing-component')delete j.after['bmd-positive-bank-v1'];
  if(mutation==='array-component')j.after['bmd-learning-v1']='[]';
  if(mutation==='extra-component')j.after['bmd-delivery-v1']='{}';
  if(mutation==='stale-selection')s.set('bmd-week-2026-W42-day2-selection-v1',JSON.stringify({ids:['other']}));
  if(mutation==='stale-history')s.set('bmd-week-2026-W42-day1-v1',JSON.stringify({other:{rating:'nee'}}));
  if(mutation==='stale-doubt')s.set('bmd-quarterly-doubt-v1',JSON.stringify({items:{other:{retryUsed:true}}}));
  if(mutation==='stale-delivery')s.set('bmd-positive-playlist-history-v1',JSON.stringify({weeks:{'2026-W41':{ids:['other']}}}));
  s.set(KEY,JSON.stringify(j));const before=[...s],p=await boot('daily.html',s,date);assert.equal(p.c.MUSIC_DNA_LEARNING,undefined,mutation);assert.deepEqual([...s],before,mutation);
 }
 // Already fully applied journals may be cleared; they must not replay writes.
 if(!baseline){const {s,j}=await pending();for(const [k,v] of Object.entries(j.after))s.set(k,v);const raw=s.get(day);await boot('daily.html',s,date);assert(!s.has(KEY));assert.equal(s.get(day),raw);}
 console.log(JSON.stringify({pass:true,baseline,synthetic:true,invalidJournalCases:baseline?8:17,invalidStoredShapes:20,liveCorruptComponents:4,staleAppliedJournal:!baseline,evidence}));
})().catch(e=>{console.error(e);process.exitCode=1;});
