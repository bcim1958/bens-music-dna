(function(){
  var VERSION=6;
  var PLAYLIST_SIZE=21;
  var TARGET_RESERVE=21;
  var BANK_KEY='bmd-positive-bank-v1';
  var PLAYLIST_HISTORY_KEY='bmd-positive-playlist-history-v1';

  function parse(raw,fallback){try{return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}
  function read(key,fallback){return parse(window.localStorage.getItem(key),fallback);}
  function write(key,value){try{window.localStorage.setItem(key,JSON.stringify(value));}catch(e){}}
  function signals(){var m=window.MUSIC_DNA_LEARNING&&window.MUSIC_DNA_LEARNING.read?window.MUSIC_DNA_LEARNING.read():null;return m&&m.signals?m.signals:{};}
  function ratingRank(r){return r==='raak'?2:r==='goed'?1:0;}
  function history(){return read(PLAYLIST_HISTORY_KEY,{version:VERSION,weeks:{}});}
  function usedCounts(){var h=history(),out={};for(var week in h.weeks){var ids=h.weeks[week]&&h.weeks[week].ids||[];for(var i=0;i<ids.length;i++)out[ids[i]]=(out[ids[i]]||0)+1;}return out;}
  function deliveredBefore(id,weekKey){var h=history(),weeks=h.weeks||{};for(var wk in weeks){if(!Object.prototype.hasOwnProperty.call(weeks,wk))continue;if(weekKey&&wk>=weekKey)continue;var ids=weeks[wk]&&weeks[wk].ids||[];if(ids.indexOf(id)!==-1)return true;}return false;}
  function deliverable(x){return !!(x&&x.spotifyResolvedExact&&x.spotifyUrl&&/open\.spotify\.com\/track\/[A-Za-z0-9]+/.test(x.spotifyUrl));}
  function registryItem(id){var r=window.MUSIC_DNA_DELIVERY_REGISTRY;return r&&r.tracks&&r.tracks[id]||null;}

  function sync(){
    var s=signals(),old=read(BANK_KEY,{version:VERSION,items:{}}),used=usedCounts(),items={};
    for(var id in s){if(!Object.prototype.hasOwnProperty.call(s,id))continue;var x=s[id];if(x.rating!=='raak'&&x.rating!=='goed')continue;
      var prev=old.items&&old.items[id]||{},reg=registryItem(id);
      var safeUrl=(x.spotifyResolvedExact&&x.spotifyUrl)?x.spotifyUrl:((prev.spotifyResolvedExact&&prev.spotifyUrl)?prev.spotifyUrl:((reg&&reg.spotifyUrl)?reg.spotifyUrl:null));
      var safeExact=!!safeUrl;
      items[id]={trackId:id,rating:x.rating,weight:x.weight,artist:x.artist||prev.artist||(reg&&reg.verifiedArtist),title:x.title||prev.title||(reg&&reg.verifiedTitle),country:x.country||prev.country,releaseYear:x.releaseYear||prev.releaseYear,albumOrRelease:x.albumOrRelease||prev.albumOrRelease||null,styles:(x.styles&&x.styles.length?x.styles:prev.styles)||[],dnaRoute:(x.dnaRoute&&x.dnaRoute.length?x.dnaRoute:prev.dnaRoute)||[],ratedAt:x.ratedAt||prev.ratedAt||null,spotifyUrl:safeUrl,spotifyResolvedExact:safeExact,deliverable:deliverable({spotifyResolvedExact:safeExact,spotifyUrl:safeUrl}),firstPositiveAt:prev.firstPositiveAt||x.ratedAt||new Date().toISOString(),playlistUses:used[id]||0,lastPlaylistWeek:prev.lastPlaylistWeek||null};
    }
    var bank={version:VERSION,items:items,updatedAt:new Date().toISOString()};write(BANK_KEY,bank);return bank;
  }

  function inventory(){
    var bank=sync(),fresh=0,reusable=0,total=0,plus=0,plusplus=0,deliverableTotal=0,blocked=0;
    for(var id in bank.items){var x=bank.items[id];total++;if(x.rating==='raak')plusplus++;else plus++;if(x.deliverable){deliverableTotal++;if((x.playlistUses||0)===0)fresh++;else reusable++;}else blocked++;}
    return {total:total,deliverable:deliverableTotal,blocked:blocked,fresh:fresh,reusable:reusable,plus:plus,plusplus:plusplus,targetReserve:TARGET_RESERVE,healthy:fresh>=TARGET_RESERVE,shortfall:Math.max(0,TARGET_RESERVE-fresh)};
  }

  function sortPositive(a,b){var au=a.playlistUses||0,bu=b.playlistUses||0;if(au!==bu)return au-bu;var ar=ratingRank(a.rating),br=ratingRank(b.rating);if(ar!==br)return br-ar;var ad=a.ratedAt||'',bd=b.ratedAt||'';return bd.localeCompare(ad);}

  function db(){try{return typeof MUSIC_DNA_DB!=='undefined'&&MUSIC_DNA_DB&&MUSIC_DNA_DB.tracks?MUSIC_DNA_DB:null;}catch(e){return null;}}
  function w35(){try{return typeof MUSIC_DNA_W35_CANDIDATES!=='undefined'&&MUSIC_DNA_W35_CANDIDATES&&MUSIC_DNA_W35_CANDIDATES.tracks?MUSIC_DNA_W35_CANDIDATES:null;}catch(e){return null;}}

  function ensureRuntimeTrack(x){
    var d=db();if(!deliverable(x)||!d)return;
    var existing=d.tracks[x.trackId];
    if(existing){if(!existing.spotifyUrl)existing.spotifyUrl=x.spotifyUrl;return;}
    d.tracks[x.trackId]={identity:{artist:x.artist||'Onbekend',title:x.title||x.trackId,country:x.country||null,releaseYear:x.releaseYear||null,albumOrRelease:x.albumOrRelease||null},spotifyUrl:x.spotifyUrl,taxonomy:{allMusicStyles:(x.styles||[]).slice()},discoverDNA:{dnaRoute:(x.dnaRoute||[]).slice(),role:'positieve reserve'},editorial:{whyForYou:'Eerder positief beoordeeld en veilig bewaard in je Music-DNA-reserve.'}};
  }

  function buildSaturdayPlaylist(weekKey,weekCandidateIds){
    var bank=sync(),candidateSet={},selected=[],selectedSet={};weekCandidateIds=weekCandidateIds||[];for(var i=0;i<weekCandidateIds.length;i++)candidateSet[weekCandidateIds[i]]=true;
    var current=[],reserve=[],blocked=[],previouslyDelivered=[];for(var id in bank.items){var x=bank.items[id];if(!x.deliverable){blocked.push(x);continue;}if(deliveredBefore(id,weekKey)){previouslyDelivered.push(x);continue;}if(candidateSet[id])current.push(x);else reserve.push(x);}current.sort(sortPositive);reserve.sort(sortPositive);
    function addRows(rows){for(var j=0;j<rows.length&&selected.length<PLAYLIST_SIZE;j++){var x=rows[j];if(selectedSet[x.trackId])continue;selected.push(x);selectedSet[x.trackId]=true;}}
    addRows(current);addRows(reserve);for(var h=0;h<selected.length;h++)ensureRuntimeTrack(selected[h]);
    return {version:VERSION,weekKey:weekKey||null,size:selected.length,targetSize:PLAYLIST_SIZE,complete:selected.length===PLAYLIST_SIZE,ids:selected.map(function(x){return x.trackId;}),tracks:selected,fromCurrentWeek:selected.filter(function(x){return !!candidateSet[x.trackId];}).length,fromReserve:selected.filter(function(x){return !candidateSet[x.trackId];}).length,blockedUndeliverable:blocked.map(function(x){return x.trackId;}),blockedPreviouslyDelivered:previouslyDelivered.map(function(x){return x.trackId;}),createdAt:new Date().toISOString()};
  }

  function commitSaturdayPlaylist(result){if(!result||!result.weekKey||!result.complete)return false;var h=history();h.version=VERSION;h.weeks[result.weekKey]={ids:result.ids.slice(),createdAt:result.createdAt||new Date().toISOString()};write(PLAYLIST_HISTORY_KEY,h);var bank=sync();for(var i=0;i<result.ids.length;i++){var id=result.ids[i];if(bank.items[id])bank.items[id].lastPlaylistWeek=result.weekKey;}write(BANK_KEY,bank);return true;}
  function selectorMode(){var inv=inventory();if(inv.fresh<7)return {mode:'protect',exploration:0.15,reason:'bezorgbare positieve voorraad zeer krap',inventory:inv};if(inv.fresh<TARGET_RESERVE)return {mode:'rebuild',exploration:0.3,reason:'bezorgbare positieve voorraad aanvullen',inventory:inv};return {mode:'normal',exploration:0.45,reason:'bezorgbare positieve voorraad gezond',inventory:inv};}

  function findTrack(id){
    var d=db();if(d&&d.tracks[id])return d.tracks[id];
    var c=w35();if(c&&c.tracks[id])return c.tracks[id];
    for(var k in window){if(/^MUSIC_DNA_W\d+_CANDIDATES$/.test(k)){var x=window[k];if(x&&x.tracks&&x.tracks[id])return x.tracks[id];}}
    return null;
  }
  function sourceSpotifyOk(t){return !!(t&&t.spotifyUrl&&/open\.spotify\.com\/track\/[A-Za-z0-9]+/.test(t.spotifyUrl));}
  function weekIds(weekKey){var ids=[];for(var d=1;d<=7;d++){var s=read('bmd-week-'+weekKey+'-day'+d+'-selection-v1',null);if(s&&Array.isArray(s.ids))for(var i=0;i<s.ids.length;i++)ids.push(s.ids[i]);}return ids;}
  function giftDiagnostic(weekKey){var ids=weekIds(weekKey),inv=inventory(),gift=buildSaturdayPlaylist(weekKey,ids),missing=[],badSource=[];for(var i=0;i<gift.ids.length;i++){var id=gift.ids[i],t=findTrack(id);if(!t)missing.push(id);else if(!sourceSpotifyOk(t))badSource.push(id);}return {weekKey:weekKey,weekIds:ids.length,inventory:inv,giftSize:gift.size,fromCurrentWeek:gift.fromCurrentWeek,fromReserve:gift.fromReserve,missingSource:missing,badSourceSpotify:badSource,gift:gift};}
  function shortName(id){var bank=read(BANK_KEY,{items:{}}),x=bank.items&&bank.items[id];return x?(x.artist+' — '+x.title):id;}
  function renderInlineDiagnostic(){try{var q=new URLSearchParams(location.search),week=q.get('week');if(week!=='2026-W37')return;var eye=document.querySelector('.blocked .eye'),lead=document.querySelector('.blocked .lead');if(!eye||!lead||eye.textContent.toLowerCase().indexOf('veilige wachtstand')<0)return;var d=giftDiagnostic(week),lines=[];lines.push('<b>Diagnose W37</b>');lines.push('Weekselecties: '+d.weekIds+'/21 · positieve bank bezorgbaar: '+d.inventory.deliverable);lines.push('Cadeau opgebouwd: '+d.giftSize+'/21 · uit W37: '+d.fromCurrentWeek+' · reserve: '+d.fromReserve);lines.push('Eerder bezorgd uitgesloten: '+(d.gift.blockedPreviouslyDelivered||[]).length);lines.push('Brontrack ontbreekt: '+d.missingSource.length+' · brontrack zonder directe Spotify-ID: '+d.badSourceSpotify.length);var probs=d.missingSource.concat(d.badSourceSpotify).slice(0,6);if(probs.length){lines.push('<span style="color:#ffd166">Probleemitems:</span>');for(var i=0;i<probs.length;i++)lines.push('• '+shortName(probs[i])+' <span style="font-size:11px;opacity:.75">('+probs[i]+')</span>');}lead.innerHTML=lines.join('<br>');lead.style.fontSize='12px';lead.style.lineHeight='1.35';lead.style.maxWidth='500px';}catch(e){}}
  window.MUSIC_DNA_POSITIVE_BANK={version:VERSION,playlistSize:PLAYLIST_SIZE,targetReserve:TARGET_RESERVE,storageKey:BANK_KEY,historyKey:PLAYLIST_HISTORY_KEY,sync:sync,inventory:inventory,buildSaturdayPlaylist:buildSaturdayPlaylist,commitSaturdayPlaylist:commitSaturdayPlaylist,selectorMode:selectorMode,giftDiagnostic:giftDiagnostic};setTimeout(renderInlineDiagnostic,900);setTimeout(renderInlineDiagnostic,1800);setTimeout(renderInlineDiagnostic,3000);
})();