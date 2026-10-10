'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const {boot}=require('./w41-daily-regression.cjs');
const weeks=fs.readFileSync('test/music-dna-weeks-v1.js','utf8');
const ctx=vm.createContext({Date});vm.runInContext(weeks,ctx);const config=vm.runInContext('MUSIC_DNA_WEEKS',ctx),w=config.get('2026-W42');
assert.equal(w.start.getDay(),0);assert.equal(w.start.getDate(),11);assert.equal(w.end.getDay(),0);assert.equal(w.end.getDate(),18);
assert.equal(w.endText,'zaterdag 17 oktober 2026');assert.equal(w.ready,false);assert.equal(w.automaticGift,true);
assert.equal(config.resolve(new Date(2026,9,11)),null);assert.equal(config.resolve(new Date(2026,9,17)),null);
// Synthetic candidate reuse is limited to this test. It is not a W42 inventory approval.
function fixture(c){vm.runInContext("const fixture=MUSIC_DNA_WEEKS.get('2026-W42');fixture.ready=true;fixture.candidateGlobal='MUSIC_DNA_W41_CANDIDATES';fixture.candidateFiles=['music-dna-w41-candidates-v1.js'];",c);}
(async()=>{
 const store=new Map([['bmd-week-2026-W41-day1-v1',JSON.stringify({historical:{rating:'raak'}})],['bmd-delivery-2026-W41-v1',JSON.stringify({id:'existing-W41',status:'playlist-verified'})]]),history=new Map(store);
 const artists=[];
 for(let day=1;day<=7;day++){
  const date='2026-10-'+String(10+day).padStart(2,'0')+'T10:00:00+02:00',page=await boot('daily.html',store,date,fixture),key='bmd-week-2026-W42-day'+day;
  const q=page.read(key+'-selection-v1');assert(q,day+": "+page.nodes.screen.innerHTML);assert.equal(q.ids.length,3);for(const id of q.ids)artists.push(page.c.MUSIC_DNA_W41_CANDIDATES.tracks[id].identity.artist);
  const before=store.get(key+'-selection-v1');await boot('daily.html',store,date,fixture);assert.equal(store.get(key+'-selection-v1'),before);
  if(day<7){store.set(key+'-v1',JSON.stringify(Object.fromEntries(q.ids.map(id=>[id,{rating:'goed',ratedAt:date}]))));const reserve=page.read(key+'-reserve-selection-v1');if(reserve)store.set(key+'-reserve-v1',JSON.stringify(Object.fromEntries(reserve.ids.map(id=>[id,{rating:'goed',ratedAt:date}]))));}
  else {
   // Open final track and exercise the actual rating-button handler.
   store.set(key+'-v1',JSON.stringify(Object.fromEntries(q.ids.slice(0,2).map(id=>[id,{rating:'goed',ratedAt:date}]))));
   // An outstanding optional reserve must not hold back the official completion trigger.
   store.set(key+'-reserve-selection-v1',JSON.stringify({ids:[Object.keys(page.c.MUSIC_DNA_W41_CANDIDATES.tracks).find(id=>!q.ids.includes(id))]}));
   const ratingPage=await boot('daily.html',store,date,fixture);
   const finalCard=ratingPage.nodes.screen.children.find(x=>x.className==='card'&&x.children.some(y=>y.textContent===page.c.MUSIC_DNA_W41_CANDIDATES.tracks[q.ids[2]].identity.title));
   assert(finalCard);finalCard.onclick();const panel=ratingPage.nodes.screen.children.find(x=>x.children.some(y=>y.className==='ratings'));
   panel.children.find(x=>x.className==='ratings').children[1].onclick();
   assert.match(ratingPage.c.location.href,/week=2026-W42&automatic=1/);
   assert.equal(ratingPage.read(key+'-v1')[q.ids[2]].rating,'goed');
   assert.equal(store.has(key+'-reserve-v1'),false);
  }
 }
 assert.equal(new Set(artists).size,21);
 for(const [key,value] of history)assert.equal(store.get(key),value);
 const final=await boot('daily.html',store,'2026-10-17T12:00:00+02:00',fixture);assert.match(final.c.location.href,/automatic=1/);
 const blocked=new Map(history),b=await boot('daily.html',blocked,'2026-10-11T10:00:00+02:00');assert.equal(b.c.location.href,undefined);assert.equal(blocked.has('bmd-week-2026-W42-day1-selection-v1'),false);
 // Exercise the gift dispatch branch: automatic entry and OAuth return share guarded delivery;
 // no ordinary legacy entry or W41 preview gets an automatic Spotify request.
 const gift=fs.readFileSync('test/zaterdagcadeau.html','utf8'),dispatch=gift.slice(gift.indexOf("if(Q.get('preview')==='1'){previewGift();return;}"),gift.indexOf('catch(e){try{write(\'bmd-gift-error'));
 for(const [automatic,param,expected] of [[true,'1',true],[false,'1',false],[true,null,false]]){
  let opened=0,scheduled=0,sealed=0;const c={CFG:{automaticGift:automatic},Q:{get:k=>k==='automatic'?param:null},unpack:()=>opened++,setTimeout:()=>scheduled++,sealed:()=>sealed++};
  vm.runInNewContext('(function(){'+dispatch.slice(0,-1)+'})();',c);assert.equal(opened,expected?1:0);assert.equal(scheduled,expected?1:0);assert.equal(sealed,expected?0:1);
 }
 console.log('PASS: W42 Sunday–Saturday dates; blocked registration; seven synthetic daily sets; 21 unique artists; actual final rating routes immediately despite optional reserve; restart; W41 records preserved; automatic gift dispatch scoped. Spotify writes=0, endToEndProven=false.');
})().catch(e=>{console.error(e);process.exitCode=1});
