const fs=require("fs"),vm=require("vm");
const ctx={globalThis:{}};vm.createContext(ctx);
for(const p of ["test/music-dna-living-master-e2e-v2.js","test/music-dna-representative-pilot-v2.js"]) vm.runInContext(fs.readFileSync(p,"utf8"),ctx);
const d=ctx.globalThis.musicDnaLivingMasterE2EV2,p=ctx.globalThis.musicDnaRepresentativePilotV2,fail=m=>{throw new Error(m)};
if(!d||!p) fail("fixture missing");
if(p.newSchemaFamiliesRequired.length) fail("pilot requires schema change");
if(p.cases.length<10) fail("representative pilot too small");
for(const x of p.cases){
 if(!x.uses||!x.uses.length) fail("case has no structural mapping "+x.id);
 if(!["pass","blocked"].includes(x.expected)) fail("bad expectation "+x.id);
}
const vo=p.cases.find(x=>x.id==="voivod-evidence-debt");
if(!vo||vo.expected!=="blocked") fail("Voivod debt must remain blocked");
const verified=Object.values(d.relations).filter(r=>r.status==="verified");
for(const r of verified) for(const cid of r.claimIds) if(!Object.values(d.evidence).some(e=>e.claimId===cid&&e.evidenceRole==="supports")) fail("verified relation without evidence "+r.relationId);
console.log("Representative Living Master v2 gate: PASS",{cases:p.cases.length,schemaChanges:p.newSchemaFamiliesRequired.length,voivod:vo.expected});
