# Ontdek-DNA — TOWER/Tanith en W41, 9 oktober 2026

Onderzochte productiebron: `e568fe4b849a75ca6f7eb6e124d8cf9d5e8d070a` (PR #1 merge). Alleen documentatie en offline onderzoeks-/testbestanden worden toegevoegd. Geen productiepad, kandidaten, beoordelingen, FIFO, Master of Spotify gewijzigd.

## Uitkomst

De aangeleverde iPhone-exports bevestigen de herhaalde **artiesten met andere tracks**. Op 8 oktober werden TOWER — Lay Down the Law en Tanith — Architects of Time opnieuw aangeboden als reserve, terwijl eerdere aanbod- en beoordelingsregistraties al aanwezig waren. Er is geen aanwijzing dat de betrokken leersignalen verdwenen waren. De oude dagelijkse functie sloot eerdere reserveartiesten niet uit; die oorzaak is reproduceerbaar. PR #1 repareert deze uitsluiting binnen dezelfde week al.

**W41 is met de echte export van 9 oktober nog niet gereed.** De huidige dagelijkse pagina blokkeert in de offline zaterdagproef: voor dag 7 zijn maar twee toegestane artiesten over. De generieke groene tests en de replay met historische invoer van 3 oktober maskeerden deze actuele beperking. Geen W41-correctie uitgevoerd omdat de opdracht daarvoor expliciete toestemming vereist.

## Werkelijke gebeurtenissen — Europe/Amsterdam

Bron: vijf aangeleverde bestanden, oorspronkelijke dag-/reservekeuzes en beoordelingen. De tabel bevat de selectie-aanmaaktijd; de bijbehorende beoordelingen staan in dezelfde exports en in de leerregistratie.

| Datum/tijd | Reserveartiest | Track | Beoordeling |
|---|---|---|---|
| 4 okt 17:08:55 | Tanith | Snow Tiger | TERUGKOMEN (`twijfel`) |
| 5 okt 05:48:40 | Tanith | Mother of Exile | TERUGKOMEN |
| 5 okt 05:48:40 | TOWER | The Black Rose | GOED |
| 6 okt 12:50:41 | TOWER | Powder Keg | GOED |
| 6 okt 12:50:41 | Tanith | Adrasteia | GOED |
| 7 okt 12:51:49 | TOWER | Running out of Time | RAAK |
| 7 okt 12:51:49 | Tanith | Falling Wizard | GOED |
| **8 okt 14:57:33** | **TOWER** | **Lay Down the Law** | **GOED** |
| **8 okt 14:57:33** | **Tanith** | **Architects of Time** | **GOED** |
| 9 okt 06:12:53 | TOWER | Prince of Darkness | GOED |
| 9 okt 06:12:53 | Tanith | Olympus by Dawn | TERUGKOMEN |

Op 8 oktober zijn Lay Down the Law beoordeeld om 15:04:42 en Architects of Time om 15:05:57. Exacte interne IDs: `external-2nbmILxV3FYF4Hcu1QFuub` en `external-4MZ1QaGFKKIp3dbOExSkRT`. De suffix is de exacte Spotify-track-ID. De elf betrokken tracks hebben elf verschillende Spotify-ID's. Dit is artiestherhaling, geen aangetoonde herhaling van dezelfde Spotify-opname. Verschillende Spotify-ID's bewijzen niet zonder ISRC/audio dat iedere fysieke opname uniek is; die verdere vergelijking is niet uitgevoerd.

De vorige incidentnotitie `W41-ARTIESTUNIEKHEID-HERSTEL-2026-10-09.md` bevatte slechts een deel van de reeks. De apparaatregistraties hierboven zijn de leidende aanvulling. Selecties plus beoordelingen bewijzen geregistreerd en beoordeeld aanbod; de exports bevatten geen schermafbeelding of geladen buildnummer.

## Oorzaak en bestaande reparatie

Op commit `22c34a3` las `newWeekSelection()` artiestuitsluitingen alleen uit **officiële** weekselecties. Eerdere reserve-ID's werden als aangeboden tracks uitgesloten, maar hun artiesten kwamen niet in `excludeArtists`. Een ander nummer van dezelfde artiest bleef daardoor beschikbaar en kreeg de categorie `KNOWN_ARTIST_NEW_TRACK`. Reservekeuzes geven die categorie bovendien voorrang. GOED en TERUGKOMEN sluiten een ander nummer van dezelfde artiest niet algemeen uit.

De exacte oude functie is geïsoleerd bewaard in `test/fixtures/discovery-history/pre-pr1-selection.js`. De nieuwe regressie voert haar uit met echte TOWER-/Tanith-kandidaatmetadata:

- Synthetische vorige reservekeuzes tonen herhaling van beide artiesten op een volgende dag.
- De begrensde echte historie uit export 5 (eerdere TOWER-/Tanith-keuzes en leersignalen) reproduceert in een twee-artiestenpool precies de twee reserve-ID's van 8 oktober. Dit is een gecontroleerde mechanismereplay, geen reconstructie van de volledige toenmalige runtime.
- De huidige echte `daily.html` sluit in afzonderlijke fixtures eerdere officiële, reserve- en retired-reserveartiesten uit en bewaart bestaande selecties.

PR #1 bevat al `weekArtistExclusions()` voor deze drie groepen van dezelfde week. De export van 9 oktober om 06:26 uur is ouder dan de merge/uitrol die middag; zij bewijst daarom geen fout ná de reparatie. Reeds opgeslagen keuzes worden bewust hergebruikt en niet herschikt. De exact geladen iPhone-build blijft onbekend, maar zowel de historische functie als de echte registraties ondersteunen de reserveuitsluitingsfout; verdwenen beoordelingen zijn niet nodig om het incident te verklaren.

## Historische selectorbeperkingen blijven afzonderlijk open

`music-dna-discovery-v1.js` leest leersignalen en opgeslagen selectie-ID's. Metadata bij oude keuzes wordt gezocht in de aangeleverde huidige kandidatenset. De regressie toont daarnaast:

1. Een ander nummer van een historisch aangeboden artiest blijft toegestaan als `KNOWN_ARTIST_NEW_TRACK`. Dit staat expliciet in de bestaande `discovery-policy-regression.cjs`. GOED en `twijfel` blokkeren andere tracks van dezelfde artiest niet; `nee` doet dat wel met een aanwezig leersignaal. Weekuitsluiting is dus geen algemene historische artiestuitsluiting.
2. Een historisch selectie-ID zonder metadata in de huidige set en zonder bruikbaar leersignaal wordt als gezien ID onthouden, maar levert geen artiest-/Spotify-/titeluitsluiting op. Een artiest kan daardoor onterecht `NEW_ARTIST` worden. Discovery leest ruwe dagbeoordelingen niet zelf. Learning-resync heeft geladen historische kandidaatmetadata nodig; de dagelijkse pagina laadt alleen de huidige weekbestanden.
3. Een bekende Spotify-ID of genormaliseerde artiest/titel wordt onder een ander intern ID uitgesloten wanneer de historie die metadata bevat. Zonder historische metadata kan ook die aliascontrole onvoldoende zijn.

Deze risico's zijn reproduceerbaar, maar **niet de bewezen datakloof bij TOWER/Tanith**: hun eerdere leersignalen zijn in de aangeleverde exports aanwezig en stemmen met de ruwe beoordelingen overeen. Geen blacklist of algemene historische beleidswijziging toegevoegd aan de gedeelde W41-route.

## Broncontrole, opslag en FIFO

| Bestandslabel | Exporttijd (Amsterdam) | SHA-256 | Opslagsleutels | Dagbeoordelingen | Leersignalen | Bankitems |
|---|---|---|---:|---:|---:|---:|
| invoer | 4 okt 17:18:31 | `85f04665c9a03b62adb88c652faafbf1c56499b538d52271049ffeb36dbe7c7a` | 119 | 145 | 156 | 117 |
| invoer 2 | 5 okt 05:57:02 | `58e841ca1a88b0286f033265b6fe4d8bb83da5651babd417353d779e38c9bf68` | 123 | 150 | 161 | 121 |
| invoer 3 | 6 okt 12:57:33 | `c21d7f2d95b7937a22c0bc5ee8835e36533e109a44d8a64c7d9a14e6c0dae65d` | 127 | 155 | 166 | 124 |
| invoer 5 | 8 okt 15:06:22 | `e95d0b1f535b93e62fb23c0257d9cc95174c2defd402f74dbd199e918de5c401` | 135 | 165 | 176 | 133 |
| invoer 6 | 9 okt 06:26:02 | `6d17c4294a2a58b2a1d0ca00cf6f38b50ce4cbecbb476e4d7eba5636aca0218c` | 139 | 170 | 181 | 135 |

Alle vijf exports: nul dagbeoordelingen zonder leersignaal-ID en nul afwijkende beoordelingswaarden tussen ruwe dagregistratie en leerregistratie. Dit is momentopnameconsistentie, geen complete gebeurtenishistorie. De 167 selectieplekken van export 6 hebben terugvindbare catalogusmetadata. Alle elf TOWER-/Tanith-aanbodregistraties en beoordelingen zijn aanwezig; de acht positieve tracks staan in de bank, de drie `twijfel`-tracks niet. Alle acht bankrecords hebben `playlistUses=0`. De FIFO-tijden van deze records blijven tussen de overlappende exports behouden; Powder Keg heeft een eerdere `firstPositiveAt` dan zijn laatste `ratedAt`, wat het onderscheid tussen eerste positieve beoordeling en laatste toestand laat zien.

De audit laadt alleen declaratieve catalogi en schrijft nooit naar opslag. Volledige persoonlijke exports/audits blijven lokaal; GitHub bevat slechts het begrensde relevante bewijs. De opgeslagen FIFO is gesorteerd op `firstPositiveAt`, daarna `ratedAt`, daarna interne ID. De bank dient positieve zaterdagvoorraad en is geen volledig aanbodarchief; leersignalen met NIET/TERUGKOMEN moeten buiten de bank worden gecontroleerd.

De actuele bankcode geeft bij in-memory sync van export 6: 135 positieve leverbare items, 91 eerder verbruikte/op opname uitgesloten, 12 actuele officiële positieve records en 32 verse reserveopnamen. Streefreserve 42, tekort 10. Dit bewijst de toestand van de export, niet latere fysieke iPhone-opslag; niets teruggeschreven.

## W41: concrete readiness-blokkade

`scripts/check-w41-snapshot.cjs` laadt de **werkelijke huidige dagelijkse pagina** met export 6 in een offline geheugenfixture en zet de klok op 10 oktober 08:00 uur. De 18 bestaande officiële beoordelingen en alle eerdere dagregistraties blijven intact. Er zijn 3 RAAK, 9 GOED, 4 NIET en 2 TERUGKOMEN. Er is nog geen dag-7-selectie in de export.

Uit de 24 reservoirartiesten zijn 21 credits al gebruikt door officiële/reservekeuzes. Over blijven:

| Artiest | Categorie | Toegestane tracks |
|---|---|---:|
| The Commoners | NEW_ARTIST | 10 |
| The Tubs | NEW_ARTIST | 9 |
| The Vintage Caravan | KNOWN_ARTIST_NEW_TRACK | 0 |

The Vintage Caravan staat in de eigen bibliotheekreferentie. De kandidaat mist `fullLibraryExclusionVerified=true`; de bestaande controle voor bekende bibliotheekartiesten blokkeert daarom alle tracks ondanks positieve genrescore. De selector kan slechts twee verschillende artiesten kiezen. `newWeekSelection()` vereist drie officiële tracks en minimaal twee nieuwe artiesten, dus de pagina geeft **“Onvoldoende gecontroleerde nieuwe artiesten voor deze dag.”** Dit is een capaciteitstekort van één toegestane artiest, geen tekort aan individuele reservoirtracks of verdwenen dagbeoordelingen.

De readiness-tool retourneert hiervoor exitcode **2** en `day7Created=false`; dat is het verwachte blokkaderesultaat. Geen toekomstige beoordelingen gegenereerd. De algemene 16 offline regressies blijven groen; zij werken met andere historie en bewijzen de werkelijke dag-7-capaciteit niet.

Verantwoorde vervolgrichting: één extra passende artiest met volledig gecontroleerde opname-/bronidentiteit beschikbaar maken, of afzonderlijk volledige bibliotheekuitsluiting voor een bestaand passend bekend-artiestnummer bewijzen. Geen controle versoepelen, oude beoordelingen vervangen of dag-7-keuze verzinnen. Dit is nog geen uitgewerkte, geteste productiecorrectie en wordt hier niet uitgevoerd; elke W41-aanpassing vereist expliciete toestemming.

## GitHub, tests en resterende vrijgave

`main` bevestigd op `e568fe4b`. [PR #1](https://github.com/bcim1958/bens-music-dna/pull/1) merged; beide runs voor dit commit success: [Deploy GitHub Pages 37938450534](https://github.com/bcim1958/bens-music-dna/actions/runs/37938450534) en [pages build and deployment 37938449582](https://github.com/bcim1958/bens-music-dna/actions/runs/37938449582).

[PR #2](https://github.com/bcim1958/bens-music-dna/pull/2) staat open, niet merged. Controles [37944768014](https://github.com/bcim1958/bens-music-dna/actions/runs/37944768014) en [37944767930](https://github.com/bcim1958/bens-music-dna/actions/runs/37944767930) zijn success.

20 nieuwe regressiecontroles PASS; alle 16 bestaande offline weektests PASS; Master-/Depot-audit PASS (3.877 / 3.005 / 872). De replay vanaf 3 oktober met synthetische toekomstige W41-beoordelingen slaagt eveneens, maar is door de nieuw aangeleverde werkelijke historie geen bewijs van actuele readiness. Nieuwe audit en actuele dag-7-blokkade zijn reproduceerbaar. Bronbestanden blijven byte-ongewijzigd.

`week-simulation-release-2026-41.json` blijft `simulationGreen=false`, `endToEndProven=false`; `inputsApproved=true` betreft toestemming voor apparaat-runtimeproef, geen voltooide levering. Eerst capaciteit voor de laatste drie herstellen/bevestigen, daarna echte dag-7-beoordelingen, alle negen runtimecontroles, Flow-DNA, citrien, museumtekst/hoes, Spotify-volgorde/map, zichtbare iPhone-afsluiting en daadwerkelijke DNA Express-publicatie aantonen. Geen merge, deploy of Spotify-write verricht; `spotifyWrites=0`.

## Reproduceren

Vanaf repositoryroot, Node.js en Python:

```sh
node test/discovery-history-regression.cjs
node scripts/audit-discovery-history.cjs /pad/naar/apparaatexport.json
node scripts/check-w41-snapshot.cjs /pad/naar/invoer-6.json
node scripts/run-weekly-regressions.cjs
python3 scripts/audit-master-depot.py
```

Voor invoer 6 is readiness-exitcode 2 verwacht. De audit schrijft alleen stdout; output bevat persoonlijke muziekhistorie en blijft lokaal. De oude functie en het begrensde historische bewijs worden uitsluitend door tests gelezen en nergens in productie geïmporteerd.
