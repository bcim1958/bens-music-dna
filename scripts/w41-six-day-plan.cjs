'use strict';
const crypto=require('node:crypto');
function snapshotHash(storage){return crypto.createHash('sha256').update(JSON.stringify(storage)).digest('hex');}
function validate(storage, exception){
  if(!exception || exception.weekId!=='2026-41' || exception.scope!=='offline-plan' ||
     exception.missingDay!==7 || exception.approvedForPreparation!==true ||
     exception.approvedForPublication!==false || !exception.reason || !exception.authorizationReference ||
     exception.snapshotSha256!==snapshotHash(storage))throw Error('Invalid W41 six-day planning exception');
  const prefix='bmd-week-2026-W41-day7';
  if(Object.keys(storage).some(k=>k.startsWith(prefix)))throw Error('Day 7 data exists; six-day exception cannot apply');
  return {weekId:'2026-41',scope:'offline-plan',missingDay:7,offeredDays:6,
    approvedForPublication:false,snapshotSha256:exception.snapshotSha256,
    reason:exception.reason,authorizationReference:exception.authorizationReference};
}
module.exports={snapshotHash,validate};
