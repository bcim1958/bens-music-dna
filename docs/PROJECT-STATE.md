# Ben's Music DNA — Project State

Last updated: 2026-09-08
Status: ACTIVE DEVELOPMENT — W36 RECOVERY CONSOLIDATED

## Product north star
Music DNA is Ben's daily go-to place for music experience.

**Eerst muziek. Dan jij. Dan de wereld.**

Music is the main road. Rich artist information is an optional reward for curiosity. The app must always remember the route back to the music.

## Source of truth — music data
The Master remains the primary content substrate. DNA playlists are selections/relationships over that music world; no manually maintained parallel music database may replace it.

Current safe Excel working basis for the taxonomy repair:
`Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-04_v2.xlsx`.

Important nuance:
- this v2 is the safe spreadsheet basis;
- later investigated taxonomy repairs may exist additionally without already being safely written into that xlsx;
- therefore do not silently treat every later investigated repair as synchronized to the Master;
- the older Master 1.7 baseline documents remain historical audits, not the current project-state declaration.

`data/artist-registry-v1.json` remains an experimental technical layer only, not the central music database.

## Current product architecture
1. Master music database — durable track/release/taxonomy/DNA substrate.
2. Entity registry — canonical identities with stable external IDs.
3. Semantic enrichment — scoped Mood/Theme relations.
4. Knowledge graph — people, memberships, credits, related/influence and other object relations.
5. Living/current layer — dated news/tours/setlists/current information.
6. Personal memory — ratings, offers, visits, Second Chance, recent surprise history.
7. Generated app-serving layer — normalized views for the phone UI.
8. Presentation — calm, cinematic, phone-first interface.

See `docs/ENRICHMENT-SCHEMA-V1-2026-09-03.md`.

## Daily UX
- 3 discoveries per day.
- Music first: listen before information overload.
- Player shows elapsed and remaining time.
- User can move to previous/next discovery where applicable.
- Returning to an already rated discovery shows the stored rating; it is never silently erased.
- After 3/3: brief completion state, then return home/free music exploration. No more questions.
- Missed tracks do not become homework/backlog.

## Rating concept — accepted semantic direction
Four reactions remain semantically compatible with internal values `raak`, `goed`, `twijfel`, `nee`, but the final UI must NOT use generic phone emoji.
Visible language:
- RAAK — strong musical/emotional hit.
- GOED — positive musical fit.
- NOG EENS — unresolved music that deserves another encounter.
- NEE — does not fit Ben.

The visual symbols must be distinctive, memorable and cinematic in the Music-DNA language. Existing gold/blue/violet/red-orange light language remains directional, but the concrete objects require further design refinement.

`NOG EENS` is unresolved music, not discarded music. Exact Second Chance lifecycle still needs technical specification.

## Visual identity
- Double DNA helix + sound waveform retained.
- Brand mark says what Music DNA IS; cinematic language says how Music DNA FEELS.
- Chosen icon direction: **C — Living DNA**.
- Black base, living emerald-green DNA/sound mark, violet action/Second-Chance accent.

## Rich artist world + Verras me! v4 — VALIDATED
The older H.E.A.T rich-artist proof remains a validated navigation/UX reference.

Current validated production state is newer:
- `test/surprise-me-v4-full.html` works over the full safe Master-derived world of **3,284 artist worlds**;
- production data is loaded from 16 controlled parts: `data/surprise-prod-full-01.txt` through `data/surprise-prod-full-16.txt`;
- the loader accepts only a unique, complete and consistent 16-part set totaling exactly 3,284 records;
- free draw and filtering by Genre, Style, Country and Period are validated on iPhone;
- Spotify destinations use existing Track URI anchors from the Master-derived data;
- a reusable generic artist world is connected and validated on iPhone;
- missing biography/people/current facts are not invented;
- Mood/Theme remain disabled where reliable enrichment is absent.

Validated checkpoint:
`docs/CHECKPOINT-2026-09-05-VERRAS-V4-ARTIST-WORLDS.md`.

