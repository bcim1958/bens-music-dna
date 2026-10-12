'use strict';
// Synthetic storage only. --baseline-source proves the missing event stop in a
// separately supplied historical transaction module; it is not a safety PASS.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=process.argv.includes('--baseline-source')?process.argv[process.argv.indexOf('--baseline-source')+1]:'test/music-dna-rating-transaction-v1.js';
const baseline=source!=='test/music-dna-rating-transaction-v1.js',checks=[];
async function context(store=new Map()){
 const events={},errors=[];
 const storage={get length(){return store.size},key:i=>[...store.keys()][i],getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)};
 const c={location:{origin:'http://isolated.test'},localStorage:storage,navigator:{locks:{request:async(name,options,fn)=>fn({name})}},addEventListener:(name,fn)=>{(events[name]||=[]).push(fn);},MUSIC_DNA_STORAGE_ERROR:e=>errors.push(e.message)};c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync(source,'utf8'),c);await c.MUSIC_DNA_RATING_TRANSACTION.acquire();
 return {c,store,errors,send:(name,event)=>(events[name]||[]).forEach(fn=>fn(event))};
}
(async()=>{
 for(const key of ['bmd-learning-v1','bmd-positive-bank-v1','bmd-positive-playlist-history-v1','bmd-week-2026-W39-day1-v1','bmd-week-2026-W42-day2-reserve-v1','bmd-rating-transaction-v1',null]){
  const p=await context(new Map([['bmd-positive-bank-v1','synthetic-FIFO'],['bmd-rating-transaction-v1','pending-do-not-delete']]));
  if(key===null)p.store.clear();else p.store.set(key,'external-change');const before=[...p.store];
  p.send('storage',{storageArea:p.c.localStorage,key});
  if(baseline){assert.doesNotThrow(()=>p.c.MUSIC_DNA_RATING_TRANSACTION.requireLease());assert.equal(p.errors.length,0);checks.push('reproduced: external '+key+' does not stop lease');}
  else{assert.throws(()=>p.c.MUSIC_DNA_RATING_TRANSACTION.recover(),/gestopt/);assert.throws(()=>p.c.MUSIC_DNA_RATING_TRANSACTION.save('bmd-week-2026-W42-day2-v1','synthetic',{rating:'goed'}),/gestopt/);assert.deepEqual([...p.store],before);assert.match(p.errors[0],/ander document/);checks.push('external '+key+': stop without further writes or journal removal');}
 }
 if(!baseline){
  const p=await context();p.send('storage',{storageArea:{},key:'bmd-learning-v1'});p.send('storage',{storageArea:p.c.localStorage,key:'unrelated-app'});assert.doesNotThrow(()=>p.c.MUSIC_DNA_RATING_TRANSACTION.requireLease());checks.push('other storage area and unrelated key leave lease usable');
  p.send('pagehide',{});p.send('pageshow',{persisted:true});assert.throws(()=>p.c.MUSIC_DNA_RATING_TRANSACTION.requireLease(),/gestopt/);assert.match(p.errors[0],/vrijgegeven/);checks.push('persisted pageshow requires reopen');
  const {boot}=require('./w41-daily-regression.cjs'),store=new Map();let handler;
  const b=await boot('daily.html',store,'2026-10-12T13:00:00+02:00',{configure:c=>{c.addEventListener=(name,fn)=>{if(name==='storage')handler=fn};}});
  assert(b.c.MUSIC_DNA_LEARNING);store.set('bmd-positive-playlist-history-v1','external-history');const before=[...store];handler({storageArea:b.c.localStorage,key:'bmd-positive-playlist-history-v1'});
  assert.match(b.nodes.screen.innerHTML,/ander document/);b.c.MUSIC_DNA_LEARNING.resyncStoredRatings();assert.throws(()=>b.c.MUSIC_DNA_POSITIVE_BANK.sync());assert.deepEqual([...store],before);checks.push('daily UI, learning and bank fail closed after external event');
 }
 console.log(JSON.stringify({pass:!baseline,reproduced:baseline,synthetic:true,realBrowser:false,checks},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
