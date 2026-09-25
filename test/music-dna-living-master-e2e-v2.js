// Living Master end-to-end fixture v2
(function(root){
"use strict";
const d={
 schemaVersion:"living-master-e2e-v2",
 entities:{
  "mdna:artist:rush":{musicDnaId:"mdna:artist:rush",entityType:"group",canonicalName:"Rush",treatmentStatus:"verification-in-progress"},
  "mdna:style:prog-rock":{musicDnaId:"mdna:style:prog-rock",entityType:"genre-style",canonicalName:"Prog-Rock"}
 },
 sources:{
  "src:allmusic:rush":{sourceId:"src:allmusic:rush",provider:"AllMusic",sourceType:"editorial-database",canonicalLocator:"allmusic:artist:mn0000203008",retrievedAt:"2026-09-25"}
 },
 claims:{
  "cl:rush:style:prog-rock":{claimId:"cl:rush:style:prog-rock",subjectId:"mdna:artist:rush",predicate:"allmusic-style",objectId:"mdna:style:prog-rock",assertionStatus:"verified"}
 },
 evidence:{
  "ev:rush:style:prog-rock":{evidenceId:"ev:rush:style:prog-rock",claimId:"cl:rush:style:prog-rock",sourceId:"src:allmusic:rush",evidenceRole:"supports",sourcePath:"artist profile / Styles",observedValue:"Prog-Rock",checkedAt:"2026-09-25",verificationMethod:"direct",confidence:"high"}
 },
 relations:{
  "rel:rush:style:prog-rock":{relationId:"rel:rush:style:prog-rock",fromId:"mdna:artist:rush",toId:"mdna:style:prog-rock",relationFamily:"classification",relationType:"allmusic-style",direction:"out",claimIds:["cl:rush:style:prog-rock"],status:"verified"}
 },
 derivedInsights:{
  "insight:rush:verified-style-proof":{insightId:"insight:rush:verified-style-proof",subjectId:"mdna:artist:rush",metricType:"verified-style-proof",value:1,unit:"verified-style-edge",calculationVersion:"v1",inputClaimIds:["cl:rush:style:prog-rock"],comparisonPopulation:null,coverage:"complete-for-fixture",confidence:"high",asOf:"2026-09-25",explanation:"Counts the directly evidenced style edge used by this fixture."}
 },
 projections:{
  "explorer:rush":{projectionId:"explorer:rush",surface:"explorer",entityId:"mdna:artist:rush",headlineClaimIds:["cl:rush:style:prog-rock"],relationIds:["rel:rush:style:prog-rock"],insightIds:["insight:rush:verified-style-proof"],evidenceDrilldownIds:["ev:rush:style:prog-rock"],researchBadge:{coverage:"fixture-only",confidence:"high"}}
 },
 shownHistory:[]
};
d.markShown=function(unit){
 const before=JSON.stringify({sources:d.sources,claims:d.claims,evidence:d.evidence,relations:d.relations,derivedInsights:d.derivedInsights});
 d.shownHistory.push({...unit,shownAt:"2026-09-25"});
 const after=JSON.stringify({sources:d.sources,claims:d.claims,evidence:d.evidence,relations:d.relations,derivedInsights:d.derivedInsights});
 if(before!==after) throw new Error("shown-history mutated knowledge layer");
};
root.musicDnaLivingMasterE2EV2=d;
})(typeof window!=="undefined"?window:globalThis);
