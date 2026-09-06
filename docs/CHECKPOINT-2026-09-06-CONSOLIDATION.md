# CHECKPOINT — 2026-09-06 — consolidatie projectstaat, playlists en afspraken

Status: **CONSOLIDATIECHECKPOINT — ACTUELE OVERDRACHTSLAAG**

## Waarom dit checkpoint bestaat
Op 6 september 2026 liep `docs/PROJECT-STATE.md` aantoonbaar achter op de werkelijk gevalideerde projecttoestand. Dit document borgt de actuele stand vóór verdere wezenlijke bouw. Het doel is niet om eerdere historie te wissen, maar om ondubbelzinnig vast te leggen wat gesloten, open, onder voorbehoud of alleen nog operationeel buiten GitHub aanwezig is.

## Bewezen technische herstelbasis
De laatste reeds gevalideerde technische hersteltoestand vóór deze consolidatie is commit `63afec10eec15beec7d8b1e62430502127c1050e` — **Lock validated Verras v4 artist-world checkpoint**.

Daarmee is veilig vastgelegd:
- `Verras me! v4` werkt over de volledige Master-derived productiewereld van **3.284 artiestenwerelden**;
- `test/surprise-me-v4-full.html` gebruikt 16 gecontroleerde productiedelen `data/surprise-prod-full-01.txt` t/m `-16.txt`;
- de loader accepteert alleen een complete consistente 16-delige set met samen exact 3.284 records;
- vrije trekking en filtering op Genre, Stijl, Land en Periode zijn op iPhone gevalideerd;
- Spotify-bestemmingen gebruiken bestaande Track URI-ankers uit de Master-derived data;
- de generieke artiestenwereld is gekoppeld en op iPhone gevalideerd;
- ontbrekende artiestinformatie wordt niet verzonnen;
- Sfeer/Mood en Thema blijven uitgeschakeld waar betrouwbare enrichment ontbreekt.

De vaste herstelbranch `checkpoint/verras-v4-artist-worlds-2026-09-05` blijft een afzonderlijk historisch herstelanker en wordt niet als gewone ontwikkelbranch gebruikt.

## Source-of-truth nuance — Master
De oude 1.7-baselinemeting blijft een historische audit en mag niet langer als actuele projectstand worden gelezen.

De veilige huidige werkbasis voor de taxonomiereparatie is:
`Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-04_v2.xlsx`.

Belangrijk:
- deze v2 is de veilige Excel-basis;
- later onderzochte taxonomiereparaties kunnen aanvullend bestaan zonder dat zij al veilig in die xlsx zijn weggeschreven;
- daarom mag geen document stilzwijgend doen alsof iedere latere onderzochte reparatie al in de Master is gesynchroniseerd;
- de Master blijft de primaire inhoudelijke onderlaag; er komt geen parallelle handmatig onderhouden muziekdatabase.

## Playlist-restauratie — stand 2026-09-06
### Genre DNA
- **20 van 21** Genre-DNA-playlists zijn inhoudelijk en in Spotify gesloten in Top-of-the-Bill-volgorde.
- **Alternative Metal DNA 2.0** is inhoudelijk vastgesteld, maar nog **NIET Spotify-gesloten** door herhaalde HTTP 429/rate-limit-problemen tijdens de Spotify-bouw.
- De bestaande Alternative Metal-playlist is daarbij niet beschadigd.
- **Canterbury Scene** blijft afzonderlijk gemarkeerd **ONDER VOORBEHOUD** en wordt niet stilzwijgend als definitief gesloten behandeld.

### W.A.S.P. Band DNA
`WASP Band DNA` is op 6 september 2026 volledig in Spotify gecontroleerd en gesloten:
- exact 30 tracks zichtbaar;
- vaste Top-30-volgorde intact;
- #1 **W.A.S.P. — The Headless Children**;
- #22 **Iced Earth — Dante's Inferno**;
- #30 **Slade — Gudbuy T'Jane**;
- geen grijs/onbeschikbaar nummer zichtbaar tijdens eindcontrole;
- status: **30/30 — SPOTIFY GECONTROLEERD — GESLOTEN**.

Deze inhoudelijke sluiting betekent nog niet automatisch dat iedere relevante Master-/playlistrelatie al administratief in de Excel-basis is gesynchroniseerd. Synchronisatie blijft een afzonderlijke stap.

## Playlist- en importerregels — hard bewaken
Voor DNA-playlists geldt voortaan expliciet deze controleketen:

**inhoudelijke audit → werkelijk ontbrekende tracks bepalen → verwijderingen/toevoegingen afspreken → gebruiker verwijdert → exacte Spotify-versies/URI's controleren → kleine import-CSV → importeren in bestaande playlist → Spotify zelf controleren → alleen bij werkelijk 30/30 en actieve tracks sluiten → daarna Master synchroniseren.**

