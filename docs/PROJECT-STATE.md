# Ben's Music DNA — Project State

Last updated: 2026-09-09
Status: ACTIVE DEVELOPMENT — W37 LIVE / 8 SEPTEMBER EVENING CONSOLIDATED

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

## Daily UX — accepted product direction
- 3 discoveries per day.
- Music first: listen before information overload.
- Player shows elapsed and remaining time.
- User can move to previous/next discovery where applicable.
- Returning to an already rated discovery shows the stored rating; it is never silently erased.
- After 3/3: stop asking questions.
- Daily completion may show a brief harvest, then invite optional exploration in Mijn Muziekwereld.
- Missed tracks do not become homework/backlog.

Accepted post-rating direction as of 8 September:
**beoordelen → dagelijkse oogst → uitnodiging/portal → Mijn Muziekwereld → vrije muzikale verkenning**.

This is an accepted product direction, but the current 8 September pages implementing it are still isolated prototypes and are not the live W37 rating engine.

## Rating concept — accepted semantic direction
Four reactions remain semantically compatible with internal values `raak`, `goed`, `twijfel`, `nee`, but the final UI must NOT use generic phone emoji.
Visible language:
- RAAK — strong musical/emotional hit.
- GOED — positive musical fit.
- NOG EENS — unresolved music that deserves another encounter.
- NEE — does not fit Ben.

The visual symbols must be distinctive, memorable and cinematic in the Music-DNA language. Existing gold/blue/violet/red-orange light language remains directional, but the concrete objects require further design refinement.

`NOG EENS` is unresolved music, not discarded music. Exact Second Chance lifecycle still needs technical specification.

### 8 September cinematic prototype status
The filmic rating explanation work is **ACCEPTED DIRECTION / PROTOTYPE IMPLEMENTATION**.

Relevant isolated prototype:
- `test/daily-cinematic-v3.html`

It explicitly does not read or modify W37 ratings. It is not production integration.

## Daily harvest, Mijn Muziekwereld and The Music Master
### Accepted direction
After the finite daily 3/3 task, Music DNA may briefly show the day's positive harvest and invite Ben into a broader personal music world without turning the experience into more homework.

Mijn Muziekwereld may give positive discoveries first attention and offer paths toward:
- Mijn RAAK
- Band DNA
- Genre DNA
- Ontdek DNA
- artist/music-world exploration

The Music Master is an accepted creative direction for a restrained ceremonial guide: distinguished, mysterious and inviting; never more important than the music and never dictating taste.

Core principle:
- Music DNA learns.
- The Music Master notices.
- The portal invites.
- Mijn Muziekwereld lets Ben explore.
- Ben always decides how far he goes.

### Current implementation status
**PROTOTYPE / NOT PRODUCTION-INTEGRATED**.

Relevant isolated prototypes:
- `test/daily-harvest-v1.html`
- `test/my-music-world-v1.html`

Both explicitly avoid reading/modifying W37 ratings.

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
W36 is **GESLOTEN** as of 2026-09-08.

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

### W36 launch/cache finding
The installed iPhone home-screen web app retained its own localStorage context and could reopen older cached entry pages independently of Safari.

Controlled recovery route used:
- `test/daily.html` as same-storage bridge;
- current bridge routes to `test/daily-w36-repair-7.html`;
- cached `daily-w36-repair-6.html` was also converted into a bridge to build 7;
- **Herstelbuild 7** is the definitive W36 recovery/finalization build.

Safari showed 0 W36 ratings while the installed app showed 21/21 during the recovery test. Therefore deleting/reinstalling the installed app or assuming Safari/app storage equivalence is unsafe until a deliberate persistence/migration design exists.

## W37 — RELEASED / CURRENT LIVE WEEK
The former project-state description of W37 as OPEN and not yet safely released is now **HISTORISCH**.

8 September repository progression established:
- verified W37 Ontdek DNA candidate pool;
- generic weekly learning/catch-up preparation;
- validated W37 candidate week release;
- live Music DNA routing to W37;
- live entrypoint restoration after W36 repair;
- W37 candidates exposed to the live week loader;
- completed-day button fixed for the current W37 day.

Current `test/music-dna-weeks-v1.js` has both W36 and W37 `ready:true`; W37 is the active configured week for 6–12 September 2026.

Relevant commits include:
- `8f92282d` — Release validated W37 candidate week
- `6f6eb7e4` — Route live Music DNA app to W37 weekly flow
- `b1ec6241` — Expose W37 candidates to live week loader
- `615a55ac` — Fix completed-day button for current W37 day

Do not revert to the obsolete instruction to audit whether W37 can be released. The broader persistence/cache risks below remain open.

## Playlist restoration — current status
### Genre DNA
- **20 of 21** Genre-DNA playlists are content-wise and Spotify-wise closed in Top-of-the-Bill order.
- **Alternative Metal DNA 2.0** has a fixed content Top 30 but is **not yet Spotify-closed** because repeated HTTP 429/rate-limit failures blocked the Spotify build/eindcontrole.
- The existing Alternative Metal playlist was not damaged.
- **Canterbury Scene** remains separately marked **ONDER VOORBEHOUD**.

