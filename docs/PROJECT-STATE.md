# Ben's Music DNA — Project State

Last updated: 2026-09-13
Status: ACTIVE DEVELOPMENT — W37 CLOSED / TAXONOMY REPAIR CLOSED / ARTIST WORLD 1.0 VERTICAL PROOF ACTIVE

## Product north star
**Eerst muziek. Dan jij. Dan de wereld.**
Music is the main road. Rich artist information is optional reward for curiosity. The app remembers the route back to music.

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
8. Presentation

See `docs/ENRICHMENT-SCHEMA-V1-2026-09-03.md`.

## Daily UX
- 3 discoveries/day; music first.
- Player elapsed/remaining.
- Stored ratings persist visibly.
- After 3/3 stop questions.
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
Gastheer, conservator and ceremoniemeester; distinguished, mysterious and inviting; never more important than the music and never dictates taste.

## Edelstenenkabinet
Weekly Ontdek-DNA gemstones are persistent exhibits: the jewels of Ben's personal musical taste. W36's first official jewel/prototype is **Granaat**.

## Artist World 1.0 — ACTIVE MAIN ROUTE
Governing decision: `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`.

First vertical proof:
**H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**.

Principles:
- Studio first for H.E.A.T proof.
- Explain music to a music lover, not an engineer.
- Essential knowledge/Trivia compact; detail behind.
- `MEER ZOALS DEZE ARTIEST` gives a few explainable doors and preserves relation type.
- `LIJKT INTERESSANT` records curiosity only and may feed Ontdek-DNA candidate pool.
- `EXIT` is universal spatial grammar.
- **You may get lost in Music DNA, but you must never become lost.**
- Rich data → richer world; sparse data → compact credible world; never invent filler.
- Reusable scene grammar/components.
- Still by default; movement only when meaningful.
- Order: **WERKEN → BEGRIJPELIJK → MOOI → SFEERVOL → LEVENDIG**.

## Personal Weekbrief
Accepted future layer: `docs/DECISION-2026-09-11-PERSONAL-WEEKBRIEF.md` and `docs/SOURCE-MAP-MUSIC-JOURNALISM-2026-09-12.md`. It does not interrupt Artist World 1.0.

## Muziekmeter / Ontdek-DNA learning
Governing decision: `docs/DECISION-2026-09-11-MUZIEKMETER-ONTDEK-DNA.md`.
Keep separate:
1. 21 ratings = raw weekly evidence.
2. Muziekmeter = summarized weekly result.
3. Ontdek-DNA jewel/playlist = curated weekly harvest.

W36–W52 2026 = first calibration/reference set (17 weeks / 357 ratings). Preserve raw evidence. Improve fit without optimizing surprise away.

### Weekly Spotify gift — ACTIVE rule from 2026-09-13
Governing decision: `docs/DECISION-2026-09-13-ONTDEK-DNA-UNIQUE-POSITIVE-HARVEST.md`.
The gift is the unique safely deliverable positive harvest, not an artificially padded fixed-size list. Current-week RAAK/GOED comes first; unused never-before-delivered positive reserve may supplement it. Previously delivered tracks, NOG EENS and NEE are never filler merely to reach 21.

## Visual identity
Double DNA helix + waveform; Direction C — Living DNA. Black base, emerald mark, violet action/Second Chance. Technology under hood; wonder outside.

## Rich artist world + Verras me! v4 — VALIDATED
`test/surprise-me-v4-full.html` works over 3,284 safe Master-derived artist worlds. Missing facts are not invented.

## Muzikale pleisterplaats
Artist world = **muzikale pleisterplaats**, not primarily an information page. Spotify is contextual listening.
**Waar Music DNA een muzikale bewering doet, moet je die waar mogelijk met één tik kunnen beluisteren.**

## Mood / Theme
Genre DNA = what kind; Mood DNA = how it feels; Theme DNA = when/why it fits; Ben DNA = what actually moves Ben. Mood/Theme are optional first-class axes and never silently inherited album→track.

## Verras me! versus Ontdek DNA
- Ontdek DNA = music that may be new to Ben.
- Verras me! = rediscover music already inside Ben's world.

## Ontdek DNA — W36 — GESLOTEN
21/21 ratings; Spotify playlist verified; first jewel/prototype **Granaat**. Do not reopen.
Recovery: `docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`.

## Ontdek DNA — W37 — GESLOTEN
Ran 6–12 September 2026. All 21 ratings preserved. On 13 September the repaired Spotify gift was visually verified as **12 unique positive tracks**. W36 was unchanged. W37 must not be silently reopened.

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
Spotify is operational final control. Never guess URI. 30/30 = 30 checked tracks. Weekly measurement = 21/21 ratings; Spotify gift size follows unique-positive-harvest rule. Closed playlists are not silently reopened. Technical/import failure ≠ content completion. Historical work year is not silently overwritten. Spotify availability requires direct identity/playability. Strong duration mismatch triggers review.

## Governance
Material decision changes name the existing decision, explain why, receive Ben's acceptance, get a dated GitHub decision, and record supersession. Status words remain strict: **GESLOTEN / OPEN / IN UITVOERING / ONDER VOORBEHOUD / HISTORISCH / VALIDATED / ACCEPTED CONCEPT DIRECTION / RELEASED / LIVE**.

## Open risks / work
1. Rating persistence/localStorage migration.
2. Safari vs installed home-screen storage context.
3. Durable iOS launch/cache/version routing.
4. Export/import contract.
5. Gift-history vs Spotify delivery verification.
6. Stable artist identity before broad enrichment.
7. Rights/licensing/source policy.
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

## Immediate next product step
With W37 closed, resume **Artist World 1.0 vertical proof**: **H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**. Do not reopen W36/W37 or broad taxonomy repair unless a concrete blocker requires it.
