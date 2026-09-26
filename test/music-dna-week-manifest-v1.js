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
    spotify:p.spotify&&p.spotify.status==="published"&&p.spotify.folderPlacement==="confirmed",
    express:p.express&&p.express.status==="published",
    gemstone:g.status==="published"&&g.presented===true&&!!(g.trackId||g.artistId),
    gemstoneMuseum:p.gemstoneMuseum&&p.gemstoneMuseum.status==="published"
  };
  const complete=Object.values(target).every(Boolean);
  if((manifest.integrity||{}).complete!==complete) errors.push("integrity.complete does not match required publication targets");
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
  if(!p.spotify) blockers.push("Spotify publication or folder placement incomplete");
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
  m.gemstone={status:"published",trackId:"a",artistId:"x",presented:true};m.publication.gemstoneMuseum.status="published";m.integrity.complete=true;
  const after=weeklyPublicationGate(m);
  return {pass:!before.complete&&before.blockers.some(x=>x.includes("bios"))&&after.complete,cases:{beforeBlockers:before.blockers,afterBlockers:after.blockers}};
}
function freeze(manifest,at){
  const m=derive(manifest);
  const report=validate(m);
  if(report.errors.some(e=>e.startsWith("track ")||e.startsWith("duplicate")||e==="invalid weekId")) throw new Error("cannot freeze invalid manifest: "+report.errors.join("; "));
  m.freeze=m.freeze||{};
  m.freeze.status="frozen";
  m.freeze.frozenAt=at||new Date().toISOString();
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
  m.publication.gemstoneMuseum={status:"published"};
  m.integrity.complete=true;
  const r2=validate(m);
  const duplicateArtistCaught=r1.errors.some(e=>e.startsWith("one-track-per-artist rule violated"));
  return {pass:!r1.pass&&duplicateArtistCaught&&r1.uniqueArtistCount===2&&!r1.complete&&r2.complete,cases:{derivedArtists:r1.uniqueArtistCount,duplicateArtistCaught,prePublishComplete:r1.complete,fullPublishComplete:r2.complete}};
}

const api={uniqArtistsFromTracks,derive,validate,expressBioQueue,syncExpressBioQueue,expressBioQueueSelfTest,weeklyPublicationGate,weeklyPublicationGateSelfTest,freeze,selfTest};
if(typeof module!=="undefined"&&module.exports) module.exports=api;
else root.MUSIC_DNA_WEEK_MANIFEST_V1=api;
})(typeof window!=="undefined"?window:globalThis);
