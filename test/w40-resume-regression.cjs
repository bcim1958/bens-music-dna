'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'zaterdagcadeau.html'),'utf8');
const inspect=source.slice(source.indexOf('async function playlistUris('),source.indexOf('function sameIds('));
const same=source.slice(source.indexOf('function sameIds('),source.indexOf('async function prepareRuntimeProof('));
const create=source.slice(source.indexOf('async function createGift('),source.indexOf('async function completeDelivery('));
const ids=Array.from({length:21},(_,i)=>'fixture-'+i),uris=ids.map((_,i)=>'spotify:track:'+String(i+1).padStart(22,'0'));
async function probe(shape){
 const calls=[],complete=[],writes=[];
 const items=uris.map(uri=>shape==='legacy'?{track:{uri}}:{item:{uri}});
 if(shape==='invalid')items[4]={item:null};
 const ctx={CFG:{delivery:{releasePath:'release',manifestPath:'manifest',museumPath:'museum'}},YEAR_LABEL:'2026',WEEK_LABEL:'W40',WEEK:'2026-W40',PLAYLIST_NAME:'Ontdek DNA #2026-40',DELIVERY:'delivery',GIFT:{ids},spotifyPayloadProof:()=>({ok:true,ids,uris}),validateGift:()=>({ok:true}),read:()=>({id:'existing',url:'https://open.spotify.com/playlist/existing',ids,status:'created'}),write:(k,v)=>writes.push({k,v}),completeDelivery:async(id)=>complete.push(id),spotifyFailure:async()=>Error('inspect-failure'),sessionStorage:{removeItem(){}},authorize:async()=>{},location:{},fetch:async(url,options={})=>{calls.push({url,method:options.method||'GET'});if(url==='release')return {ok:true,json:async()=>({simulationGreen:true,weekId:'2026-40',orderedSpotifyUris:uris})};return {ok:true,status:200,json:async()=>({items,next:shape==='paginated'?'next-page':null})}}};
 vm.createContext(ctx);vm.runInContext(inspect+same+create,ctx);let error;
 try{await ctx.createGift('fixture',{disabled:true,textContent:''})}catch(e){error=e.message}
 return {calls,complete,writes,error};
}
(async()=>{
 if(process.argv.includes('--baseline')){const r=await probe('legacy');assert(r.calls.some(c=>c.method==='POST'));console.log(JSON.stringify({oldDuplicateAppendReproduced:true,mutations:r.calls.filter(c=>c.method!=='GET')}));return;}
 for(const shape of ['modern','legacy']){const r=await probe(shape);assert(!r.error,r.error);assert.deepEqual(r.complete,['existing']);assert(r.calls.every(c=>c.method==='GET'));assert.equal(r.writes.length,0);}
 for(const shape of ['invalid','paginated']){const r=await probe(shape);assert(r.error,'incomplete response must stop');assert(r.calls.every(c=>c.method==='GET'));assert.equal(r.complete.length,0);}
 console.log(JSON.stringify({pass:true,cases:['modern response resumes same playlist without track writes','legacy response resumes same playlist without duplicate append','invalid row stops before mutation','pagination stops before mutation'],spotifyWrites:0}));
})().catch(e=>{console.error(e);process.exitCode=1});
