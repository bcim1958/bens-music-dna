# Music DNA — stopstaat 21 september 2026

**Status:** canoniek tussenanker na de Explorer-bouw van 21-09-2026  
**Vastgezet:** 21-09-2026, vóór een volgende grote Explorer-bouwslag  
**Productie:** W39 blijft onaangeroerd en operationeel; Explorer blijft een geïsoleerde ontwikkellijn.

## 1. Actuele Explorer-build

- Actuele proefbuild: `test/music-dna-explorer-engine-v24.html`
- Engine 24 main-commit: `9bfac186bb69802f0f330c9ca3470c99f2bf8233`
- Engine 24 Pages-commit: `356bc4152f2f8b3de2f6de23e2b18bcaba203ae5`
- Engine 24 is een **proefstand**, geen automatisch goedgekeurde productieversie.
- GitHub Pages wordt voor Explorer vanuit de afzonderlijke `gh-pages`-branch bediend. Nieuwe Engines moeten daarom op `main` worden gemaakt én afzonderlijk naar `gh-pages` worden gepubliceerd.
- Engine 21 is de goedgekeurde referentie voor de artiesten-/informatiearchitectuur.
- Engine 22 is de goedgekeurde referentie voor album → track-navigatie.
- Engine 23, na de navigatiefix, is de inhoudelijke referentie voor de Rats-trackverdieping en de toon van het Rats-verhaal.
- Engine 24 is een experiment rond externe bronnen en routebehoud. De daarin gekozen directe externe-bronroute is **inhoudelijk inmiddels achterhaald** door het hieronder vastgelegde bronnenregister-principe.

## 2. Nieuwe vaste muziekstructuur

Voor een artiest begint **Muziek** bij albums.

Hoofdregel:
**Artiest → Muziek → Studioalbums (nieuw → oud) → Album → Tracks → Track → verdieping.**

Daarnaast worden andere uitgaven afzonderlijk en herkenbaar aangeboden:
- Live;
- EP's;
- Singles;
- Compilaties.

De basisstructuur wordt bepaald door de artiest en het oeuvre. Persoonlijke Music-DNA-relaties mogen de discografie annoteren en interessante extra deuren laten ontstaan, maar bepalen niet welke basale oeuvre-informatie wel of niet wordt getoond.

Voor Ghost betekent dit onder meer dat `Rats` primair bereikbaar is via:
**Ghost → Muziek → Prequelle → Rats.**

De marker `◆ Music DNA` bij Rats is bruikbaar als contextsignaal, maar verandert deze structuur niet.

## 3. Album → track is nu een echte Explorer-laag

Engine 22 heeft bewezen dat een album geen eindpunt hoeft te zijn. Een track kan een zelfstandig verdiepingspunt worden, met eigen context, verhaal en onderbouwde vervolgroutes.

De goedgekeurde route:
**Ghost → Muziek → Prequelle → Rats.**

De Prequelle-trackvolgorde is gecorrigeerd; `Ashes` is track 1 en `Rats` track 2.

De bredere regel is:
**Artiest → categorie → object → detail → verdieping.**

Iedere laag moet zelfstandig begrijpelijk blijven. Een gebruiker moet zowel één stap terug als rechtstreeks naar een herkenbaar anker kunnen.

## 4. Rats als redactionele referentie

Het verhaal **“Waarom Rats meer is dan ratten”** is door Ben expliciet goedgekeurd als voorbeeld van het gewenste type verdieping.

Waarom dit werkt:
- informatief zonder encyclopedisch te worden;
- prettig en snel leesbaar;
- neutrale muziekmediumstem;
- concrete context en een onthoudbaar inzicht;
- de lezer keert na enkele minuten terug naar het hoofdspoor met een stukje nieuwe muziekkennis.

Nieuwe kwaliteitsmaat:
**Een verdiepingsstuk is geslaagd wanneer de gebruiker na circa 2–3 minuten lezen terugkeert met minstens één interessant, onthoudbaar inzicht.**

De eerdere richtlijn van circa 300–400 woorden blijft bruikbaar, maar is geen doel op zichzelf. Niet kunstmatig opvullen als een korter stuk inhoudelijk sterker is.

## 5. Oriëntatie en terugweg

De goedgekeurde structuur moet het gevoel geven:
**bovenin overzicht → daarna keuze → pas daarna diepte.**

Bij iedere stap dieper blijft een duidelijke terugweg beschikbaar.

Werkend mentaal model:
**Ghost → Muziek → Prequelle → Rats → Verhaal.**

Voorkeur:
- compact klikbaar kruimelpad;
- `← Eén stap terug`;
- direct terug naar het hoofdanker, bijvoorbeeld `⌂ Ghost`.

Kern:
**Verdwalen is het product; verdwaald raken moet worden voorkomen.**

Klikgeschiedenis is technisch; de zichtbare route moet semantisch begrijpelijk blijven.

## 6. Externe bronnen — belangrijke correctie na Engine 24

Engine 24 onderzocht of een externe bron geopend kon worden terwijl de Explorer-route intact bleef. In de echte proef bleek dat onvoldoende: na bezoek aan Revolver en terugkeer kwam de gebruiker niet betrouwbaar terug op de diepe Rats-verhaalpositie.

Daarom is het productprincipe aangescherpt.

Een externe website is letterlijk **buiten** DNA Explorer. We gaan niet proberen te doen alsof die externe pagina onderdeel van onze eigen route is.

Nieuwe voorkeursarchitectuur:
**Verhaal → intern Bronnenregister → oorspronkelijke externe bron.**

De eerste twee stappen blijven binnen Music DNA. Alleen de laatste, expliciete keuze verlaat de app.

