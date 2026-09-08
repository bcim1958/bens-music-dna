(function(){
  var VERSION=2;
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
  function deliverable(x){return !!(x&&x.spotifyResolvedExact&&x.spotifyUrl&&/open\.spotify\.com\/track\/[A-Za-z0-9]+/.test(x.spotifyUrl));}

  function sync(){
    var s=signals(),old=read(BANK_KEY,{version:VERSION,items:{}}),used=usedCounts(),items={};
    for(var id in s){if(!Object.prototype.hasOwnProperty.call(s,id))continue;var x=s[id];if(x.rating!=='raak'&&x.rating!=='goed')continue;
      var prev=old.items&&old.items[id]||{};
      items[id]={trackId:id,rating:x.rating,weight:x.weight,artist:x.artist,title:x.title,country:x.country,releaseYear:x.releaseYear,albumOrRelease:x.albumOrRelease||null,styles:x.styles||[],dnaRoute:x.dnaRoute||[],ratedAt:x.ratedAt||null,spotifyUrl:x.spotifyUrl||null,spotifyResolvedExact:!!x.spotifyResolvedExact,deliverable:deliverable(x),firstPositiveAt:prev.firstPositiveAt||x.ratedAt||new Date().toISOString(),playlistUses:used[id]||0,lastPlaylistWeek:prev.lastPlaylistWeek||null};
    }
    var bank={version:VERSION,items:items,updatedAt:new Date().toISOString()};write(BANK_KEY,bank);return bank;
  }

  function inventory(){
    var bank=sync(),fresh=0,reusable=0,total=0,plus=0,plusplus=0,deliverableTotal=0,blocked=0;
    for(var id in bank.items){var x=bank.items[id];total++;if(x.rating==='raak')plusplus++;else plus++;if(x.deliverable){deliverableTotal++;if((x.playlistUses||0)===0)fresh++;else reusable++;}else blocked++;}
    return {total:total,deliverable:deliverableTotal,blocked:blocked,fresh:fresh,reusable:reusable,plus:plus,plusplus:plusplus,targetReserve:TARGET_RESERVE,healthy:fresh>=TARGET_RESERVE,shortfall:Math.max(0,TARGET_RESERVE-fresh)};
  }

  function sortPositive(a,b){
    var au=a.playlistUses||0,bu=b.playlistUses||0;if(au!==bu)return au-bu;
    var ar=ratingRank(a.rating),br=ratingRank(b.rating);if(ar!==br)return br-ar;
    var ad=a.ratedAt||'',bd=b.ratedAt||'';return bd.localeCompare(ad);
  }

  function buildSaturdayPlaylist(weekKey,weekCandidateIds){
    var bank=sync(),candidateSet={},selected=[],selectedSet={};weekCandidateIds=weekCandidateIds||[];
    for(var i=0;i<weekCandidateIds.length;i++)candidateSet[weekCandidateIds[i]]=true;
    var current=[],reserve=[],blocked=[];
    for(var id in bank.items){var x=bank.items[id];if(!x.deliverable){blocked.push(x);continue;}if(candidateSet[id])current.push(x);else reserve.push(x);}
    current.sort(sortPositive);reserve.sort(sortPositive);
    function addRows(rows){for(var j=0;j<rows.length&&selected.length<PLAYLIST_SIZE;j++){var x=rows[j];if(selectedSet[x.trackId])continue;selected.push(x);selectedSet[x.trackId]=true;}}
    addRows(current);addRows(reserve);
    return {version:VERSION,weekKey:weekKey||null,size:selected.length,targetSize:PLAYLIST_SIZE,complete:selected.length===PLAYLIST_SIZE,ids:selected.map(function(x){return x.trackId;}),tracks:selected,fromCurrentWeek:selected.filter(function(x){return !!candidateSet[x.trackId];}).length,fromReserve:selected.filter(function(x){return !candidateSet[x.trackId];}).length,blockedUndeliverable:blocked.map(function(x){return x.trackId;}),createdAt:new Date().toISOString()};
  }

  function commitSaturdayPlaylist(result){
    if(!result||!result.weekKey||!result.complete)return false;
    var h=history();h.version=VERSION;h.weeks[result.weekKey]={ids:result.ids.slice(),createdAt:result.createdAt||new Date().toISOString()};write(PLAYLIST_HISTORY_KEY,h);
    var bank=sync();for(var i=0;i<result.ids.length;i++){var id=result.ids[i];if(bank.items[id])bank.items[id].lastPlaylistWeek=result.weekKey;}write(BANK_KEY,bank);return true;
  }

  function selectorMode(){var inv=inventory();if(inv.fresh<7)return {mode:'protect',exploration:0.15,reason:'bezorgbare positieve voorraad zeer krap',inventory:inv};if(inv.fresh<TARGET_RESERVE)return {mode:'rebuild',exploration:0.3,reason:'bezorgbare positieve voorraad aanvullen',inventory:inv};return {mode:'normal',exploration:0.45,reason:'bezorgbare positieve voorraad gezond',inventory:inv};}

  window.MUSIC_DNA_POSITIVE_BANK={version:VERSION,playlistSize:PLAYLIST_SIZE,targetReserve:TARGET_RESERVE,storageKey:BANK_KEY,historyKey:PLAYLIST_HISTORY_KEY,sync:sync,inventory:inventory,buildSaturdayPlaylist:buildSaturdayPlaylist,commitSaturdayPlaylist:commitSaturdayPlaylist,selectorMode:selectorMode};
})();