/* Explicit daily handoff. Reads current storage; never imports historical snapshots. */
(function(){
  var localStorage=(typeof document!=='undefined'&&document.defaultView===window&&window.MUSIC_DNA_DAILY_STORE)?window.MUSIC_DNA_DAILY_STORE.view:window.localStorage;
  function read(key){var raw=localStorage.getItem(key);return raw===null?null:JSON.parse(raw);}
  function sid(value){if(/^[A-Za-z0-9]{22}$/.test(String(value||'')))return String(value);var m=String(value||'').match(/(?:track[:/]|(?:pilot|external)-)([A-Za-z0-9]{22})(?:$|[?#])/);return m&&m[1];}
  function norm(value){return String(value||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');}
  // The existing bank sync rebuilds items from signals and receipts. Stop before
  // loading it when that would drop an item or restore a consumed FIFO entry.
  function object(value){return !!value&&typeof value==='object'&&!Array.isArray(value);}
  function preflightStorage(cfg,candidates){
    // Validate before learning hydration can overwrite signals or bank.sync can
    // discard entries. Completed days also need these checks; render skips them.
    var storedRatings={};
    for(var i=0;i<localStorage.length;i++){
      var key=localStorage.key(i);if(!/^bmd-/.test(key)||key==='bmd-storage-health-v1')continue;
      var value=read(key);
      if(/^(bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?v1|bmd-day\d+-v13)$/.test(key)){
        if(!object(value))throw Error('Bestaande beoordelingen vragen controle; die zijn behouden.');
        Object.keys(value).forEach(function(id){var r=value[id];if(!object(r)||!['raak','goed','twijfel','nee'].includes(r.rating))throw Error('Een bestaande beoordeling is ongeldig; die is behouden.');var trackId=r.trackId||r.id||id;(storedRatings[trackId]||(storedRatings[trackId]=[])).push(r.rating);});
      }
    }
    if(cfg&&candidates)for(var day=1;day<=7;day++){
      var base='bmd-week-'+cfg.key+'-day'+day;
      [false,true].forEach(function(isReserve){
        var q=read(base+(isReserve?'-reserve-selection-v1':'-selection-v1')),ratings=read(base+(isReserve?'-reserve-v1':'-v1'));
        if(localStorage.getItem(base+(isReserve?'-reserve-selection-v1':'-selection-v1'))!==null||localStorage.getItem(base+(isReserve?'-reserve-v1':'-v1'))!==null){
          if(day>cfg.preparedThroughDay)throw Error('Een gesloten dag bevat bestaande gegevens; die zijn behouden.');
          if(!object(q)||!Array.isArray(q.ids)||(!isReserve&&q.ids.length!==3)||!q.ids.length||(isReserve&&q.ids.length>2)||new Set(q.ids).size!==q.ids.length||q.ids.some(function(id){return !candidates.tracks[id];}))throw Error('Een bestaande dagkeuze vraagt herstel; die is behouden.');
          if(ratings!==null&&(!object(ratings)||Object.keys(ratings).some(function(id){return !q.ids.includes(id);})))throw Error('Een beoordeling mist een overeenkomende dagkeuze; die is behouden.');
        }
      });
      if(read(base+'-selection-v1')||read(base+'-reserve-selection-v1'))selection(cfg,candidates,day,false,2,true);
    }
    var bank=read('bmd-positive-bank-v1'),learning=read('bmd-learning-v1'),history=read('bmd-positive-playlist-history-v1');
    [['bmd-positive-bank-v1',bank,'items'],['bmd-learning-v1',learning,'signals'],['bmd-positive-playlist-history-v1',history,'weeks']].forEach(function(entry){if(localStorage.getItem(entry[0])!==null&&(!object(entry[1])||!object(entry[1][entry[2]])))throw Error('De opgeslagen voorraad of historie vraagt controle; die is behouden.');});
    Object.keys(learning&&learning.signals||{}).forEach(function(id){var signal=learning.signals[id];if(!object(signal)||!['raak','goed','twijfel','nee'].includes(signal.rating))throw Error('Een opgeslagen leersignaal is ongeldig; de historie is behouden.');});
    Object.keys(history&&history.weeks||{}).forEach(function(week){var receipt=history.weeks[week];if(!object(receipt)||['ids','spotifyTrackIds'].some(function(field){return receipt[field]!==undefined&&(!Array.isArray(receipt[field])||receipt[field].some(function(id){return typeof id!=='string';}));}))throw Error('Een playlistregistratie is ongeldig; de FIFO is behouden.');});
    if(!bank)return;
    if(!bank.items||typeof bank.items!=='object'||Array.isArray(bank.items))throw Error('De positieve voorraad vraagt controle; die is behouden.');
    var signals=learning&&learning.signals||{},weeks=history&&history.weeks||{},uses={};
    Object.keys(weeks).forEach(function(week){(weeks[week].ids||[]).forEach(function(id){uses[id]=(uses[id]||0)+1;});});
    Object.keys(bank.items).forEach(function(id){var item=bank.items[id],signal=signals[id];
      if(!item||!signal||!['raak','goed'].includes(signal.rating)||item.rating!==signal.rating)throw Error('Een voorraaditem mist een overeenkomend positief leersignaal; de voorraad is behouden.');
      if(item.playlistUses!==undefined&&(!Number.isInteger(item.playlistUses)||item.playlistUses<0))throw Error('Reservegebruik is ongeldig; de FIFO is behouden.');
      if((storedRatings[id]||[]).some(function(rating){return rating!==signal.rating;}))throw Error('Voorraad en opgeslagen beoordelingen verschillen; de FIFO is behouden.');
      if((item.playlistUses||0)!==(uses[id]||0))throw Error('Reservegebruik en playlistregistratie verschillen; de FIFO is behouden.');
    });
  }
  function selection(cfg,candidates,day,isReserve,reserveCount,validateOnly){
    if(!Number.isInteger(day)||day<1||day>cfg.preparedThroughDay||!candidates['day'+day])throw Error('De volgende dag staat nog niet klaar.');
    var base='bmd-week-'+cfg.key+'-day'+day;
    var officialKey=base+'-selection-v1',reserveKey=base+'-reserve-selection-v1';
    var official=read(officialKey),reserve=read(reserveKey),plan=candidates['day'+day];
    function check(q,expected){
      if(!q)return;
      if(!Array.isArray(q.ids)||q.ids.length!==expected||new Set(q.ids).size!==q.ids.length||q.ids.some(function(id){return !candidates.tracks[id];}))throw Error('Een bestaande dagkeuze vraagt herstel; die is behouden.');
    }
    check(official,3);if(reserve)check(reserve,reserve.ids&&reserve.ids.length);
    if(reserve&&(!reserve.ids.length||reserve.ids.length>2))throw Error('Een bestaande reservekeuze vraagt herstel; die is behouden.');
    if(!official&&read(base+'-v1'))throw Error('Bestaande beoordelingen zonder dagkeuze zijn behouden.');
    if(!reserve&&read(base+'-reserve-v1'))throw Error('Bestaande reservebeoordelingen zonder keuze zijn behouden.');
    if(!plan||!Array.isArray(plan.official)||plan.official.length!==3||!Array.isArray(plan.reserve)||plan.reserve.length>2)throw Error('Het dagplan is niet geldig.');
    var ids=(official?official.ids:plan.official).concat(reserve?reserve.ids:plan.reserve.slice(0,reserveCount));
    if(new Set(ids).size!==ids.length)throw Error('Officiële nummers en reserves overlappen; bestaande gegevens zijn behouden.');
    var artists=new Set(),recordings=new Set();
    ids.forEach(function(id){var t=candidates.tracks[id],recording=t&&sid(t.spotifyUrl);if(!t||!recording||recordings.has(recording))throw Error('Het dagplan bevat een ontbrekende of dubbele opname.');recordings.add(recording);String(t.identity.artist||'').split(';').forEach(function(a){var key=norm(a);if(!key||artists.has(key))throw Error('Een artiest komt meermaals voor in het dagplan.');artists.add(key);});});
    // Protect artist uniqueness across official, reserve and retired offers in this week.
    for(var wd=1;wd<=7;wd++)if(wd!==day){
      [read('bmd-week-'+cfg.key+'-day'+wd+'-selection-v1'),read('bmd-week-'+cfg.key+'-day'+wd+'-reserve-selection-v1')].forEach(function(q){
        if(!q)return;(q.ids||(q.id?[q.id]:[])).concat(q.retiredIds||[]).forEach(function(id){var t=candidates.tracks[id]||(window.MUSIC_DNA_DB&&window.MUSIC_DNA_DB.tracks[id]);if(!t)throw Error('Een bestaande weekkeuze vraagt identiteitscontrole; die is behouden.');String(t.identity.artist||'').split(';').forEach(function(a){if(artists.has(norm(a)))throw Error('Een gekozen artiest is deze week al aangeboden.');});});
      });
    }
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
    if(validateOnly)return null;
    var chosen=isReserve?plan.reserve.slice(0,reserveCount):plan.official;
    if(!chosen.length)return null;
    q={ids:chosen.slice(),createdAt:new Date().toISOString(),meter:!isReserve,purpose:isReserve?'positive-reserve':'explicit-day-recovery',preparedDayVersion:1};
    localStorage.setItem(key,JSON.stringify(q));return q;
  }
  window.MUSIC_DNA_PREPARED_DAY={selection:selection,preflightStorage:preflightStorage};
})();
