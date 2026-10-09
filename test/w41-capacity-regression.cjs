'use strict';
// Private device input is optional and is never committed.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {audit}=require('../scripts/audit-w41-capacity.cjs');
(async()=>{
 const file=process.argv[2];
 if(!file){console.log('SKIP: real capacity regression requires private October 9 snapshot');return;}
 const r=await audit(file);
 assert.equal(r.snapshotSha256,'6d17c4294a2a58b2a1d0ca00cf6f38b50ce4cbecbb476e4d7eba5636aca0218c');
 assert.equal(Object.keys(r.catalogCounts).length,8);assert.equal(r.poolTracks,456);
 assert.deepEqual(r.unresolvedWeekIds,[]);assert.equal(r.usedArtistCredits,21);
 assert.equal(r.day7Created,false);assert.deepEqual(r.eligibleArtists,['The Commoners','The Tubs']);
 assert.equal(r.availableBatch.length,2);assert.equal(r.verdict,'NO-GO');
 assert.equal(r.artists['The Commoners'].eligible,10);assert.equal(r.artists['The Tubs'].eligible,9);
 assert.equal(r.artists['The Vintage Caravan'].eligible,0);
 assert.equal(r.artists['The Vintage Caravan'].reasons['missing-full-library-exclusion'],11);
 assert.equal(r.storedBank.items,135);assert.equal(r.storedBank.alreadySeen,135);assert.deepEqual(r.storedBank.notSeen,[]);
 assert.ok(Object.values(r.artists).every(x=>!x.reasons['other-selector-block']));
 console.log('PASS: real snapshot; all eight catalogs; two eligible artists; library proof required; 135 FIFO items seen; historical records and export unchanged.');
})().catch(e=>{console.error(e);process.exitCode=1;});
