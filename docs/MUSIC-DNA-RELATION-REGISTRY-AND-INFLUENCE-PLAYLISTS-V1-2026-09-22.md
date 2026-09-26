# Music DNA — Relation Registry & invloed-playlists — V1

> **Leeswijzer 23-09-2026:** dit document blijft het architectuurbesluit. De actuele implementatiestand en hervatplek staan in de [canonieke stopstaat 22 september](HANDOFF-2026-09-22-STOPSTAAT.md). De kleine Registry-/Engine 30-proeven zijn inmiddels gebouwd; §14 beschrijft de oorspronkelijke proefopdracht en is geen opdracht om die opnieuw te beginnen. Geen productiepromotie.

**Datum:** 22 september 2026  
**Status:** geaccepteerde ontwerprichting; nog niet als productiecomponent gebouwd  
**Doel:** verbanden één keer betrouwbaar opslaan en daarna hergebruiken in Explorer, Wat hoor ik?, DNA Express, aanbevelingen, statistiek en playlistgeneratie.

## 1. Kernbesluit

Music DNA krijgt een centrale **Relation Registry**.

Een muzikaal verband wordt niet afzonderlijk opgeslagen voor Explorer, DNA Express, Wat hoor ik? en playlists. Het wordt één keer als gestructureerde relatie vastgelegd, samen met het bewijs waarop die relatie rust.

Daarna mogen verschillende Music-DNA-onderdelen dezelfde relatie voor hun eigen doel gebruiken.

Kern:

**entiteit → relatie → bewijs → toepassingen**

De Master Database blijft primair de catalogus-/muziekbasis: wat is een artiest, album, track, land, genre, jaar enzovoort.

De Relation Registry legt vast:

**hoe twee of meer Music-DNA-entiteiten aantoonbaar met elkaar verbonden zijn.**

## 2. Relaties moeten semantisch zuiver blijven

Niet iedere verbinding betekent hetzelfde.

Voorbeeld:
- Shiraz Lane heeft met KISS op podia gestaan;
- dat bewijst niet automatisch dat Shiraz Lane KISS als muzikale invloed noemt.

Daarom krijgen relaties expliciete typen.

Voorbeelden van hoofdcategorieën:
- invloed;
- muzikale overeenkomst;
- tour/podium;
- cover;
- bandlid/personeel;
- producer;
- songwriter;
- gastmuzikant;
- gedeeld project;
- label;
- scene/plaats;
- tijdperk;
- genre/style;
- verhaal/gebeurtenis.

Daaronder kunnen preciezere typen bestaan, bijvoorbeeld:
- `influence → stated-influence`
- `live → support-act`
- `live → shared-bill`
- `recording → covered-song`
- `personnel → former-member`
- `production → same-producer`

**Touren met een artiest mag nooit worden meegeteld als invloed.**  
**Playlistlidmaatschap mag nooit automatisch als invloed worden geïnterpreteerd.**  
**Geen aantoonbare relatie = geen feitelijke Explorer-deur.**

### 2a. Presentatieregel — één counterpart, één complete presentatie

Achter de schermen blijven verschillende relatievormen atomair en afzonderlijk bewaard. In de app worden alle relaties tussen het huidige object en dezelfde band/artiest/persoon echter **gebundeld tot één complete verbinding**.

Dus niet:
- Metallica als invloed;
- Metallica later opnieuw als tourrelatie;
- Metallica nogmaals als coverrelatie.

Maar één keer:
**Metallica — invloed · tour · opname/cover**, met daarachter de verschillende onderliggende feiten en bronnen.

Kernregel:
**één counterpart één keer zichtbaar; alle relevante relatievormen compleet daarbinnen.**

Dit geldt in ieder geval voor Explorer en Wat hoor ik? en moet waar logisch ook andere presentatielagen sturen. De onderliggende atomaire relaties blijven apart beschikbaar voor tellingen, filtering en playlistlogica.

## 3. Bewijs reist met de relatie mee

Een relatie bevat niet alleen bron- en doelentiteit, maar ook de bewijslaag.

Conceptueel record:

```
from:          Band X
to:            KISS
relationType:  stated-influence
direction:     Band X → KISS
claim:         Band X noemt KISS expliciet als muzikale invloed
sources:       [bron 1, bron 2, ...]
confidence:    confirmed
checkedAt:     datum
```

Een relatie kan meerdere bewijsstukken hebben zonder dat dezelfde relatie meerdere keren hoeft te worden geteld.

De bestaande Explorer-architectuur sluit hier direct op aan:

**verhaal → intern bronnenregister → oorspronkelijke bron**

De Relation Registry moet dezelfde bewijsfilosofie volgen.

## 4. Entiteiten krijgen stabiele identiteit

Relaties verwijzen naar vaste Music-DNA-entiteiten, niet naar losse tekstlabels.

Dus niet drie afzonderlijke varianten als:
- AC/DC
- ACDC
- AC-DC

maar één canonieke artiest-entiteit waar alle relaties naar verwijzen.

