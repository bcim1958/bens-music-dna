// Validate durable migration state and compatibility with the existing batch engine.
const fs=require('fs'),path=require('path'),assert=require('assert'),crypto=require('crypto'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const state=read('data/master-100/state.json');
const population=read(state.populationPath);
const pop=new Map(population.mentions.map(r=>[r.musicDnaId,r]));
const id=name=>'mdna:mention:'+crypto.createHash('sha256').update(name).digest('hex').slice(0,24);
assert.equal(pop.size,3333);assert.equal(new Set(population.mentions.map(r=>r.displayName)).size,3333);
assert(population.mentions.some(r=>r.displayName==='Blitz'));
assert(population.mentions.some(r=>r.displayName==='BlitZ'));
const context={};vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root,'test/music-dna-master-100-engine-v1.js'),'utf8'),context);
const engine=context.musicDnaMaster100EngineV1;
const records=[],counts={};
for(const manifest of state.batches){
 const bytes=fs.readFileSync(path.join(root,manifest.path));
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),manifest.sha256);
 const batch=JSON.parse(bytes);
 assert.equal(batch.records.length,manifest.count);
 assert.equal(engine.validate(batch).length,0);
 assert.equal(engine.progress(batch).treated,manifest.count);
 for(const r of batch.records){
  assert.equal(r.musicDnaId,id(r.displayName));
  assert.equal(pop.get(r.musicDnaId).displayName,r.displayName);
  assert.equal(r.inputRef,state.source.id);assert.equal(r.freshAllMusicVerification,false);
  assert.equal(r.identityScope,'literal-v3-denominator-mention');
  assert.equal(r.artistEntityResolution,'not-performed');
  assert(r.populationEvidence.length);assert(r.sourceObservation.values.length);
  assert.deepEqual(r.populationEvidence.map(x=>x.row),pop.get(r.musicDnaId).playlistRows);
  assert.deepEqual(r.claimRefs,r.claims.map(c=>c.id));
  assert.deepEqual(r.evidenceRefs,r.evidence.map(e=>e.id));
  for(const c of r.claims){
   assert(r.evidence.some(e=>e.claimId===c.id&&e.sourceId===state.source.id));
   assert.notEqual(c.status,'verified'); // This pass does not perform fresh AllMusic verification.
   if(r.originalProvenanceStatus==='afgeleid volgens AllMusic-taxonomie')assert.equal(c.status,'derived');
  }
  counts[r.treatmentStatus]=(counts[r.treatmentStatus]||0)+1;
 }
 records.push(...batch.records);
}
assert.equal(new Set(records.map(r=>r.musicDnaId)).size,records.length);
assert.equal(records.length,state.treatedCount);assert.deepEqual(counts,state.counts);
assert.equal(state.remainingCount,state.denominator-records.length);
const b12=read('data/master-100/master-012.json');
assert.equal(b12.records.length,100);
assert.equal(records.length-b12.records.length,575);
assert.equal(b12.records[0].displayName,state.batch012First);
assert.equal(b12.records.at(-1).displayName,state.batch012Last);
const prior=new Set(records.filter(r=>r.batchId!=='MASTER-012').map(r=>r.musicDnaId));
assert(!b12.records.some(r=>prior.has(r.musicDnaId)));
assert.equal(b12.checkpoints[0].treated,50);
const duplicate=structuredClone(b12);duplicate.records[1].musicDnaId=duplicate.records[0].musicDnaId;
assert(engine.validate(duplicate).some(e=>e.code==='duplicate-id'));
const missing=structuredClone(b12);missing.records[0].evidenceRefs=[];
assert(engine.validate(missing).some(e=>e.code==='verified-without-evidence'));
console.log(JSON.stringify({result:'PASS',population:pop.size,baseline:prior.size,batch012:b12.records.length,treated:records.length,batch012Counts:b12.counts,overlap:0,duplicateProtection:true,evidenceProtection:true}));
