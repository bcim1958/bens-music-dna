// Offline inspection of existing historical data declarations; no browser/storage/API.
const fs = require('node:fs'), vm = require('node:vm'), path = require('node:path');
const root = path.join(__dirname, '..');
const files = ['test/music-dna-data-v1.3.js','test/music-dna-delivery-registry-v1.js', ...[35,36,37,38].map(w=>`test/music-dna-candidates-w${w}-v1.js`)];
const context = vm.createContext({window:{},console:{log(){},warn(){}}});
for(const file of files) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file,timeout:1000});
let tracks=vm.runInContext('({...MUSIC_DNA_DB.tracks})',context);
for(const w of [35,36,37,38]) Object.assign(tracks,context.window[`MUSIC_DNA_W${w}_CANDIDATES`]?.tracks||{});
process.stdout.write(JSON.stringify({files,tracks}));