Relevante entiteittypen kunnen zijn:
- artiest/band;
- persoon;
- album;
- track;
- producer;
- songwriter;
- gebeurtenis;
- tour/concert;
- plaats;
- genre/style;
- label;
- verhaal/bron.

## 5. Vier kennislagen

### Laag 1 — Entiteiten
Wie of wat bestaat er?

### Laag 2 — Relaties
Hoe zijn die entiteiten met elkaar verbonden?

### Laag 3 — Bewijs
Hoe weten we dat het verband bestaat?

### Laag 4 — Afgeleide kennis
Welke patronen ontstaan wanneer veel betrouwbare relaties samen worden geanalyseerd?

Belangrijk: afgeleide conclusies worden niet als eeuwige feiten in de basisdata geschreven.

Dus niet opslaan:
`KISS = invloedrijkste band #1`

Wel opslaan:
- A → stated-influence → KISS
- B → stated-influence → KISS
- C → stated-influence → Iron Maiden
- D → stated-influence → KISS

Daaruit kan Music DNA op ieder moment opnieuw berekenen:
- meest genoemde invloed binnen de Master Database;
- meest genoemde invloed binnen bands die Ben positief beoordeelt;
- per land;
- per decennium;
- per genre/style;
- per generatie;
- per andere relevante selectie.

Daarbij moet de formulering altijd de dataset benoemen. Een uitkomst als "meest invloedrijk" betekent bijvoorbeeld:

**meest expliciet genoemde muzikale invloed binnen de onderzochte Music-DNA-dataset**

en niet: objectief meest invloedrijke artiest aller tijden.

## 6. Hergebruik in Music DNA

Eén bevestigde relatie kan meerdere producten voeden.

### Wat hoor ik?
Korte wetenswaardigheid:
> Wist je dat… Band X KISS expliciet als invloed noemt?

### DNA Explorer
Een aantoonbare deur:
> De KISS-invloed — waarom noemt Band X juist KISS?

### DNA Express
Geaggregeerde patronen:
> Welke artiest wordt binnen Music DNA het vaakst expliciet als invloed genoemd?

Mogelijke invalshoeken:
- KISS, Iron Maiden, AC/DC, Metallica, Black Sabbath;
- per land of regio;
- per decennium;
- per genre;
- generaties van invloed;
- verrassend veel/weinig genoemde grote namen.

### Aanbevelingsmotor
De machine kan leren of Ben relatief vaak positief reageert op artiesten uit bepaalde aantoonbare invloedslijnen.

### Artist/Explorer overview
Bij een grote artiest kan bijvoorbeeld verschijnen:
> Invloed op andere artiesten — N aantoonbare verbindingen

waarbij N uit de Relation Registry wordt berekend.

## 7. Nieuwe belangrijke toepassing: invloed-playlists

De Relation Registry moet vanaf het begin niet alleen **leesbaar** en **telbaar**, maar ook **selecteerbaar en routeerbaar voor playlistgeneratie** zijn.

Kernidee:

**kennis over beïnvloeding moet hoorbaar kunnen worden.**

Voorbeeld:

### 🧬 KISS — The DNA Trail
*Van KISS naar artiesten die het muzikale erfgoed aantoonbaar verder droegen.*

Mogelijke playlistvormen:
- **Directe invloed** — alleen artiesten die KISS aantoonbaar expliciet als invloed noemen;
- **Drie generaties KISS-DNA** — KISS → eerste generatie → volgende generatie;
- **KISS goes Scandinavia** — Scandinavische tak van aantoonbare invloed;
- **KISS-DNA volgens Ben** — invloedlijn gefilterd op positieve Music-DNA-beoordelingen;
- **Van KISS naar Ghost** — een afspeelbare route van aantoonbare muzikale verbindingen;
- **De grote invloedlijnen** — meerdere vertrekpunten, bijvoorbeeld KISS, AC/DC, Iron Maiden, Metallica of Black Sabbath.

Dezelfde aanpak moet generiek werken voor iedere artiest waarvoor voldoende betrouwbare relaties bestaan.

## 8. Selectie en volgorde zijn verschillende problemen

Voor invloed-playlists geldt:

**Relation Registry → inhoudelijke kandidaten**  
**Music-DNA smaakdata → persoonlijke filtering/rangschikking**  
**Flow-DNA → luistervolgorde**  
**Spotify → aflevering**

Daarmee voorkomen we dat een relationeel interessante playlist een slechte luistervolgorde krijgt.

Flow-DNA mag de volgorde optimaliseren, maar mag de betekenis van de relaties niet vervalsen.

## 9. Iedere playlisttrack moet uitlegbaar kunnen zijn

Bij een invloed-playlist moet Music DNA kunnen antwoorden op:

**Waarom zit deze artiest/track hierin?**

Bijvoorbeeld via `ⓘ Wat hoor ik?`:

> Deze artiest noemt KISS expliciet als invloed.

of, bij een generatieroute:

> Deze stap loopt via Band Y, die KISS als invloed noemt en vervolgens aantoonbaar Band Z beïnvloedde.

