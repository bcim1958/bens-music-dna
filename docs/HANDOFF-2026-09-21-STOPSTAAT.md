# Music DNA — stopstaat 21 september 2026

**Status:** canonieke stopstaat na Explorer Engine 30 + Relation Registry-proef V1  
**Vastgezet:** 21-09-2026, na de bronnenregister-, trail- en iPhone-navigatiebouw  
**Productie:** W39 blijft onaangeroerd en operationeel; Explorer blijft een geïsoleerde ontwikkel-/proeflijn.  
**Belangrijk:** Engine 29 is `test/music-dna-explorer-engine-v29.html` en is **geen productie-Explorer**.

## 1. Actuele Explorer-build

- Actuele proefbuild: `test/music-dna-explorer-engine-v29.html`
- Engine 29 main-commit: `5d767f70690dc4e5e730ed3c593ab93b0d0ae41e`
- Engine 29 Pages-commit: `d347b98ddb30d02c8c72b2a219f62e4e13d884d0`
- GitHub Pages wordt vanuit de afzonderlijke `gh-pages`-branch bediend. Nieuwe Engines worden daarom op `main` gebouwd én afzonderlijk op `gh-pages` gepubliceerd.
- Engine 21 blijft de goedgekeurde referentie voor artiesten-/informatiearchitectuur.
- Engine 22 blijft de goedgekeurde referentie voor album → track.
- Engine 23/Rats blijft de redactionele referentie voor trackverdieping.
- Engine 24 was een inmiddels achterhaald experiment met directe externe bronnen.
- Engine 25 bewees het interne bronnenregister op de echte iPhone.
- Engine 26 voegde één gecontroleerd horizontaal spoor toe: Rats → Moskou 1989.
- Engine 27 maakte zijpaden/trails data-gedreven via een herbruikbaar trail registry.
- Engine 28 trok de bestaande Ghost-verhalen gelijk achter een intern bronnenregister.
- Engine 29 corrigeert de iPhone-navigatie zodat de onderste Explorer-navigatie tijdens lezen niet meer als vaste balk over verhaal-/broninhoud ligt.

## 2. Productstatus versus proefstatus

Explorer is inhoudelijk en technisch sterk gevorderd, maar de huidige Engines zijn **testbestanden**.

Daarom:
- een geslaagde iPhone-proef is geen automatische productiepromotie;
- `test/music-dna-explorer-engine-v29.html` blijft proefcode;
- er is nog geen besluit genomen om Engine 29 of een afgeleide daarvan als definitieve productie-Explorer te publiceren;
- W39-productie blijft strikt gescheiden van deze ontwikkellijn.

## 3. Vaste informatiearchitectuur

Voor een artiest begint **Muziek** bij albums.

Hoofdregel:
**Artiest → Muziek → Studioalbums (nieuw → oud) → Album → Tracks → Track → verdieping.**

Andere uitgaven staan afzonderlijk:
- Live;
- EP's;
- Singles;
- Compilaties.

De basisstructuur wordt bepaald door artiest en oeuvre. Persoonlijke Music-DNA-relaties annoteren en openen extra deuren, maar bepalen niet welke basale oeuvre-informatie wordt getoond.

Voor Ghost:
**Ghost → Muziek → Prequelle → Rats.**

De marker `◆ Music DNA` bij Rats is context, geen navigatieprincipe.

## 4. Redactionele referentie

**“Waarom Rats meer is dan ratten”** blijft het referentieverhaal.

Kwaliteitsmaat:
**na circa 2–3 minuten lezen keert de gebruiker terug met minstens één interessant, onthoudbaar stukje muziekkennis.**

De richtlijn van circa 300–400 woorden is bruikbaar, maar kwaliteit gaat vóór lengte.

Vaste redactionele regel:
**Selectie persoonlijk; verhaal neutraal.**

Dus geen systeemtaal of smaakverklaring in het artikel zelf. Het stuk moet als zelfstandig, prettig leesbaar muziekverhaal functioneren.

