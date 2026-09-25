const fs=require("fs"),vm=require("vm");const ctx={globalThis:{}};vm.createContext(ctx);
for(const p of ["test/music-dna-master-100-engine-v1.js","test/music-dna-master-batch-004.js"])vm.runInContext(fs.readFileSync(p,"utf8"),ctx);
const E=ctx.globalThis.musicDnaMaster100EngineV1,b=ctx.globalThis.musicDnaMasterBatch004,fail=m=>{throw new Error(m)};
const errs=E.validate(b),p=E.progress(b);if(errs.length)fail(JSON.stringify(errs));
if(p.total!==10||p.treated!==10||p.remaining!==0||p.percent!==100)fail("batch 004 incomplete");
if(new Set(b.records.map(r=>r.sourceRefs[0])).size!==10)fail("AllMusic identity collision");
if(b.records.some(r=>!r.claimRefs.some(c=>c.startsWith("style:"))))fail("style-less record");
const t=b.records.find(r=>r.displayName==="TesseracT");if(t.sourceRefs[0]!=="allmusic:mn0001878711")fail("TesseracT confused with same-name artist");
console.log("Master 100 batch 004: PASS",p);