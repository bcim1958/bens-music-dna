'use strict';
// Read-only adapter: published playlist evidence -> immutable research snapshot.
// No network, Spotify writer, inventory writer, rating import or release capability.
const fs = require('node:fs');
const crypto = require('node:crypto');
const sha = x => crypto.createHash('sha256').update(x).digest('hex');
const encode = x => JSON.stringify(x, null, 2) + '\n';
function adapt(selectionBytes, receiptBytes, readbackBytes, sourceHead) {
  const hold = (reason, detail) => ({status:'HOLD',reason,detail,publishedByAdapter:false,externalWrites:0,endToEndProven:false});
  try {
    if (!/^[a-f0-9]{40}$/.test(sourceHead || '')) return hold('SOURCE_HEAD','Exact source commit required');
    const selection=JSON.parse(selectionBytes),receipt=JSON.parse(receiptBytes),rb=JSON.parse(readbackBytes);
    const week=selection.week;
    if (!/^\d{4}-W\d{2}$/.test(week || '') || receipt.week!==week.replace('-W','-') || receipt.status!=='published') return hold('WEEK_SOURCE','Receipt must identify published week');
    if (!/^[A-Za-z0-9]{22}$/.test(receipt.playlistId || '') || receipt.url!=='https://open.spotify.com/playlist/'+receipt.playlistId) return hold('PLAYLIST_SOURCE','Exact playlist identity required');
    if (rb.kind!=='public-embed-readback' || rb.playlistId!==receipt.playlistId || rb.sourceUrl!=='https://open.spotify.com/embed/playlist/'+receipt.playlistId || rb.sourceHead!==sourceHead || rb.error || !Number.isFinite(Date.parse(rb.checkedAt)) || Date.parse(rb.checkedAt)>Date.now() || !Number.isFinite(Date.parse(receipt.verifiedAt)) || Date.parse(rb.checkedAt)<Date.parse(receipt.verifiedAt)) return hold('READBACK_SOURCE','Independent dated readback required');
    if (rb.name!==receipt.name || receipt.name!=='Ontdek DNA #'+receipt.week) return hold('PLAYLIST_SOURCE','Playlist name mismatch');
    if (!Array.isArray(selection.positiveCandidates) || selection.selectedCount!==21 || receipt.count!==21) return hold('SELECTION_SOURCE','Source counts must agree on 21');
    const selected=selection.positiveCandidates.filter(t=>t.selected===true).sort((a,b)=>a.listeningPosition-b.listeningPosition);
    if (selected.length!==21 || new Set(selected.map(t=>t.spotifyTrackId)).size!==21 || selected.some((t,i)=>t.listeningPosition!==i+1 || !/^[A-Za-z0-9]{22}$/.test(t.spotifyTrackId || '') || !Array.isArray(t.spotifyArtists) || !/^spotify:artist:[A-Za-z0-9]{22}$/.test(t.spotifyArtists[0]?.uri || '') || !t.spotifyArtists[0]?.name)) return hold('SELECTION_SOURCE','Exact unique ordered 21 with primary artist identity required');
    const uris=selected.map(t=>'spotify:track:'+t.spotifyTrackId);
    if (!Array.isArray(receipt.tracks) || JSON.stringify(receipt.tracks.map(t=>t.uri))!==JSON.stringify(uris) || JSON.stringify(rb.orderedUris)!==JSON.stringify(uris)) return hold('ORDER_MISMATCH','Selection, receipt and independent readback differ');
    const provenance={sourceHead,selectionSha256:sha(selectionBytes),deliveryReceiptSha256:sha(receiptBytes),readbackSha256:sha(readbackBytes)};
    const manifest={schemaVersion:1,week,frozen:true,setKind:'published-playlist-snapshot',
      cohortMeaning:'Published W44 selection; does not reconstruct a 2.0 original official cohort or extra cohort.',
      frozenAt:rb.checkedAt,playlistUrl:receipt.url,provenance,
      tracks:selected.map(t=>({uri:'spotify:track:'+t.spotifyTrackId,artistId:t.spotifyArtists[0].uri,artistName:t.spotifyArtists[0].name,title:t.title}))};
    const manifestBytes=encode(manifest);
    const weekReadback={week,kind:'external-readback',sourceKind:'public-spotify-embed',sourceUrl:rb.sourceUrl,checkedAt:rb.checkedAt,manifestSha256:sha(manifestBytes),orderedUris:uris,authenticatedAccount:false,audioPlayed:false};
    const artistIds=[...new Set(manifest.tracks.map(t=>t.artistId))];
    const bioQueue=artistIds.map(artistId=>({artistId,name:manifest.tracks.find(t=>t.artistId===artistId).artistName,status:'research-required',claimIds:[],sourceManifestSha256:sha(manifestBytes)}));
    return {status:'SOURCE_MATCHED',manifest,manifestSha256:sha(manifestBytes),weekReadback,bioQueue,publishedByAdapter:false,externalWrites:0,endToEndProven:false,
      limits:['Only identity/order are compared; bios, factual/visual QA and Express delivery remain open.','Receipt account/folder/cover observations are historical testimony, not reverified by this adapter.','Does not infer ratings, sealed forecasts, cohorts, stock transactions or automatic Saturday operation.']};
  } catch (e) { return hold('INVALID_SOURCE',e.message); }
}
module.exports={adapt,encode};
if(require.main===module){
  let r;try{r=adapt(...process.argv.slice(2,5).map(p=>fs.readFileSync(p)),process.argv[5]);}catch(e){r={status:'HOLD',reason:'SOURCE_IO',detail:e.message,publishedByAdapter:false,externalWrites:0,endToEndProven:false};}
  process.stdout.write(encode(r));process.exitCode=r.status==='SOURCE_MATCHED'?0:2;
}