## 5. Bronnenregister — nu gebouwd en bewezen

De voorkeursarchitectuur is niet langer alleen een ontwerpbesluit maar werkende Explorer-structuur:

**Verhaal → intern Bronnenregister → oorspronkelijke externe bron.**

Kernregel:
**Music DNA vertelt het verhaal. Het bronnenregister laat zien waarop het verhaal rust. De oorspronkelijke bron blijft beschikbaar voor wie zelf verder wil zoeken.**

### Bewezen in Engine 25
Op de echte iPhone is voor Rats de volledige route doorlopen:
**Ghost → Muziek → Prequelle → Rats → Verhaal → Bronnenregister.**

De eerste iPhone-render liet zien dat de bronnenknop door iOS wit werd weergegeven. Dit is gecorrigeerd; een daaropvolgende echte iPhone-screenshot bevestigde dat de knop daarna visueel correct in de donkere Explorer-interface paste.

### Gelijkgetrokken in Engine 28
De eerdere Ghost-verhalen gebruiken nu eveneens de interne bewijslaag:
- Ghost + Iron Maiden;
- Ghost + Metallica;
- Wie had Ghost bijna gezongen?

Echte iPhone-screenshots van 21 september bevestigen dat deze verhalen en hun bronnenregisters renderen en dat de interne bewijslaag begrijpelijk is.

Externe originelen staan pas in het bronnenregister. De oude generieke directe externe-bronknop is uit deze verhalen verwijderd.

## 6. Herbruikbare bron- en route-infrastructuur

Explorer groeit niet langer uitsluitend door losse schermen handmatig te programmeren.

### Story source registry
Een herbruikbaar story-source-register bevat bronmetadata en bewijsinformatie voor verhalen. De renderer maakt daaruit het interne bronnenregister.

### Trail registry
Zijpaden zijn data-gedreven gemaakt via:
`test/music-dna-explorer-trails-v1.js`

Het eerste gecontroleerde voorbeeld is:
**Rats → Moskou 1989.**

