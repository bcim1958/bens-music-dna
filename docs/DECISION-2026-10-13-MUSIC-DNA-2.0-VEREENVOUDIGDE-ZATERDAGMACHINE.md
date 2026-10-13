# Music DNA 2.0 — Vereenvoudigde zaterdagmachine

Datum: 13 oktober 2026
Status: **GEACCEPTEERD FUNCTIONEEL BESLUIT; IMPLEMENTATIE OPEN / NIET VRIJGEGEVEN**
Bron: Bens expliciete opdracht van 13 oktober 2026 en de afspraken in gesprek “2026-10-09 Music DNA - Herstel & Voortgang”. Dit document beschrijft gewenst gedrag, geen bewezen bestaande werking.

## Aanleiding en voorrang

De dagelijkse aanbieding en verplichte beoordeling vóór de zaterdagoogst maakten levering kwetsbaar. Music DNA scheidt voortaan nieuwe ontdekkingen, vrije beoordeling en definitieve collectie. Muziek en leveringszekerheid blijven centraal; voorraad is alleen een stille bron van vervangers.

Dit besluit vervangt voor toekomstige 2.0-weken:
- de verplichte 7 × 3 dagelijkse aanbod-/beoordelingscyclus, inclusief automatische 3/4-schakeling uit [Positieve zaterdagvoorraad](DECISION-2026-09-13-POSITIEVE-ZATERDAGVOORRAAD.md);
- de uitleg dat iedere nieuwe zaterdaglijst al 21 positieve beoordelingen moet bevatten uit [Fixed 21 / reserve](DECISION-2026-09-13-ONTDEK-DNA-FIXED-21-RESERVE.md). De positieve 21-norm geldt voortaan voor de **definitieve** W-lijst;
- verplichte actuele weekratings als invoerpoort voor DNA Express uit [het productieprotocol](DNA-EXPRESS-WEEKLY-PRODUCTION-PROTOCOL-V1.md).

Oude documenten, gesloten weken, echte ratings en gebruikshistorie blijven bewaard. Integriteitsregels blijven gelden: Ben geeft het oordeel; geen verzonnen positiviteit, geen onbewezen Spotify-ID, geen dubbele voorraadconsumptie of stilzwijgend hergebruik van eerder definitief geleverde tracks. Dit besluit activeert geen oude PR.

## Functioneel contract

| Onderdeel | Afspraak |
| --- | --- |
| Nieuwe officiële W-lijst | Iedere zaterdag 21 nieuwe ontdekkingen, zonder vereiste voorafgaande beoordeling. Deze 21 krijgen de redactionele aandacht van DNA Express en Flow-DNA. |
| Extra kandidaten | Standaard 7 extra ontdekkingen, zo nodig meer voor voorraadopbouw. Een kandidaat is nog geen positieve voorraad. |
| Spotify | Alle 21 + 7 zijn beluisterbaar. Praktische luisterlijst: de officiële 21 eerst, de 7 extra daarna; administratief gescheiden. Geen derde publieke voorraadpublicatie. |
| App | Beoordelen achteraf in eigen tempo, zonder dagelijks quotum of deadline als leveringspoort. Teller begint standaard op 0/28; bij meer extra's verandert de noemer mee. Originele officiële cohort en extra cohort blijven afzonderlijk herkenbaar in de administratie. |
| RAAK / GOED | Officiële tracks blijven in hun definitieve week; positieve extra's worden beschikbare stille voorraad. Andere positieve tracks komen alleen met bewezen herkomst en beschikbaarheid in voorraad. Geen gelijktijdige reservering voor twee definitieve weken. |
| TERUGKOMEN | Naar de kwartaalplaylist **Tweede Kans**; geen positieve vervanger. |
| NIET | Naar het afwijzingsarchief; geen positieve vervanger. |
| Definitieve W-lijst | 21 positieve tracks: behoud van RAAK/GOED uit de oorspronkelijke officiële 21; vervang TERUGKOMEN/NIET met gecontroleerde ongebruikte positieve voorraad. Eigen vaste plek in Music DNA en het Edelsteenkabinet. |
| Historie | De oorspronkelijke officiële 21, hun volgorde, identiteit, week en echte beoordelingen blijven historisch raadpleegbaar. Definitieve vervangingen krijgen herkomst en gebruiksbewijs, zonder de originele selectie te overschrijven. |
| Voorraad | Geen eigen museumtekst, verhaal of publiciteit, ook niet in DNA Express. Maandelijks controleren op echte positieve rating, identiteit/afspeelbaarheid, historie, beschikbaarheid en capaciteit; zo nodig extra kandidaten aanbieden. |
| Zaterdaglevering | Nieuwe W-lijst en DNA Express verschijnen zelfstandig: late beoordelingen, een onvoltooide vorige definitieve lijst of een andere publicatie mogen geen gekoppelde blokkade vormen. Elke publicatie behoudt haar eigen inhoudelijke en technische controles. |
| DNA Express | Première bij **W44, zaterdag 31 oktober 2026**. De officiële nieuwe 21 zijn de weekselectie; ontbrekende ratings blijven onbekend en worden niet als persoonlijke smaakuitkomst beschreven. |
| Overgang | **W42 (17 oktober) en W43 (24 oktober)** worden overbrugd uit gecontroleerde positieve voorraad. Geen voorraadclaim op basis van alleen een schermteller. |

