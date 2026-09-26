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
  const ids=new Set();
  (manifest.tracks||[]).forEach((t,i)=>{
    const id=t.spotifyTrackId||t.trackId;
    if(!id) errors.push("track "+i+" has no stable id");
    else if(ids.has(id)) errors.push("duplicate track id "+id);
    else ids.add(id);
    if(!t.title) errors.push("track "+i+" has no title");
    if(!(t.artistId||t.artistName||(t.artists&&t.artists.length))) errors.push("track "+i+" has no artist");
  });
  const derived=uniqArtistsFromTracks(manifest.tracks);
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
  return {pass:r1.pass&&r1.uniqueArtistCount===2&&!r1.complete&&r2.pass&&r2.complete,cases:{derivedArtists:r1.uniqueArtistCount,prePublishComplete:r1.complete,fullPublishComplete:r2.complete}};
}

const api={uniqArtistsFromTracks,derive,validate,freeze,selfTest};
if(typeof module!=="undefined"&&module.exports) module.exports=api;
else root.MUSIC_DNA_WEEK_MANIFEST_V1=api;
})(typeof window!=="undefined"?window:globalThis);
