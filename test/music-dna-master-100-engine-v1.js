// Music DNA — Master 100% migration engine v1
(function(root){"use strict";
const TERMINAL=new Set(["treated-verified","treated-unresolved","treated-conflict"]);
const VALID=new Set(["not-started","identity-resolved","verification-in-progress","treated-verified","treated-unresolved","treated-conflict","needs-recheck"]);
function createBatch({batchId,scope,records}){
 return {engineVersion:"master-100-v1",batchId,scope,createdAt:"2026-09-25",records:records.map((r,i)=>({
  sequence:i+1,musicDnaId:r.musicDnaId,displayName:r.displayName,inputRef:r.inputRef||null,
  treatmentStatus:r.treatmentStatus||"not-started",identityStatus:r.identityStatus||"unresolved",
  sourceRefs:r.sourceRefs||[],claimRefs:r.claimRefs||[],evidenceRefs:r.evidenceRefs||[],
  errorRefs:r.errorRefs||[],checkpoint:null
 }))};
}
function validate(batch){
 const errors=[],seen=new Set();
 for(const r of batch.records){
  if(!r.musicDnaId) errors.push({code:"missing-id",record:r.sequence});
  if(seen.has(r.musicDnaId)) errors.push({code:"duplicate-id",id:r.musicDnaId}); seen.add(r.musicDnaId);
  if(!VALID.has(r.treatmentStatus)) errors.push({code:"bad-status",id:r.musicDnaId});
  if(r.treatmentStatus==="treated-verified" && (!r.sourceRefs.length||!r.evidenceRefs.length)) errors.push({code:"verified-without-evidence",id:r.musicDnaId});
 }
 return errors;
}
function progress(batch){
 const total=batch.records.length,terminal=batch.records.filter(r=>TERMINAL.has(r.treatmentStatus)).length;
 const counts={}; for(const r of batch.records) counts[r.treatmentStatus]=(counts[r.treatmentStatus]||0)+1;
 return {batchId:batch.batchId,total,treated:terminal,remaining:total-terminal,percent:total?Math.round(terminal/total*1000)/10:100,counts,errors:validate(batch).length};
}
function checkpoint(batch,label){
 const p=progress(batch); const cp={label,at:"2026-09-25",treated:p.treated,total:p.total,errors:p.errors};
 for(const r of batch.records) r.checkpoint=label;
 return cp;
}
root.musicDnaMaster100EngineV1={createBatch,validate,progress,checkpoint,TERMINAL:[...TERMINAL],VALID:[...VALID]};
})(typeof window!=="undefined"?window:globalThis);