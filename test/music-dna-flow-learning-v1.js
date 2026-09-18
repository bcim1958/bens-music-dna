(function(){
  var VERSION=1,KEY='bmd-flow-dna-v1';
  function read(){try{return JSON.parse(localStorage.getItem(KEY)||'null')||{version:VERSION,references:{}}}catch(e){return{version:VERSION,references:{}}}}
  function write(x){try{localStorage.setItem(KEY,JSON.stringify(x))}catch(e){}return x}
  function addReference(week,ids,label,strength){
    if(!week||!Array.isArray(ids)||ids.length!==21)return false;
    var x=read();x.version=VERSION;x.references[week]={week:week,ids:ids.slice(),label:label||'positive-reference',strength:Number(strength)||1,recordedAt:new Date().toISOString()};x.updatedAt=new Date().toISOString();write(x);return true;
  }
  function reference(week){var x=read();return x.references[week]||null}
  function all(){return read().references}
  window.MUSIC_DNA_FLOW_LEARNING={version:VERSION,storageKey:KEY,read:read,addReference:addReference,reference:reference,all:all};
})();