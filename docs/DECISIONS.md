# Ben's Music DNA — Decision Log

This is the durable record of accepted product decisions. New chats must not silently reopen these decisions; changes require a new dated decision explaining why.

## 2026-09-03 — Music remains the centre
**Decision:** Music is the primary function. Rich artist/band worlds are supporting and optional, but the app must not become visually barren.
**Reason:** Daily value comes from listening/discovery; enrichment is the reward for curiosity.
**Phrase:** Eerst muziek. Dan jij. Dan de wereld.

## 2026-09-03 — Rating UI becomes cinematic
**Decision:** Do not use generic ❤️ 👍 😐 👎 as the visible final language. Use four bespoke cinematic Music DNA reaction objects.
- RAAK: golden light impact.
- GOED: blue musical resonance.
- NOG EENS: violet returning film/light ribbon.
- NEE: fading red/orange signal/light.
**Reason:** Daily controls must belong to the visual world of the app and make `NOG EENS` feel like a valid future encounter, not a weak/negative vote.

## 2026-09-03 — Second Chance principle
**Decision:** A `NOG EENS`/doubt case is not finished or discarded. It remains eligible for a later dedicated re-listen. Current intended moment: first day of each quarter via a temporary Second Chance list.
**Open:** exact lifecycle, expiry and re-rating rules still need technical specification.

## 2026-09-03 — Choice screen navigation
**Decision:** Separate music playback controls from Music DNA discovery navigation. Provide Previous Discovery / Next Discovery where applicable. Returning to a discovery must preserve/show its rating.

## 2026-09-03 — After daily 3/3
**Decision:** Stop asking questions after the third discovery. Briefly confirm completion and return Ben to the broader Music DNA home/free exploration experience.

## 2026-09-03 — App icon identity
**Decision:** Retain the original semantic concept: double DNA helix + sound waveform. Film is the app's visual language, not a replacement for the brand mark.
**Chosen direction:** C — Living DNA.
**Characteristics:** black background, emerald living helix/wave, strong small-size legibility, subtle cinematic depth.

## 2026-09-03 — App icon action counter
**Decision:** Show a counter on the Music DNA app icon only for real actions requiring Ben's input. Daily example: 3 -> 2 -> 1 -> none. Passive content does not increase the counter. Violet is the preferred action accent.

## 2026-09-03 — Master database is content source of truth
**Decision:** The Master music database is the fixed content underlayer. DNA playlists are relationships/selections from it. `artist-registry-v1.json` remains experimental and must not become a manually maintained parallel database.

**Current safe spreadsheet nuance (2026-09-06):** the safe taxonomy-repair working basis is `Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-04_v2.xlsx`; later investigated repairs may exist without already being safely written into that xlsx. Do not silently equate investigated with synchronized.

## 2026-09-03 — Mood DNA and Theme DNA are first-class discovery axes
**Decision:** Treat AllMusic Mood and Theme metadata as distinct layers alongside Genre DNA rather than flattening them into genre/style.
- Genre DNA = what kind of music is it?
- Mood DNA = how does it feel?
- Theme DNA = when/why does it fit?
- Ben DNA = what actually proves to move Ben?
**Reason:** this turns the full Master into a richer discovery substrate and enables playlists such as Dark & Theatrical, Epic & Driving, Night Driving, Late Night, Road Trip, etc., without duplicating tracks.
**Constraint:** Mood/Theme playlists should be generated from relationships/tags and personal weighting, not by copying track data into parallel databases.

## 2026-09-03 — Richness must never become complexity
**Decision:** The amount of information behind Music DNA may grow dramatically, but the visible experience must remain calm, accessible and easy to explain.
**Rule:** Music DNA shows first what is important, then what is interesting, and only then everything that is possible.
**Artist-page test:** within seconds the user should see who the artist is, what they sound like and why they are in Ben's Music DNA.
**Navigation depth:** Kijken -> Bladeren -> Verdwalen, with persistent context and a guaranteed way back.
**Constraint:** avoid Wikipedia-like forests of inline links and card-grid overload; expose deeper relationships through deliberate, meaningful entries such as `Ontdek de verbinding` or `Meer zoals…`.

