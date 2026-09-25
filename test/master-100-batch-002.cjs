const fs=require("fs"),vm=require("vm");
const ctx={globalThis:{}};vm.createContext(ctx);
for(const p of ["test/music-dna-master-100-engine-v1.js","test/music-dna-master-batch-002.js"]) vm.runInContext(fs.readFileSync(p,"utf8"),ctx);
const E=ctx.globalThis.musicDnaMaster100EngineV1,b=ctx.globalThis.musicDnaMasterBatch002,fail=m=>{throw new Error(m)};
const errors=E.validate(b),p=E.progress(b); if(errors.length) fail(JSON.stringify(errors));
if(p.total!==4||p.treated!==4||p.remaining!==0||p.percent!==100) fail("batch 002 incomplete");
for(const r of b.records){
 if(r.identityStatus!=="exact") fail("identity not exact "+r.displayName);
 if(!r.sourceRefs.some(x=>x.startsWith("allmusic:mn"))) fail("missing AllMusic id "+r.displayName);
 if(!r.claimRefs.some(x=>x.startsWith("style:"))) fail("missing styles "+r.displayName);
 if(!r.evidenceRefs.length) fail("missing direct evidence "+r.displayName);
}
console.log("Master 100 real batch 002: PASS",p);
