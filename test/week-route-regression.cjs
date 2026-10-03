const fs=require('fs'),vm=require('vm'),assert=require('assert');
const weeks=fs.readFileSync(require('path').join(__dirname,'music-dna-weeks-v1.js'),'utf8'),html=fs.readFileSync(require('path').join(__dirname,'zaterdagcadeau.html'),'utf8');
const ctx=vm.createContext({Date});vm.runInContext(weeks,ctx);
const config=vm.runInContext('MUSIC_DNA_WEEKS',ctx);
assert.equal(config.resolve(new Date(2026,9,3)).key,'2026-W40');
assert.equal(config.resolve(new Date(2026,9,4)),null);
assert.equal(config.get('2026-W41').ready,false);
assert(config.get('2026-W40').delivery.manifestPath.includes('2026-40'));
assert(config.get('2026-W41').delivery.manifestPath.includes('2026-41'));
const script=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];new vm.Script(script);
const code=script.slice(script.indexOf('async function createGift'),script.indexOf('async function completeDelivery'));
async function test(release,route=true){let writes=0;const button={};const uris=['spotify:track:fixture'];const sandbox={CFG:route?config.get('2026-W41'):{},WEEK:'2026-W41',YEAR_LABEL:'2026',WEEK_LABEL:'W41',GIFT:{},spotifyPayloadProof:()=>({ok:true,uris}),sameIds:(a,b)=>JSON.stringify(a)===JSON.stringify(b),fetch:async(u,o={})=>{if(o.method)writes++;return {ok:true,json:async()=>release}},validateGift:()=>{throw Error('passed gate')}};vm.createContext(sandbox);vm.runInContext(code,sandbox);let error;try{await sandbox.createGift('fake',button)}catch(e){error=e.message}assert.equal(writes,0);return {button,error};}
(async()=>{assert((await test({simulationGreen:false,weekId:'2026-41',orderedSpotifyUris:[]})).button.textContent.includes('simulatie'));assert((await test({simulationGreen:true,weekId:'2026-40',orderedSpotifyUris:['spotify:track:fixture']})).button.textContent.includes('simulatie'));assert((await test({simulationGreen:true,weekId:'2026-41',orderedSpotifyUris:[]})).button.textContent.includes('simulatie'));assert.equal((await test({},false)).error,'week-delivery-route-missing 2026-W41');assert.equal((await test({simulationGreen:true,weekId:'2026-41',orderedSpotifyUris:['spotify:track:fixture']})).error,'passed gate');console.log('PASS: W40 route preserved; W41 date and release guards; zero Spotify writes for blocked input; JavaScript parses.');})();
