# Ben's Music DNA — Project State

Last updated: 2026-09-14
Status: ACTIVE DEVELOPMENT — W37 CLOSED / TAXONOMY REPAIR CLOSED / DNA EXPRESS-MAKER EDITIE NUL ACTIVE PROTOTYPE

## Product north star
**Eerst muziek. Dan jij. Dan de wereld.**
Music is the main road. Rich artist information is optional reward for curiosity. The app remembers the route back to music.

## Current product focus — DNA EXPRESS-MAKER
DNA EXPRESS-MAKER is an **active built product line**. Editie NUL reconstructs the issue that would have landed Saturday 12 September 2026; No.001 is intended as the first prospective issue.

Core publication idea: **Geen muzieknieuws dat jij moet doorzoeken. Jouw muziekwereld, voor jou geredigeerd.**
Working line: **The personal music weekly · powered by Music DNA**.

### Reading model
**De editie is het tijdschrift. Het scherm bepaalt hoe je haar leest.**
- Mac: rich widescreen edition; no A4-like fixed sheet.
- iPhone: generous one-column reading edition.
- iPad: intermediate model; landscape may support true spreads.
- The magazine ritual remains cover → contents → articles → back page, but browsing is deliberately non-linear: tempting stories can be opened directly and the reader can return to the prior position.

### Art direction — ACCEPTED CONCEPT DIRECTION
Canonical current direction: `docs/DECISION-2026-09-14-DNA-EXPRESS-MAKER-ARTDIRECTION-2.0.md`.

The design has moved from layout toward **art direction**. Coffee-table test: would Ben pick it up, turn a page, skip ahead out of curiosity, return, and linger?

Permanent identity:
- late-1970s NME visual nerve and surprise;
- Melody Maker depth, photography, authority and reading space;
- Music DNA personal intelligence;
- modern 2026 digital execution.

Artist-led model: EXPRESS-MAKER is the permanent house; the headliner supplies the weekly visual weather; substantial guest artists/subjects temporarily own their pages through their own visual language. No substantial artist page without artist identity. Visual rest comes from composition and scale, not empty white pages. Controlled imperfection is welcome when purposeful. Rights/licensing remains a hard boundary: **we lenen de beeldtaal; we stelen het beeld niet.**

Whole-issue visual dramaturgy is designed before pages are locked. The next page should offer something visually different, not necessarily louder. The issue as a whole must be compelling to browse.

Editorial restraint: **Geen tekst zonder redactionele functie. Geen versiering die zichzelf moet uitleggen. Vertrouw op het beeld. Een symbool mag een geheim hebben.**

### Visual context layer
- `KANTTEKENINGEN`: selective visual footnotes/context.
- `GEZIEN?`: playful multiple-choice visual quiz near the back; never homework/judgement.
- `ACHTER HET BEELD`: optional deeper explanation of selected art-direction choices.
- Some easter eggs remain unexplained.
- Annual editions may aggregate GEZIEN? recognition statistics.

Principle: **Het beeld hoeft zichzelf niet uit te leggen. EXPRESS-MAKER mag zijn lezer wél vertellen wat er te ontdekken valt.**

### Recurring editorial source worlds
**Band DNA:** each 30-name playlist is the namegiver plus **29 surrounding artists**. Use it repeatedly to investigate musical, personnel, producer, label, management, touring, geographic, historical, brand/visual and statistical relationships. Weak/no relationships are valid findings. Exact existing Band-DNA visual identities must be recovered/reused, not invented.

**Genre DNA:** equally renewable editorial source without one central artist; useful for clusters, borders, period/country bias, track characteristics and contrasts between band kinship and genre kinship.

**Van de MASTER …:** flexible personal facts/patterns from the Master, integrated where editorially useful rather than forced into a fixed box.

### Character rubrics
**LIVE!** = human/physical/immediate; large concert photography, stage light, movement, crowd and anticipation. Personal/local shows can have equal editorial dignity to arena shows. Avoid concert-card dashboards.

**FLASHBACK** = time machine, not nostalgia list. Start from the actual corresponding historical music-press week, find an artist then small/emerging/at a turning point, reconstruct what was knowable then, then follow the wordingsgang to the present. Core twist: **ze wisten nog niet wat wij nu weten.** Where reliable, Ben's own point of entry may join the timeline.

**DIEPTEBOM** = optional editor's privilege for an unusually compelling discovery: unexpected connection + real depth + immediate curiosity. If nothing earns it, no Dieptebom. Music Master visual folklore: restrained FIRE control / finger on the trigger. Contents may tease **DIEPTEBOM — geen spoilers**. Reader can jump straight to it and return.

### Edelstenenkabinet / Ontdek DNA
Ontdek DNA is the weekly musical harvest/reward near the end, distinct from Mijn Week.
- Mijn Week = what happened to Ben's taste / what Music DNA observed.
- Ontdek DNA = what the week yielded musically.