### Onvolledige beoordeling en voorraadtekort

De definitieve vorige W-lijst verschijnt zodra haar officiële 21 beoordeeld zijn en 21 gecontroleerde positieve tracks beschikbaar zijn. Als dit vóór de volgende zaterdag lukt, kan zij op haar vaste plek klaarstaan; als dit niet lukt, blijft zij expliciet open. Onbeoordeelde officiële tracks worden niet automatisch negatief of positief verklaard en niet stilzwijgend vervangen. Nieuwe ontdekkingen en DNA Express blijven onafhankelijk leverbaar.

FIFO blijft de bestaande selectievolgorde voor beschikbare positieve vervangers. Consumptie wordt pas definitief na succesvolle Spotify-controle en duurzame vastlegging van ontvangstbewijs/gebruiksregistratie. Afgebroken levering mag geen track verliezen of tweemaal verbruiken.

### Beoordelingen, Muziekmeter en Tweede Kans

De officiële cohort blijft 21; extra kandidaten en voorraadvervangers wijzigen de oorspronkelijke meetgroep niet. Een onvolledige week toont het werkelijke aantal beoordelingen en wordt niet als 21 complete metingen gepubliceerd. Late beoordelingen blijven aan de oorspronkelijke week gekoppeld.

TERUGKOMEN en NIET zijn de afgesproken producttermen. Bestaande NOG EENS/NEE-waarden moeten bij migratie zonder betekenisverlies naar deze termen worden vertaald, met behoud van bronwaarden en tijdstippen. De exacte technische mapping vereist schemaonderzoek.

Tweede Kans verschijnt eenmaal per kwartaal. De datum, herbeoordeling, herhaalde twijfel en bewaartermijn moeten nog uitgewerkt en getest worden. PR #2 bevat een **niet gemerged offline prototype** met eerste opening 4 januari 2027; dit is geen bewezen productieplanning en wordt hier niet stilzwijgend overgenomen.

## Concreet migratieplan

Alle stappen hieronder zijn **nog uit te voeren**; dit document is geen opdracht om nu code te wijzigen, te mergen of Spotify te muteren.

