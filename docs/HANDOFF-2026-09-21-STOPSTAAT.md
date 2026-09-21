# Music DNA — stopstaat 21 september 2026

**Status:** canonieke stopstaat na Explorer Engine 29  
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

Op 21 september is W39 Dag 2 op de echte iPhone succesvol afgerond:
- 5 beoordelingen;
- alle vijf `Raak`;
- positieve zaterdagvoorraad: `4 / 42`;
- geen productiebug.

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

## 14. Stopbesluit

**De projectadministratie is hiermee opnieuw gelijkgetrokken met de bouwstand tot en met Engine 29.**

De belangrijke sprong sinds de vorige stopstaat is niet “vijf nieuwe schermversies”, maar de overgang van losse proefpagina's naar een herhaalbare structuur:

**verhaal → bewijslaag → bron**  
en  
**knooppunt → aantoonbare zijdeur → data-gedreven trail → eigen bewijslaag.**

Daarmee kan Explorer groter worden zonder dat iedere nieuwe dwaalroute een nieuw handgebouwd mini-project wordt.
