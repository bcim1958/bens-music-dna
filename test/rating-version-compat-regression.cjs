'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),{boot}=require('./w41-daily-regression.cjs');
(async()=>{
const results=[];for(const route of JSON.parse(fs.readFileSync('test/legacy-writer-routes.json'))){const html=fs.readFileSync('test/'+route,'utf8');assert(html.indexOf("script-src 'none'")<html.indexOf('<script'));assert(html.includes('id="compat-wait"'));}results.push('21 legacy writer routes fail closed before script execution');
for(const name of ['music-dna-learning-v1.js','music-dna-positive-bank-v1.js']){
 for(const release of [undefined,'old','20261012.compat1']){
 const store=new Map([['bmd-learning-v1','{"version":9,"signals":{}}'],['bmd-positive-bank-v1','{"version":16,"items":{}}'],['bmd-rating-transaction-v1','preserve-pending']]),before=[...store];
 const c={document:{currentScript:{}},MUSIC_DNA_WRITER_RELEASE:release,localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)}};c.window=c;vm.createContext(c);vm.runInContext("document.defaultView=window",c);
 assert.throws(()=>vm.runInContext(fs.readFileSync('test/'+name,'utf8'),c),/gemengde/);assert.deepEqual([...store],before);results.push(name+': rejected '+release);
 }
}
for(const kind of ['controller','registration','error']){
 const store=new Map([['bmd-rating-transaction-v1','preserve-journal'],['bmd-positive-bank-v1','preserve-FIFO']]),before=[...store];
 const b=await boot('daily.html',store,'2026-10-12T13:00:00+02:00',{configure:c=>{c.navigator.serviceWorker={controller:kind==='controller'?{}:null,getRegistrations:async()=>{if(kind==='error')throw Error('registration failure');return kind==='registration'?[{}]:[];},addEventListener:()=>{}};}});
 assert.equal(b.c.MUSIC_DNA_LEARNING,undefined);assert.deepEqual([...store],before);assert.match(b.nodes.screen.innerHTML,/Beoordeling niet bevestigd/);results.push('SW '+kind+' zero writes');
}
const store=new Map(),events={};const b=await boot('daily.html',store,'2026-10-12T13:00:00+02:00',{configure:c=>{c.navigator.serviceWorker={controller:null,getRegistrations:async()=>[],addEventListener:(name,fn)=>events[name]=fn};}});assert(b.c.MUSIC_DNA_LEARNING);events.controllerchange();const before=[...store];assert.throws(()=>b.c.MUSIC_DNA_RATING_TRANSACTION.recover(),/gestopt/);assert.deepEqual([...store],before);results.push('controllerchange stops live lease writes');
require('node:child_process').execFileSync(process.execPath,['scripts/pin-daily-release.cjs','--check']);console.log(JSON.stringify({pass:true,synthetic:true,realBrowser:false,checks:results}));
})().catch(e=>{console.error(e);process.exitCode=1});