Alleen bewezen relaties mogen als feitelijke invloedroute worden gepresenteerd.

## 10. Nieuwe productactie: “🧬 Hoor dit DNA”

Sterke toekomstige generieke actie:

**🧬 Hoor dit DNA**

Deze knop kan op meerdere plekken verschijnen:
- bij een artiest in Explorer;
- bij een invloedkaart;
- bij een DNA Express-verhaal;
- bij een interessante relatie;
- eventueel vanuit Wat hoor ik?.

De actie vertaalt de zichtbare kennisstructuur naar een afspeelbare playlist of luisterroute.

Dit verbindt de kennislaag direct met muziekconsumptie.

## 11. Volledige Music-DNA-kringloop

Een mogelijke toekomstige route:

**DNA Express** ontdekt een opvallend invloedpatroon  
→ **Explorer** toont de invloedkaart en bewijsbare verbanden  
→ gebruiker kiest **🧬 Hoor dit DNA**  
→ Relation Registry levert inhoudelijke kandidaten  
→ smaakdata filtert/rangschikt  
→ Flow-DNA maakt er een goede luisterreis van  
→ Spotify levert de muziek  
→ **Wat hoor ik?** legt onderweg verbanden uit  
→ nieuwe tracks krijgen Raak/Goed/Nee  
→ die smaakdata vloeit terug naar Music DNA.

Kerninzicht:

**De kennislaag staat niet naast de muziek; de kennislaag wordt zelf een manier om nieuwe muziek te ontdekken.**

## 12. Ontwerpregel voor schaal

Niet vooraf honderden of duizenden relaties zonder doel handmatig verzamelen.

Gebruik dezelfde lazy-enrichment-filosofie als Explorer:
- huidige artiest/route voldoende verrijken;
- aantoonbare relaties opslaan wanneer ze worden gevonden;
- bronnen direct vastleggen;
- registries laten groeien door werkelijk gebruik en redactioneel onderzoek;
- later aggregaties automatisch laten signaleren wanneer genoeg data aanwezig is.

De Relation Registry is dus gemeenschappelijke infrastructuur, geen nieuw los product.

## 13. Relatie met bestaande Music-DNA-onderdelen

De Relation Registry verbindt:
- Master Database;
- DNA Explorer;
- `ⓘ Wat hoor ik?`;
- DNA Express;
- Ontdek DNA / smaakdata;
- Flow-DNA;
- toekomstige aanbevelingen;
- toekomstige statistieken;
- invloed-playlists;
- Spotify-aflevering.

Hiermee hoeft hetzelfde verband niet op vijf plaatsen opnieuw te worden verzameld.

## 14. Hervatregel

Bij verdere bouw van Relation Registry eerst een klein echt gegevensmodel maken met enkele goed onderbouwde voorbeelden, bij voorkeur rond reeds onderzochte artiesten zoals Ghost/Shiraz Lane/H.E.A.T/KISS.

Eerst bewijzen:
1. één relatie kan meerdere bronnen dragen;
2. relatietypen blijven zuiver;
3. Explorer kan dezelfde relatie lezen;
4. Express kan relaties aggregeren;
5. playlistgenerator kan op relatietype selecteren;
6. `Wat hoor ik?` kan dezelfde relatie als kort feit tonen.

Pas daarna breed opschalen.

## 15. Presentatieregel — één counterpart één keer compleet

De Relation Registry bewaart achter de schermen **atomaire relaties** afzonderlijk. Ghost ↔ Metallica kan dus tegelijk bestaan uit invloed, tour, cover en andere aantoonbare relatievormen.

De app presenteert die atomaire records echter niet als losse herhalingen van dezelfde band.

Vaste UX-regel:

**één counterpart wordt binnen dezelfde context één keer genoemd; alle relevante relatievormen worden daaronder compleet gebundeld.**

Dus niet:
- Metallica — invloed;
- later opnieuw Metallica — tour;
- later opnieuw Metallica — cover.

Maar bijvoorbeeld één deur/kaart:

**Metallica**  
invloed · tour · cover  
met daaronder de relevante korte toelichtingen en verdere verdieping.

Hetzelfde geldt voor ABBA, Iron Maiden en andere sterke relaties.

Belangrijk onderscheid:
- **opslagniveau:** relaties blijven afzonderlijk en semantisch zuiver, zodat tellingen, bewijs en playlistselectie correct blijven;
- **presentatieniveau:** Music DNA bundelt alle relevante relaties per counterpart tot één complete ingang.

Ook aggregaties moeten waar nodig dedupliceren. Een band met drie verschillende invloedsubtypen mag bij de vraag "hoeveel artiesten zijn door X beïnvloed?" niet automatisch drie keer meetellen. Voor invloedstatistiek telt de unieke artiest→invloed-combinatie als basis.

Voor samengestelde relaties kan een onderliggend object naar een hoofd-counterpart wijzen. Voorbeeld: Ghost → Enter Sandman (cover) hoort in de presentatie bij de complete Ghost ↔ Metallica-verbinding.

