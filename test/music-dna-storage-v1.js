(function(){
  var VERSION=2;
  var PREFIX='bmd-';
  var META_KEY='bmd-storage-health-v1';
  function parse(raw,fallback){try{return raw?JSON.parse(raw):fallback}catch(e){return fallback}}
  function keys(){var out=[];for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf(PREFIX)===0&&k!==META_KEY)out.push(k)}return out.sort()}
  function snapshot(){
    var out={},ks=keys();
    for(var i=0;i<ks.length;i++)out[ks[i]]=localStorage.getItem(ks[i]);
    return {version:VERSION,capturedAt:new Date().toISOString(),origin:location.origin,items:out};
  }
  function probe(){
    var key='bmd-storage-probe',ok=false,error=null;
    try{localStorage.setItem(key,'ok');ok=localStorage.getItem(key)==='ok';localStorage.removeItem(key)}catch(e){error=String(e&&e.message||e)}
    return {ok:ok,error:error};
  }
  function hashText(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return ('00000000'+(h>>>0).toString(16)).slice(-8)}
  function fingerprint(snap){
    var names=Object.keys(snap.items||{}).sort(),chars=0,parts=[];
    for(var i=0;i<names.length;i++){var v=String(snap.items[names[i]]||'');chars+=names[i].length+v.length;parts.push(names[i]+'='+v)}
    return {keyCount:names.length,charCount:chars,digest:hashText(parts.join('\n'))};
  }
  function check(){
    var p=probe(),snap=snapshot(),fp=fingerprint(snap),previous=parse(localStorage.getItem(META_KEY),null);
    var sameOrigin=!previous||previous.origin===location.origin,nonShrinking=!previous||fp.keyCount>=Number(previous.keyCount||0),report={version:VERSION,ok:p.ok&&sameOrigin&&nonShrinking,checkedAt:new Date().toISOString(),origin:location.origin,keyCount:fp.keyCount,charCount:fp.charCount,digest:fp.digest,previous:previous,sameOrigin:sameOrigin,nonShrinking:nonShrinking};
    if(p.ok){try{localStorage.setItem(META_KEY,JSON.stringify({version:VERSION,lastHealthyAt:report.checkedAt,origin:report.origin,keyCount:fp.keyCount,charCount:fp.charCount,digest:fp.digest}))}catch(e){report.ok=false;report.error=String(e&&e.message||e)}}
    return report;
  }
  function exportJson(){
    var snap=snapshot(),blob=new Blob([JSON.stringify(snap,null,2)],{type:'application/json'}),a=document.createElement('a');
    a.href=URL.createObjectURL(blob);a.download='music-dna-storage-backup-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},1000);
  }
  window.MUSIC_DNA_STORAGE={version:VERSION,metaKey:META_KEY,probe:probe,snapshot:snapshot,fingerprint:fingerprint,check:check,exportJson:exportJson};
})();