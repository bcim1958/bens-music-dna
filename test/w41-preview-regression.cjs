'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const P=require('./music-dna-w41-preview-v1.js'),{boot}=require('./w41-daily-regression.cjs');
(async()=>{
  const probe=await boot('daily.html',new Map(),'2026-10-10T11:00:00+02:00');
  const seen=new Set(),ids=Object.entries(probe.c.MUSIC_DNA_W41_CANDIDATES.tracks).filter(([id,t])=>{
    const artist=t.identity.artist;if(artist.includes(';')||seen.has(artist))return false;seen.add(artist);return true;
  }).slice(0,21).map(([id])=>id);assert.equal(ids.length,21);
  const store=new Map();for(let day=1;day<=6;day++){
    const selected=ids.slice((day-1)*3,day*3),key='bmd-week-2026-W41-day'+day;
    store.set(key+'-selection-v1',JSON.stringify({ids:selected}));
    store.set(key+'-v1',JSON.stringify(Object.fromEntries(selected.map(id=>[id,{rating:'goed',ratedAt:'2026-10-09T08:00:00Z'}]))));
  }
  store.set('bmd-week-2026-W41-day1-reserve-v1',JSON.stringify(Object.fromEntries(ids.slice(18).map(id=>[id,{rating:'raak',ratedAt:'2026-10-09T08:00:00Z'}]))));
  store.set('bmd-week-2026-W41-day1-reserve-selection-v1',JSON.stringify({ids:ids.slice(18)}));
  for(let day=2;day<=6;day++){
    store.set('bmd-week-2026-W41-day'+day+'-reserve-selection-v1',JSON.stringify({ids:[ids[0]]}));
    store.set('bmd-week-2026-W41-day'+day+'-reserve-v1',JSON.stringify({[ids[0]]:{rating:'goed',ratedAt:'2026-10-09T08:00:00Z'}}));
  }
  // Synthetic exhausted discovery pool forces the real day-7 capacity failure.
  const negatives=Object.fromEntries(Object.keys(probe.c.MUSIC_DNA_W41_CANDIDATES.tracks)
    .filter(id=>!ids.includes(id)).map(id=>[id,{rating:'nee',ratedAt:'2026-10-09T08:00:00Z'}]));
  store.set('bmd-week-2026-W41-day6-reserve-v1',JSON.stringify({[ids[0]]:{rating:'goed',ratedAt:'2026-10-09T08:00:00Z'},...negatives}));
  const ratings=new Map([...store].filter(([k])=>k.endsWith('-v1')&&!k.includes('selection')));
  const b=await boot('daily.html',store,'2026-10-10T11:00:00+02:00');
  assert.match(b.nodes.screen.innerHTML,/21 positieve nummers beschikbaar/);
  assert.match(b.nodes.screen.innerHTML,/Dag 7 is niet aangeboden en niet beoordeeld/);
  assert.equal(P.officialIds(b.c.localStorage,'2026-W40',new Date()),null);
  assert.equal(P.officialIds(b.c.localStorage,'2026-W41','2026-10-09T23:59:00+02:00'),null);
  assert.equal(P.officialIds(b.c.localStorage,'2026-W41','invalid'),null);
  const saved=store.get('bmd-week-2026-W41-day1-v1');store.delete('bmd-week-2026-W41-day1-v1');
  assert.equal(P.officialIds(b.c.localStorage,'2026-W41',new Date()),null);store.set('bmd-week-2026-W41-day1-v1',saved);
  store.set('bmd-week-2026-W41-day7-v1','{}');assert.equal(P.officialIds(b.c.localStorage,'2026-W41',new Date()),null);store.delete('bmd-week-2026-W41-day7-v1');
  b.c.URLSearchParams=URLSearchParams;b.c.location.search='?week=2026-W41&preview=1&spotify=ready';
  let requests=0;b.c.fetch=async()=>{requests++;throw Error('preview must not request Spotify');};
  const html=fs.readFileSync('test/zaterdagcadeau.html','utf8');
  for(const match of html.matchAll(/<script(?: src="([^"]+)")?[^>]*>(.*?)<\/script>/gs)){
    // Daily boot already loaded the shared modules in this browser fixture.
    if(!match[1])await vm.runInContext(match[2],b.c);
  }
  assert.match(b.nodes.screen.innerHTML,/Cadeauvoorstel/);
  assert.match(b.nodes.screen.innerHTML,/Deze lijst is nog niet gepubliceerd/);
  assert(!b.nodes.screen.innerHTML.includes('id="spotify"'));
  assert.equal(requests,0,'preview + Spotify callback parameter cannot trigger network');
  assert(!store.has('bmd-gift-2026-W41-v1'));
  assert(!store.has('bmd-delivery-2026-W41-v1'));
  assert(!store.has('bmd-week-2026-W41-day7-selection-v1'));
  for(const [key,value] of ratings)assert.equal(store.get(key),value);
  console.log('PASS: real daily/gift scripts show six-day preview, preserve ratings, reject wrong week/date/missing ratings/day7, block Spotify and delivery writes.');
})().catch(e=>{console.error(e);process.exitCode=1;});
