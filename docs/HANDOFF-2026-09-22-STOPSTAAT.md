# Music DNA — canonieke stopstaat 22 september 2026

> **Vervolg 23-09-2026:** de herstelstand hieronder blijft het checkpoint. Na de [Shiraz Lane-vulproef](VALIDATION-2026-09-23-SHIRAZ-LANE-REGISTRY.md) is nu de [gerichte koppeling van verhaal lezen aan vertelde vondsten](VALIDATION-2026-09-23-STORY-DISCOVERY-READING.md) beproefd. Lees die nieuwste aanvulling voor de actuele stand en hervatplek. Nog geen UI-integratie of productiepromotie; Buzzcocks blijft geparkeerd.

**Hersteld en gecontroleerd:** 23-09-2026.  
**Status:** GREEN — projectgeheugen en gecontroleerde proeflijn weer consistent. Geen productiepromotie.  
**Gereconstrueerde basis:** main t/m `2bac01859296b28d9a3904ea5345aa3284bcedb5`, plus de geaccepteerde afsluitende bespreking van 22 september.  
**Herstel bovenop die basis:** uitsluitend deze consolidatie, verwijzingen, één ontbrekend bestaand relatiefeit en een regressiecontrole. Geen nieuwe productfunctionaliteit.

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
