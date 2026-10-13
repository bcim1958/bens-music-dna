'use strict';
const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict'),{execFileSync}=require('node:child_process');
execFileSync(process.execPath,['scripts/pin-gift-release.cjs','--check']);
function sandbox(failStage){
 const calls=[],view={},c={MUSIC_DNA_WRITER_RELEASE:'20261012.daily-store1',MUSIC_DNA_RATING_TRANSACTION:{acquire:async()=>{calls.push('acquire');if(failStage==='lease')throw Error('lease');},requireLease:()=>{calls.push('require');},recover:()=>calls.push('recover')},MUSIC_DNA_DAILY_STORE:{view,open:async()=>{calls.push('open');if(failStage==='open')throw Error('open');},flush:async()=>{calls.push('flush');if(failStage==='flush')throw Error('flush');return true;}}};c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync('test/music-dna-gift-storage-v1.js','utf8'),c);return {c,calls,view};
}
(async()=>{
 const ok=sandbox();assert.throws(()=>ok.c.MUSIC_DNA_GIFT_STORAGE.requireOpen(),/niet bevestigd/);
 assert.equal(await ok.c.MUSIC_DNA_GIFT_STORAGE.open(),ok.view);
 assert.deepEqual(ok.calls,['acquire','open','recover','require','flush']);
 await ok.c.MUSIC_DNA_GIFT_STORAGE.checkpoint();
 await assert.rejects(ok.c.MUSIC_DNA_GIFT_STORAGE.open(),/opnieuw/);
 for(const stage of ['lease','open','flush']){const x=sandbox(stage);await assert.rejects(x.c.MUSIC_DNA_GIFT_STORAGE.open(),new RegExp(stage));assert.equal(x.c.MUSIC_DNA_STORAGE_BLOCKED,true);assert.throws(()=>x.c.MUSIC_DNA_GIFT_STORAGE.requireOpen(),/niet bevestigd/);await assert.rejects(x.c.MUSIC_DNA_GIFT_STORAGE.open(),/opnieuw/);}
 const mixed=sandbox();mixed.c.MUSIC_DNA_WRITER_RELEASE='old';await assert.rejects(mixed.c.MUSIC_DNA_GIFT_STORAGE.open(),/Gemengde/);assert.equal(mixed.calls.length,0);
 const html=fs.readFileSync('test/zaterdagcadeau.html','utf8');
 assert(html.includes("script-src 'none'"),'compatibility gate remains closed');
 assert(html.indexOf('await MUSIC_DNA_GIFT_STORAGE.open()')<html.indexOf("for(const file of ['music-dna-learning-v1.js'"),'no hydration before protected storage');
 assert(!/<script src="music-dna-(learning|positive-bank|flow-learning|sequencer)/.test(html));
 assert(html.includes("AUTH_STORAGE.setItem('bmd_spotify_refresh'"));
 console.log('PASS: gift shares protected store and lease; failed storage stops; no legacy fallback or early hydration; integrity pins and compatibility gate retained.');
})().catch(e=>{console.error(e);process.exitCode=1});
