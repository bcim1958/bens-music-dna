'use strict';
const assert=require('node:assert/strict');
const {adapt,encode}=require('../scripts/express-week-source.cjs');
const head='a'.repeat(40),date='2026-01-01T00:00:00Z';
function fixture(){const tracks=Array.from({length:21},(_,i)=>({selected:true,listeningPosition:i+1,spotifyTrackId:String(i).padStart(22,'0'),spotifyArtists:[{uri:'spotify:artist:'+String(i).padStart(22,'0'),name:'Fixture '+i}],title:'Synthetic track '+i}));const uris=tracks.map(t=>'spotify:track:'+t.spotifyTrackId);return {s:{week:'2026-W44',selectedCount:21,positiveCandidates:tracks},r:{week:'2026-44',count:21,status:'published',verifiedAt:date,playlistId:'1'.repeat(22),url:'https://open.spotify.com/playlist/'+'1'.repeat(22),name:'Ontdek DNA #2026-44',tracks:uris.map(uri=>({uri}))},b:{kind:'public-embed-readback',sourceHead:head,checkedAt:date,sourceUrl:'https://open.spotify.com/embed/playlist/'+'1'.repeat(22),playlistId:'1'.repeat(22),name:'Ontdek DNA #2026-44',orderedUris:uris}};}
let tests=0;function check(name,fn){fn();tests++;console.log('PASS '+name);}function run(f){return adapt(encode(f.s),encode(f.r),encode(f.b),head);}
check('deterministic matching snapshot derives 21 research tasks without ratings',()=>{const f=fixture(),a=run(f);assert.equal(a.status,'SOURCE_MATCHED');assert.equal(a.bioQueue.length,21);assert.equal(a.publishedByAdapter,false);assert.equal(a.endToEndProven,false);assert.equal(a.externalWrites,0);assert.equal(a.manifest.setKind,'published-playlist-snapshot');assert.deepEqual(run(f),a);});
check('receipt published status required',()=>{const f=fixture();f.r.status='prepared';assert.equal(run(f).reason,'WEEK_SOURCE');});
check('conflicting source counts rejected',()=>{const f=fixture();f.r.count=20;assert.equal(run(f).reason,'SELECTION_SOURCE');});
check('receipt from another week rejected',()=>{const f=fixture();f.r.week='2026-43';assert.equal(run(f).reason,'WEEK_SOURCE');});
check('reordered live playlist rejected',()=>{const f=fixture();f.b.orderedUris.reverse();assert.equal(run(f).reason,'ORDER_MISMATCH');});
check('reordered receipt rejected',()=>{const f=fixture();f.r.tracks.reverse();assert.equal(run(f).reason,'ORDER_MISMATCH');});
check('duplicate source track rejected',()=>{const f=fixture();f.s.positiveCandidates[1].spotifyTrackId=f.s.positiveCandidates[0].spotifyTrackId;assert.equal(run(f).reason,'SELECTION_SOURCE');});
check('missing primary artist rejected',()=>{const f=fixture();f.s.positiveCandidates[0].spotifyArtists=[];assert.equal(run(f).reason,'SELECTION_SOURCE');});
check('different playlist id rejected',()=>{const f=fixture();f.b.playlistId='2'.repeat(22);assert.equal(run(f).reason,'READBACK_SOURCE');});
check('future readback rejected',()=>{const f=fixture();f.b.checkedAt='2099-01-01T00:00:00Z';assert.equal(run(f).reason,'READBACK_SOURCE');});
check('readback older than delivery rejected',()=>{const f=fixture();f.b.checkedAt='2025-01-01T00:00:00Z';assert.equal(run(f).reason,'READBACK_SOURCE');});
check('changed source head rejected',()=>{const f=fixture();f.b.sourceHead='b'.repeat(40);assert.equal(run(f).reason,'READBACK_SOURCE');});
check('truncated source holds',()=>{assert.equal(adapt('{','{}','{}',head).status,'HOLD');});
console.log(JSON.stringify({pass:true,tests,synthetic:true,externalWrites:0,endToEndProven:false}));
