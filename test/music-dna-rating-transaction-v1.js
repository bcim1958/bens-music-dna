/* Durable forward recovery, never rollback another writer's data. */
(function(){
  var localStorage=(typeof document!=='undefined'&&document.defaultView===window&&window.MUSIC_DNA_DAILY_STORE)?window.MUSIC_DNA_DAILY_STORE.view:window.localStorage;
  var KEY='bmd-rating-transaction-v1',storage=localStorage;
  var lease=false;
  // Hold one browser-managed origin lock for this daily page's lifetime. This
  // also covers hydration, render-time bank writes and delayed learning tasks.
  function acquire(){
    if(lease)return Promise.resolve(true);
    if(!window.navigator||!navigator.locks||typeof navigator.locks.request!=='function')return Promise.reject(Error('Veilige tabvergrendeling is niet beschikbaar; er wordt niets opgeslagen.'));
    return new Promise(function(resolve,reject){
      navigator.locks.request('music-dna-daily-storage-v1',{mode:'exclusive',ifAvailable:true},function(lock){
        if(!lock){reject(Error('Music DNA is al geopend in een ander tabblad. Sluit dat tabblad en heropen deze pagina.'));return;}
        lease=true;resolve(true);
        return new Promise(function(release){
          // Web Locks exclude cooperating daily pages only. A legacy document
          // can still write localStorage. Stop this page when the browser reports
          // such a change; this cannot undo it or prevent writes before delivery.
          if(window.addEventListener)window.addEventListener('storage',function(e){
            if(window.MUSIC_DNA_DAILY_STORE&&document.defaultView===window)return;
            if(!lease||e.storageArea!==storage||(e.key!==null&&e.key.indexOf('bmd-')!==0))return;
            window.MUSIC_DNA_STORAGE_BLOCKED=true;
            if(window.MUSIC_DNA_STORAGE_ERROR)window.MUSIC_DNA_STORAGE_ERROR(Error('Music-DNA-opslag is gewijzigd vanuit een ander document. Stop en laat de opgeslagen toestand controleren; wis geen websitegegevens.'));
          });
          if(window.addEventListener)window.addEventListener('pagehide',function(){lease=false;window.MUSIC_DNA_STORAGE_BLOCKED=true;release();},{once:true});
          if(window.addEventListener)window.addEventListener('pageshow',function(e){if(e.persisted&&!lease&&window.MUSIC_DNA_STORAGE_ERROR)window.MUSIC_DNA_STORAGE_ERROR(Error('Deze pagina heeft haar opslagvergrendeling vrijgegeven. Heropen Music DNA om veilig verder te gaan.'));});
        });
      }).catch(reject);
    });
  }
  function requireLease(){if(window.MUSIC_DNA_STORAGE_BLOCKED)throw Error('Geen exclusieve opslagtoegang: gestopt; heropen Music DNA.');if(!lease)throw Error('Geen exclusieve opslagtoegang; heropen Music DNA.');}
  var ratingKey=/^bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?v1$/;
  function allowed(k){return ratingKey.test(k)||['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1'].indexOf(k)!==-1;}
  function snapshot(){var out={};for(var i=0;i<storage.length;i++){var k=storage.key(i);if(k&&/^bmd-/.test(k)&&!/^bmd-storage-/.test(k)&&k!==KEY)out[k]=storage.getItem(k);}return out;}
  function same(a,b){var keys=Object.keys(a);return keys.length===Object.keys(b).length&&keys.every(function(k){return a[k]===b[k];});}
  function object(v){return !!v&&typeof v==='object'&&!Array.isArray(v);}
  function component(raw,field){var v=JSON.parse(raw);if(!object(v)||(field&&!object(v[field])))throw Error('Ongeldige herstelcomponent; gegevens blijven bewaard.');return v;}
  function selectionKey(key){return key.replace(/-(reserve-)?v1$/,function(_,reserve){return reserve?'-reserve-selection-v1':'-selection-v1';});}
  function validateContent(j,keys){
    var key=keys.filter(function(k){return ratingKey.test(k);})[0],ratings=component(j.after[key]),old=component(j.before[key]===undefined?'{}':j.before[key]),ids=Object.keys(ratings),changed=[];
    if(!ids.length)throw Error('Ongeldige herstelbeoordelingen.');
    Object.keys(old).forEach(function(id){if(!Object.prototype.hasOwnProperty.call(ratings,id))throw Error('Herstel mag bestaande beoordelingen niet verwijderen.');});
    ids.forEach(function(id){var r=ratings[id];if(!object(r)||['raak','goed','twijfel','nee'].indexOf(r.rating)===-1)throw Error('Ongeldige herstelbeoordeling.');if(JSON.stringify(r)!==JSON.stringify(old[id]))changed.push(id);});
    if(changed.length>1)throw Error('Herstel bevat meer dan één gewijzigde beoordeling.');
    var selection=component(j.before[selectionKey(key)]||'null'),selected=selection.ids||(selection.id?[selection.id]:[]);
    if(!Array.isArray(selected)||changed.some(function(id){return selected.indexOf(id)===-1;}))throw Error('Ongeldige herstelselectie.');
    var learning=component(j.after['bmd-learning-v1'],'signals'),doubts=component(j.after['bmd-quarterly-doubt-v1'],'items'),bank=component(j.after['bmd-positive-bank-v1'],'items');
    var oldLearning=j.before['bmd-learning-v1']===undefined?{signals:{}}:component(j.before['bmd-learning-v1'],'signals');
    Object.keys(oldLearning.signals).forEach(function(id){if(!Object.prototype.hasOwnProperty.call(learning.signals,id))throw Error('Herstel mag bestaande learning niet verwijderen.');});
    // Resync can reconcile old signals against stored ratings. A journal must
    // not invent a different historical rating to remove a positive reserve.
    var authoritative={},combined=Object.assign({},j.before,j.after);
    function ingest(raw,legacy){if(raw===undefined)return;var state=component(raw);Object.keys(state).forEach(function(id){var r=state[id];if(object(r)&&r.rating)authoritative[legacy?(r.trackId||r.id||id):id]=r;});}
    for(var legacyDay=1;legacyDay<=10;legacyDay++)ingest(combined['bmd-day'+legacyDay+'-v13'],true);
    Object.keys(combined).forEach(function(k){if(ratingKey.test(k))ingest(combined[k],false);});
    Object.keys(oldLearning.signals).forEach(function(id){var next=learning.signals[id],oldSignal=oldLearning.signals[id],r=authoritative[id]||oldSignal;if(!object(next)||!object(r)||next.rating!==r.rating||next.ratedAt!==(authoritative[id]?(r.ratedAt||null):r.ratedAt))throw Error('Herstel mag historische learning niet herbeoordelen.');});
    Object.keys(learning.signals).forEach(function(id){var signal=learning.signals[id],b=bank.items[id];if(!object(signal)||['raak','goed','twijfel','nee'].indexOf(signal.rating)===-1)throw Error('Ongeldig herstellearningsignaal.');var positive=['raak','goed'].indexOf(signal.rating)!==-1;if(positive!==Object.prototype.hasOwnProperty.call(bank.items,id)||(positive&&(!object(b)||b.rating!==signal.rating)))throw Error('Herstelvoorraad past niet bij learning.');});
    Object.keys(bank.items).forEach(function(id){if(!Object.prototype.hasOwnProperty.call(learning.signals,id))throw Error('Herstelvoorraad bevat een onbekend signaal.');});
    var oldBank=j.before['bmd-positive-bank-v1']===undefined?{items:{}}:component(j.before['bmd-positive-bank-v1'],'items');
    Object.keys(oldBank.items).forEach(function(id){var b=bank.items[id],prev=oldBank.items[id];if(b&&['firstPositiveAt','playlistUses','lastPlaylistWeek'].some(function(f){return b[f]!==prev[f];}))throw Error('Herstel mag bestaande FIFO of verbruik niet wijzigen.');});
    changed.forEach(function(id){var r=ratings[id],signal=learning.signals[id],positive=['raak','goed'].indexOf(r.rating)!==-1;
      if(!object(signal)||signal.rating!==r.rating||signal.ratedAt!==r.ratedAt||positive!==Object.prototype.hasOwnProperty.call(bank.items,id)||(positive&&bank.items[id].rating!==r.rating)||(r.rating==='twijfel'&&!object(doubts.items[id])))throw Error('Herstelcomponenten passen niet bij de beoordeling.');
      if(/-reserve-v1$/.test(key)&&r.meter!==false)throw Error('Herstel mag een reservebeoordeling niet meetellen.');
    });
  }
  function validate(j){
    if(!j||j.version!==1||j.origin!==window.location.origin||!j.before||Array.isArray(j.before)||typeof j.before!=='object'||!j.after||Array.isArray(j.after)||typeof j.after!=='object')throw Error('Herstelregistratie is ongeldig; gegevens blijven bewaard.');
    var keys=Object.keys(j.after);
    if(keys.length!==4||keys.filter(function(k){return ratingKey.test(k);}).length!==1||!['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1'].every(function(k){return keys.indexOf(k)!==-1;})||!keys.every(function(k){return allowed(k)&&typeof j.after[k]==='string';})||!Object.keys(j.before).every(function(k){return /^bmd-/.test(k)&&k!==KEY&&typeof j.before[k]==='string';}))throw Error('Onbekende herstelgegevens; gegevens blijven bewaard.');
    keys.forEach(function(k){var value=JSON.parse(j.after[k]);if(!value||typeof value!=='object'||Array.isArray(value))throw Error('Ongeldige herstelwaarde.');});
    validateContent(j,keys);
  }
  function apply(j,raw){
    validate(j);
    var current=snapshot(),expected=Object.assign({},j.before),keys=Object.keys(j.after);
    // Validate every component before any recovery write. A third value is a conflict.
    keys.forEach(function(k){if(current[k]!==j.before[k]&&current[k]!==j.after[k])throw Error('Opslagconflict: herstel overschrijft geen gewijzigde gegevens.');if(Object.prototype.hasOwnProperty.call(current,k))expected[k]=current[k];});
    if(!same(current,expected))throw Error('Opslagconflict: historie of selectie is gewijzigd.');
    keys.forEach(function(k){
      if(storage.getItem(KEY)!==raw)throw Error('Herstelregistratie is gewijzigd.');
      var value=storage.getItem(k),before=Object.prototype.hasOwnProperty.call(j.before,k)?j.before[k]:null;
      if(value!==before&&value!==j.after[k])throw Error('Opslagconflict tijdens herstel.');
      if(value!==j.after[k])storage.setItem(k,j.after[k]);
      if(storage.getItem(k)!==j.after[k])throw Error('Opslagwrite is niet bevestigd.');
    });
    var finalState=Object.assign({},j.before,j.after);
    if(!same(snapshot(),finalState)||storage.getItem(KEY)!==raw)throw Error('Opslag is gewijzigd tijdens verwerken.');
    storage.removeItem(KEY);
    if(storage.getItem(KEY)!==null)throw Error('Herstelregistratie kon niet worden afgerond.');
  }
  function recover(){requireLease();var raw=storage.getItem(KEY);if(raw===null)return false;var j;try{j=JSON.parse(raw);}catch(e){throw Error('Herstelregistratie is onleesbaar; wis geen gegevens.');}apply(j,raw);return true;}
  function save(key,id,record){
    requireLease();
    if(window.MUSIC_DNA_STORAGE_BLOCKED)throw Error('Opslag wacht op heropenen.');
    if(!ratingKey.test(key))throw Error('Onbekend beoordelingspad.');
    if(storage.getItem(KEY)!==null)throw Error('Een eerdere beoordeling wacht op herstel.');
    var before=snapshot(),values=Object.assign({},before),after={};
    var state=before[key]?JSON.parse(before[key]):{};
    if(!state||Array.isArray(state)||typeof state!=='object'||!record||['raak','goed','twijfel','nee'].indexOf(record.rating)===-1)throw Error('Ongeldige beoordeling; bestaande gegevens blijven bewaard.');
    Object.keys(state).forEach(function(k){if(!state[k]||['raak','goed','twijfel','nee'].indexOf(state[k].rating)===-1)throw Error('Bestaande beoordelingen zijn ongeldig.');});
    var selection=JSON.parse(before[key.replace(/-(reserve-)?v1$/,function(_,reserve){return reserve?'-reserve-selection-v1':'-selection-v1';})]||'null');
    if(!selection||(selection.ids||(selection.id?[selection.id]:[])).indexOf(id)===-1)throw Error('Selectie is gewijzigd; beoordeling niet begonnen.');
    var doubts=before['bmd-quarterly-doubt-v1']?JSON.parse(before['bmd-quarterly-doubt-v1']):{items:{}};
    if(!doubts||Array.isArray(doubts)||!doubts.items||Array.isArray(doubts.items)||typeof doubts.items!=='object')throw Error('Twijfelregistratie is ongeldig; gegevens blijven bewaard.');
    state[id]=record;
    var overlay={get length(){return Object.keys(values).length;},key:function(i){return Object.keys(values)[i];},getItem:function(k){return Object.prototype.hasOwnProperty.call(values,k)?values[k]:null;},setItem:function(k,v){if(!allowed(k))throw Error('Onverwachte opslagwrite.');values[k]=String(v);after[k]=String(v);}};
    var learning=window.MUSIC_DNA_LEARNING,bank=window.MUSIC_DNA_POSITIVE_BANK;
    if(!learning||!bank)throw Error('Beoordelingsopslag is niet klaar.');
    return learning.withStorage(overlay,function(){return bank.withStorage(overlay,function(){
      overlay.setItem(key,JSON.stringify(state));
      learning.resyncStoredRatings();bank.sync();
      if(!same(snapshot(),before)||storage.getItem(KEY)!==null)throw Error('Opslag gewijzigd; beoordeling niet begonnen.');
      var j={version:1,origin:window.location.origin,before:before,after:after},raw=JSON.stringify(j);
      validate(j);
      storage.setItem(KEY,raw);
      if(storage.getItem(KEY)!==raw)throw Error('Herstelregistratie kon niet worden bewaard.');
      apply(j,raw);
      return true;
    });});
  }
  window.MUSIC_DNA_RATING_TRANSACTION={key:KEY,requireLease:requireLease,acquire:acquire,save:save,recover:recover};
})();