Dit principe geldt generiek voor Explorer, Wat hoor ik?, Express-kaarten en andere app-presentaties.

## 16. Samenvatting

**Eén keer bewaren, overal gebruiken.**

Music DNA bewaart niet alleen artiesten en tracks, maar ook aantoonbare verbindingen en het bewijs daarvoor.

Daaruit ontstaan drie soorten waarde:
1. **begrijpen** — Explorer / Wat hoor ik?;
2. **ontdekken** — Express / patroonherkenning;
3. **horen** — invloed-playlists / `🧬 Hoor dit DNA`.

Dit ontwerp is geaccepteerd als richting op 22 september 2026.


## Tijd- en releaseprovenance

De Relation Registry en Explorer mogen bronmetadata over releases niet gelijkstellen aan de historische identiteit van een muzikaal object. Voor muziekgerelateerde nodes en evidence geldt dezelfde systeeminvariant als voor Ontdek-DNA:

> **Dateer het muzikale object, niet de verpakking waarin het is gevonden.**

Maak waar relevant expliciet onderscheid tussen **werk/song**, **concrete opname/versie** en **release/verpakking**. Een remaster, heruitgave, compilatie, jubileumeditie of streamingrelease kan een latere bron-/releasedatum hebben zonder het oorspronkelijke releasejaar van de opname te veranderen. Een nieuwe live-opname, remake/rerecording of remix is daarentegen een eigen versie en kan terecht een later jaar dragen.

Datumclaims die Explorer in verhalen, relaties of tijdlijnen gebruikt moeten herleidbaar blijven tot evidence. Bij betrouwbare bronconflicten wordt de datum niet stilzwijgend genormaliseerd; de status blijft **conflicterend** of **nog te onderzoeken** totdat de bedoelde versie voldoende is vastgesteld. Hiermee blijft ook historische volgorde in relatieverhalen reproduceerbaar.


## 17. Informatielevensduur — Explorer vlottend, Express vast

Music DNA maakt voortaan expliciet onderscheid tussen **vlottende informatie** en **bewaarinformatie**.

### DNA Explorer — vlottende informatie

Explorer is een reis door betrouwbare bronnen en relaties, geen archief van kant-en-klare artikelen.

Duurzaam bewaren we alleen wat nodig is om die reis betrouwbaar opnieuw te kunnen maken:
- identiteit van het knooppunt;
- aantoonbare atomaire relaties;
- korte feitelijke claims/context;
- bronverwijzingen en provenance;
- bewijsstatus/betrouwbaarheid;
- lees-/ontdekstatus voor variatie en terugkeer.

De Nederlandse vertelling die de gebruiker tijdens een Explorer-reis leest is **geen canoniek bewaartekstobject**. Zij mag bij een later bezoek opnieuw worden samengesteld uit dezelfde betrouwbare feiten en bronnen, afhankelijk van ingang, route, reeds geziene informatie en inmiddels beschikbare relaties.

Vaste invariant:

> **De feiten zijn stabiel; de vertelling mag bewegen.**

Een bron kan daardoor bij verschillende routes een andere relevante selectie opleveren. Een bezoek via Ghost → Voïvod hoeft niet hetzelfde verhaal uit een interview te halen als een bezoek via een andere relatie. Explorer kopieert of archiveert geen volledige interviews en hoeft geen volledige vertalingen als eigen contentvoorraad op te slaan.

### DNA Express — bewaarinformatie

Express is juist een publicatie-/archieflaag. Zodra materiaal bewust tot een Express-editie wordt gemaakt, wordt die editie vastgelegd met ten minste:
- definitieve tekst/selectie;
- volgorde en redactionele vorm;
- datum en editie-identiteit;
- gebruikte bronverwijzingen;
- gekozen beeldmateriaal en vormgeving waar van toepassing.

Een gepubliceerde editie wordt achteraf niet stilzwijgend herschreven omdat Explorer later nieuwe informatie vindt. Nieuwe kennis kan aanleiding zijn voor een nieuwe editie of vervolgstuk.

Een PDF is een geschikte duurzame archiefweergave van een afgeronde Express-editie, naast eventuele interactieve presentatie in de app.

### Gevolg voor Relation Registry

De Registry wordt **geen encyclopedische kopie van het web**. De externe bron blijft de bron. De Registry bewaart de compacte, controleerbare wegwijzers waarmee Music DNA betekenisvol kan navigeren:

**entity → relation → evidence → context/toepassing**

Nieuwe Registry-inhoud wordt daarom alleen toegevoegd wanneer die een betrouwbare verbinding, herbruikbaar feit of noodzakelijke provenance vastlegt. Lange broninhoud of eenmalige Explorer-proza hoort niet in de Registry.

### Praktische bouwregel

Bij uitbreiding van een artiestwereld vragen we niet: *hebben we alles over deze artiest opgeslagen?* maar:

> **Hebben we genoeg betrouwbare wegwijzers om interessante, gevarieerde en herhaalbare reizen te kunnen maken?**

