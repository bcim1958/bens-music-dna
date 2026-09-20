# Music DNA — stopstaat 20 september 2026

**Status:** canoniek einde-van-de-dag anker  
**Vastgezet:** 20-09-2026, na de avondslag aan DNA Explorer  
**Productie:** W39 blijft onaangeroerd en operationeel; Explorer blijft een geïsoleerde ontwikkellijn.

## 1. Actuele Explorer-build

- Laatste werkende proef: `test/music-dna-explorer-engine-v18.html`
- Engine v18 commit: `e8213f1913e440a75b228857f1910880458a7a5e`
- Actuele graph: `test/music-dna-explorer-graph-v15.js`
- Graph v15 commit: `f16a0622a47ffd6cd9eca413479c84fd6757b81d`
- Ben heeft de technische werking van de voorgaande verbreding (v17) bevestigd.
- v18 introduceert rijkere verhaal-deuren rond Ghost, maar de redactionele teksten van v18 zijn **niet automatisch eindredactie**. De daarna afgesproken neutrale-mediumregel geldt voortaan als hogere norm en moet bij verdere bouw ook op bestaande verhalen worden toegepast.

## 2. Door Ben goedgekeurde productrichting

DNA Explorer is een **spoorzoeker**: vrij kunnen dwalen door muziek, mensen, platen, plaatsen, verhalen, tijd en onverwachte maar aantoonbare verbanden.

Kern:
- verdwalen mag; verloren raken niet;
- iedere deur moet aantoonbaar verklaren waarom hij precies vanuit de huidige plek bestaat;
- één interessante, concrete relatie is waardevoller dan meerdere magere varianten van hetzelfde verband;
- variatie in relatievorm is onderdeel van de kwaliteit: samen getourd, opname/cover, personeelsverbinding, producer/songwriter, invloed, plaats/tijd, bijzondere gebeurtenis, enz.;
- “X is fan van Y” kan incidenteel aardig zijn, maar drie vrijwel identieke fan-relaties naast elkaar zijn te mager;
- geen aantoonbare relatie = geen deur;
- onbekend/dun is toegestaan; Explorer verzint geen verbindingen.

## 3. Redactionele standaard — definitief

Een geopend Explorer-verhaal leest alsof het in een **goed, neutraal muziekmedium** staat.

Richtlijn:
- normaal circa **300–400 woorden**;
- zacht bereik 200–500 alleen wanneer de inhoud daar werkelijk om vraagt;
- Nederlands;
- journalistiek, aansprekend, direct en informatief;
- voldoende context en enkele onthoudbare feiten/beelden;
- geen encyclopedische opsomming;
- geen kunstmatige dramatiek;
- concrete feiten, gebeurtenissen, credits en citaten niet verzinnen.

Belangrijkste avondbesluit:
**De selectie mag persoonlijk zijn; het verhaal zelf is neutraal.**

Dus in de lopende artikeltekst:
- geen Ben;
- geen “jouw smaak”;
- geen “in jouw Music DNA”;
- geen uitleg waarom iets “voor DNA Explorer” een mooie deur is;
- geen systeemtaal zoals “hier kun je verder naar...”;
- geen zelfhulp-/aanbevelingstaal.

Music DNA/Explorer bepaalt achter de schermen welk verhaal verschijnt. Na het artikel tonen de interface en de deuren vanzelf welke onderbouwde vervolgroutes beschikbaar zijn.

## 4. Verhaalarchitectuur

Gewenste ritme:
**korte aantrekkelijke deur → rijk verhaal van circa 300–400 woorden → nieuwe onderbouwde deuren.**

Het artikel is geen navigatie-uitleg. Het moet zelfstandig interessant zijn. De navigatie staat buiten de journalistieke tekst.

H.E.A.T en Black Sabbath blijven belangrijke toonreferenties, maar ook bestaande teksten worden bij hergebruik getoetst aan de aangescherpte neutrale-mediumregel.

## 5. Inhoudelijke lessen uit Ghost-proef

De eerste verbreding bewees dat meer deuren technisch eenvoudig is, maar ook dat kwantiteit geen rijkdom is.

V17 had onder meer drie “Forge is fan”-routes. Ben wees terecht aan dat dit inhoudelijk te eenvormig en te mager was.

V18 verving dat principe door rijkere soorten verbindingen, onder meer:
- Ghost / Iron Maiden: gezamenlijke tour + Forge's eerdere fascinatie;
- Ghost / Metallica: tour + Ghosts versie van Enter Sandman;
- bijna-zangers van Ghost: kandidaten die Forge aanvankelijk benaderde voordat hij zelf de zangrol op zich nam.