In een verhaal komt dus geen dominante directe externe-bronknop meer. Voorkeur voor een subtiele ingang zoals:
- `ⓘ Bronnen geraadpleegd · bronnenregister`;
- of `Hoe weten we dit?`.

In het bronnenregister kunnen per bron staan:
- titel;
- publicatie;
- datum;
- auteur, alleen indien bevestigd;
- compact welke feiten/beweringen ermee zijn onderbouwd;
- pas daar: `↗ Originele publicatie`.

Kernregel:
**Music DNA vertelt het verhaal. Het bronnenregister laat zien waarop het verhaal rust. De oorspronkelijke bron blijft beschikbaar voor wie zelf verder wil zoeken.**

Dit bronnenregister is de beoogde herbruikbare bewijslaag voor Explorer en kan later ook bruikbaar worden voor andere Music-DNA-onderdelen.

## 7. Horizontaal dwalen zonder de hele muziekwereld vooraf te bouwen

Naast verticale verdieping ontstaat horizontale beweging:
**overzicht → detail → verhaal → onderbouwde zijdeur.**

Een verhaal mag nieuwe deuren opleveren, bijvoorbeeld naar een persoon, album, artiest, gebeurtenis of scene, maar alleen als de relatie aantoonbaar is.

Belangrijk schaalprincipe:
**De wereld mag vrijwel onbeperkt groot zijn; de voorbereiding moet begrensd blijven.**

We bouwen dus niet vooraf alle artiesten, personen en relaties volledig uit. Verrijking gebeurt op gebruik en relevantie:
- huidige plek voldoende rijk maken;
- enkele goede, aantoonbare deuren aanbieden;
- pas een volgende wereld verder verrijken wanneer een spoor daar werkelijk komt.

Dit is het lazy-enrichment-principe en voorkomt dat DNA Explorer een eindeloos voorwerkproject wordt.

## 8. Nieuwe taakverdeling

Vanaf 21 september verschuift de samenwerking bewust naar **minder Ben — meer assistent**.

Ben is primair proefrijder/gebruiker:
- luisteren;
- klikken;
- spoorzoeken;
- alleen melden wanneer iets leuk, onlogisch, onduidelijk of ongewenst voelt.

De assistent is primair bouwer/redacteur:
- bestaande ontwerpregels zelfstandig toepassen;
- informatie verzamelen en controleren;
- structuur consequent houden;
- verhalen en relaties selecteren;
- bronnen/provenance bewaken;
- inconsistenties opsporen;
- de volgende logische bouwstap kiezen.

Niet voor iedere kleine afweging opnieuw A/B-keuzes aan Ben voorleggen. Alleen terugkomen bij een echte smaakbeslissing, een wijziging van een goedgekeurd uitgangspunt of een blokkade die niet verantwoord zelfstandig kan worden opgelost.

## 9. W39 blijft strikt geïsoleerd

De Explorer-bouw verandert niets aan de actieve Ontdek-DNA-week.

Op 21 september is W39 Dag 2 op de echte iPhone succesvol afgerond:
- 5 beoordelingen voltooid;
- alle vijf `Raak`;
- positieve zaterdagvoorraad na Dag 2: `4 / 42`;
- geen productiebug waargenomen.

Daarom:
- geen wijziging aan `test/daily.html`;
- geen wijziging aan de live index-redirect;
- geen localStorage wissen of migreren;
- geen Day 1/Day 2-ratings muteren;
- Flow-DNA niet wijzigen;
- geen Explorer-experiment in de actieve W39-productieroute plaatsen.

## 10. Open risico's / nog niet gesloten

1. **Bronnenregister is inhoudelijk besloten maar nog niet als nieuwe Explorer-Engine bewezen.**
2. **Engine 24 routebehoud rond externe sites is geen goedgekeurde oplossing** en moet niet als eindarchitectuur worden voortgezet.
3. Bronmetadata moet bij implementatie worden geverifieerd; auteur/datum niet invullen op basis van aannames.
4. Iedere zijdeur blijft bron-/relatiegebonden: geen aantoonbare relatie = geen deur.
5. Niet te vroeg verbreden naar complete nieuwe artiestenwerelden; eerst één gecontroleerde horizontale route bewijzen.
6. Engine 24 is proefcode. De referenties uit Engine 21, 22 en 23 blijven inhoudelijk leidend waar Engine 24 daarvan afwijkt.

## 11. Concrete hervatpositie

De eerstvolgende Explorer-bouwslag is **Engine 25**.

Doel:
1. uitgaan van de goedgekeurde Ghost → Prequelle → Rats-route;
2. het Rats-verhaal inhoudelijk behouden;
3. de directe externe Revolver-knop uit het normale verhaalspoor halen;
4. een intern Bronnenregister voor Rats toevoegen;
5. externe oorspronkelijke publicatie alleen vanuit dat register aanbieden;
6. terug vanuit het register exact naar het Rats-verhaal laten leiden;
7. breadcrumb/back/home logisch houden;
8. daarna hoogstens één aantoonbare zijroute vanaf Rats gebruiken om horizontaal dwalen te bewijzen;
9. geen complete nieuwe artiestenwereld vooraf bouwen;
10. syntax/navigatie controleren;
11. op `main` bouwen en dezelfde Engine afzonderlijk op `gh-pages` publiceren.

## 12. Stopbesluit

**De bouw van 21 september is hiermee administratief gelijkgetrokken met de inhoudelijke stand.**

De grote vraag is niet meer of Explorer diep kan gaan. Dat is voldoende bewezen.

De volgende kwaliteitsvraag is:
**kan Explorer vanuit een sterke trackverdieping betrouwbaar zijwaarts verder groeien, terwijl de interface rustig blijft en de wereld alleen wordt verrijkt waar de gebruiker werkelijk komt?**

Dat is het hervatpunt.