Daarmee blijft Explorer dynamisch en licht, terwijl Express precies de geselecteerde informatie bewaart die het waard is om als Music-DNA-uitgave te conserveren.


## 18. Verstandig dwalen — plaatsen kost geen afslag

DNA Explorer moet vrije ontdekking mogelijk maken zonder dat de gebruiker de context kwijtraakt. Daarom geldt als vaste UX-invariant:

> **Plaatsen kost geen afslag.**

Iedere betekenisvolle naam of term die tijdens een Explorer-reis verschijnt — artiest, persoon, band, album, track, label, genre, plaats, venue of gebeurtenis — moet op verzoek kort te plaatsen zijn zonder de actieve route te verlaten of de ontdekgeschiedenis als gekozen afslag te veranderen.

### Drie interactieniveaus

1. **Reis** — de actieve verhaallijn en breadcrumb blijven intact.
2. **Plaatsen** — een compacte contextkaart verschijnt boven/in de huidige context en beantwoordt minimaal: wie/wat is dit, waarvan kan ik dit kennen, en waarom verschijnt dit hier?
3. **Afslaan** — alleen een expliciete actie zoals **Neem deze afslag** verandert de Explorer-route.

Een contextkaart is dus geen navigatie-event. Openen/sluiten ervan mag geen gekozen deur, read-route of routehistorie simuleren.

### Compacte plaatsingskaart

De standaardkaart bevat waar beschikbaar:
- naam;
- type/rol;
- maximaal enkele herkenningsankers;
- één korte contextzin waarom dit knooppunt in de huidige reis voorkomt;
- acties **Terug naar mijn reis**, **Iets meer weten** en **Neem deze afslag**.

De kaart gebruikt progressive/contextual disclosure: alleen de noodzakelijke oriëntatie wordt direct getoond; verdere verdieping blijft op verzoek beschikbaar. De hoofdvertelling hoeft daardoor niet met biografische bijzinnen te worden overladen.

### Informatielevensduur

De plaatsingskaart hoort bij de vlottende Explorer-laag. Zij mag dynamisch worden samengesteld uit entity-metadata, bewezen relaties en evidence. Er hoeft geen canonieke Nederlandse kaarttekst per entiteit te worden opgeslagen. De onderliggende identiteit, feiten, relaties en provenance blijven wel stabiel.

### Ontwerpdoel

**Verstandig dwalen = vrij kunnen afslaan, maar nooit hoeven verdwalen.**


## 19. Persoonlijk DNA-bewijs — de archipel naast het relatienetwerk

DNA Explorer houdt twee bewijssoorten strikt uit elkaar.

### 19.1 Persoonlijk bewijs
Spotify/Exportify-bronnen zoals favorietenlijsten en Music Maps mogen aantonen dat een artiest, track of muzikaal gebied al deel uitmaakt van Bens bekende muziekwereld. De bronsoort blijft zichtbaar, omdat de bewijskracht verschilt:
- `favorite`: expliciet door Ben bewaarde favoriet;
- `music-map`: onderdeel van een rond een artiest opgebouwde persoonlijke muziekkaart;
- latere beoordelingen zoals `RAAK`: nieuw persoonlijk smaakbewijs.

Een vermelding in zo'n bron bewijst **geen relatie tussen twee artiesten**.

### 19.2 Relationeel bewijs
Relaties tussen artiesten/personen/werken blijven uitsluitend afkomstig uit daarvoor geschikte externe bronnen en de Relation Registry. Playlist-co-occurrence mag nooit automatisch worden vertaald naar invloed, samenwerking of verwantschap.

### 19.3 Explorer-toepassing
Explorer mag beide lagen combineren zonder ze te vermengen. Daardoor kan een relationeel bewezen afslag eindigen bij terrein dat uit persoonlijk bewijs al bekend blijkt. Dit kan worden getoond als bijvoorbeeld `bekender terrein dan gedacht` of `brug naar bekend terrein`.

Afstand tot Bens DNA is daarom geen harde grens. Het persoonlijke landschap is een groeiende **archipel**: uitstapjes kunnen onbekend terrein openen, maar ook twee reeds bestaande eilanden met elkaar verbinden. Een nieuwe positieve beoordeling kan de bekende archipel uitbreiden.

### 19.4 Eerste ingestroomde bronnen
De eerste gecontroleerde bronset bestaat uit 13 Exportify Music Maps plus `Ben's Disco favorites`. Deze bestanden vormen een persoonlijke bewijslaag en worden niet rechtstreeks als relationele feiten in de Registry geïmporteerd.


## 20. Hoofdroute, spin-off en uitstapje

Explorer interpreteert afstand tot het bekende Music DNA niet als één lineaire score. Een deur kan functioneel een andere rol hebben:

