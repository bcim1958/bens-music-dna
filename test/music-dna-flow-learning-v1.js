(function(){
  var VERSION=2,KEY='bmd-flow-dna-v1';
  var PRINCIPLES={
    id:'W36-W38-v1',
    references:['2026-W36','2026-W38'],
    opening:'energetic-and-inviting',
    holdOpening:true,
    arc:['recognition','drive','adventure','depth','destination'],
    rule:'Repeated-listening comfort outranks theoretical elegance; do not shorten the energetic opening merely to add contrast.'
  };
  function read(){try{return JSON.parse(localStorage.getItem(KEY)||'null')||{version:VERSION,references:{}}}catch(e){return{version:VERSION,references:{}}}}
  function write(x){try{localStorage.setItem(KEY,JSON.stringify(x))}catch(e){}return x}
  function addReference(week,ids,label,strength){
    if(!week||!Array.isArray(ids)||ids.length!==21||new Set(ids).size!==21)return false;
    var x=read();x.version=VERSION;x.references=x.references||{};
    x.references[week]={week:week,ids:ids.slice(),label:label||'positive-reference',strength:Number(strength)||1,recordedAt:new Date().toISOString()};
    x.updatedAt=new Date().toISOString();write(x);return true;
  }
  function reference(week){var x=read();return (x.references||{})[week]||null}
  function all(){return read().references||{}}
  function principles(){return JSON.parse(JSON.stringify(PRINCIPLES))}
  window.MUSIC_DNA_FLOW_LEARNING={version:VERSION,storageKey:KEY,read:read,addReference:addReference,reference:reference,all:all,principles:principles};
})();