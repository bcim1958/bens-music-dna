(function(){
  var VERSION=2;
  var RATING_WEIGHT={raak:2,goed:1,twijfel:0,nee:-2};

  function read(key,fallback){try{var x=window.localStorage.getItem(key);return x?JSON.parse(x):fallback;}catch(e){return fallback;}}
  function stateKey(week,d){return 'bmd-week-'+week+'-day'+d+'-v1';}
  function selectionKey(week,d){return 'bmd-week-'+week+'-day'+d+'-selection-v1';}

  function weekSignals(week){
    var out=[],seen={};
    for(var d=1;d<=7;d++){
      var sel=read(selectionKey(week,d),null),state=read(stateKey(week,d),{});
      if(!sel||!Array.isArray(sel.ids)||sel.ids.length!==3)return {complete:false,reason:'selection',day:d,signals:out};
      for(var i=0;i<sel.ids.length;i++){
        var id=sel.ids[i],r=state[id]&&state[id].rating;
        if(!Object.prototype.hasOwnProperty.call(RATING_WEIGHT,r))return {complete:false,reason:'rating',day:d,trackId:id,signals:out};
        if(seen[id])return {complete:false,reason:'duplicate',day:d,trackId:id,signals:out};
        seen[id]=true;
        out.push({trackId:id,rating:r,weight:RATING_WEIGHT[r],ratedAt:state[id].ratedAt||null,day:d});
      }
    }
    return {complete:out.length===21,reason:out.length===21?null:'count',signals:out};
  }

  function ratingSummary(signals){
    var counts={raak:0,goed:0,twijfel:0,nee:0},score=0;
    (signals||[]).forEach(function(s){counts[s.rating]++;score+=s.weight;});
    return {counts:counts,score:score,positive:counts.raak+counts.goed,nonPositive:counts.twijfel+counts.nee};
  }

  function learnedIds(){
    var model=window.MUSIC_DNA_LEARNING&&MUSIC_DNA_LEARNING.read?MUSIC_DNA_LEARNING.read():{signals:{}};
    return Object.keys(model.signals||{});
  }


  function reserveSelectionKey(week,d){return 'bmd-week-'+week+'-day'+d+'-reserve-selection-v1';}
  function reserveStateKey(week,d){return 'bmd-week-'+week+'-day'+d+'-reserve-v1';}
  function weekSnapshot(week){
    var official=weekSignals(week),reserveOffered=0,reserveRated=0,reservePositive=0;
    for(var d=1;d<=7;d++){
      var sel=read(reserveSelectionKey(week,d),null),ids=sel?(sel.ids||(sel.id?[sel.id]:[])):[],state=read(reserveStateKey(week,d),{});
      reserveOffered+=ids.length;
      for(var i=0;i<ids.length;i++){var r=state[ids[i]]&&state[ids[i]].rating;if(r){reserveRated++;if(r==='raak'||r==='goed')reservePositive++;}}
    }
    return {week:week,official:official,officialSummary:ratingSummary(official.signals),reserve:{offered:reserveOffered,rated:reserveRated,positive:reservePositive}};
  }
  function continuity(fromWeek,toWeek){
    var from=weekSnapshot(fromWeek),to=weekSnapshot(toWeek),learning=read('bmd-learning-v1',{signals:{}}),bank=read('bmd-positive-bank-v1',{items:{}}),history=read('bmd-positive-playlist-history-v1',{weeks:{}}),gift=read('bmd-gift-'+fromWeek+'-v1',null),delivery=read('bmd-delivery-'+fromWeek+'-v1',null);
    var toOfficial=to.official.signals||[],toIds={};for(var i=0;i<toOfficial.length;i++)toIds[toOfficial[i].trackId]=1;
    var preservedLearning=Object.keys(learning.signals||{}).filter(function(id){return !toIds[id];}).length;
    return {version:VERSION,fromWeek:fromWeek,toWeek:toWeek,fromComplete:!!from.official.complete,toStarted:toOfficial.length>0,from:from,to:to,learningSignalCount:Object.keys(learning.signals||{}).length,preservedPriorLearningCount:preservedLearning,positiveBankCount:Object.keys(bank.items||{}).length,historyHasFromWeek:!!(history.weeks&&history.weeks[fromWeek]),giftStored:!!gift,deliveryStored:!!delivery,checkedAt:new Date().toISOString()};
  }

  function candidatePlan(fromWeek,toWeek,candidates,options){
    options=options||{};
    var target=Math.max(24,Number(options.target)||30),source=weekSignals(fromWeek);
    if(!source.complete)return {ready:false,fromWeek:fromWeek,toWeek:toWeek,reason:'source-week-incomplete',source:source};
    if(!window.MUSIC_DNA_SELECTOR||typeof window.MUSIC_DNA_SELECTOR.rank!=='function')return {ready:false,fromWeek:fromWeek,toWeek:toWeek,reason:'selector-unavailable'};
    if(!candidates||typeof candidates!=='object')return {ready:false,fromWeek:fromWeek,toWeek:toWeek,reason:'candidate-pool-missing'};
    var ranked=window.MUSIC_DNA_SELECTOR.rank(candidates,{excludeIds:learnedIds()}),chosen=[],artists={};
    for(var i=0;i<ranked.length&&chosen.length<target;i++){
      var row=ranked[i],artist=row.track&&row.track.identity&&row.track.identity.artist;
      if(artist&&artists[artist])continue;
      chosen.push(row);if(artist)artists[artist]=true;
    }
    return {
      ready:chosen.length>=24,
      fromWeek:fromWeek,
      toWeek:toWeek,
      generatedAt:new Date().toISOString(),
      sourceSummary:ratingSummary(source.signals),
      profileCount:window.MUSIC_DNA_SELECTOR.buildProfile().count,
      target:target,
      minimum:24,
      availableRanked:ranked.length,
      ids:chosen.map(function(x){return x.id;}),
      ranked:chosen.map(function(x){return {id:x.id,score:x.score,parts:x.parts,artist:x.track.identity.artist,title:x.track.identity.title};}),
      reason:chosen.length>=24?null:'insufficient-safe-candidates'
    };
  }

  window.MUSIC_DNA_WEEK_TRANSITION={version:VERSION,weekSignals:weekSignals,ratingSummary:ratingSummary,weekSnapshot:weekSnapshot,continuity:continuity,candidatePlan:candidatePlan};
})();