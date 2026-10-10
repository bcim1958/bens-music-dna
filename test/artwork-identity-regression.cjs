'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('./music-dna-week-delivery-v1.js');
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/week-publication-manifest-2026-41.json')));
const source=fs.readFileSync(path.join(__dirname,'../',manifest.artwork.assetId));
const uris=Array.from({length:21},(_,i)=>'spotify:track:'+String(i+1).padStart(22,'0'));
manifest.freeze={orderedTrackIds:uris.map(u=>u.replace('spotify:track:',''))};
async function attempt(bytes,m=manifest){
 let writes=0;
 const fetch=async(url,o={})=>{
  if(url.endsWith('?fields=description'))return {ok:true,json:async()=>({description:manifest.gemstone.editorialText})};if(url.endsWith('/items?limit=50'))return {ok:true,json:async()=>({items:uris.map(uri=>({item:{uri}})),next:null})};
  if(url.startsWith('../'))return {ok:true,blob:async()=>new Blob([bytes],{type:'image/jpeg'})};
  if(o.method==='PUT'){writes++;return {ok:true};}
  if(url.endsWith('/images'))return {ok:true,json:async()=>[{url:'mock-image'}]};
  throw Error('unexpected request');
 };
 try{return {receipt:await D.verifyAndAttach({fetch,token:'fixture',playlistId:'fixture',uris,manifest:m}),writes};}
 catch(error){return {error,writes};}
}
(async()=>{
 let r=await attempt(source);assert.equal(r.writes,1);assert.equal(r.receipt.artworkReadback,true);assert.equal(r.receipt.artworkSourceSha256,manifest.artwork.sha256);
 const changed=Buffer.from(source);changed[changed.length-20]^=1;
 r=await attempt(changed);assert.equal(r.writes,0,'changed artwork must stop before upload');assert.match(r.error.message,/artwork-hash-mismatch/);
 const missing=structuredClone(manifest);delete missing.artwork.sha256;
 r=await attempt(source,missing);assert.equal(r.writes,0);assert.match(r.error.message,/artwork-hash-missing/);
 const malformed=structuredClone(manifest);malformed.artwork.sha256='wrong';
 r=await attempt(source,malformed);assert.equal(r.writes,0);assert.match(r.error.message,/artwork-hash-missing/);
 console.log('PASS: approved JPEG uploads; artwork changed after simulation and missing/malformed hashes stop before any Spotify write. Mock delivery only.');
})().catch(e=>{console.error(e);process.exitCode=1});
