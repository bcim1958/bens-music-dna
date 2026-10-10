'use strict';
// Read-only, offline capacity audit. Never register/promote candidates or write device storage.
const fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const S=require('./saturday-simulator.cjs');
function audit(file){
 const raw=fs.readFileSync(file),input=JSON.parse(raw);if(!input.storage)throw Error('Expected exported storage');
 const e=S.sandbox(input.storage),before=JSON.stringify(e.data);
 e.ctx.MUSIC_DNA_LEARNING={read:()=>JSON.parse(e.ctx.localStorage.getItem('bmd-learning-v1')||'{"signals":{}}')};
 e.load('music-dna-discovery-reference-v1.js');e.load('music-dna-discovery-v1.js');e.load('music-dna-weeks-v1.js');
 for(const f of fs.readdirSync('test').filter(f=>/^music-dna-(?:candidates-w|external-candidates|w41-candidates).*\.js$/.test(f)).sort())e.load(f);
 const catalogs={};for(const name of ['MUSIC_DNA_W35_CANDIDATES','MUSIC_DNA_W36_CANDIDATES','MUSIC_DNA_W37_CANDIDATES','MUSIC_DNA_W38_CANDIDATES','MUSIC_DNA_W39_CANDIDATES','MUSIC_DNA_W40_CANDIDATES','MUSIC_DNA_EXTERNAL_CANDIDATES','MUSIC_DNA_W41_CANDIDATES']){
  const obj=vm.runInContext('typeof '+name+'!=="undefined"?'+name+':null',e.ctx);if(obj?.tracks)catalogs[name]=obj.tracks;
 }
 const pool=Object.assign({},...Object.values(catalogs)),api=e.ctx.MUSIC_DNA_DISCOVERY,context=api.context(pool),rank=api.rank(pool,{context}),plan=api.weekReadiness(pool,{context});
 const unresolved=[];for(const [key,value] of Object.entries(e.data))if(/^bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?selection-v1$/.test(key)){
  const q=JSON.parse(value);for(const id of (q.ids||(q.id?[q.id]:[])).concat(q.retiredIds||[]))if(!pool[id]&&!context.signals[id])unresolved.push(id);
 }
 const w=vm.runInContext("MUSIC_DNA_WEEKS.get('2026-W42')",e.ctx),result={snapshotExportedAt:input.exportedAt,snapshotSha256:crypto.createHash('sha256').update(raw).digest('hex'),week:'2026-W42',dates:'2026-10-11 through 2026-10-17',registeredReady:w?.ready===true,catalogCounts:Object.fromEntries(Object.entries(catalogs).map(([k,v])=>[k,Object.keys(v).length])),poolTracks:Object.keys(pool).length,eligibleTrackCount:rank.length,eligibleArtistCredits:[...new Set(rank.map(r=>r.track.identity.artist))],eligibleNewArtistCredits:[...new Set(rank.filter(r=>r.origin==='NEW_ARTIST').map(r=>r.track.identity.artist))],unresolvedHistoricalIds:[...new Set(unresolved)],plan,blockingReasons:[],spotifyWrites:0,endToEndProven:false,scope:'Existing catalogs with saved historical snapshot; not a current library or account availability check; no future ratings inferred.'};
 result.capacityDeficits={requiredDistinctOfficialArtists:21,availableDistinctArtistCredits:result.eligibleArtistCredits.length,requiredNewArtists:14,availableNewArtistCredits:result.eligibleNewArtistCredits.length};
 if(result.eligibleNewArtistCredits.length<14)result.blockingReasons.push('insufficient-new-artists: at least 14 needed for 2 per day');
 if(!w?.ready)result.blockingReasons.push('W42 not released: candidate registration and delivery inputs unverified');
 if(!plan.ready)result.blockingReasons.push(plan.reason);
 if(unresolved.length)result.blockingReasons.push('historical candidate identities unresolved');
 if(!fs.existsSync('data/week-publication-manifest-2026-42.json'))result.blockingReasons.push('W42 gemstone/artwork/publication manifest absent');
 if(!fs.existsSync('data/week-simulation-release-2026-42.json'))result.blockingReasons.push('W42 device simulation release absent');
 result.verdict=result.blockingReasons.length?'NO-GO':'CAPACITY-ONLY-PASS';
 assert.equal(JSON.stringify(e.data),before);assert.deepEqual(fs.readFileSync(file),raw);return result;
}
module.exports={audit};
if(require.main===module){try{const result=audit(process.argv[2]);console.log(JSON.stringify(result,null,2));if(result.verdict==='NO-GO')process.exitCode=2;}catch(e){console.error(e);process.exitCode=1;}}
