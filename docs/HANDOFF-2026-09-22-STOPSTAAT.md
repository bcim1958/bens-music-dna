# Music DNA — canonieke stopstaat t/m 25 september 2026

> **Actuele hervatplek (25-09-2026):** de keten **Genre DNA → Living Master → bronverificatie → Relation Registry → DNA Explorer / DNA Express** is de canonieke data-architectuur. AllMusic heeft primaat voor muzikale classificatie; de Master is de levende, provenance-bewuste kennisbron; verificatie is niet-destructief. De eerstvolgende bouwlijn is **Master 100% / het hart van de machine**: identiteit, bronrecords, feiten, bewijs/provenance, relaties, dekking/betrouwbaarheid en derived insights. Ontdek DNA/W39 blijft een afzonderlijke dagelijkse deliverylijn.

**Status:** GREEN — canonieke hervatstand actueel. Geen productiepromotie.
**Actieve proefbasis:** Engine 30 + Relation Registry V1; Shiraz Lane-vulproef en story/discovery-reading-proef behouden; weekmotor blijft afzonderlijke deliverylijn.

## 1. Autoriteit, scope en bouwstop

Dit is de actuele canonieke stopstaat en hervatplek voor Music DNA / Relation Registry / DNA Explorer. Hij vervangt de actuele status en hervatinstructies uit [de oude stopstaat](HANDOFF-2026-09-21-STOPSTAAT.md), [de vroege 22-september-handoff](HANDOFF-2026-09-22-FRESH-CHAT.md) en de historische projectkaart van 15 september. Hun eerdere besluiten en gesloten werk blijven behouden voor zover hieronder niet expliciet bijgewerkt.

De rode Health Check kwam door achterstallig projectgeheugen: na handoff `32201841` volgden 28 commits, waarvan 19 na `3c2c0dd4`. De afzonderlijke commits en enkele aanvullingen in de oude stopstaat waren aanwezig, maar geen samenhangende actuele eindstaat. Bij dit herstel is bovendien een concrete integriteitsfout gevonden en opgelost; zie §7. De oorspronkelijke basis wordt dus niet achteraf als foutloos beschreven.

**Bouwstop tijdens deze herstelopdracht:** geen nieuwe schermen, productfuncties, werelden, playlists of W39-aanpassingen. GREEN sluit deze herstelblokkade af; de volgende fase is **vullen en beproeven, niet opnieuw ontwerpen**, en begint niet automatisch in deze opdracht.

**W39:** de sessie van 23-09-2026 is volgens Ben al voltooid en staat geheel los van dit herstel. Geen rating, voorraad, weekbestand, daily-route, index-redirect, Flow-DNA of gebruikersopslag is gewijzigd of gemigreerd. Geen W39-sessie in een andere browser geopend.

## 2. Actuele proefbuild en behouden basis

- Actuele Explorer-proefbuild: [Engine 30](../test/music-dna-explorer-engine-v30.html).
- Feitelijke kennislaag: [Relation Registry V1](../test/music-dna-relation-registry-v1.js).
- Uitlees-/auditdashboard: [Registry proof](../test/music-dna-relation-registry-proof-v1.html).
- Eerdere bundelpresentatieproef: [relation dossier proof](../test/music-dna-relation-dossier-proof-v1.html).
- Architectuurbesluit: [Relation Registry & invloed-playlists](MUSIC-DNA-RELATION-REGISTRY-AND-INFLUENCE-PLAYLISTS-V1-2026-09-22.md).
- Trail- en bronneninfrastructuur: `test/music-dna-explorer-trails-v1.js` en `test/music-dna-explorer-story-sources-v1.js`.

Engine 29 is een historische voorloper, niet de hervatbuild. Engine 30 blijft geïsoleerde test/prototypecode; een geslaagde proef betekent geen productie-Explorer, productie-Wat-hoor-ik of werkende Spotify-invloedplaylist. De afzonderlijke `gh-pages`-publicatielijn is historisch vastgelegd. De huidige `.github/workflows/pages.yml` bevat echter ook een Pages-deploy op push naar **main**. Deze herstelopdracht wijzigt die configuratie niet en kan dus die bestaande workflow activeren; een main-commit alleen bewijst geen geslaagde Pages-publicatie of toestelvalidatie. W39-bestanden blijven inhoudelijk identiek.

Behouden fundament uit de eerdere stopstaat:
- artiest → Muziek → studioalbums nieuw naar oud → album → tracks → verdieping; andere uitgaven afzonderlijk;
- Engine 21/22 als informatiearchitectuurreferenties en Engine 23/Rats als redactionele referentie;
- verhaal → intern bronnenregister → oorspronkelijke bron;
- data-gedreven zijpaden, met Rats → Moskou 1989 als begrensde proef;
- circa 2–3 minuten lezen moet minstens één onthoudbare vondst opleveren; circa 300–400 woorden is een richtlijn, geen verplicht sjabloon;
- selectie persoonlijk, verhaal neutraal; lazy enrichment, geen onbegrensde voorbouw;
- Ben is proefrijder; de assistent bewaakt bronnen, samenhang en volgende logische stap.

## 3. Wat op 22 september is gebouwd en bewezen

### Registry en één zichtbare counterpart

De Registry is de feitelijke kennislaag: entiteiten, afzonderlijke semantisch zuivere relaties en bewijs. De catalogus/Master blijft de muziek- en identiteitsbasis. Relaties worden één keer bewaard en kunnen Explorer, korte feiten, tellingen/Express en kandidaatselectie voeden.

**Eén counterpart één keer zichtbaar binnen dezelfde context, met alle onderliggende relaties gebundeld.** Een invloed-, tour- en coverrelatie blijven drie feiten, maar vormen één zichtbaar dossier. Een tour is geen invloed; een playlistlidmaatschap bewijst geen invloed. Bronherkomst blijft bij de feiten; geen aantoonbaar verband betekent geen feitelijke Explorer-deur.

`relationshipBundles` en `quickFactBundles` bundelen; aggregatie dedupliceert waar nodig unieke artiest→invloed-combinaties. Engine 30 toont in zijn huidige Verwantschap-tab artiest-counterparts. De bredere knooppuntvisie in §5 is geaccepteerd, maar niet voor alle typen als UI gerealiseerd.

### Geslaagd iPhone- en schaalbewijs

De oude stopstaat §§16–17 en commits `780aa6f7` en `9a7edfb6` leggen echte iPhone-proeven vast:
- na syntaxherstel `64c3e252` rendert en navigeert Engine 30;
- ABBA, Iron Maiden en Metallica verschijnen elk één keer met meerdere afzonderlijke feiten in hun dossier;
- Overzicht, Muziek, Mensen, Verhalen en doorklikken naar dossier/bronnenkast zijn bevestigd;
- de schaalproef breidde uit van drie naar elf artiestverbindingen: toen 15 atomaire Ghost-feiten, elf unieke artiesten en tien invloed-playlistkandidaten;
- Rammstein bleef context voor podium/ambitie, zonder automatisch playlistkandidaat te worden.

Dit zijn **historische proefmetingen**, geen huidige aantallen en geen nieuwe iPhone-test op 23 september. De eerdere lege render is hiermee achterhaald. De algemene schaalregel is bewezen binnen deze proef, niet voor iedere toekomstige wereld.

### Narratieve relatiegroepen

`3c2c0dd4` ordent de gebundelde dossiers naar menselijke betekenis: **Muzikale wortels, Gitaar-DNA, Van voorbeeld naar podium, Gedeelde muziek, Podium & ambitie**, met **Invloeden** en **Andere verbindingen** als aanvullende groepen.

Geaccepteerd principe: de kennislaag mag fijnmazig zijn; Explorer maakt de muzikale betekenis herkenbaar. De bestaande groepsnamen zijn de huidige proefpresentatie, geen bevroren universele taxonomie. Het herstel van de Maiden-cover maakt ook voor Maiden de bestaande groepregel “Gedeelde muziek” van toepassing; de renderer zelf is niet gewijzigd.

