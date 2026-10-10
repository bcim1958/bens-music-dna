'use strict';
// Offline checks only: generated ratings are synthetic, requests use mocks, no Spotify credentials.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawnSync}=require('node:child_process');
const S=require('./saturday-simulator.cjs');
const root=path.resolve(__dirname,'..'),temp=fs.mkdtempSync(path.join(os.tmpdir(),'music-dna-weekly-'));
const results=[];
function run(file,args=[]){
 const p=spawnSync(process.execPath,[path.join(root,file),...args],{cwd:root,encoding:'utf8',timeout:60000});
 const pass=p.status===0&&!p.error;
 results.push({test:file,pass,exitCode:p.status});
 console.log((pass?'PASS ':'FAIL ')+file);
 if(!pass){console.error(p.stdout||'');console.error(p.stderr||p.error||'');throw Error('weekly regression failed: '+file);}
}
(async()=>{
 try{
  for(const file of ['w42-readiness-regression','w42-cycle-regression','w41-preview-regression','positive-bank-recording-regression','w41-artist-uniqueness-regression','week-route-regression','discovery-policy-regression','discovery-week-capacity-regression','daily-reserve-capacity-regression','saturday-simulator-regression','w40-callback-recovery-regression','w40-resume-regression','artwork-payload-regression','artwork-identity-regression','week-manifest-counter-regression'])run('test/'+file+'.cjs');
  // Historical-shaped markers test preservation without importing personal storage
  // or treating W40 candidates as real ratings.
  const e=S.sandbox();
  const ids=Array.from({length:21},(_,i)=>'fixture-historical-'+i);
  const storage={};for(let day=1;day<=7;day++){
   const official=ids.slice((day-1)*3,day*3),key='bmd-week-2026-W40-day'+day;
   storage[key+'-selection-v1']={ids:official};
   storage[key+'-v1']=Object.fromEntries(official.map(id=>[id,{rating:'goed',ratedAt:'2026-10-03T08:00:00Z'}]));
  }
  // Synthetic affinity context prevents this fixture's intentionally negative day from
  // erasing every eligible style in the absence of a real user's richer history.
  e.load('music-dna-discovery-reference-v1.js');
  storage['bmd-learning-v1']={version:9,signals:Object.fromEntries(Array.from({length:6},(_,i)=>['fixture-anchor-'+i,{rating:'raak',weight:2,source:'synthetic-fixture',artist:'Synthetic anchor '+i,title:'Fixture affinity',ratedAt:'2026-09-01T00:00:00Z',spotifyResolvedExact:true,spotifyUrl:'https://open.spotify.com/track/'+String(i+100).padStart(22,'0'),styles:Object.keys(e.ctx.MUSIC_DNA_DISCOVERY_REFERENCE.styles)}]))};
  const input=path.join(temp,'synthetic-history.json'),device=path.join(temp,'synthetic-w41.json'),proof=path.join(temp,'synthetic-chain.json'),runtime=path.join(temp,'synthetic-runtime.json');
  fs.writeFileSync(input,JSON.stringify({storage,syntheticFutureRatings:true}));
  run('test/w41-daily-regression.cjs',[input,device]);
  run('scripts/saturday-simulator.cjs',[device,proof]);
  run('test/w41-runtime-regression.cjs',[device,proof,runtime]);
  run('test/express-delivery-regression.cjs',[device]);
  const report={pass:true,tests:results,syntheticRatings:true,spotifyWrites:0,endToEndProven:false};
  if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