- **Hoofdroute** — een artiest of wereld die stevig in het bestaande persoonlijke DNA is verankerd.
- **Spin-off** — een persoon, solo-identiteit, zijproject, voorloper, opvolger of andere logisch afgeleide entiteit rond een hoofdroute. Een spin-off is niet automatisch een ontbrekend Master-record en mag later zelf nieuwe deuren openen.
- **Uitstapje** — een relationeel bewezen deur naar terrein dat nog niet of nauwelijks persoonlijk verankerd is.

Deze labels beschrijven de positie in de actuele reis, niet de intrinsieke waarde van de muziek. Een spin-off of uitstapje kan later hoofdroute worden wanneer persoonlijk bewijs of nieuwe verbindingen dat rechtvaardigen.

### 20.1 Overlap met de Master
Een Music Map hoeft niet 100% met de Master Database te overlappen. Afwijkingen kunnen betekenisvolle spin-offs of randen van belangstelling zijn en worden daarom eerst geïnterpreteerd, niet automatisch als databasegat gerepareerd.

### 20.2 Bruggen tussen eilanden
Een uitstapje kan uitkomen bij een ander reeds bestaand persoonlijk muziekeiland. Dan markeert Explorer dit als **bekender terrein dan gedacht** / **brug naar bekend terrein**. Het pad blijft relationeel onderbouwd; het persoonlijke bewijs verklaart alleen dat de bestemming al bij Ben hoort.

### 20.3 Reiscontext
Dezelfde artiest kan in verschillende reizen een andere rol hebben. Explorer bewaart daarom naast stabiele feiten ook de actuele routecontext: waar kwamen we vandaan, waarom was deze deur zichtbaar, en was de bestemming op dat moment hoofdroute, spin-off, uitstapje of brug.


## 21. Verrassingsmotor — onbekend maar relevant

DNA Explorer bestaat niet primair om Ben terug te vertellen wat hij al weet. Bekende muziek is vooral het vertrekpunt en het herkenningsanker voor een reis naar betrouwbare, mogelijk nog onbekende informatie.

Vaste ontwerpzin:

> **DNA Explorer moet je steeds iets kunnen laten ontdekken waarvan je nog niet wist dat je het wilde weten.**

### 21.1 Bekendheid is geen selectie-eis

Een deur hoeft niet vooraf in de Master, een Music Map, favorieten of eerdere gesprekken voor te komen. Persoonlijk bewijs helpt Explorer bepalen wat waarschijnlijk al bekend terrein is; het ontbreken ervan betekent alleen **mogelijk onbekend**, niet oninteressant of ongeschikt.

### 21.2 Twee onafhankelijke vragen

Voor iedere potentiële ontdekking worden twee vragen uit elkaar gehouden:

1. **Is de verbinding echt?** — uitsluitend relationeel/evidence-bewijs.
2. **Is dit waarschijnlijk nieuw voor Ben?** — persoonlijk bewijs, eerdere lees-/routegeschiedenis en bekende Music-DNA-ankers.

De tweede vraag mag nooit de eerste vervangen. Een verrassende associatie zonder bewijs wordt geen Explorer-deur.

### 21.3 Onbekendheidsbonus, geen smaakgevangenis

Wanneer meerdere betrouwbare deuren beschikbaar zijn, mag Explorer extra waarde geven aan een deur die:
- nog niet eerder is bezocht;
- niet reeds sterk persoonlijk verankerd is;
- een nieuw type knooppunt opent (persoon, plaats, gebeurtenis, album, track, label enz.);
- via een begrijpelijke brug terug te voeren is op de actuele reis;
- voldoende bronmateriaal heeft voor een betekenisvolle volgende stap.

Dit is een **onbekendheidsbonus**, geen verplichting om steeds verder van Bens smaak af te bewegen. Bekend terrein blijft beschikbaar voor oriëntatie en verdieping.

### 21.4 Nieuwsgierigheid als feedback

Een expliciete afslag is een sterker signaal dan alleen het tonen van een deur. Terugkeren zonder af te slaan is geen afwijzing van de muziek. Explorer leert daarom primair van reisgedrag op informatieniveau: welke soorten deuren, verhalen en verrassingen lokken vrijwillige verdieping uit?

Dit signaal staat los van Ontdek-DNA-smaakbeoordelingen. **Interessant om over te lezen** betekent niet automatisch **meer muziek hiervan aanbevelen**.

### 21.5 Bouwregel

Handmatig gekozen casussen — Ghost, Shiraz Lane, Chester Thompson enz. — zijn bouwsteigers waarmee functies worden bewezen. Zij vormen niet de toekomstige inhoudsagenda.

Zodra een functie is bewezen, hoort de normale uitbreiding te ontstaan uit de wandeling zelf:

**bekend anker → evidence-backed deuren → nieuwheidsinschatting → interessante verrassing → vrijwillige afslag → nieuwe evidence-backed deuren**

Daarmee verschuift de kern van een vooraf ingevulde muziekenyclopedie naar een echte ontdekmachine.


## 22. DNA Express — vaste rubriek: de artiesten van deze week

Iedere gepubliceerde Ontdek-DNA-week krijgt gelijktijdig in DNA Express een vaste naslagrubriek met korte biografieën van **alle artiesten/bands die op de gepubliceerde playlist voorkomen**.

