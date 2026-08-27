(function(){
  var VERSION=1;

  function readSignals(){
    if(window.MUSIC_DNA_LEARNING&&typeof window.MUSIC_DNA_LEARNING.read==='function'){
      var model=window.MUSIC_DNA_LEARNING.read();
      return model&&model.signals?model.signals:{};
    }
    return {};
  }

  function add(map,key,value){
    if(!key)return;
    map[key]=(map[key]||0)+value;
  }

  function buildProfile(){
    var signals=readSignals();
    var profile={version:VERSION,count:0,styles:{},countries:{},dna:{},roles:{},artists:{},updatedAt:new Date().toISOString()};
    for(var id in signals){
      if(!Object.prototype.hasOwnProperty.call(signals,id))continue;
      var s=signals[id];
      var w=Number(s.weight)||0;
      profile.count++;
      add(profile.countries,s.country,w*0.25);
      add(profile.roles,s.role,w*0.15);
      add(profile.artists,s.artist,w*0.1);
      var styles=s.styles||[];
      for(var i=0;i<styles.length;i++)add(profile.styles,styles[i],w);
      var route=s.dnaRoute||[];
      for(var j=0;j<route.length;j++)add(profile.dna,route[j],w*0.7);
    }
    return profile;
  }

  function scoreCandidate(candidate,profile){
    profile=profile||buildProfile();
    var score=0,parts={styles:0,dna:0,country:0,role:0,base:0};
    if(!candidate)return {score:-999,parts:parts};
    var styles=(candidate.taxonomy&&candidate.taxonomy.allMusicStyles)||[];
    for(var i=0;i<styles.length;i++)parts.styles+=profile.styles[styles[i]]||0;
    var route=(candidate.discoverDNA&&candidate.discoverDNA.dnaRoute)||[];
    for(var j=0;j<route.length;j++)parts.dna+=profile.dna[route[j]]||0;
    var country=candidate.identity&&candidate.identity.country;
    parts.country=country?(profile.countries[country]||0):0;
    var role=candidate.discoverDNA&&candidate.discoverDNA.role;
    parts.role=role?(profile.roles[role]||0):0;
    parts.base=(candidate.selection&&Number(candidate.selection.baseScore))||0;
    score=parts.styles+(parts.dna*0.8)+(parts.country*0.5)+(parts.role*0.4)+parts.base;
    return {score:Math.round(score*100)/100,parts:parts};
  }

  function rank(candidates,options){
    options=options||{};
    var exclude=options.excludeIds||[];
    var excluded={};for(var i=0;i<exclude.length;i++)excluded[exclude[i]]=true;
    var profile=buildProfile();
    var ranked=[];
    for(var id in candidates){
      if(!Object.prototype.hasOwnProperty.call(candidates,id)||excluded[id])continue;
      var scored=scoreCandidate(candidates[id],profile);
      ranked.push({id:id,score:scored.score,parts:scored.parts,track:candidates[id]});
    }
    ranked.sort(function(a,b){return b.score-a.score;});
    return ranked;
  }

  function chooseBatch(candidates,options){
    options=options||{};
    var size=options.size||3;
    var ranked=rank(candidates,options);
    var chosen=[],artists={},countries={};
    for(var i=0;i<ranked.length&&chosen.length<size;i++){
      var row=ranked[i],artist=row.track.identity&&row.track.identity.artist,country=row.track.identity&&row.track.identity.country;
      if(artist&&artists[artist])continue;
      if(country&&(countries[country]||0)>=2)continue;
      chosen.push(row);
      if(artist)artists[artist]=true;
      if(country)countries[country]=(countries[country]||0)+1;
    }
    return chosen;
  }

  window.MUSIC_DNA_SELECTOR={version:VERSION,buildProfile:buildProfile,scoreCandidate:scoreCandidate,rank:rank,chooseBatch:chooseBatch};
})();