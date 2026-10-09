'use strict';
// Read-only: never load learning/bank modules (both write on initialization).
const fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto'),path=require('node:path');
const root=path.resolve(__dirname,'..');
function audit(file){
 const raw=fs.readFileSync(file),snapshot=JSON.parse(raw),source=snapshot.storage;
 if(!source||typeof source!=='object'||Array.isArray(source))throw Error('Expected exported storage object');
 const storage=Object.fromEntries(Object.entries(source).map(([k,v])=>[k,typeof v==='string'?JSON.parse(v):v]));
 const ctx={window:null};ctx.window=ctx;vm.createContext(ctx);
 const catalogs=fs.readdirSync(path.join(root,'test')).filter(f=>/^music-dna-(?:candidates-w(?:3[5-9]|40)-|w41-candidates-|external-candidates-|data-v1\.3|delivery-registry-v1)/.test(f)&&f.endsWith('.js')).sort();
 const hashes={};for(const f of catalogs){const b=fs.readFileSync(path.join(root,'test',f));hashes['test/'+f]=crypto.createHash('sha256').update(b).digest('hex');vm.runInContext(b.toString(),ctx,{filename:f});}
 const tracks={};for(const obj of Object.values(ctx))if(obj&&obj.tracks)for(const [id,t] of Object.entries(obj.tracks))if(t.identity)tracks[id]=t;
 const signals=storage['bmd-learning-v1']?.signals||{},bank=storage['bmd-positive-bank-v1']?.items||{};
 const sid=x=>String(x?.spotifyUrl||x?.spotifyUri||'').match(/track[:/]([A-Za-z0-9]{22})/)?.[1]||null;
 const norm=x=>String(x||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
 function metadata(id){const t=tracks[id],s=signals[id]||{},b=bank[id]||{};return {artist:t?.identity.artist||s.artist||b.artist||null,title:t?.identity.title||s.title||b.title||null,spotifyTrackId:sid(t)||sid(s)||sid(b),metadataSource:t?'repository catalog':s.artist?'persisted learning':b.artist?'persisted bank':null};}
 const offers=[],ratings=[];
 for(const [key,q] of Object.entries(storage)){
  if(/^bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?selection-v1$/.test(key))for(const id of (q.ids||(q.id?[q.id]:[])).concat(q.retiredIds||[]))offers.push({key,id,createdAt:q.createdAt||null,retired:(q.retiredIds||[]).includes(id),...metadata(id)});
  if(/^bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?v1$/.test(key))for(const [id,r] of Object.entries(q))if(r?.rating)ratings.push({key,id,rating:r.rating,ratedAt:r.ratedAt||null,learningPresent:!!signals[id],learningRating:signals[id]?.rating||null,learningRatingMatches:signals[id]?.rating===r.rating,...metadata(id)});
 }
 const target=x=>['tower','tanith'].includes(norm(x.artist));
 const byArtist={},byRecording={};for(const x of offers){if(x.artist)for(const credit of x.artist.split(';').map(norm).filter(Boolean))(byArtist[credit]||=[]).push(x);if(x.spotifyTrackId)(byRecording[x.spotifyTrackId]||=[]).push(x);}
 const fifo=Object.entries(bank).map(([id,x])=>({id,artist:x.artist||null,title:x.title||null,rating:x.rating,firstPositiveAt:x.firstPositiveAt||null,ratedAt:x.ratedAt||null,playlistUses:x.playlistUses??null,spotifyTrackId:sid(x)})).sort((a,b)=>String(a.firstPositiveAt||a.ratedAt||'').localeCompare(String(b.firstPositiveAt||b.ratedAt||''))||a.id.localeCompare(b.id));
 return {scope:'Saved snapshot only; selections are registrations, not proof of visible rendering. Spotify IDs do not prove equivalence across remasters/IDs. FIFO is stored snapshot order, not current device inventory.',snapshotSha256:crypto.createHash('sha256').update(raw).digest('hex'),exportedAt:snapshot.exportedAt||null,storageKeyCount:Object.keys(storage).length,catalogHashes:hashes,counts:{offers:offers.length,unresolvedOffers:offers.filter(x=>!x.artist).length,ratings:ratings.length,ratingsMissingLearning:ratings.filter(x=>!x.learningPresent).length,ratingsDifferentFromLearning:ratings.filter(x=>x.learningPresent&&!x.learningRatingMatches).length,learningSignals:Object.keys(signals).length,storedBankItems:fifo.length},targetOffers:offers.filter(target),targetRatings:ratings.filter(target),targetLearning:Object.entries(signals).filter(([id,s])=>target(s)).map(([id,s])=>({id,rating:s.rating,...metadata(id)})),targetBank:fifo.filter(target),repeatArtists:Object.fromEntries(Object.entries(byArtist).filter(([,v])=>v.length>1)),repeatSpotifyIds:Object.fromEntries(Object.entries(byRecording).filter(([,v])=>v.length>1)),storedFifo:fifo,storedPlaylistHistory:storage['bmd-positive-playlist-history-v1']||null};
}
module.exports={audit};
if(require.main===module){if(!process.argv[2])throw Error('Usage: node scripts/audit-discovery-history.cjs snapshot.json');console.log(JSON.stringify(audit(process.argv[2]),null,2));}
