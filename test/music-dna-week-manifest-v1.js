(function(root){
"use strict";

function uniqArtistsFromTracks(tracks){
  const seen=new Set(),out=[];
  (tracks||[]).forEach((t,i)=>{
    const artists=(t.artists&&t.artists.length?t.artists:[{id:t.artistId,name:t.artistName}]).filter(a=>a&&(a.id||a.name));
    artists.forEach(a=>{
      const key=a.id||("name:"+String(a.name||"").toLowerCase());
      if(!seen.has(key)){seen.add(key);out.push({id:a.id||null,name:a.name||null,firstTrackIndex:i});}
    });
  });
  return out;
}

function derive(manifest){
  const m=JSON.parse(JSON.stringify(manifest||{}));
  m.derived=m.derived||{};
  m.derived.uniqueArtists=uniqArtistsFromTracks(m.tracks);
  return m;
}

function validate(manifest){
  const errors=[],warnings=[];
  if(!manifest||typeof manifest!=="object") return {pass:false,errors:["manifest missing"],warnings};
  if(!/^\d{4}-\d{2}$/.test(manifest.weekId||"")) errors.push("invalid weekId");
  if(!Array.isArray(manifest.tracks)||!manifest.tracks.length) warnings.push("no tracks");
  const rules=manifest.selectionRules||{};
  if(Number.isInteger(rules.expectedTrackCount)&&Array.isArray(manifest.tracks)&&manifest.tracks.length!==rules.expectedTrackCount) errors.push("expected "+rules.expectedTrackCount+" tracks, found "+manifest.tracks.length);
  const ids=new Set();
  (manifest.tracks||[]).forEach((t,i)=>{
    const id=t.spotifyTrackId||t.trackId;
    if(!id) errors.push("track "+i+" has no stable id");
    else if(ids.has(id)) errors.push("duplicate track id "+id);
    else ids.add(id);
    if(!t.title) errors.push("track "+i+" has no title");
    if(!(t.artistId||t.artistName||(t.artists&&t.artists.length))) errors.push("track "+i+" has no artist");
    if(rules.allowedSelectionSources&&rules.allowedSelectionSources.length&&!rules.allowedSelectionSources.includes(t.selectionSource)) errors.push("track "+i+" has invalid selectionSource "+String(t.selectionSource));
  });
  if(Array.isArray(manifest.tracks)&&rules.allowedSelectionSources){
    const counts=manifest.tracks.reduce((a,t)=>(a[t.selectionSource]=(a[t.selectionSource]||0)+1,a),{});
    if(Number.isInteger(rules.expectedWeekPositiveCount)&&(counts["week-positive"]||0)!==rules.expectedWeekPositiveCount) errors.push("expected "+rules.expectedWeekPositiveCount+" week-positive tracks, found "+(counts["week-positive"]||0));
    if(Number.isInteger(rules.expectedPositiveReserveCount)&&(counts["positive-reserve"]||0)!==rules.expectedPositiveReserveCount) errors.push("expected "+rules.expectedPositiveReserveCount+" positive-reserve tracks, found "+(counts["positive-reserve"]||0));
  }
  const derived=uniqArtistsFromTracks(manifest.tracks);
  const oneTrackPerArtist=rules.oneTrackPerArtist!==false;
  if(oneTrackPerArtist&&(manifest.tracks||[]).length!==derived.length) errors.push("one-track-per-artist rule violated: "+(manifest.tracks||[]).length+" tracks / "+derived.length+" unique artists");
  if(Number.isInteger(rules.expectedUniqueArtistCount)&&derived.length!==rules.expectedUniqueArtistCount) errors.push("expected "+rules.expectedUniqueArtistCount+" unique artists, found "+derived.length);
  const stored=((manifest.derived||{}).uniqueArtists||[]);
  if(JSON.stringify(derived)!==JSON.stringify(stored)) errors.push("derived.uniqueArtists is stale or not derived from tracks");

  const p=manifest.publication||{};
  const g=manifest.gemstone||{};
  const target={
    spotify:p.spotify&&p.spotify.status==="published",
    artwork:manifest.artwork&&manifest.artwork.status==="published"&&!!manifest.artwork.assetId&&manifest.artwork.attachedToSpotify===true,
    express:p.express&&p.express.status==="published",
    gemstone:g.status==="published"&&g.presented===true&&!!(g.trackId||g.artistId),
    gemstoneMuseum:p.gemstoneMuseum&&p.gemstoneMuseum.status==="published"
  };
  const complete=Object.values(target).every(Boolean);
  if((manifest.integrity||{}).complete!==complete) errors.push("integrity.complete does not match required publication targets");
  const folderCheck=spotifyFolderIntegrity(manifest);
  errors.push(...folderCheck.errors);
  const gemCheck=gemstoneIntegrity(manifest);
  errors.push(...gemCheck.errors);
  const editorialCheck=gemstoneEditorialIntegrity(manifest);
  errors.push(...editorialCheck.errors);
  const archiveCheck=archivalCompleteness(manifest);
  errors.push(...archiveCheck.errors);
  const orderCheck=flowOrderIntegrity(manifest);
  errors.push(...orderCheck.errors);
  return {pass:errors.length===0,errors,warnings,publicationTargets:target,complete,uniqueArtistCount:derived.length,trackCount:(manifest.tracks||[]).length};
}

function expressBioQueue(manifest){
  const m=derive(manifest);
  const stored=((((m||{}).express||{}).artistBios||{}).artists)||[];
  const byKey=new Map(stored.map(a=>[a.id||("name:"+String(a.name||"").toLowerCase()),a]));
  return m.derived.uniqueArtists.map(a=>{
    const key=a.id||("name:"+String(a.name||"").toLowerCase());
    const prior=byKey.get(key)||{};
    const coverage=prior.coverage||{};
    const required=["identity","originStart","members","styleDevelopment","careerMoments","status"];
    const missing=required.filter(k=>coverage[k]!==true);
    const blocked=prior.identityCertain===false;
    return {id:a.id,name:a.name,firstTrackIndex:a.firstTrackIndex,
      status:blocked?"blocked":(missing.length?"needs-research":"ready"),
      missing,identityCertain:prior.identityCertain!==false,sources:prior.sources||[]};
  });
}
function syncExpressBioQueue(manifest){
  const m=derive(manifest);
  m.express=m.express||{};m.express.artistBios=m.express.artistBios||{};
  m.express.artistBios.artists=expressBioQueue(m);
  const states=m.express.artistBios.artists.map(a=>a.status);
  m.express.artistBios.status=states.includes("blocked")?"blocked":(states.includes("needs-research")?"needs-research":"ready");
  return m;
}
function expressBioQueueSelfTest(){
  let m={weekId:"2026-40",tracks:[
    {spotifyTrackId:"a",title:"One",artistId:"x",artistName:"X"},
    {spotifyTrackId:"b",title:"Two",artistId:"y",artistName:"Y"},
    {spotifyTrackId:"c",title:"Three",artistId:"x",artistName:"X"}],
    express:{artistBios:{artists:[
      {id:"x",identityCertain:true,coverage:{identity:true,originStart:true,members:true,styleDevelopment:true,careerMoments:true,status:true},sources:["source-x"]},
      {id:"y",identityCertain:true,coverage:{identity:true,originStart:true}}
    ]}}};
  m=syncExpressBioQueue(m);
  const x=m.express.artistBios.artists.find(a=>a.id==="x"),y=m.express.artistBios.artists.find(a=>a.id==="y");
  return {pass:m.express.artistBios.artists.length===2&&x.status==="ready"&&y.status==="needs-research"&&y.missing.includes("members"),
    cases:{uniqueBioJobs:m.express.artistBios.artists.length,xStatus:x.status,yStatus:y.status,yMissing:y.missing}};
}
function gemstoneSequenceNumber(weekId){
  const m=/^(\\d{4})-(\\d{2})$/.exec(weekId||"");
  if(!m) return null;
  const year=Number(m[1]),week=Number(m[2]);
  if(year<2026||(year===2026&&week<36)) return null;
  return (year-2026)*52+(week-36)+1;
}
function gemstoneEditorialIntegrity(manifest){
  const m=manifest||{},g=m.gemstone||{},errors=[];
  const expected=gemstoneSequenceNumber(m.weekId);
  if(expected!==null&&g.sequenceNumber!=null&&g.sequenceNumber!==expected) errors.push("gemstone sequenceNumber must be "+expected+" for "+m.weekId);
  if(g.editorialText){
    const tail="Steen "+expected+" van de Music-DNA-slinger.";
    if(expected!==null&&!String(g.editorialText).trim().endsWith(tail)) errors.push("gemstone editorialText must end with numeric sling counter: "+tail);
  }
  return {pass:errors.length===0,errors,expectedSequenceNumber:expected};
}
function weeklyArtworkSpec(manifest){
  const m=derive(manifest),g=m.gemstone||{},a=m.artwork||{};
  return {
    kind:"weekly-gemstone-cover",
    weekId:m.weekId,
    gemstoneName:a.gemstoneName||g.name||null,
    sequenceNumber:g.sequenceNumber!=null?g.sequenceNumber:gemstoneSequenceNumber(m.weekId),
    editorialText:g.editorialText||null,
    editorialStyle:"short-factual-no-symbolism",
    square:true,
    size:{width:1000,height:1000},
    text:{primary:"Ontdek DNA",secondary:m.weekId||null},
    requirements:["recognizable gemstone identity","legible week identity","works as small Spotify thumbnail","cinematic Edelsteenmuseum visual family","editorial copy is short, factual and non-symbolic","numeric Music-DNA-slinger counter"],
    status:a.status||"pending"
  };
}
function weeklyArtworkRenderModel(manifest){
  const spec=weeklyArtworkSpec(manifest);
  if(!spec.weekId) throw new Error("weekId is required for artwork");
  if(!spec.gemstoneName) return {status:"blocked",reason:"weekly-gemstone-not-selected",spec};
  return {
    status:"ready",
    format:"image/jpeg",
    width:1000,
    height:1000,
    layers:[
      {kind:"gemstone",identity:spec.gemstoneName},
      {kind:"title",text:"Ontdek DNA"},
      {kind:"week",text:spec.weekId},
      {kind:"sequence",text:"Steen "+spec.sequenceNumber}
    ],
    accessibility:{smallThumbnailLegibility:true},
    spec
  };
}
function weeklyArtworkRenderModelSelfTest(){
  const base={weekId:"2026-40",tracks:[],gemstone:{name:"Saffier"},artwork:{status:"pending"}};
  const ready=weeklyArtworkRenderModel(base);
  const blocked=weeklyArtworkRenderModel({...base,gemstone:{}});
  return {pass:ready.status==="ready"&&ready.width===1000&&ready.layers[0].identity==="Saffier"&&blocked.status==="blocked"};
}
function prePublicationGate(manifest){
  const m=derive(manifest),errors=[],rules=m.selectionRules||{},tracks=m.tracks||[],freeze=m.freeze||{};
  const ids=tracks.map(t=>t.spotifyTrackId||t.trackId).filter(Boolean);
  if(Number.isInteger(rules.expectedTrackCount)&&tracks.length!==rules.expectedTrackCount) errors.push("track count not ready for publication");
  if(Number.isInteger(rules.expectedUniqueArtistCount)&&m.derived.uniqueArtists.length!==rules.expectedUniqueArtistCount) errors.push("unique artist count not ready for publication");
  if(tracks.some(t=>!(t.spotifyTrackId||t.trackId))) errors.push("one or more tracks lack stable id");
  if(freeze.status!=="frozen") errors.push("manifest must be frozen before Spotify publication");
  if(freeze.status==="frozen"&&JSON.stringify(freeze.orderedTrackIds||[])!==JSON.stringify(ids)) errors.push("frozen Flow-DNA order snapshot does not match tracks");
  const counts=tracks.reduce((a,t)=>(a[t.selectionSource]=(a[t.selectionSource]||0)+1,a),{});
  if(Number.isInteger(rules.expectedWeekPositiveCount)&&(counts["week-positive"]||0)!==rules.expectedWeekPositiveCount) errors.push("week-positive composition not ready");
  if(Number.isInteger(rules.expectedPositiveReserveCount)&&(counts["positive-reserve"]||0)!==rules.expectedPositiveReserveCount) errors.push("positive-reserve composition not ready");
  return {pass:errors.length===0,errors,weekId:m.weekId,trackCount:tracks.length,uniqueArtistCount:m.derived.uniqueArtists.length};
}
function artworkDeliveryPlan(manifest){
  const m=derive(manifest),a=m.artwork||{},p=(m.publication||{}).spotify||{};
  return {weekId:m.weekId,assetId:a.assetId||null,playlistId:p.playlistId||null,status:(a.assetId&&p.playlistId)?"ready":"blocked"};
}
function artworkPreflight(manifest){
  const m=derive(manifest),a=m.artwork||{},g=m.gemstone||{},errors=[];
  const expected=gemstoneSequenceNumber(m.weekId);
  if(!g.name) errors.push("weekly gemstone name missing");
  if(expected!==null&&g.sequenceNumber!==expected) errors.push("weekly gemstone numeric sequence is not canonical");
  if(!g.editorialText) errors.push("weekly gemstone factual editorial text missing");
  else if(expected!==null&&!String(g.editorialText).trim().endsWith("Steen "+expected+" van de Music-DNA-slinger.")) errors.push("weekly gemstone editorial text has wrong sling counter");
  if(a.gemstoneName&&g.name&&a.gemstoneName!==g.name) errors.push("artwork gemstone identity differs from weekly gemstone");
  const render=weeklyArtworkRenderModel(m);
  if(render.status!=="ready") errors.push("weekly artwork render model is blocked: "+render.reason);
  return {pass:errors.length===0,errors,weekId:m.weekId,gemstoneName:g.name||null,sequenceNumber:expected,renderStatus:render.status};
}
function weeklyArtworkIntegrity(manifest){
  const a=(manifest||{}).artwork||{},g=(manifest||{}).gemstone||{},errors=[];
  if(a.status==="published"){
    if(!a.assetId) errors.push("weekly artwork has no assetId");
    if(a.attachedToSpotify!==true) errors.push("weekly artwork is not attached to Spotify playlist");
    if(!a.gemstoneName) errors.push("weekly artwork has no gemstone identity");
    if(g.name&&a.gemstoneName!==g.name) errors.push("weekly artwork gemstone does not match weekly gemstone");
  }
  return {pass:errors.length===0,errors};
}
function spotifyFolderIntegrity(manifest){
  const p=((manifest||{}).publication||{}).spotify||{},rules=(manifest||{}).selectionRules||{},errors=[];
  const expected=rules.expectedSpotifyFolder||null;
  if(p.status==="published"&&p.folderPlacement==="confirmed"&&expected&&p.folderName!==expected) errors.push("confirmed Spotify folder does not match expected manual destination "+expected);
  return {pass:errors.length===0,errors,expectedFolder:expected,actualFolder:p.folderName||null,placementMode:"manual"};
}
function spotifyFolderIntegritySelfTest(){
  const base={selectionRules:{expectedSpotifyFolder:"💎 Ontdek DNA"}};
  const pending=spotifyFolderIntegrity({...base,publication:{spotify:{status:"published",folderPlacement:"manual-pending",folderName:null}}});
  const good=spotifyFolderIntegrity({...base,publication:{spotify:{status:"published",folderPlacement:"confirmed",folderName:"💎 Ontdek DNA"}}});
  const bad=spotifyFolderIntegrity({...base,publication:{spotify:{status:"published",folderPlacement:"confirmed",folderName:"Library"}}});
  return {pass:pending.pass&&good.pass&&!bad.pass};
}
function gemstoneIntegrity(manifest){
  const m=derive(manifest),g=m.gemstone||{},tracks=m.tracks||[],errors=[];
  if(g.status==="published"||g.presented===true||g.trackId||g.artistId){
    if(!g.trackId) errors.push("gemstone has no trackId");
    const t=tracks.find(x=>(x.spotifyTrackId||x.trackId||x.id)===g.trackId);
    if(g.trackId&&!t) errors.push("gemstone track is not in this week manifest");
    if(t&&!g.artistId) errors.push("gemstone has no artistId");
    if(t&&g.artistId){
      const ids=[t.artistId,...((t.artists||[]).map(a=>a.id))].filter(Boolean);
      if(!ids.includes(g.artistId)) errors.push("gemstone artist does not match gemstone track");
    }
  }
  return {pass:errors.length===0,errors};
}
function gemstoneIntegritySelfTest(){
  const base={weekId:"2026-40",tracks:[{spotifyTrackId:"a",title:"One",artistId:"x",artistName:"X"}]};
  const good=gemstoneIntegrity({...base,gemstone:{status:"published",presented:true,trackId:"a",artistId:"x"}});
  const outside=gemstoneIntegrity({...base,gemstone:{status:"published",presented:true,trackId:"z",artistId:"x"}});
  const mismatch=gemstoneIntegrity({...base,gemstone:{status:"published",presented:true,trackId:"a",artistId:"y"}});
  return {pass:good.pass&&!outside.pass&&!mismatch.pass};
}
function expressEditionSkeleton(manifest){
  const m=derive(manifest);
  const artists=m.derived.uniqueArtists||[];
  const bios=((((m||{}).express||{}).artistBios||{}).artists)||[];
  const byKey=new Map(bios.map(b=>[b.id||("name:"+String(b.name||"").toLowerCase()),b]));
  return {
    schemaVersion:"1.0",
    kind:"dna-express-weekly-edition",
    weekId:m.weekId,
    publicationStatus:"draft",
    sections:[{
      id:"artists-of-the-week",
      title:"De artiesten van deze week",
      fixed:true,
      entries:artists.map((a,index)=>{
        const b=byKey.get(a.id||("name:"+String(a.name||"").toLowerCase()))||{};
        return {order:index+1,artistId:a.id||null,artistName:a.name||null,bioStatus:b.status||"missing",missing:b.missing||[],sourceRefs:b.sources||[],text:null};
      })
    }],
    provenance:{derivedFrom:"week-publication-manifest",weekId:m.weekId},
    rules:{oneEntryPerUniqueArtist:true,publishedTextIsImmutable:true,explorerNarrativeMayRemainDynamic:true}
  };
}
function expressEditionSkeletonSelfTest(){
  const m={weekId:"2026-40",tracks:[{spotifyTrackId:"a",title:"One",artistId:"x",artistName:"X"},{spotifyTrackId:"b",title:"Two",artistId:"y",artistName:"Y"}],
    express:{artistBios:{artists:[{id:"x",name:"X",status:"ready",sources:["s1"]},{id:"y",name:"Y",status:"needs-research",missing:["members"]}]}}};
  const e=expressEditionSkeleton(m),entries=e.sections[0].entries;
  return {pass:entries.length===2&&entries[0].artistName==="X"&&entries[0].sourceRefs[0]==="s1"&&entries[1].missing[0]==="members"&&entries.every((x,i)=>x.order===i+1)};
}
function publicationReadiness(manifest){
  const m=derive(manifest),rules=m.selectionRules||{},tracks=m.tracks||[];
  const artists=m.derived.uniqueArtists||[];
  const bios=((((m||{}).express||{}).artistBios||{}).artists)||[];
  const sourceCounts=tracks.reduce((a,t)=>(a[t.selectionSource]=(a[t.selectionSource]||0)+1,a),{});
  const bioByKey=new Map(bios.map(b=>[b.id||("name:"+String(b.name||"").toLowerCase()),b]));
  const missingBioArtists=artists.filter(a=>!bioByKey.has(a.id||("name:"+String(a.name||"").toLowerCase()))).map(a=>a.name||a.id);
  const notReadyBios=bios.filter(b=>b.status!=="ready"&&b.status!=="published").map(b=>({id:b.id,name:b.name,status:b.status,missing:b.missing||[]}));
  return {
    weekId:m.weekId,
    selection:{tracks:tracks.length,uniqueArtists:artists.length,weekPositive:sourceCounts["week-positive"]||0,positiveReserve:sourceCounts["positive-reserve"]||0,
      expectedTracks:rules.expectedTrackCount,expectedArtists:rules.expectedUniqueArtistCount},
    express:{bioJobs:bios.length,missingBioArtists,notReadyBios},
    gemstone:{status:(m.gemstone||{}).status||"pending",presented:(m.gemstone||{}).presented===true},
    artwork:{status:(m.artwork||{}).status||"pending",gemstoneName:(m.artwork||{}).gemstoneName||null,assetId:(m.artwork||{}).assetId||null,attachedToSpotify:(m.artwork||{}).attachedToSpotify===true},
    publication:m.publication||{},
    gate:weeklyPublicationGate(m)
  };
}
function productionHandoff(manifest){
  const m=derive(manifest),selection=prePublicationGate(m),artwork=artworkPreflight(m);
  const seq=publicationSequence(m);
  const blockers=[...selection.errors,...artwork.errors];
  return {
    schemaVersion:"1.0",
    kind:"music-dna-week-production-handoff",
    weekId:m.weekId,
    readyForProduction:blockers.length===0,
    blockers:[...new Set(blockers)],
    frozenTrackIds:((m.freeze||{}).orderedTrackIds)||[],
    gemstone:{name:(m.gemstone||{}).name||null,sequenceNumber:gemstoneSequenceNumber(m.weekId),editorialText:(m.gemstone||{}).editorialText||null},
    artwork:weeklyArtworkSpec(m),
    stages:seq.stages,
    manualSteps:["Confirm Spotify playlist placement in 💎 Ontdek DNA"],
    rule:"Do not reconstruct, reorder or silently repair frozen weekly content during production."
  };
}
function publicationSequence(manifest){
  const m=derive(manifest);
  const selection=prePublicationGate(m);
  const artwork=artworkPreflight(m);
  const bios=((((m||{}).express||{}).artistBios||{}).artists)||[];
  const expected=(m.selectionRules||{}).expectedUniqueArtistCount;
  const expressReady=(Number.isInteger(expected)?bios.length===expected:bios.length===m.derived.uniqueArtists.length)&&bios.length>0&&bios.every(b=>b.status==="ready"||b.status==="published");
  const stages=[
    {id:"selection-freeze",ready:selection.pass,blockers:selection.errors},
    {id:"express-research",ready:expressReady,blockers:expressReady?[]:["Express bios are incomplete or not ready"]},
    {id:"gemstone-artwork-preflight",ready:artwork.pass,blockers:artwork.errors},
    {id:"spotify-publication",ready:selection.pass,blockers:selection.pass?[]:["selection-freeze must pass first"]},
    {id:"artwork-attachment",ready:false,blockers:["requires generated assetId and published Spotify playlistId"]},
    {id:"express-publication",ready:expressReady,blockers:expressReady?[]:["Express research must pass first"]},
    {id:"gemstone-museum-registration",ready:artwork.pass,blockers:artwork.pass?[]:["gemstone artwork preflight must pass first"]},
    {id:"manual-folder-confirmation",ready:false,manual:true,blockers:["Ben confirms placement in 💎 Ontdek DNA after Spotify publication"]}
  ];
  return {weekId:m.weekId,stages};
}
function weeklyPublicationGate(manifest){
  const report=validate(manifest);
  const bios=((((manifest||{}).express||{}).artistBios||{}).artists)||[];
  const bioCounts=bios.reduce((a,b)=>(a[b.status]=(a[b.status]||0)+1,a),{});
  const expectedArtists=((manifest||{}).selectionRules||{}).expectedUniqueArtistCount;
  const bioSetComplete=Number.isInteger(expectedArtists)?bios.length===expectedArtists:bios.length===report.uniqueArtistCount;
  const biosReady=bioSetComplete&&bios.length>0&&bios.every(b=>b.status==="ready"||b.status==="published");
  const blockers=[];
  if(!report.pass) blockers.push(...report.errors);
  if(!bioSetComplete) blockers.push("Express bio job count does not match unique artist count");
  if(bioSetComplete&&!biosReady) blockers.push("one or more Express bios are not ready");
  const p=report.publicationTargets||{};
  if(!p.spotify) blockers.push("Spotify playlist publication incomplete");
  if(!p.artwork) blockers.push("weekly gemstone cover is not generated and attached to Spotify");
  if(!p.express) blockers.push("DNA Express publication incomplete");
  if(!p.gemstone) blockers.push("weekly gemstone not published/presented");
  if(!p.gemstoneMuseum) blockers.push("gemstone museum registration incomplete");
  return {complete:blockers.length===0,blockers,trackCount:report.trackCount,uniqueArtistCount:report.uniqueArtistCount,bioCount:bios.length,bioCounts,targets:p};
}
function weeklyPublicationGateSelfTest(){
  let m={weekId:"2026-40",selectionRules:{oneTrackPerArtist:true,expectedTrackCount:2,expectedUniqueArtistCount:2,allowedSelectionSources:["week-positive","positive-reserve"],expectedWeekPositiveCount:1,expectedPositiveReserveCount:1},
    tracks:[{spotifyTrackId:"a",title:"One",artistId:"x",artistName:"X",selectionSource:"week-positive"},{spotifyTrackId:"b",title:"Two",artistId:"y",artistName:"Y",selectionSource:"positive-reserve"}],
    derived:{uniqueArtists:[{id:"x",name:"X",firstTrackIndex:0},{id:"y",name:"Y",firstTrackIndex:1}]},
    express:{artistBios:{artists:[{id:"x",status:"ready"},{id:"y",status:"needs-research"}]}},
    gemstone:{status:"pending",trackId:null,artistId:null,presented:false},
    publication:{spotify:{status:"published",folderPlacement:"confirmed"},express:{status:"pending"},gemstoneMuseum:{status:"pending"}},
    integrity:{complete:false}};
  const before=weeklyPublicationGate(m);
  m.express.artistBios.artists[1].status="ready";m.publication.express.status="published";
  m.gemstone={status:"published",trackId:"a",artistId:"x",presented:true};m.artwork={status:"published",gemstoneName:"Teststeen",assetId:"cover-2026-40",attachedToSpotify:true};m.publication.gemstoneMuseum.status="published";m.integrity.complete=true;
  const after=weeklyPublicationGate(m);
  return {pass:!before.complete&&before.blockers.some(x=>x.includes("bios"))&&after.complete,cases:{beforeBlockers:before.blockers,afterBlockers:after.blockers}};
}
function flowOrderIntegrity(manifest){
  const m=manifest||{},errors=[],tracks=m.tracks||[],freeze=m.freeze||{};
  if(freeze.status==="frozen"){
    const snapshot=freeze.orderedTrackIds||[];
    const current=tracks.map(t=>t.spotifyTrackId||t.trackId||null);
    if(!snapshot.length) errors.push("frozen manifest has no orderedTrackIds snapshot");
    else if(JSON.stringify(snapshot)!==JSON.stringify(current)) errors.push("frozen Flow-DNA track order changed after freeze");
  }
  return {pass:errors.length===0,errors};
}
function archivalCompleteness(manifest){
  const m=derive(manifest),errors=[];
  const p=m.publication||{},published=(p.spotify||{}).status==="published";
  if(published){
    if(!Array.isArray(m.tracks)||!m.tracks.length) errors.push("published week has no archived track manifest");
    if((m.tracks||[]).some(t=>!(t.spotifyTrackId||t.trackId))) errors.push("published week contains track without stable id");
    if(!m.freeze||m.freeze.status!=="frozen") errors.push("published week manifest is not frozen");
  }
  return {pass:errors.length===0,errors,published,trackCount:(m.tracks||[]).length};
}
function freeze(manifest,at){
  const m=derive(manifest);
  const report=validate(m);
  if(report.errors.some(e=>e.startsWith("track ")||e.startsWith("duplicate")||e==="invalid weekId")) throw new Error("cannot freeze invalid manifest: "+report.errors.join("; "));
  m.freeze=m.freeze||{};
  m.freeze.status="frozen";
  m.freeze.frozenAt=at||new Date().toISOString();
  m.freeze.orderedTrackIds=(m.tracks||[]).map(t=>t.spotifyTrackId||t.trackId);
  return m;
}

function selfTest(){
  let m={weekId:"2026-40",tracks:[
    {spotifyTrackId:"a",title:"One",artistId:"x",artistName:"X"},
    {spotifyTrackId:"b",title:"Two",artistId:"y",artistName:"Y"},
    {spotifyTrackId:"c",title:"Three",artistId:"x",artistName:"X"}
  ],derived:{uniqueArtists:[]},gemstone:{status:"pending",trackId:null,artistId:null,presented:false},
  publication:{spotify:{status:"pending",folderPlacement:"pending"},express:{status:"pending"},gemstoneMuseum:{status:"pending"}},
  integrity:{complete:false}};
  m=derive(m);
  const r1=validate(m);
  m.publication.spotify={status:"published",folderPlacement:"confirmed"};
  m.publication.express={status:"published"};
  m.gemstone={status:"published",trackId:"a",artistId:"x",presented:true};
  m.artwork={status:"published",gemstoneName:"Teststeen",assetId:"cover-2026-40",attachedToSpotify:true};
  m.publication.gemstoneMuseum={status:"published"};
  m.integrity.complete=true;
  const r2=validate(m);
  const duplicateArtistCaught=r1.errors.some(e=>e.startsWith("one-track-per-artist rule violated"));
  return {pass:!r1.pass&&duplicateArtistCaught&&r1.uniqueArtistCount===2&&!r1.complete&&r2.complete,cases:{derivedArtists:r1.uniqueArtistCount,duplicateArtistCaught,prePublishComplete:r1.complete,fullPublishComplete:r2.complete}};
}

const api={uniqArtistsFromTracks,derive,validate,gemstoneSequenceNumber,gemstoneEditorialIntegrity,flowOrderIntegrity,archivalCompleteness,prePublicationGate,artworkPreflight,productionHandoff,publicationSequence,expressBioQueue,syncExpressBioQueue,expressBioQueueSelfTest,weeklyArtworkSpec,weeklyArtworkRenderModel,weeklyArtworkRenderModelSelfTest,artworkDeliveryPlan,weeklyArtworkIntegrity,spotifyFolderIntegrity,spotifyFolderIntegritySelfTest,gemstoneIntegrity,gemstoneIntegritySelfTest,expressEditionSkeleton,expressEditionSkeletonSelfTest,publicationReadiness,weeklyPublicationGate,weeklyPublicationGateSelfTest,freeze,selfTest};
if(typeof module!=="undefined"&&module.exports) module.exports=api;
else root.MUSIC_DNA_WEEK_MANIFEST_V1=api;
})(typeof window!=="undefined"?window:globalThis);
