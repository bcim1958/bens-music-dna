'use strict';
// Execute the actual publication functions with API mocks. No Spotify traffic.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('test/zaterdagcadeau.html','utf8');
const create=html.slice(html.indexOf('async function createGift('),html.indexOf('async function completeDelivery('));
const complete=html.slice(html.indexOf('async function completeDelivery('),html.indexOf('function random(',html.indexOf('async function completeDelivery(')));
const ids=Array.from({length:21},(_,i)=>'synthetic-'+i),uris=ids.map((_,i)=>'spotify:track:'+String(i).padStart(22,'0'));
function context(fail){
 const events=[],c={CFG:{delivery:{releasePath:'release',manifestPath:'manifest',museumPath:'museum'}},WEEK:'2026-W42',WEEK_LABEL:'W42',YEAR_LABEL:'2026',PLAYLIST_NAME:'Synthetic',DISPLAY:'Synthetic W42',DELIVERY:'delivery',GIFT:{ids},Date,location:{},sameIds:(a,b)=>JSON.stringify(a)===JSON.stringify(b),spotifyPayloadProof:()=>({ok:true,uris}),validateGift:()=>({ok:true}),read:()=>null,write:(k,v)=>events.push('stage:'+k+':'+(v.status||'')),MUSIC_DNA_GIFT_STORAGE:{checkpoint:async()=>{events.push('checkpoint');if(events.filter(e=>e==='checkpoint').length===fail)throw Error('synthetic-checkpoint-abort');}},fetch:async(url,o={})=>{events.push('api:'+(o.method||'GET')+':'+url);return {ok:true,json:async()=>url==='release'?{simulationGreen:true,weekId:'2026-42',orderedSpotifyUris:uris}:{id:'synthetic-playlist',external_urls:{spotify:'https://example.invalid/synthetic'}}};},completeDelivery:async()=>events.push('complete')};
 c.window=c;vm.createContext(c);return {c,events};
}
(async()=>{
 for(const fail of [null,1,2]){const {c,events}=context(fail);vm.runInContext(create,c);let error;try{await c.createGift('synthetic-token',{});}catch(e){error=e.message;}
  const writes=events.filter(e=>e.startsWith('api:POST'));
  if(fail===1){assert.equal(writes.length,0);assert.match(error,/abort/);}
  if(fail===2){assert.equal(writes.length,1);assert(!events.some(e=>/api:POST:.*\/items$/.test(e)));assert.match(error,/abort/);assert(!events.includes('complete'));}
  if(!fail){assert.equal(writes.length,2);const receipt=events.indexOf('stage:delivery:created'),checkpoint=events.indexOf('checkpoint',receipt),insert=events.findIndex(e=>/api:POST:.*\/items$/.test(e));assert(receipt<checkpoint&&checkpoint<insert);assert(events.includes('complete'));}
 }
 assert(complete.includes('async function completeDelivery(')&&complete.includes('week-delivery-route-missing'));
 for(const failure of [null,'readback','history','checkpoint']){
  const {c,events}=context();const button={disabled:true,textContent:'pending',parentNode:{style:{},appendChild(){}}};
  Object.assign(c,{freshToken:async()=> 'synthetic-token',loadScript:async()=>{},read:()=>({simulationGreen:true,orderedSpotifyUris:uris,manifest:{weekId:'2026-42',freeze:{orderedTrackIds:ids}}}),MUSIC_DNA_WEEK_DELIVERY_V1:{verifyAndAttach:async()=>{events.push('readback');if(failure==='readback')throw Error('synthetic-readback');return {synthetic:true};}},MUSIC_DNA_POSITIVE_BANK:{commitSaturdayPlaylist:()=>{events.push('history');return failure!=='history';}},document:{createElement:()=>({style:{}})}});
  c.MUSIC_DNA_GIFT_STORAGE.checkpoint=async()=>{events.push('checkpoint');if(failure==='checkpoint')throw Error('synthetic-checkpoint');};
  vm.runInContext(complete,c);let error;try{await c.completeDelivery('synthetic','https://example.invalid/synthetic',button);}catch(e){error=e.message;}
  if(!failure){assert.equal(error,undefined);assert.equal(button.disabled,false);assert(events.indexOf('readback')<events.indexOf('history'));assert(events.indexOf('history')<events.indexOf('checkpoint'));}
  else{assert(error);assert.equal(button.disabled,true);assert(!button.textContent.includes('open Spotify'));}
  if(failure==='readback'){assert(!events.includes('history'));assert(!events.some(e=>e.startsWith('stage:')));}
  if(failure==='history')assert.equal(c.MUSIC_DNA_STORAGE_BLOCKED,true);
 }
 console.log('PASS: actual publication functions checkpoint before writes, persist creation before insertion and acknowledge receipt/FIFO only after readback and durable completion. API mocks; Spotify writes=0.');
})().catch(e=>{console.error(e);process.exitCode=1});
