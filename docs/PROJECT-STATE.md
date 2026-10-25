# Ben's Music DNA — Project State

**Last updated: 2026-10-25**
**Status: W43 handmatig gepubliceerd volgens gebruikersbevestiging; exacte 21 ID's uit bestaande bronnen vastgelegd. Finale presentatie en onafhankelijke Spotify-controle open; automatische keten en iPhone-synchronisatie onbewezen.**

## Actuele hervatplek — 25 oktober 2026

[W43-checkpoint en bronregister](CHECKPOINT-2026-10-25-W43-HEALTHCHECK.md), peiling 21.21.56 Europe/Amsterdam: main `dd87bc2b2731878c32d244c4a4ad1dbeaad5180b`; tien open bestaande PR's. **W43 handmatig gepubliceerd volgens gebruikersbevestiging**, [playlist](https://open.spotify.com/playlist/3fUqfUE9FZYHEH8tRGrKT4), 21 nummers in oorspronkelijke volgorde en drie definitieve versies. Exacte ID's uit drie overeenstemmende bestaande lokale bronnen overgenomen in een afzonderlijk [observatierecord](../data/week-use-observation-2026-43.json). Geen nieuwe onafhankelijke Spotify-uitlezing; finale naam/hoes/beschrijving blijven open. Geen FIFO-afboeking of ratingmutatie; iPhone-synchronisatie en werkende no-repeatuitsluiting onbewezen. W42-zaterdagketen onbewezen; PR #18 open en geen implementatiebewijs. Overige projectstatus en behoudsregels uit 23 oktober blijven gelden.

## Historische hervatplek — 23 oktober 2026


[Checkpoint 20–23 oktober](CHECKPOINT-2026-10-23-ARCHIVE-20-23-OCTOBER.md) is de actuele statusingang. Gecontroleerde main-basis: `942b73385dd8e0bbdc05914ce6094943cb8aa6cd`. Tien bestaande open PR's (#2/#3/#4/#5/#7/#10/#11/#16/#17/#18); Music DNA 2.0 blijft documentatievoorstel #18 met implementatie open. Deze documentatiebranch levert geen productie-release. Bij latere merges van overlappende PROJECT-STATE-wijzigingen deze actuele kop behouden.

- **Besluit:** definitieve naam **DNA Achter de Muziek**; uitgebreide Split Enz-biografie is goedgekeurd stijlvoorbeeld: prettig leesbaar, natuurlijke verhaallijn, betekenisvolle anekdotes en discrete genummerde bronlinks. Feiten/bronlinks nog te controleren.
- **Gebruikersbevestiging:** geslaagde lokale Spotify-proef voor Split Enz — I Got You met een **oudere prototypeversie** van het portret. Integratie van de later goedgekeurde tekst is **nog niet aantoonbaar**.
- **Voorstellen:** gedeelde verhalenbibliotheek, canonieke artiestportretten, nummerverhalen en hergebruik in Explorer/Express. Geen gerealiseerd centraal systeem claimen.
- **Bewezen archief:** W42 vrijdag 16 oktober geleverd en museumroute gecontroleerd; automatische route en audioflow niet bewezen. Gebruiksrecord heeft **iphoneHistorySynced=false**; externe uitsluitingen worden niet automatisch door de iPhone-selector gelezen.
- **Opdracht:** W43 zaterdag **24 oktober 2026**, 21 nummers, hoes, tekst en automatische aflevering; geplande uitvoering 09.00 Europe/Amsterdam is historisch vastgelegd. Werkset/flow voorbereid, exacte opnamen en zeven gereconstrueerde eerdere keuzes nog te controleren; hoes/tekst en daadwerkelijke levering niet bewezen. Geen nieuwe automation door deze archivering.
- **Open FIFO/no-repeat:** lokaal reconciliatierapport noemt 46 ongebruikt geregistreerde items, waaronder 21 geleverde W41- en 17 W42-tracks; saldo 8 is geen vrijgegeven voorraad. Alle 42 geleverde opname-ID's moeten herhaalveilig uitgesloten worden; geen blinde afboeking.
- **Herstelkopie:** historische analyse van export 18 oktober: current bewaart W42-dag 2, legacy/original niet. Huidige apparaatstand, herstelbaarheid en onafhankelijke kopie blijven open. Walk & Listen-container is afzonderlijke opslag.
- **Bewijsgrens:** Explorer heeft afzonderlijke prototypes; volledige koppeling met DNA Achter de Muziek niet bewezen. Flow-DNA W42 structureel/redactioneel vastgelegd, twintig overgangen niet beluisterd bewezen. Museum W42 historisch live gecontroleerd; nieuwste Projectkaart/navigatie niet volledig beschikbaar.

Eerst de open controles uit het checkpoint afhandelen. Deze archivering wijzigt geen productiecode, beoordelingen, iPhone-data of Spotify.

---

## Historische projectstatus — bewaard vanaf 12 oktober 2026

Onderstaande oudere “actuele” koppen zijn historische momentopnamen. Waar zij verschillen met de kop van 23 oktober en het gekoppelde checkpoint, geldt die nieuwere status; hun oorspronkelijke bewijs en beperkingen blijven behouden.

## Actueel checkpoint — maandag 12 oktober 2026 (na PR #13 en #14)

**GitHub-release:** `main` staat volgens de controle op commit `55645af2a5c83548982a8484900dd3293d0dbc90`. PR #14 (beschermde dagelijkse opslag via IndexedDB) en PR #13 (W42 dag 2 en opslagherstel) zijn samengevoegd. De oudere concept-/NO-GO-teksten verderop zijn historisch en weerspiegelen niet de inmiddels doorgevoerde dag-2-release. Dit checkpoint is alleen documentatie; geen runtimecode of Spotify-data aangepast.

**Waargenomen op de echte iPhone op 12 oktober (gebruikersscreenshots en terugmelding):**
- W42, dag 2 van 7 met Chinese American Bear — *Love You (爱你)*, **GOED**; Friedberg — *I Sometimes Do (But Mostly Might)*, **TERUGKOMEN**; Kingcrow — *Night Drive*, **TERUGKOMEN**.
- Na de drie beoordelingen verscheen **‘VANDAAG VOLTOOID — Je bent helemaal bij!’** en **‘Positieve zaterdagvoorraad: 44 / 42 ✓’**.
- De gebruiker sloot en opende de app opnieuw; de voltooide dag en de getoonde teller bleven zichtbaar. Dat bevestigt basale persistentie van dit dagbeeld, **niet** een onafhankelijke controle van iedere historische beoordeling, alle reserves of de volledige FIFO.
- De gewenste rustige **iPhone-appicoonbadge** met aantal onbeoordeelde officiële nummers verscheen nog niet; afzonderlijk, laagprioritair verbeterpunt. Geen badgefunctionaliteit als geleverd beschouwen.

