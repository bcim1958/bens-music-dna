(function(root){'use strict';
function officialIds(storage,weekKey,now){
  const at=new Date(now);if(weekKey!=='2026-W41'||!Number.isFinite(at.getTime())||at<new Date('2026-10-10T00:00:00+02:00'))return null;
  const prefix='bmd-week-'+weekKey+'-day';
  for(let i=0;i<storage.length;i++)if(String(storage.key(i)).startsWith(prefix+'7'))return null;
  const ids=[];try{for(let day=1;day<=6;day++){
    const q=JSON.parse(storage.getItem(prefix+day+'-selection-v1')||'null');
    const state=JSON.parse(storage.getItem(prefix+day+'-v1')||'{}');
    if(!q||!Array.isArray(q.ids)||q.ids.length!==3)return null;
    for(const id of q.ids){if(!['raak','goed','twijfel','nee'].includes(state[id]&&state[id].rating))return null;ids.push(id);}
  }}catch(e){return null;}
  return new Set(ids).size===18?ids:null;
}
const api={officialIds};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.MUSIC_DNA_W41_PREVIEW=api;
})(typeof window!=='undefined'?window:globalThis);
