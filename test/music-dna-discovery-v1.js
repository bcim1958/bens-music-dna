// W40 day 3 onward only. Historical selectors and stored ratings remain intact.
(function(){
'use strict';
var VERSION='2026-10-09.1',REF=window.MUSIC_DNA_DISCOVERY_REFERENCE;
if(!REF)throw Error('Ontdek-DNA referentie ontbreekt');
function norm(s){return String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');}
function credits(s){return String(s||'').split(';').map(norm).filter(Boolean);}
function sid(t){var m=String(t.spotifyUrl||t.spotifyUri||'').match(/track[:/]([A-Za-z0-9]{22})/);return m&&m[1];}
function key(t){return norm(t.identity.artist)+'|'+norm(t.identity.title);}
function read(k,f){var x=localStorage.getItem(k);return x?JSON.parse(x):f;}
function signals(){return window.MUSIC_DNA_LEARNING?window.MUSIC_DNA_LEARNING.read().signals||{}:{};}
function context(candidates){
 var c={artists:new Set(REF.artists),own:new Set(REF.trackKeys),ownSpotify:new Set(REF.spotifyIds),seen:new Set(),seenSpotify:new Set(),seenKeys:new Set(),signals:signals()};
 Object.keys(c.signals).forEach(function(id){var s=c.signals[id];c.seen.add(id);credits(s.artist).forEach(function(a){c.artists.add(a);});if(s.spotifyUrl)c.seenSpotify.add(sid(s));if(s.artist&&s.title)c.seenKeys.add(norm(s.artist)+'|'+norm(s.title));});
 for(var i=0;i<localStorage.length;i++){
  var k=localStorage.key(i);if(!/^bmd-week-\d{4}-W\d{2}-day[1-7]-(?:reserve-)?selection-v1$/.test(k))continue;
  var q=read(k,{});(q.ids||(q.id?[q.id]:[])).concat(q.retiredIds||[]).forEach(function(id){c.seen.add(id);var t=candidates[id];if(t){c.seenSpotify.add(sid(t));c.seenKeys.add(key(t));credits(t.identity.artist).forEach(function(a){c.artists.add(a);});}});
 }
 return c;
}
function origin(t,c){
 if(c.ownSpotify.has(sid(t))||c.own.has(key(t))||(t.source&&t.source.reservoir==='w40-master-reservoir-v1'))return 'OWN_DNA';
 return credits(t.identity.artist).some(function(a){return c.artists.has(a);})?'KNOWN_ARTIST_NEW_TRACK':'NEW_ARTIST';
}
function fit(t,c){
 var styles=(t.taxonomy&&t.taxonomy.allMusicStyles)||[],matches=styles.filter(function(s){return REF.styles[s]>0;}),positive=0,negative=0,anchors=[];
 Object.keys(c.signals).forEach(function(id){var s=c.signals[id],overlap=(s.styles||[]).filter(function(x){return styles.some(function(y){return norm(x)===norm(y);});}).length;if(!overlap)return;var weight=Number(s.weight)||0;if(weight>0){positive+=weight*overlap;anchors.push(id);}else if(weight<0)negative+=-weight*overlap;});
 // A transparent affinity heuristic, not a calibrated probability. No exploration penalty or random low scorers.
 var base=matches.reduce(function(n,s){return n+Math.log2(1+REF.styles[s]);},0)/Math.max(1,styles.length);
 var score=base+2*Math.log2(1+positive)-3*Math.log2(1+negative);
 var sameArtistNegative=Object.keys(c.signals).some(function(id){var s=c.signals[id];return s.rating==='nee'&&credits(s.artist).some(function(a){return credits(t.identity.artist).includes(a);});});
 return {score:Math.round(score*100)/100,eligible:matches.length>0&&score>0&&!sameArtistNegative,matchedStyles:matches,positiveAnchorIds:anchors,positive:positive,negative:negative,method:'style-affinity-v1',calibratedProbability:false};
}
function rank(candidates,options){
 options=options||{};var c=options.context||context(candidates),excluded=new Set(options.excludeIds||[]),rows=[];
 Object.keys(candidates).forEach(function(id){var t=candidates[id],o=origin(t,c),e=t.discoveryEvidence,f=c.fitCache?(c.fitCache[id]||(c.fitCache[id]=fit(t,c))):fit(t,c);
  if(excluded.has(id)||c.seen.has(id)||c.seenSpotify.has(sid(t))||c.seenKeys.has(key(t))||o==='OWN_DNA'||!f.eligible)return;
  if(!e||e.recording!=='original-studio'||!e.sources||e.sources.length<2||!e.spotify||e.spotify.playable!==true||!sid(t))return;
  // Reference export has only representative tracks. Known master artists require separate full-library exclusion proof.
  if(o==='KNOWN_ARTIST_NEW_TRACK'&&credits(t.identity.artist).some(function(a){return REF.artists.includes(a);})&&e.fullLibraryExclusionVerified!==true)return;
  rows.push({id:id,track:t,score:f.score,origin:o,decision:{origin:o,policyVersion:VERSION,referenceFingerprint:REF.fingerprint,fit:f,sourceUrls:e.sources.slice(),spotifyCheckedAt:e.spotify.checkedAt}});
 });
 rows.sort(function(a,b){return (a.origin===b.origin?0:a.origin==='NEW_ARTIST'?-1:1)||b.score-a.score||a.id.localeCompare(b.id);});return rows;
}
function chooseBatch(candidates,options){
 options=options||{};var used=new Set((options.excludeArtists||[]).flatMap(credits)),out=[],tracks=new Set();
 var ranked=rank(candidates,options);if(options.reserve)ranked.sort(function(a,b){return (a.origin===b.origin?0:a.origin==='KNOWN_ARTIST_NEW_TRACK'?-1:1)||b.score-a.score||a.id.localeCompare(b.id);});
 ranked.some(function(r){var names=credits(r.track.identity.artist);if(names.some(function(a){return used.has(a);})||tracks.has(sid(r.track)))return false;out.push(r);names.forEach(function(a){used.add(a);});tracks.add(sid(r.track));return out.length===(options.size||3);});return out;
}
function active(week,day){return week>'2026-W40'||week==='2026-W40'&&day>=3;}
function metadata(rows){var out={};rows.forEach(function(r){out[r.id]=r.decision;});return out;}
function copyContext(c){return {artists:new Set(c.artists),own:new Set(c.own),ownSpotify:new Set(c.ownSpotify),seen:new Set(c.seen),seenSpotify:new Set(c.seenSpotify),seenKeys:new Set(c.seenKeys),signals:c.signals,fitCache:c.fitCache||{}};}
function registerRows(c,rows){rows.forEach(function(r){c.seen.add(r.id);c.seenSpotify.add(sid(r.track));c.seenKeys.add(key(r.track));credits(r.track.identity.artist).forEach(function(a){c.artists.add(a);});});}
function chooseReserveBatch(candidates,options){
 options=options||{};var ctx=copyContext(options.context||context(candidates)),used=new Set((options.excludeArtists||[]).flatMap(credits)),out=[],remaining=options.remainingDays||0;
 // Extra offers may use only capacity beyond the remaining official day slots.
 var proposed=chooseBatch(candidates,{...options,size:Object.keys(candidates).length,context:ctx,reserve:true});
 for(var i=0;i<proposed.length&&out.length<(options.size||2);i++){
  var row=proposed[i],trial=out.concat([row]),trialContext=copyContext(ctx),trialArtists=new Set(used);
  registerRows(trialContext,trial);trial.forEach(function(r){credits(r.track.identity.artist).forEach(function(a){trialArtists.add(a);});});
  if(remaining&&chooseBatch(candidates,{size:Object.keys(candidates).length,context:trialContext,excludeIds:options.excludeIds,excludeArtists:Array.from(trialArtists)}).length<remaining*3)continue;
  if(remaining&&!weekReadiness(candidates,{days:remaining,context:trialContext,excludeIds:options.excludeIds,excludeArtists:Array.from(trialArtists),reserveOffers:0,minimumNewPerDay:options.minimumNewPerDay}).ready)continue;
  out.push(row);
 }
 return out;
}
function weekReadiness(candidates,options){
 options=options||{};var ctx=copyContext(options.context||context(candidates)),runs=[],usedArtists=new Set((options.excludeArtists||[]).flatMap(credits)),officialArtists=new Set(),days=options.days==null?7:options.days,minNew=options.minimumNewPerDay==null?2:options.minimumNewPerDay,reserveOffers=options.reserveOffers==null?2:options.reserveOffers;
 (options.excludeIds||[]).forEach(function(id){ctx.seen.add(id);});
 for(var day=1;day<=days;day++){
  var official=chooseBatch(candidates,{size:3,context:ctx,excludeArtists:Array.from(usedArtists)}),newCount=official.filter(function(r){return r.origin==='NEW_ARTIST';}).length;
  official.forEach(function(r){credits(r.track.identity.artist).forEach(function(a){officialArtists.add(a);usedArtists.add(a);});});
  registerRows(ctx,official);
  var reserve=reserveOffers?chooseReserveBatch(candidates,{size:reserveOffers,context:ctx,reserve:true,excludeArtists:Array.from(usedArtists),remainingDays:days-day,minimumNewPerDay:minNew}):[];
  registerRows(ctx,reserve);reserve.forEach(function(r){credits(r.track.identity.artist).forEach(function(a){usedArtists.add(a);});});
  runs.push({day:day,official:official.map(function(r){return r.id;}),newArtists:newCount,reserve:reserve.map(function(r){return r.id;})});
 }
 return {ready:runs.every(function(r){return r.official.length===3&&r.newArtists>=minNew;}),minimumNewPerDay:minNew,uniqueOfficialArtists:officialArtists.size,days:days,runs:runs,reason:runs.some(function(r){return r.official.length<3;})?'insufficient-fit-tracks':runs.some(function(r){return r.newArtists<minNew;})?'insufficient-new-artists':null,scope:'candidate readiness only; does not prove Saturday publication, Spotify write access or real future ratings'};
}
function categorySummary(){var out={OWN_DNA:{},KNOWN_ARTIST_NEW_TRACK:{},NEW_ARTIST:{},UNLABELED:{}};Object.values(signals()).forEach(function(s){var group=out[s.discoveryOrigin]||out.UNLABELED;group[s.rating]=(group[s.rating]||0)+1;});return out;}
window.MUSIC_DNA_DISCOVERY={version:VERSION,active:active,context:context,origin:origin,rank:rank,chooseBatch:chooseBatch,chooseReserveBatch:chooseReserveBatch,metadata:metadata,fit:fit,categorySummary:categorySummary,weekReadiness:weekReadiness};
})();
