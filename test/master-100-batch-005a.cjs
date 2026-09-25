const fs=require("fs"),vm=require("vm");const ctx={globalThis:{}};vm.createContext(ctx);
for(const p of ["test/music-dna-master-100-engine-v1.js","test/music-dna-master-batch-005a.js"])vm.runInContext(fs.readFileSync(p,"utf8"),ctx);
const E=ctx.globalThis.musicDnaMaster100EngineV1,b=ctx.globalThis.musicDnaMasterBatch005A,fail=m=>{throw new Error(m)};
const errs=E.validate(b),p=E.progress(b);if(errs.length)fail(JSON.stringify(errs));
if(p.total!==10||p.treated!==10||p.percent!==100)fail("005A incomplete");
const d=b.records.find(x=>x.displayName==="Devin Townsend"),dp=b.records.find(x=>x.displayName==="Devin Townsend Project");
if(d.sourceRefs[0]===dp.sourceRefs[0])fail("person/project identity collapsed");
const v=b.records.find(x=>x.displayName==="Voivod");if(!v.claimRefs.includes("classification:Progressive Metal"))fail("Voivod Progressive Metal evidence missing");
console.log("Master 100 batch 005A: PASS",{checkpoint:"10/25",subBatch:p});