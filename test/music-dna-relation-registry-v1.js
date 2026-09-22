(function(){
"use strict";
const registry={
  version:"2026-09-22.4",
  status:"prototype",
  principle:"one relation, many uses",
  entities:{
    ghost:{type:"artist",name:"Ghost"},
    abba:{type:"artist",name:"ABBA"},
    black_sabbath:{type:"artist",name:"Black Sabbath"},
    blue_oyster_cult:{type:"artist",name:"Blue Öyster Cult"},
    mercyful_fate:{type:"artist",name:"Mercyful Fate"},
    misfits:{type:"artist",name:"Misfits"},
    rammstein:{type:"artist",name:"Rammstein"},
    deep_purple:{type:"artist",name:"Deep Purple"},
    led_zeppelin:{type:"artist",name:"Led Zeppelin"},
    judas_priest:{type:"artist",name:"Judas Priest"},
    iron_maiden:{type:"artist",name:"Iron Maiden"},
    metallica:{type:"artist",name:"Metallica"},
    tobias_forge:{type:"person",name:"Tobias Forge"},
    fredrik_akesson:{type:"person",name:"Fredrik Åkesson"},
    klas_ahlund:{type:"person",name:"Klas Åhlund"},
    impera:{type:"album",name:"Impera"},
    enter_sandman:{type:"track",name:"Enter Sandman"},
    rats:{type:"track",name:"Rats"},
    moscow_1989:{type:"event",name:"Moscow Music Peace Festival 1989"},
    sweden:{type:"place",name:"Zweden"}
  },
  sources:{
    guitarworld_forge_2022:{
      provider:"Guitar World",kind:"primary-interview",
      title:"Ghost's Tobias Forge: the 10 records that changed my life / Impera interview context",
      url:"https://www.guitarworld.com/features/ghost-tobias-forge-impera"
    },
    slug_forge_2019:{
      provider:"SLUG Magazine",kind:"primary-interview",
      title:"Kiss the Go-Ghost: An Interview with Tobias Forge",
      url:"https://www.slugmag.com/music/interviews/kiss-the-go-ghost-an-interview-with-tobias-forge/"
    },
    louder_metallica_2022:{
      provider:"Metal Hammer / Louder",kind:"interview",
      title:"The story behind Ghost's Enter Sandman cover",
      url:"https://www.loudersound.com/features/tobias-forge-metallica-enter-sandman"
    },
    loudwire_rats_2018:{
      provider:"Loudwire",kind:"primary-interview",
      title:"Tobias Forge Talks Ghost's New Song Rats + New Album",
      url:"https://loudwire.com/ghost-tobias-forge-ghost-new-song-rats-new-album/"
    },
    guitarworld_akesson:{
      provider:"Guitar World",kind:"interview",
      title:"Fredrik Åkesson on recording guitars for Ghost's Impera",
      url:"https://www.guitarworld.com/features/fredrick-akesson-ghost-opeth-impera"
    },
    louder_opus_2021:{
      provider:"Metal Hammer / Louder",kind:"primary-interview",
      title:"Ghost’s Opus Eponymous: the story behind the album",
      url:"https://www.loudersound.com/features/ghost-opus-eponymous-story-behind-album"
    },
    guitarworld_prequelle_2018:{
      provider:"Guitar World",kind:"primary-interview",
      title:"Scary Good: Ghost’s Tobias Forge Breaks Down Prequelle",
      url:"https://www.guitarworld.com/artists/scary-good-ghosts-tobias-forge-breaks-down-the-brilliant-new-prequelle"
    },
    louder_impera_2022:{
      provider:"Metal Hammer / Louder",kind:"primary-interview",
      title:"Ghost’s Impera: how Tobias Forge made the best album of 2022",
      url:"https://www.loudersound.com/features/ghost-impera-interview-tobias-forge-2022"
    },
    musicdna_catalog:{
      provider:"Music DNA",kind:"catalog",
      title:"Music DNA entity/catalog context",url:null
    }
  },
  stories:{
    ghost_abba:{
      base:"ghost",counterpart:"abba",title:"Niet de klank, wel het liedje",
      lead:"Verschillende gesprekken vullen drie kanten van dezelfde relatie in: schrijven, plek en een concreet liedje.",
      introLabel:"De kern",intro:"ABBA helpt verklaren waarom Ghost ondanks zware gitaren zo nadrukkelijk op melodie en memorabele songs leunt. Forge komt daar in verschillende gesprekken op terug zonder te beweren dat Ghost als ABBA moet klinken.",
      sectionLabel:"Vondsten",items:[
        {label:"De les zit in het liedje",text:"Forge gebruikt ABBA niet als voorbeeld van hoe Ghost moet klinken. De terugkerende bewondering gaat juist over compositie: sterke melodieën, duidelijke hooks en liedjes die eenvoudig lijken maar uiterst precies in elkaar zitten."},
        {label:"Van invloed naar fysieke plek",text:"Bij de opnamen van Impera komt die relatie onverwacht dichtbij. Ghost werkt in Atlantis/Metronome in Stockholm, de historische studio die sterk met ABBA verbonden is."},
        {label:"Een klein detail zegt soms meer",text:"In een apart interview kiest Forge I Have A Dream wanneer hem naar een favoriete ABBA-song wordt gevraagd. Zo krijgt de brede uitspraak ABBA is een invloed een concreet luisterspoor."}
      ]
    },
    ghost_metallica:{
      base:"ghost",counterpart:"metallica",title:"Van maatstaf naar eigen versie",
      lead:"Drie soorten relatie lopen in elkaar over: voorbeeld, professionele nabijheid en uiteindelijk een concrete opname.",
      introLabel:"De rode draad",intro:"Metallica staat eerst op afstand als voorbeeld. Later deelt Ghost het podium en de professionele wereld met de band. Met Enter Sandman krijgt die lange relatie uiteindelijk een hoorbaar resultaat.",
      sectionLabel:"Hoofdstukken",items:[
        {label:"Een vroege maatstaf",text:"Forge beschrijft Metallica als een band die al vroeg liet zien hoe zware muziek tegelijk groot, direct en professioneel kon worden."},
        {label:"Later dezelfde wereld in",text:"Ghost komt vervolgens daadwerkelijk in Metallica's professionele omgeving terecht. Samen optreden verandert een verre invloed in een concrete collegiale relatie."},
        {label:"Enter Sandman maakt de cirkel zichtbaar",text:"De Polar Music Prize vormt een aparte route naar Ghosts cover van Enter Sandman en naar het vinden van een Ghost-eigen benadering."}
      ]
    },
    ghost_iron_maiden:{
      base:"ghost",counterpart:"iron_maiden",title:"Van atlas naar tourbus",
      lead:"Forge komt jarenlang op dezelfde relatie terug. De bronnen bouwen samen één steeds rijker verhaal.",
      introLabel:"De rode draad",intro:"Als jongen bestudeert Forge Iron Maiden om te begrijpen hoe een grote rockband leeft en toert. Later staat Ghost zelf met Maiden op tour, leert hij de mensen achter de band kennen en wordt die jeugdinvloed een echte professionele relatie.",
      sectionLabel:"Bronmomenten",items:[
        {label:"2017 · het jeugdmodel",text:"Forge vertelt dat Iron Maiden hem muzikaal vormde, maar vooral dat Live After Death hem liet zien hoe een echte tour eruitzag. Met een kaartboek tekende hij als kind de speelsteden uit."},
        {label:"2018 · van atlas naar werkelijkheid",text:"Na daadwerkelijk met Maiden te hebben getourd, vertelt Forge hetzelfde jeugdverhaal opnieuw en voegt hij persoonlijke contacten en gedeelde tourcrew toe."},
        {label:"2019–2022 · een blijvende leerschool",text:"In latere gesprekken keert dezelfde kern terug: Maiden is niet alleen muziek, maar ook podiumproductie, werkethiek en een professionele school voor Ghost."},
        {label:"2023 · de relatie wordt muziek",text:"Ghost neemt Phantom of the Opera op; de eerdere tours en vriendschap geven die keuze extra betekenis."}
      ]
    }
  },
  relations:[
    {
      id:"rel-ghost-abba-influence",from:"ghost",to:"abba",
      family:"influence",type:"stated-songwriting-influence",direction:"out",
      claim:"Tobias Forge noemt ABBA als belangrijke invloed op Ghosts songwriting.",
      evidence:["guitarworld_forge_2022"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-maiden-learning",from:"ghost",to:"iron_maiden",
      family:"influence",type:"formative-professional-influence",direction:"out",
      claim:"Forge beschrijft Iron Maiden als een jeugdvoorbeeld en latere professionele leerschool.",
      evidence:["slug_forge_2019"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-maiden-live",from:"ghost",to:"iron_maiden",
      family:"live",type:"support-act",direction:"out",
      claim:"Ghost trok in 2017 door Noord-Amerika als support van Iron Maiden.",
      evidence:["slug_forge_2019"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik"]
    },
    {
      id:"rel-ghost-metallica-learning",from:"ghost",to:"metallica",
      family:"influence",type:"formative-professional-influence",direction:"out",
      claim:"Forge beschrijft Metallica als voorbeeld en professionele leerschool.",
      evidence:["slug_forge_2019","louder_metallica_2022"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-metallica-live",from:"ghost",to:"metallica",
      family:"live",type:"support-act",direction:"out",
      claim:"Ghost ging in 2019 mee als support op Metallica's Europese stadiontour.",
      evidence:["slug_forge_2019"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik"]
    },
    {
      id:"rel-ghost-metallica-cover",from:"ghost",to:"enter_sandman",counterpart:"metallica",
      family:"recording",type:"covered-song",direction:"out",
      claim:"Ghost nam Enter Sandman op voor The Metallica Blacklist.",
      evidence:["louder_metallica_2022"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","playlist"]
    },
    {
      id:"rel-ghost-boc-foundation",from:"ghost",to:"blue_oyster_cult",
      family:"influence",type:"foundational-musical-influence",direction:"out",
      claim:"Forge noemt het oude Blue Öyster Cult-materiaal als een van de platen waaruit de eerste Ghost-songs voortkwamen.",
      evidence:["louder_opus_2021"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-mercyful-fate-foundation",from:"ghost",to:"mercyful_fate",
      family:"influence",type:"foundational-musical-influence",direction:"out",
      claim:"Forge noemt Mercyful Fate als een van de vroege muzikale bouwstenen van Ghost.",
      evidence:["louder_opus_2021"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-misfits-foundation",from:"ghost",to:"misfits",
      family:"influence",type:"foundational-musical-influence",direction:"out",
      claim:"Forge noemt Misfits als vroege bouwsteen: klassieke rock-, metal- en punkvormen met grote popmelodieën en donkere beeldtaal.",
      evidence:["louder_opus_2021"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-black-sabbath-guitar",from:"ghost",to:"black_sabbath",
      family:"influence",type:"guitar-influence",direction:"out",
      claim:"Forge noemt Black Sabbath onder zijn klassieke heavy-metalinvloeden als gitarist.",
      evidence:["guitarworld_prequelle_2018"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-deep-purple-guitar",from:"ghost",to:"deep_purple",
      family:"influence",type:"guitar-influence",direction:"out",
      claim:"Forge noemt Deep Purple onder zijn klassieke rock- en heavy-metalinvloeden als gitarist.",
      evidence:["guitarworld_prequelle_2018"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-led-zeppelin-guitar",from:"ghost",to:"led_zeppelin",
      family:"influence",type:"guitar-influence",direction:"out",
      claim:"Forge noemt Led Zeppelin onder zijn klassieke rock- en heavy-metalinvloeden als gitarist.",
      evidence:["guitarworld_prequelle_2018"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-judas-priest-guitar",from:"ghost",to:"judas_priest",
      family:"influence",type:"guitar-influence",direction:"out",
      claim:"Forge noemt Judas Priest onder zijn klassieke heavy-metalinvloeden als gitarist.",
      evidence:["guitarworld_prequelle_2018"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-rammstein-guidepost",from:"ghost",to:"rammstein",
      family:"influence",type:"career-show-guidepost",direction:"out",
      claim:"Forge noemt Rammstein een hedendaagse leidraad voor de schaal, thematiek en stadionambitie van Ghost, niet als klankvoorbeeld.",
      evidence:["louder_impera_2022"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express"]
    },
    {
      id:"rel-akesson-impera",from:"fredrik_akesson",to:"impera",
      family:"personnel",type:"studio-guitar",direction:"out",
      claim:"Fredrik Åkesson speelde de gitaren in voor Impera.",
      evidence:["guitarworld_akesson"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik"]
    },
    {
      id:"rel-ghost-sweden",from:"ghost",to:"sweden",
      family:"place",type:"origin",direction:"out",
      claim:"Ghost is een Zweedse band.",
      evidence:["musicdna_catalog"],confidence:"confirmed",
      uses:["explorer"]
    },
    {
      id:"rel-rats-moscow",from:"rats",to:"moscow_1989",
      family:"story",type:"creative-function-inspiration",direction:"out",
      claim:"Forge koppelde het gewenste opener-effect van Rats aan zijn jeugdherinnering aan Ozzy Osbourne in Moskou in 1989.",
      evidence:["loudwire_rats_2018"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik"]
    }
  ]
};

function entity(id){return registry.entities[id]||null}
function relationsFor(id,opts){
  opts=opts||{};
  return registry.relations.filter(r=>{
    const touches=r.from===id||r.to===id;
    if(!touches)return false;
    if(opts.family&&r.family!==opts.family)return false;
    if(opts.type&&r.type!==opts.type)return false;
    if(opts.use&&!(r.uses||[]).includes(opts.use))return false;
    if(opts.confidence&&r.confidence!==opts.confidence)return false;
    return true;
  });
}
function evidenceFor(rel){
  return (rel.evidence||[]).map(id=>({id,...registry.sources[id]})).filter(Boolean);
}
function counterpartFor(baseId,rel){
  if(rel.counterpart)return rel.counterpart;
  return rel.from===baseId?rel.to:rel.from;
}
function relationshipBundles(id,opts){
  opts=opts||{};
  const grouped={};
  relationsFor(id,opts).forEach(rel=>{
    const counterpartId=counterpartFor(id,rel);
    const key=counterpartId||rel.id;
    if(!grouped[key])grouped[key]={
      entityId:counterpartId,
      entity:entity(counterpartId),
      relations:[],
      families:[],
      claims:[],
      evidence:[]
    };
    const bundle=grouped[key];
    bundle.relations.push(rel);
    if(!bundle.families.includes(rel.family))bundle.families.push(rel.family);
    bundle.claims.push(rel.claim);
    evidenceFor(rel).forEach(src=>{
      if(!bundle.evidence.some(x=>x.id===src.id))bundle.evidence.push(src);
    });
  });
  return Object.values(grouped).sort((a,b)=>{
    const an=(a.entity||{}).name||a.entityId||"";
    const bn=(b.entity||{}).name||b.entityId||"";
    return an.localeCompare(bn);
  });
}
function storyFor(baseId,counterpartId){
  return Object.values(registry.stories||{}).find(s=>s.base===baseId&&s.counterpart===counterpartId)||null;
}
function storyBundle(baseId,counterpartId,opts){
  const bundle=relationshipBundles(baseId,opts||{use:"explorer",confidence:"confirmed"}).find(b=>b.entityId===counterpartId)||null;
  const story=storyFor(baseId,counterpartId);
  return {bundle,story,mode:story?"story":"facts"};
}
function aggregateInfluence(){
  const counts={},seen=new Set();
  registry.relations.filter(r=>r.family==="influence"&&r.confidence==="confirmed").forEach(r=>{
    const key=r.from+"→"+r.to;
    if(seen.has(key))return;
    seen.add(key);
    counts[r.to]=(counts[r.to]||0)+1;
  });
  return Object.entries(counts).map(([id,count])=>({id,name:(entity(id)||{}).name||id,count}))
    .sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name));
}
function playlistCandidates(id){
  const seen=new Set();
  return relationsFor(id,{family:"influence",use:"playlist",confidence:"confirmed"})
    .map(r=>({relationId:r.id,entityId:counterpartFor(id,r),name:(entity(counterpartFor(id,r))||{}).name||"",why:r.claim}))
    .filter(x=>{if(seen.has(x.entityId))return false;seen.add(x.entityId);return true;});
}
function quickFacts(id){
  return relationsFor(id,{use:"wat-hoor-ik",confidence:"confirmed"}).map(r=>({
    relationId:r.id,family:r.family,text:r.claim,sources:evidenceFor(r)
  }));
}
function quickFactBundles(id){
  return relationshipBundles(id,{use:"wat-hoor-ik",confidence:"confirmed"}).map(b=>({
    entityId:b.entityId,name:(b.entity||{}).name||b.entityId,
    families:b.families,facts:b.claims,sources:b.evidence
  }));
}
window.MUSIC_DNA_RELATION_REGISTRY_V1={...registry,api:{entity,relationsFor,evidenceFor,counterpartFor,relationshipBundles,storyFor,storyBundle,aggregateInfluence,playlistCandidates,quickFacts,quickFactBundles}};
})();