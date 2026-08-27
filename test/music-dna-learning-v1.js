(function(){
  var LEGACY_KEYS=['bmd-day1-v13','bmd-day2-v13','bmd-day3-v13','bmd-day4-v13','bmd-day5-v13','bmd-day6-v13','bmd-day7-v13','bmd-day8-v13','bmd-day9-v13','bmd-day10-v13'];
  var LEARNING_KEY='bmd-learning-v1';
  var WEIGHTS={raak:2,goed:1,twijfel:0,nee:-2};
  var PROD_RE=/^bmd-week-\d{4}-W\d{2}-day[1-7]-v1$/;

  function safeParse(raw,fallback){try{return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}
  function readLearning(){return safeParse(window.localStorage.getItem(LEARNING_KEY),{version:2,signals:{},updatedAt:null});}
  function writeLearning(model){try{window.localStorage.setItem(LEARNING_KEY,JSON.stringify(model));}catch(e){}}
  function findTrack(id){
    if(typeof MUSIC_DNA_DB!=='undefined'&&MUSIC_DNA_DB.tracks&&MUSIC_DNA_DB.tracks[id])return MUSIC_DNA_DB.tracks[id];
    if(typeof MUSIC_DNA_W35_CANDIDATES!=='undefined'&&MUSIC_DNA_W35_CANDIDATES.tracks&&MUSIC_DNA_W35_CANDIDATES.tracks[id])return MUSIC_DNA_W35_CANDIDATES.tracks[id];
    if(typeof MUSIC_DNA_W36_CANDIDATES!=='undefined'&&MUSIC_DNA_W36_CANDIDATES.tracks&&MUSIC_DNA_W36_CANDIDATES.tracks[id])return MUSIC_DNA_W36_CANDIDATES.tracks[id];
    if(typeof MUSIC_DNA_WEEK_CANDIDATES!=='undefined'&&MUSIC_DNA_WEEK_CANDIDATES.tracks&&MUSIC_DNA_WEEK_CANDIDATES.tracks[id])return MUSIC_DNA_WEEK_CANDIDATES.tracks[id];
    return null;
  }
  function upsertSignal(id,rating,ratedAt){
    if(!rating||!Object.prototype.hasOwnProperty.call(WEIGHTS,rating))return;
    var t=findTrack(id);if(!t)return;
    var model=readLearning();if(!model.signals)model.signals={};model.version=2;
    model.signals[id]={trackId:id,rating:rating,weight:WEIGHTS[rating],ratedAt:ratedAt||null,artist:t.identity.artist,title:t.identity.title,country:t.identity.country,releaseYear:t.identity.releaseYear,styles:(t.taxonomy&&t.taxonomy.allMusicStyles?t.taxonomy.allMusicStyles.slice():[]),dnaRoute:(t.discoverDNA&&t.discoverDNA.dnaRoute?t.discoverDNA.dnaRoute.slice():[]),role:t.discoverDNA?t.discoverDNA.role:null};
    model.updatedAt=new Date().toISOString();writeLearning(model);
  }
  function ingestState(raw){var state=safeParse(raw,{});for(var id in state)if(Object.prototype.hasOwnProperty.call(state,id)&&state[id]&&state[id].rating)upsertSignal(id,state[id].rating,state[id].ratedAt);}
  function isStateKey(key){if(PROD_RE.test(key))return true;for(var i=0;i<LEGACY_KEYS.length;i++)if(LEGACY_KEYS[i]===key)return true;return false;}

  for(var i=0;i<LEGACY_KEYS.length;i++)ingestState(window.localStorage.getItem(LEGACY_KEYS[i]));
  for(var j=0;j<window.localStorage.length;j++){var k=window.localStorage.key(j);if(k&&PROD_RE.test(k))ingestState(window.localStorage.getItem(k));}

  var originalSetItem=window.localStorage.setItem.bind(window.localStorage);
  window.localStorage.setItem=function(key,value){originalSetItem(key,value);if(isStateKey(key))ingestState(value);};

  window.MUSIC_DNA_LEARNING={version:2,weights:WEIGHTS,storageKey:LEARNING_KEY,legacyKeys:LEGACY_KEYS.slice(),productionKeyPattern:PROD_RE,read:readLearning};
})();