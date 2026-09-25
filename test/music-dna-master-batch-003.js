// Master 100 — Batch 003 — fresh direct AllMusic verification
(function(root){"use strict";
const E=root.musicDnaMaster100EngineV1;
const batch=E.createBatch({
 batchId:"MASTER-003-FRESH-ALLMUSIC",
 scope:{kind:"fresh-source-verification",source:"AllMusic",verifiedAt:"2026-09-25",records:4,timing:{mode:"interactive-batch",note:"Wall-clock timing is not a reliable effective-research-time measurement in chat; record count and outcome are authoritative."}},
 records:[
  {musicDnaId:"mdna:artist:riverside",displayName:"Riverside",inputRef:"allmusic:mn0000812061",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0000812061"],claimRefs:["formed:2001","place:Warsaw, Poland","genre:Pop/Rock","style:Progressive Metal","style:Alternative/Indie Rock","style:Experimental Rock","style:Post-Rock","style:Heavy Metal"],evidenceRefs:["direct-allmusic-profile:2026-09-25"]},
  {musicDnaId:"mdna:artist:leprous",displayName:"Leprous",inputRef:"allmusic:mn0001066753",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0001066753"],claimRefs:["formed:2001","place:Notodden, Norway","genre:Pop/Rock","style:Scandinavian Metal","style:Heavy Metal","style:Progressive Metal"],evidenceRefs:["direct-allmusic-profile:2026-09-25"]},
  {musicDnaId:"mdna:artist:haken",displayName:"Haken",inputRef:"allmusic:mn0001369015",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0001369015"],claimRefs:["formed:2007","place:London, England","genre:Pop/Rock","style:Progressive Metal","style:Neo-Prog","style:Heavy Metal"],evidenceRefs:["direct-allmusic-profile:2026-09-25"]},
  {musicDnaId:"mdna:artist:soen",displayName:"Soen",inputRef:"allmusic:mn0002858295",treatmentStatus:"treated-conflict",identityStatus:"exact",sourceRefs:["allmusic:mn0002858295"],claimRefs:["profile-formed:2010","bio-founded:2004","place:Stockholm, Sweden","genre:Pop/Rock","style:Progressive Metal","style:Heavy Metal"],evidenceRefs:["direct-allmusic-profile:2026-09-25","direct-allmusic-biography:2026-09-25"],errorRefs:["conflict:formed-year:profile-2010-vs-biography-2004"]}
 ]});
batch.checkpoints=[E.checkpoint(batch,"fresh-allmusic-003-complete")];
root.musicDnaMasterBatch003=batch;
})(typeof window!=="undefined"?window:globalThis);