**Technische beschermingslaag en bewijsgrens:** PR #14 introduceert beschermde opslag voor dagelijkse beoordelingen/reserves in IndexedDB, zodat verouderde gecachte pagina's die gegevens niet op dezelfde manier kunnen overschrijven. Werk-/browserproeven en regressies zijn gerapporteerd als geslaagd; dit bewijst niet dat de volledige echte iPhone-historie buiten het apparaat is veiliggesteld. De brongegevens op de iPhone zijn **niet** via GitHub uitgelezen of geback-upt. Een volledige herstelkopie dient nog via de bestaande exportpagina in dezelfde iPhone-appcontext te worden gecontroleerd; niet blind importeren, terugzetten of wissen. Exportroute: `test/gegevens-bewaren.html`. De gebruiker hoeft niet voor de checkpoint-documentatie nieuwe beoordelingen in te voeren.

**Nog open:** W42 dag 3–7 moet op de werkelijke kalenderdagen afzonderlijk verschijnen en beoordeeld kunnen worden zonder verlies; de autonome zaterdagketen blijft **onbewezen** en PR #10/#11 staan voor zover laatst gecontroleerd afzonderlijk open. Geen automatische publicatie, correcte FIFO-afboeking, Spotify-mutatie of end-to-end geslaagdheid claimen op grond van alleen deze dag-2-proef. Een eventuele herstel-/vrijgaveactie volgt pas na afzonderlijke verificatie.

