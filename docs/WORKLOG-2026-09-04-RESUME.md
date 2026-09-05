# Worklog — 2026-09-04 — hervatting appbouw

## Startpunt
De werksessie is hervat vanaf de veiliggestelde GitHub-toestand van 2026-09-03. Er wordt niet opnieuw begonnen.

Laatste bouwcommit bij hervatting:
- `9ca166fcb5de50d5cc0cfa346f6f2d55ab39a43c` — **Build adaptive Dutch Verras me v2 prototype**

Belangrijke bestaande ankers:
- `docs/PROJECT-STATE.md`
- `docs/DECISIONS.md`
- `docs/UX-SPEC.md`
- `docs/DESIGN-SYSTEM.md`
- `docs/RICH-ARTIST-PROOF-AND-SURPRISE-MODE-2026-09-03.md`
- `docs/ENRICHMENT-SCHEMA-V1-2026-09-03.md`

## Vandaag bevestigd
- De huidige W36 Ontdek-DNA-dagflow draait op iPhone en blijft ongestoord.
- De app toont 3 dagelijkse ontdekkingen, bewaart zichtbare beoordelingen en toont de voltooide dagstatus.
- De gebruiker wil nu primair verder **bouwen aan de app**; nieuwe muziekontdekking/extra Genre-DNA-productie is ondergeschikt zolang die de appbouw niet dient.
- Bestaande gesloten ontwerpbesluiten worden niet stilzwijgend heropend.

## Veiligheidsritme
Tijdens actieve ontwikkeling wordt ongeveer iedere 2 uur een herstel-/overdrachtspunt vastgelegd, en eerder wanneer een belangrijke bouwfase wordt afgerond.
Een checkpoint bewaart minimaal:
1. wat gebouwd of gewijzigd is;
2. welke afspraken/besluiten zijn gemaakt;
3. wat gesloten blijft;
4. wat openstaat;
5. de exacte eerstvolgende stap.

## Technische waakpunten
- W36 live proces niet verstoren.
- Rating persistence blijft een harde eis: een gegeven beoordeling mag niet verdwijnen of als onbeoordeeld terugkomen.
- `Verras me!` is een andere productfunctie dan `Ontdek DNA` en mag de dagelijkse flow niet vertroebelen.
- Productiedata voor `Verras me!` moet uit Master + enrichment + graph worden gegenereerd; geen handmatig onderhouden parallelle database.
- Spotify-trackankers moeten waar mogelijk echte Track URI's zijn, niet alleen zoeklinks.

## Huidige eerstvolgende bouwstap
1. Behandel `test/surprise-me-v2.html` als het laatst gebouwde Surprise/Verras-me-prototype.
2. Controleer de v2-interactie op telefoon zonder de live W36-flow te wijzigen.
3. Daarna: vervang de kleine proefset gecontroleerd door een gegenereerde Master-derived artist/facet dataset met stabiele identity keys en bestaande Spotify Track URI-ankers.
4. Pas daarna koppelen aan bredere rijke artiestenwerelden en duurzame recent-history/personal-state.

## Checkpoint — 2026-09-05 — Verras me! v4 volledige Masterwereld
- `test/surprise-me-v4-full.html` laadt nu 16 zelfstandige, gecontroleerde productiedelen uit `data/surprise-prod-full-01.txt` t/m `-16.txt`.
- De loader accepteert de wereld alleen wanneer delen 1–16 uniek/compleet zijn, alle delen `n=16` en `total=3284` melden en samen exact 3.284 records opleveren.
- iPhone-validatie geslaagd: de UI meldt **3.284 verrassingen mogelijk** en **Master v1.8 · volledige productiewereld · 3.284 artiestenwerelden**.
- Eerste vrije trekking uit de volledige wereld geslaagd: **Dirty Shirley — Here Comes the King**, met herkomst/periode/taxonomie en bestaande **Journey DNA**-relatie.
- De exacte Spotify-tracklink opent de juiste track in Spotify. Spotify zet de track klaar maar start hem vanuit de gewone web-tracklink niet gegarandeerd automatisch; autoplay is daarom een apart integratie-/UX-punt en geen dataketenfout.
- De eerdere v4-verpakkingsfout kwam door afgekapt geschreven data; de huidige 16 delen omzeilen dit en zijn de gevalideerde v4-productieset.
- W36/Ontdek-DNA en de veilige Master zijn tijdens deze bouwfase niet gewijzigd.

## Gesloten na dit checkpoint
- Verras me! kan productietechnisch over de volledige 3.284 Master-derived artiestenwerelden beschikken.
- De keten Master-derived productiedata → vrije trekking → artiest/track → exacte Spotify-bestemming is op iPhone bewezen.
- Sfeer en Thema blijven uitgeschakeld totdat echte enrichment beschikbaar is; niets synthetisch invullen.

## Open / volgende laag
1. Brede rijke artiestenwerelden koppelen, voortbouwend op de gevalideerde H.E.A.T.-grammatica; geen fundamentele herontwerpstap.
2. Stabiele artiestidentiteit en duurzame recent-history/personal-state gebruiken voordat die koppeling breed wordt uitgerold.
3. Spotify-afspeelgedrag verbeteren: onderzoeken welke uiteindelijke app-koppeling één-tik-afspelen betrouwbaar kan ondersteunen; gewone track-URL garandeert autoplay niet.
4. Rating persistence blijft een harde eis en W36 blijft onaangeroerd.

## Sessieregel
De chat is werkbank; GitHub is archief. Voor iedere volgende werksessie eerst de project-state en decision/UX/design-documenten lezen.