De inhoudelijke richting is goed; de artikelen moeten vanaf nu volledig in de neutrale muziekmediumstem worden geschreven. De laatste feedback op het Iron Maiden-verhaal maakte dit expliciet.

## 6. Bronnen en betrouwbaarheid

- Concrete relaties moeten brongebonden zijn.
- Bewijs hoort conceptueel bij de **edge/relatie**, niet alleen bij een node.
- Een playlistlidmaatschap bewijst aanwezigheid in een Music-DNA-relatieset, niet automatisch invloed of muzikale gelijkenis.
- Geografie bewijst geen muzikale verwantschap.
- Actuele feiten vereisen actuele broncontrole.
- Speelse formulering en verrassing zijn welkom, maar concrete feiten, quotes, gebeurtenissen en credits mogen niet worden verzonnen.
- Bron/provenance moet schaalbaar mee kunnen groeien met de graph.

## 7. Gestructureerde kennis en toekomstig zoeken

De eerder vastgelegde editorial/search-metadata blijft uitgangspunt:
- artiesten;
- personen;
- tracks;
- albums;
- plaatsen;
- genres/stijlen;
- tijdvakken;
- relaties;
- zoektermen;
- bronnen.

Doel op termijn: **Zoeken in Music DNA** kan Explorer, DNA Express en eigen DNA-playlists/Specials verbinden.

Nog niet bouwen als afzonderlijke zoekfunctie; eerst voldoende kwalitatieve kennis en relaties.

## 8. Spotify — huidige grens

Een Spotify-link opent de juiste playlist/bestemming, maar start de gekozen muziek niet betrouwbaar automatisch. Tijdens de iMac-proef bleef de reeds spelende track gewoon doorspelen.

Daarom:
- UI-tekst: “Open deze playlist in Spotify”;
- niet suggereren dat een link Click & Play is;
- remote Web API Click & Play is voor nu geparkeerd;
- W39 wordt hiervoor niet aangepast.

## 9. Experience Centre / bredere architectuur

De eerder gekozen ruimtelijke metafoor blijft geldig:
- Music DNA = overkoepelende wereld;
- Ontdek DNA = dagelijkse ontdekking;
- DNA Explorer = vrij spoorzoeken;
- DNA Edelsteenmuseum = bewaarde ontdekkingen/reizen;
- DNA Express = actueel/redactioneel medium, als krantentent buiten het Experience Centre;
- Music DNA Experience Centre = mogelijke entree/metafoor voor het geheel.

Dit is geen opdracht om de bestaande goedgekeurde navigatie nu al te vervangen.

## 10. Productiestatus W39

Explorer-werk blijft geïsoleerd van de lopende W39-productie.
- Geen wijziging aan `test/daily.html` of de live W39-route.
- Geen localStorage wissen/migreren.
- Geen ratings of afgeronde Day 1-data muteren.
- iPhone-productiekandidaat blijft tijdens actieve W39 bevroren tenzij herstel noodzakelijk is.

Eerstvolgende operationele controle: **W39 Dag 2 op maandag 21 september 2026**. Bij hervatting van de dagelijkse flow eerst het echte dagscherm controleren vóór beoordelingen.

## 11. Eerstvolgende Explorer-bouwpunt

Na de W39 Dag-2-controle kan de Explorer-lijn verder met:

1. de Ghost-buurt redactioneel opschonen volgens de neutrale-mediumregel;
2. de sterkste verschillende relatievormen selecteren in plaats van veel gelijksoortige deuren;
3. ieder gekozen verhaal als zelfstandig 300–400-woorden muziekstuk schrijven;
4. bronnen/provenance per relatie robuuster vastleggen;
5. vanuit die verhalen nieuwe, aantoonbare deuren laten ontstaan;
6. pas daarna de wereld verder verbreden naar nieuwe artiesteneilanden.

## 12. Stopbesluit

**20 september is inhoudelijk gesloten.**

De techniek van vrij dwalen is voldoende bewezen om niet opnieuw als hoofdvraag te behandelen. De volgende kwaliteitsvraag is inhoudelijk: kan Explorer op schaal verrassende, gevarieerde en betrouwbare muziekverhalen aanbieden zonder te vervallen in oppervlakkige links, herhaling of systeemtaal?

Dat is het vertrekpunt voor de volgende sessie.