### Multi-source dossiers en verschillende verhaalvormen

Eén interview met meerdere artiestnamen blijft één bronmoment, geen reeks onafhankelijke bevestigingen. Meerdere bronmomenten mogen samen een relatie verdiepen, met tijdspreiding, unieke details, nuance en tegenspraak. Niet ieder dossier hoeft even rijk te worden.

De drie actuele Registry-verhalen gebruiken verschillende vormen:
- **ABBA — Niet de klank, wel het liedje:** thematische vondsten rond songwriting en studiowereld;
- **Iron Maiden — Van atlas naar tourbus:** bronmomenten/ontwikkeling van jeugdmodel naar professionele nabijheid en cover;
- **Metallica — Van maatstaf naar eigen versie:** hoofdstukken van voorbeeld via podium naar opname.

Sinds `09603880` en `013091d9` staat de inhoud van deze **relatieverhalen in Registry**, en leest Engine 30 die via `storyFor` en de generieke renderer. Dit is geen claim dat alle oudere Explorer-verhalen al volledig uit Engine-code zijn gehaald.

### Atomic traceability, audit en self-test

Verhaalitems dragen relatie-ID's én bron-ID's. `traceStory` resolveert die naar records; `storyCoverage` maakt benut/onbenut zichtbaar. De structurele `integrityReport` controleert ontbrekende relaties/bronnen en aansluitingen tussen verhaalbronnen en gekoppelde relaties. Ongebruikte bronnen of feiten zijn voorraad, niet automatisch fouten.

De niet-persistente `integritySelfTest` brengt tijdelijk een defectprobe in, controleert herkenning en verwijdert hem weer. Het dashboard toont audit en self-test. Dit bewijst structurele herleidbaarheid, **niet automatisch de inhoudelijke juistheid van iedere zin of bronmomentdatering**.

### Untold discovery stock en deterministische queue

Voïvod is sinds `397a1099` expliciete **untold discovery stock**: een brononderbouwde relatie, nog geen Registry-verhaal. De Voir-bron levert verschillende vondsten: diepe invloed, eigenzinnigheid en de gesigneerde spijkerjas. Ook de Blue Öyster Cult-nuance staat als vondst klaar.

Sinds `dc05bd82` zijn er vier getypeerde unread-vondsten: één `new-fact`, één `enriching-detail`, één `story-angle`, één `nuance`. Sinds `c95561cd` rangschikt de queue deterministisch op type, bron-/relatieaantal en cluster, met ID als tie-breaker en maximaal één vondst per counterpart per queue.

Dat is een kleine kandidatenproef, geen volwaardige motor voor afwisseling tussen werelden.

## 4. Feitelijke kennis versus presentatiestatus

**“Dit verband bestaat en is bewezen” verandert niet doordat Ben het leest.**

`2bac0185` voegt een apart state-object toe via `createDiscoveryState`, `markDiscovery`, `discoveryQueueForState` en `discoveryRotation`. De toestanden `unread`, `shown` en `read`, plus `shownAt`/`readAt`, beschrijven presentatie/gebruik; ze mogen geen feiten, bewijs of relaties herschrijven. De verificatie bevestigt dat markeren als shown/read de Registry intact laat.

Precieze grens van de proef:
- discoveryrecords bevatten nog `status:"unread"` als startwaarde; dit is geen feitelijke muziekeigenschap of opgeslagen leesgeschiedenis;
- de oude stock/candidate-API leest die startwaarden; state-aware uitlezing filtert daarna op het aparte state-object;
- geen duurzame persoonlijke opslag, apparaatoverschrijdende synchronisatie of volledige UI-leesregistratie gebouwd;
- één counterpart per queue verhindert nog niet dat dezelfde wereld bij de volgende oproep opnieuw verschijnt;
- “untold” (nog niet redactioneel uitgewerkt) en “unread” (presentatiestatus) zijn verschillende begrippen.

## 5. Geaccepteerde ontwerpbesluiten uit de afsluitende bespreking

Bron van deze acceptatie: de afsluitende bespreking in **2026-09-22 — Music DNA — Relation Registry / Explorer vervolg**, gesprek `6ab28764-a57c-83eb-b136-281ae9cfa584`, plus Bens expliciete herstelopdracht van 23 september. Deze afspraken worden hier vastgelegd als ontwerpbesluiten; gespreksexperimenten worden niet opgewaardeerd tot gebouwde functies of nieuw bewezen historische feiten.

1. **Explorer bouwt muzikale werelden, niet alleen artiestenpagina’s.** Knooppunten kunnen artiesten, personen, producers, labels, plaatsen, zalen, albums, tracks, tours, gebeurtenissen en ontmoetingen zijn.
2. **Eén bron ≠ één feit ≠ één verhaal.** Eén bron kan meerdere vondsten dragen. Een vondst kan een detail, nuance, verbinding of verhaalhoek blijven; niet alles wordt een artikel.
3. **Materiaal mag ongebruikt op voorraad blijven.** Bekend, bruikbaar, getoond en gelezen vallen niet samen. Niet alles onmiddellijk uitserveren.
4. **Terugkomen moet nieuwe deuren openen.** Nieuwe invalshoeken en nog ongebruikte feiten leveren terugkeerwaarde. Dezelfde anekdote parafraseren telt niet als nieuwe ontdekking; één canonieke inhoudskern, elders functioneel verwijzen.
5. **Diepte zonder tunnelvisie.** Een rijke Ghost-voorraad mag Explorer niet monopoliseren. Afwisseling tussen artiesten, generaties, plaatsen en relaties hoort boven de kennislaag.
6. **Kleine, lokale of obscure artiesten niet benadelen wegens lagere exposure.** Minder materiaal is geen lagere inhoudelijke status. Geen kunstmatig opgeblazen dossier of roem-/emotionele voorspellingsscore.
7. **RAAK kan een nieuw Explorer-toegangspoortje zijn.** Het is een reden om zorgvuldig te onderzoeken, geen bewijs voor een muzikale relatie en geen automatische wereldgenerator.
8. **Drie verschillende proefwerelden:** Ghost = diepte; Buzzcocks = breedte/netwerk; Shiraz Lane = obscure RAAK-instroom. Ghost heeft werkende Registry-proefbouw. Buzzcocks en Shiraz Lane zijn hier onderzoeks-/ontwerpcontrasten, geen volledig ingebouwde Registry-werelden.
9. **Buzzcocks / Manchester / Derry / Belfast blijft geparkeerde historische/lokale stresstest.** Personen, DIY/labels, producers, zalen, tours en inkomende getuigenissen mogen samen een wereld vormen. De Noord-Ierland-route is geen opdracht om nu verder uit te bouwen. Persoonlijke reis-/concertassociaties blijven apart van algemene muziekhistorische feiten.
10. **De fundering blijft:** bronnen → afzonderlijke feiten → verbindingen → rijke knooppunten → vondsten/verhalen → Explorer. Daarboven: voorraad → dosering → afwisseling → terugkeer → opnieuw ontdekken. Geen nieuwe theoretische ontwerpronde.

AllMusic `Influenced By`/`Followed By` blijft een bruikbare relatiebron met expliciete herkomst; niet voor iedere relatie apart een primair interview eisen. Vanzelf gevonden sterkere bronnen toevoegen en opvallende tegenspraak onderzoeken. Semantische zuiverheid blijft verplicht.

## 6. Commitspoor tot en met 2bac0185