| Stap | Werk en resultaat | Voorwaarde om door te gaan |
| --- | --- | --- |
| 1 — Nulmeting en behoud | Gebruik actuele main; lees actuele PR-status opnieuw. Maak en controleer volledige export in de echte iPhone-appcontext, inclusief original/current, revision/origin, ratings, voorraadgebruik en eventuele hersteljournalen. Bewaar bron en reservekopie. | Geen conflicten, ontbrekende historie of onopgeloste journalen. Geen oude export terugzetten. Schermwaarde 44/42 is geen voorraadbewijs. |
| 2 — W42/W43 inventaris | Reconcileer al gepubliceerde weken en ongebruikt FIFO met exact Spotify-lidmaatschap en echte ratings. Stel per overgangsweek 21 beschikbare positieve tracks vast, met bron, identiteit, uitsluiting van eerder definitief gebruik en volgorde. Bij twee voorraadweken is gezamenlijke, niet dubbel gereserveerde capaciteit nodig. | Iedere track afzonderlijk bewezen; geen kandidaatpromotie op basis van onderzoek alleen. Bij tekort: week open en gericht nieuw aanbod voor echte beoordeling; geen positiviteit fabriceren. |
| 3 — Gegevenscontract | Ontwerp week-ID + immutable originele 21, extra cohort, ratinggebeurtenissen, definitieve selectie en vervangingsherkomst, reservering/consumptie en aparte publicatiestatus voor ontdekking/definitief/Express. Leg oude-naar-nieuwe termmapping vast. | Review van migratie, idempotentie en conflictafhandeling; oude gesloten weken blijven identiek. |
| 4 — Geïsoleerde migratieproef | Gebruik eerst synthetische fixtures; vervolgens een gecontroleerde kopie van echte gegevens in een afzonderlijke opslagcontext. Vergelijk ratings, originele selecties, firstPositiveAt, playlistUses en lastPlaylistWeek vóór/na. Test onderbreking en hervatting. | Geen verlies of dubbele consumptie. Oude writers/cache kunnen nieuwe toestand niet beschadigen. Geen reset, downgrade naar oude localStorage-writer of blinde import. |
| 5 — Weekaanbod en vrije beoordeling | Bouw zaterdagselectie 21 + standaard 7, Spotify-luisterroute voor alle tracks, teller met dynamische noemer en behoud van late beoordelingen per week. Verwijder dagelijkse quota als poort voor 2.0. | Cohort-/teller-/persistentietests en iPhone/Safari/PWA-proeven slagen. |
| 6 — Definitief en archieven | Bouw behoud/vervanging, stille FIFO-voorraad, maandcontrole, Tweede Kans en afwijzingsarchief; maak vaste vindplek voor definitieve W-lijsten. | Gecontroleerde 21 positieve tracks en exact Spotify-readback; retry levert geen duplicaat of dubbele afboeking. |
| 7 — Onafhankelijke publicatie | Scheid ontdekking, definitief en DNA Express in planning en foutafhandeling. Bereid W44 + Express-première voor met eigen publicatieartefacten, bronnen en apparaat-QA. | Bewijs dat vertraagde ratings of een mislukte andere publicatie de gezonde route niet blokkeren; geen placeholder als LIVE. |
| 8 — Gecontroleerde vrijgave | Pas na afzonderlijke review, geslaagde echte ketentest en expliciete releaseopdracht uitrollen. Bewaar volledige herstelkopie en herstel uitsluitend voorwaarts. | Werkelijke Spotify-volgorde/afspeelbaarheid, duurzame historie en live vindbaarheid bevestigd. Deze documentatie-PR verleent geen releasevrijgave. |

W42 en W43 zijn tijdelijke positieve voorraadleveringen, geen achteraf verzonnen “nieuwe onbeoordeelde ontdekkingen”. Bestaande W42 dag-1/2-selecties en beoordelingen blijven intact. De overgang wordt per week als uitzondering gedocumenteerd. De 2.0-première is het doel voor W44; kalenderdoelen betekenen geen bewezen gereedheid.

## Acceptatiecriteria en bewijs

Alle criteria staan bij vastlegging **OPEN**; gerapporteerde oude regressies gelden alleen voor hun eigen scope.