Aanleiding is het natuurlijke luistermoment: al bij de eerste tonen van een nieuwe weeklijst kan de behoefte ontstaan om onmiddellijk te weten wie de makers zijn. Express moet die nieuwsgierigheid op hetzelfde publicatiemoment kunnen opvangen, zonder dat de gebruiker per artiest elders hoeft te zoeken.

### 22.1 Publicatie-eenheid

De playlist en deze Express-rubriek horen bij dezelfde weekeditie. Wanneer Ontdek DNA #YYYY-WW wordt gepubliceerd, moet de bijbehorende Express-editie dus ook een hoofdstuk **De artiesten van deze week** kunnen openen.

De rubriek bevat iedere unieke artiest/band uit de definitieve playlist één keer, ook wanneer later meerdere tracks van dezelfde artiest in een editie zouden voorkomen.

### 22.2 Inhoud per bio

De bio blijft compact genoeg om alle artiesten prettig achter elkaar te kunnen lezen, maar is binnen die ruimte zo volledig mogelijk. Waar betrouwbaar beschikbaar bevat zij minimaal:
- herkomst en oprichtings-/startperiode;
- belangrijkste leden of bezetting die nodig is om de artiest te plaatsen;
- kern van stijl en muzikale ontwikkeling;
- belangrijke albums, releases of loopbaanmomenten;
- relevante personeelswisselingen, voorgangers/opvolgers of zijprojecten wanneer die werkelijk helpen bij het plaatsen;
- actuele/historische status;
- waarom juist deze artiest in de betreffende Ontdek-DNA-week staat, zonder daarvan een onbewezen biografisch feit te maken.

### 22.3 Bronnen en informatielevensduur

De bio wordt samengesteld uit betrouwbare externe bronnen en reeds bewezen Registry-feiten. Persoonlijk DNA mag de context **waarom hier** verklaren, maar bewijst geen biografische feiten.

In tegenstelling tot Explorer is de gepubliceerde Express-bio **bewaarinformatie**: de definitieve tekst, weekeditie en bronverwijzingen worden met de editie vastgelegd. Latere kennis herschrijft een oude editie niet stilzwijgend.

### 22.4 Geen encyclopedische ballast

**Zo volledig mogelijk** betekent niet: zo lang mogelijk. Het doel is dat Ben na een korte bio werkelijk weet **wie deze band/artiest is, waar hij vandaan komt, wat hem muzikaal kenmerkt en welke plaats hij in de muziekgeschiedenis of eigen scene inneemt**.

Verdieping, verrassende relaties en zijpaden blijven terrein van DNA Explorer. Express geeft hier het stevige, leesbare portret.

### 22.5 Vaste Express-rubriek

**De artiesten van deze week** is vanaf nu een vaste inhoudscategorie van DNA Express en geen incidenteel extraatje. Zij wordt ontworpen als structureel onderdeel van iedere Ontdek-DNA-weekpublicatie.


## 23. DNA Express — bio-productiepijplijn

De vaste rubriek **De artiesten van deze week** wordt niet handmatig achteraf bedacht, maar is een afgeleid publicatieproduct van de definitieve Ontdek-DNA-playlist.

### 23.1 Trigger

Zodra een weekplaylist definitief wordt bevroren, ontstaat automatisch een Express-bio-opdracht voor iedere **unieke primaire artiest/band** op die lijst. De weeklijst is daarmee de manifestbron; de Express-editie hoeft de artiestenset niet opnieuw handmatig samen te stellen.

### 23.2 Dossierstatus vóór publicatie

Iedere artiest krijgt vóór publicatie één van drie interne statussen:
- **gereed** — identiteit en minimaal biografisch bronpakket zijn voldoende;
- **aanvullen** — identiteit is zeker, maar één of meer kernvelden missen nog betrouwbare dekking;
- **blokkade** — identiteit of essentiële bronbasis is te onzeker om verantwoord te publiceren.

Een blokkade mag niet worden opgelost door ontbrekende biografie te verzinnen. De onderzoeksqueue krijgt de ontbrekende velden als concrete vraag.

### 23.3 Minimaal bronpakket

Voor een normale korte Express-bio zoeken we, waar beschikbaar, minimaal dekking voor:
- identiteit/herkomst/startperiode;
- bezetting of kernpersonen;
- stijl/ontwikkeling;
- belangrijke releases/loopbaanmomenten;
- status en relevante recente/historische context.

Bronnen worden per claim gekozen naar functie: bijvoorbeeld AllMusic voor brede biografische context, MusicBrainz voor identiteit, Discogs voor release/credits en passende genre-specialisten of primaire interviews voor verdieping. Geen enkele bron is verplicht wanneer een betere bron voor het betreffende feit bestaat.

### 23.4 Schrijfmodel

De bio wordt pas geschreven **nadat** de feitelijke dekking is verzameld. De tekst is een compacte Express-redactie van bewezen materiaal, geen opgeslagen kopie of vertaling van een bron.