**Wandeljournaal — tweede registratie:** 11 oktober, Jaarboek 1973: 4,6 km / 48:45 / 5,66 km/u. 12 oktober, Jaarboek 1974: 6,8 km / 64:58 / 6,28 km/u, netto na correctie van 1:20; laatste beluisterde nummer CAN — *Dizzy Dizzy*. Totaal twee geregistreerde wandelingen: **11,4 km / 1:53:43 / 6,01 km/u**. Jaarboeken 1970–1974 beluisterd; 1975 volgt. De dagnotities bewaren onder andere Bad Company (veranderde waardering), UFO/Iron Maiden, Sweet/Stryper, Rush/*Jacob's Ladder* (Wales 2017) en Robin Trower/*Bridge of Sighs* (Venetië). Dit is persoonlijk bronmateriaal; muziekfeiten blijven verificatieplichtig. Geen verplicht rapportageritme of nieuwe appfunctie.

**DNA Express — redactionele ideeënvoorraad, nog geen publicatie:** (1) **KISS achter de schermen / De onzichtbare familie**: onderscheid aantoonbare actieve ondersteuning (tourpodium, productie, financiering, compositie, meespelen, label, aanbeveling) van louter invloed; succes én uitgebleven doorbraak, tegengetuigenissen en wederkerigheid onderzoeken; Angel/Casablanca, Van Halen, Cinderella/Bon Jovi, Rush, New England e.a. zijn onderzoekscases, **geen definitief geverifieerde credits of playlist**. Mogelijke artikelgedachte: *Niet alles wat KISS aanraakte, werd goud.* (2) **De geschiedenis van...** over levensloop en nalatenschap van bands. (3) **Voordat de eerste noot klinkt** over concertintro's en rituelen. Geen nieuw artikel of playlist zonder afzonderlijke redactionele uitvoering.

**Prioriteit:** eerst deze archivering en behoud van bestaande gebruikersgegevens, daarna dag-3-praktijkwaarneming; geen app-herbouw, geen blind herstel, geen nieuwe badge-ontwikkeling voor de bewezen dagelijkse werking stabiel is.

---

## Opslagherstel concept-PR #13 — 12 oktober 2026

[Herstelbeleid, bewijs en beperkingen](W42-STORAGE-RECOVERY-2026-10-12.md): beoordeling met hersteljournal, zichtbare foutmelding en forward recovery; 21 offline regressieprogramma’s en catalogusaudit PASS. **NO-GO voor merge en productie; iPhone/Safari en concurrency onbewezen.** Bestaande apparaatdata niet benaderd.

## Voorbereiding W42 dag 2 — 12 oktober 2026 (conceptbranch)

[Controle en vrijgavevoorwaarden](W42-DAY2-PREPARATION-2026-10-12.md): Chinese American Bear / Friedberg / Kingcrow zijn opnieuw met exacte Spotify-track- en artiest-ID's gecontroleerd. Deze conceptbranch bereidt uitsluitend dag 2 voor met behoudsguards, nul nieuwe reserves en 19 geslaagde offline controles. **Geen productie-uitrol uitgevoerd; main blijft dag 1. Dag 3–7, automatische zaterdag en actuele apparaat-FIFO blijven onbewezen.** PR #10/#11 zijn open concepten met conflicten en niet samengevoegd. Geen privégegevens geïmporteerd of Spotify-mutaties uitgevoerd.

## Actuele canonieke hervatplek — 11 oktober 2026

[Geconsolideerd checkpoint](CHECKPOINT-2026-10-10-CONSOLIDATED.md) en [voortzettingscontrole](CONTINUATION-CHECK-2026-10-11.md) vervangen oudere actuele statusclaims hieronder. Gecontroleerde basis: `3aca235e`, PR #12 merged om 14.06 Nederlandse tijd. Pages-deploy geslaagd en vijf dagelijkse appbestanden publiek bytegelijk aan die basis; echte iPhone-werking nog niet bewezen. Deze documentatiepromotie verandert geen runtimecode of gebruikersopslag.

W42 bevat uitsluitend de drie officiële dag-1-tracks ALIAS / Sea Lemon / Menomena en de twee conditionele reserves Lychee Juice / Beach Vacation. Maandag 12 oktober, dag 2, staat nog niet veilig klaar: selector is bewust begrensd op dag 1 en gecontroleerde vervolgplannen ontbreken. Ook W42-publicatiemanifest en runtime-release ontbreken. De laatste historische catalogusaudit uit PR #11 is geen actuele iPhone- of dag-2-vrijgave.

**Gebruikersregel:** dagelijks 3 officiële Ontdek-DNA-tracks, maximaal 2 conditionele reserves buiten de Muziekmeter; Ben beoordeelt alleen. Zaterdag 21 unieke positieve Spotify-nummers: huidige weekpositieven eerst, daarna ongebruikte positieve FIFO-reserve. Geen beoordelingen verzinnen, oude playlists overschrijven of reservegebruik dubbel registreren. **De Klankmakers** is de vaste DNA Express-instrumentenrubriek, inclusief de nog redactioneel uit te werken Moog-/Minimoog-verkenning.

W41 is op 10 oktober nood-gepubliceerd met 21 unieke nummers (9 oudere W39-reserves, 12 externe). De export van 9 oktober 06.26 telde 44 ongebruikte positives; 23 is uitsluitend de theoretische stand na W41, geen actuele teller. W41-afboeking alleen na lezen van actuele opslag en bewezen ontbrekende registratie. Geen blinde afboeking, hardcoded teller of oude export terugzetten. Historische W36/W38-dubbelen ongemoeid.

PR #10/#11 blijven open concepten na inhoudelijke controle; geen merge. De 18 bestaande offline weekcontroles en Master/CSV/Depot-audit slagen op huidige main. Spotify-writes=0; endToEndProven=false. Volgende vrijgavestap: actuele dag-1-apparaatcontrole en nieuwe gecontroleerde dag-2-selectie met behoud van ratings, opname-/artiestuniekheid en FIFO. Dit is geen volledige maandag- of zaterdagvrijgave.

## De Wandelende Jaarboeken — inhoudelijk dossier, 11 oktober 2026

[Music DNA — De Wandelende Jaarboeken](DE-WANDELENDE-JAARBOEKEN-2026-10-11.md) bewaart de volledige overdracht, persoonlijke herinneringen aan Uriah Heep en Ten Years After en de eerste wandelmeting (1973: 4,6 km / 48:45; 11 nummers / 49:58). Jaarboeken 1970–1973 beluisterd volgens Ben; doel 1970–2025 vóór eind 2026, Jaarboek 2026 op 2 januari 2027. Herinneringen en luisterbeleving zijn gescheiden van de bronstatus van muziekfeiten. **Lage prioriteit:** Ontdek DNA en de zaterdagmachine blijven eerst; geen nieuwe appfuncties, databases, automatiseringen, verplicht verslagritme of wijzigingen aan playlists/ratings. Motto: **De muziek bepaalt de wandeling. De herinneringen bepalen het verhaal.**

## Toekomstige ontwerpafspraak — dagelijkse iPhone-badge, 11 oktober 2026

**Lage prioriteit; pas oppakken NA betrouwbare W42 dag 2–7 en de zaterdagmachine. Nog niet geïmplementeerd of bewezen werkend.**

Het Music DNA-beginschermicoon op iPhone krijgt als wens een rustige notificatiebadge voor het aantal nog niet beoordeelde **OFFICIËLE dagelijkse Ontdek-DNA-nummers**: bij start van de dag 3, na één beoordeling 2, na twee beoordelingen 1, na alle drie geen badge; de volgende dag weer 3. Conditionele reserves tellen nooit mee. Geen pushgeluid, geen opdringerige melding en geen dagelijkse gebruikershandelingen.

Eerst technische haalbaarheid en benodigde toestemming voor de iOS PWA onderzoeken: Home Screen Web App, Badging API en eventuele notification-/push permission, inclusief bijwerken bij een nieuwe dag wanneer de app gesloten is. Eventuele eenmalige toestemming apart vaststellen; geen werkende badge of stille achtergrondverversing claimen vóór echte iPhone-verificatie. Deze afspraak verandert geen runtimecode, bestaande projectstatus, ratings, dagkeuzes, playlists of FIFO.

## Historische betrouwbaarheid — 9 oktober 2026

[Herstel en verificatie](W41-RELIABILITY-CHECK-2026-10-09.md) bewaart het toenmalige lokale herstel en de destijds tegengehouden upload. Die uploadstatus is inmiddels achterhaald: herstelcode staat op main. Historische offline proeven, synthetische toekomstige ratings en oudere Pages-bewijzen bewijzen geen actuele apparaat-FIFO of volledige automatische productieaflevering. Bestaande beoordelingen, dagkeuzes en gesloten playlists blijven beschermd.

## Broncontrole — Master 1.14.4, 8 oktober 2026

[Herkomst en genrecontext](MASTER-1.14.4-BRONCONTROLE-2026-10-08.md): 63 hiaten aangevuld en 167 eerdere creditkoppelingen aan externe bronverwijzingen gekoppeld. Alle 230 herstelde tracks hebben herkomst en genrecontext; artiestcontext betreft 185 projecten. Genre blijft voorlopig op artiest-/albumniveau, oorspronkelijke opnamejaren nog niet onafhankelijk bevestigd. Twee historische hoofdlabels (Mother’s Finest en Thank You Scientist) blijven expliciete onderzoeksvragen. Depothal toont bronnen en doorzoekbare regio; Master blijft 3.877 / 3.005 gebruikt / 872 zonder geregistreerd gebruik. Geen playlist- of FIFO-wijzigingen.

## Historische metadataherstel — Master 1.14.3, 8 oktober 2026

[Metadataherstel](MASTER-1.14.3-METADATAHERSTEL-2026-10-08.md): alle 230 herstelde historische Special-tracks hebben album en Spotify-bronjaar. Land/hoofdgenre voor 167 voorlopig gekoppeld aan Master-artiestcredits; 63 blijven open. Rainbow-ID 2t07asmUebiYnqkxJVAmbe hoort bij Sensitive To Light; historische titel behouden, playlist ongewijzigd. Master blijft 3.877 tracks, 3.005 gebruikt, 872 zonder geregistreerd gebruik. Depothal bijgewerkt; geen nieuwe playlists.

## Actuele ingang — Master1.14.2 en Depothal, 8 oktober 2026

[Master1.14.2 en eerste Depothal](MASTER-1.14.2-DEPOTHAL-2026-10-08.md): 47 aanvullende exacte expositiekoppelingen verwerkt. Actuele Master: 3.877 tracks, 3.005 gebruikt, 872 ongebruikt. [Depothal](../depot.html) met zoeken, combinatiefilters, tracks, albumkaarten en zeven ingangen. Geen nieuwe playlists. Actuele FIFO en W41-productieaflevering blijven onbewezen.

## Historische ingang — Depot 1.19, 8 oktober 2026

[Depot 1.19 volledige Master-gegevenslaag](DEPOT-1.19-2026-10-08.md): 3.877 unieke trackobjecten op Master1.14.1, thematische indices, 3.454 voorlopige albumbronkaarten en 3.482 artiestcreditkaarten. 3.005 geëxposeerd en 872 Onverkend binnen beschikbare dekking. Glam474: 415 geëxposeerd, 59 Onverkend; 58 voorlopige kandidaten en één historisch positief geval met actuele FIFO open. Nieuwe ZIP-analyse levert 47 expositiekoppelingen op voor nog ongebruikt geregistreerde Masterrecords; bewijs bewaard voor een volgende gerichte Mastercorrectie. Geen definitieve VE-status, actuele FIFO niet aangetoond; geen appinterface of runtimewijziging.

## Historische ingang — Master 1.14.1, 8 oktober 2026

[Specialnummerherstel](MASTER-1.14.1-SPECIALNUMMERHERSTEL-2026-10-08.md): alle 34 open trackkoppelingen aan 11 Specials zijn op exacte Spotify-URI hersteld uit het aangeleverde ZIP-bestand. Nul onbekende Specialnummers in deze herstelgroep. Master1.14.1 is nu de actuele canonieke JSON/CSV. Totalen blijven 3.877 records, 2.958 gebruikt en 919 ongebruikt. Metadataonderzoek, Special65/Bonus01 bronidentiteit en gebruiksdekking buiten bestaande bronnen blijven open.

## Historische ingang — Master 1.14, 8 oktober 2026

[Master 1.14 gebruiksreconciliatie](MASTER-1.14-RECONCILIATIE-2026-10-08.md): 3.877 unieke records, 2.958 gebruikt geregistreerd, 919 ongebruikt geregistreerd (76,30%). 132 bestaande ongebruikte records bijgewerkt en 231 records toegevoegd (230 historische Specials plus Stryper uit Special105). Dit vervangt Master1.13 als actuele canonieke JSON/CSV; oude Excel blijft historisch. 34 Specialnummers en metadata van teruggehaalde records open. Beschikbare bronnen gereconcilieerd, volledige live dekking onbekend. FIFO/runtime niet gewijzigd, W41 endToEndProven=false.

[Smaaksignalen en Special105-export](CHECKPOINT-2026-10-08-SMAAK-SPECIAL105.md) blijven afzonderlijk bewaard. Depot v1.18 is het historische proefpakket; afgeleide status/tellingen opnieuw berekenen uit Master1.14.

## Historische ingang — 7 oktober 2026

[Checkpoint Depot, Listening DNA en corpus](CHECKPOINT-2026-10-07-DEPOT-LISTENING-DNA-CORPUS.md): Depot-proef 474 records, 410 geëxposeerd en 64 Onverkend; Special 104 live 15/15 gecontroleerd; Master 1.13 met 3.646 records. 71,17% betreft geregistreerd gebruik en is door gevonden registratieverschillen geen definitieve benuttingstelling. Streaminggeschiedenis aangevraagd, nog niet aantoonbaar ontvangen/ingelezen. Volledige Master-ontsluiting en gebruiksreconciliatie zijn vervolgstappen. Geen runtimewijziging of nieuwe W41-vrijgave.

## Historische hoofdroute — W41, gecontroleerd 5 oktober 2026

[W41-voorbereiding](W41-PREPARATION-CHECK-2026-10-05.md): 226 kandidaten; zeven-daagse selectorproef en negen-stappen apparaatproef slagen met echte historische invoer en synthetische W41-beoordelingen. De echte productievrijgave blijft gesloten tot de beoordelingen van W41 compleet zijn en de apparaatcontrole slaagt. Zaterdaglevering 10 oktober nog onbewezen. W40 blijft een afzonderlijke historische herstelproef.

## W40-callbackreparatie — 5 oktober 2026

De [automatische Spotify-terugkeer](W40-CALLBACK-RECOVERY-2026-10-05.md) gebruikt nu de bestaande foutafhandeling en herhaalknop. De fout is vóór herstel gereproduceerd; drie nieuwe en tien bestaande regressieproeven slagen, evenals de echte offline W40-herhaling. De automatische iPhone-eindproef blijft open.

## W40-herstelproef — 5 oktober 2026

De [actuele herhaling](W40-HERSTELPROEF-2026-10-05.md) reproduceert de groene offline keten met echte invoer en bestaande artefacten. W40 staat zichtbaar met 21 tracks, hoes en parentmap in Spotify; de museumpagina is bereikbaar. De automatische iPhone-cadeau-afsluiting en Express-publicatie blijven onbewezen. Geen nieuwe Spotify-mutaties of runtimewijzigingen uitgevoerd.

## Historische ingang — 5 oktober 2026

Zie [checkpoint 5 oktober](CHECKPOINT-2026-10-05-JAARBOEKEN-MASTER-ACTIELIJST.md) voor de huidige gegevens, bewijsgrenzen en actielijn. De onderstaande projectkaart is historische context; eerdere groene deelstatussen zijn geen bewijs van een werkende zaterdaglevering.

## Historische ingang — 23 september 2026

## Historische canonieke ingang — 23 september

**Nieuwste vervolg:** [Verhaal gelezen → vertelde vondsten verwerkt](VALIDATION-2026-09-23-STORY-DISCOVERY-READING.md). Registry `2026-09-23.3`: expliciete verhaalcoverage en een gecontroleerde leesstatusoperatie. Het producerverhaal verwerkt twee vondsten; Lordi en Ghost blijven beschikbaar. Audits en defectproeven PASS. De UI en W39 zijn ongewijzigd; zie de aanvulling voor de actuele hervatplek.

Lees de [stopstaat van 22 september 2026](HANDOFF-2026-09-22-STOPSTAAT.md) voor de volledige huidige toestand, bewijsgrenzen, commitreeks en hervatplek. De [fresh-chat handoff](HANDOFF-2026-09-22-FRESH-CHAT.md) is de korte ingang.

- Basis: `2bac01859296b28d9a3904ea5345aa3284bcedb5` plus de geaccepteerde slotbespreking.
- Actuele proefbuild: Engine 30; Relation Registry als kennislaag, gebundelde counterparts, Registry-verhalen, traceability, audit en discovery stock.
- Het herstel omvat één ontbrekende bestaande Maiden-coverrelatie. Structurele audit: 0 errors / 0 warnings; self-test en leesstatusscheiding PASS.
- Bouwstop is in deze herstelopdracht gerespecteerd: geen nieuwe productfunctionaliteit. Volgende fase na groen: **vullen en beproeven, niet opnieuw ontwerpen**.
- W39 van 23 september is al voltooid en blijft buiten deze opdracht. Geen gebruikersopslag of weekroute gewijzigd.
- GREEN geldt voor de vastgelegde en gecontroleerde proeflijn, niet voor productiepromotie of een nieuwe Pages-/iPhone-validatie.

## Historische projectkaart — 15 september 2026

Onderstaande ongewijzigde kaart bewaart de eerdere besluiten en gesloten werk. De toenmalige statuswoorden, weekstatus, focus en “Exact restart point” zijn **historisch** en vervangen de actuele stopstaat hierboven niet. Bestaande principes blijven gelden waar de nieuwe stopstaat ze niet bijwerkt.

Last updated: 2026-09-15 18:55 CEST
Status: ACTIVE DEVELOPMENT — W37 CLOSED / TAXONOMY REPAIR CLOSED / DNA EXPRESS EDITIE NUL IN UITVOERING / INFORMATION NETWORK EXPANDED

## Product north star
**Eerst muziek. Dan jij. Dan de wereld.**
Music remains the main road. Music DNA learns why music fits Ben, where the boundaries move, and uses that knowledge to create discovery, context and a personal music world without closing it into an echo chamber.

## Current product focus — DNA EXPRESS
**DNA EXPRESS** is the canonical publication name. `DNA EXPRESS-MAKER` is a historical working name and remains valid only in historical filenames/commits/documents.

Core publication idea: **Geen muzieknieuws dat jij moet doorzoeken. Jouw muziekwereld, voor jou geredigeerd.**
Line: **The personal music weekly · powered by Music DNA**.
Issue notation: `EDITIE NUL · W37 · 2026`; prospective weekly numbering from `No.001`.

DNA EXPRESS is a weekly digital music magazine with one subscriber: Ben. The editorial desk uses Music DNA, current and historical research, visual-world research, concerts, archives and personal taste signals to make an autonomous complete issue. Ben's normal role is reader/subscriber, not pre-publication editor-in-chief.

## Editorial autonomy — ACCEPTED
Governing decision: `docs/DECISION-2026-09-15-PLAYLIST-FIT-AND-EDITORIAL-AUTONOMY.md`.

Normal weekly flow:
**desk researches → desk selects/decides → issue is built/QA'd → Saturday completed issue is delivered → Ben reads/discovers/reacts → feedback informs later issues.**

Do not routinely ask Ben to approve cover artist, Dieptebom, image choice, article mix or sequencing. Editie NUL is the temporary exception while the editorial desk, visual language and publication machinery are being designed and validated.

Target publication notification: **“Ben, DNA EXPRESS No.xxx ligt voor je klaar.”**

Principle: **The production process repeats. The magazine does not.**

## Weekly Production Protocol v1 — ACTIVE
Governing document: `docs/DNA-EXPRESS-WEEKLY-PRODUCTION-PROTOCOL-V1.md`.

Gates:
0. freeze issue window/cutoff/week/publication state;
1. build evidence pack;
2. build editorial candidate pool;
3. autonomous editorial meeting;
4. source lock;
5. visual-world research;
6. issue score/dramaturgy;
7. build;
8. editorial/source/navigation/device QA;
9. publish completed issue;
10. learn after publication.

If a dependency cannot be verified, do not invent it. Substitute a verified story/visual when editorially sound, omit a nonessential unresolved element, and never claim LIVE before real publication verification.

## Reading model
**De editie is het tijdschrift. Het scherm bepaalt hoe je haar leest.**
- Mac: rich widescreen; no A4-like fixed sheet.
- iPhone: generous one-column reading edition.
- iPad: intermediate model; landscape may support spreads.
- Magazine ritual remains cover → contents → stories → back page, but browsing is deliberately non-linear.
- Chapter jump and exact-position `← TERUG` are functional requirements.
- No permanent website navigation bar/right rail.

## Art direction — ACCEPTED CONCEPT DIRECTION
Canonical direction remains `docs/DECISION-2026-09-14-DNA-EXPRESS-MAKER-ARTDIRECTION-2.0.md`; historical filename does not change the current publication name.

Coffee-table test: would Ben pick it up, turn a page, skip ahead, return and linger?

Permanent character:
- late-1970s NME visual nerve/surprise;
- Melody Maker depth, photography, authority and reading space;
- Music DNA personal intelligence;
- modern 2026 digital execution;
- BRAVO acknowledged as part of Ben's historical magazine DNA without becoming a visual template.

Artist-led model: DNA EXPRESS is the permanent house; the headliner supplies the weekly visual weather; substantial subjects temporarily own their pages through their own visual language.

Core image rule: **Zoek niet eerst naar de artiest. Zoek eerst naar zijn wereld.**
Priority: mythology/world → symbols/objects → places/environment → action/live → portrait.

No substantial artist page without visual identity. No empty pages; visual rest comes from composition. Controlled imperfection is welcome when purposeful. Whole-issue visual dramaturgy precedes page lock.

Editorial restraint: **Geen tekst zonder redactionele functie. Geen versiering die zichzelf moet uitleggen. Vertrouw op het beeld. Een symbool mag een geheim hebben.**

Rights/private-use working boundary remains: **we lenen de beeldtaal; we stelen het beeld niet.** Ben's use is currently private hobby use; if publication becomes public/commercial, perform a new rights review.

## Proof/production state
Proof 1 and Proof 2 are non-canonical visual proofs. Do not repair them as the visible basis; useful technical behavior may be reused.

Active carrier: `dna-express-maker-editie-nul-production.html` (historical filename). It already contains the DNA EXPRESS name, Editie NUL/W37/2026 notation, PRICE: 21 RATINGS, editorial/rubric contents numbering and exact-position return navigation. Most later sections still require the accepted image-led visual execution.

Green Lung / occult-London / Necropolitan is the first successful visual gate and current Editie-NUL visual weather. Build from the accepted world-first direction, not generic band portraits.

## Editie NUL — accepted editorial spine
1. Cover — Green Lung / Necropolitan.
2. Opening + contents.
3–4. Mijn Week.
5–6. Green Lung immersion.
7. Steven Wilson — from *The Overview* scale toward *Requiem For A Village*.
8. Hard & Heavy — current Editie-NUL backbone includes Iron Maiden / *Somewhere in Time* 40.
9. Band/Genre DNA.
10. LIVE!.
11. FLASHBACK — U2 / Dublin / 9 September 1978; working headline **HOE GROOT KAN £50 WORDEN?**
12. DIEPTEBOM only if earned.
13. Ontdek DNA / Edelstenenkabinet.
14. GEZIEN? / Kanttekeningen / Opdracht aan de redactie / back-page closure, arranged for rhythm rather than mechanical screen count.

Arc: **VERLEIDING → ORIËNTATIE → PERSOONLIJK → ONDERDOMPELING → CONTRAST → ENERGIE → HERKENNING → LIVE → TIJDREIS → VERRASSING → BELONING → AFSCHEID.**

## Visual context layer
- `KANTTEKENINGEN`: selective visual footnotes/context.
- `GEZIEN?`: playful visual quiz; never homework/judgement.
- `ACHTER HET BEELD`: optional explanation of selected visual choices.
- Some easter eggs remain unexplained.

## Weekly fixed short editorial layers — ACCEPTED
Decision: `docs/DECISION-2026-09-15-DNA-EXPRESS-WORLD-NEWS-AND-THIS-WEEK-IN-HISTORY.md`.

### NEWS OF THE WORLD
Weekly compact worldwide current-news scan, normally about 6–10 strong items depending on the week. Local/original reporting and primary announcement sources are preferred; syndicated press-release copies are deduplicated. Search outside Ben's established Music DNA is allowed and encouraged when editorially worthwhile.

### DEZE WEEK — DOOR DE JAREN
Weekly compact historical constellation: events in the same calendar week across multiple years. Distinct from FLASHBACK: FLASHBACK reconstructs one historical story deeply; DEZE WEEK moves quickly across dates/decades.

Both are standard evidence-pack sweeps from No.001 onward.

## Snoeptrommel — ACCEPTED ROTATING SHORT RUBRICS
Decision: `docs/DECISION-2026-09-15-DNA-EXPRESS-SNOEPTROMMEL-ROTATING-RUBRICS.md`.

NEWS OF THE WORLD and DEZE WEEK are weekly anchors. Other short rubrics rotate and appear only when the evidence produces something worth publishing. No mechanical quota or fixed rotation calendar.

Reservoir includes birthdays and time-awareness (`JARIG DEZE WEEK`, `HOE LANG AL?`, `RONDE GETALLEN`, `DAT IS OOK AL ... JAAR GELEDEN`), plus `UIT DE BAKKEN`, `VERGETEN?`, `DE VERBINDING`, `ACHTER DE KNOPPEN`, `WIE MAAKTE DIT?`, `EEN NUMMER`, `HET BEELD`, `TOEN ZE HIER WAREN`, `VANDAAR DUS...`, `WIST JE DAT...?`, `TOEN & NU`, `EERSTE KEER`, `LAATSTE KEER`, `VOOR ZE ... WAREN`, `DE MAN/VROUW ACHTER ...`, `DE ZAAL HERINNERT ZICH`, `WAT KOSTTE DAT TOEN?`, `NUMMER 1 — MAAR WAAR?`, `ZELFDE STUDIO, ANDERE WERELD`, `ZELFDE PRODUCER, ANDERE WERELD` and related fact-led forms.

Birthdays/anniversaries are derived from verified dates, never stored as permanently current ages.

Principle: **Grote verhalen geven diepte. Kleine feiten houden de hele muziekwereld in beweging.**

## ONDER CONTRACT / LABEL DNA — ACCEPTED
Decision: `docs/DECISION-2026-09-15-DNA-EXPRESS-ONDER-CONTRACT-LABEL-DNA.md`.

Record labels are first-class entities and potential editorial/discovery networks, not administrative metadata. Explore artist/release ↔ label/imprint/parent ↔ A&R ↔ producer ↔ engineer ↔ studio ↔ mastering ↔ artwork ↔ management/booking ↔ roster/scene.

Possible forms: `ONDER CONTRACT`, `LABELGENOTEN`, `NIEUW OP HET LABEL`, `HET LABEL ACHTER DE PLAAT`, and deeper `LABEL DNA`/DIEPTEBOM.

Critical guardrail: shared label ≠ shared sound or quality. Separate:
1. contractual fact;
2. shared infrastructure;
3. credible contemporary/insider claim;
4. DNA EXPRESS editorial observation;
5. Ben's Music-DNA signal.

Store label relationships at release/era/territory level where possible and distinguish signed/licensed/distributed/reissue relationships.

## Information/source architecture — EXPANDED 15 SEPTEMBER
The architecture is now designed as an international research network rather than a static encyclopedia. Goal: know where to look for current and historical artist information and preserve provenance/date/confidence.

Core rule: **The world supplies the evidence. Ben's Music DNA decides what becomes relevant.**

### International Source Network 1.0
`docs/DNA-EXPRESS-INTERNATIONAL-SOURCE-NETWORK-1.0-2026-09-15.md`.
Weekly core radar spans Dutch/NL, UK, Sweden, Finland, Norway, Denmark, Germany and international prog/specialist sources; Tier B/Tier C add France, Italy, Spain, Australia, Japan, North America and story-triggered local/archive routes.

Scandinavia is a high-priority local-language discovery cluster. Language is not a relevance filter; summarize foreign-language reporting in Dutch but do not silently turn machine-translated nuance into verified quotation.

### Americas Source Expansion 1.1
`docs/DNA-EXPRESS-AMERICAS-SOURCE-EXPANSION-1.1-2026-09-15.md`.
Treat the Americas as multiple local scenes, not one English-language US market. Local-first routes cover US, Canada/Quebec, Mexico, Brazil, Chile, Argentina and wider Latin America, with official/venue/promoter/local culture routes where fixed media coverage remains weaker.

### Gap Closure 1.2
Priority gaps strengthened with active/local routes for Mexico, Peru, Chile, Argentina, Poland and Czech/Central Europe. Colombia remains deliberately dynamic rather than promoted to a weak fixed core. Historical FLASHBACK source ladder now prioritizes actual period issues before later retrospectives.

### Visual-World Source Network 1.3
Creator/archive layer includes professional music-photo archives, creator archives, museum collections, poster archives, studio/location history and stage/lighting records. Research order:
**band world → sleeve/booklet credits → designer/illustrator/photographer → creator archive → museum/image archive → studio/location → stage/poster world → conventional portrait only if useful.**

### Creator Network + Magazine Index 1.4
`docs/DNA-EXPRESS-CREATOR-NETWORK-AND-MAGAZINE-INDEX-1.4-2026-09-15.md`.
Maps creator relationships for priority artist worlds including Iron Maiden/Derek Riggs, Ghost, Judas Priest/Mark Wilkinson, Genesis/Hipgnosis/Colin Elgie, KISS and Metal Church. Ben's Wikipedia music-magazine list is a discovery index only; candidates require independent status/quality/access verification before promotion.

### Artist Information Network 1.5
Artist research is an ecosystem:
**artist ↔ members ↔ releases ↔ labels ↔ management ↔ booking agent ↔ promoter ↔ venues/festivals ↔ producer/studio ↔ designers/photographers ↔ radio/podcast/video ↔ journalism/archives ↔ related artists.**

Platenlabels and management are first-class data. Management is separate from booking/agent/promoter and must carry period/verified-as-of information. Venue/festival archives in Netherlands and neighbouring countries are active historical/current research routes, including local Zeeland routes where relevant.

Media coverage now deliberately spans written press, fanzines/underground press, radio/sessions, podcasts/long-form audio, video journalism/interviews, TV/documentaries, music-industry trade press, instrument/technical press, physical/digital archives, collector/fan material as leads, labels, management, promoters, venues and festivals.

## Source quality / evidence model
For important claims: **search → find source close to the fact → date it → independently confirm where needed → use it.**

Current claims prefer official artist/label/management/venue/promoter sources for hard announcements plus original/local specialist journalism for interpretation. Historical claims prefer contemporaneous press, venue/festival/label/artist archives, radio/audio, magazine/fanzine archives, libraries/museums and only then later retrospectives.

Preserve uncertainty and disagreement instead of flattening conflicting historical accounts.

Source-use dimensions may be recorded separately: relevance, proximity, authority, freshness and depth. Do not turn a summed score into “truth”.

## Knowledge-graph direction
Relationships should support facts such as:
- `ARTIST_SIGNED_TO_LABEL`
- `ARTIST_MANAGED_BY`
- `ARTIST_BOOKED_BY`
- `ARTIST_PLAYED_VENUE`
- `ARTIST_RECORDED_AT`
- `RELEASE_PRODUCED_BY`
- `RELEASE_ARTWORK_BY`
- `TOUR_PROMOTED_BY`
- `ARTIST_INTERVIEWED_IN`

Store period, territory/date precision where relevant, source, confidence and verified-as-of. This supports journalism, historical reconstruction and discovery.

## Recurring editorial source worlds
**Band DNA:** each 30-name playlist is the namegiver plus 29 surrounding artists. Investigate musical, personnel, producer, label, management, touring, geographic, historical, visual and statistical relationships. Weak/no relationships are valid findings. Exact existing Band-DNA visual identities must be recovered/reused, not invented.

**Genre DNA:** renewable source for clusters, borders, period/country bias, characteristics and contrasts between band kinship and genre kinship.

**Van de MASTER …:** flexible personal facts/patterns from the Master, integrated where editorially useful.

## Character rubrics
**LIVE!** = human/physical/immediate; photography, stage light, movement, crowd and anticipation. Local/personal shows have equal editorial dignity when relevant.

**FLASHBACK** = time machine, not nostalgia list. Start from the actual corresponding historical press week, reconstruct what was knowable then, then add hindsight. Core twist: **ze wisten nog niet wat wij nu weten.**

**DIEPTEBOM** = optional editor's privilege for an unusually compelling connection/discovery. If nothing earns it, no Dieptebom.

## Edelstenenkabinet / Ontdek DNA
Ontdek DNA is the weekly musical harvest/reward near the end; Mijn Week is the personal learning layer.

The Edelstenenkabinet is the visual treasury across Spotify, Ontdek DNA, DNA EXPRESS, Mijn Muziekwereld and Annual. Each week gets one gemstone visual identity, shared with its Spotify playlist where possible.

W36 first jewel/prototype: **Granaat**. W37 exact stone/week visual remains unresolved and must be recovered rather than invented.

Future Annual concept: 52 weekly gemstone visuals form the corona around a total solar eclipse — 52 weeks, one music year.

## Playlist fit learning — ACTIVE
Decision: `docs/DECISION-2026-09-15-PLAYLIST-FIT-AND-EDITORIAL-AUTONOMY.md`.

Ben spontaneously judged completed W36 clearly more enjoyable as a whole than W37. This does not reopen either closed week. Distinguish:
- **track fit** — value of an individual track;
- **playlist fit** — how strongly the completed 21-track week works as a whole and invites replay.

Possible playlist-fit dimensions: variety/clustering, energy contour, contrast/pacing, melodic density, anchor/adventure ratio, sequencing and avoidance of long merely-solid lanes.

Do not optimize toward 21 guaranteed RAAK tracks; discovery requires uncertainty.

## Source of truth — music data
Master remains primary content substrate. Definitive safe physical Master:
`Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx`.

Broad taxonomy repair is **GESLOTEN**. Do not reopen without a concrete functional blocker. `data/artist-registry-v1.json` remains experimental.

## Architecture
1. Master music database
2. Entity registry
3. Semantic enrichment
4. Knowledge graph
5. Living/current layer
6. Personal memory
7. Generated app-serving layer
8. Presentation/publication layer

See `docs/ENRICHMENT-SCHEMA-V1-2026-09-03.md`.

## Daily UX / ratings
Daily discoveries adapt between 3 and 4 positions through the accepted positive-reserve model. Positions 1–3 are official and count for Muziekmeter; position 4 is reserve-only. Visible ratings: **RAAK / GOED / NOG EENS / NEE**. `NOG EENS` remains unresolved until the Second Chance lifecycle is finalized.

## Mijn Muziekwereld
Two equal destinations:
1. **Edelstenenkabinet — BEWAREN**
2. **Muziekportaal — ONTDEKKEN**

Core rule: **Music DNA builds no generic decor around an artist. The identity, history and real musical relationships of the artist determine how that artist world manifests.**

## Music Master
Gastheer, conservator and ceremoniemeester; distinguished, mysterious and inviting; never more important than the music and never dictates taste. In DNA EXPRESS the Music Master may act as editor/curator; DIEPTEBOM FIRE folklore is occasional, not dominant.

## Artist World 1.0
Governing decision: `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`.
First vertical proof remains **H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**. Accepted but temporarily parked while DNA EXPRESS/Editie NUL is active focus.

## Editorial learning period — ACTIVE
September–December 2026 is the editorial learning period. Each issue remains a full product. Post-issue feedback may tune browsing/visual/story/surprise preference without turning reading into homework. First Redactierapport: January 2027.

## Muziekmeter / Ontdek-DNA
Official weekly observation set = 21 ratings: seven days × three official positions. Position 4 may feed reserve but never official Muziekmeter.

Weekly Ontdek DNA = exactly 21 tracks: current-week positive official tracks first, then unused FIFO positive reserve to 21. Used reserve tracks are consumed permanently. First meaningful formal conclusions begin January 2027; deeper trend analysis quarterly thereafter.

## Week status
**W36 — GESLOTEN:** 21/21, Spotify verified, first jewel Granaat. Do not reopen.

**W37 — GESLOTEN:** 6–12 September 2026, all 21 ratings preserved, Spotify playlist restored to agreed 21 and visually verified. Do not reopen.

**W38 — OPEN / IN UITVOERING:** adaptive 3/4 daily model + positive reserve. Candidate/config and Saturday-path implementation exist; structural Saturday validation passed. Live Saturday delivery remains pending. Do not claim live before verification.

## Playlist restoration
Genre DNA: UK Punk #01/#02 30/30 Spotify-closed. Alternative Metal DNA 2.0 fixed Top 30 awaits safe Spotify final verification. Canterbury Scene remains **ONDER VOORBEHOUD**.
Band DNA: controlled restoration/listening pass closed; 19 current Band-DNA playlists have descriptions/covers.

## W.A.S.P. / Randy Piper
Local Files material and three controlled 10/10 local playlists closed. Do not reopen ripping.

## Spotify folder hierarchy — fixed
- `♦ DNA`
- `✧ Band DNA`
- `Genre DNA`
- `💎 Ontdek DNA`

## Playlist/importer rules
Spotify is operational final control. Never guess URI. 30/30 means 30 checked tracks. Weekly Ontdek DNA means 21/21 before closure. Closed playlists are not silently reopened. Technical/import failure ≠ content completion. Spotify availability requires direct identity/playability; strong duration mismatch triggers review.

## Governance
Material decision changes name the existing decision, explain why, receive Ben's acceptance, get a dated GitHub decision and record supersession. Status words remain strict: **GESLOTEN / OPEN / IN UITVOERING / ONDER VOORBEHOUD / HISTORISCH / VALIDATED / ACCEPTED CONCEPT DIRECTION / RELEASED / LIVE**.

## Open risks / unresolved locks
### Editie NUL — immediate
1. Full image-led visual execution is incomplete.
2. U2 / Dublin / 9 Sep 1978 / £50 story requires strong source verification before publication.
3. Current GEZIEN? must not imply an unverified Green Lung / Necropolis Railway artwork connection; use only grounded clues.
4. Exact W37 gemstone/week visual must be recovered; do not invent.
5. Exact existing Band-DNA visual identities must be recovered; do not invent.
6. Device QA on Mac/iPhone/iPad only after meaningful visual integration.

### Product/technical
1. Rating persistence/localStorage migration.
2. Safari vs installed home-screen storage context.
3. Durable iOS launch/cache/version routing.
4. Export/import contract.
5. Gift-history vs Spotify delivery verification.
6. Stable artist identity before broad enrichment.
7. Rights/licensing/source policy if use becomes public/commercial.
8. Mood/Theme scope.
9. Generated app-serving duplication prevention.
10. Living/current source + date.
11. Durable personal state beyond local browser.
12. Spotify one-tap/autoplay.
13. Alternative Metal DNA 2.0 final Spotify verification.
14. Controlled Master synchronization where needed.
15. Exact Second Chance lifecycle.
16. Structural Spotify side-door availability.
17. Grounded artist-world visuals.
18. Phone-first progressive disclosure.

## Exact restart point — DNA EXPRESS Editie NUL
**Resume actual production build now; do not add another large conceptual layer first.**

Start from commit `fd51cf130c524ff6a3d956a3f9f1726117f82acc` and the accepted Green Lung cover/contents visual direction. Integrate canonical copy into the active `dna-express-maker-editie-nul-production.html` carrier (historical filename), refine the cover/contents architecture toward the accepted image-led balance, then build the second deliberately different visual world. Continue issue-wide visual dramaturgy before asking Ben for the next Mac coffee-table test.

In parallel, resolve the four critical evidence/asset questions: U2 £50 source, safe GEZIEN? clue, W37 gemstone identity, existing Band-DNA visual identities.

After the visual gate passes: translate deliberately to iPhone/iPad, complete source/navigation/device QA, and only then claim Editie NUL publication readiness.

## Current health checkpoint
The 2026-09-14 end-of-day GREEN checkpoint remains historical evidence for the prior state. This 2026-09-15 consolidation supersedes it as the central current map while preserving all closed-work protections.


## W42 dag 2 — voorlopige kandidaten (11 oktober 2026)
Onderzoeksresultaat, **NIET VRIJGEGEVEN** voor maandag 12 oktober; geen runtime-/Spotify-mutatie. Drie voorgestelde officiële ontdekkingen (nul nieuwe reserves; dag-1-reserves blijven beschermd):

| Artiest | Track | Spotify-track-ID |
| --- | --- | --- |
| Chinese American Bear | Love You (爱你) | `7ef1yxmLkmfnLBSzlgAiUj` |
| Friedberg | I Sometimes Do (But Mostly Might) | `125m8ZbcZOYBukLKEj8qF7` |
| Kingcrow | Night Drive | `1nyW51X8LGzUD3Vaq34SsK` |

Volgens de werkcontrole zijn Spotify-identiteiten via publieke bronnen nagegaan en komen deze tracks niet voor in de toen beschikbare Master/Depot- en historische selectiegegevens. Dit is **geen** verificatie tegen de actuele iPhone-opslag, de actuele positieve FIFO of Nederlandse accountafspeelbaarheid. De laatste beschikbare iPhone-export was van 9 oktober, vóór W41-publicatie en W42-dag-1-beoordelingen. Dag 2–7 en zaterdag blijven NO-GO totdat identiteit/nieuwheid tegen actuele gegevens, ratingbehoud en beperkte dagselector zijn gecontroleerd en getest. Niets uit oude exports terugzetten; geen W41-verbruik blind afboeken.

**Apparaatobservatie (11 oktober):** op een gedeeld iPhone-screenshot oogt het Music DNA-beginschermpictogram scherper en opent de app zonder zichtbare GitHub-browserbalk. Dit is een gebruikerswaarneming, geen onafhankelijke PWA-/deploytest. De badgewens is een aparte toekomstige ontwerpafspraak, niet geïmplementeerd.


## Drie muziekverkenningen — gecontroleerd 11 oktober 2026
Alle 15 gespreksbeoordelingen en bijbehorende gebruikersobservaties zijn bewaard in [het controledossier](MUSIC-DNA-VERKENNINGEN-CONTROLE-2026-10-11.md): 9 RAAK, 3 GOED, 3 NIET. Maxine en Fireman & Dancer zijn eerder gebruikt; Cry to Heaven staat in W35; Turn en The Good Doctor staan al in eigen lijsten. Zeven overige positieve onderzoekskandidaten blijven onder voorbehoud; Stratus vraagt variatiecontrole en Jess houdt GOED met kanttekening. Voyager/Church missen nog exacte track-ID's. Actuele iPhone-FIFO en een veilige gespreksinvoerroute zijn niet bewezen: nul voorraad-/rating-/runtime-/Spotify-mutaties. Ontdek DNA W42 en zaterdagmachine blijven eerste prioriteit; vrijgavestatus ongewijzigd.
