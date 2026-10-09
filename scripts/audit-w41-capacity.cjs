'use strict';
// Offline audit only. Full personal snapshot stays local; nothing is persisted.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const {boot}=require('../test/w41-daily-regression.cjs');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const credits=s=>String(s||'').split(';').map(norm).filter(Boolean);
async function audit(file){
 const raw=fs.readFileSync(file),input=JSON.parse(raw),store=new Map(Object.entries(input.storage).map(([k,v])=>[k,typeof v==='string'?v:JSON.stringify(v)]));
 const prior=new Map(store),b=await boot('daily.html',store,'2026-10-10T08:00:00+02:00'),e=b.c.MUSIC_DNA_DISCOVERY;
 const catalogs={};
 for(const f of fs.readdirSync('test').filter(f=>/^music-dna-(?:candidates-w|external-candidates|w41-candidates).*\.js$/.test(f)).sort()){
  vm.runInContext(fs.readFileSync('test/'+f,'utf8'),b.c,{filename:f});
 }
 for(const name of ['MUSIC_DNA_W35_CANDIDATES','MUSIC_DNA_W36_CANDIDATES','MUSIC_DNA_W37_CANDIDATES','MUSIC_DNA_W38_CANDIDATES','MUSIC_DNA_W39_CANDIDATES','MUSIC_DNA_W40_CANDIDATES','MUSIC_DNA_EXTERNAL_CANDIDATES','MUSIC_DNA_W41_CANDIDATES']){
  const obj=vm.runInContext('typeof '+name+'!=="undefined"?'+name+':null',b.c);if(obj?.tracks)catalogs[name]=obj.tracks;
 }
 const pool=Object.assign({},...Object.values(catalogs)),ctx=e.context(pool),used=new Set(),unresolved=[];
 for(const [k,v] of prior)if(/^bmd-week-2026-W41-day[1-7]-(?:reserve-)?selection-v1$/.test(k)){
  const q=JSON.parse(v);for(const id of (q.ids||(q.id?[q.id]:[])).concat(q.retiredIds||[])){
   const t=pool[id];if(!t){unresolved.push(id);continue;}credits(t.identity.artist).forEach(a=>used.add(a));
  }
 }
 const rows=e.rank(pool,{context:ctx}),eligible=rows.filter(r=>!credits(r.track.identity.artist).some(a=>used.has(a)));
 const summary={};for(const [id,t] of Object.entries(pool)){
  const a=t.identity.artist,s=summary[a]||(summary[a]={tracks:0,weekUsed:credits(a).some(x=>used.has(x)),eligible:0,reasons:{}});s.tracks++;
  if(eligible.some(r=>r.id===id)){s.eligible++;continue;}
  const ev=t.discoveryEvidence,reasons=[];
  if(s.weekUsed)reasons.push('artist-already-offered-W41');
  if(ctx.seen.has(id))reasons.push('historical-id');
  const sid=String(t.spotifyUrl||t.spotifyUri||'').match(/track[:/]([A-Za-z0-9]{22})/)?.[1];
  if(ctx.seenSpotify.has(sid))reasons.push('historical-spotify');
  if(ctx.seenKeys.has(norm(a)+'|'+norm(t.identity.title)))reasons.push('historical-title');
  const origin=e.origin(t,ctx);if(origin==='OWN_DNA')reasons.push('own-library');
  if(!e.fit(t,ctx).eligible)reasons.push('fit-or-negative-artist');
  if(!ev||ev.recording!=='original-studio'||!ev.sources||ev.sources.length<2||ev.spotify?.playable!==true||!sid)reasons.push('missing-recording-source-spotify-evidence');
  if(origin==='KNOWN_ARTIST_NEW_TRACK'&&credits(a).some(x=>b.c.MUSIC_DNA_DISCOVERY_REFERENCE.artists.includes(x))&&ev?.fullLibraryExclusionVerified!==true)reasons.push('missing-full-library-exclusion');
  if(!reasons.length)reasons.push('other-selector-block');for(const reason of reasons)s.reasons[reason]=(s.reasons[reason]||0)+1;
 }
 for(const [k,v] of prior)if(/^bmd-week-/.test(k))assert.equal(store.get(k),v,'Historical record changed');
 assert.deepEqual(fs.readFileSync(file),raw);
 const bank=JSON.parse(prior.get('bmd-positive-bank-v1')||'{"items":{}}').items||{};
 const result={snapshotSha256:crypto.createHash('sha256').update(raw).digest('hex'),exportedAt:input.exportedAt,catalogCounts:Object.fromEntries(Object.entries(catalogs).map(([n,p])=>[n,Object.keys(p).length])),poolTracks:Object.keys(pool).length,unresolvedWeekIds:unresolved,usedArtistCredits:used.size,day7Created:!!b.read('bmd-week-2026-W41-day7-selection-v1'),eligibleArtists:[...new Set(eligible.map(r=>r.track.identity.artist))],availableBatch:e.chooseBatch(pool,{size:3,context:ctx,excludeArtists:[...used]}).map(r=>({id:r.id,artist:r.track.identity.artist,origin:r.origin})),artists:summary,storedBank:{items:Object.keys(bank).length,alreadySeen:Object.keys(bank).filter(id=>ctx.seen.has(id)).length,notSeen:Object.keys(bank).filter(id=>!ctx.seen.has(id))},verdict:eligible.length&&new Set(eligible.map(r=>r.track.identity.artist)).size>=3&&unresolved.length===0?'CAPACITY-CANDIDATE-FOUND':'NO-GO',scope:'Existing repository catalogs plus actual saved history; no library completeness proof inferred from absence; no FIFO promotion into new offers; no writes/network/ratings/publication.'};
 return result;
}
module.exports={audit};
if(require.main===module)audit(process.argv[2]).then(r=>{console.log(JSON.stringify(r,null,2));if(r.verdict==='NO-GO')process.exitCode=2;}).catch(e=>{console.error(e);process.exitCode=1;});
