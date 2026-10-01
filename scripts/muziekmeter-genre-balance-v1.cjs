#!/usr/bin/env node
"use strict";

/*
 * Music DNA — Muziekmeter / Genre-DNA Bewaking v1.0
 * Pure calculation layer. No production selector weights are changed here.
 */

function expectedCount(n, p){ return n * p; }
function sigma(n, p){ return Math.sqrt(n * p * (1 - p)); }
function zScore(actual, n, p){
  const s = sigma(n,p);
  return s === 0 ? 0 : (actual - expectedCount(n,p)) / s;
}

function trendDirection(values, referenceCounts){
  if (!Array.isArray(values) || values.length < 3) return "insufficient";
  const last = values.slice(-3);
  const refs = Array.isArray(referenceCounts) ? referenceCounts.slice(-3) : [referenceCounts,referenceCounts,referenceCounts];
  const dist = last.map((v,i)=>Math.abs(v-refs[i]));
  const d1 = dist[1]-dist[0], d2 = dist[2]-dist[1];
  if (d1 < 0 && d2 < 0) return "recovering";
  if (d1 > 0 && d2 > 0) return "worsening";
  if (Math.abs(d1) < 0.5 && Math.abs(d2) < 0.5) return "stable";
  return "mixed";
}

function statisticalBand(actual, n, p){
  const z = zScore(actual,n,p);
  const a = Math.abs(z);
  if (a < 1.5) return "green";
  if (a < 2.0) return "yellow";
  return "orange";
}

function assessArea({
  actual13,
  actual26,
  p,
  steering,
  recent6Counts = [],
  previousCheckpointStatus = null,
  priorCorrectionFactor = 1.00,
  longConfirmed = false
}){
  const exp13 = expectedCount(273,p);
  const exp26 = expectedCount(546,p);
  const band13 = statisticalBand(actual13,273,p);
  const band26 = statisticalBand(actual26,546,p);

  const enough13 = exp13 >= 10;
  const primaryIs26 = steering === "26w";
  const cautious = steering === "13w-cautious-26w-confirm";

  const refs6 = recent6Counts.map(()=>expectedCount(126,p));
  const trend = trendDirection(recent6Counts, refs6);

  let status;
  if (primaryIs26) {
    status = band26;
    if (exp26 < 10) status = "grey";
  } else if (!enough13) {
    status = "grey";
  } else {
    status = band13;
  }

  if ((status === "yellow" || status === "orange") && trend === "recovering") status = "blue";
  if (cautious && status === "orange" && band26 !== "orange") status = "yellow";

  const persistentOrange =
    status === "orange" &&
    previousCheckpointStatus === "orange" &&
    (longConfirmed || band26 === "orange");

  if (persistentOrange && priorCorrectionFactor !== 1.00) status = "red";

  return {
    expected13:exp13, actual13, z13:zScore(actual13,273,p), band13,
    expected26:exp26, actual26, z26:zScore(actual26,546,p), band26,
    trend6:trend,
    status
  };
}

function recommendCorrection({status, direction, currentFactor=1.00, priorStep=0}){
  if (status === "green") {
    if (currentFactor === 1.00) return {factor:1.00,action:"none"};
    const step = 0.02;
    const next = currentFactor > 1 ? Math.max(1,currentFactor-step) : Math.min(1,currentFactor+step);
    return {factor:Number(next.toFixed(2)),action:"return-toward-1.00"};
  }
  if (status === "blue" || status === "yellow" || status === "grey") {
    return {factor:currentFactor,action:"observe"};
  }
  if (status !== "orange" && status !== "red") return {factor:currentFactor,action:"observe"};

  const magnitude = status === "red" ? 0.05 : (priorStep >= 0.03 ? 0.05 : 0.03);
  const sign = direction === "low" ? 1 : -1;
  const raw = 1 + sign*magnitude;
  const bounded = Math.max(0.90,Math.min(1.10,raw));
  return {factor:Number(bounded.toFixed(2)),action:"soft-correction"};
}

function selfTest(){
  const hairP=9/48;
  const a=assessArea({actual13:51,actual26:102,p:hairP,steering:"13w",recent6Counts:[24,24,24]});
  const b=assessArea({actual13:66,actual26:110,p:hairP,steering:"13w",recent6Counts:[31,29,27]});
  const c=assessArea({actual13:66,actual26:130,p:hairP,steering:"13w",recent6Counts:[28,31,34],previousCheckpointStatus:"orange",priorCorrectionFactor:0.97,longConfirmed:true});
  const small=assessArea({actual13:8,actual26:11,p:1/48,steering:"26w",recent6Counts:[3,2,3]});
  const pass =
    a.status==="green" &&
    b.status==="blue" &&
    c.status==="red" &&
    ["green","yellow","orange","blue","red","grey"].includes(small.status);
  return {pass,cases:{normal:a,recovering:b,persistent:c,small}};
}

module.exports={expectedCount,sigma,zScore,trendDirection,statisticalBand,assessArea,recommendCorrection,selfTest};

if(require.main===module){
  const r=selfTest();
  console.log(JSON.stringify(r,null,2));
  process.exit(r.pass?0:1);
}
