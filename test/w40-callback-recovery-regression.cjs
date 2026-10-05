'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'zaterdagcadeau.html'),'utf8');
const deliver=source.slice(source.indexOf('async function deliver(){'),source.indexOf('async function spotifyFailure('));
const callback=source.match(/setTimeout\((async\(\)=>\{const b=document.getElementById\('spotify'\);.*?\}|\(\)=>\{void deliver\(\)\}),20500\)/);
assert(callback,'OAuth return callback not found');
async function probe(kind){
 const elements={},writes=[],calls=[];
 const button={disabled:false,textContent:'',parentNode:{style:{},appendChild(n){elements[n.id]=n}}};elements.spotify=button;
 const ctx={document:{getElementById:k=>elements[k],createElement:()=>({style:{}})},freshToken:async()=>kind==='expired'?null:'fixture',authorize:async()=>calls.push('authorize'),createGift:async()=>{calls.push('createGift');if(kind==='error')throw Error('track-readback 503');button.disabled=false;button.textContent='verified'},write:(k,v)=>writes.push({k,v}),WEEK:'2026-W40',Date};
 vm.createContext(ctx);vm.runInContext(deliver+';globalThis.callback='+callback[1],ctx);
 let rejection=null;try{ctx.callback();await new Promise(resolve=>setImmediate(resolve));}catch(e){rejection=e.message}
 return {button,elements,writes,calls,rejection};
}
// Capture an old callback rejection without allowing the process to crash.
const unhandled=[];process.on('unhandledRejection',e=>unhandled.push(e.message));
(async()=>{
 const error=await probe('error');
 if(process.argv.includes('--baseline')){
  assert(unhandled.includes('track-readback 503'));
  assert.equal(error.button.disabled,true);assert.equal(error.elements['delivery-error'],undefined);
  const expired=await probe('expired');assert(!expired.calls.includes('authorize'));assert.equal(expired.button.disabled,true);
  console.log(JSON.stringify({oldFailureReproduced:true,unhandledError:unhandled[0],expiredTokenLeftDisabled:true}));return;
 }
 assert.equal(unhandled.length,0);assert.equal(error.button.disabled,false);
 assert.equal(error.button.textContent,'Opnieuw proberen met Spotify');assert.match(error.elements['delivery-error'].textContent,/track-readback 503/);
 assert.equal(error.writes.length,1);assert.equal(error.writes[0].k,'bmd-delivery-error-2026-W40');
 const expired=await probe('expired');assert.deepEqual(expired.calls,['authorize']);
 const ok=await probe('ok');assert.deepEqual(ok.calls,['createGift']);assert.equal(ok.button.textContent,'verified');assert.equal(ok.writes.length,0);
 console.log(JSON.stringify({pass:true,cases:['automatic callback error shows retry and saves diagnostic','expired callback token reauthorizes','successful callback delivers once'],spotifyWrites:0}));
})().catch(e=>{console.error(e);process.exitCode=1});