| Commit(s) | Betekenis |
| --- | --- |
| `32201841` | Vroege fresh-chat handoff; nu vervangen als hervatplek. |
| `74f60ac8`, `82350415`, `64c3e252`, `780aa6f7` | Gebundelde Engine 30-hubs, syntaxherstel en iPhone-bevestiging. |
| `27213881`, `11600782`, `e7332f93`, `9a7edfb6` | Multi-use bundelinvariant, rijkere bronnen, geen vaste drie-artiestaanname, geslaagde schaalproef. |
| `3c2c0dd4` | Narratieve groepen. |
| `df077e1e`, `0b2ecd5c` | Multi-source dossierregel en Maiden-verhaal. |
| `cd046c89`, `0bb0b0ab` | Buzzcocks-stresstest en variatie/terugkeer zonder dubbeling. |
| `4a5b0608`, `e8aab117` | Verschillende ABBA-/Metallica-vormen en generieke renderer. |
| `09603880`, `013091d9` | Relatieverhaalinhoud naar Registry; Engine leest die laag. |
| `941eaf16`, `ab87f274`, `a20866b3` | Traceability en bronkoppelingen; Maiden-coverreferentie bleek incompleet, zie §7. |
| `49be0155`, `a783f37f`, `824e2509`, `42428cbf` | Integrity audit, dashboard en niet-persistente self-test. |
| `397a1099`, `dc05bd82`, `c95561cd` | Voïvod, typed unread stock en deterministische queue. |
| `2bac0185` | Apart lees-/presentatiestate-object naast feitelijke Registry. |

## 7. Herstelbevinding en GREEN Health Check

Op de ongewijzigde basis `2bac0185` gaf de echte audit **1 error, 1 warning, 5 info**. Het Maiden-verhaal verwees sinds `ab87f274` naar `rel-ghost-maiden-phantom-cover`, maar het relatieobject ontbrak. De commitnaam suggereerde meer dan de patch werkelijk toevoegde.

