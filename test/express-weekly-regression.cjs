'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const {prepare,sha}=require('../scripts/express-weekly.cjs');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'express-regression-'));
let count=0;
function test(name,fn){fn();count++;console.log('PASS '+name);}
function fixture(){
 const dir=fs.mkdtempSync(path.join(root,'input-')),out=fs.mkdtempSync(path.join(root,'output-'));
 const doc='Synthetic manuscript, never personal data.';
 const files={'manuscript.txt':doc,'readingProof.html':'<p>Synthetic reading proof</p>','playlist.json':JSON.stringify({tracks:[{uri:'spotify:track:0123456789012345678901'}]}),
 'claims.json':JSON.stringify([{id:'fixture',claim:'Synthetic claim',status:'verified-fact',url:'https://example.org/fixture',locator:'fixture paragraph',checkedAt:'2026-01-01T00:00:00Z'}])};
 const review={status:'pass',manuscriptSha256:sha(doc),claimsSha256:sha(files['claims.json']),playlistSha256:sha(files['playlist.json']),readingProofSha256:sha(files['readingProof.html']),reviewer:'synthetic-test',checkedAt:'2026-01-01T00:00:00Z'};
 files['editorialReview.json']=JSON.stringify(review);files['deviceReview.json']=JSON.stringify({...review,devices:{iMac:'pass',iPhone:'pass',iPad:'pass'}});
 for(const [name,data] of Object.entries(files))fs.writeFileSync(path.join(dir,name),data);
 const input={schemaVersion:1,kind:'playlist-story',week:'2026-W44',revision:1,cutoff:'2026-01-02T00:00:00Z',artifacts:Object.entries(files).map(([p,data])=>({role:p.split('.')[0],path:p,sha256:sha(data)}))};
 const file=path.join(dir,'input.json'),save=()=>fs.writeFileSync(file,JSON.stringify(input));save();
 return {dir,out,input,file,save,run:(o)=>prepare(file,out,o),change(role,value){const a=input.artifacts.find(x=>x.role===role);const s=JSON.stringify(value);fs.writeFileSync(path.join(dir,a.path),s);a.sha256=sha(s);save();}};
}
function weekFixture(){
 const f=fixture();f.input.kind='weekly-issue';
 const manifest={week:'2026-W44',frozen:true,tracks:Array.from({length:21},(_,i)=>({artistId:'fixture-artist-'+i,uri:'spotify:track:'+String(i).padStart(22,'0')}))};
 const add=(role,value)=>{const data=JSON.stringify(value),p=role+'.json';fs.writeFileSync(path.join(f.dir,p),data);f.input.artifacts.push({role,path:p,sha256:sha(data)});};
 add('weekManifest',manifest);
 add('weekReadback',{week:'2026-W44',manifestSha256:sha(JSON.stringify(manifest)),kind:'external-readback',sourceUrl:'https://example.org/synthetic',checkedAt:'2026-01-01T00:00:00Z',orderedUris:manifest.tracks.map(t=>t.uri)});
 add('weekBios',manifest.tracks.map(t=>({artistId:t.artistId,status:'ready',text:'Synthetic biography',claimIds:['fixture']})));f.save();return f;
}
try{
 test('same input retry returns one immutable bundle and two attempts',()=>{const f=fixture();assert.equal(f.run().status,'PREPARED');assert.equal(f.run().reused,true);assert.equal(fs.readdirSync(f.out).filter(x=>x.startsWith('2026-W44-r')).length,1);assert.equal(fs.readFileSync(path.join(f.out,'attempts.jsonl'),'utf8').trim().split('\n').length,2);});
 test('changed input at same revision holds without overwriting',()=>{const f=fixture();f.run();f.input.cutoff='2026-01-03T00:00:00Z';f.save();assert.equal(f.run().reason,'REVISION_CONFLICT');});
 test('tampered input digest holds',()=>{const f=fixture();fs.appendFileSync(path.join(f.dir,'manuscript.txt'),'changed');assert.equal(f.run().reason,'INPUT_CHANGED');});
 test('tampered output blocks readback',()=>{const f=fixture();f.run();fs.appendFileSync(path.join(f.out,'2026-W44-r1','manuscript.txt'),'changed');assert.equal(f.run().reason,'OUTPUT_CORRUPT');});
 test('overlapping runner or retained crash lock holds',()=>{const f=fixture();fs.mkdirSync(path.join(f.out,'2026-W44.lock'));assert.equal(f.run().reason,'CONCURRENT_OR_INTERRUPTED');assert.ok(fs.existsSync(path.join(f.out,'2026-W44.lock')));});
 test('precommit interruption cannot expose partial edition; retry works',()=>{const f=fixture();assert.equal(f.run({beforeCommit(){throw Error('injected failure');}}).status,'HOLD');assert.ok(!fs.existsSync(path.join(f.out,'2026-W44-r1')));assert.equal(f.run().status,'PREPARED');});
 test('missing review never gets a generated pass',()=>{const f=fixture();f.input.artifacts=f.input.artifacts.filter(x=>x.role!=='deviceReview');f.save();assert.equal(f.run().reason,'DEPENDENCY_MISSING');});
 test('review must bind exact manuscript bytes',()=>{const f=fixture();f.change('editorialReview',{status:'pass',manuscriptSha256:'old'});assert.equal(f.run().reason,'REVIEW_REQUIRED');});
 test('unverified factual claim holds',()=>{const f=fixture();f.change('claims',[{id:'x',claim:'Unverified',status:'open'}]);assert.equal(f.run().reason,'SOURCE_LOCK');});
 test('post-cutoff evidence holds',()=>{const f=fixture();f.change('claims',[{id:'x',claim:'Later',status:'verified-fact',url:'https://example.org',locator:'x',checkedAt:'2026-01-03T00:00:00Z'}]);assert.equal(f.run().reason,'SOURCE_LOCK');});
 test('duplicate recording holds',()=>{const f=fixture();f.change('playlist',{tracks:Array(2).fill({uri:'spotify:track:0123456789012345678901'})});assert.equal(f.run().reason,'PLAYLIST_IDENTITY');});
 test('weekly issue requires real week truth; story can prepare independently',()=>{const f=fixture();f.input.kind='weekly-issue';f.save();assert.equal(f.run().reason,'WEEK_TRUTH_HOLD');f.input.kind='playlist-story';f.save();assert.equal(f.run().status,'PREPARED');});
 test('path traversal holds',()=>{const f=fixture();f.input.artifacts[0].path='../outside';f.save();assert.equal(f.run().reason,'INPUT_PATH');});
 test('symlink cannot reach protected input',()=>{const f=fixture();fs.unlinkSync(path.join(f.dir,'manuscript.txt'));fs.symlinkSync(__filename,path.join(f.dir,'manuscript.txt'));assert.equal(f.run().reason,'INPUT_PATH');});
 test('invalid JSON holds and does not publish',()=>{const f=fixture();fs.writeFileSync(f.file,'{');const r=f.run();assert.equal(r.status,'HOLD');assert.equal(r.published,false);});
 test('future cutoff holds',()=>{const f=fixture();f.input.cutoff='2099-01-01T00:00:00Z';f.save();assert.equal(f.run().reason,'CUTOFF');});
 test('no package can claim live or external writes',()=>{const f=fixture();const r=f.run();assert.equal(r.published,false);assert.equal(r.externalWrites,0);assert.equal(r.storageWrites,0);assert.equal(r.endToEndProven,false);assert.equal(r.automaticSaturdayProven,false);});
 test('weekly manifest derives every artist without requiring ratings',()=>{const f=weekFixture();assert.equal(f.run().status,'PREPARED');});
 test('week readback with wrong order holds',()=>{const f=weekFixture();const a=f.input.artifacts.find(x=>x.role==='weekReadback');const rb=JSON.parse(fs.readFileSync(path.join(f.dir,a.path)));rb.orderedUris.reverse();f.change('weekReadback',rb);assert.equal(f.run().reason,'WEEK_TRUTH_HOLD');});
 test('incomplete or wrong artist biographies hold',()=>{const f=weekFixture();f.change('weekBios',[]);assert.equal(f.run().reason,'BIO_HOLD');});
 test('layout change invalidates device review',()=>{const f=fixture();f.change('readingProof','Changed layout');assert.equal(f.run().reason,'REVIEW_REQUIRED');});
 test('editorial review cannot survive changed evidence',()=>{const f=fixture();f.change('claims',[{id:'new',claim:'Interpretation',status:'editorial-interpretation'}]);assert.equal(f.run().reason,'REVIEW_REQUIRED');});
 test('logging failure holds even after local bundle commit',()=>{const f=fixture();fs.mkdirSync(path.join(f.out,'attempts.jsonl'));assert.equal(f.run().reason,'LOG_WRITE_FAILED');assert.ok(fs.existsSync(path.join(f.out,'2026-W44-r1')));});
 test('abrupt process death retains lock and never exposes staged edition',()=>{const f=fixture();const {spawnSync}=require('node:child_process');const child=spawnSync(process.execPath,['-e',`require(${JSON.stringify(require.resolve('../scripts/express-weekly.cjs'))}).prepare(${JSON.stringify(f.file)},${JSON.stringify(f.out)},{beforeCommit(){process.kill(process.pid,'SIGKILL')}})`]);assert.equal(child.signal,'SIGKILL');assert.ok(!fs.existsSync(path.join(f.out,'2026-W44-r1')));assert.equal(f.run().reason,'CONCURRENT_OR_INTERRUPTED');});
 console.log(JSON.stringify({pass:true,tests:count,fixtures:'synthetic',externalWrites:0,endToEndProven:false}));
}finally{fs.rmSync(root,{recursive:true,force:true});}
