/* Daily storage cutover: legacy localStorage is read once, never written.
 * The immutable original and the current state live in a single atomic IDB record.
 * Historical pages do not know this database. Never fall back after an IDB error.
 */
(function(){
  'use strict';
  var db,record,values,ready=false,busy=false,failed=false;
  var NAME='music-dna-daily-v1',STORE='state',KEY='daily';
  function object(x){return !!x&&typeof x==='object'&&!Array.isArray(x);}
  function validMap(x){return object(x)&&Object.keys(x).every(function(k){return /^bmd-/.test(k)&&typeof x[k]==='string';});}
  function same(a,b){var keys=Object.keys(a);return keys.length===Object.keys(b).length&&keys.every(function(k){return a[k]===b[k];});}
  function lease(){window.MUSIC_DNA_RATING_TRANSACTION.requireLease();}
  function usable(){lease();if(!ready||failed||busy)throw Error('Dagelijkse opslag is niet gereed of wacht op bevestiging.');}
  function legacySnapshot(){
    var out=Object.create(null),s=window.localStorage;
    for(var i=0;i<s.length;i++){var k=s.key(i);if(k&&/^bmd-/.test(k))out[k]=s.getItem(k);}
    if(!validMap(out))throw Error('De bestaande opslag veranderde tijdens lezen.');
    if(out['bmd-rating-transaction-v1']!==undefined)throw Error('Een bestaande beoordeling wacht op herstel; overgang is gestopt zonder writes aan de bron.');
    Object.keys(out).forEach(function(k){if(k!=='bmd-storage-probe')JSON.parse(out[k]);});
    // Ben's existing app must not silently initialize an empty second Safari/PWA
    // storage context. A missing source needs inspection, never a reset.
    if(!Object.keys(out).some(function(k){
      if(/^(bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?v1|bmd-day\d+-v13)$/.test(k))return Object.keys(JSON.parse(out[k])||{}).length>0;
      if(k==='bmd-learning-v1'||k==='bmd-positive-bank-v1'){var v=JSON.parse(out[k]);return v&&Object.keys(v.signals||v.items||{}).length>0;}
      return false;
    }))throw Error('Je bestaande beoordelingen en reserves zijn hier niet zichtbaar. Overgang gestopt; wis geen websitegegevens.');
    var health=out['bmd-storage-health-v1']&&JSON.parse(out['bmd-storage-health-v1']);
    var count=Object.keys(out).filter(function(k){return k!=='bmd-storage-health-v1';}).length;
    if(health&&(health.origin!==location.origin||count<Number(health.keyCount||0)))throw Error('De bestaande opslag mist historie of hoort bij een andere oorsprong.');
    return out;
  }
  function validate(r){
    if(!r||r.version!==1||r.origin!==location.origin||!Number.isInteger(r.revision)||r.revision<0||!validMap(r.original)||!validMap(r.current))throw Error('Dagelijkse opslag is ongeldig; geen terugval naar oude gegevens.');
  }
  function fail(e){failed=true;window.MUSIC_DNA_STORAGE_BLOCKED=true;return e||Error('Dagelijkse opslag kon niet worden bevestigd.');}
  function transaction(){return db.transaction(STORE,'readwrite',{durability:'strict'});}
  async function open(){
    lease();
    if(ready)throw Error('Dagelijkse opslag is al geopend.');
    if(!window.indexedDB)throw Error('Veilige dagelijkse opslag is niet beschikbaar.');
    db=await new Promise(function(resolve,reject){
      var cancelled=false,req=indexedDB.open(NAME,1);
      req.onupgradeneeded=function(){req.result.createObjectStore(STORE);};
      req.onerror=function(){reject(req.error);};
      req.onblocked=function(){cancelled=true;reject(Error('Dagelijkse opslag wordt door een andere pagina geblokkeerd.'));};
      req.onsuccess=function(){if(cancelled){req.result.close();return;}resolve(req.result);};
    });
    db.onversionchange=function(){db.close();fail(Error('Dagelijkse opslag is gewijzigd.'));};
    record=await new Promise(function(resolve,reject){
      var tx=transaction(),store=tx.objectStore(STORE),req=store.get(KEY),next,error;
      tx.onabort=function(){reject(error||tx.error||Error('Opslagovergang afgebroken.'));};
      tx.oncomplete=function(){resolve(next);};
      req.onsuccess=function(){try{
        lease();next=req.result;
        if(next){validate(next);return;}
        var original=legacySnapshot();
        if(!same(original,legacySnapshot()))throw Error('Oude opslag is gewijzigd; overgang gestopt.');
        next={version:1,origin:location.origin,revision:0,capturedAt:new Date().toISOString(),original:original,current:Object.assign({},original)};
        var put=store.add(next,KEY);
        put.onsuccess=function(){try{lease();if(!same(original,legacySnapshot()))throw Error('Oude opslag is gewijzigd tijdens de overgang.');}catch(e){error=e;tx.abort();}};
      }catch(e){error=e;tx.abort();}};
    });
    lease();values=Object.assign(Object.create(null),record.current);ready=true;
  }
  function flush(){
    usable();
    var current=Object.assign({},values);
    if(same(current,record.current))return Promise.resolve(true);
    busy=true;
    return new Promise(function(resolve,reject){
      var tx, next,error;
      try{tx=transaction();}catch(e){busy=false;reject(fail(e));return;}
      tx.onabort=function(){busy=false;reject(fail(error||tx.error));};
      tx.oncomplete=function(){busy=false;record=next;resolve(true);};
      var store=tx.objectStore(STORE),req=store.get(KEY);
      req.onsuccess=function(){try{
        lease();var previous=req.result;validate(previous);
        if(previous.revision!==record.revision||!same(previous.current,record.current)||!same(previous.original,record.original))throw Error('Dagelijkse opslag is buiten deze pagina gewijzigd.');
        next=Object.assign({},record,{revision:record.revision+1,current:current});
        store.put(next,KEY);
      }catch(e){error=e;tx.abort();}};
    });
  }
  // This synchronous view only stages writes. UI must await flush before
  // confirming a rating or exposing a newly prepared selection.
  var view={
    get length(){if(!ready)throw Error('Opslag niet geopend.');return Object.keys(values).length;},
    key:function(i){return Object.keys(values)[i]||null;},
    getItem:function(k){if(!ready)throw Error('Opslag niet geopend.');return Object.prototype.hasOwnProperty.call(values,k)?values[k]:null;},
    setItem:function(k,v){usable();if(!/^bmd-/.test(k))throw Error('Onbekende dagelijkse opslagsleutel.');values[k]=String(v);},
    removeItem:function(k){usable();delete values[k];}
  };
  window.MUSIC_DNA_DAILY_STORE={open:open,flush:flush,view:view,name:NAME};
})();
