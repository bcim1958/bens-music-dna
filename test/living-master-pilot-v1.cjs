const fs=require("fs"),vm=require("vm");
const p="test/music-dna-living-master-pilot-v1.js";
const ctx={globalThis:{}}; vm.createContext(ctx); vm.runInContext(fs.readFileSync(p,"utf8"),ctx);
const d=ctx.globalThis.musicDnaLivingMasterPilotV1;
const fail=m=>{throw new Error(m)};
if(!d) fail("pilot missing");
for(const id of ["mdna:artist:rush","mdna:artist:shiraz-lane"]) if(!d.entities[id]) fail("missing "+id);
const claimIds=new Set(d.claims.map(x=>x.claimId));
const evIds=new Set(d.evidence.map(x=>x.evidenceId));
if(claimIds.size!==d.claims.length) fail("duplicate claim id");
if(evIds.size!==d.evidence.length) fail("duplicate evidence id");
for(const c of d.claims){
 if(!d.entities[c.subjectId]) fail("unknown subject "+c.claimId);
 if(c.objectId&&!d.entities[c.objectId]) fail("unknown object "+c.claimId);
 if(c.assertionStatus==="verified"&&!d.evidence.some(e=>e.claimId===c.claimId)) fail("verified claim without evidence "+c.claimId);
}
for(const e of d.evidence){
 if(!claimIds.has(e.claimId)) fail("orphan evidence "+e.evidenceId);
 if(!d.sources[e.sourceId]) fail("unknown source "+e.evidenceId);
}
for(const r of d.relations){
 if(!d.entities[r.fromId]||!d.entities[r.toId]) fail("relation endpoint missing "+r.relationId);
 if(!r.claimIds.every(x=>claimIds.has(x))) fail("relation claim missing "+r.relationId);
}
for(const x of d.derivedInsights){
 if(!x.inputClaimIds.length||!x.inputClaimIds.every(i=>claimIds.has(i))) fail("bad insight inputs "+x.insightId);
 if(!x.coverage||!x.confidence||!x.asOf) fail("insight provenance incomplete "+x.insightId);
}
if(d.entities["mdna:artist:rush"].externalIds.musicBrainzArtistId!==null) fail("unverified MBID guessed");
if(d.entities["mdna:artist:shiraz-lane"].externalIds.spotifyArtistId!==null) fail("unverified Spotify ID guessed");
console.log("Living Master pilot v1: PASS",{
 entities:Object.keys(d.entities).length,claims:d.claims.length,evidence:d.evidence.length,relations:d.relations.length,insights:d.derivedInsights.length
});
