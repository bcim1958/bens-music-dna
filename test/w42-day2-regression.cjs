'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const {boot}=require('./w41-daily-regression.cjs');
const BASE='bmd-week-2026-W42-day2',date='2026-10-12T13:00:00+02:00';
const ids=['7ef1yxmLkmfnLBSzlgAiUj','125m8ZbcZOYBukLKEj8qF7','1nyW51X8LGzUD3Vaq34SsK'],official=ids.map(id=>'pilot-'+id);
const d1=['0290eeW1DvuplJkqwhErTL','068KPJISmxyjh0pdetMKdP','65k71e3Z4ZY6JhXSsz6spz'].map(id=>'pilot-'+id);
const r1=['0tv2Vj73NTUs0FbUoHFOdZ','1bMV1Dw8B2feFudpLAdZQ8'].map(id=>'pilot-'+id);
function fixture(extra={}){return new Map(Object.entries({
 'bmd-week-2026-W41-day6-v1':{old:{rating:'raak',ratedAt:'2026-10-09'}},
 'bmd-positive-playlist-history-v1':{version:1,weeks:{'2026-W41':{ids:['prior'],spotifyTrackIds:['0000000000000000000000']}}},
 'bmd-delivery-2026-W41-v1':{id:'existing-playlist',status:'playlist-verified'},
 'bmd-week-2026-W42-day1-selection-v1':{ids:d1},
 'bmd-week-2026-W42-day1-v1':Object.fromEntries(d1.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11T12:00:00Z'}])),
 'bmd-week-2026-W42-day1-reserve-selection-v1':{ids:r1},
 'bmd-week-2026-W42-day1-reserve-v1':Object.fromEntries(r1.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11T12:00:00Z',meter:false}])),
 ...extra}).map(([k,v])=>[k,JSON.stringify(v)]));}
function preserve(before,after){for(const [k,v] of before)if(/^(bmd-week-|bmd-delivery-|bmd-positive-playlist-history)/.test(k))assert.equal(after.get(k),v,k);}
function elements(n){return [n,...(n.children||[]).flatMap(elements)];}
(async()=>{
 const store=fixture(),before=new Map(store),b=await boot('daily.html',store,date);
 assert.deepEqual(b.read(BASE+'-selection-v1').ids,official,b.nodes.screen.innerHTML);
 assert.equal(b.read(BASE+'-v1'),null);assert.equal(b.read(BASE+'-reserve-selection-v1'),null);preserve(before,store);
 const bank=b.read('bmd-positive-bank-v1');assert(r1.every(id=>bank.items[id].playlistUses===0));
 const frozen=store.get(BASE+'-selection-v1');await boot('daily.html',store,date);assert.equal(store.get(BASE+'-selection-v1'),frozen);
 for(const [label,value] of [['❤️ RAAK','raak'],['👍 GOED','goed'],['😐 TERUGKOMEN','twijfel'],['👎 NIET','nee']]){
  const s=fixture(),p=await boot('daily.html',s,date),prior=new Map(s),oldBank=p.read('bmd-positive-bank-v1');
  p.nodes.screen.children.find(n=>n.className==='card').onclick();await elements(p.nodes.screen).find(n=>n.textContent===label).onclick();
  assert.equal(p.read(BASE+'-v1')[official[0]].rating,value);assert.equal(p.read(BASE+'-v1')[official[0]].meter,true);
  assert.equal(!!p.read('bmd-positive-bank-v1').items[official[0]],['raak','goed'].includes(value));
  for(const id of r1){const old=oldBank.items[id],now=p.read('bmd-positive-bank-v1').items[id];assert.equal(now.firstPositiveAt,old.firstPositiveAt);assert.equal(now.playlistUses,old.playlistUses);assert.equal(now.lastPlaylistWeek,old.lastPlaylistWeek);}
  preserve(prior,s);const rating=s.get(BASE+'-v1');await boot('daily.html',s,date);assert.equal(s.get(BASE+'-v1'),rating);
 }
 // All three actual rating handlers complete day 2 without creating a reserve or day 3.
 for(let i=0;i<3;i++){const p=await boot('daily.html',store,date);p.nodes.screen.children.find(n=>n.className==='card'&&n.children.some(c=>c.textContent===p.c.MUSIC_DNA_W42_CANDIDATES.tracks[official[i]].identity.title)).onclick();await elements(p.nodes.screen).find(n=>n.textContent==='👍 GOED').onclick();}
 for(let day=13;day<=17;day++){const p=await boot('daily.html',store,`2026-10-${day}T13:00:00+02:00`);assert.equal(p.read('bmd-week-2026-W42-day3-selection-v1'),null);assert.equal(p.c.location.href,undefined);assert(elements(p.nodes.screen).some(n=>n.textContent.includes('volgende dag')));}
 preserve(before,store);
 // Every target identity is blocked under aliases, URL/URI, title normalization and bank-only history.
 for(const id of ids)for(const extra of [
  {'bmd-week-2026-W41-day5-selection-v1':{ids:['external-'+id]}},
  {'bmd-positive-playlist-history-v1':{weeks:{'2026-W41':{spotifyTrackIds:[id]}}}},
  {'bmd-learning-v1':{signals:{alias:{rating:'nee',spotifyUrl:'spotify:track:'+id}}}}
 ]){const s=fixture(extra),prev=new Map(s),p=await boot('daily.html',s,date);assert.equal(p.read(BASE+'-selection-v1'),null);preserve(prev,s);assert.match(p.nodes.screen.innerHTML,/historie/);}
 const titleConflict=fixture({'bmd-learning-v1':{signals:{alias:{rating:'nee',artist:'FRIEDBERG',title:'\u2060I Sometimes Do (But Mostly Might)'}}}});const conflict=await boot('daily.html',titleConflict,date);assert.equal(conflict.read(BASE+'-selection-v1'),null);
 for(const extra of [{[BASE+'-selection-v1']:{ids:['unknown-1','unknown-2','unknown-3']}},{[BASE+'-v1']:{orphan:{rating:'raak'}}},{[BASE+'-reserve-v1']:{orphan:{rating:'goed'}}}]){const s=fixture(extra),prev=new Map(s);await boot('daily.html',s,date);preserve(prev,s);assert.equal(s.has(BASE+'-selection-v1'),Object.hasOwn(extra,BASE+'-selection-v1'));}
 // Startup must preserve bank-only entries and inconsistent consumption before legacy sync.
 for(const extra of [
  {'bmd-positive-bank-v1':{items:{orphan:{rating:'goed',firstPositiveAt:'2026-09-01',playlistUses:1}}}},
  {'bmd-positive-bank-v1':{items:{prior:{rating:'goed',firstPositiveAt:'2026-09-01',playlistUses:2}}},'bmd-learning-v1':{signals:{prior:{rating:'goed'}}}},
  {'bmd-positive-bank-v1':{items:{prior:{rating:'goed',firstPositiveAt:'2026-09-01',playlistUses:0}}},'bmd-learning-v1':{signals:{prior:{rating:'goed'}}}}
 ]){const s=fixture(extra),prev=new Map(s),p=await boot('daily.html',s,date);assert.equal(p.read(BASE+'-selection-v1'),null);assert.equal(s.get('bmd-positive-bank-v1'),prev.get('bmd-positive-bank-v1'));assert.equal(s.get('bmd-learning-v1'),prev.get('bmd-learning-v1'));preserve(prev,s);}
 // Direct selector checks isolate preflight from unrelated legacy startup hydration.
 const s=fixture(),p=await boot('daily.html',s,date),c=p.c,catalog=c.MUSIC_DNA_W42_CANDIDATES;
 s.delete(BASE+'-selection-v1');catalog.tracks['same-artist']={...catalog.tracks[official[0]],spotifyUrl:'https://open.spotify.com/track/1111111111111111111111'};
 s.set('bmd-week-2026-W42-day1-reserve-selection-v1',JSON.stringify({ids:['same-artist']}));
 assert.throws(()=>c.MUSIC_DNA_PREPARED_DAY.selection({key:'2026-W42',preparedThroughDay:2},catalog,2,false,0),/artiest/);assert(!s.has(BASE+'-selection-v1'));
 const cfg=vm.runInContext("MUSIC_DNA_WEEKS.get('2026-W42')",c);assert.equal(cfg.preparedThroughDay,2);assert.equal(cfg.delivery,undefined);assert.equal(cfg.automaticGift,undefined);
 console.log('PASS: exact day 2; four rating handlers; resume; no fabricated ratings/reserves; day1/W41 receipts preserved; reserve FIFO timestamps/use unchanged; recording aliases and same-week artists blocked; orphan/unknown data preserved; day3-7 and Saturday blocked. Spotify writes=0.');
})().catch(e=>{console.error(e);process.exitCode=1});
