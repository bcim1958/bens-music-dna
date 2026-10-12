/* Durable forward recovery, never rollback another writer's data. */
(function(){
  var KEY='bmd-rating-transaction-v1',storage=window.localStorage;
  var ratingKey=/^bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?v1$/;
  function allowed(k){return ratingKey.test(k)||['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1'].indexOf(k)!==-1;}
  function snapshot(){var out={};for(var i=0;i<storage.length;i++){var k=storage.key(i);if(k&&/^bmd-/.test(k)&&!/^bmd-storage-/.test(k)&&k!==KEY)out[k]=storage.getItem(k);}return out;}
  function same(a,b){var keys=Object.keys(a);return keys.length===Object.keys(b).length&&keys.every(function(k){return a[k]===b[k];});}
  function validate(j){
    if(!j||j.version!==1||j.origin!==window.location.origin||!j.before||Array.isArray(j.before)||typeof j.before!=='object'||!j.after||Array.isArray(j.after)||typeof j.after!=='object')throw Error('Herstelregistratie is ongeldig; gegevens blijven bewaard.');
    var keys=Object.keys(j.after);
    if(keys.length!==4||keys.filter(function(k){return ratingKey.test(k);}).length!==1||!['bmd-learning-v1','bmd-quarterly-doubt-v1','bmd-positive-bank-v1'].every(function(k){return keys.indexOf(k)!==-1;})||!keys.every(function(k){return allowed(k)&&typeof j.after[k]==='string';})||!Object.keys(j.before).every(function(k){return /^bmd-/.test(k)&&k!==KEY&&typeof j.before[k]==='string';}))throw Error('Onbekende herstelgegevens; gegevens blijven bewaard.');
    keys.forEach(function(k){var value=JSON.parse(j.after[k]);if(!value||typeof value!=='object'||Array.isArray(value))throw Error('Ongeldige herstelwaarde.');});
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
  function recover(){var raw=storage.getItem(KEY);if(!raw)return false;var j;try{j=JSON.parse(raw);}catch(e){throw Error('Herstelregistratie is onleesbaar; wis geen gegevens.');}apply(j,raw);return true;}
  function save(key,id,record){
    if(window.MUSIC_DNA_STORAGE_BLOCKED)throw Error('Opslag wacht op heropenen.');
    if(!ratingKey.test(key))throw Error('Onbekend beoordelingspad.');
    if(storage.getItem(KEY))throw Error('Een eerdere beoordeling wacht op herstel.');
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
      if(!same(snapshot(),before)||storage.getItem(KEY))throw Error('Opslag gewijzigd; beoordeling niet begonnen.');
      var j={version:1,origin:window.location.origin,before:before,after:after},raw=JSON.stringify(j);
      storage.setItem(KEY,raw);
      if(storage.getItem(KEY)!==raw)throw Error('Herstelregistratie kon niet worden bewaard.');
      apply(j,raw);
      return true;
    });});
  }
  window.MUSIC_DNA_RATING_TRANSACTION={key:KEY,save:save,recover:recover};
})();
