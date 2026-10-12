'use strict';
const assert=require('node:assert/strict');
const {boot}=require('./w41-daily-regression.cjs');
const base='bmd-week-2026-W42-day1',id='pilot-0290eeW1DvuplJkqwhErTL';
const ids=[id,'pilot-068KPJISmxyjh0pdetMKdP','pilot-65k71e3Z4ZY6JhXSsz6spz'];
const ratings=Object.fromEntries(ids.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11T12:00:00Z'}]));
const cases={
 'orphan alongside valid selection':{[base+'-selection-v1']:{ids},[base+'-v1']:{orphan:{rating:'raak'}}},
 'invalid rating counted complete':{[base+'-selection-v1']:{ids},[base+'-v1']:Object.fromEntries(ids.map(id=>[id,{rating:'invalid'}]))},
 'duplicate completed selection':{[base+'-selection-v1']:{ids:[id,id,id]},[base+'-v1']:{[id]:{rating:'goed'}}},
 'completed unknown selection':{[base+'-selection-v1']:{ids:['x','y','z']},[base+'-v1']:{x:{rating:'goed'},y:{rating:'goed'},z:{rating:'goed'}}},
 'bank passes preflight then disappears':{[base+'-selection-v1']:{ids},[base+'-v1']:{[id]:{rating:'nee'}},'bmd-learning-v1':{signals:{[id]:{rating:'goed'}}},'bmd-positive-bank-v1':{items:{[id]:{rating:'goed',firstPositiveAt:'2026-09-01',playlistUses:0}}}},
 'malformed ratings':{[base+'-selection-v1']:{ids},[base+'-v1']:'{broken'},
 'null bank':{'bmd-positive-bank-v1':'null'},
 'array learning':{'bmd-learning-v1':{signals:[]}},
 'null history':{'bmd-positive-playlist-history-v1':'null'},
 'null selection':{[base+'-selection-v1']:'null'},
 'malformed receipt without bank':{'bmd-positive-playlist-history-v1':{weeks:{'2026-W41':{ids:'prior'}}}},
 'null learning entry':{'bmd-learning-v1':{signals:{prior:null}}}
};
(async()=>{
 let failed=0;
 for(const [name,extra] of Object.entries(cases)){
  const store=new Map(Object.entries(extra).map(([k,v])=>[k,typeof v==='string'?v:JSON.stringify(v)])),before=new Map(store);
  const p=await boot('daily.html',store,'2026-10-12T13:00:00+02:00');
  try{assert.match(p.nodes.screen.innerHTML,/Veilige wachtstand/,name);assert.equal(p.c.MUSIC_DNA_LEARNING,undefined,'hydration must not start');for(const [k,v] of before)assert.equal(store.get(k),v,k);assert(!store.has('bmd-week-2026-W42-day2-selection-v1'));console.log('PASS '+name);}catch(e){failed++;console.error('FAIL '+name+': '+e.message);}
 }
 // A rejected storage snapshot must not become the next healthy baseline.
 const unhealthy=new Map([['bmd-storage-health-v1',JSON.stringify({origin:'http://test',keyCount:2})],['bmd-marker',JSON.stringify({kept:true})]]),checkpoint=unhealthy.get('bmd-storage-health-v1');
 for(let i=0;i<2;i++){const p=await boot('daily.html',unhealthy,'2026-10-12T13:00:00+02:00');try{assert.match(p.nodes.screen.innerHTML,/Opslag is niet betrouwbaar bereikbaar/);assert.equal(unhealthy.get('bmd-storage-health-v1'),checkpoint);assert.equal(p.c.MUSIC_DNA_LEARNING,undefined);}catch(e){failed++;console.error('FAIL repeated storage rejection: '+e.message);}}
 // A consistent consumed historical item remains consumed and keeps its FIFO age.
 const prior={rating:'goed',artist:'Historical fixture',title:'Prior fixture',spotifyUrl:'https://open.spotify.com/track/0000000000000000000000',spotifyResolvedExact:true,ratedAt:'2026-09-01T00:00:00Z',firstPositiveAt:'2026-08-01T00:00:00Z',playlistUses:1,lastPlaylistWeek:'2026-W41'};
 const consistent=new Map(Object.entries({'bmd-learning-v1':{signals:{prior}},'bmd-positive-bank-v1':{items:{prior}},'bmd-positive-playlist-history-v1':{weeks:{'2026-W41':{ids:['prior'],spotifyTrackIds:['0000000000000000000000']}}}}).map(([k,v])=>[k,JSON.stringify(v)]));
 const p=await boot('daily.html',consistent,'2026-10-12T13:00:00+02:00');assert.equal(p.read('bmd-positive-bank-v1').items.prior.playlistUses,1);assert.equal(p.read('bmd-positive-bank-v1').items.prior.firstPositiveAt,prior.firstPositiveAt);assert.equal(p.read('bmd-positive-bank-v1').items.prior.lastPlaylistWeek,'2026-W41');
 for(let day=3;day<=7;day++){const key='bmd-week-2026-W42-day'+day+'-selection-v1',store=new Map([[key,JSON.stringify({ids})]]),raw=store.get(key);const p=await boot('daily.html',store,'2026-10-17T13:00:00+02:00');assert.match(p.nodes.screen.innerHTML,/gesloten dag/);assert.equal(store.get(key),raw);assert.equal(p.c.MUSIC_DNA_LEARNING,undefined);}
 // A real partial day resumes before day 2; Sunday never registers Monday.
 for(const date of ['2026-10-11T23:59:59+02:00','2026-10-12T00:00:00+02:00']){
  const store=new Map([[base+'-selection-v1',JSON.stringify({ids})],[base+'-v1',JSON.stringify({[id]:ratings[id]})]]);
  const p=await boot('daily.html',store,date);assert(!store.has('bmd-week-2026-W42-day2-selection-v1'));assert(p.nodes.screen.children.some(n=>n.textContent==='Jouw 5 ontdekkingen'));assert.equal(p.read(base+'-v1')[id].rating,'goed');
 }
 if(failed)throw Error(failed+' review cases failed');
 console.log('PASS review storage and oldest-unfinished routing');
})().catch(e=>{console.error(e);process.exitCode=1});
