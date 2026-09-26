const assert=require('node:assert/strict');
const engine=require('./music-dna-week-manifest-v1.js');
for(const [week,number] of [['2026-36',1],['2026-37',2],['2026-38',3],['2026-39',4],['2026-40',5],['2026-53',18],['2027-01',19]]){
  assert.equal(engine.gemstoneSequenceNumber(week),number,week);
}
for(const week of ['2026-35','2026-00','2026-54','2027-53','2026-W40','garbage','']){
  assert.equal(engine.gemstoneSequenceNumber(week),null,week);
  assert.equal(engine.artworkPreflight({weekId:week,gemstone:{name:'Imperiale topaas',sequenceNumber:5,editorialText:'Steen 5 van de Music-DNA-slinger.'}}).pass,false,week);
}
const manifest={weekId:'2026-40',gemstone:{name:'Imperiale topaas',sequenceNumber:5,editorialText:'IMPERIALE TOPAAS · W40 — Steen 5 van de Music-DNA-slinger.'}};
assert.equal(engine.artworkPreflight(manifest).pass,true);
for(const number of [999,4,'5',null,undefined]){
  const bad={...manifest,gemstone:{...manifest.gemstone,sequenceNumber:number}};
  assert.equal(engine.artworkPreflight(bad).pass,false,'bad counter '+number);
}
assert.equal(engine.artworkPreflight({...manifest,gemstone:{...manifest.gemstone,editorialText:'Steen 4 van de Music-DNA-slinger.'}}).pass,false);
assert.equal(engine.weeklyArtworkSpec(manifest).sequenceNumber,5);
assert.equal(engine.weeklyArtworkRenderModel(manifest).layers.find(l=>l.kind==='sequence').text,'Steen 5');
assert.equal(engine.productionHandoff(manifest).gemstone.sequenceNumber,5);
assert.equal(engine.externalDeliveryReadiness(manifest).pass,false,'no asset/playlist proof');
for(const [name,fn] of Object.entries(engine).filter(([name])=>/selftest/i.test(name))) assert.equal(fn().pass,true,name);
console.log('PASS: continuous ISO-week counter, invalid counters/text/weeks blocked, W40 artwork/handoff, missing external inputs, 7 selftests');