Current main-line technical checkpoint before the 6 September consolidation:
`63afec10eec15beec7d8b1e62430502127c1050e` — **Lock validated Verras v4 artist-world checkpoint**.

## Muzikale pleisterplaats
A rich artist world is a **muzikale pleisterplaats**, not primarily an information page. Ben can arrive, listen, read, follow a surprising side path and leave again without completing anything.

Spotify is a contextual listening layer.

> **Waar Music DNA een muzikale bewering doet, moet je die waar mogelijk met één tik kunnen beluisteren.**

Unexpected links should be grounded in real Master/enrichment/graph data and have an optional `Waarom deze verbinding?` explanation.

## Mood DNA / Theme DNA direction
- Genre DNA = what kind of music?
- Mood DNA = how does it feel?
- Theme DNA = when/why does it fit?
- Ben DNA = what actually proves to move Ben?

Mood/Theme are first-class optional discovery axes. They are not required fields for every entity and are never silently inherited from album to track.

## Verras me! versus Ontdek DNA
- Ontdek DNA = find music that may be new to Ben.
- Verras me! = rediscover music already inside Ben's own music world.

They share data infrastructure but have different product purposes.

## Ontdek DNA — W36 recovery — GESLOTEN
W36 is now **GESLOTEN** as of 2026-09-08.

Verified chain:
- 21/21 W36 ratings preserved in the installed iPhone app storage;
- 10 positive W36 tracks found;
- safety guard remained active;
- 11 previously verified positive W35 reserve tracks restored without altering W36 ratings;
- 21-track gift assembled and committed to playlist history;
- export corrected to importer-v4-compatible header `Spotify Track URI`;
- importer v4 verified **21 unique exact Spotify tracks**;
- Spotify playlist actually created and visually verified at 21/21;
- final Spotify route/name:
  `♦️ DNA → 💎 Ontdek DNA → Ben's Ontdek DNA #2026-36`.

The W36 musical content must not be silently reopened. A later uniform weekly cover remains a cosmetic system-level task only.

Current dated recovery checkpoint:
`docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`.

Latest relevant W36 export compatibility commit before the checkpoint:
`f6cbdec8c42c8442934290c2002215990a611d40` — **Make W36 gift CSV compatible with Spotify importer v4**.

### W36 launch/cache finding
The installed iPhone home-screen web app retained its own localStorage context and could reopen older cached entry pages independently of Safari.

Controlled recovery route used:
- `test/daily.html` as same-storage bridge;
- current bridge routes to `test/daily-w36-repair-7.html`;
- cached `daily-w36-repair-6.html` was also converted into a bridge to build 7;
- **Herstelbuild 7** is the definitive W36 recovery/finalization build.

Safari showed 0 W36 ratings while the installed app showed 21/21 during the recovery test. Therefore deleting/reinstalling the installed app or assuming Safari/app storage equivalence is unsafe until a deliberate persistence/migration design exists.

## W37 — OPEN / IN UITVOERING
W37 was not safely released by the Saturday transition.

Known pre-audit state:
- `test/music-dna-weeks-v1.js` previously showed W36 `ready:true` and W37 `ready:false`;
- the W37 candidate file was not yet safely present/validated in the known production state;
- W37 must **not** be released by merely flipping a readiness flag.

Required chain:
**inspect current resolver/config → establish exact missing W37 assets → build/verify 21 candidates → verify exact Spotify identities/deliverability → validate daily flow + Saturday transition → only then set W37 ready → verify on installed iPhone.**

## Playlist restoration — current status
### Genre DNA
- **20 of 21** Genre-DNA playlists are content-wise and Spotify-wise closed in Top-of-the-Bill order.
- **Alternative Metal DNA 2.0** has a fixed content Top 30 but is **not yet Spotify-closed** because repeated HTTP 429/rate-limit failures blocked the Spotify build/eindcontrole.
- The existing Alternative Metal playlist was not damaged.
- **Canterbury Scene** remains separately marked **ONDER VOORBEHOUD**.

### Band DNA
`WASP Band DNA` is **30/30 — SPOTIFY GECONTROLEERD — GESLOTEN** as of 2026-09-06.
Verified anchors include:
- #1 W.A.S.P. — The Headless Children;
- #22 Iced Earth — Dante's Inferno;
- #30 Slade — Gudbuy T'Jane.