The **Edelstenenkabinet is the visual treasury of Music DNA** across Spotify, Ontdek DNA, EXPRESS-MAKER, Mijn Muziekwereld and the Annual. Each week gets one gemstone visual identity; the same week visual should be recognisable in EXPRESS-MAKER and on its Spotify playlist.

`HET VERHAAL VAN DE STEEN` may tell the real geology/origin/history/visual properties of the weekly stone and only then make a restrained musical connection. Prefer factual wonder over invented mysticism.

The 52 weekly visuals should be capable of forming a credible year-level rainbow without falsifying natural stone appearance. Future Annual concept: all 52 weekly visuals form the luminous **corona around a total solar eclipse** — 52 weeks, one music year. From distance one crown; closer inspection reveals the weeks.

## Editie NUL — current whole-issue dramaturgy
1. Cover — Green Lung / Necropolitan.
2. Opening + contents — withdrawn Green Lung/map-like orientation.
3–4. Mijn Week — personal spread.
5–6. Green Lung — full immersion.
7. Steven Wilson — space/scale/conceptual quiet; 2026 transition from The Overview toward Requiem For A Village.
8. Hard & Heavy — speed/steel/urban-night; Editie NUL current backbone Iron Maiden / Somewhere in Time 40 without copying protected artwork.
9. Band/Genre DNA — personal relationships/patterns, not dashboard.
10. LIVE! — photographic physicality.
11. FLASHBACK — historical press plus forward time-jump.
12. DIEPTEBOM — only if editorial discovery earns FIRE.
13. Ontdek DNA / Edelstenenkabinet — harvest + weekly stone visual + story of the stone.
14. GEZIEN? / Kanttekeningen / Opdracht aan de redactie / back-page closure, arranged for rhythm rather than mechanically forced into one screen.

Arc: **VERLEIDING → ORIËNTATIE → PERSOONLIJK → ONDERDOMPELING → CONTRAST → ENERGIE → HERKENNING → LIVE → TIJDREIS → VERRASSING → BELONING → AFSCHEID.**

## Source of truth — music data
The Master remains the primary content substrate. Definitive safe physical Master:
`Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx`
Broad taxonomy repair is **GESLOTEN**. Do not reopen it without a concrete functional blocker. `data/artist-registry-v1.json` remains experimental, not the central database.

## Architecture
1. Master music database
2. Entity registry
3. Semantic enrichment
4. Knowledge graph
5. Living/current layer
6. Personal memory
7. Generated app-serving layer
8. Presentation / publication layer

See `docs/ENRICHMENT-SCHEMA-V1-2026-09-03.md`.

## Daily UX
- Daily discoveries adapt between 3 and 4 positions through the accepted positive-reserve model.
- Positions 1–3 are official and count for Muziekmeter; position 4 is reserve-only and never counts for Muziekmeter.
- Player elapsed/remaining.
- Stored ratings persist visibly.
- Missed tracks do not become homework.
- Flow: **beoordelen → dagelijkse oogst → uitnodiging/portal → Mijn Muziekwereld → vrije muzikale verkenning**.

## Ratings
Internal: `raak`, `goed`, `twijfel`, `nee`.
Visible: **RAAK / GOED / NOG EENS / NEE**.
`NOG EENS` is unresolved; exact Second Chance lifecycle remains open.

## Mijn Muziekwereld
Two equal destinations:
1. **Edelstenenkabinet — BEWAREN**
2. **Muziekportaal — ONTDEKKEN**

Core rule: **Music DNA builds no generic decor around an artist. The identity, history and real musical relationships of the artist determine how that artist world manifests.**

## Music Master
Gastheer, conservator and ceremoniemeester; distinguished, mysterious and inviting; never more important than the music and never dictates taste. In EXPRESS-MAKER the Music Master may also act as editor/curator; DIEPTEBOM's FIRE folklore is an occasional visual/editorial privilege, not his dominant identity.

## Artist World 1.0
Governing decision: `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`.
First vertical proof remains: **H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**.
This route remains accepted but is **temporarily parked while DNA EXPRESS-MAKER / Editie NUL is the active product focus**.

## Personal Weekbrief → DNA EXPRESS-MAKER
The earlier Personal Weekbrief concept has developed into DNA EXPRESS-MAKER. Governing/background documents include `docs/DECISION-2026-09-11-PERSONAL-WEEKBRIEF.md`, `docs/SOURCE-MAP-MUSIC-JOURNALISM-2026-09-12.md`, the dated DNA EXPRESS-MAKER/Editie NUL decisions, and `docs/DECISION-2026-09-14-DNA-EXPRESS-MAKER-ARTDIRECTION-2.0.md`.

### Editorial learning period — ACTIVE
Decision: `docs/DECISION-2026-09-13-DNA-EXPRESS-MAKER-LEERPERIODE.md` (commit `20bbd8a75f118618d24d7fae818a6f5ac693cedf`).
September–December 2026 is a deliberate editorial learning period. Each issue remains a full product. A short post-issue survey may gather browsing/visual/story/surprise feedback without turning reading into homework. Music DNA learns which music moves Ben; EXPRESS-MAKER learns how Ben likes to experience his music world. First Redactierapport: January 2027.

