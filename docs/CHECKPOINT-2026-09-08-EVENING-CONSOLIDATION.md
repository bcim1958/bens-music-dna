# Ben's Music DNA — 8 September 2026 evening consolidation

Checkpoint date: 2026-09-08
Consolidated on: 2026-09-09
Repository head covered through: `2b8ebad5034c73fe0073ae277f90f3885a6b0b8a` — **Add first Mijn Muziekwereld mobile entrance prototype**.

## Purpose
This checkpoint closes the archive gap between the morning W36 recovery state and the actual end-of-day project state on 8 September. It distinguishes what was proven/released, what was accepted as product direction, what is still isolated prototype work, and which risks remain open.

## 1. W36 — GESLOTEN
The W36 recovery remains closed. Do not reopen its musical content without an explicit change decision.

## 2. W37 — RELEASED / CURRENT LIVE WEEK
The old `PROJECT-STATE.md` description of W37 as not yet released is superseded.

Repository progression on 8 September includes:
- verified W37 candidate pool;
- generic weekly learning/catch-up preparation;
- validated W37 candidate week release;
- live Music DNA routing to W37;
- restoration of the live entrypoint after W36 repair;
- exposure of W37 candidates to the live week loader;
- completed-day button fix for the current W37 day.

Current resolver state in `test/music-dna-weeks-v1.js` has both W36 and W37 `ready:true`, with W37 resolving as the active week for 6–12 September 2026.

This means the prior exact-next-step instruction to audit whether W37 assets exist/readiness can be enabled is HISTORISCH and must not be used as the current next step.

Important: this does not close the broader persistence/cache architecture risks. Rating persistence, Safari versus installed home-screen app storage, and iOS launch/cache behavior remain open hard risks.

## 3. Daily rating experience — ACCEPTED DIRECTION, PROTOTYPE IMPLEMENTATION
The semantic rating system remains accepted:
- RAAK
- GOED
- NOG EENS
- NEE

The 8 September filmic mobile work refined how these reactions should feel and be explained. The accepted direction is that reaction controls are cinematic Music-DNA objects, not generic emoji, and that optional explanation layers can clarify both the emotional meaning and what Music DNA learns.

Current implementation status: **PROTOTYPE / NOT PRODUCTION-INTEGRATED**.

Relevant isolated prototypes include:
- `test/daily-cinematic-v3.html`

These prototype pages explicitly do not read or modify W37 ratings. They are safe visual/interaction experiments, not the live rating engine.

## 4. Daily harvest → Mijn Muziekwereld — ACCEPTED PRODUCT DIRECTION, PROTOTYPE IMPLEMENTATION
Accepted product direction from the 8 September design session:

**beoordelen → dagelijkse oogst → uitnodiging/portal → Mijn Muziekwereld → vrije muzikale verkenning**

The daily completion state should not turn into more homework. It may briefly show what the day yielded and then invite Ben into his broader music world, while preserving the principle that the user decides how far to continue.

Current implementation status: **PROTOTYPE / NOT PRODUCTION-INTEGRATED**.

Relevant isolated prototypes:
- `test/daily-harvest-v1.html`
- `test/my-music-world-v1.html`

`my-music-world-v1.html` currently explores a destination with positive discoveries first and entry points toward Mijn RAAK, Band DNA, Genre DNA and Ontdek DNA. The prototype explicitly does not read or modify W37 ratings.

## 5. The Music Master — ACCEPTED CREATIVE DIRECTION, NOT YET A PRODUCT CONTRACT
The Music Master is an accepted creative direction for a restrained ceremonial guide in the Music-DNA world: distinguished, mysterious, inviting, never more important than the music, and never dictating taste.

Core product principle:
- Music DNA learns.
- The Music Master notices.
- The portal invites.
- Mijn Muziekwereld lets Ben explore.
- Ben always decides how far he goes.

The visual/persona work remains design direction, not a finalized production component or technical contract.

## 6. Band-DNA listening pass — GESLOTEN FOR CURRENT SPOTIFY SET
The existing Band-DNA playlists in the current Spotify Band DNA set received a controlled listening-order pass on 8 September.

Standing rule:

> **De naamgever bepaalt de wereld; de volgorde vertelt het verhaal.**

The operation did not reopen the already controlled 30-track content selections. It only reordered the same 30 tracks into a deliberate listening arc, with the naming artist at #1.

The local Playlist Orderer became the standard safe mechanism for this operation:
- exact playlist-name match;
- exactly 30 tracks required;
- expected artist set checked before writing;
- STOP on missing/extra/duplicate/unplayable mismatch;
- same-set recheck immediately before write;
- exact-order recheck after write;
- Spotify remains the final visual control.

KISS required repair of an unavailable Saraya listing by replacing it with a working Spotify listing of the same song/artist before the listening pass. No musical substitution was made.

WASP Band DNA was also reordered without changing its 30-track content. Its post-listening-pass anchors are now:
- #1 W.A.S.P. — The Headless Children
- #30 Alice Cooper — Go to Hell

## 7. Master / Spotify synchronization — OPEN
The Master remains the content source of truth, but restored/reordered Spotify playlist relations must not be assumed to be synchronized into the safe Excel basis.

Next controlled content task: audit actual Master coverage before building new music data, with UK Punk as an explicit attention area and with Spotify availability checks recognizing that a release not visible in a normal discography view may still exist through a direct Spotify album/track identity and be genuinely playable.

## 8. User-owned W.A.S.P. / Randy Piper albums
A joint ripping/insertion attempt on 7 September failed, but Ben subsequently completed the ripping/local insertion himself successfully that evening. Therefore the open task is not “solve ripping”; only any remaining Spotify/Music-DNA placement, metadata or presentation work should be treated as open.

## 9. Spotify covers — OPEN
A consistent Music-DNA cover system for Spotify playlists remains an open design/implementation task. W36 explicitly already allowed a later uniform weekly cover as cosmetic system-level work.

## 10. Open technical risks carried forward
The following remain open and must not be erased by the successful W37 release or prototype work:
- rating persistence/localStorage migration;
- Safari vs installed home-screen web-app storage context;
- durable iOS cache/launch/version routing;
- Second Chance lifecycle and persistence;
- Spotify import/export contract versioning;
- stable artist identity;
- durable personal/recent-history state;
- Spotify one-tap/autoplay integration behavior;
- controlled Master synchronization of playlist relations;
- Alternative Metal DNA 2.0 Spotify closure when rate limiting allows it.

## Exact next step after consolidation
**Audit the actual coverage and synchronization state of the Master database before creating new music data.**

Start from the safe Excel basis, establish what is already present, identify genuine coverage gaps (UK Punk explicitly), distinguish Spotify visibility from real Spotify availability, and only then decide what needs enrichment or repair.

After that controlled audit, resume app/product building from the accepted directions above without treating the isolated prototypes as already integrated production behavior.
