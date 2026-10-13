'use strict';
// Synthetic device ratings only. Research candidates injected into fixture,
// never promoted by this test into the production week configuration.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {boot}=require('./w41-daily-regression.cjs');
const research=JSON.parse(fs.readFileSync('docs/W42-DAYS3-7-SPOTIFY-RESEARCH-2026-10-13.json'));
assert.equal(research.inputsApproved,false);
assert.equal(research.tracks.length,15);
assert.equal(new Set(research.tracks.map(t=>t.spotifyTrackUri)).size,15);
assert.equal(new Set(research.tracks.flatMap(t=>t.spotifyArtistUris)).size,15);
assert(research.tracks.every(t=>t.publicEmbedPlayable===true&&t.accountAvailabilityVerified===false));
const options={afterLoad(c,name){
 if(name==='music-dna-weeks-v1.js')vm.runInContext("MUSIC_DNA_WEEKS.get('2026-W42').preparedThroughDay=7",c);
 if(name==='music-dna-w42-day2-v1.js'){
  const catalog=c.MUSIC_DNA_W42_CANDIDATES;
  for(let day=3;day<=7;day++)catalog['day'+day]={official:[],reserve:[]};
  for(const t of research.tracks){const id='pilot-'+t.spotifyTrackUri.split(':').pop();catalog.tracks[id]={identity:{artist:t.artist,title:t.title},spotifyUrl:t.spotifyUrl,taxonomy:{allMusicStyles:[]},editorial:{whyForYou:'Synthetic routing fixture; not editorial approval.'}};catalog['day'+t.proposedDay].official.push(id);}
 }
}};
function elements(n){return[n,...(n.children||[]).flatMap(elements)];}
function setDay(store,catalog,day){const base='bmd-week-2026-W42-day'+day,ids=catalog['day'+day].official;
 store.set(base+'-selection-v1',JSON.stringify({ids,createdAt:'2026-10-11T10:00:00Z'}));
 store.set(base+'-v1',JSON.stringify(Object.fromEntries(ids.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11T10:00:00Z',meter:true}]))));
}
(async()=>{
 const s=new Map(),first=await boot('daily.html',s,'2026-10-11T12:00:00+02:00',options),catalog=first.c.MUSIC_DNA_W42_CANDIDATES;
 for(let day=1;day<=2;day++)setDay(s,catalog,day);
 const reserveKey='bmd-week-2026-W42-day1-reserve-selection-v1',reserve=JSON.parse(s.get(reserveKey)||'null');
 if(reserve)s.set('bmd-week-2026-W42-day1-reserve-v1',JSON.stringify(Object.fromEntries(reserve.ids.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11T10:00:00Z',meter:false}]))));
 const preserved=new Map(s);
 const tuesday=await boot('daily.html',s,'2026-10-13T12:00:00+02:00',options);
 assert(tuesday.read('bmd-week-2026-W42-day3-selection-v1'),tuesday.nodes.screen.innerHTML);
 assert.deepEqual(tuesday.read('bmd-week-2026-W42-day3-selection-v1').ids,catalog.day3.official);
 for(const [k,v] of preserved)if(/^bmd-week-/.test(k))assert.equal(s.get(k),v);
 const selected=s.get('bmd-week-2026-W42-day3-selection-v1');
 await boot('daily.html',s,'2026-10-16T12:00:00+02:00',options);
 assert.equal(s.get('bmd-week-2026-W42-day3-selection-v1'),selected,'oldest unfinished day resumes');
 assert.equal(s.has('bmd-week-2026-W42-day4-selection-v1'),false);
 for(let day=3;day<=6;day++)setDay(s,catalog,day);
 const friday=await boot('daily.html',s,'2026-10-16T23:59:00',options);
 assert.equal(s.has('bmd-week-2026-W42-day7-selection-v1'),false);
 assert.equal(friday.nodes.gift,undefined);
 const saturday=await boot('daily.html',s,'2026-10-17T00:00:00',options);
 assert.deepEqual(saturday.read('bmd-week-2026-W42-day7-selection-v1').ids,catalog.day7.official);
 assert.equal(saturday.nodes.gift,undefined,'three Saturday ratings required');
 setDay(s,catalog,7);
 const before=new Map(s),done=await boot('daily.html',s,'2026-10-17T12:00:00+02:00',options);
 assert.match(done.nodes.screen.innerHTML,/21 Muziekmeter-beoordelingen klaar/);
 assert.equal(typeof done.nodes.gift.onclick,'function');
 done.nodes.gift.onclick();assert.match(done.c.location.href,/zaterdagcadeau.html\?week=2026-W42/);
 for(const [k,v] of before)if(/^bmd-week-/.test(k))assert.equal(s.get(k),v);
 // Staged automatic route must wait for the durable render checkpoint, but
 // must not wait for optional reserve ratings after all 21 official ratings.
 const optional='synthetic-optional-reserve',autoOptions={afterLoad(c,name){options.afterLoad(c,name);if(name==='music-dna-weeks-v1.js')vm.runInContext("Object.assign(MUSIC_DNA_WEEKS.get('2026-W42'),{automaticGift:true,delivery:{releasePath:'synthetic-release',manifestPath:'synthetic-manifest',museumPath:'synthetic-museum'}})",c);if(name==='music-dna-w42-day2-v1.js'){c.MUSIC_DNA_W42_CANDIDATES.tracks[optional]={identity:{artist:'Synthetic optional reserve',title:'Synthetic fixture'},spotifyUrl:'https://open.spotify.com/track/9999999999999999999999',taxonomy:{allMusicStyles:[]}};c.MUSIC_DNA_W42_CANDIDATES.day7.reserve=[optional];}}};
 const autoStore=new Map(before),last=catalog.day7.official[2],state=JSON.parse(autoStore.get('bmd-week-2026-W42-day7-v1'));delete state[last];autoStore.set('bmd-week-2026-W42-day7-v1',JSON.stringify(state));autoStore.set('bmd-week-2026-W42-day7-reserve-selection-v1',JSON.stringify({ids:[optional]}));
 const auto=await boot('daily.html',autoStore,'2026-10-17T12:00:00+02:00',autoOptions);assert.equal(auto.c.location.href,undefined);
 auto.nodes.screen.children.find(n=>n.className==='card'&&n.children.some(x=>x.textContent===catalog.tracks[last].identity.title)).onclick();await elements(auto.nodes.screen).find(n=>n.textContent==='👍 GOED').onclick();
 assert.match(auto.c.location.href,/automatic=1/);assert.equal(auto.read('bmd-week-2026-W42-day7-reserve-v1'),null,'optional reserve is not auto-rated');
 const abortedOptions={afterLoad(c,name){autoOptions.afterLoad(c,name);if(name==='music-dna-prepared-day-v1.js'){vm.runInContext("document.defaultView=window;window.MUSIC_DNA_DAILY_STORE={view:window.localStorage,flush:async function(){throw Error('synthetic checkpoint abort');}}",c);}}};
 const aborted=await boot('daily.html',new Map(autoStore),'2026-10-17T12:00:00+02:00',abortedOptions);assert.equal(aborted.c.location.href,undefined,'no automatic navigation before successful checkpoint');assert.match(aborted.nodes.screen.innerHTML,/Beoordeling niet bevestigd/);
 console.log('PASS: proposed seven-day fixture resumes oldest day, preserves ratings, respects dates and reaches gift only after 21 ratings. Synthetic ratings; Spotify writes=0; endToEndProven=false.');
})().catch(e=>{console.error(e);process.exitCode=1});
