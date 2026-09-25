const fs=require("fs"),vm=require("vm");
const ctx={globalThis:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync("test/music-dna-living-master-e2e-v2.js","utf8"),ctx);
const d=ctx.globalThis.musicDnaLivingMasterE2EV2, fail=m=>{throw new Error(m)};
if(!d) fail("fixture missing");
for(const c of Object.values(d.claims)){
 if(c.assertionStatus==="verified"&&!Object.values(d.evidence).some(e=>e.claimId===c.claimId&&e.evidenceRole==="supports")) fail("verified claim lacks evidence "+c.claimId);
}
for(const e of Object.values(d.evidence)){
 if(!d.claims[e.claimId]) fail("orphan evidence "+e.evidenceId);
 if(!d.sources[e.sourceId]) fail("evidence source missing "+e.evidenceId);
}
for(const r of Object.values(d.relations)){
 if(!d.entities[r.fromId]||!d.entities[r.toId]) fail("relation endpoint missing "+r.relationId);
 if(!r.claimIds.every(x=>d.claims[x])) fail("relation claim missing "+r.relationId);
 if(r.status==="verified"&&!r.claimIds.every(id=>Object.values(d.evidence).some(e=>e.claimId===id&&e.evidenceRole==="supports"))) fail("verified relation lacks evidence "+r.relationId);
}
for(const x of Object.values(d.derivedInsights)) if(!x.inputClaimIds.length||!x.inputClaimIds.every(id=>d.claims[id])) fail("insight not reproducible "+x.insightId);
for(const p of Object.values(d.projections)){
 if(!d.entities[p.entityId]) fail("projection entity missing");
 if(!p.headlineClaimIds.every(id=>d.claims[id])) fail("projection claim missing");
 if(!p.relationIds.every(id=>d.relations[id])) fail("projection relation missing");
 if(!p.insightIds.every(id=>d.derivedInsights[id])) fail("projection insight missing");
 if(!p.evidenceDrilldownIds.every(id=>d.evidence[id])) fail("projection evidence missing");
}
const reverseAudit=p=>p.headlineClaimIds.map(cid=>{const claim=d.claims[cid];const evidence=Object.values(d.evidence).filter(e=>e.claimId===cid);return {claim,evidence,sources:evidence.map(e=>d.sources[e.sourceId])};});
const audit=reverseAudit(d.projections["explorer:rush"]);
if(!audit.length||audit.some(x=>!x.evidence.length||x.sources.some(s=>!s))) fail("reverse audit broken");
const before=JSON.stringify(d.claims);
d.markShown({presentationUnitId:"shown:rush:prog-rock:1",subjectId:"mdna:artist:rush",claimRefs:["cl:rush:style:prog-rock"],surface:"explorer",version:"v1"});
if(JSON.stringify(d.claims)!==before||d.shownHistory.length!==1) fail("shown history unsafe");
console.log("Living Master E2E v2: PASS",{claims:Object.keys(d.claims).length,evidence:Object.keys(d.evidence).length,relations:Object.keys(d.relations).length,insights:Object.keys(d.derivedInsights).length,projections:Object.keys(d.projections).length,shown:d.shownHistory.length});
