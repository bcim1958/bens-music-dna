(function(){
"use strict";
const registry={
  version:"2026-09-22.11",
  status:"prototype",
  principle:"one relation, many uses",
  entities:{
    ghost:{type:"artist",name:"Ghost"},
    voivod:{type:"artist",name:"Voïvod"},
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
    voir_voivod_2019:{
      provider:"Voir / Chanceux comme un Quêteux",kind:"primary-interview",
      title:"Ghost : Entretien avec Tobias Forge, lors du Heavy Montréal 2019",
      url:"https://voir.ca/chanceuxqueteux/2019/08/05/ghost-ent-tobias-forge-heavy-montreal-2019/"
    },
    guitarworld_forge_2022:{
      provider:"Guitar World",kind:"primary-interview",
      title:"Ghost's Tobias Forge: the 10 records that changed my life / Impera interview context",
      url:"https://www.guitarworld.com/features/ghost-tobias-forge-impera"
    },
    iheart_inside_studio_2022:{
      provider:"Inside the Studio / iHeart",kind:"primary-interview",
      title:"Tobias Forge of Ghost",
      url:"https://www.iheart.com/podcast/1119-inside-the-studio-29407846/episode/tobias-forge-of-ghost-94001697/"
    },
    guitarworld_blacklist_2021:{
      provider:"Guitar World",kind:"primary-interview",
      title:"Metallica Blacklist artists discuss covering metal classics",
      url:"https://www.guitarworld.com/features/metallica-blacklist-artists"
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
    rollingstone_uk_phantomime_2023:{
      provider:"Rolling Stone UK",kind:"primary-interview",
      title:"Ghost’s Tobias Forge on the Swedish group’s eclectic new Phantomime EP",
      url:"https://www.rollingstone.co.uk/music/ghosts-tobias-forge-on-the-swedish-groups-eclectic-new-phantomime-ep-29546/"
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
        {relations:["rel-ghost-abba-influence"],evidence:["guitarworld_forge_2022"],label:"De les zit in het liedje",text:"Forge gebruikt ABBA niet als voorbeeld van hoe Ghost moet klinken. De terugkerende bewondering gaat juist over compositie: sterke melodieën, duidelijke hooks en liedjes die eenvoudig lijken maar uiterst precies in elkaar zitten."},
        {relations:["rel-ghost-abba-studio"],evidence:["guitarworld_forge_2022","iheart_inside_studio_2022"],label:"Van invloed naar fysieke plek",text:"Bij de opnamen van Impera komt die relatie onverwacht dichtbij. Ghost werkt in Atlantis/Metronome in Stockholm, de historische studio die sterk met ABBA verbonden is."},
        {relations:["rel-ghost-abba-influence"],evidence:["guitarworld_forge_2022"],label:"Een klein detail zegt soms meer",text:"In een apart interview kiest Forge I Have A Dream wanneer hem naar een favoriete ABBA-song wordt gevraagd. Zo krijgt de brede uitspraak ABBA is een invloed een concreet luisterspoor."}
      ]
    },
    ghost_metallica:{
      base:"ghost",counterpart:"metallica",title:"Van maatstaf naar eigen versie",
      lead:"Drie soorten relatie lopen in elkaar over: voorbeeld, professionele nabijheid en uiteindelijk een concrete opname.",
      introLabel:"De rode draad",intro:"Metallica staat eerst op afstand als voorbeeld. Later deelt Ghost het podium en de professionele wereld met de band. Met Enter Sandman krijgt die lange relatie uiteindelijk een hoorbaar resultaat.",
      sectionLabel:"Hoofdstukken",items:[
        {relations:["rel-ghost-metallica-learning"],evidence:["slug_forge_2019","louder_metallica_2022"],label:"Een vroege maatstaf",text:"Forge beschrijft Metallica als een band die al vroeg liet zien hoe zware muziek tegelijk groot, direct en professioneel kon worden."},
        {relations:["rel-ghost-metallica-live"],evidence:["slug_forge_2019"],label:"Later dezelfde wereld in",text:"Ghost komt vervolgens daadwerkelijk in Metallica's professionele omgeving terecht. Samen optreden verandert een verre invloed in een concrete collegiale relatie."},
        {relations:["rel-ghost-metallica-polar","rel-ghost-metallica-cover"],evidence:["louder_metallica_2022","guitarworld_blacklist_2021"],label:"Enter Sandman maakt de cirkel zichtbaar",text:"De Polar Music Prize vormt een aparte route naar Ghosts cover van Enter Sandman en naar het vinden van een Ghost-eigen benadering."}
      ]
    },
    ghost_iron_maiden:{
      base:"ghost",counterpart:"iron_maiden",title:"Van atlas naar tourbus",
      lead:"Forge komt jarenlang op dezelfde relatie terug. De bronnen bouwen samen één steeds rijker verhaal.",
      introLabel:"De rode draad",intro:"Als jongen bestudeert Forge Iron Maiden om te begrijpen hoe een grote rockband leeft en toert. Later staat Ghost zelf met Maiden op tour, leert hij de mensen achter de band kennen en wordt die jeugdinvloed een echte professionele relatie.",
      sectionLabel:"Bronmomenten",items:[
        {relations:["rel-ghost-maiden-learning"],evidence:["slug_forge_2019"],label:"2017 · het jeugdmodel",text:"Forge vertelt dat Iron Maiden hem muzikaal vormde, maar vooral dat Live After Death hem liet zien hoe een echte tour eruitzag. Met een kaartboek tekende hij als kind de speelsteden uit."},
        {relations:["rel-ghost-maiden-learning","rel-ghost-maiden-live"],evidence:["slug_forge_2019"],label:"2018 · van atlas naar werkelijkheid",text:"Na daadwerkelijk met Maiden te hebben getourd, vertelt Forge hetzelfde jeugdverhaal opnieuw en voegt hij persoonlijke contacten en gedeelde tourcrew toe."},
        {relations:["rel-ghost-maiden-learning"],evidence:["slug_forge_2019"],label:"2019–2022 · een blijvende leerschool",text:"In latere gesprekken keert dezelfde kern terug: Maiden is niet alleen muziek, maar ook podiumproductie, werkethiek en een professionele school voor Ghost."},
        {relations:["rel-ghost-maiden-phantom-cover"],evidence:["rollingstone_uk_phantomime_2023"],label:"2023 · de relatie wordt muziek",text:"Ghost neemt Phantom of the Opera op; de eerdere tours en vriendschap geven die keuze extra betekenis."}
      ]
    }
  },
  discoveries:[
    {
      id:"disc-ghost-voivod-identity",
      base:"ghost",counterpart:"voivod",kind:"new-fact",
      title:"Niet de voor de hand liggende vergelijking",
      summary:"Forge zegt dat Voïvod een veel diepere invloed op Ghost is dan de vaak genoemde Mercyful Fate/Blue Öyster Cult-vergelijkingen suggereren.",
      relations:["rel-ghost-voivod-influence"],evidence:["voir_voivod_2019"],status:"unread"
    },
    {
      id:"disc-ghost-voivod-away-jacket",
      base:"ghost",counterpart:"voivod",kind:"enriching-detail",
      title:"De versleten spijkerjas",
      summary:"Forge vertelt dat hij Away als tiener ontmoette, diens handtekening op zijn spijkerjas kreeg en die jas nog steeds bezit.",
      relations:["rel-ghost-voivod-influence"],evidence:["voir_voivod_2019"],status:"unread"
    },
    {
      id:"disc-ghost-voivod-convention",
      base:"ghost",counterpart:"voivod",kind:"story-angle",
      title:"Afwijken als artistiek DNA",
      summary:"Forge bewondert vooral dat Voïvod hoorbare invloeden niet kopieerde maar bewust iets eigens en per album anders durfde te maken.",
      relations:["rel-ghost-voivod-influence"],evidence:["voir_voivod_2019"],status:"unread"
    },
    {
      id:"disc-ghost-boc-nuance",
      base:"ghost",counterpart:"blue_oyster_cult",kind:"nuance",
      title:"Een vergelijking is nog geen hoofd-invloed",
      summary:"Forge nuanceert de bekende Blue Öyster Cult-vergelijking: hij houdt van de band, maar noemt hun werk minder bepalend voor Ghost dan vaak wordt aangenomen.",
      relations:["rel-ghost-boc-foundation"],evidence:["voir_voivod_2019"],status:"unread"
    }
  ],
  relations:[
    {
      id:"rel-ghost-voivod-influence",from:"ghost",to:"voivod",
      family:"influence",type:"formative-artistic-influence",direction:"out",
      claim:"Forge beschrijft Voïvod als een veel diepere invloed op Ghost dan oppervlakkige vergelijkingen met Mercyful Fate of Blue Öyster Cult doen vermoeden, vooral door hun eigenzinnigheid en bewuste afwijking van conventies.",
      evidence:["voir_voivod_2019"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-abba-influence",from:"ghost",to:"abba",
      family:"influence",type:"stated-songwriting-influence",direction:"out",
      claim:"Tobias Forge noemt ABBA als belangrijke invloed op Ghosts songwriting.",
      evidence:["guitarworld_forge_2022"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik","express","playlist"]
    },
    {
      id:"rel-ghost-abba-studio",from:"ghost",to:"abba",
      family:"place",type:"shared-studio-lineage",direction:"out",
      claim:"Forge verbindt Ghosts opnamen in Atlantis/Metronome en Benny Anderssons studio expliciet met zijn ABBA-fascinatie; bij Impera waren historische instrumenten en apparatuur uit de ABBA-studio nog aanwezig.",
      evidence:["guitarworld_forge_2022","iheart_inside_studio_2022"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik"]
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
      id:"rel-ghost-metallica-polar",from:"ghost",to:"metallica",
      family:"event",type:"tribute-performance",direction:"out",
      claim:"Ghosts Enter Sandman-route begon bij Metallica's Polar Music Prize in 2018, waar Forge werd gevraagd juist die song als eerbetoon uit te voeren.",
      evidence:["louder_metallica_2022","guitarworld_blacklist_2021"],confidence:"confirmed",
      uses:["explorer","wat-hoor-ik"]
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
function traceStory(baseId,counterpartId){
  const story=storyFor(baseId,counterpartId);
  if(!story)return null;
  const relationById=Object.fromEntries(registry.relations.map(r=>[r.id,r]));
  return {...story,items:(story.items||[]).map(item=>({
    ...item,
    relationRecords:(item.relations||[]).map(id=>relationById[id]).filter(Boolean),
    sourceRecords:(item.evidence||[]).map(id=>registry.sources[id]).filter(Boolean)
  }))};
}
function storyCoverage(baseId,counterpartId){
  const traced=traceStory(baseId,counterpartId);
  if(!traced)return null;
  const bundle=relationshipBundles(baseId,{use:"explorer",confidence:"confirmed"}).find(b=>b.entityId===counterpartId);
  const used=new Set((traced.items||[]).flatMap(i=>i.relations||[]));
  const available=(bundle?bundle.relations:[]).map(r=>r.id);
  return {used:[...used],available,unused:available.filter(id=>!used.has(id)),complete:available.every(id=>used.has(id))};
}
function integrityReport(baseId){
  const relationById=Object.fromEntries(registry.relations.map(r=>[r.id,r]));
  const sourceIds=new Set(Object.keys(registry.sources));
  const stories=Object.values(registry.stories||{}).filter(s=>s.base===baseId);
  const findings=[];
  const usedRelations=new Set(),usedSources=new Set();

  registry.relations.forEach(r=>{
    (r.evidence||[]).forEach(id=>{
      if(!sourceIds.has(id))findings.push({level:"error",code:"relation-missing-source",relationId:r.id,sourceId:id});
    });
    if(!(r.evidence||[]).length)findings.push({level:"error",code:"relation-no-evidence",relationId:r.id});
  });

  stories.forEach(story=>{
    (story.items||[]).forEach((item,index)=>{
      if(!(item.relations||[]).length)findings.push({level:"error",code:"story-item-no-relation",counterpart:story.counterpart,index,label:item.label});
      if(!(item.evidence||[]).length)findings.push({level:"warning",code:"story-item-no-source",counterpart:story.counterpart,index,label:item.label});
      (item.relations||[]).forEach(id=>{
        usedRelations.add(id);
        if(!relationById[id])findings.push({level:"error",code:"story-missing-relation",counterpart:story.counterpart,index,relationId:id});
      });
      (item.evidence||[]).forEach(id=>{
        usedSources.add(id);
        if(!sourceIds.has(id))findings.push({level:"error",code:"story-missing-source",counterpart:story.counterpart,index,sourceId:id});
        const linked=(item.relations||[]).some(rid=>((relationById[rid]||{}).evidence||[]).includes(id));
        if(!linked)findings.push({level:"warning",code:"story-source-not-on-linked-relation",counterpart:story.counterpart,index,sourceId:id});
      });
    });
  });

  relationshipBundles(baseId,{use:"explorer",confidence:"confirmed"}).forEach(bundle=>{
    const story=storyFor(baseId,bundle.entityId);
    if(!story)return;
    const used=new Set((story.items||[]).flatMap(i=>i.relations||[]));
    bundle.relations.forEach(r=>{
      if(!used.has(r.id))findings.push({level:"info",code:"relation-not-yet-told",counterpart:bundle.entityId,relationId:r.id});
    });
  });

  const relevantSources=new Set();
  registry.relations.filter(r=>r.from===baseId||r.to===baseId).forEach(r=>(r.evidence||[]).forEach(id=>relevantSources.add(id)));
  [...relevantSources].forEach(id=>{
    if(!usedSources.has(id))findings.push({level:"info",code:"source-not-used-in-story",sourceId:id});
  });

  return {
    baseId,stories:stories.length,
    errors:findings.filter(x=>x.level==="error").length,
    warnings:findings.filter(x=>x.level==="warning").length,
    info:findings.filter(x=>x.level==="info").length,
    pass:!findings.some(x=>x.level==="error"),
    findings
  };
}
function integritySelfTest(){
  const originalStory=registry.stories.__integrity_probe__;
  const originalRelation=registry.relations.find(r=>r.id==="__integrity_probe_relation__");
  registry.stories.__integrity_probe__={
    base:"ghost",counterpart:"__probe_artist__",title:"Audit probe",lead:"",introLabel:"",intro:"",
    sectionLabel:"",items:[{label:"Deliberate broken item",text:"probe",relations:["__missing_relation__"],evidence:["__missing_source__"]}]
  };
  const report=integrityReport("ghost");
  if(originalStory)registry.stories.__integrity_probe__=originalStory; else delete registry.stories.__integrity_probe__;
  if(originalRelation&&!registry.relations.some(r=>r.id===originalRelation.id))registry.relations.push(originalRelation);
  const codes=new Set(report.findings.filter(x=>x.counterpart==="__probe_artist__").map(x=>x.code));
  const expected=["story-missing-relation","story-missing-source","story-source-not-on-linked-relation"];
  return {pass:expected.every(x=>codes.has(x)),expected,detected:[...codes]};
}
function discoveriesFor(baseId,opts){
  opts=opts||{};
  return (registry.discoveries||[]).filter(d=>{
    if(d.base!==baseId)return false;
    if(opts.counterpart&&d.counterpart!==opts.counterpart)return false;
    if(opts.kind&&d.kind!==opts.kind)return false;
    if(opts.status&&d.status!==opts.status)return false;
    return true;
  });
}
function discoveryStock(baseId){
  const items=discoveriesFor(baseId,{status:"unread"});
  const byKind={};
  items.forEach(d=>byKind[d.kind]=(byKind[d.kind]||0)+1);
  return {total:items.length,byKind,items};
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
window.MUSIC_DNA_RELATION_REGISTRY_V1={...registry,api:{entity,relationsFor,evidenceFor,counterpartFor,relationshipBundles,storyFor,storyBundle,traceStory,storyCoverage,integrityReport,integritySelfTest,discoveriesFor,discoveryStock,aggregateInfluence,playlistCandidates,quickFacts,quickFactBundles}};
})();