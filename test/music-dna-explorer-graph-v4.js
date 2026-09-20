window.MUSIC_DNA_EXPLORER_GRAPH_V1={
version:"2026-09-20.4",start:"ghost",
nodes:{
ghost:{type:"artist",name:"Ghost",eyebrow:"Artiest · Zweden",orientation:"Theatrale rock en metal met een opvallend melodisch hart.",dna:"Rats · Ghost DNA",primary:["ghost-world","ghost-similar"],surprise:true},
"ghost-world":{type:"hub",name:"Verken Ghost",orientation:"Muziek, mensen en verhalen zijn gelijkwaardige uitgangen.",doors:["forge","rats","sweden","sabbath"]},
"ghost-similar":{type:"hub",name:"Bands/artiesten zoals Ghost",orientation:"Niet één score, maar verschillende redenen waarom een buur interessant kan zijn.",doors:["sabbath","abba","sweden"]},
forge:{type:"person",name:"Tobias Forge",eyebrow:"Mens · maker",orientation:"Een maker opent deuren naar invloeden, songs en verhalen.",doors:["forge-interview","abba","sabbath"],surprise:true},
rats:{type:"track",name:"Rats",eyebrow:"Track · jouw DNA",orientation:"Prequelle · 2018. Een track kan naar maker, album, jaar, stijl of plaats leiden.",doors:["forge","sweden"]},
"forge-interview":{type:"story",name:"Forge over Impera",eyebrow:"Explorer las het voor je · interview",publisher:"Guitar World",date:"10 mei 2022",readtime:"± 1 minuut",title:"Van ABBA tot Slayer: zo denkt Forge als liedjesschrijver",summary:["Forge beschrijft zichzelf hier vooral als songwriter en conceptmaker. Een gitaarsolo is voor hem geen losse krachttoer, maar een klein verhaal binnen het nummer.","Voor Impera speelde Opeth-gitarist Fredrik Åkesson de gitaren in. Forge vertelt dat melodie en functie vóór technisch vertoon gingen.","ABBA is volgens Forge een van zijn favoriete bands en hun songwriting beïnvloedt Ghost. Bij Spillways komt dat spoor extra dichtbij. Bij Twenties dacht hij aan een botsing tussen Slayer en Missy Elliott; Griftwood plaatst hij juist dichter bij Van Halen."],takeaway:"Ghost blijkt een open muziekwereld: melodie, compositie en contrast verbinden pop, hardrock en metal.",doors:["abba","spillways","akesson","slayer","vanhalen"],url:"https://www.guitarworld.com/features/ghost-tobias-forge-impera"},
abba:{type:"artist",name:"ABBA",eyebrow:"Onverwachte invloed",orientation:"Muzikaal onverwacht verwant — via Forge's liefde voor ABBA's songwriting.",doors:["sweden","forge-interview"],surprise:true},
spillways:{type:"track",name:"Spillways",eyebrow:"Track · interviewspoor",orientation:"Hier wordt de ABBA-afslag concreet: Forge verbindt ABBA's songwriting expliciet met Ghost en mogelijk juist dit nummer.",doors:["abba","forge-interview"]},
akesson:{type:"person",name:"Fredrik Åkesson",eyebrow:"Mens · studiobrug",orientation:"De Opeth-gitarist speelde gitaar op Impera; zijn virtuositeit stond in dienst van Forge's arrangementen.",doors:["opeth","forge-interview"]},
opeth:{type:"artist",name:"Opeth",eyebrow:"Nieuw artiesteneiland",orientation:"Hier begint een nieuwe wereld. In deze systeemproef is hij bewust nog dun.",doors:["akesson"],surprise:true},
slayer:{type:"concept",name:"Slayer + Missy Elliott?",eyebrow:"Idee · onverwachte botsing",orientation:"Forge gebruikte deze combinatie als creatief denkbeeld bij Twenties — geen genealogie, maar een verrassend compositiebeeld.",doors:["forge-interview"]},
vanhalen:{type:"artist",name:"Van Halen",eyebrow:"Invloedsspoor · Griftwood",orientation:"Forge beschrijft Griftwood als een jaren-80/Sunset Strip-idee dat hij eerder richting Van Halen dan Ratt hoort.",doors:["forge-interview"],surprise:true},
sabbath:{type:"artist",name:"Black Sabbath",eyebrow:"Invloed · jouw Ghost DNA",orientation:"Paranoid staat in jouw Ghost DNA; Forge benoemt daarnaast zelf vooral de harmonische, grootse mid-70s Sabbath als invloed.",doors:["ghost"],surprise:true},
sweden:{type:"place",name:"Zweden",eyebrow:"Plaats · kruispunt",orientation:"Een geografische brug is geen claim van muzikale gelijkenis. Hij kan wel naar een compleet ander eiland leiden.",doors:["heat","abba","ghost"],surprise:true},
heat:{type:"artist",name:"H.E.A.T",eyebrow:"Artiest · Zweden",orientation:"Melodieuze hardrock. Een bestaand Music-DNA-eiland wordt onderdeel van dezelfde kaart.",dna:"1000 Miles · RATT DNA",primary:["heat-world","heat-similar"],surprise:true},
"heat-world":{type:"hub",name:"Verken H.E.A.T",orientation:"Mensen zijn hier een sterke brug naar een andere band.",doors:["erik"]},
"heat-similar":{type:"hub",name:"Bands/artiesten zoals H.E.A.T",orientation:"Deze systeemproef houdt deze buurt nog klein; de grammatica is al dezelfde.",doors:["erik"]},
erik:{type:"person",name:"Erik Grönwall",eyebrow:"Mens · verbindingspunt",orientation:"Van H.E.A.T naar Skid Row via een echte personeelsverbinding.",doors:["skidrow","heat"]},
skidrow:{type:"artist",name:"Skid Row",eyebrow:"Artiest · via mens bereikt",orientation:"Je bent ver van Ghost geraakt zonder een willekeurige sprong.",primary:["skidrow-world","skidrow-similar"],surprise:true},
"skidrow-world":{type:"hub",name:"Verken Skid Row",orientation:"De volgende inhoudelijke verrijking kan vanaf hier verder groeien.",doors:["erik"]},
"skidrow-similar":{type:"hub",name:"Bands/artiesten zoals Skid Row",orientation:"Nog niet verrijkt. Unknown is toegestaan; Explorer verzint geen buren.",doors:[]}
},
relations:{
"ghost>ghost-world":"verken artiest","ghost-world>forge":"maker","ghost-world>rats":"jouw DNA","ghost-world>sweden":"plaats","ghost-world>sabbath":"invloed + jouw DNA","ghost>ghost-similar":"verwantschap verkennen",
"abba>sweden":"herkomst","abba>forge-interview":"bronverhaal",
"spillways>abba":"songwriting-invloed","spillways>forge-interview":"bronverhaal",
"akesson>opeth":"bandlid","akesson>forge-interview":"bronverhaal",
"opeth>akesson":"bandlid","slayer>forge-interview":"bronverhaal","vanhalen>forge-interview":"bronverhaal",
"heat>heat-world":"verken artiest","heat>heat-similar":"verwantschap verkennen",
"skidrow>skidrow-world":"verken artiest","skidrow>skidrow-similar":"verwantschap verkennen","skidrow-world>erik":"bandlid",

"ghost>forge":"maker","ghost>rats":"jouw DNA","ghost>sweden":"plaats","ghost>sabbath":"invloed + jouw DNA",
"ghost-similar>sabbath":"invloed + jouw DNA","ghost-similar>abba":"songwriting · onverwacht","ghost-similar>sweden":"plaats",
"sabbath>ghost":"invloed + jouw DNA","forge>forge-interview":"verhaal","forge>abba":"invloed","forge>sabbath":"invloed","rats>forge":"maker","rats>sweden":"plaats",
"forge-interview>abba":"songwriting","forge-interview>spillways":"track","forge-interview>akesson":"persoon","forge-interview>slayer":"creatief idee","forge-interview>vanhalen":"invloedsspoor",
"sweden>heat":"plaats + jouw DNA","sweden>abba":"plaats","sweden>ghost":"plaats","heat-world>erik":"persoon","heat-similar>erik":"menselijke brug","erik>skidrow":"bandlid","erik>heat":"bandlid"
}
};