// Read-only release gate. Optional exported localStorage JSON supplies actual history.
const fs=require('node:fs'),vm=require('node:vm');const input=process.argv[2];const snapshot=input?JSON.parse(fs.readFileSync(input)):{};const items=snapshot.storage||snapshot.items||snapshot;
const store=new Map(Object.entries(items).map(([key,value])=>[key,typeof value==='string'?value:JSON.stringify(value)]));const storage={get length(){return store.size},key:i=>[...store.keys()][i],getItem:k=>store.get(k)||null};
const c={window:null,localStorage:storage,console};c.window=c;c.MUSIC_DNA_LEARNING={read:()=>JSON.parse(storage.getItem('bmd-learning-v1')||'{"signals":{}}')};vm.createContext(c);
for(const name of ['music-dna-discovery-reference-v1.js','music-dna-external-candidates-v1.js','music-dna-discovery-v1.js','music-dna-weeks-v1.js'])vm.runInContext(fs.readFileSync('test/'+name,'utf8'),c);
const plan=c.MUSIC_DNA_DISCOVERY.weekReadiness(c.MUSIC_DNA_EXTERNAL_CANDIDATES.tracks);
const weeks=vm.runInContext('MUSIC_DNA_WEEKS',c);
console.log(JSON.stringify({history:input?'provided snapshot':'no device snapshot: capacity upper bound only',storageKeys:store.size,signals:Object.keys(c.MUSIC_DNA_LEARNING.read().signals||{}).length,activeOnSeptember28:weeks.resolve(new Date(2026,8,28))?.key||null,activeOnOctober4:weeks.resolve(new Date(2026,9,4))?.key||null,candidatePlan:plan},null,2));
if(!input||!plan.ready)process.exitCode=2;