| ID | Te bewijzen gedrag | Vereist bewijs |
| --- | --- | --- |
| AC01 | Zaterdag exact 21 officiële nieuwe tracks + standaard 7 extra, alle Spotify-beluis­terbaar; geen derde voorraadpublicatie. | Manifest met gescheiden cohorts en exacte IDs; echte accountcontrole van alle 28 in volgorde. |
| AC02 | Geen ratings nodig om nieuwe W-lijst of Express te leveren; late/ontbrekende ratings en mislukte andere publicatie blokkeren niet. | Onafhankelijke fout-/vertragingstests plus echte publicatieroutes. |
| AC03 | Vrij beoordelen; teller 0/28 tot 28/28, aangepaste noemer bij extra aanbod; wijziging van een rating telt niet dubbel. | Tests met willekeurige volgorde, heropenen, late ratings en 10 extra's; iPhone/Safari/PWA-bewijs. |
| AC04 | RAAK/GOED behouden; positieve extra's naar stille voorraad; TERUGKOMEN naar Tweede Kans; NIET naar archief. | Route-/term-mappingtests met echte bronwaarden; geen verkeerde voorraadpromotie. |
| AC05 | Definitief exact 21 echte positieven; alleen gecontroleerde ongebruikte vervangers; onvolledig blijft open. | Voorraadtekort-, onvolledige-rating-, dubbelgebruik- en exact-21-tests; echte Spotify-readback. |
| AC06 | Originele 21, ratings en gesloten historische weken blijven intact; extra's/vervangers vervuilen Muziekmeter niet. | Voor/na-vergelijking en cohorttests, inclusief late ratings. |
| AC07 | Spotify-fout/opslagfout/herstart verliest geen rating, creëert geen dubbel resultaat en consumeert FIFO slechts eenmaal. | Onderbrekings-/concurrency-/retrytests, duurzame ontvangstbewijzen en echte apparaat-/Spotify-ketentest. |
| AC08 | Definitieve week heeft eigen vaste plek; voorraad krijgt geen verhaal, museumtekst of Express-aandacht. | Navigatiecontrole en redactionele/UI-inspectie. |
| AC09 | Maandcontrole rapporteert bewezen beschikbare voorraad en tekorten; voorspelling is geen oordeel. | Gedateerd controlerapport en tests met ongeldige, gebruikte en onbeoordeelde tracks. |
| AC10 | Tweede Kans werkt eenmaal per kwartaal met behoud van beoordelingen en afgesproken herbeoordelingsregels. | Eerst lifecycle-/datumkeuze vastleggen; daarna kwartaalgrens-, archief- en herbeoordelingstests. |
| AC11 | W42/W43 elk 21 gecontroleerde positieve voorraadtracks, zonder dubbele reservering/verbruik of historische overschrijving. | Twee afzonderlijke overgangsmanifesten, reconciliatie en daadwerkelijke Spotify-verificatie. |
| AC12 | W44 en DNA Express-première op 31 oktober hebben gecontroleerde inhoud en werkende vindplek. | Eigen publicatiebewijs per product; bron-, navigatie- en apparaat-QA. |

## Wat nu bewezen is en wat openblijft

Controlebasis op 13 oktober: main `122d064b378707f4968eb93942e6212069920b30`; beide Pages-runs voor deze commit success. Dit bevestigt deployment van die commit, niet de nieuwe opzet. Project-state beschrijft gebruikersbewijs van W42 dag 2, met behouden schermbeeld na heropenen. Volledige iPhone-historie/FIFO en zaterdaglevering zijn niet onafhankelijk bewezen.

Open PR #17 rapporteert 28 offline regressies en synthetische Chromium-proeven voor beschermde zaterdagopslag; automaticGift/delivery blijven ongeconfigureerd en endToEndProven=false. PR #16 legt W42-releasevoorwaarden vast. Geen van beide is main of een 2.0-vrijgave. Overige open PR's: #2, #3, #4, #5, #7, #10 en #11. Oude wijzigingen zijn niet hervat.

Nog te bouwen/onderzoeken/testen: alle migratiestappen en AC01–AC12; exacte actuele voorraad en Spotify-reconciliatie; 2.0-gegevensmodel/cohorts/teller; vrije beoordeling; definitieve vervanging en archieven; maandcontrole; zelfstandige publicatieketens; W42/W43-overgangsmanifesten; W44/Express-publicatieartefacten en echte apparaat-/Spotify-QA.
