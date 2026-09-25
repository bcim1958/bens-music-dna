// Master 100 — Batch 005A — 10/25 fresh direct AllMusic profiles
(function(root){"use strict";
const E=root.musicDnaMaster100EngineV1;
const V=(id,name,am,facts)=>({musicDnaId:id,displayName:name,inputRef:"fresh-allmusic-2026-09-25",treatmentStatus:"treated-verified",identityStatus:"exact",sourceRefs:["allmusic:"+am],claimRefs:facts,evidenceRefs:["direct-allmusic-profile:2026-09-25"]});
const batch=E.createBatch({batchId:"MASTER-005A-ALLMUSIC",scope:{kind:"fresh-source-verification",source:"AllMusic",targetBatchSize:25,subBatch:"A",records:10},records:[
 V("mdna:artist:opeth","Opeth","p214051",["formed:1990","place:Stockholm, Sweden","genre:Pop/Rock","style:Heavy Metal","style:Progressive Metal","style:Scandinavian Metal","style:Symphonic Black Metal","style:Death Metal","style:Goth Metal"]),
 V("mdna:artist:devin-townsend","Devin Townsend","mn0000818627",["born:1972-05-05","place:New Westminster, British Columbia, Canada","genre:Pop/Rock","style:Guitar/New Age","style:Heavy Metal","style:Progressive Metal","member-of:Strapping Young Lad","member-of:Devin Townsend Project","member-of:The Wildhearts"]),
 V("mdna:artist:mastodon","Mastodon","mn0000382565",["formed:2000","place:Atlanta, GA","genre:Pop/Rock","style:Heavy Metal","style:Sludge Metal","style:Alternative Metal","style:Alternative/Indie Rock"]),
 V("mdna:artist:pain-of-salvation","Pain of Salvation","mn0000008316",["formed:1984","place:Eskilstuna, Sweden","genre:Pop/Rock","style:Heavy Metal","style:Progressive Metal","style:Scandinavian Metal","style:Symphonic Black Metal"]),
 V("mdna:artist:katatonia","Katatonia","mn0000855252",["formed:1991","place:Stockholm, Sweden","genre:Pop/Rock","style:Doom Metal","style:Heavy Metal","style:Scandinavian Metal","style:Symphonic Black Metal","style:Progressive Metal","style:Death Metal"]),
 V("mdna:artist:anathema","Anathema","p45081",["formed:1990","place:Liverpool, Lancashire, England","genre:Pop/Rock","style:Doom Metal","style:Goth Metal","style:Heavy Metal","style:Death Metal"]),
 V("mdna:artist:devin-townsend-project","Devin Townsend Project","mn0002135258",["formed:2009-03","place:Canada","disbanded:2016","genre:Pop/Rock","genre:New Age","style:Guitar/New Age","style:Heavy Metal","style:Progressive Metal"]),
 V("mdna:artist:tool","Tool","progressive-metal-style-page",["classification:Progressive Metal"]),
 V("mdna:artist:gojira","Gojira","progressive-metal-style-page",["classification:Progressive Metal"]),
 V("mdna:artist:voivod","Voivod","progressive-metal-style-page",["classification:Progressive Metal"])
]});
batch.checkpoints=[E.checkpoint(batch,"batch-005A-complete")];root.musicDnaMasterBatch005A=batch;
})(typeof window!=="undefined"?window:globalThis);