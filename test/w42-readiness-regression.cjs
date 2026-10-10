'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const {audit}=require('../scripts/check-w42-readiness.cjs');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'music-dna-w42-readiness-'));
try{
 const file=path.join(temp,'fixture.json'),snapshot={exportedAt:'synthetic-fixture',storage:{}};fs.writeFileSync(file,JSON.stringify(snapshot));
 const empty=audit(file);assert.equal(empty.poolTracks,456);assert.equal(empty.verdict,'NO-GO');assert.equal(empty.registeredReady,false);
 assert(empty.blockingReasons.some(x=>x.includes('manifest absent')));assert(empty.blockingReasons.some(x=>x.includes('release absent')));
 const id=empty.plan.runs[0].official[0];snapshot.storage['bmd-week-2026-W41-day1-selection-v1']={ids:[id,'missing-fixture-track']};
 fs.writeFileSync(file,JSON.stringify(snapshot));const before=fs.readFileSync(file,'utf8'),historical=audit(file);
 assert(!historical.plan.runs.flatMap(r=>r.official.concat(r.reserve)).includes(id));
 assert.deepEqual(historical.unresolvedHistoricalIds,['missing-fixture-track']);assert(historical.blockingReasons.includes('historical candidate identities unresolved'));
 assert.equal(fs.readFileSync(file,'utf8'),before);assert.equal(historical.spotifyWrites,0);assert.equal(historical.endToEndProven,false);
 console.log('PASS: read-only W42 audit respects historical offers and unknown identities; candidate upper bound cannot release missing inputs; source snapshot preserved.');
}finally{fs.rmSync(temp,{recursive:true,force:true});}
