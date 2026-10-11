/* Explicit daily handoff. Reads current storage; never imports historical snapshots. */
(function(){
  function read(key){var raw=localStorage.getItem(key);return raw===null?null:JSON.parse(raw);}
  function sid(value){if(/^[A-Za-z0-9]{22}$/.test(String(value||'')))return String(value);var m=String(value||'').match(/(?:track[:/]|(?:pilot|external)-)([A-Za-z0-9]{22})(?:$|[?#])/);return m&&m[1];}
  function norm(value){return String(value||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');}
  function selection(cfg,candidates,day,isReserve,reserveCount){
    if(day!==1||cfg.preparedThroughDay!==1)throw Error('De volgende dag staat nog niet klaar.');
    var base='bmd-week-'+cfg.key+'-day'+day;
    var officialKey=base+'-selection-v1',reserveKey=base+'-reserve-selection-v1';
    var official=read(officialKey),reserve=read(reserveKey),plan=candidates.day1;
    function check(q,expected){
      if(!q)return;
      if(!Array.isArray(q.ids)||q.ids.length!==expected||new Set(q.ids).size!==q.ids.length||q.ids.some(function(id){return !candidates.tracks[id];}))throw Error('Een bestaande dagkeuze vraagt herstel; die is behouden.');
    }
    check(official,3);if(reserve)check(reserve,reserve.ids&&reserve.ids.length);
    if(reserve&&(!reserve.ids.length||reserve.ids.length>2))throw Error('Een bestaande reservekeuze vraagt herstel; die is behouden.');
    if(!official&&read(base+'-v1'))throw Error('Bestaande beoordelingen zonder dagkeuze zijn behouden.');
    if(!reserve&&read(base+'-reserve-v1'))throw Error('Bestaande reservebeoordelingen zonder keuze zijn behouden.');
    var ids=(official?official.ids:plan.official).concat(reserve?reserve.ids:plan.reserve.slice(0,reserveCount));
    if(new Set(ids).size!==ids.length)throw Error('Officiële nummers en reserves overlappen; bestaande gegevens zijn behouden.');
    var seen=new Set(),keys=new Set();
    function remember(value,key){
      if(typeof value==='string'){var recording=sid(value)||sid(key);if(recording)seen.add(recording);return;}
      if(!value||typeof value!=='object')return;var keyRecording=sid(key);if(keyRecording)seen.add(keyRecording);
      var identity=value.identity||value;
      if(identity.artist&&identity.title)keys.add(norm(identity.artist)+'|'+norm(identity.title));
      Object.keys(value).forEach(function(k){if(k!=='updatedAt'&&k!=='ratedAt')remember(value[k],k);});
    }
    for(var i=0;i<localStorage.length;i++){
      var key=localStorage.key(i);if(!/^bmd-/.test(key)||key.indexOf(base+'-')===0||key==='bmd-storage-health-v1')continue;
      var value=read(key);
      // Signals/bank entries for this already registered day are expected on resume.
      if((key==='bmd-learning-v1'||key==='bmd-positive-bank-v1'||key==='bmd-quarterly-doubt-v1')&&value){
        var entries=value.signals||value.items||{};
        Object.keys(entries).forEach(function(id){if(!ids.includes(id)||!(official&&official.ids.includes(id)||reserve&&reserve.ids.includes(id)))remember(entries[id],id);});
      }else remember(value,key);
    }
    ids.forEach(function(id){var t=candidates.tracks[id];if(seen.has(sid(t.spotifyUrl))||keys.has(norm(t.identity.artist)+'|'+norm(t.identity.title)))throw Error('Een gekozen opname staat al in je historie. De bestaande gegevens zijn behouden.');});
    var key=isReserve?reserveKey:officialKey,q=isReserve?reserve:official;
    if(q)return q;
    var chosen=isReserve?plan.reserve.slice(0,reserveCount):plan.official;
    if(!chosen.length)return null;
    q={ids:chosen.slice(),createdAt:new Date().toISOString(),meter:!isReserve,purpose:isReserve?'positive-reserve':'explicit-day-recovery',preparedDayVersion:1};
    localStorage.setItem(key,JSON.stringify(q));return q;
  }
  window.MUSIC_DNA_PREPARED_DAY={selection:selection};
})();
