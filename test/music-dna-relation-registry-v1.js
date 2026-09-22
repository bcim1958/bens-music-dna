window.MUSIC_DNA_RELATION_REGISTRY_V1={
  version:"2026-09-22.1",
  status:"prototype",
  principle:"store-once-use-many",
  relationTypes:{
    influence:{label:"invloed",family:"influence",playlistEligible:true},
    "professional-influence":{label:"professionele invloed",family:"influence",playlistEligible:true},
    "support-act":{label:"support/tour",family:"live",playlistEligible:false},
    cover:{label:"cover/opname",family:"recording",playlistEligible:false},
    "studio-musician":{label:"studiomuzikant",family:"personnel",playlistEligible:false},
    "producer-songwriter":{label:"producer/songwriter",family:"production",playlistEligible:false},
    place:{label:"tijd & plaats",family:"context",playlistEligible:false},
    inspiration:{label:"creatieve inspiratie",family:"influence",playlistEligible:true}
  },
  sources:{
    allmusicGhost:{kind:"editorial",publisher:"AllMusic",title:"Ghost — Biography",url:"https://www.allmusic.com/artist/ghost-mn0002616588/biography"},
    guitarWorldForge:{kind:"interview",publisher:"Guitar World",title:"Ghost's Tobias Forge on Impera",url:"https://www.guitarworld.com/features/ghost-tobias-forge-impera"},
    slugForge:{kind:"interview",publisher:"SLUG Magazine",title:"Kiss the Go-Ghost: An Interview with Tobias Forge",url:"https://www.slugmag.com/music/interviews/kiss-the-go-ghost-an-interview-with-tobias-forge/"},
    louderMetallica:{kind:"interview",publisher:"Metal Hammer / Louder",title:"The story behind Ghost's Enter Sandman cover",url:"https://www.loudersound.com/features/tobias-forge-metallica-enter-sandman"},
    nmeForge:{kind:"interview",publisher:"NME",title:"Tobias Forge interview",url:"https://www.nme.com/features/music-interviews/tobias-forge-interview-new-material-future-of-ghost-black-sabbath-metal-scene-3847292"},
    guitarWorldAkesson:{kind:"interview",publisher:"Guitar World",title:"Fredrik Åkesson on recording Ghost's Impera",url:"https://www.guitarworld.com/features/fredrick-akesson-ghost-opeth-impera"},
    loudwireRats:{kind:"interview",publisher:"Loudwire",title:"Tobias Forge talks Rats",url:"https://loudwire.com/ghost-tobias-forge-ghost-new-song-rats-new-album/"}
  },
  relations:[
    {
      id:"ghost-influence-abba",from:"ghost",to:"abba",type:"influence",direction:"ghost→abba",
      claim:"ABBA's songwriting is an explicit influence in Ghost's musical world.",
      provenance:["guitarWorldForge","allmusicGhost"],status:"confirmed",
      evidenceLevel:"primary+editorial",featuredExplorer:true,
      explorer:{relation:"songwriting",summary:"Forge heeft ABBA expliciet genoemd als belangrijke songwriting-invloed."},
      quickFact:"Tobias Forge noemt ABBA als belangrijke songwriting-invloed op Ghost."
    },
    {
      id:"ghost-influence-sabbath",from:"ghost",to:"sabbath",type:"influence",direction:"ghost→sabbath",
      claim:"Black Sabbath is an explicit musical influence on Tobias Forge/Ghost.",
      provenance:["nmeForge"],status:"confirmed",evidenceLevel:"primary",featuredExplorer:true,
      explorer:{relation:"invloed + jouw DNA",summary:"Een vroege zware-rockbron én aanwezig in Band DNA playlist Ghost."},
      quickFact:"Black Sabbath behoort tot de expliciet genoemde muzikale invloeden rond Tobias Forge en Ghost."
    },
    {
      id:"ghost-influence-ironmaiden",from:"ghost",to:"ironmaiden",type:"professional-influence",direction:"ghost→ironmaiden",
      claim:"Forge studied Iron Maiden from youth and later described learning from the band professionally.",
      provenance:["slugForge"],status:"confirmed",evidenceLevel:"primary",
      quickFact:"Forge bestudeerde Iron Maiden al jong en kon later tijdens gezamenlijke tournees van dichtbij zien hoe zo'n grote band functioneert."
    },
    {
      id:"ghost-support-ironmaiden",from:"ghost",to:"ironmaiden",type:"support-act",direction:"ghost→ironmaiden",
      claim:"Ghost supported Iron Maiden on the 2017 North American tour.",
      provenance:["slugForge"],status:"confirmed",evidenceLevel:"primary"
    },
    {
      id:"ghost-influence-metallica",from:"ghost",to:"metallica",type:"professional-influence",direction:"ghost→metallica",
      claim:"Forge has described Metallica as an early example and later professional learning reference.",
      provenance:["slugForge","louderMetallica"],status:"confirmed",evidenceLevel:"primary",
      quickFact:"Metallica liep voor Forge van jeugdvoorbeeld naar een band waarvan Ghost later tijdens tournees van dichtbij kon leren."
    },
    {
      id:"ghost-support-metallica",from:"ghost",to:"metallica",type:"support-act",direction:"ghost→metallica",
      claim:"Ghost supported Metallica on their 2019 European stadium tour.",
      provenance:["slugForge"],status:"confirmed",evidenceLevel:"primary"
    },
    {
      id:"ghost-cover-metallica",from:"ghost",to:"metallica",type:"cover",direction:"ghost→metallica",
      object:"enter-sandman",claim:"Ghost recorded Enter Sandman for The Metallica Blacklist.",
      provenance:["louderMetallica"],status:"confirmed",evidenceLevel:"primary"
    },
    {
      id:"ghost-studio-akesson",from:"ghost",to:"akesson",type:"studio-musician",direction:"ghost→akesson",
      via:"impera",claim:"Fredrik Åkesson played guitars on Impera.",
      provenance:["guitarWorldAkesson","guitarWorldForge"],status:"confirmed",evidenceLevel:"primary"
    },
    {
      id:"ghost-production-ahlund",from:"ghost",to:"ahlund",type:"producer-songwriter",direction:"ghost→ahlund",
      via:"impera",claim:"Klas Åhlund produced and co-wrote on Impera.",
      provenance:["guitarWorldForge","allmusicGhost"],status:"confirmed",evidenceLevel:"primary+editorial"
    },
    {
      id:"ghost-place-sweden",from:"ghost",to:"sweden",type:"place",direction:"ghost→sweden",
      claim:"Ghost formed in Linköping, Sweden.",provenance:["allmusicGhost"],status:"confirmed",
      evidenceLevel:"editorial",featuredExplorer:true,
      explorer:{relation:"tijd & plaats",summary:"De geografische context opent een andere Zweedse muziekwereld."}
    },
    {
      id:"rats-inspiration-moscow1989",from:"rats",to:"moscow-1989",type:"inspiration",direction:"rats→moscow-1989",
      claim:"Forge linked the desired opening impact of Rats to his memory of Ozzy Osbourne opening with I Don't Know at Moscow Music Peace Festival 1989.",
      provenance:["loudwireRats"],status:"confirmed",evidenceLevel:"primary"
    }
  ],
  relationsFor:function(id,options){
    options=options||{};
    return this.relations.filter(function(r){
      if(r.from!==id && !(options.includeIncoming&&r.to===id))return false;
      if(options.type&&r.type!==options.type)return false;
      if(options.family&&(!this.relationTypes[r.type]||this.relationTypes[r.type].family!==options.family))return false;
      if(options.featuredExplorer&&!r.featuredExplorer)return false;
      return true;
    },this);
  },
  sourcesFor:function(relation){
    var self=this;return (relation.provenance||[]).map(function(id){return Object.assign({id:id},self.sources[id]||{});});
  },
  influenceCandidates:function(id){
    var self=this;return this.relations.filter(function(r){
      var t=self.relationTypes[r.type];
      return r.from===id&&r.status==="confirmed"&&t&&t.family==="influence"&&t.playlistEligible;
    });
  },
  incomingInfluenceCounts:function(){
    var self=this,out={};
    this.relations.forEach(function(r){
      var t=self.relationTypes[r.type];
      if(r.status==="confirmed"&&t&&t.family==="influence")out[r.to]=(out[r.to]||0)+1;
    });
    return out;
  }
};
