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
**Decision:** `Ben_Master_Music_DNA_Database_1.7_Spotify_Gereconcilieerd_2026-08-25.xlsx` is the fixed music-content underlayer. DNA playlists are relationships/selections from it. `artist-registry-v1.json` remains experimental and must not become a manually maintained parallel database.

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
