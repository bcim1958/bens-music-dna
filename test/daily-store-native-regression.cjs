'use strict';
// Fresh temporary browser profiles and loopback origin only; synthetic fixtures.
// No connection to production, personal browser profiles, iPhone or Spotify.
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),results=[];
const d1=['0290eeW1DvuplJkqwhErTL','068KPJISmxyjh0pdetMKdP','65k71e3Z4ZY6JhXSsz6spz'].map(x=>'pilot-'+x);
const r1=['0tv2Vj73NTUs0FbUoHFOdZ','1bMV1Dw8B2feFudpLAdZQ8'].map(x=>'pilot-'+x);
const source={
 'bmd-week-2026-W42-day1-selection-v1':{ids:d1},
 'bmd-week-2026-W42-day1-v1':Object.fromEntries(d1.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11'}])),
 'bmd-week-2026-W42-day1-reserve-selection-v1':{ids:r1},
 'bmd-week-2026-W42-day1-reserve-v1':Object.fromEntries(r1.map(id=>[id,{rating:'goed',ratedAt:'2026-10-11',meter:false}])),
 'bmd-week-2026-W40-day1-v1':{},
 'bmd-learning-v1':{version:9,signals:{}},
 'bmd-positive-bank-v1':{version:16,items:{}},
 'bmd-positive-playlist-history-v1':{version:16,weeks:{'2026-W39':{ids:['fixture-used']}}},
 'bmd-unknown-historical-component':{preserve:'byte-for-byte'}
};
for(const [i,id]of ['fixture-fresh','fixture-used'].entries()){
 const ratedAt='2026-09-0'+(i+1)+'T09:00:00.000Z';
 source['bmd-week-2026-W40-day1-v1'][id]={rating:'goed',ratedAt};
 source['bmd-learning-v1'].signals[id]={trackId:id,rating:'goed',ratedAt,weight:1,source:'synthetic-fixture',artist:'Fixture artist '+i,title:'Synthetic track '+i,spotifyResolvedExact:true,spotifyUrl:'https://open.spotify.com/track/'+String(i+100).padStart(22,'0')};
 source['bmd-positive-bank-v1'].items[id]={...source['bmd-learning-v1'].signals[id],firstPositiveAt:'2026-08-0'+(i+1)+'T08:00:00.000Z',playlistUses:i,lastPlaylistWeek:i?'2026-W39':null};
}
const raw=Object.fromEntries(Object.entries(source).map(([k,v])=>[k,JSON.stringify(v)]));
const fixture=fs.readFileSync(path.join(root,'test/fixtures/compat-bank-85ad816.js'),'utf8');
const worker=`self.addEventListener('install',e=>e.waitUntil(caches.open('synthetic-old').then(c=>c.put('/legacy/cached-bank.js',new Response(${JSON.stringify(fixture)},{headers:{'Content-Type':'text/javascript','X-Fixture-Cache':'historical'}}))).then(()=>self.skipWaiting())));self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));self.addEventListener('fetch',e=>{if(new URL(e.request.url).pathname==='/legacy/cached-bank.js')e.respondWith(caches.match(e.request));});`;
const server=http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost'),name=url.pathname;
 if(name==='/synthetic-fixture'){res.setHeader('Content-Type','application/json');return res.end(JSON.stringify(raw));}
 if(name==='/synthetic-report'&&req.method==='POST'){let body='';req.on('data',x=>body+=x);req.on('end',()=>{fs.writeFileSync(process.argv[3]||'/private/tmp/w42-native.json',body);res.end('saved');});return;}
 if(name==='/blank'||name==='/legacy/page'){res.setHeader('Content-Type','text/html');return res.end('<!doctype html><title>Synthetic storage fixture</title>');}
 if(name==='/legacy/worker.js'){res.setHeader('Content-Type','text/javascript');return res.end(worker);}
 const file=path.resolve(root,'.'+name);
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.statusCode=404;return res.end();}
 res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.html')?'text/html':'application/octet-stream');let bytes=fs.readFileSync(file);if(name==='/test/daily.html')bytes=bytes.toString().replace('<script>window.MUSIC_DNA_WRITER_RELEASE=', '<script>const RealDate=Date;window.Date=class extends RealDate{constructor(...a){super(...(a.length?a:[\"2026-10-12T11:00:00.000Z\"]));}static now(){return new RealDate(\"2026-10-12T11:00:00.000Z\").getTime();}};</script><script>window.MUSIC_DNA_WRITER_RELEASE=');if(name==='/test/daily.html'){const failure=url.searchParams.get('syntheticFailure');let setup='';if(failure==='unavailable')setup="Object.defineProperty(window,'indexedDB',{value:undefined});";if(failure==='abort')setup="const origAdd=IDBObjectStore.prototype.add;IDBObjectStore.prototype.add=function(...args){const req=origAdd.apply(this,args);this.transaction.abort();return req;};";if(setup)bytes=bytes.replace('<script>', '<script>'+setup+'</script><script>');}if(name==='/test/zaterdagcadeau.html'&&url.searchParams.get('syntheticGift')==='1')bytes=bytes.toString().replace('<meta http-equiv="Content-Security-Policy" content="script-src \'none\'">','').replace(/<style>body > :not\(#compat-wait\)[\s\S]*?<\/style>/,'');res.end(bytes);
});
async function record(page){return page.evaluate(()=>new Promise((resolve,reject)=>{const req=indexedDB.open('music-dna-daily-v1',1);req.onsuccess=()=>{const db=req.result,tx=db.transaction('state'),get=tx.objectStore('state').get('daily');get.onsuccess=()=>{resolve(get.result||null);db.close();};get.onerror=()=>reject(get.error);};req.onerror=()=>reject(req.error);}));}
async function legacy(page){return page.evaluate(()=>Object.fromEntries(Object.keys(localStorage).map(k=>[k,localStorage.getItem(k)])));}
async function settled(page){await page.waitForFunction(()=>document.querySelector('#screen .card')||document.querySelector('#screen h1')?.textContent==='Beoordeling niet bevestigd');await page.waitForFunction(()=>!document.querySelector('#screen').inert);}
async function rate(page,index=0){await page.locator('.card:not(.reserve)').nth(index).click();await page.getByRole('button',{name:'👍 GOED',exact:true}).click();await page.waitForFunction(()=>document.querySelector('#screen .card')||document.querySelector('#screen h1')?.textContent==='Beoordeling niet bevestigd');await page.waitForFunction(()=>!document.querySelector('#screen').inert);}
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const origin='http://127.0.0.1:'+server.address().port;
 if(process.argv[2]==='--serve'){console.log(origin+'/test/daily-store-native.html');return;}
 const browser=await chromium.launch({headless:true,executablePath:process.env.MUSIC_DNA_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 async function context(){const c=await browser.newContext();await c.route('**/*',route=>new URL(route.request().url()).origin===origin?route.continue():route.abort());await c.addInitScript(()=>{const RealDate=Date;window.Date=class extends RealDate{constructor(...a){super(...(a.length?a:['2026-10-12T11:00:00.000Z']));}static now(){return new RealDate('2026-10-12T11:00:00.000Z').getTime();}};});return c;}
 async function seed(c,values=raw){const p=await c.newPage();await p.goto(origin+'/blank');await p.evaluate(data=>{if(localStorage.length)throw Error('Origin not empty');for(const[k,v]of Object.entries(data))localStorage.setItem(k,v);},values);return p;}
 try{
  const c=await context(),old=await seed(c),p=await c.newPage();await p.goto(origin+'/test/daily.html');await settled(p);
  assert(await p.locator('.card').count(),'daily failed: '+await p.locator('#screen').innerText());
  const initial=await record(p);assert.deepEqual(initial.original,raw);assert.deepEqual(await legacy(old),raw);
  for(const k of Object.keys(raw).filter(k=>/day1-|W40|history|unknown/.test(k)))assert.equal(initial.current[k],raw[k],k);
  const bank=JSON.parse(initial.current['bmd-positive-bank-v1']);for(const id of ['fixture-fresh','fixture-used'])for(const field of ['firstPositiveAt','playlistUses','lastPlaylistWeek'])assert.equal(bank.items[id][field],source['bmd-positive-bank-v1'].items[id][field]);
  results.push('cutover retains every original byte; historical ratings, receipts and FIFO retained; zero source writes');
  const recovery=await c.newPage();await recovery.goto(origin+'/test/gegevens-bewaren.html');
  const downloadPromise=recovery.waitForEvent('download');await recovery.locator('#save').click();const download=await downloadPromise;
  const downloadPath=await download.path(),exported=JSON.parse(fs.readFileSync(downloadPath,'utf8'));
  assert.deepEqual(exported.record,await record(p));assert.deepEqual(exported.legacy,await legacy(old));assert.deepEqual(await record(p),initial);assert.deepEqual(await legacy(old),raw);await recovery.close();
  results.push('full recovery export preserves original, current and legacy bytes; readonly, zero mutations');
  const second=await c.newPage();await second.goto(origin+'/test/daily.html');await settled(second);assert.match(await second.locator('#screen').innerText(),/ander tabblad/);assert.deepEqual(await record(p),initial);await second.close();results.push('second actual browser tab blocked before writes');
  await old.evaluate(()=>{window.MUSIC_DNA_LEARNING={read:()=>({signals:{}})};});await old.addScriptTag({content:fixture});await old.evaluate(()=>MUSIC_DNA_POSITIVE_BANK.sync());
  assert.equal(JSON.parse((await legacy(old))['bmd-positive-bank-v1']).items['fixture-fresh'],undefined);assert.deepEqual(await record(p),initial);results.push('actual historical bank code still deletes legacy reserve but cannot delete canonical reserve');
  await old.evaluate(()=>localStorage.clear());assert.deepEqual(await record(p),initial);assert.equal(await p.locator('#screen .card').count()>0,true);results.push('legacy localStorage.clear cannot remove original or current daily data');
  await rate(p);assert.doesNotMatch(await p.locator('#screen').innerText(),/Beoordeling niet bevestigd/);const rated=await record(p),day='bmd-week-2026-W42-day2-v1';assert.equal(Object.values(JSON.parse(rated.current[day]))[0].rating,'goed');assert.deepEqual(rated.original,raw);
  await p.close();const reopened=await c.newPage();await reopened.goto(origin+'/test/daily.html');await settled(reopened);assert(await reopened.locator('.card').count());assert.equal((await record(reopened)).current[day],rated.current[day]);results.push('day 2 rating acknowledged after atomic completion and preserved after reopening with empty legacy storage');
  const beforeFailure=await record(reopened);await reopened.evaluate(()=>{const put=IDBObjectStore.prototype.put;IDBObjectStore.prototype.put=function(...args){const req=put.apply(this,args);this.transaction.abort();return req;};});await rate(reopened,1);assert.match(await reopened.locator('#screen').innerText(),/Beoordeling niet bevestigd/);assert.deepEqual(await record(reopened),beforeFailure);await reopened.close();
  const afterFailure=await c.newPage();await afterFailure.goto(origin+'/test/daily.html');await settled(afterFailure);assert(await afterFailure.locator('.card').count());assert.equal((await record(afterFailure)).current[day],beforeFailure.current[day]);results.push('abort after IDB put rejects confirmation; entire durable record unchanged; reopening succeeds');
  // Worker-cached historical bytes execute in an old page on this same origin.
  await old.goto(origin+'/legacy/page');await old.evaluate(async()=>{await navigator.serviceWorker.register('/legacy/worker.js');await navigator.serviceWorker.ready;if(!navigator.serviceWorker.controller)await new Promise(resolve=>navigator.serviceWorker.addEventListener('controllerchange',resolve,{once:true}));});
  const cached=await old.evaluate(async()=>{const r=await fetch('/legacy/cached-bank.js');return{header:r.headers.get('X-Fixture-Cache'),code:await r.text()};});assert.equal(cached.header,'historical');assert.equal(cached.code,fixture);
  await old.evaluate(data=>{localStorage.setItem('bmd-positive-bank-v1',data);window.MUSIC_DNA_LEARNING={read:()=>({signals:{}})};},raw['bmd-positive-bank-v1']);await old.addScriptTag({url:origin+'/legacy/cached-bank.js'});const protectedState=await record(afterFailure);await old.evaluate(()=>MUSIC_DNA_POSITIVE_BANK.sync());assert.equal(JSON.parse((await legacy(old))['bmd-positive-bank-v1']).items['fixture-fresh'],undefined);assert.deepEqual(await record(afterFailure),protectedState);results.push('real service-worker-cached historical code cannot alter isolated daily record');
  const beforeGift=await record(afterFailure),legacyBeforeGift=await legacy(old);await afterFailure.close();
  const gift=await c.newPage();await gift.goto(origin+'/test/zaterdagcadeau.html?week=2026-W42&syntheticGift=1');
  await gift.waitForFunction(()=>document.querySelector('#screen').textContent.includes('Nog niet zaterdag'));
  const giftState=await record(gift);assert.deepEqual(giftState.original,beforeGift.original);assert.deepEqual(await legacy(old),legacyBeforeGift);
  for(const [key,value]of Object.entries(beforeGift.current))if(/day[1-7]-(reserve-)?v1$|playlist-history/.test(key))assert.equal(giftState.current[key],value,key);
  const giftBank=JSON.parse(giftState.current['bmd-positive-bank-v1']);for(const id of ['fixture-fresh','fixture-used'])for(const field of ['firstPositiveAt','playlistUses','lastPlaylistWeek'])assert.equal(giftBank.items[id][field],source['bmd-positive-bank-v1'].items[id][field]);
  const concurrent=await c.newPage();await concurrent.goto(origin+'/test/daily.html');await settled(concurrent);assert.match(await concurrent.locator('#screen').innerText(),/ander tabblad/);await concurrent.close();
  await gift.evaluate(async()=>{MUSIC_DNA_DAILY_STORE.view.setItem('bmd-delivery-fixture-v1',JSON.stringify({status:'created',id:'synthetic-only'}));MUSIC_DNA_DAILY_STORE.view.setItem('bmd-gift-checkpoint-fixture-v1',JSON.stringify({synthetic:true}));await MUSIC_DNA_GIFT_STORAGE.checkpoint();});
  const acknowledged=await record(gift);assert(acknowledged.current['bmd-delivery-fixture-v1']);assert(acknowledged.current['bmd-gift-checkpoint-fixture-v1']);assert.deepEqual(acknowledged.original,raw);await gift.close();
  const resumeGift=await c.newPage();await resumeGift.goto(origin+'/test/zaterdagcadeau.html?week=2026-W42&syntheticGift=1');await resumeGift.waitForFunction(()=>document.querySelector('#screen').textContent.includes('Nog niet zaterdag'));
  const durableGift=await record(resumeGift);assert.equal(durableGift.current['bmd-delivery-fixture-v1'],acknowledged.current['bmd-delivery-fixture-v1']);
  const failure=await resumeGift.evaluate(async()=>{const put=IDBObjectStore.prototype.put;IDBObjectStore.prototype.put=function(...args){const req=put.apply(this,args);this.transaction.abort();return req;};MUSIC_DNA_DAILY_STORE.view.setItem('bmd-delivery-fixture-v1',JSON.stringify({status:'synthetic-replacement'}));MUSIC_DNA_DAILY_STORE.view.setItem('bmd-gift-checkpoint-fixture-v1',JSON.stringify({synthetic:'replacement'}));try{await MUSIC_DNA_GIFT_STORAGE.checkpoint();return {rejected:false};}catch(e){return {rejected:true,blocked:MUSIC_DNA_STORAGE_BLOCKED};}});
  assert.deepEqual(failure,{rejected:true,blocked:true});assert.deepEqual(await record(resumeGift),durableGift);assert.deepEqual(await legacy(old),legacyBeforeGift);
  results.push('actual Saturday bootstrap reads canonical daily record, shares tab lock, preserves ratings/FIFO and legacy bytes; receipt checkpoint survives reopen; abort preserves entire durable record');await c.close();
  for(const [label,data,configure]of [
   ['pending legacy journal',{...raw,'bmd-rating-transaction-v1':'{"pending":"synthetic"}'},null],
   ['unavailable IndexedDB',raw,()=>Object.defineProperty(window,'indexedDB',{value:undefined})],
   ['initial IDB abort',raw,()=>{const add=IDBObjectStore.prototype.add;IDBObjectStore.prototype.add=function(...args){const r=add.apply(this,args);this.transaction.abort();return r;};}]
  ]){const c=await context(),old=await seed(c,data);if(configure)await c.addInitScript(configure);const p=await c.newPage();await p.goto(origin+'/test/daily.html');await settled(p);assert.match(await p.locator('#screen').innerText(),/Beoordeling niet bevestigd/);assert.deepEqual(await legacy(old),data);if(label!=='unavailable IndexedDB')assert.equal(await record(old),null);results.push(label+': no successful cutover, no source writes, no fallback');await c.close();}
  const report={pass:true,browser:browser.version(),syntheticOnly:true,productionWrites:0,iphoneWrites:0,spotifyWrites:0,checks:results};
  if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
