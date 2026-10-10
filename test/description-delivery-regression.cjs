'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('./music-dna-week-delivery-v1.js');
const template=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/week-publication-manifest-2026-41.json')));
const asset=fs.readFileSync(path.join(__dirname,'../',template.artwork.assetId));
const uris=Array.from({length:21},(_,i)=>'spotify:track:'+String(i+1).padStart(22,'0'));
async function attempt(mode){
 const manifest=structuredClone(template);manifest.freeze={orderedTrackIds:uris.map(u=>u.slice(14))};
 if(mode==='missing')delete manifest.gemstone.editorialText;
 if(mode==='long')manifest.gemstone.editorialText='x'.repeat(301);
 let description=mode==='already-set'?template.gemstone.editorialText:'',reads=0;const writes=[];
 const fetch=async(url,o={})=>{
  if(url.endsWith('/items?limit=50')){reads++;return {ok:true,json:async()=>({items:(mode==='initial-order'||(mode==='changed-after'&&reads>1)?uris.slice().reverse():uris).map(uri=>({item:{uri}})),next:null})};}
  if(url.startsWith('../'))return {ok:true,blob:async()=>new Blob([asset],{type:'image/jpeg'})};
  if(o.method==='PUT'){
   writes.push({url,body:o.body});
   if(!url.endsWith('/images')){
    assert.deepEqual(Object.keys(JSON.parse(o.body)),['description']);
    if(mode==='forbidden')return {ok:false,status:403};
    if(mode!=='stale-readback')description=JSON.parse(o.body).description;
   }
   return {ok:true};
  }
  if(url.endsWith('/images'))return {ok:true,json:async()=>[{url:'mock-cover'}]};
  if(url.endsWith('?fields=description'))return {ok:true,json:async()=>({description})};
  throw Error('unexpected request '+url);
 };
 try{return {receipt:await D.verifyAndAttach({fetch,token:'mock',playlistId:'mock',uris,manifest}),writes,reads};}
 catch(error){return {error,writes,reads};}
}
(async()=>{
 let r=await attempt('success');assert(!r.error);assert.equal(r.receipt.descriptionReadback,true);assert.equal(r.receipt.descriptionUpdated,true);assert.equal(r.receipt.description,template.gemstone.editorialText);assert.equal(r.reads,2);assert.equal(r.writes.length,2);
 r=await attempt('already-set');assert(!r.error);assert.equal(r.receipt.descriptionUpdated,false);assert.equal(r.writes.length,1);
 for(const [mode,message] of [['initial-order','track-readback-order'],['missing','description-missing'],['long','description-too-long']]){r=await attempt(mode);assert.match(r.error.message,new RegExp(message));assert.equal(r.writes.length,0);}
 for(const [mode,message] of [['forbidden','description-update 403'],['stale-readback','description-readback-mismatch'],['changed-after','track-readback-order']]){r=await attempt(mode);assert.match(r.error.message,new RegExp(message));assert.equal(r.receipt,undefined);}
 console.log('PASS: metadata-only description write, exact readback, repeat description skipped, preflight and permission failures, concurrent track changes rejected. Mock Spotify only.');
})().catch(e=>{console.error(e);process.exitCode=1});
