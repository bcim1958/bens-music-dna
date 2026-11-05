'use strict';
// Local reading proof only. Reuses frozen drafts; creates no approvals or publication input.
const fs=require('node:fs'),path=require('node:path');
const {build:buildStory}=require('./build-express-reading-proof.cjs');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function build(root){
 let original=buildStory(root);
 const bios=JSON.parse(fs.readFileSync(path.join(root,'research-2026-11-02/week-bio-drafts.json')));
 const queue=JSON.parse(fs.readFileSync(path.join(root,'research-2026-11-01/week-bio-queue.json')));
 if(bios.length!==21||JSON.stringify(bios.map(x=>x.artistId))!==JSON.stringify(queue.map(x=>x.artistId)))throw Error('Frozen artist order mismatch');
 if(bios.some(x=>x.publishable!==false||x.editorialReview!==null||x.deviceReview!==null))throw Error('Unexpected draft approval state');
 const ids=Array.from({length:7},(_,i)=>'portraits-'+i);
 const pages=ids.map((id,i)=>'<section class="sheet portraits" id="'+id+'" hidden><header>De artiesten van deze week <span>W44 · werkportretten '+(i*3+1)+'–'+(i*3+3)+'</span></header><h2>Drie namen uit de weeklijst</h2><p class="small">Bewaarde W44-oordelen. Brongebonden concepten; open controlepunten zijn nog niet afgehandeld.</p>'+bios.slice(i*3,i*3+3).map(b=>'<article class="portrait" data-artist="'+esc(b.artistId)+'"><h3>'+esc(b.name)+'</h3><p class="eyebrow">'+esc(b.track)+' · '+esc(b.rating)+'</p><p class="bio-text">'+esc(b.text)+'</p><a class="bio-source" href="'+esc(b.source.url)+'" target="_blank" rel="noopener">Bron: '+esc(b.source.kind)+' ↗</a><details><summary>Open redactionele controle</summary><p>'+esc(b.open)+'</p></details></article>').join('')+'<footer><button data-jump="week">Naar Mijn Week</button><span>Portretten '+(i+1)+' / 7</span></footer></section>').join('\n');
 const order=['cover',...Array.from({length:6},(_,i)=>'story-'+i),'week',...ids,'playlist','sources'];
 original=original.replace(/const order=\[[^;]+;/,'const order='+JSON.stringify(order)+';');
 original=original.replace('</style>','.portrait{border-top:1px solid #9c8761;padding:18px 0}.portrait h3{margin:0 0 8px}.portrait .eyebrow{line-height:1.6}.portrait details{font-size:15px;margin-top:10px}.portrait summary{cursor:pointer}.bio-source{overflow-wrap:anywhere}.portraits>h2{margin-bottom:12px}</style>');
 original=original.replace('<div class="toolbar">',pages+'<div class="toolbar">');
 original=original.replace(/<title>[^<]+<\/title>/,'<title>DNA EXPRESS — samengestelde leesproef v3</title>').replace('werklabel Editie 1 · leesproef v2','werklabel Editie 1 · samengestelde leesproef v3');
 original=original.replace('De volledige tekst van manuscript v2, plus een persoonlijke weekbeschouwing. Het magazine als geheel blijft onvolledig.','Het Special 102-verhaal, Mijn Week en 21 werkportretten in één leesproef. Bronnen en open controles blijven zichtbaar. Het magazine als geheel blijft onvolledig.');
 // Put a chapter link before the week's existing footer; no source prose is rewritten.
 original=original.replace(/(<section class="sheet" id="week"[\s\S]*?)(<footer>)/,'$1<p><button data-jump="portraits-0">Lees de 21 weekportretten →</button></p>$2');
 return original;
}
module.exports={build};
if(require.main===module)fs.writeFileSync(process.argv[3],build(path.resolve(process.argv[2])));
