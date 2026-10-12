'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const {boot}=require('./w41-daily-regression.cjs');
const DAY='bmd-week-2026-W42-day1',date='2026-10-11T13:00:00+02:00';
const official=['pilot-0290eeW1DvuplJkqwhErTL','pilot-068KPJISmxyjh0pdetMKdP','pilot-65k71e3Z4ZY6JhXSsz6spz'];
const reserve=['pilot-0tv2Vj73NTUs0FbUoHFOdZ','pilot-1bMV1Dw8B2feFudpLAdZQ8'];
function storeFor(input){return new Map(Object.entries(input.storage||{}).map(([k,v])=>[k,typeof v==='string'?v:JSON.stringify(v)]));}
function elements(node){return [node,...(node.children||[]).flatMap(elements)];}
function preserve(before,store){for(const [k,v] of before)if(/^(?:bmd-week-.*(?:selection-v1|reserve-v1|day[1-7]-v1)|bmd-day\d+-v13|bmd-positive-playlist-history-v1|bmd-(?:gift|delivery)-)/.test(k))assert.equal(store.get(k),v,'historical record changed: '+k);}
async function checkSnapshot(input){
 const store=storeFor(input),before=new Map(store);let b=await boot('daily.html',store,date);
 assert.deepEqual(b.read(DAY+'-selection-v1')?.ids,official,b.nodes.screen.innerHTML);
 const rq=b.read(DAY+'-reserve-selection-v1');if(rq)assert.deepEqual(rq.ids,reserve);
 assert.equal(b.read(DAY+'-v1'),null,'no ratings invented');preserve(before,store);
 const chosen=store.get(DAY+'-selection-v1');await boot('daily.html',store,date);assert.equal(store.get(DAY+'-selection-v1'),chosen);preserve(before,store);
 const signals=input.storage?.['bmd-learning-v1']?.signals||{};
 const learning=JSON.parse(store.get('bmd-learning-v1')||'{"signals":{}}').signals;
 for(const [id,s] of Object.entries(signals))assert.equal(learning[id]?.rating,s.rating,'historical verdict changed');
 return {store,b,reserves:!!rq};
}
async function run(){
 const files=process.argv.slice(2);let snapshots=0;
 for(const file of files){await checkSnapshot(JSON.parse(fs.readFileSync(file)));snapshots++;}
 await checkSnapshot({storage:{}});
 for(const verdict of ['❤️ RAAK','👍 GOED','😐 TERUGKOMEN','👎 NIET']){
  const {store,b}=await checkSnapshot({storage:{}}),card=b.nodes.screen.children.find(e=>e.tag==='section'&&e.className==='card');card.onclick();
  const button=elements(b.nodes.screen).find(e=>e.textContent===verdict);assert(button);button.onclick();
  const value=b.read(DAY+'-v1')[official[0]].rating;assert.equal(value,{'❤️ RAAK':'raak','👍 GOED':'goed','😐 TERUGKOMEN':'twijfel','👎 NIET':'nee'}[verdict]);
  assert.equal(b.c.MUSIC_DNA_LEARNING.read().signals[official[0]].rating,value);
  assert.equal(!!b.c.MUSIC_DNA_POSITIVE_BANK.sync().items[official[0]],value==='raak'||value==='goed');
  const before=store.get(DAY+'-v1');await boot('daily.html',store,date);assert.equal(store.get(DAY+'-v1'),before);
 }
 // The same recording under an older candidate ID must stop the entire new day before registration.
 for(const history of [
  {'bmd-positive-playlist-history-v1':{weeks:{'2026-W41':{spotifyTrackIds:['0290eeW1DvuplJkqwhErTL']}}}},
  {'bmd-week-2026-W41-day6-selection-v1':{ids:['external-0290eeW1DvuplJkqwhErTL']}},
  {'bmd-learning-v1':{signals:{old:{rating:'goed',artist:'ALIAS',title:'COCKTAILS AND DREAMS',spotifyUrl:'https://open.spotify.com/track/0290eeW1DvuplJkqwhErTL',spotifyResolvedExact:true}}}}
 ]){const store=storeFor({storage:history}),b=await boot('daily.html',store,date);assert.equal(b.read(DAY+'-selection-v1'),null);assert(b.nodes.screen.innerHTML.includes('historie'));}
 const {store,b}=await checkSnapshot({storage:{}});
 const reserveCard=b.nodes.screen.children.find(e=>e.className==='card reserve');assert(reserveCard);reserveCard.onclick();elements(b.nodes.screen).find(e=>e.textContent==='👍 GOED').onclick();
 assert.equal(b.read(DAY+'-reserve-v1')[reserve[0]].meter,false);assert.equal(b.read(DAY+'-v1'),null);
 store.set(DAY+'-v1',JSON.stringify(Object.fromEntries(official.map(id=>[id,{rating:'goed',ratedAt:date}]))));
 store.set(DAY+'-reserve-v1',JSON.stringify(Object.fromEntries(reserve.map(id=>[id,{rating:'goed',ratedAt:date,meter:false}]))));
 const monday=await boot('daily.html',store,'2026-10-12T13:00:00+02:00');assert.equal(monday.read('bmd-week-2026-W42-day2-selection-v1').ids.length,3);assert.equal(monday.read('bmd-week-2026-W42-day2-reserve-selection-v1'),null);
 // A selection we cannot resolve and orphan ratings must never be overwritten.
 for(const extra of [{[DAY+'-selection-v1']:{ids:['unknown-1','unknown-2','unknown-3']}},{[DAY+'-v1']:{orphan:{rating:'raak'}}}]){const store=storeFor({storage:extra}),before=new Map(store);await boot('daily.html',store,date);for(const [k,v] of before)assert.equal(store.get(k),v);}
 console.log(JSON.stringify({pass:true,historicalSnapshots:snapshots,buttons:4,syntheticTestRatingsOnly:true,spotifyWrites:0,weekAutomationProven:false}));
}
run().catch(e=>{console.error(e);process.exitCode=1;});
