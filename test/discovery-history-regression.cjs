'use strict';
// Fixtures demonstrate code behavior; they are not recovered October 8 events.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {boot}=require('./w41-daily-regression.cjs');
function setup(){const values=new Map(),c={window:null,console,localStorage:{get length(){return values.size},key:i=>[...values.keys()][i],getItem:k=>values.get(k)||null}};c.window=c;vm.createContext(c);for(const f of ['music-dna-discovery-reference-v1.js','music-dna-w41-candidates-v1.js','music-dna-discovery-v1.js'])vm.runInContext(fs.readFileSync('test/'+f,'utf8'),c);return {c,values,e:c.MUSIC_DNA_DISCOVERY,p:c.MUSIC_DNA_W41_CANDIDATES.tracks};}
(async()=>{
 let {c,values,e,p}=setup();let checks=0;
 for(const artist of ['TOWER','Tanith']){
  const rows=Object.entries(p).filter(([,t])=>t.identity.artist===artist),[id,t]=rows[0];
  values.clear();values.set('bmd-week-2026-W40-day3-selection-v1',JSON.stringify({ids:[id]}));
  let ranked=e.rank(p);assert.ok(!ranked.some(r=>r.id===id),'exact offered recording excluded');assert.ok(ranked.some(r=>r.track.identity.artist===artist&&r.origin==='KNOWN_ARTIST_NEW_TRACK'),'different track allowed across weeks');checks++;
  const alias={...t};assert.equal(e.rank({alias},{context:e.context(p)}).length,0,'same recording excluded under new internal ID');checks++;
  values.clear();values.set('bmd-week-2026-W40-day3-selection-v1',JSON.stringify({ids:['missing-historical-metadata']}));assert.equal(e.origin(t,e.context(p)),'NEW_ARTIST','unresolved historical ID cannot identify artist');checks++;
  for(const rating of ['goed','twijfel','nee']){c.MUSIC_DNA_LEARNING={read:()=>({signals:{historical:{artist,title:'different recording',rating,weight:rating==='nee'?-2:rating==='goed'?1:0,styles:t.taxonomy.allMusicStyles}}})};ranked=e.rank(p);if(rating==='nee')assert.ok(!ranked.some(r=>r.track.identity.artist===artist));else assert.ok(ranked.some(r=>r.track.identity.artist===artist&&r.origin==='KNOWN_ARTIST_NEW_TRACK'));checks++;}
  delete c.MUSIC_DNA_LEARNING;
 }
 // Execute the historical production function: prior reserve artists were absent
 // from excludeArtists, so a different track could repeat the same artist.
 for(const artist of ['TOWER','Tanith']){
  const h=setup(),rows=Object.entries(h.p).filter(([,t])=>t.identity.artist===artist),[oldId]=rows[0];
  h.values.set('bmd-week-2026-W41-day1-reserve-selection-v1',JSON.stringify({ids:[oldId]}));
  Object.assign(h.c,{CAND:{tracks:Object.fromEntries(rows)},WEEK:'2026-W41',reserveSelectionKey:d=>'bmd-week-2026-W41-day'+d+'-reserve-selection-v1',selectionKey:d=>'bmd-week-2026-W41-day'+d+'-selection-v1',read:(k,f)=>JSON.parse(h.values.get(k)||JSON.stringify(f)),write:(k,v)=>h.values.set(k,JSON.stringify(v)),reserveNeeded:()=>1,excluded:()=>[oldId],track:id=>h.p[id]});
  vm.runInContext(fs.readFileSync('test/fixtures/discovery-history/pre-pr1-selection.js','utf8'),h.c);
  const repeated=h.c.newWeekSelection(2,true);assert.ok(repeated);assert.notEqual(repeated.ids[0],oldId);assert.equal(h.p[repeated.ids[0]].identity.artist,artist,'pre-PR1 repeats reserve artist on next day');checks++;
 }
 // Bounded real October 8 evidence verifies earlier ratings existed and matches
 // the incident IDs with the historical reserve function in a two-artist pool.
 const incident=JSON.parse(fs.readFileSync('test/fixtures/discovery-history/october8-evidence.json','utf8'));
 const h=setup(),earlier=incident.offers.filter(o=>!o.key.includes('day5')),earlierIds=new Set(earlier.map(o=>o.id));
 for(const row of earlier){const old=JSON.parse(h.values.get(row.key)||'{"ids":[]}');old.ids.push(row.id);h.values.set(row.key,JSON.stringify(old));}
 const history=Object.fromEntries(Object.entries(incident.learning).filter(([id])=>earlierIds.has(id)));h.c.MUSIC_DNA_LEARNING={read:()=>({signals:history})};
 assert.ok(Object.values(history).some(s=>s.artist==='TOWER'&&s.rating==='goed'));assert.ok(Object.values(history).some(s=>s.artist==='Tanith'&&s.rating==='twijfel'));checks++;
 Object.assign(h.c,{CAND:{tracks:Object.fromEntries(Object.entries(h.p).filter(([,t])=>['TOWER','Tanith'].includes(t.identity.artist)))},WEEK:'2026-W41',reserveSelectionKey:d=>'bmd-week-2026-W41-day'+d+'-reserve-selection-v1',selectionKey:d=>'bmd-week-2026-W41-day'+d+'-selection-v1',read:(k,f)=>JSON.parse(h.values.get(k)||JSON.stringify(f)),write:(k,v)=>h.values.set(k,JSON.stringify(v)),reserveNeeded:()=>2,excluded:()=>[...earlierIds],track:id=>h.p[id]});
 vm.runInContext(fs.readFileSync('test/fixtures/discovery-history/pre-pr1-selection.js','utf8'),h.c);
 assert.deepEqual(Array.from(h.c.newWeekSelection(5,true).ids),incident.offers.filter(o=>o.key.includes('day5')).map(o=>o.id));checks++;
 // Raw historical ratings are not read by discovery; a missing learned signal requires
 // the learning resync AND loaded candidate metadata before it can influence discovery.
 values.clear();const tower=Object.entries(p).find(([,t])=>t.identity.artist==='TOWER');values.set('bmd-week-2026-W40-day3-v1',JSON.stringify({[tower[0]]:{rating:'nee'}}));assert.ok(e.rank(p).some(r=>r.id===tower[0]));checks++;
 // PR #1 actual daily page excludes official/reserve/retired artists from this week.
 for(const kind of ['official','reserve','retired']){
  const store=new Map(),key='bmd-week-2026-W41-day1-'+(kind==='official'?'':'reserve-')+'selection-v1';
  const tanith=Object.entries(p).find(([,t])=>t.identity.artist==='Tanith');
  store.set(key,JSON.stringify(kind==='retired'?{ids:[],retiredIds:[tower[0],tanith[0]]}:{ids:kind==='official'?[tower[0],tanith[0],'fixture-c']:[tower[0],tanith[0]]}));
  // Mark earlier days complete with unrelated IDs to reach day 5 on October 8.
  for(let day=1;day<5;day++){const prefix='bmd-week-2026-W41-day'+day; if(kind!=='official'||day!==1)store.set(prefix+'-selection-v1',JSON.stringify({ids:['fixture-a','fixture-b','fixture-c']}));const ids=JSON.parse(store.get(prefix+'-selection-v1')).ids;store.set(prefix+'-v1',JSON.stringify(Object.fromEntries(ids.map(id=>[id,{rating:'goed'}]))));}
  if(kind==='reserve')store.set('bmd-week-2026-W41-day1-reserve-v1',JSON.stringify({[tower[0]]:{rating:'goed'},[tanith[0]]:{rating:'goed'}}));
  // Large synthetic inventory avoids extra offerings while reaching day 5.
  store.set('bmd-learning-v1',JSON.stringify({signals:Object.fromEntries(Array.from({length:42},(_,i)=>['inventory-'+i,{artist:'Inventory '+i,title:'fixture',rating:'goed',weight:1,spotifyResolvedExact:true,spotifyUrl:'https://open.spotify.com/track/'+String(i+1).padStart(22,'0'),styles:[]}]))}));
  const before=store.get(key),b=await boot('daily.html',store,'2026-10-08T10:00:00+02:00');const q=b.read('bmd-week-2026-W41-day5-selection-v1');assert.ok(q,'day5 selected: '+b.nodes.screen.innerHTML);assert.ok(q.ids.every(id=>!['TOWER','Tanith'].includes(p[id].identity.artist)));assert.equal(store.get(key),before,'existing selections preserved');checks++;
 }
 console.log(JSON.stringify({pass:true,checks,syntheticFixturesAndBoundedHistoricalEvidence:true,spotifyWrites:0,productionChanges:0,findings:['same recording/alias excluded when metadata is known','different track of historical artist allowed by current policy','missing catalog/learning metadata can mislabel known artist as new','nee artist exclusion works with persisted signal','PR1 actual daily path excludes same-week official/reserve/retired artists and preserves choices']}));
})().catch(e=>{console.error(e);process.exitCode=1});
