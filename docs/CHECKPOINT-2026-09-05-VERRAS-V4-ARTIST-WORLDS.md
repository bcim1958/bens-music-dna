# CHECKPOINT — 2026-09-05 — Verras me! v4 + generieke artiestenwerelden

Status: **GEVALIDEERD EN GESLOTEN ALS HERSTELPUNT**

## Waarom dit checkpoint bestaat
Deze fase hoeft bij een volgende werksessie niet opnieuw te worden opgebouwd of onderzocht. GitHub is het archief; dit document beschrijft de bewezen werkende toestand en de eerstvolgende bouwlaag.

## Bewezen werkende toestand
- `Verras me! v4` gebruikt de volledige veilige Master-derived productiewereld van **3.284 artiestenwerelden**.
- De productiewereld wordt geladen uit 16 zelfstandige delen: `data/surprise-prod-full-01.txt` t/m `data/surprise-prod-full-16.txt`.
- De loader accepteert de set alleen wanneer delen 1–16 uniek en compleet zijn, dezelfde set-identiteit melden en samen exact 3.284 records opleveren.
- Vrije trekking op iPhone is bewezen.
- Filteren op Genre, Stijl, Land en Periode werkt op de volledige set.
- Sfeer en Thema blijven bewust uitgeschakeld totdat echte enrichment beschikbaar is.
- Een gekozen artiest/track gebruikt een bestaande Spotify Track URI uit de Master. De juiste track opent in Spotify; een gewone web-tracklink garandeert niet dat Spotify automatisch begint af te spelen.
- Recente Verras-me-artiesten worden lokaal tijdelijk onderdrukt.
- `Verras me!` is gekoppeld aan een herbruikbare generieke artiestenwereld voor artiesten buiten de eerdere H.E.A.T.-proof.
- iPhone-validatie van die generieke artiestenwereld is geslaagd met **Blitz — Shell Shock**.
- De Blitz-wereld toont uitsluitend reeds veilig beschikbare Master-derived gegevens: Verenigd Koninkrijk, 2020s, Hard Rock, Album Rock en de gekozen track.
- Ontbrekende biografie, albums, mensen/bandleden en actuele informatie worden niet verzonnen; deze zijn zichtbaar als toekomstige verrijkingslagen.
- W36/Ontdek-DNA en de veilige Master zijn in deze fase niet gewijzigd.

## UX/ontwerp dat hiermee niet opnieuw hoeft te worden besproken
- De artiestenwereld blijft een **muzikale pleisterplaats**, niet primair een informatiepagina.
- Hoofdvolgorde: **Eerst muziek. Dan jij. Dan de wereld.**
- De gevalideerde H.E.A.T.-navigatiegrammatica blijft richtinggevend; geen fundamenteel herontwerp voordat bredere verrijking wordt uitgerold.
- Music DNA verzint geen ontbrekende feiten om een pagina voller te laten lijken.
- De generieke artiestenwereld is het veilige geraamte voor alle 3.284 artiestenwerelden; rijke inhoud wordt daar later gecontroleerd bovenop gezet.

## Belangrijke commits
- `ad110bbb951e2ca441b524b1865ab9fb42f05b70` — Add complete Verras me v4 production data
- `482d420bb7af39dc23d151c70fa74ba5112e7d1a` — Wire Verras me v4 to 16 complete production parts
- `5eb3bb1889b77f172f38ad359abff17f5b877384` — Checkpoint full Verras me v4 production validation
- `316a217fe3040e565231ac7f04631c5285ef2153` — Build reusable Master-derived artist world v1
- `19baf2aad0b836b69095b4bfd324e58aa375d7b0` — Connect Verras me to reusable artist worlds

## Extra herstelanker
Een vaste herstelbranch is aangemaakt op de exact gevalideerde toestand:
`checkpoint/verras-v4-artist-worlds-2026-09-05`

Die branch wijst naar commit `19baf2aad0b836b69095b4bfd324e58aa375d7b0` en mag niet als gewone ontwikkelbranch worden gebruikt.

## Wat nog openstaat
- Generieke artiestenwerelden stapsgewijs verrijken met betrouwbare brongebonden gegevens.
- Stabiele artiestidentiteit verder harden voordat automatische brede enrichment wordt toegepast.
- Duurzame personal state/recent-history boven lokale browseropslag uitwerken.
- Spotify één-tik-afspeelgedrag onderzoeken; huidige correcte trackbestemming is geen autoplay-garantie.
- Rating persistence blijft een harde eis.
- Mood/Theme alleen toevoegen waar scope en bron betrouwbaar zijn.

## Exacte volgende bouwlaag
Bouw vanuit de huidige generieke artiestenwereld naar een rijkere, databron-gedreven artiestenwereld. Gebruik het bestaande geraamte voor alle artiesten en voeg verrijking modulair toe; maak geen parallelle handmatig onderhouden artiestendatabase en herbouw Verras me! v4 niet.

## Hervattingsregel
Bij een volgende Music-DNA-sessie eerst dit checkpoint en de actuele project-/decision-/UX-/design-documenten lezen. Als de huidige `main` later beschadigd raakt, kan deze toestand exact worden teruggevonden via de herstelbranch of commit `19baf2aad0b836b69095b4bfd324e58aa375d7b0`.
