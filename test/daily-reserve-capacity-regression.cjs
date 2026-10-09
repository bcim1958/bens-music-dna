'use strict';
const assert=require('node:assert/strict'),{boot}=require('./w41-daily-regression.cjs'),S=require('../scripts/saturday-simulator.cjs');
(async()=>{
 const e=S.sandbox();for(const f of ['music-dna-discovery-reference-v1.js','music-dna-discovery-v1.js','music-dna-w41-candidates-v1.js'])e.load(f);
 const tracks=e.ctx.MUSIC_DNA_W41_CANDIDATES.tracks,plan=e.ctx.MUSIC_DNA_DISCOVERY.weekReadiness(tracks);
 const ids=Array.from(plan.runs[0].official),officialArtists=new Set(plan.runs.flatMap(d=>d.official).map(id=>tracks[id].identity.artist)),spare=Array.from(new Map(Object.entries(tracks).filter(([id,t])=>!officialArtists.has(t.identity.artist)).map(([id,t])=>[t.identity.artist,id])).values());
 assert.equal(spare.length,3);
 const key='bmd-week-2026-W41-day1',selection={ids,discovery:Object.fromEntries(ids.map(id=>[id,{origin:'NEW_ARTIST'}]))},ratings=Object.fromEntries(ids.map(id=>[id,{rating:'goed',ratedAt:'2026-10-04T10:00:00+02:00'}]));
 const retired={ids:[],retiredIds:spare};
 const store=new Map([[key+'-selection-v1',JSON.stringify(selection)],[key+'-v1',JSON.stringify(ratings)],[key+'-reserve-selection-v1',JSON.stringify(retired)]]);
 const old=new Map(store),page=await boot('daily.html',store,'2026-10-05T10:00:00+02:00');
 assert(store.has('bmd-week-2026-W41-day2-selection-v1'),'no extra reserve capacity must allow the next official day');
 assert.equal(page.c.MUSIC_DNA_POSITIVE_BANK.inventory('2026-W41').healthy,false,'low stock exercises optional-reserve exhaustion');
 for(const [k,v] of old)assert.equal(store.get(k),v,'existing choices, retired choices and ratings preserved');
 const before=store.get('bmd-week-2026-W41-day2-selection-v1');await boot('daily.html',store,'2026-10-05T11:00:00+02:00');assert.equal(store.get('bmd-week-2026-W41-day2-selection-v1'),before);
 console.log('PASS: low reserve stock with no surplus eligible artists advances to day 2; stored and retired choices preserved; restart remains stable.');
})().catch(e=>{console.error(e);process.exitCode=1});