Harde regels:
- Spotify is de operationele eindcontrole voor een playlist;
- een CSV of importer-melding alleen sluit nooit een playlist;
- geen Spotify-URI verzinnen of gokken;
- 30/30 betekent werkelijk 30 gecontroleerde tracks, niet 30 regels waarvan URI's ontbreken;
- een gesloten playlist wordt niet stilzwijgend opnieuw inhoudelijk aangepast;
- een technisch/importprobleem mag nooit worden gemaskeerd als inhoudelijk afgerond.

## Beoordelingssymbolen — geaccepteerde ontwerprichting
De vier beoordelingskeuzes moeten veel unieker en treffender worden dan generieke emoji/iconen en visueel volledig in de filmische Music-DNA-taal passen.

De semantiek blijft:
- **RAAK** — sterke muzikale/emotionele treffer;
- **GOED** — positieve muzikale match;
- **NOG EENS** — onbeslist, verdient een nieuw luistermoment/Second Chance;
- **NEE** — past niet.

Bestaande kleur-/lichttaal uit het design system blijft richtinggevend, maar de concrete symbolen moeten onderscheidender, memorabeler en filmischer worden uitgewerkt. Een later ontwerp mag deze keuze niet terugbrengen tot generieke telefoonemoji zonder nieuw expliciet besluit.

## Besluit- en wijzigingsbewaking
Een bestaand geaccepteerd Music-DNA-besluit mag niet stilzwijgend worden vervangen.

Voor een wijziging van een gesloten besluit geldt:
1. benoem welk bestaand besluit wordt geraakt;
2. leg uit waarom wijziging wordt voorgesteld;
3. verkrijg expliciete acceptatie van Ben;
4. leg het nieuwe besluit gedateerd vast in GitHub;
5. markeer zo nodig welk ouder besluit historisch blijft gelden en welk besluit het vervangt.

Statuswoorden worden strikt gebruikt:
- **GESLOTEN** — niet heropenen zonder expliciet wijzigingsbesluit;
- **OPEN / IN UITVOERING** — nog niet als voltooid presenteren;
- **ONDER VOORBEHOUD** — bewust niet definitief;
- **HISTORISCH** — behouden voor herleidbaarheid, maar niet actuele waarheid.

## Sessieveiligheid
Een chat is werkbank, nooit het enige archief. Nieuwe wezenlijke projectkennis die nodig is voor hervatting, herstel of consistente besluitvorming moet tijdens of aan het einde van de sessie naar GitHub worden geconsolideerd.

De health check moet daarom niet alleen controleren of GitHub technisch bereikbaar/consistent is, maar ook of GitHub nog gelijkloopt met de projectwerkelijkheid:
- laatste commit/checkpoint;
- ouderdom van `PROJECT-STATE.md`;
- chat-only besluiten of voortgang;
- afwijkingen tussen Master, Spotify en GitHub-status;
- open technische risico's;
- gesloten besluiten die nergens duurzaam zijn vastgelegd.

## Open punten na deze consolidatie
- `Alternative Metal DNA 2.0`: Spotify-bouw/eindcontrole afronden zodra rate limiting dat veilig toelaat.
- Canterbury Scene: voorbehoud handhaven totdat bewust herbeoordeeld.
- Master: playlistrestauraties en relevante relaties gecontroleerd synchroniseren waar dat nog niet is gebeurd.
- Rating persistence/localStorage-migratie: harde producteis blijft open.
- Stabiele artiestidentiteit: verder harden vóór brede automatische enrichment.
- Bron-/rechtenbeleid voor enrichment bewaken.
- Mood/Theme-scope expliciet houden; niet synthetisch invullen.
- Duurzame recent-history/personal-state uitwerken.
- Master → app-serving-pipeline verder formaliseren.
- Spotify één-tik-afspeelgedrag blijft apart technisch/UX-punt.
- De vier filmische beoordelingssymbolen concreet ontwerpen en valideren zonder de semantiek te wijzigen.

## Herstelanker van deze consolidatie
Na het bijwerken van `PROJECT-STATE.md`, `DECISIONS.md` en `DESIGN-SYSTEM.md` is een aparte herstelbranch gemaakt:

`checkpoint/consolidation-2026-09-06`

Die branch is aangemaakt op commit `44454a2fe356ee84ac87d46a6bdff70c548445df`, de toestand waarin de consolidatie-inhoud, projectstaat, besluitbewaking en designverfijning samen waren vastgelegd. De branch is een herstelanker en niet bedoeld als gewone ontwikkelbranch.

Deze latere tekstuele aanvulling op het checkpoint verandert de inhoudelijke herstelbasis niet; zij documenteert alleen het reeds aangemaakte herstelanker.

## Hervattingsregel
Voor een volgende wezenlijke Music-DNA-bouwsessie eerst lezen:
1. `docs/PROJECT-STATE.md`;
2. `docs/DECISIONS.md`;
3. `docs/UX-SPEC.md`;
4. `docs/DESIGN-SYSTEM.md`;
5. `docs/CHECKPOINT-2026-09-05-VERRAS-V4-ARTIST-WORLDS.md`;
6. dit checkpoint.

Als een chat, lokale tool of spreadsheet later iets anders suggereert dan een gesloten GitHub-besluit, wordt het verschil eerst onderzocht voordat het project verder bouwt.