Het spoor gebruikt Forge's herinnering aan Ozzy Osbourne / `I Don't Know` tijdens het Moscow Music Peace Festival van 1989 als aantoonbare relatie met het ontwerpdoel van Rats als grote live-opener.

De trail bevat:
- een verklaarbare deur;
- een zelfstandig kort verhaal;
- een onthoudbare takeaway;
- eigen bronnen;
- een intern bronnenregister;
- een duidelijke terugweg.

Kernregel:
**Een deur verschijnt alleen wanneer kan worden uitgelegd waarom precies deze deur vanuit precies dit knooppunt bestaat.**

Geen aantoonbare relatie = geen deur.

## 7. Lazy enrichment — schaalregel

De wereld mag vrijwel onbeperkt groot zijn; de voorbereiding moet begrensd blijven.

Werkwijze:
**voldoende rijk → bruikbaar → volgende aantoonbare stap beschikbaar → pas verder verrijken wanneer gebruikt.**

Dus niet vooraf Tobias Forge, Ozzy Osbourne, Black Sabbath, alle tournees en alle aangrenzende werelden volledig uitbouwen.

Horizontale beweging:
**overzicht → detail → verhaal → onderbouwde zijdeur.**

Verticale beweging:
**overzicht → keuze → diepte.**

De trail-infrastructuur is juist bedoeld om nieuwe sporen later als data/verhaal/bronnen toe te voegen zonder telkens de schermlogica opnieuw te programmeren.

## 8. Oriëntatie en terugweg

Kern:
**Verdwalen is het product; verdwaald raken moet worden voorkomen.**

Vaste oriëntatiemiddelen:
- compact semantisch kruimelpad;
- één stap terug;
- direct hoofdanker, bijvoorbeeld `⌂ Ghost`.

De zichtbare route beschrijft de muzikale/inhoudelijke positie; technische klikgeschiedenis is ondergeschikt.

## 9. iPhone-presentatie — actuele correctie

Engine 28 werd op de echte iPhone bekeken. Daaruit bleek één duidelijk UX-probleem: de vaste onderste Explorer-balk `← Eén stap terug · ⌂ Ghost` kon tijdens lezen over tekst en bronkaarten liggen, terwijl Safari zelf ook schermruimte inneemt.

Engine 29 corrigeert dit:
- op iPhone-/smalle schermen staat de Explorer-navigatie niet meer fixed over het leesgebied;
- zij wordt onderdeel van de pagina onder de inhoud;
- op grotere schermen blijft de vaste navigatie behouden;
- breadcrumbs bovenin blijven beschikbaar.

**Open visuele beoordeling:** de Engine-29-correctie is syntactisch gecontroleerd, maar sinds de wijziging is nog geen nieuwe echte-iPhone-screenshot vastgelegd die de uiteindelijke positie van deze navigatie bevestigt. Dit is een kleine gerichte proef, geen reden om de hele Ghost-route opnieuw te doorlopen.

## 10. Wat uit de chat expliciet is meegenomen

Sinds de vorige stopstaat zijn de volgende acceptaties/observaties niet alleen uit GitHub maar ook uit de proefritten meegenomen:

- de donkere, subtiele bronnenknop na de iOS-fix is visueel goedgekeurd;
- het bronnenregister voelt als de juiste bewijslaag: transparant, optioneel en niet dominant in de normale ontdekkingsroute;
- Engine 28-screenshots bevestigen de consistente bewijslaag bij Iron Maiden, Metallica en het bijna-zanger-verhaal;
- de vaste onderste navigatie van Engine 28 bleek op iPhone te veel leesgebied af te dekken; daarom Engine 29;
- het principe **minder Ben — meer assistent** blijft actief: Ben is vooral proefrijder, de assistent bewaakt bouw, redactie, bronnen, structuur en volgende logische stap;
- niet na iedere technische verbetering opnieuw een volledige reeks screenshots vragen;
- geen onbegrensde voorbouw van de muziekwereld: routes groeien lazy en evidence-based.

## 11. W39 blijft strikt geïsoleerd

Op 22 september is W39 Dag 3 op de bestaande echte-iPhone-omgeving succesvol afgerond:
- Shiraz Lane — To The Moon & Back → `Raak`;
- The Poodles — Night of Passion → `Raak`;
- Reckless Love — Hot → `Goed`;
- reserve Swedish Erotica — Rock'n'Roll City → `Goed`;
- reserve Heavy Pettin — Sole Survivor → `Goed`;
- 5/5 positief;
- positieve zaterdagvoorraad: `6 / 42`;
- geen productiebug.

Belangrijke bedieningsregel: de live dagelijkse Ontdek-DNA-sessie moet in Ben's bestaande iPhone-browser/context worden geopend. De ChatGPT in-app-browser heeft een afzonderlijke localStorage en kan daardoor ten onrechte een verse/oude dagstaat tonen. Dit is geen W39-productiebug.

Daarom:
- geen wijziging aan `test/daily.html`;
- geen wijziging aan live index-redirect;
- geen localStorage wissen/migreren;
- geen Day 1/Day 2-ratings muteren;
- Flow-DNA niet wijzigen;
- geen Explorer-proef in de actieve W39-productieroute plaatsen.

## 12. Open punten

1. Engine 29 blijft **prototype/test**, niet productie.
2. De iPhone-navigatiecorrectie van Engine 29 verdient nog één gerichte echte-iPhone-visuele bevestiging.
3. Het horizontale Moskou-spoor is technisch/data-gedreven aanwezig; het is nog geen bewijs dat alle toekomstige zijroutes inhoudelijk of visueel automatisch goed zijn.
4. Bronmetadata en concrete relaties blijven per verhaal/spoor controleerbaar; geen bron = geen feitelijke deur.
5. De bron-/trailregistries zijn de schaalbare richting; verdere content hoort daar te landen in plaats van opnieuw hardcoded schermlogica te maken.
6. Geen noodzaak om nu complete aangrenzende artiestenwerelden vooraf te vullen.
7. Productiepromotie van Explorer is een afzonderlijk later besluit en mag niet stilzwijgend volgen uit een succesvolle Engine-test.

## 13. Concrete hervatpositie

Na deze stopstaat hoeft niet opnieuw administratief te worden gereconstrueerd wat Engines 25–29 deden.

Eerstvolgende werkvolgorde:
1. Engine 29 op één gericht iPhone-moment visueel bevestigen wanneer dat natuurlijk uitkomt;
2. geen volledige regressieproef vragen als alleen die navigatiepositie wordt gecontroleerd;
3. daarna de schaalbare registries verder als basis gebruiken;
4. nieuwe inhoud alleen toevoegen via een aantoonbaar interessant spoor;
5. voorlopig geen productiepromotie;
6. W39 onaangeroerd houden.

## 14. Relation Registry — nieuwe geaccepteerde architectuurrichting

Op 22 september is een nieuwe gemeenschappelijke kennislaag als ontwerpbesluit vastgelegd in:

`docs/MUSIC-DNA-RELATION-REGISTRY-AND-INFLUENCE-PLAYLISTS-V1-2026-09-22.md`

Ontwerpcommit: `e3893ba3a02245aee0d7c8d2565e521aaf89da67`.

**Status:** geaccepteerde architectuurrichting; op 22 september als kleine geïsoleerde proefcomponent gebouwd, nog niet als productiecomponent.

Kern:
**één relatie één keer opslaan + herkomst/bewijs eraan koppelen → daarna hergebruiken in Explorer, Wat hoor ik?, DNA Express, aanbevelingen, statistiek en playlistgeneratie.**

Relatietypen blijven semantisch gescheiden. Een tourrelatie is bijvoorbeeld geen invloedrelatie. De Relation Registry moet uiteindelijk leesbaar, telbaar én selecteerbaar zijn, zodat dezelfde kennis ook invloed-playlists kan voeden.

Nieuwe productrichting:
**🧬 Hoor dit DNA**

Daarbij geldt:
**Relation Registry → inhoudelijke kandidaten → smaakdata → Flow-DNA-volgorde → Spotify-aflevering.**

### AllMusic als praktische relatiebron

AllMusic `Influenced By` en `Followed By` mogen structureel als bruikbare AllMusic-relaties voor DNA-artiesten worden benut. Music DNA is een persoonlijk muziekproject, geen forensisch bewijsarchief.

Werkregel:
- een door AllMusic benoemde invloedrelatie is bruikbaar als AllMusic-invloedrelatie;
- de herkomst `AllMusic` blijft bewaard;
- een primaire artiestuitspraak is welkom wanneer die vanzelf beschikbaar komt, maar hoeft niet standaard voor iedere relatie apart te worden gezocht;
- alleen opvallend vreemde of tegenstrijdige relaties vragen extra controle;
- de grote lijnen moeten betrouwbaar zijn; een fractionele onnauwkeurigheid in een grote muziekrelatiekaart is voor deze persoonlijke toepassing acceptabel.

Dit versoepelt niet de semantiek: `Influenced By`/`Followed By` blijft invloed; tour, cover, producer, plaats enzovoort blijven afzonderlijke relatietypen.

### Presentatieregel voor sterke/meervoudige relaties

De Relation Registry bewaart relatievormen atomair, maar de app herhaalt dezelfde band/artiest/persoon niet per relatievorm.

Kernregel:
**één counterpart één keer zichtbaar; alle relevante relatievormen compleet daarbinnen.**

Voorbeeld: Metallica verschijnt bij Ghost één keer met invloed + tour + cover/opname, niet drie keer op verschillende plekken. Dit voorkomt dat sterke bands de presentatie gaan domineren alleen doordat er veel soorten relaties bestaan.

### Kleinste veilige implementatieproef — gebouwd

De afgesproken Ghost-proef is op 22 september geïsoleerd gebouwd, zonder W39 te wijzigen.

Nieuwe bestanden:
- `test/music-dna-relation-registry-v1.js`
- `test/music-dna-relation-registry-proof-v1.html`
- `test/music-dna-explorer-engine-v30.html`

Registry V1 bevat 11 relaties, waarvan 10 vanuit Ghost. De proef bevat meerdere relatietypen: invloed, professionele invloed, support/tour, cover, studiopersoneel, producer/songwriter, plaats en inspiratie. Bronnen/herkomst reizen met de relatie mee.

Dezelfde registry bewijst nu vier gebruiksvormen:
1. Explorer leest zijn bestaande drie uitgelichte Ghost-deuren uit de centrale registry;
2. `ⓘ Wat hoor ik?`-achtige korte feiten kunnen uit dezelfde records worden afgeleid;
3. relaties kunnen worden geteld/geaggregeerd;
4. invloedrelaties kunnen afzonderlijk worden geselecteerd als kandidaten voor `🧬 Hoor dit DNA`.

Technische controle:
- Relation Registry: syntax PASS;
- Engine 30: syntax PASS;
- multi-use proof page: syntax PASS;
- registrycontrole: 11 relaties totaal, 10 vanuit Ghost, 3 huidige Explorer-deuren, 4 playlist-geschikte invloedsporen.

Belangrijke grens:
**dit bewijst de gegevensarchitectuur, niet een productie-Explorer, productie-Wat-hoor-ik of werkende Spotify-invloedplaylist.**

Engine 30 verandert de goedgekeurde Explorer-presentatie niet fundamenteel. Het belangrijkste verschil zit onder de motorkap: de drie bestaande uitgelichte Ghost-relaties worden nu uit de Relation Registry gelezen in plaats van afzonderlijk in de tab hardcoded te zijn.

Commits:
- registry main: `5c00c7452eac3f20f5efc67cdbbc429cee431afd`
- registry Pages: `f1f08416d9c51c5edd101acf3140bffd741ee24f`
- Engine 30 main, eerste aanleg: `3f278b188f781c3ca6ebe7bb7ab8cb1602ad9bc5`
- Engine 30 Pages, eerste aanleg: `7f0407bfbb5c3c755922c50401bacb0d03c992d1`
- Engine 30 syntaxfix main: `ee15a211e76436ea5ea5658a4ce1871e576802fe`
- Engine 30 syntaxfix Pages: `96e24df9f47641ae9cd35fcf12907fe984d3548f`
- multi-use proof main: `aad55dcd4111f655d112820d21c514c2c6e82528`
- multi-use proof Pages: `4bc98939397c05fd0f34483949b94d533dbac976`

Geen bulkonderzoek of grote invloed-playlistbouw volgt automatisch uit deze proef. Eerst gebruiken we dit kleine model als onderlaag en schalen we lazy op wanneer de toepassing daarom vraagt.

## 15. Stopbesluit

**De projectadministratie is hiermee opnieuw gelijkgetrokken met de bouwstand tot en met Engine 30 én de Relation Registry-proef V1 van 22 september.**

De belangrijke sprong sinds de vorige stopstaat is niet “vijf nieuwe schermversies”, maar de overgang van losse proefpagina's naar een herhaalbare structuur:

**verhaal → bewijslaag → bron**  
en  
**knooppunt → aantoonbare zijdeur → data-gedreven trail → eigen bewijslaag.**

Daarmee kan Explorer groter worden zonder dat iedere nieuwe dwaalroute een nieuw handgebouwd mini-project wordt.


## 16. Engine 30 — gebundelde relatiehubs op echte iPhone bewezen (22 september 2026)

De Relation Registry-bundeling is op 22 september via de bestaande GitHub Pages-route daadwerkelijk op een iPhone getest en visueel bevestigd.

Werkende proefroute:
`test/music-dna-explorer-engine-v30.html`

Herstelcommit na de eerste lege render:
`64c3e2528aacdc815640c28e69f6cf3f922fcb61`

Bewezen op de echte iPhone:
- Engine 30 rendert en navigeert;
- Overzicht, Muziek, Mensen en Verhalen blijven functioneren;
- tab `Verwantschap` toont iedere artiest/counterpart één keer;
- ABBA = 1 zichtbaar hub-item met 1 onderliggend verband;
- Iron Maiden = 1 zichtbaar hub-item met 2 afzonderlijke onderliggende verbanden;
- Metallica = 1 zichtbaar hub-item met 3 afzonderlijke onderliggende verbanden;
- doorklikken naar het relatiedossier bewaart de afzonderlijke feiten en de bronnenkast;
- er is in deze proef geen duplicatie van ABBA, Iron Maiden of Metallica in de relationele hoofdpresentatie.

Daarmee is de presentatieregel nu niet alleen architectonisch maar ook in de echte mobiele Explorer bewezen:

**één counterpart één keer zichtbaar → één rijk relatiedossier → daarachter afzonderlijke relaties en bewijsstukken.**

Belangrijke observatie voor de volgende fase: de huidige labels zoals `influence · formative-professional-influence` zijn nog technische registrytaal. Dat is bewust nog geen eindredactie. Eerst blijft de verzamel-/kennislaag leidend; verhalende presentatie en uiteindelijke UI-redactie volgen later.

### Volgende architectuurproef

Niet opnieuw dezelfde relaties apart modelleren. Gebruik dezelfde Relation Registry nu aantoonbaar voor:
1. `ⓘ Wat hoor ik?` — compacte, gebundelde context zonder dubbele artiestnamen;
2. DNA Express/telling — telbare relatiekennis zonder presentatieduplicatie;
3. daarna pas `🧬 Hoor dit DNA` / playlistselectie.

De bestaande `test/music-dna-relation-registry-proof-v1.html` bevat hiervoor al uitleesroutes (`quickFactBundles`, aggregatie en playlistCandidates); de volgende stap is die route gericht als echte Pages-proef te valideren en waar nodig te verfijnen. W39 blijft volledig onaangeroerd.


## 17. Relation Registry — rijkere schaalproef op echte iPhone bewezen (22 september 2026)

De opgeschaalde Ghost Relation Registry is op een echte iPhone via GitHub Pages visueel bevestigd.

Stand van de getoonde proef:
- 15 atomaire feiten;
- 11 complete artiestverbindingen;
- Explorer-uitlezing: 11 unieke artiesten/counterparts;
- Express kan de invloedrelaties afzonderlijk tellen;
- Hoor dit DNA levert 10 invloed-kandidaten uit 11 Explorer-artiesten;
- Rammstein blijft bewust wel context voor Explorer/Wat hoor ik?, maar geen playlist-kandidaat;
- mobiele controle meldt expliciet: **PASS · alle artiesten blijven uniek**.

Daarmee is ook de schaalregel bewezen: uitbreiding van drie naar elf artiestverbindingen veroorzaakt geen presentatieduplicatie en vereist geen tweede gegevensmodel.

Belangrijk inhoudelijk bewijs: dezelfde relatiekennis kan per toepassing anders worden geselecteerd. Een contextuele show-/carrièrerelatie hoeft niet automatisch een muziekkandidaat te worden. De Relation Registry bewaart dus niet alleen verbindingen, maar maakt semantische selectie mogelijk.

Besluit na deze proef: geen verdere tijd steken in het mooier maken van de architectuur-proofpagina. De proef heeft haar functie vervuld. Volgende bouwslag gebruikt de Registry als kennislaag in de echte Explorer-/verhaalcontext en ontwikkelt de inhoud lazy vanuit interessante Ghost-sporen. W39 blijft onaangeroerd.


## 18. Relation Registry — multi-source dossierregel (22 september 2026)

Nieuwe inhoudelijke regel na mobiele review: een aantrekkelijk interview dat meerdere bands noemt is één bronmoment dat meerdere relaties mag ondersteunen; het mag niet visueel de indruk wekken van meerdere onafhankelijke bevestigingen.

De gewenste volwassen bewijslaag is verticaal per relatie: dezelfde kernrelatie wordt, waar beschikbaar, gevolgd door meerdere onafhankelijke interview-/bronmomenten door de tijd. De waarde zit niet alleen in herhaling maar vooral in aanvullende details. Presentatie moet daarom kunnen tonen: terugkerende kern, tijdlijn van bronmomenten, unieke details per bron en eventuele afwijking/nuance.

Eerste webverificatie bevestigt dit patroon sterk voor:
- ABBA: meerdere Forge-interviews over songwritinginvloed en de concrete Atlantis/Metronome/ABBA-studiolijn;
- Iron Maiden: terugkerend verhaal over muzikale invloed, Live After Death als tour-/werkethiekmodel, later echte tour- en crew-cross-pollination;
- Metallica: jeugd-/professionele leerschool, later tourrelatie en afzonderlijk het ontstaan van Ghosts Enter Sandman-cover.

Belangrijk contrast: Mercyful Fate mag niet kunstmatig even rijk worden gemaakt. Een 2019 interview bevat zelfs een nuttige nuance: toen de interviewer Mercyful Fate/Blue Öyster Cult als hoorbare vergelijkingen noemde, antwoordde Forge dat Ghost volgens hem duidelijk sterker door Voïvod was beïnvloed. Dat soort tegenbewijs/nuance hoort óók in het dossier.

Datamodelrichting: Relation hub → claim/theme → source moments → unique details/nuance. Eén source moment kan meerdere claims/relaties ondersteunen; meerdere source moments kunnen één claim versterken of verfijnen. Geen kunstmatige betrouwbaarheidsscore nodig: de gebruiker moet de herhaling, tijdspreiding en details kunnen zien.


## 19. Buzzcocks als historische/lokale stresstest (22 september 2026)

Na Ghost wordt Buzzcocks de bewuste contrastproef voor de algemene Relation Dossier-regel: jaren 70, Manchester/Bolton, minder moderne exposure, veel historische/lokale relaties en bronnen die verspreid liggen over interviews, archieven, oral history en getuigenissen van andere artiesten.

Eerste bronverkenning toont al meerdere relationele families zonder dat er één centrale moderne bron nodig is:
- oorsprong: Shelley/Devoto worden door Sex Pistols geactiveerd en halen de band zelf naar Manchester;
- plek/scene: Lesser Free Trade Hall als concrete schakel tussen Buzzcocks en de ontluikende Manchester-scene;
- DIY/infrastructuur: Spiral Scratch + New Hormones als onafhankelijke productie/distributie-route;
- producer-netwerk: vroege Martin Hannett-relatie, vóór zijn latere Factory/Joy Division-status;
- doorwerking: Peter Hook beschrijft Shelley expliciet als mentor en de Buzzcocks-tour als beslissend voor Joy Division;
- lokale doorwerking: Shelley noemt o.a. Noel Gallagher/Oasis, Inspiral Carpets en Morrissey als voorbeelden van Manchester-bands/personen die met Buzzcocks verbonden waren;
- songwriting-erfenis: latere artiesten zoals Bob Mould benoemen Shelley's korte, melodische, gender-neutrale liefdesliedjes als concrete invloed;
- institutioneel lokaal bewijs: University of Manchester bewaart een Pete Shelley Archive met circa 500 items.

Ontwerpconclusie: historische/lokale artiesten mogen niet benadeeld worden door minder web-exposure. De dossiermotor moet zowel uitgaande relaties (wie beïnvloedde Buzzcocks?) als inkomende getuigenissen (wie zegt door Buzzcocks/Shelley beïnvloed te zijn?), plaatsen, personen, producers, labels, tours en lokale infrastructuur kunnen combineren. Bronkwaliteit en herkomst blijven zichtbaar; latere getuigenissen zijn niet automatisch gelijk aan directe Shelley/Devoto-uitspraken.
