'use strict';
// Default mode verifies exclusion and recovery. --baseline reproduces the
// former unsafe interleaving; its success means the old bug was reproduced.
const assert=require('node:assert/strict');
const {boot}=require('./w41-daily-regression.cjs');
const date='2026-10-12T13:00:00+02:00',day='bmd-week-2026-W42-day2-v1',KEY='bmd-rating-transaction-v1';
const ids=['0290eeW1DvuplJkqwhErTL','068KPJISmxyjh0pdetMKdP','65k71e3Z4ZY6JhXSsz6spz'].map(x=>'pilot-'+x),reserve=['0tv2Vj73NTUs0FbUoHFOdZ','1bMV1Dw8B2feFudpLAdZQ8'].map(x=>'pilot-'+x);
const store=new Map(Object.entries({
 'bmd-week-2026-W42-day1-selection-v1':{ids},
 'bmd-week-2026-W42-day1-v1':Object.fromEntries(ids.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11'}])),
 'bmd-week-2026-W42-day1-reserve-selection-v1':{ids:reserve},
 'bmd-week-2026-W42-day1-reserve-v1':Object.fromEntries(reserve.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11',meter:false}]))
}).map(([k,v])=>[k,JSON.stringify(v)]));
(async()=>{
 if(!process.argv.includes('--baseline')){
  let held=false;const events=[],shows=[],locks={request:(name,opts,fn)=>{
   if(held)return Promise.resolve(fn(null));held=true;const result=fn({name});return Promise.resolve(result).finally(()=>{held=false;});
  }};
  const options={configure:c=>{c.navigator={locks};c.addEventListener=(name,fn)=>{if(name==='pagehide')events.push(fn);if(name==='pageshow')shows.push(fn);};}};
  const a=await boot('daily.html',store,date,options),before=[...store],b=await boot('daily.html',store,date,options);
  assert.equal(b.c.MUSIC_DNA_LEARNING,undefined);assert.match(b.nodes.screen.innerHTML,/ander tabblad/);assert.deepEqual([...store],before);
  assert.throws(()=>b.c.MUSIC_DNA_RATING_TRANSACTION.recover(),/exclusieve/);
  const selection=a.read('bmd-week-2026-W42-day2-selection-v1'),set=store.set;
  store.set=function(k,v){if(k==='bmd-positive-bank-v1')throw Error('injected bank failure');return set.call(this,k,v);};
  assert.throws(()=>a.c.MUSIC_DNA_RATING_TRANSACTION.save(day,selection.ids[0],{rating:'goed',ratedAt:'2026-10-12T11:00:00.000Z',meter:true,slot:null}),/failure/);
  assert(store.has(KEY));store.set=set;const pending=[...store];
  // No recovery, health probe, hydration or journal removal from the other tab.
  const blocked=await boot('daily.html',store,date,options);assert.equal(blocked.c.MUSIC_DNA_LEARNING,undefined);assert.deepEqual([...store],pending);
  events[0]();await new Promise(resolve=>setImmediate(resolve));
  assert.throws(()=>a.c.MUSIC_DNA_RATING_TRANSACTION.save(day,selection.ids[1],{rating:'goed'}),/exclusieve/);assert.deepEqual([...store],pending);
  shows[0]({persisted:true});assert.match(a.nodes.screen.innerHTML,/opslagvergrendeling vrijgegeven/);assert.deepEqual([...store],pending);
  const reopened=await boot('daily.html',store,date,options);assert(!store.has(KEY));assert.equal(reopened.read('bmd-positive-bank-v1').items[selection.ids[0]].rating,'goed');
  const unsupported=new Map(store),unsupportedBefore=[...unsupported],p=await boot('daily.html',unsupported,date,{configure:c=>{delete c.navigator;}});assert.equal(p.c.MUSIC_DNA_LEARNING,undefined);assert.deepEqual([...unsupported],unsupportedBefore);assert.match(p.nodes.screen.innerHTML,/tabvergrendeling/);
  console.log(JSON.stringify({pass:true,synthetic:true,realBrowser:false,secondTabBlockedBeforeWrites:true,pendingJournalPreserved:true,leaseReleaseRecovery:true,oldPageWritesRejected:true,unsupportedLocksNoWrites:true}));return;
 }
 const a=await boot('daily.html',store,date),b=await boot('daily.html',store,date),selection=a.read('bmd-week-2026-W42-day2-selection-v1');
 let intervene=true,failBank=false,bPending;
 const originalSet=store.set,originalDelete=store.delete;
 store.set=function(k,v){if(failBank&&k==='bmd-positive-bank-v1')throw Error('tab B synthetic bank quota');return originalSet.call(this,k,v);};
 store.delete=function(k){
  if(k===KEY&&intervene){
   intervene=false;
   // A has finished its last comparison. B recovers A, then begins a new
   // legitimate selected rating and fails after three component writes.
   assert.equal(b.c.MUSIC_DNA_RATING_TRANSACTION.recover(),true);
   failBank=true;
   assert.throws(()=>b.c.MUSIC_DNA_RATING_TRANSACTION.save(day,selection.ids[1],{rating:'goed',ratedAt:'2026-10-12T11:00:01.000Z',meter:true,slot:null}),/quota/);
   bPending=store.get(KEY);assert(bPending);failBank=false;
  }
  return originalDelete.call(this,k);
 };
 assert.equal(a.c.MUSIC_DNA_RATING_TRANSACTION.save(day,selection.ids[0],{rating:'goed',ratedAt:'2026-10-12T11:00:00.000Z',meter:true,slot:null}),true);
 assert.equal(store.has(KEY),false,'A deleted B journal');
 assert.equal(a.read(day)[selection.ids[1]].rating,'goed');
 assert.equal(a.read('bmd-positive-bank-v1').items[selection.ids[1]],undefined,'B bank write is missing');
 console.log(JSON.stringify({reproduced:true,releaseBlocker:true,realBrowser:false,contexts:2,interleaving:'A final check; B recover A; B rating/learning writes; B bank failure; A deletes B journal',tabAReturnedSuccess:true,tabBJournalLost:true,tabBRatingPresent:true,tabBBankMissing:true,pendingJournalBytes:bPending.length}));
})().catch(e=>{console.error(e);process.exitCode=1;});
