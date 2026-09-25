// Master 100 — real source batch 002
// Reuses the four directly verified AllMusic profiles recorded on 2026-09-24.
// Purpose: first real source-backed production batch through Master-100 mechanics.
(function(root){"use strict";
const E=root.musicDnaMaster100EngineV1;
const records=[
 {musicDnaId:"mdna:artist:karnivool",displayName:"Karnivool",inputRef:"allmusic-live-001",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0001422105"],claimRefs:["genre:Pop/Rock","style:Alternative Metal","style:Progressive Metal","style:Alternative Pop/Rock","style:Heavy Metal"],evidenceRefs:["direct-allmusic-profile:2026-09-24"]},
 {musicDnaId:"mdna:artist:caligulas-horse",displayName:"Caligula's Horse",inputRef:"allmusic-live-001",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0002880451"],claimRefs:["genre:Pop/Rock","style:Progressive Metal","style:Heavy Metal"],evidenceRefs:["direct-allmusic-profile:2026-09-24"]},
 {musicDnaId:"mdna:artist:oceansize",displayName:"Oceansize",inputRef:"allmusic-live-001",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0000466655"],claimRefs:["genre:Pop/Rock","style:Alternative/Indie Rock","style:Indie Rock","style:Post-Grunge","style:Post-Hardcore"],evidenceRefs:["direct-allmusic-profile:2026-09-24"]},
 {musicDnaId:"mdna:artist:earthside",displayName:"Earthside",inputRef:"allmusic-live-001",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:mn0003670432"],claimRefs:["style:Progressive Metal","style:Heavy Metal","style:Experimental Rock","style:Post-Rock","style:Art Rock"],evidenceRefs:["direct-allmusic-profile:2026-09-24"]}
];
const batch=E.createBatch({batchId:"MASTER-002-REAL-ALLMUSIC",scope:{kind:"real-source-verification",source:"AllMusic",verifiedAt:"2026-09-24",records:4},records});
batch.checkpoints=[E.checkpoint(batch,"real-source-002-complete")];
root.musicDnaMasterBatch002=batch;
})(typeof window!=="undefined"?window:globalThis);