## 2026-09-03 — H.E.A.T becomes the first full rich-artist pilot
**Decision:** Use H.E.A.T as the first artist-world prototype to test the complete experience: Master relation, genre/styles, moods, themes, story, albums, people, live/current layer, reviews/interviews, related artists, credits and graph connections.
**Purpose:** validate how much richness can sit behind one calm, phone-first artist page before scaling enrichment across the Master.

## Standing — Rating persistence
**Decision:** A rating once given may never be lost or presented later as if Ben had never rated that track. Persistence/migration is a hard product requirement.

## 2026-09-06 — Closed decisions may not be silently replaced
**Decision:** An accepted Music-DNA decision may not be changed implicitly by a later chat, refactor or design idea.

A proposed change must:
1. identify the existing decision it affects;
2. explain the reason for changing it;
3. receive explicit acceptance from Ben;
4. be recorded as a new dated GitHub decision;
5. state clearly which older decision is historical and which is superseded where applicable.

**Reason:** correctness is not only technical; continuity of intent and agreements is part of project integrity.

## 2026-09-06 — Status language is controlled
**Decision:** Use project status terms consistently.
- **GESLOTEN** — not reopened without an explicit change decision.
- **OPEN / IN UITVOERING** — not yet complete.
- **ONDER VOORBEHOUD** — intentionally not final.
- **HISTORISCH** — retained for provenance but no longer current truth.

A technical failure or partial import may never be described as closed merely because an intermediate file or tool reported success.

## 2026-09-06 — Spotify is final operational playlist control
**Decision:** A DNA playlist is only closed after verification in Spotify itself.

Required chain:
**content audit → establish actual gaps → agree removals/additions → user removes → verify exact Spotify versions/URIs → small import CSV → import into existing playlist → verify in Spotify → only then close at real 30/30 with active tracks → synchronize Master afterward.**

Hard constraints:
- importer/CSV success alone never closes a playlist;
- never invent or guess Spotify URIs;
- 30/30 means 30 actually verified tracks, not merely 30 rows;
- closed playlists are not silently changed.

## 2026-09-06 — Reaction symbols must become more distinctive
**Decision:** Preserve the four accepted meanings RAAK / GOED / NOG EENS / NEE, but refine their visible symbols so they are substantially more unique, memorable and cinematic than generic icons or emoji.

**Constraint:** the existing gold/blue/violet/red-orange cinematic language remains directionally valid, but the concrete pictograms/objects may be redesigned to become more characteristic of Music DNA.

**Reason:** the reaction controls are central daily interaction objects and should feel like part of the same filmic Music-DNA world rather than ordinary phone controls.

## 2026-09-06 — Chat is workbench, GitHub is archive
**Decision:** New project knowledge required for recovery, handoff or consistent continuation must not remain only in chat. During or at the end of a substantial session it must be consolidated to GitHub.

Health checks therefore assess not only repository health but also alignment between GitHub and the actual project state, including chat-only decisions, Master/Spotify differences and outdated project-state documentation.

## 2026-09-08 — Band-DNA listening order tells a story
**Decision:** For an already controlled 30-track Band-DNA playlist, the listening pass may reorder the same 30 tracks without reopening content selection.

**Standing phrase:** **De naamgever bepaalt de wereld; de volgorde vertelt het verhaal.**

Rules:
- the naming artist/band remains #1 and establishes the reference world;
- the other 29 tracks are not reselected merely for the listening pass;
- ordering should make musical kinship, contrast, bridges and return points audible rather than sort alphabetically or mechanically;
- the final track should function as a deliberate ending, not as a leftover;
- Spotify remains the final visual control after reordering.

**Safe mechanism:** use the local Playlist Orderer with exact playlist matching, exact 30-track/artist-set validation, STOP on mismatch, pre-write same-set verification and post-write exact-order verification.

## 2026-09-08 — Daily completion can open into Mijn Muziekwereld
**Decision:** The accepted product direction after the daily three is:

**beoordelen → dagelijkse oogst → uitnodiging/portal → Mijn Muziekwereld → vrije muzikale verkenning.**

The daily task remains finite: after 3/3 Music DNA asks no more questions. The next layer is optional exploration, not additional homework.

**Mijn Muziekwereld direction:** positive discoveries can receive first attention and may lead toward artist exploration, Mijn RAAK, Band DNA, Genre DNA and Ontdek DNA.

**The Music Master direction:** a restrained ceremonial guide may notice and invite at meaningful moments, but never becomes more important than the music and never dictates Ben's taste.

