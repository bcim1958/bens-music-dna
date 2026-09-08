(function(){
  var LEGACY_KEYS=['bmd-day1-v13','bmd-day2-v13','bmd-day3-v13','bmd-day4-v13','bmd-day5-v13','bmd-day6-v13','bmd-day7-v13','bmd-day8-v13','bmd-day9-v13','bmd-day10-v13'];
  var LEARNING_KEY='bmd-learning-v1';
  var WEIGHTS={raak:2,goed:1,twijfel:0,nee:-2};
  var PROD_RE=/^bmd-week-\d{4}-W\d{2}-day[1-7]-v1$/;
  function safeParse(raw,fallback){try{return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}
  function readLearning(){return safeParse(window.localStorage.getItem(LEARNING_KEY),{version:6,signals:{},updatedAt:null});}
  function writeLearning(model){try{window.localStorage.setItem(LEARNING_KEY,JSON.stringify(model));}catch(e){}}
  function findTrack(id){
    if(typeof MUSIC_DNA_DB!=='undefined'&&MUSIC_DNA_DB.tracks&&MUSIC_DNA_DB.tracks[id])return MUSIC_DNA_DB.tracks[id];
    if(typeof MUSIC_DNA_W35_CANDIDATES!=='undefined'&&MUSIC_DNA_W35_CANDIDATES.tracks&&MUSIC_DNA_W35_CANDIDATES.tracks[id])return MUSIC_DNA_W35_CANDIDATES.tracks[id];
    if(typeof MUSIC_DNA_W36_CANDIDATES!=='undefined'&&MUSIC_DNA_W36_CANDIDATES.tracks&&MUSIC_DNA_W36_CANDIDATES.tracks[id])return MUSIC_DNA_W36_CANDIDATES.tracks[id];
    if(typeof MUSIC_DNA_WEEK_CANDIDATES!=='undefined'&&MUSIC_DNA_WEEK_CANDIDATES.tracks&&MUSIC_DNA_WEEK_CANDIDATES.tracks[id])return MUSIC_DNA_WEEK_CANDIDATES.tracks[id];
    return null;
  }
  function exactSpotifyUrl(id,t){
    if(typeof MUSIC_DNA_DELIVERY_REGISTRY!=='undefined'&&MUSIC_DNA_DELIVERY_REGISTRY.tracks&&MUSIC_DNA_DELIVERY_REGISTRY.tracks[id])return MUSIC_DNA_DELIVERY_REGISTRY.tracks[id].spotifyUrl;
    if(!t)return null;if(t.spotifyUrl&&/open\.spotify\.com\/track\/[A-Za-z0-9]+/.test(t.spotifyUrl))return t.spotifyUrl;
    var sid=t.spotify&&t.spotify.id;if(sid&&t.spotify.resolvedExact===true)return 'https://open.spotify.com/track/'+sid;return null;
  }
  function upsertSignal(id,rating,ratedAt){
    if(!rating||!Object.prototype.hasOwnProperty.call(WEIGHTS,rating))return false;var t=findTrack(id);if(!t)return false;var url=exactSpotifyUrl(id,t),model=readLearning();if(!model.signals)model.signals={};model.version=6;
    model.signals[id]={trackId:id,rating:rating,weight:WEIGHTS[rating],ratedAt:ratedAt||null,artist:t.identity.artist,title:t.identity.title,country:t.identity.country,releaseYear:t.identity.releaseYear,albumOrRelease:t.identity.albumOrRelease||null,styles:(t.taxonomy&&t.taxonomy.allMusicStyles?t.taxonomy.allMusicStyles.slice():[]),dnaRoute:(t.discoverDNA&&t.discoverDNA.dnaRoute?t.discoverDNA.dnaRoute.slice():[]),role:t.discoverDNA?t.discoverDNA.role:null,spotifyUrl:url,spotifyResolvedExact:!!url};
    model.updatedAt=new Date().toISOString();writeLearning(model);return true;
  }
  function hydrateExistingDelivery(){var model=readLearning(),changed=false;if(!model.signals)model.signals={};for(var id in model.signals){if(!Object.prototype.hasOwnProperty.call(model.signals,id))continue;var s=model.signals[id],url=exactSpotifyUrl(id,findTrack(id));if(url&&(s.spotifyUrl!==url||s.spotifyResolvedExact!==true)){s.spotifyUrl=url;s.spotifyResolvedExact=true;changed=true;}}if(changed){model.version=6;model.updatedAt=new Date().toISOString();writeLearning(model);}return changed;}
  function ingestState(raw){var state=safeParse(raw,{});for(var id in state)if(Object.prototype.hasOwnProperty.call(state,id)&&state[id]&&state[id].rating)upsertSignal(id,state[id].rating,state[id].ratedAt);}
  function ingestLegacyFlexible(raw){var state=safeParse(raw,{});for(var key in state){if(!Object.prototype.hasOwnProperty.call(state,key))continue;var row=state[key];if(!row||!row.rating)continue;var id=row.trackId||row.id||key;if(findTrack(id))upsertSignal(id,row.rating,row.ratedAt);}}
  function isStateKey(key){if(PROD_RE.test(key))return true;for(var i=0;i<LEGACY_KEYS.length;i++)if(LEGACY_KEYS[i]===key)return true;return false;}
  hydrateExistingDelivery();
  for(var i=0;i<LEGACY_KEYS.length;i++)ingestLegacyFlexible(window.localStorage.getItem(LEGACY_KEYS[i]));
  for(var j=0;j<window.localStorage.length;j++){var k=window.localStorage.key(j);if(k&&PROD_RE.test(k))ingestState(window.localStorage.getItem(k));}
  hydrateExistingDelivery();
  var originalSetItem=window.localStorage.setItem.bind(window.localStorage);window.localStorage.setItem=function(key,value){originalSetItem(key,value);if(PROD_RE.test(key))ingestState(value);else if(isStateKey(key))ingestLegacyFlexible(value);};
  window.MUSIC_DNA_LEARNING={version:6,weights:WEIGHTS,storageKey:LEARNING_KEY,legacyKeys:LEGACY_KEYS.slice(),productionKeyPattern:PROD_RE,read:readLearning,hydrateExistingDelivery:hydrateExistingDelivery};
})();