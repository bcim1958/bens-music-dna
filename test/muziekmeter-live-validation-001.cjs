#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),path=require("node:path");
const root=path.join(__dirname,"..");
const baseline=JSON.parse(fs.readFileSync(path.join(root,"data/muziekmeter-baseline-w36-w39-aggregate-v1.json"),"utf8"));
const live=JSON.parse(fs.readFileSync(path.join(root,"data/muziekmeter-w40-live-days1-5-v1.json"),"utf8"));
const validation=JSON.parse(fs.readFileSync(path.join(root,"data/muziekmeter-live-validation-001-partial-w40-d5.json"),"utf8"));

const errors=[];
if(baseline.period.officialTrackCount!==84) errors.push("baseline must contain 84 official tracks");
if(Object.values(baseline.counts).reduce((a,b)=>a+b,0)!==84) errors.push("baseline area counts must sum to 84");
if(live.summary.ratings.RAAK+live.summary.ratings.GOED+live.summary.ratings.TERUGKOMEN+live.summary.ratings.NIET!==15) errors.push("W40 d1-d5 ratings must sum to 15");
if(live.summary.ratings.positive!==14) errors.push("W40 d1-d5 positive count must be 14");
if(validation.evidence.combinedObserved.officialTracks!==99) errors.push("combined observation count must be 99");
if(validation.evidence.combinedObserved.broadHardRockHairClusterAtLeast!==61) errors.push("combined broad cluster floor must be 61");
if(validation.interpretation.steeringDecision!=="NONE") errors.push("partial W40 must never produce a steering decision");

const result={
  pass:errors.length===0,
  errors,
  metrics:{
    historicalBroadShare:baseline.knownWeeklyCombined.share,
    w40D1D5BroadShareFloor:live.summary.broadCluster.shareAtLeast,
    combinedBroadShareFloor:validation.evidence.combinedObserved.broadShareAtLeast,
    w40PositiveRate:live.summary.ratings.positiveRate
  },
  verdict:"candidate quality and offer diversity are intentionally evaluated separately"
};
console.log(JSON.stringify(result,null,2));
process.exit(result.pass?0:1);