Standaard leesvolgorde:
**wie zijn dit → waar komen ze vandaan → wat maken ze muzikaal bijzonder → welke momenten/platen moet ik kennen → waar staan ze nu/historisch → waarom hoor ik ze deze week**

### 23.5 Gelijktijdige publicatie

De Express-rubriek hoort gereed te zijn wanneer de playlist wordt vrijgegeven. Onderzoek voor de bio's moet daarom vóór het zaterdagse publicatiemoment meelopen met de definitieve kandidatenvoorraad en na de playlist-freeze alleen nog de werkelijk geselecteerde artiesten afronden.

### 23.6 Scheiding van systemen

De bio-pijplijn mag Registry-feiten en bronprovenance hergebruiken, maar:
- vult de Relation Registry niet met encyclopedische ballast;
- verandert bio-interesse niet in Ontdek-DNA-smaakbewijs;
- verandert een bio niet automatisch in een Explorer-route;
- kan wél nieuw gevonden, aantoonbaar relationeel bewijs apart aan de Registry aanbieden.

Zo ontstaat één brononderzoek dat meerdere toepassingen kan voeden zonder bewijssoorten te vermengen.


## 24. Weekmanifest — één waarheid voor de zaterdagpublicatie

Iedere definitieve Ontdek-DNA-week krijgt één canoniek **weekmanifest**. Dit manifest is de machineleesbare publicatiebron waaruit alle onderdelen van dezelfde weekeditie worden afgeleid.

### 24.1 Waarom

Playlist, DNA Express, Edelsteen(museum), weekmetadata en latere archivering mogen niet ieder hun eigen kopie van de weekselectie onderhouden. Eén bevroren manifest voorkomt verschillen zoals 21 tracks in Spotify maar een andere artiestenset in Express of een ontbrekende Edelsteenregistratie.

### 24.2 Minimale inhoud

Een manifest bevat minimaal:
- schema-versie;
- week-ID in vorm YYYY-WW;
- publicatie-/freeze-status en relevante timestamps;
- de definitieve geordende tracklijst;
- per track: stabiele track-ID/Spotify-ID waar beschikbaar, artiest-ID/naam, tracktitel, origineel releasejaar/versiecontext waar vastgesteld;
- herkomst van de selectie (week of positieve reserve) waar relevant;
- unieke artiestenset, **afgeleid uit de tracks** en niet handmatig dubbel bijgehouden;
- Express-bio-status per unieke artiest;
- Edelsteenstatus en gekozen Edelsteen zodra bepaald;
- publicatiedoelen/statussen, waaronder Spotify-playlist, Express-editie en Edelsteenmuseum.

### 24.3 Afgeleide producten

Het manifest is bron voor:
1. **Spotify** — naam, volgorde en inhoud van de definitieve Ontdek-DNA-playlist;
2. **DNA Express** — de unieke artiestenset voor *De artiesten van deze week*;
3. **Edelsteen** — selectie/status van de weekedelsteen;
4. **Edelsteenmuseum** — registratie van de gepubliceerde edelsteen;
5. **archief/controle** — reproduceerbare vastlegging van wat die week werkelijk is gepubliceerd.

### 24.4 Integriteitsregels

- De tracklijst is de primaire inhoudswaarheid.
- Unieke artiesten worden programmatisch uit die tracklijst afgeleid.
- Express mag geen artiest publiceren die niet uit het manifest of een expliciet gemarkeerde redactionele uitzondering komt.
- Een gekozen Edelsteen moet verwijzen naar een track/artiest uit dezelfde weekeditie, tenzij een toekomstige regel expliciet anders bepaalt.
- Publicatiestatussen zijn afzonderlijk zichtbaar; een geslaagde Spotify-publicatie mag dus niet verhullen dat Express of Edelsteenmuseum nog ontbreekt.
- Een eenmaal als gepubliceerd bevroren manifest wordt niet stilzwijgend herschreven; correcties krijgen provenance.

### 24.5 Publicatiepoort

Een week mag technisch als playlist zijn afgeleverd terwijl andere onderdelen nog niet gereed zijn, maar de **volledige weekpublicatie** is pas compleet wanneer de verplichte doelen groen zijn. Voor de huidige opzet zijn dat minimaal:
- Spotify-playlist;
- DNA Express — *De artiesten van deze week*;
- Edelsteen gekozen/gepresenteerd;
- Edelsteenmuseum geregistreerd.

Hierdoor wordt een ontbrekend Express-hoofdstuk of Edelsteen-element een zichtbare onvolledige publicatiestatus in plaats van een stil gemis.

### 24.6 W39 als overgangsgeval

W39 is vóór deze manifestregel gepubliceerd en geldt daarom als migratie-/herstelgeval. De canonieke 21 tracks worden niet uit geheugen of screenshots gegokt. Zodra de werkelijke definitieve W39-selectie machineleesbaar beschikbaar is, kan daarvan een retrospectief manifest worden gemaakt met provenance **migrated-from-pre-manifest-publication**.
