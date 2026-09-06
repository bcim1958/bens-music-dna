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