**Implementation status:** the 8 September pages for cinematic rating, daily harvest and Mijn Muziekwereld are isolated prototypes. This decision accepts the product direction, not those prototype files as production-ready behavior.

## 2026-09-09 — Ontdek DNA annual finale becomes a cinematic ritual
**Decision:** Preserve the concept of a very short cinematic sequence for the closing Ontdek-DNA week gift of a calendar year. This is a special annual moment, not a weekly video routine.

**2026 concept:** The Music Master presents the final gemstone of the 2026 Ontdek-DNA colour journey — currently conceived as opal — theatrically on his open hand. Alternatively/precedingly, his staff may radiate or activate the moment. The exceptional ruby remains physically in the staff; it is not transformed into or given away as the weekly gemstone.

**Visual story direction:** dark theatrical setting; restrained movement; the ruby in the staff briefly glows; light travels/emanates; the final gemstone appears or is revealed above/on The Music Master's open hand; its colours echo the year's gemstone colour journey; The Music Master offers it with a small ceremonial gesture.

**Duration direction:** approximately 8–12 seconds. No spoken explanation required; light, gesture and music carry the scene. Possible closing title: `ONTDEK DNA · 2026 — THE FINAL JEWEL` / `Week 52 · Opaal`.

**Meaning:** the final weekly gemstone visually gathers/reflects the preceding colour journey and closes the annual jewel collection. This can become a recurring year-end Music-DNA tradition, with each future year receiving its own final jewel/visual treatment.

**Status:** concept deliberately recorded now so it cannot disappear in day-to-day development. Exact storyboard, soundtrack, final gemstone and production method remain OPEN until the 2026 gemstone sequence is finalized.

## 2026-09-09 — Ontdek DNA gets a persistent Gemstone Cabinet
**Decision:** Add a subtle, museum-like **Edelstenenkabinet** inside the app's deeper `Mijn Muziekwereld` / behind-the-front-door experience. The weekly Ontdek-DNA gemstones are not disposable cover art: each revealed gemstone becomes a persistent exhibit in a growing personal collection.

**Core principle:** the playlists are never "gone" after their week. Ontdek-DNA playlists remain accessible through multiple routes, including directly in Spotify and through their gemstone in the Edelstenenkabinet. The cabinet therefore adds a durable, emotional route to the same music rather than creating a parallel playlist system.

**Meaning:** the collection represents **de juwelen van de persoonlijke muzieksmaak**. It grows through musical discovery, not through artificial points, badges or completion pressure.

**Experience direction:**
- The cabinet feels like a warm, dark, refined museum room: glass, wood/dark materials, restrained gold/brass and focused museum lighting.
- The Music Master is the subtle guardian/curator of the room. His presence may be felt or occasionally seen, but he never overshadows the music or the gemstones.
- Every Saturday's revealed gemstone is added to the current year's collection, so the cabinet visibly fills and its colour journey develops through the year.
- Selecting a gemstone can reveal three connected layers: **De steen** (real mineralogical properties, origin and a verified historical/cultural fact), **Het verhaal** (its place in that year's colour journey), and **De muziek** (a direct route to the exact associated Ontdek-DNA weekly playlist).
- Gemstone/mineral information remains factually correct and verifiable; The Music Master's surrounding presentation may remain theatrical/mythic.
- Annual collections remain separately browsable (for example `Collection 2026 · 17 jewels`, `Collection 2027 · 52 jewels`) so the personal musical discovery history accumulates instead of being overwritten.

**Annual finale rule:** the last jewel of each year visually summarizes the preceding colour journey. In 2026 the intended finale is opal reflecting the colours of W36–W51. A full 52-week year such as 2027 should culminate in an even richer and deeper final-jewel colour synthesis. The final mineral need not always be opal; it should be chosen to support the year's real mineralogical and visual story.

**Music Master mythology:** the fictive `Moeder aller Edelstenen` remains uniquely associated with The Music Master's cylinder and is not a weekly collectible. His exceptional Burmese ruby remains in his staff and is guarded rather than awarded. These special objects can be hinted at in the cabinet without becoming ordinary collection items.

**Design status:** accepted as a durable product concept. Exact room layout, interaction design, navigation labels, animation and technical Spotify deep-link implementation remain OPEN for later design/prototyping.
