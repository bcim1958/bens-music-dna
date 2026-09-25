const fs=require("fs"),vm=require("vm");const ctx={globalThis:{}};vm.createContext(ctx);
for(const p of ["test/music-dna-master-100-engine-v1.js","test/music-dna-master-batch-005b.js"])vm.runInContext(fs.readFileSync(p,"utf8"),ctx);
const E=ctx.globalThis.musicDnaMaster100EngineV1,b=ctx.globalThis.musicDnaMasterBatch005B,fail=m=>{throw new Error(m)},p=E.progress(b),errs=E.validate(b);
if(errs.length)fail(JSON.stringify(errs));if(p.total!==15||p.treated!==15||p.percent!==100)fail("005B incomplete");
for(const name of ["Cynic","Camel"]){const r=b.records.find(x=>x.displayName===name);if(!r.errorRefs.some(x=>x.startsWith("same-name-provider-entity:")))fail("same-name guard missing "+name);}
console.log("Master 100 batch 005B: PASS",{checkpoint:"25/25 with 005A",subBatch:p});