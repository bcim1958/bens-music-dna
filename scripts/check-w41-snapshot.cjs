'use strict';
// Actual page in an offline, in-memory browser fixture. No source export writes.
const fs=require('node:fs'),assert=require('node:assert/strict');
const {boot}=require('../test/w41-daily-regression.cjs');
(async()=>{
 const file=process.argv[2];if(!file)throw Error('Usage: node scripts/check-w41-snapshot.cjs snapshot.json');
 const raw=fs.readFileSync(file,'utf8'),input=JSON.parse(raw),store=new Map(Object.entries(input.storage).map(([k,v])=>[k,typeof v==='string'?v:JSON.stringify(v)])),prior=new Map(store);
 const b=await boot('daily.html',store,'2026-10-10T08:00:00+02:00'),p=b.c.MUSIC_DNA_W41_CANDIDATES.tracks,e=b.c.MUSIC_DNA_DISCOVERY;
 for(const [k,v] of prior)if(/^bmd-week-/.test(k))assert.equal(store.get(k),v,'historical day record changed '+k);
 const avoid=new Set();for(const [k,v] of prior)if(/^bmd-week-2026-W41-day[1-7]-(?:reserve-)?selection-v1$/.test(k)){const q=JSON.parse(v);for(const id of (q.ids||(q.id?[q.id]:[])).concat(q.retiredIds||[]))if(p[id])avoid.add(p[id].identity.artist);}
 const q=b.read('bmd-week-2026-W41-day7-selection-v1'),ctx=e.context(p),rank=e.rank(p),unused=[...new Set(Object.values(p).map(t=>t.identity.artist))].filter(a=>!avoid.has(a));
 const result={exportedAt:input.exportedAt,scope:'Hypothetical October 10 actual daily page boot; source file unchanged, no network, no generated ratings',day7Created:!!q,day7:q,screen:b.nodes.screen.innerHTML,usedArtistCount:avoid.size,unusedArtists:unused.map(artist=>({artist,origin:e.origin(Object.values(p).find(t=>t.identity.artist===artist),ctx),eligibleTracks:rank.filter(r=>r.track.identity.artist===artist).length})),availableDay7:e.chooseBatch(p,{size:3,excludeArtists:[...avoid]}).map(r=>({id:r.id,artist:r.track.identity.artist,origin:r.origin})),inventory:b.c.MUSIC_DNA_POSITIVE_BANK.inventory('2026-W41'),spotifyWrites:0,endToEndProven:false};
 assert.equal(fs.readFileSync(file,'utf8'),raw);console.log(JSON.stringify(result,null,2));if(!q)process.exitCode=2;
})().catch(e=>{console.error(e);process.exitCode=1});