Master synchronization after playlist closure is a separate controlled step; do not assume every restored playlist relation is already written back to the safe Excel basis.

## Playlist/importer control rules
A playlist is closed only through this chain:

**content audit → establish real gaps → agree removals/additions → user removes → verify exact Spotify versions/URIs → small import CSV → import into existing playlist → verify in Spotify → close only at real 30/30 with active tracks → then synchronize Master.**

For weekly Ontdek-DNA gifts, the equivalent closure rule is:
**ratings preserved → positive gift safely assembled → exact Spotify identities verified → gift-history commit → importer file validated → Spotify playlist actually created → 21/21 visually verified → correct Ontdek-DNA route/name → close.**

Hard rules:
- Spotify is the operational final control for playlists;
- CSV/importer success alone never closes a playlist;
- never invent or guess a Spotify URI;
- 30/30 means 30 actually checked tracks, not merely 30 CSV rows;
- weekly Ontdek DNA means 21/21 actually checked tracks;
- a closed playlist is not silently reopened or changed;
- technical/import failure is never reported as content completion.

## Decision governance
A previously accepted Music-DNA decision may not be silently replaced. A change must:
1. name the existing decision;
2. explain why change is proposed;
3. receive explicit acceptance from Ben;
4. be recorded as a new dated GitHub decision;
5. state which earlier decision remains historical and which is superseded where relevant.

Status words are used strictly:
- **GESLOTEN** — do not reopen without explicit change decision;
- **OPEN / IN UITVOERING** — not complete;
- **ONDER VOORBEHOUD** — intentionally not final;
- **HISTORISCH** — preserved for provenance but not current truth.

## Open technical risks
1. Rating persistence/localStorage migration remains a hard functional risk.
2. Safari versus installed home-screen web-app storage context must not be assumed equivalent.
3. iOS home-screen launch/cache behavior can keep older entry pages alive after GitHub updates; version/bridge routing needs a durable general solution.
4. Export/import contract must be versioned/tested so generated CSV headers remain compatible with Spotify importer v4.
5. Gift-history commit and Spotify delivery must remain separate verifiable states.
6. Stable artist identity must be hardened before broad automatic enrichment.
7. Rights/licensing/source policy for enrichment must be respected; protected editorial text is not bulk-copied.
8. Mood/Theme scope must remain explicit.
9. Generated app-serving data must prevent manual duplication.
10. Living/current data requires source + date.
11. Durable recent-history/personal-state remains open beyond local browser state.
12. Spotify one-tap/autoplay behavior remains an integration/UX issue; correct track destination alone does not guarantee autoplay.
13. Alternative Metal DNA 2.0 still requires safe Spotify construction/final verification when rate limiting allows it.
14. Playlist restorations/relations must be synchronized back to the Master in a controlled way where not already done.

## Exact next step
**Before further substantial app/enrichment work: audit W37 readiness.**

Read current `test/music-dna-weeks-v1.js`, verify whether the W37 candidate asset exists and what it contains, inspect resolver/transition behavior, and establish exactly what is missing. Do not change W36.

Only after W37 is safely understood and released should the project return to the validated v4/generic-artist-world enrichment line.

## Session safety rule
A chat is a workbench, never the archive. Decisions and current state needed for recovery or consistent continuation must be written to GitHub during or at the end of the session.

Before a new substantial Music DNA work session, read:
- this file;
- `docs/DECISIONS.md`;
- `docs/UX-SPEC.md`;
- `docs/DESIGN-SYSTEM.md`;
- `docs/CHECKPOINT-2026-09-05-VERRAS-V4-ARTIST-WORLDS.md`;
- `docs/CHECKPOINT-2026-09-06-CONSOLIDATION.md`;
- `docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`.

Health checks must verify both technical repository health and **state alignment**: latest checkpoint, PROJECT-STATE age, chat-only decisions, Master/Spotify/GitHub differences, open risks and any closed decision not durably recorded.