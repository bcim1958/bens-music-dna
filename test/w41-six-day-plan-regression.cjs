'use strict';
const assert=require('node:assert/strict');
const P=require('../scripts/w41-six-day-plan.cjs'),S=require('../scripts/saturday-simulator.cjs');
const storage={};
const exception={weekId:'2026-41',scope:'offline-plan',missingDay:7,
  approvedForPreparation:true,approvedForPublication:false,reason:'Day 7 not offered',
  authorizationReference:'Synthetic fixture only',snapshotSha256:P.snapshotHash(storage)};
assert.equal(P.validate(storage,exception).approvedForPublication,false);
for(const mutation of [{weekId:'2026-40'},{scope:'publish'},{missingDay:6},
  {approvedForPreparation:false},{approvedForPublication:true},{snapshotSha256:'wrong'},
  {reason:''},{authorizationReference:''}])assert.throws(()=>P.validate(storage,{...exception,...mutation}));
for(const key of ['selection-v1','v1','reserve-v1','reserve-selection-v1']){
  const changed={...storage,['bmd-week-2026-W41-day7-'+key]:{}};
  assert.throws(()=>P.validate(changed,{...exception,snapshotSha256:P.snapshotHash(changed)}),/Day 7 data exists/);
}
(async()=>{
  const strict=await S.run({weekId:'2026-41',storage});
  assert.match(strict.firstFailure.reason,/day7-selection/);
  const plan=await S.run({weekId:'2026-41',storage,w41SixDayPlan:exception});
  assert.equal(plan.releaseEligible,false);
  assert.match(plan.firstFailure.reason,/day1-selection/,'exception never skips days 1–6');
  assert(!plan.firstFailure.reason.includes('day7-selection'));
  const other=await S.run({weekId:'2026-40',storage,w41SixDayPlan:exception});
  assert.match(other.firstFailure.reason,/W41-only/);
  assert.equal(plan.spotifyWrites,0);
  assert.equal(plan.simulationGreen,false);
  console.log('PASS: W41-only offline exception bound to snapshot, days 1–6 remain required, day 7 data rejected, publication forbidden.');
})().catch(e=>{console.error(e);process.exitCode=1;});
