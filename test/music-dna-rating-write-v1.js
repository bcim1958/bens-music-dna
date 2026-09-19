(function(){
  function parse(raw,f){try{return raw?JSON.parse(raw):f}catch(e){return f}}
  function stateKey(week,day,reserve){return 'bmd-week-'+week+'-day'+day+(reserve?'-reserve':'')+'-v1'}
  function writeRating(x){
    if(!x||!x.weekKey||!x.day||!x.trackId||!x.rating)return {ok:false,reason:'missing-input'};
    if(!/^[0-9]{4}-W[0-9]{2}$/.test(x.weekKey)||!Number.isInteger(x.day)||x.day<1||x.day>7)return {ok:false,reason:'invalid-scope'};
    if(['raak','goed','twijfel','nee'].indexOf(x.rating)<0)return {ok:false,reason:'invalid-rating'};
    if(!window.MUSIC_DNA_RATING_LEDGER||!window.MUSIC_DNA_LEARNING||!window.MUSIC_DNA_POSITIVE_BANK)return {ok:false,reason:'dependencies-missing'};
    var key=stateKey(x.weekKey,x.day,!!x.reserve),st=parse(localStorage.getItem(key),{}),before=st[x.trackId]||null,at=x.ratedAt||new Date().toISOString();
    st[x.trackId]={rating:x.rating,ratedAt:at,meter:!x.reserve,slot:x.reserve?'reserve':null};
    localStorage.setItem(key,JSON.stringify(st));
    var ledgerOk=MUSIC_DNA_RATING_LEDGER.record({trackId:x.trackId,weekKey:x.weekKey,rating:x.rating,ratedAt:at,source:x.reserve?'reserve':'official',meter:!x.reserve,slot:x.reserve?'reserve':null});
    if(!ledgerOk){if(before)st[x.trackId]=before;else delete st[x.trackId];localStorage.setItem(key,JSON.stringify(st));return {ok:false,reason:'ledger-rejected'};}
    try{MUSIC_DNA_LEARNING.resyncStoredRatings();MUSIC_DNA_POSITIVE_BANK.sync()}catch(e){return {ok:false,reason:'derived-sync-failed',committed:true};}
    var latest=MUSIC_DNA_RATING_LEDGER.read().latest[x.trackId];
    if(!latest||latest.rating!==({terugkomen:'twijfel',niet:'nee'}[x.rating]||x.rating))return {ok:false,reason:'ledger-verify-failed',committed:true};
    return {ok:true,committed:true,key:key,ratedAt:at,source:x.reserve?'reserve':'official'};
  }
  function resyncDerived(){
    if(!window.MUSIC_DNA_LEARNING||!window.MUSIC_DNA_POSITIVE_BANK)return {ok:false,reason:'dependencies-missing'};
    try{MUSIC_DNA_LEARNING.resyncStoredRatings();MUSIC_DNA_POSITIVE_BANK.sync();return {ok:true}}catch(e){return {ok:false,reason:'derived-sync-failed'}}
  }
  window.MUSIC_DNA_RATING_WRITE={version:4,writeRating:writeRating,resyncDerived:resyncDerived,stateKey:stateKey};
})();