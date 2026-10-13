'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'../test'),file=path.join(root,'zaterdagcadeau.html');
let html=fs.readFileSync(file,'utf8');
const scan=html.replace(/var GIFT_RELEASE_PINS=\{[^;]+;/,'');
const names=new Set([...scan.matchAll(/['"]([^'"?]+\.js)(?:\?[^'"]*)?['"]/g)].map(m=>m[1]));
for(const m of fs.readFileSync(path.join(root,'music-dna-weeks-v1.js'),'utf8').matchAll(/['"]([^'"?]+\.js)(?:\?[^'"]*)?['"]/g))names.add(m[1]);
const pins=Object.fromEntries([...names].sort().map(name=>[name,'sha384-'+crypto.createHash('sha384').update(fs.readFileSync(path.join(root,name))).digest('base64')]));
html=html.replace(/<script src="([^"]+)"(?: integrity="[^"]+" crossorigin="anonymous")?><\/script>/g,(m,src)=>`<script src="${src}" integrity="${pins[src.split('?')[0]]}" crossorigin="anonymous"></script>`);
const literal='var GIFT_RELEASE_PINS='+JSON.stringify(pins)+';';
if(html.includes('var GIFT_RELEASE_PINS='))html=html.replace(/var GIFT_RELEASE_PINS=\{[^;]+;/,literal);
else html=html.replace('function loadScript(src){',literal+'\nfunction loadScript(src){');
html=html.replace("const s=document.createElement('script');s.src=src", "const s=document.createElement('script'),pin=GIFT_RELEASE_PINS[src.split('?')[0]];if(!pin){reject(Error('Onbekende cadeaucomponent: '+src));return;}s.integrity=pin;s.crossOrigin='anonymous';s.src=src");
if(process.argv.includes('--check')){if(html!==fs.readFileSync(file,'utf8'))throw Error('Gift release pins are stale');console.log('PASS gift release integrity pins');}
else fs.writeFileSync(file,html);