### Band DNA — content restoration + listening pass
The current Spotify Band-DNA set has completed its controlled listening-order pass as of 8 September 2026.

Standing listening rule:
> **De naamgever bepaalt de wereld; de volgorde vertelt het verhaal.**

The listening pass did **not** reopen the already controlled 30-track content selections. It reordered the same 30 tracks only, with the naming artist/band at #1 and a deliberate musical arc.

Safe local Playlist Orderer rules used:
- exact normalized playlist-name match;
- exactly 30 tracks required;
- expected primary-artist set exactly once;
- STOP on missing/extra/duplicate/unplayable mismatch;
- same-set recheck before write;
- post-write exact-order recheck;
- final visual verification in Spotify.

`WASP Band DNA` remains 30/30 and Spotify-controlled; after the listening pass its anchors include:
- #1 W.A.S.P. — The Headless Children
- #30 Alice Cooper — Go to Hell

KISS required repair of an unavailable Saraya listing by using a working Spotify listing of the same song/artist before reordering; no musical substitution was made.

Master synchronization after playlist closure/listening pass is a separate controlled step; do not assume every Spotify relation/order is already written back to the safe Excel basis.

## User-owned W.A.S.P. / Randy Piper albums
A joint ripping/insertion attempt on 7 September failed, but Ben subsequently completed the ripping/local insertion himself successfully that evening.

Therefore **ripping itself is no longer an open problem**. Only any remaining Spotify/Music-DNA placement, metadata or presentation work may still be open.

## Spotify Music-DNA covers — OPEN
A consistent cover system for Music-DNA Spotify playlists remains an open design/implementation task.

This includes the previously noted system-level cosmetic cover work for weekly Ontdek DNA.

## Playlist/importer control rules
A playlist is closed only through this chain:

**content audit → establish real gaps → agree removals/additions → user removes → verify exact Spotify versions/URIs → small import CSV → import into existing playlist → verify in Spotify → close only at real 30/30 with active tracks → then synchronize Master.**

For weekly Ontdek-DNA gifts, the equivalent closure rule is:
**ratings preserved → positive gift safely assembled → exact Spotify identities verified → gift-history commit → importer file validated → Spotify playlist actually created → 21/21 visually verified → correct Ontdek-DNA route/name → close.**

For a listening-order pass on an already closed 30-track Band-DNA playlist:
**same 30 verified → exact artist set checked → deliberate order previewed → pre-write set rechecked → reorder only → post-write exact-order verification → Spotify visual verification.**

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

## Open technical/content risks
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
15. Exact Second Chance lifecycle, persistence and re-rating behavior remain open.
16. Master coverage must be audited before new music data is created; UK Punk is an explicit attention area.
17. Spotify availability must not be inferred solely from normal discography visibility; direct album/track identity plus actual playability may reveal valid availability.

## Exact next step
**Audit the actual coverage and synchronization state of the Master database before creating new music data.**

Start from the safe Excel basis and establish what is already present. Explicitly inspect UK Punk coverage and distinguish normal Spotify discography visibility from genuine Spotify availability through direct album/track identities and playability.

Only after the Master audit identifies real gaps should new data be built or synchronized.

After that controlled audit, resume app/product building from the accepted 8 September directions while keeping cinematic rating, daily-harvest and Mijn Muziekwereld pages classified as prototypes until deliberately integrated.

Parallel open workstreams after the Master audit include:
- further Music DNA app/product building;
- Spotify Music-DNA cover system;
- remaining Music-DNA placement/metadata/presentation work for Ben's successfully ripped W.A.S.P./Randy Piper material where needed.

## Current consolidation checkpoint
Read:
`docs/CHECKPOINT-2026-09-08-EVENING-CONSOLIDATION.md`.

This checkpoint covers the repository and accepted project meaning through commit:
`2b8ebad5034c73fe0073ae277f90f3885a6b0b8a` — **Add first Mijn Muziekwereld mobile entrance prototype**.

## Session safety rule
A chat is a workbench, never the archive. Decisions and current state needed for recovery or consistent continuation must be written to GitHub during or at the end of the session.

Before a new substantial Music DNA work session, read:
- this file;
- `docs/DECISIONS.md`;
- `docs/UX-SPEC.md`;
- `docs/DESIGN-SYSTEM.md`;
- `docs/CHECKPOINT-2026-09-05-VERRAS-V4-ARTIST-WORLDS.md`;
- `docs/CHECKPOINT-2026-09-06-CONSOLIDATION.md`;
- `docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`;
- `docs/CHECKPOINT-2026-09-08-EVENING-CONSOLIDATION.md`.

Health checks must verify both technical repository health and **state alignment**: latest checkpoint, PROJECT-STATE age, chat-only decisions, Master/Spotify/GitHub differences, open risks and any closed decision not durably recorded.