## Muziekmeter / Ontdek-DNA learning
Governing decision: `docs/DECISION-2026-09-11-MUZIEKMETER-ONTDEK-DNA.md` plus the 2026-09-13 longitudinal decision.
The official weekly observation set is **21 ratings**: seven days × three official positions. Position 4 may feed the positive reserve but never the official Muziekmeter. First meaningful formal conclusions begin January 2027; deeper trend analysis is quarterly thereafter, with compact weekly feedback in EXPRESS-MAKER.

Weekly Ontdek DNA contains exactly **21 tracks**: current-week positive official tracks first, then unused FIFO positive reserve to 21. Used reserve tracks are consumed permanently. The accepted positive Saturday reserve model governs W38 onward.

## W38 — OPEN / IN UITVOERING
W38 uses the adaptive 3/4 daily model and positive reserve. Candidate/config and Saturday-path implementation exist; structural Saturday validation has passed. Live Saturday delivery remains pending. Do not claim live delivery before real verification.

## Ontdek DNA — W36 — GESLOTEN
21/21 ratings; Spotify playlist verified; first jewel/prototype **Granaat**. Do not reopen.

## Ontdek DNA — W37 — GESLOTEN
W37 ran 6–12 September 2026. All 21 daily ratings are preserved. The Spotify playlist was restored to the agreed 21 tracks and visually verified. Do not silently reopen it.

## Playlist restoration
Genre DNA: UK Punk #01/#02 are 30/30 Spotify-closed. Alternative Metal DNA 2.0 has fixed Top 30 but awaits safe Spotify final verification. Canterbury Scene remains **ONDER VOORBEHOUD**.
Band DNA: controlled restoration/listening pass closed; 19 current Band-DNA playlists have descriptions and covers.

## W.A.S.P. / Randy Piper
Local Files material and three controlled 10/10 local playlists closed. Do not reopen ripping.

## Spotify folder hierarchy — fixed
- `♦ DNA`
- `✧ Band DNA`
- `Genre DNA`
- `💎 Ontdek DNA`

## Playlist/importer rules
Spotify is operational final control. Never guess URI. 30/30 means 30 checked tracks. Weekly Ontdek DNA means 21/21 tracks before closure. Closed playlists are not silently reopened. Technical/import failure ≠ content completion. Historical work year is not silently overwritten. Spotify availability requires direct identity/playability. Strong duration mismatch triggers review.

## Governance
Material decision changes name the existing decision, explain why, receive Ben's acceptance, get a dated GitHub decision, and record supersession. Status words remain strict: **GESLOTEN / OPEN / IN UITVOERING / ONDER VOORBEHOUD / HISTORISCH / VALIDATED / ACCEPTED CONCEPT DIRECTION / RELEASED / LIVE**.

## Open risks / work
1. Rating persistence/localStorage migration.
2. Safari vs installed home-screen storage context.
3. Durable iOS launch/cache/version routing.
4. Export/import contract.
5. Gift-history vs Spotify delivery verification.
6. Stable artist identity before broad enrichment.
7. Rights/licensing/source policy, including EXPRESS-MAKER editorial imagery, album artwork, logos, visual oeuvre and historical press material.
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
19. EXPRESS-MAKER publication/deployment path: proof wrappers versus canonical production route and GitHub Pages reliability.
20. EXPRESS-MAKER responsive parity: Mac widescreen, iPhone one-column and iPad intermediate behavior require explicit production verification.
21. EXPRESS-MAKER editorial source provenance and image-rights/attribution policy must be production-safe.
22. EXPRESS-MAKER prototype content/data must remain clearly separated from structural production data and future automated weekly generation.
23. Art-direction automation must preserve editorial judgement and visual dramaturgy; avoid template/card/dashboard convergence.
24. Artist visual-oeuvre sourcing must distinguish inspiration, licensed/direct reproduction and newly composed visual grammar.
25. Exact existing special Band-DNA visual identities still need reliable recovery before Band-DNA page production.
26. FLASHBACK requires date-boundary historical source verification for each issue; Editie NUL must research 6–12 September 1978 before choosing its featured artist.
27. Annual year-rainbow/corona system needs a future data/visual contract that preserves each weekly stone identity and navigation.

## Immediate next step
**Compose DNA EXPRESS-MAKER Editie NUL as one coherent visual sequence under Art Direction 2.0 before writing another generic HTML layout.** Use Green Lung as issue-wide visual weather, allow guest subjects to own their pages, preserve the newly defined Band/Genre DNA, LIVE!, FLASHBACK, optional DIEPTEBOM and Edelstenenkabinet identities, and design the full page-turning rhythm first. Then produce the next visual proof for Mac widescreen, iPhone one-column and iPad intermediate behavior while preserving rights/source boundaries. Only after acceptance should the proof be consolidated into canonical publication architecture rather than left as an iframe/wrapper experiment.