Minimale correctie op 23 september: dat bestaande verhaalfeit is als coverrelatie Ghost → Iron Maiden toegevoegd onder exact het reeds gebruikte ID, met de bestaande bron `rollingstone_uk_phantomime_2023`. De [Rolling Stone UK-bron](https://www.rollingstone.co.uk/music/ghosts-tobias-forge-on-the-swedish-groups-eclectic-new-phantomime-ep-29546/) is opnieuw gelezen en bevestigt de opname, eerdere tours en persoonlijke band. Geen verhaaluitbreiding, nieuwe functie of nieuwe bronrecord; Registry-versie nu `2026-09-23.1`.

Reproduceerbare controle vanaf de repositoryroot:

```sh
node test/relation-registry-health.cjs
```

Uitgevoerd op de herstelde inhoud:
- **PASS:** audit voor drie relatieverhalen, **0 errors / 0 warnings / 5 info**; de vijf informatieve meldingen zijn ongebruikte bronnen/voorraad.
- **PASS:** self-test herkent de drie opzettelijke defectcodes en laat de Registry ongewijzigd achter.
- **PASS:** Maiden-cover resolveert naar relatie én bron; relatie-ID's zijn uniek en entiteit-/bronverwijzingen bestaan.
- **PASS:** Explorer-/korte-feitenbundels bevatten geen dubbele counterpart.
- **PASS:** Voïvod blijft zonder Registry-verhaal; vier discoveryrecords blijven behouden.
- **PASS:** queue is herhaalbaar, dedupliceert counterparts en sluit shown/read-vondsten uit; kennis en startvoorraad veranderen niet.
- **PASS:** syntax van Registry en inline scripts van Engine 30 en Registry proof.
- Actuele herstelde telling: **21 relaties totaal, 19 aan Ghost, 12 artiest-counterparts** (plus Zweden als plaats in de algemene API), drie relatieverhalen en vier discoveryrecords.
- Canonieke ingangen verwijzen naar deze stopstaat; wijzigingen zijn beperkt tot administratie, bestaand integriteitsherstel en controle. W39 blijft buiten scope.

GREEN betekent hier: **code + geregistreerde bronnen + proefbewijs + ontwerpbesluiten + hervatplek vormen weer één expliciete toestand**. Het betekent geen volledige inhoudelijke broncertificering, nieuwe toesteltest, productie-release of afwezigheid van onderstaande ontwikkelpunten.

## 8. Open grenzen en exacte hervatplek

- De bronmomentlabels van Maiden gebruiken voor 2017/2018/2019–2022 nog hetzelfde SLUG-record; de ABBA-detailclaim verwijst nog naar een brede invloedrelatie. Structurele traceability is dus aanwezig, maar niet ieder klein detail heeft al een eigen atomair feit of apart bronmoment. Bij vullen gericht preciseren, geen kunstmatige onafhankelijke bevestigingen suggereren.
- Discovery-traceability wordt niet volledig door de huidige story-audit afgedekt. De Blue Öyster Cult-nuance verwijst bijvoorbeeld naar Voir, terwijl de gekoppelde foundation-relatie Louder als bewijs heeft. Beide referenties bestaan; de spanning/nuance vraagt latere inhoudelijke precisering.
- De proefrangschikking gebruikt bron-/relatieaantallen; eerlijke kansen voor obscure werelden en afwisseling over werelden heen zijn nog niet bewezen.
- Duurzame leesstatus, recente-herhalingpreventie over sessies, brede knooppuntnavigatie en uiteindelijke redactionele vorm zijn nog geen afgeronde productfuncties.
- Historische iPhone-bewijzen blijven geldig voor hun toenmalige proef; geen claim dat alle latere wijzigingen opnieuw op toestel zijn beoordeeld.
- Productiepromotie, AllMusic-import, invloed-playlists en Spotify-aflevering blijven afzonderlijke latere stappen.

**Volgende fase na dit groen: vullen en beproeven.** Begin bij een klein brononderbouwd dossier in de bestaande constructie; gebruik Ghost als dieptemaat, Shiraz Lane als RAAK-instroomproef en Buzzcocks als geparkeerd contrast voor breedte. Bewaar ongebruikte vondsten, toets bundeling/traceability/variatie en leg de opbrengst vast. Alleen een concreet aangetoonde blokkade rechtvaardigt een ontwerpwijziging. Geen bulkimport, automatische productiepromotie of heropening van W39.

## 9. Releasejaar-integriteit — regressie gevonden en structureel afgevangen (23 september 2026)

Tijdens W39 Dag 5 signaleerde Ben dat Budgie — `Breadfan` ten onrechte als 2018 werd getoond. Controle van de W39-kandidatenbron bevestigde de oorzaak: `releaseYear` kon het jaar van de Spotify-compilatie/heruitgave dragen in plaats van het canonieke oorspronkelijke releasejaar van de gekozen opname. Dit was geen geïsoleerde Budgie-fout.

W39 is daarom op bronlaag gecorrigeerd in commit `838932ab`: negen kandidaten kregen hun oorspronkelijke jaar terug; waar de zichtbare release een latere verzamelaar was, is ook de oorspronkelijke release gebruikt. Voor Budgie is dat nu **1973 — Never Turn Your Back on a Friend**. De Spotify-track-ID blijft de afspeelroute en bepaalt niet langer de historische datering.

Vaste semantische regel vanaf nu: **`identity.releaseYear` = canoniek oorspronkelijk releasejaar van de bedoelde opname/songversie; nooit automatisch het jaar van een Spotify-remaster, heruitgave, compilatie of latere digitale verpakking.** Een werkelijk nieuwe opname/remake/liveversie houdt uiteraard zijn eigen jaar.

W40-staging legt deze betekenis nu expliciet vast in commit `02affacf`, met een gate-notitie voor verdachte combinaties van titel/editie/jaar. Dit is de eerste structurele beveiliging; een jaartal dat numeriek plausibel is kan inhoudelijk nog steeds fout zijn. Daarom blijft vóór wekelijkse levering een inhoudelijke controle nodig voor kandidaten met signalen als `Remastered`, `Greatest Hits`, `Anthology`, `Best Of`, jubileum-/compilatietitels of een duidelijk latere digitale release.

**Open vervolg:** W40 bevat zichtbaar meerdere van zulke verdachte records en moet vóór productie inhoudelijk worden doorgelicht. Niet blind massaal herschrijven: eerst per gekozen opname vaststellen of het om de oorspronkelijke opname, remake, liveversie of cover gaat. Deze controle hoort voortaan bij de wekelijkse delivery gate, vóór presentatie aan Ben.

## 10. Canonieke tijdlaag voor heel Music DNA — Ontdek-DNA én Explorer

De W39-regressie rond releasejaren is geen lokaal weeklijstprobleem. Dezelfde foutklasse kan DNA Explorer raken, omdat Explorer informatie uit uiteenlopende bronnen combineert: oorspronkelijke albums/singles, streamingcatalogi, remasters, heruitgaven, compilaties, jubileumedities, live-uitgaven, interviews en discografieën.

Daarom geldt de releasejaarregel vanaf nu **systeemwijd**. Ontdek-DNA, DNA Explorer, playlists, verhalen/vondsten en toekomstige tijdlijnen mogen niet elk zelfstandig een jaartal interpreteren.

### Objecten die uit elkaar moeten blijven

1. **Werk/song** — de compositie of het muzikale werk als identiteit.
2. **Opname/versie** — de concrete studio-opname, live-opname, remake/rerecording, remix of andere versie die wordt bedoeld.
3. **Release/verpakking** — album, single, compilatie, remaster, box, jubileumeditie of streamingrelease waarop die opname wordt aangetroffen.

Een latere verpakking verandert nooit automatisch de historische datum van het werk of de opname. Een werkelijk nieuwe opname of versie krijgt wél zijn eigen datum.

### Minimale provenance voor tijdinformatie

Voor datumclaims moet Music DNA kunnen bewaren:
- canoniek oorspronkelijk releasejaar van de bedoelde opname/versie;
- oorspronkelijke release waarop die versie verscheen, voor zover vastgesteld;
- versie-identiteit/type wanneer relevant;
- aangetroffen bron/release en het eventuele latere releasejaar daarvan;
- bron/evidence voor de canonieke datering;
- datumstatus: **bevestigd / waarschijnlijk / conflicterend / nog te onderzoeken**.

De presentatie gebruikt de canonieke datum van het bedoelde muzikale object. Een Spotify-, remaster-, compilatie- of heruitgavejaar blijft provenance en mag niet stilzwijgend de zichtbare historische datum worden.

### Conflictregel

Wanneer betrouwbare bronnen verschillende jaren noemen, kiest Music DNA niet stilletjes één waarde. Het conflict blijft zichtbaar in de bronlaag totdat de versie-identiteit en datering voldoende zijn opgehelderd. Dit sluit aan op het ontwerpprincipe voor onderzoeksdekking: **onzeker is iets anders dan schaars of onbekend**.

### Centrale invariant

> **Music DNA dateert het muzikale object, niet de digitale verpakking waarin het toevallig is gevonden.**

Deze invariant is gemeenschappelijk voor Ontdek-DNA en DNA Explorer. Week-specifieke controles zijn aanvullende delivery gates, geen vervanging voor deze centrale tijdlaag.

## 11. Spotify-selectieregel — originele opname eerst (24 september 2026)

Ben heeft de versievoorkeur aangescherpt tot een harde Music-DNA-regel. De standaard is niet simpelweg “de versie die beschikbaar is”, maar **de oorspronkelijke opname van de betreffende artiest**.

Selectievolgorde:
1. Is de oorspronkelijke opname op Spotify beschikbaar via de oorspronkelijke release, dan wordt die Spotify-instance gebruikt.
2. Is die oorspronkelijke release-instance niet beschikbaar, maar exact dezelfde oorspronkelijke opname wel via een heruitgave, remaster of compilatie, dan mag die instance als technische fallback worden gebruikt.
3. De fallback-verpakking verandert nooit de canonieke identiteit of het oorspronkelijke jaar van de opname.
4. Een liveversie, remake, rerecording of remix is een andere muzikale versie en mag niet stilzwijgend de ontbrekende oorspronkelijke opname vervangen.
5. Zo’n latere versie mag wel worden gekozen wanneer juist die versie bewust het ontdekkingsobject is; dan krijgt zij haar eigen versie-identiteit en datum.

Dit is een gedeelde selectie-invariant voor Ontdek-DNA en de centrale bron-/provenancelaag. W40 bevat vanaf nu dezelfde policy als delivery gate. De nog uit te voeren W40-audit moet daarom twee vragen beantwoorden: **(a) hebben we de oorspronkelijke opname gekozen? (b) hebben we, indien mogelijk, ook de oorspronkelijke Spotify-release-instance gekozen?** Alleen daarna volgen jaar- en verpakkingscontrole.

## 12. W40 provenance-audit afgerond — GREEN (24 september 2026)

De bestaande W40-pool is na invoering van de regel **originele opname eerst** opnieuw gecontroleerd op zichtbare heruitgave-, remaster-, compilatie-, anniversary-, anthology- en best-of-signalen. Waar brononderzoek een oudere oorspronkelijke opname/release aantoonde, is de canonieke metadata hersteld. Waar Spotify een oorspronkelijke album-instance aantoonbaar aanbiedt, is die waar nodig als Spotify-target gekozen.

Herstelde gevallen omvatten onder meer Aviator, Rox Diamond, Sic Vikki, Andy Timmons, Diamond Rexx, Billy Idol, Donnie Iris, Talking Heads, The Police, Berlin, Alien Sex Fiend, Fad Gadget, Ausgang, Screaming Dead, Skeletal Family, Two Witches, Phenomena/John Wetton, Ange, Argent, Armageddon en M/Robin Scott. INXS en Blondie zijn van remaster-instances naar de op Spotify aanwezige oorspronkelijke album-instance gezet. Nelson blijft met canoniek jaar 1990 op de beschikbare remasterpresentatie; dit is toegestaan als technische verpakking van dezelfde oorspronkelijke opname en verandert de historische datering niet.

Bewust gekozen latere versies blijven toegestaan wanneer de versie zelf het ontdekkingsobject is. In W40 zijn titels die expliciet een remix of live-uitvoering benoemen daarom niet automatisch teruggezet naar het jaar van het onderliggende werk.

**Eindstatus van deze reparatielijn: GREEN.** De ontwerp- en herstelopdracht rond releasejaar, opname-identiteit, Spotify-verpakking en Explorer-tijdprovenance is hiermee gesloten. De blijvende systeemregels staan in §§10–11 en in de gedeelde Registry/W40-policy. Nieuwe kandidaten moeten voortaan door dezelfde selectie- en provenancegate; een nieuwe heruitgavefout is een regressie, geen open ontwerpvraag.


## 13. DNA-rijkdom en onderzoeksdekking — v1 gesloten (24 september 2026)

Deze bouwlijn is inhoudelijk en technisch als **v1 gesloten**. DNA-rijkdom beschrijft de rijkdom van de betrouwbaar gedocumenteerde muzikale wereld rond een artiest; onderzoeksdekking beschrijft afzonderlijk hoe grondig Music DNA die wereld werkelijk heeft onderzocht. DNA-rijkdom is geen kwaliteits-, populariteits-, smaak- of webhit-score.

Vaste rijkdomsstaten: **Zeer rijk / Rijk / Redelijk / Beperkt / Schaars**. Vaste onderzoeksstaten: **Ononderzocht / Licht / In ontwikkeling / Goed onderzocht / Diep onderzocht**. Centrale invariant: **onbekend is niet schaars; rijkdom mag pas worden geclassificeerd wanneer voldoende onderzoeksdekking is verdiend.**

De Registry registreert werkelijk afgelegde onderzoekspaden: officiële/primaire bronnen, primaire interviews, onafhankelijke redactionele bronnen, discografie/credits, relatienetwerk, live/tourgebeurtenissen, lokale/historische bronnen en archief/secundaire bronnen. Lage media-exposure verlaagt rijkdom niet automatisch.

Gebouwd en beproefd: research-path status + verdiende coverage gate; Ghost = Diep onderzocht/Zeer rijk; Shiraz Lane is via de verdiende coverage-gate voldoende onderzocht en uit de actieve kennislacune geschoven; Voïvod = Diep onderzocht/Zeer rijk; Sic Vikki, Rox Diamond en Atomic Riot verworpen als geforceerde schaarse controles; Bombshell Boys blijft onbekend; catalogus-summary + odometer; evidence-driven research backlog; aparte Explorer-onderzoekstank; Engine 30 proefmeter **Bewezen wereld ←────────→ Onontgonnen wereld**; regressietest die voorkomt dat onvoldoende onderzoek als rijkdom of schaarste wordt gepresenteerd.

De Explorer-onderzoekstank staat nadrukkelijk los van de Ontdek-DNA-kandidatenvoorraad: kennisdekking versus geschikte muziekvoorraad.

**Bewust later:** verdere visuele verfijning, catalogusbrede onderzoeksinvulling, productiepromotie en een eventuele werkelijk aantoonbaar schaarse referentiewereld. Geen daarvan heropent het v1-model.

## 14. Audit 24 september — gesloten versus open

Gesloten en canoniek: herstelconsolidatie 23 september; Shiraz Lane-vulproef; story-reading → expliciet vertelde vondsten; systeemwijde tijd-/releaseprovenance; temporal integrity; originele-opname-eerst; W39 releasejaarherstel; W40 provenance GREEN; **DNA-rijkdom + onderzoeksdekking v1 inclusief onderzoekspaden, gate, odometer, backlog, onderzoekstank en regressietest**.

Open maar niet blokkerend: Registry/Explorer inhoudelijk verder vullen en beproeven; Buzzcocks blijft geparkeerde lokale/historische stresstest; duurzame persoonlijke leesstatus en productiepromotie zijn nog niet gebouwd; visuele verfijning van de meter pas na echte gebruiksproef.

**Hervatregel:** §§10–14 zijn de canonieke systeemlaag. Relation Registry, releasejaar-/opnameregels, W40 en DNA-rijkdom/onderzoeksdekking v1 niet opnieuw ontwerpen zonder concrete regressie. Volgende inhoudelijke bouwstap: Registry/Explorer verder vullen via de nieuwe onderzoeksbacklog; de onderzoekstank bewaakt de balans tussen bewezen en onontgonnen werelden.\n\n## 15. Onderzoeksbacklog in productie + relation identity policy (24 september 2026)\n\nNa sluiting van v1 is de onderzoeksbacklog daadwerkelijk als werkwijze gebruikt. Shiraz Lane is verder verdiept en verlaat na voldoende verdiende dekking de actieve kennislacunes. Daarna is Voïvod als volgende onderzoekswereld geopend en over alle acht onderzoekspaden onderzocht. Uitkomst: **Diep onderzocht / Zeer rijk**. De onderzoekslaag is vervolgens niet als los dossier blijven staan: bewijs is vertaald naar herbruikbare Registry-relaties en discoveries, onder meer rond Rush/Neil Peart, Jason Newsted, Piggy, Chewy en Jonquière.\n\nDe backlog selecteert voortaan alleen artiestwerelden met werkelijk ontbrekende onderzoekspaden en kan per doel aangeven of de taak bewijsleemtes sluiten, onderzoek verbreden of een nieuwe wereld openen is. Zo blijft een reeds voldoende onderzochte wereld niet kunstmatig bovenaan staan omdat zijn rijkdomslabel lager is dan dat van een andere artiest.\n\n### Relation identity policy — canoniek\n\nEen relatie wordt gekoppeld aan **de entiteit die volgens het bewijs de relatie werkelijk draagt**. Een persoon wordt niet vervangen door zijn of haar beroemdste band. Bandlidmaatschap is context tenzij de band zelf aantoonbaar deelneemt aan de relatie. Omgekeerd mag een band de zichtbare relatiehub zijn wanneer de muzikale invloed aantoonbaar bij die band hoort en een concreet lid de drager van die invloed is.\n\nCanonieke voorbeelden:\n- **Voïvod ↔ Jason Newsted** = directe persoonsrelatie; Metallica is biografische context, niet de relatiehub.\n- **Voïvod/Away → Rush, via Neil Peart** = Rush is de muzikale invloedwereld; Peart is de concrete drummer via wie Away die invloed beschrijft.\n\nDeze semantiek is in Registry-code vastgelegd in `relationIdentityPolicy` (commit `d7117100`) en geldt voortaan voor alle nieuwe relationele extracties. Een latere uitbreiding die een directe persoonsrelatie automatisch onder diens beroemdste band hangt, geldt als inhoudelijke regressie.\n\n**Actuele veilige hervatstand:** code en onderzoeksdata staan in GitHub; de canonieke totaalstopstaat loopt nu mee tot en met `d7117100`. De eerstvolgende grotere bouwslag mag hierop voortbouwen zonder de rijkdoms-, coverage-, temporal- of relation-identityregels opnieuw te ontwerpen.


## 16. Explorer Navigation v1 + Engine 31 walk proof — canonieke stopstaat (24 september 2026, 14:06-healthcheck)

Na §15 is een tweede structurele bouwsprong gemaakt. De Relation Registry is niet langer alleen opslag- en bundellaag voor rijke dossiers: zij voedt nu een generieke **Explorer Navigation v1** waarmee één verbonden muziekwereld daadwerkelijk bewandelbaar wordt.

### Geaccepteerd interactieprincipe

**Explorer is user-led, engine-assisted.** Ben kiest het vertrekpunt en daarna zelf iedere volgende deur. Music DNA mag binnen de gekozen wereld helpen ordenen, rijke verbindingen zichtbaar maken, herhaling voorkomen en kennislacunes signaleren, maar bepaalt niet de wandelroute.

De eenvoudige gebruikerslogica is canoniek: **Kies → kijk → klik → zwerf → terug.** Er worden geen vooraf geprogrammeerde wandelroutes gebouwd. Iedere stap vraagt alleen bij welk knooppunt de gebruiker staat en welke onderbouwde verbindingen Music DNA vanaf daar kent.

### Eén graph, vijf opritten

De vijf geaccepteerde Explorer-ingangen zijn **Vrij kiezen, Vandaag, Deze week, Recente W-lijst en Genre**. Vandaag gebruikt artiesten uit de werkelijke dagelijkse Ontdek-DNA-selectie; Deze week gebruikt artiesten uit de werkelijke weekselecties; de W-lijst gebruikt de echte weekvoorraad/context.

Deze ingangen zijn adapters naar **dezelfde relationele graph** en beperken de route na binnenkomst niet. Week-/dagdata worden gekoppeld aan de bestaande Music-DNA-weekarchitectuur (MUSIC_DNA_WEEKS, kandidaatbestanden en lokale dagselecties), niet opnieuw bijgehouden in Explorer. Ontbrekende artiestkoppelingen worden als unresolved behandeld en nooit verzonnen.

### First-class knooppunten en vrije overgang

Genre is canoniek een **first-class Explorer node**, niet alleen een filter. Hetzelfde model geldt in beginsel voor artiest, persoon, plaats, genre, publicatie/culturele wereld en event/event-series wanneer zulke entiteiten betrouwbaar in de Registry aanwezig zijn.

Een genre is een vertrekpunt, geen grens. Een wandeling mag genre → artiest → persoon → andere artiest → plaats lopen. De structurele proef bevat onder meer Hardcore punk → Voïvod. Het kruimelpad bewaart de sessieroute; teruggaan volgt dat pad; Explorer-home heropent de opritten. De herkomst blijft context, maar dicteert de volgende stap niet.

### Eén zichtbare relatiepartner, rijk dossier eronder

De bundelregel blijft tijdens het zwerven gelden: **één zichtbare counterpart/deur**, ongeacht hoeveel atomaire relaties, bronnen of discovery-hoeken daaronder liggen. Onderliggende feiten en provenance blijven volledig bewaard. De person-versus-band identity policy blijft hard gelden.

### Discovery en facts-to-narrative generiek

Discovery-selectie en narrative-material zijn generiek gemaakt. Ongelezen discoveries kunnen per artiestwereld worden geselecteerd met maximaal één zichtbare discovery per counterpart per queue en spreiding over relationele families waar de voorraad dat toelaat. De facts-to-narrative-laag groepeert bestaande feiten, claims, evidence en discoveries per echte counterpart tot atomic, compound of rich materiaal zonder zwak bewijs kunstmatig tot een lang verhaal op te blazen.

Dit is een **compositielaag**, geen vervanging van atomaire Registry-feiten: relation-, source- en discovery-ID's blijven traceerbaar.

### Ontmoeting → onderzoeksbehoefte: gesloten lus

Een echte Explorer-ontmoeting mag een nieuwe onderzoeksbehoefte genereren. De canonieke lus is:

**Ontdek DNA → dagelijkse/weekselectie → Explorer-ingang → bekende wereld óf kennishiaat → research demand/backlog → Registry → rijkere Explorer-wereld.**

Een ontbrekende artiestenwereld blokkeert de wandeling niet en wordt niet gefabriceerd. Herhaalde ontmoetingen met dezelfde ontbrekende wereld worden gededupliceerd. Research is daarmee vraaggestuurd vanuit werkelijk Music-DNA-gebruik, zonder bij iedere klik live webonderzoek af te dwingen.

### Regressiepoort

Explorer Navigation v1 heeft een geïntegreerde regressiepoort. Die bewaakt minimaal: vijf ingangstypen; vrije keuze in dezelfde graph; echte relationele stappen; teruggaan via sessiepad; één zichtbare deur per counterpart; genre als werkelijk bewandelbaar knooppunt; ingang beperkt later zwerven niet; ontbrekende kennis veroorzaakt research demand in plaats van fictieve inhoud; bestaande relation-identitysemantiek blijft behouden.

**Explorer Navigation v1-architectuur is hiermee structureel gesloten.** Nieuwe UI of content mag deze invarianten niet omzeilen.

### Engine 31 — WALK PROOF, nadrukkelijk geen productie

Commit 7d260712 maakt de navigatiemotor voor het eerst zichtbaar in test/music-dna-explorer-engine-v30.html onder **ENGINE 31 · WALK PROOF**. De proef toont de vijf opritten, een gekozen wereld, echte Registry-deuren, verder wandelen, kruimelpad, terug en Explorer-home.

Engine 31 is **bewijs-/proeflaag, niet productieversie**. De zichtbare Today/This week/W-list context in deze walk proof bevat nog een beperkte bekende testcontext; de onderliggende echte weekadapter bestaat wel. Deze proefdata mag niet als actuele volledige productie-inhoud worden geïnterpreteerd.

De volgende stap na deze stopstaat is eerst de WALK PROOF als echte wandeling beproeven en integratieproblemen herstellen. Pas daarna worden de echte weekcontext volledig in de zichtbare proef aangesloten en presentatie/regie verder uitgewerkt.

### Belangrijkste commits sinds §15

De canonieke bouwlijn na e7859924 omvat: f157ae97 (Voïvod discoveries + visual/roots), 0f6ede21 (identity-regressie), 8709a16d (scene/live), 2578b2cc (bundling-regressie), d33c0dcc (generieke discovery-selectie), ce203a01 (facts-to-narrative), 46d0e5ab (Navigation v1 core), 158922e0 (entry adapters), d40b33aa (genres first-class), 952e8e46 (weekdata-brug), 0a7da3d9 (encounter → research demand), 8b2664ff (integrale regressiepoort) en 7d260712 (Engine 31 WALK PROOF).

### Actuele hervatregel

**Dit document is vanaf deze sectie het nieuwe canonieke totaalanker tot en met 7d260712.** Bij hervatten niet reconstrueren uit losse commits. Behoud §§10–16 als geaccepteerde systeemlaag. Eerst Engine 31/WALK PROOF functioneel beproeven; geen verdere structurele bouw vóór eventuele regressies uit die proef zijn verwerkt.

**Healthcheck-status na consolidatie:** gegevensveiligheid 🟢; projectgeheugen weer gelijkgetrokken met de bouwstand. **Proof ≠ production** blijft een expliciete grens.


## 16. Consolidatie 25 september — het hart van de machine

Deze sectie consolideert de tien commits na `b6733806` tot en met `a8ab836e`, plus de scopecorrectie `d5479dcd`. Bij strijd met oudere hervatinstructies in dit document heeft deze sectie voorrang.

### Permanente architectuur

De nieuwe vaste keten is:

`Ontdek DNA / andere encounters → Living Master → bronverificatie en verrijking → Relation Registry/projecties → DNA Explorer → DNA Express → nieuwe ontdekking`.

Rolverdeling:
- **Ontdek DNA** = dagelijks muzikaal plezier en nieuwe instroom; de weekmotor blijft onafhankelijk van de Registry-bouw.
- **Living Master** = het hart van de machine en de gezaghebbende, provenance-bewuste kennisbron.
- **Relation Registry** = relationele/projectielaag; steeds minder een tweede handmatig onderhouden waarheid.
- **DNA Explorer** = aantrekkelijke dagelijkse diepte: feiten, weetjes, verhalen, vrije graph-walks, belletjes en meters.
- **DNA Express** = wekelijkse redactionele/projectielaag uit dezelfde kennisbasis.

De vaste identiteitsrichting voor het komende datamodel is een eigen Music-DNA-ID met externe identifiers waar beschikbaar, in het bijzonder Spotify ID, MusicBrainz ID en AllMusic ID. Gespecialiseerde bronnen zoals Discogs, Metal Archives, setlist.fm, WhoSampled en journalistieke/biografische bronnen zijn aanvullende bronmodules; hun claims blijven bron- en tijdgebonden en worden niet tot één ongedifferentieerde waarheid samengevoegd.

### AllMusic en classificatie

AllMusic heeft het primaat voor muzikale classificatie. Genre/style-labels worden niet door Music DNA verzonnen, gecorrigeerd of tot één voorkeursvak gereduceerd wanneer AllMusic ze rechtstreeks levert. Persoonlijk Genre-DNA-lidmaatschap blijft een andere bewering dan AllMusic-classificatie.

Direct geverifieerde AllMusic-profieldata kan canonieke classificatie-edges voeden. `afgeleid volgens AllMusic-taxonomie` blijft derived werkmetadata totdat de concrete artiestpagina direct is geverifieerd. Verificatie kan bevestigen, verwijderen of uitbreiden en mag persoonlijke playlistmembership, W39/W40 of bestaande onafhankelijke Registry-feiten niet stilzwijgend herschrijven.

De eerste live verificatiebatch (Karnivool, Caligula's Horse, Oceansize, Earthside) heeft bovendien de bronregel aangescherpt: een concrete AllMusic-artiestpagina moet het label expliciet tonen; zoek-/crawloutput, biografieproza of related-artist-lijsten vervangen het Styles-veld niet.

### Master 100% — juiste schaal

De eerder vastgelegde 624 artiesten zijn **niet** de volledige migratie. Zij zijn de eerste geprioriteerde Genre-DNA-tranche. De definitieve v3-classificatie-inventaris bevat 3.333 unieke artiestvermeldingen:
- 98 rechtstreeks AllMusic;
- 2.862 afgeleid volgens AllMusic-taxonomie;
- 324 met onvoldoende bronmetadata;
- 49 nog ongeclassificeerd.

Daarnaast bestaat een afzonderlijke maar gekoppelde track/music-objectmigratie van circa 3.480 objecten na Spotify-reconciliatie. Artiestidentiteit/classificatie en recording/release/version-provenance mogen niet als één probleem worden samengevouwen.

**100% behandeld is niet 100% gevuld.** Een record is volledig behandeld wanneer het een expliciete eindstatus met provenance heeft: verified, genuinely unknown/unresolved, of conflict met bewaarde tegenspraak. Inhoudelijke rijkdom is geen voltooiingscriterium. Rush mag zeer rijk zijn en Shiraz Lane compacter terwijl beide volledig behandeld zijn. Onderzoeksdekking en informatierijkdom blijven afzonderlijke dimensies.

### Bron → inzicht

Het doelmodel moet de volgende keten expliciet kunnen dragen:

`bron → bronrecord → identiteit → Music-DNA-entiteit → atomair feit → bewijs/provenance → relatie → derived insight → meter/vergelijking → verhaal/presentatie`.

Derived insights zijn afgeleide, reproduceerbare Music-DNA-uitkomsten en geen bronfeiten. Een toekomstige tourfrequentie/live-intensiteitsmeter kan bijvoorbeeld setlist.fm-registraties combineren met actieve periode, maar moet onder water bron, peildatum, dekking, berekening, vergelijkingsgroep en betrouwbaarheid bewaren. Een exact getal uit onvolledige brondekking mag geen schijnnauwkeurigheid worden.

### Genre DNA als ingang

De 11 persoonlijke groepen / 42 Genre-DNA-werelden blijven de canonieke persoonlijke genre-ingang. De definitieve v3-snapshot levert 690 expliciete memberships over 23 werelden; de twee bevestigde UK-Punk-checkpoints voegen twee afzonderlijke werelden toe. Artist-DNA-playlists worden niet tot Genre-DNA-lidmaatschap omgevormd.

AllMusic-classificatie kan na directe verificatie wél een eerste echte graph-edge zijn. Een artiest hoeft dus niet eerst een willekeurige biografische relatie te krijgen om vanuit een persoonlijke Genre-DNA-ingang verder bewandelbaar te worden.

### Open technisch health-punt — Voïvod

Twee bestaande Registry-relaties zijn inhoudelijk als `confirmed` gemarkeerd maar hebben nog geen evidence-record:
- `rel-voivod-progressive-metal-genre`
- `rel-voivod-experimental-metal-genre`

Hun huidige claims beschrijven Music-DNA-verkenningsgenres en mogen niet achteraf van een verzonnen bron worden voorzien. Ze blijven daarom een **gedocumenteerde technische uitzondering / evidence debt** totdat hun semantiek is herbeslist: óf brononderbouwde classificatie met echte evidence, óf expliciet persoonlijke/afgeleide navigatie in een laag die geen `confirmed` bronfeit pretendeert. Geen verdere classificatiebulk mag deze twee gaten verbergen of als precedent kopiëren.

### Exacte hervatvolgorde

1. **Klus 0 — consolidatie:** deze stopstaat en de Master-100%-scopecorrectie vastleggen; Voïvod-evidence debt expliciet zichtbaar houden. Dit is administratief/data-architectonisch herstel en wijzigt W39/W40 niet.
2. **Klus 1 — hart van de machine:** definitief datamodel voor IDs, entiteiten, bronrecords, feiten, provenance, relaties, actualiteit, betrouwbaarheid/dekking, deduplicatie en derived insights.
3. **Pilot:** representatieve artiestset, met minimaal een zeer rijke wereld (Rush) en een compactere volledig behandelde wereld (Shiraz Lane), plus solo/obscuur/ambigu/many-members/incomplete cases.
4. **Pas na geslaagde pilot:** restartbare masterbrede batches en structurele verrijking. Nieuwe relevante vondsten gaan vanaf intake door hetzelfde model zodat geen nieuwe achterstand ontstaat.
5. Explorer-opmaak en verdere harvest zijn ondergeschikt aan deze fundering; Ontdek DNA blijft ondertussen zijn eigen dagelijkse cyclus volgen.

**Klus-0-status:** gegevensveiligheid GREEN. Canonieke projectkaart is met deze sectie weer bij. Het Voïvod-punt is niet weggepoetst maar expliciet als evidence debt afgebakend; inhoudelijk herstel ervan hoort vóór classificatiebulk of tijdens de eerste Klus-1 provenance-test, niet door bronloze claims te legitimeren.


## 21. Consolidatie 25 september — slimme wandeling, Personal DNA en multi-type Explorer

Deze sectie is het nieuwe canonieke totaalanker na de bouw- en wandelslag van 25 september 2026. Zij consolideert de geaccepteerde betekenis van de bouwlijn tot en met commit `7d90400297f16347991ef66eb90de08feb62e570`. Bij strijd met oudere hervatinstructies in dit document heeft deze sectie voorrang. De onderliggende commits en auditbestanden blijven de technische bron van detail.

### 21.1 Van Registry naar slimme wandeling

DNA Explorer is niet bedoeld als encyclopedische artiestenbrowser of routeplanner, maar als een betrouwbaar wandelgebied voor muzikale nieuwsgierigheid. De bouw van 25 september heeft bewezen dat een vrije wandeling over afzonderlijk onderbouwde relaties meerdere werelden kan verbinden zonder een vooraf geschreven route. De organisch gevolgde proeflijn liep onder meer via Buzzcocks → Magazine → John McGeoch → Johnny Marr → Nile Rodgers → Phil Manzanera → 801 → Brian Eno → Talking Heads → Adrian Belew → King Crimson → Greg Lake → Emerson, Lake & Palmer → Olympic Stadium Montréal.

De betekenis van die proef is niet dat deze route canoniek moet worden afgespeeld. Zij bewijst juist dat lange, meanderende paden kunnen ontstaan uit losse betrouwbare deuren. Explorer moet zulke paden kunnen voortzetten, teruglopen en onderweg nieuwe vergezichten tonen zonder fictieve verbindingen te maken.

### 21.2 Relation Evidence en Personal DNA Evidence blijven strikt gescheiden

Vaste invariant:

> **Persoonlijke relevantie bewijst nooit een muziekhistorische relatie.**

De Relation Registry beantwoordt: **bestaat deze relatie en welk bewijs draagt haar?** Personal DNA Evidence beantwoordt: **welke betekenis of herkenning heeft dit knooppunt al binnen Bens muziekwereld?**

Personal evidence kan afkomstig zijn uit favorieten, Music Maps en later expliciete beoordelingen zoals RAAK. Playlist-co-occurrence, favorietstatus of persoonlijke herkenning mag nooit automatisch influence, collaboration, membership, tour, production of een andere relationele claim creëren. Omgekeerd mag een relationeel bewezen deur bestaan zonder persoonlijke smaakbevestiging.

Chic is de eerste expliciete Personal-DNA-pilot: `Le Freak` in `Ben's Disco favorites` bewijst persoonlijke bekendheid/waardering, niet een relatie met de artiestwereld waarlangs Explorer bij Chic arriveert. De relationele route en de persoonlijke herkenningslaag worden pas in presentatie gecombineerd.

### 21.3 Persoonlijke archipel en discovery-firewall

Bens muziekwereld wordt als een groeiende archipel behandeld. Een bekend of gewaardeerd eiland hoeft niet automatisch brongebied voor Ontdek DNA te worden.

Vaste regel:

> **“Ik kan hiervan genieten” ≠ “zoek meer hiervan voor mij.”**

Hoofdroute, spin-off, uitstapje en brug naar bekend terrein beschrijven de positie van een knooppunt in de actuele reis. Zij zijn geen kwaliteitslabels en geen automatische discovery-opdracht. Geïsoleerde persoonlijke eilanden mogen geïsoleerd blijven. Nieuwe positieve discovery-evidence kan de archipel later uitbreiden, maar één favoriet of toevallige route mag de Ontdek-DNA-motor niet ongemerkt herprogrammeren.

### 21.4 Explorer floating, Express fixed

De in §17 vastgelegde informatielevenscyclus blijft hard gelden:

> **De feiten zijn stabiel; de vertelling mag bewegen.**

Explorer bewaart identiteit, atomaire feiten, relaties, evidence/provenance en relevante state, maar geen canonieke volledige Nederlandse artikelen of vertaalde interviews. De vertelling mag per bezoek verschillen door ingang, route, reeds geziene informatie en nieuwe bewezen kennis.

DNA Express is de bewaarlaag. Een bewust samengestelde editie legt tekst, volgorde, bronnen, beeldkeuzes, datum en editie-identiteit vast en wordt niet stilzwijgend herschreven wanneer Explorer later rijker wordt.

### 21.5 Verstandig dwalen: plaatsen kost geen afslag

De in §18 vastgelegde contextkaart is onderdeel van de slimme wandeling. Een onbekende naam, persoon, album, track, label, genre, plaats, venue of gebeurtenis moet kort geplaatst kunnen worden zonder route-event.

Vaste invariant:

> **Plaatsen kost geen afslag.**

Alleen een expliciete keuze zoals **Neem deze afslag** verandert de actieve route. Openen/sluiten van een contextkaart telt niet als gekozen deur, gelezen route of discovery. Het bestaande prototype met `explorerPlaceCard` is bewijslaag; verdere visuele/iPhone-validatie blijft nodig.

### 21.6 Multi-type knooppunten en vergezichten

Explorer-paden zijn niet beperkt tot artiesten. De Montréal-proef maakt venue/event als reële bestemming expliciet. De gewenste graph kan onderbouwd bewegen als:

`band → persoon → band → track/werk → concert/event → venue/plaats → andere bewezen deur`.

Albums, tracks, setlists, producers, labels, tours, gebeurtenissen, ontmoetingen en locaties mogen volwaardige knooppunten worden wanneer identiteit en evidence voldoende zijn. Een venue kan bijvoorbeeld aanleiding geven tot de vraag welke andere artiesten uit de persoonlijke muziekwereld daar speelden; het antwoord creëert alleen deuren voor werkelijk bewezen events.

### 21.7 “Even weten” — kennis zonder routewijziging

De wandeling heeft behoefte aan een lichte, niet-navigerende kennisactie voor spontane vragen die interessant zijn maar geen nieuwe reisrichting hoeven te worden. Werknaam:

**💡 Even weten**

Voorbeeld: de vraag of Rush in het algemeen stadions speelde. Een antwoord mag context en een interessant feit geven zonder de actieve Explorer-route te wijzigen. Als voor de gevraagde specifieke verbinding geen bewijs bestaat, zegt Explorer dat expliciet; een mislukte zoekvraag wordt nooit tot relationele edge gepromoveerd. Een eventueel bewezen vervolg kan daarna als bewuste afslag worden aangeboden.

Deze functie is conceptueel geaccepteerd maar nog niet als afgeronde productfunctie gebouwd.

### 21.8 Setlists en persoonlijke tijd-/albumankers

Een concertjaar alleen bepaalt niet de persoonlijke relevantie. Een later concert kan voor Ben interessant zijn doordat de setlist ouder, sterk verankerd repertoire bevat. Explorer moet daarom waar bronnen dit toelaten kunnen redeneren via:

`event → setlist → track/medley → album/periode → Personal DNA anchor`.

Vroege/progressieve Genesis is een sterk persoonlijk anker, met `Selling England by the Pound` en `Dancing with the Moonlit Knight` als duidelijke voorbeelden; dit wordt niet omgezet in de starre regel “Genesis na 1980 is niet interessant”. Latere optredens en muziek worden op hun eigen inhoud beoordeeld. Persoonlijke ankers helpen relevantie duiden maar bewijzen geen historische relatie.

### 21.9 Human interest: de mens in en voor het collectief

Explorer en Express mogen menselijke emotie, waardering, conflict, ego, loyaliteit en controverse gebruiken wanneer die betekenis hebben voor het muzikale collectief of zijn werk. Privéleven op zichzelf is geen doel.

De redactionele vraag is:

> **Wat betekende deze individuele mens voor het collectief — en wat zeggen de betrokken mensen daar zelf over?**

Voor Explorer kan één betrouwbaar feit of een kort, goed geattribueerd interviewfragment genoeg zijn: bijvoorbeeld ervaren waardering van een ingehuurde/touring muzikant, een personeelswisseling of een aantoonbare creatieve spanning. Voor Express mag dezelfde bronnenlaag veel dieper worden uitgewerkt.

Bij controverses blijven verschillende stemmen afzonderlijk. Een uitspraak van een betrokkene wordt als diens perspectief opgeslagen/gepresenteerd, niet als objectieve psychologische diagnose. Explorer/Express mag niet zelfstandig concluderen dat iemand ijdel, rancuneus, dominant of anderszins psychologisch gedreven **is**. Wel mogen gedocumenteerde uitspraken, botsende herinneringen en aantoonbare muzikale/zakelijke gevolgen naast elkaar worden gezet. De journalistieke keten is:

`wat gebeurde aantoonbaar → wat zeggen betrokkenen zelf → waar verschillen hun perspectieven → welk muzikaal/zakelijk gevolg is aantoonbaar → terug naar de muziek`.

Chester Thompson/Genesis is een voorbeeld van een “shadow figure”: een persoon buiten de headline-kern kan historisch/muzikaal belangrijk zijn en daarom een waardevolle Explorer-deur vormen. Pink Floyd (Waters/Gilmour) en Vinnie Vincent versus Paul Stanley/Gene Simmons zijn redactionele voorbeelden voor toekomstige bronrijke controverse-artikelen; deze vermelding creëert op zichzelf geen Registry-feiten.

### 21.10 Correcteerbaarheid en fouttolerantie

Explorer streeft naar hoge betrouwbaarheid maar pretendeert geen foutloos medium te zijn. De architectuur moet correctie goedkoop en lokaal houden. Feiten, relations, evidence en vertelling blijven daarom gescheiden. Een foutieve claim of edge wordt op de bron-/feit-/relatielaag gecorrigeerd; toekomstige floating Explorer-vertellingen gebruiken daarna de verbeterde toestand. Een reeds gepubliceerde Express-editie blijft als historische editie vast en kan zo nodig een correctie of nieuwe editie krijgen.

Onzekerheid is een geldige uitkomst. **Geen bewijs = geen feitelijke deur.** Conflicterende betrouwbare bronnen blijven als conflict/verschillende perspectieven zichtbaar in plaats van stil genormaliseerd.

### 21.11 Wat op 25 september daadwerkelijk gebouwd en opgeslagen is

De bouwlijn na de eerdere Navigation-v1 basis omvat onder meer: identity-quarantine en afsluiting van de probleemgevallen; evidence-led Registry filling; floating Explorer/fixed Express; Shiraz Lane floating-world proof; Buzzcocks-netwerkseed en organische uitbreiding via Magazine/McGeoch; McGeoch-invloeddeuren naar Johnny Marr en Radiohead; smart-wandering/contextkaart; Personal-DNA evidence-index met Chic-pilot; hoofdroute/spin-off/uitstapje/archipelregels; Manzanera/Roxy Music; 801/Brian Eno; Talking Heads; Tom Tom Club; Adrian Belew/King Crimson; en Greg Lake/ELP/Olympic Stadium Montréal.

De huidige technische kop bij deze consolidatie is `7d90400297f16347991ef66eb90de08feb62e570`. Dit is proof/testbouw en inhoudelijke Registry-groei; geen productiepromotie en geen nieuwe volledige iPhone-validatie van alle latere functies.

### 21.12 Exacte hervatplek

**Deze §21 is de nieuwe canonieke totaalstopstaat voor DNA Explorer na de werkdag van 25 september 2026.** Bij hervatten niet terugvallen op de healthcheck die `8b4e7641` als kop zag; die controle is door de latere bouw ingehaald.

Volgende ontwikkelrichting: de slimme wandeling verder instrumenteren in plaats van eerst een encyclopedische database af te vullen. Prioriteit bij hervatten:
1. multi-type event/venue/track/setlist-knooppunten verder operationaliseren;
2. **Even weten** als niet-navigerende kennisactie;
3. Personal-DNA album-/periodeankers bruikbaar maken voor context, zonder relation evidence te besmetten;
4. human-interest/interview-perspectief als bronrijke maar strikt geattribueerde laag;
5. daarna opnieuw echt wandelen en alleen concrete tekortkomingen repareren.

Werkritme blijft: **bouwen → wandelen → nieuwsgierigheid observeren → ontbrekend instrument bouwen → netwerk uitbreiden → opnieuw wandelen.**

**Healthcheck-status na deze consolidatie:** gegevens/code 🟢; projectgeheugen 🟢; Relation Evidence ↔ Personal DNA Evidence 🟢 conceptueel gescheiden; slimme meerstapswandeling 🟢 structureel bewezen; nieuwste UX/redactionele lagen 🟠 deels nog te operationaliseren; productie/iPhone-eindvalidatie blijft open. **Proof ≠ production.**
