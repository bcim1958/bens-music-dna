# Ben's Music DNA — Project State

Last updated: 2026-09-10
Status: ACTIVE DEVELOPMENT — W37 LIVE / TAXONOMY REPAIR CLOSED / MUSIC WORLD EXPLORATION ACTIVE

## Product north star
Music DNA is Ben's daily go-to place for music experience.

**Eerst muziek. Dan jij. Dan de wereld.**

Music is the main road. Rich artist information is an optional reward for curiosity. The app must always remember the route back to the music.

## Source of truth — music data
The Master remains the primary content substrate. DNA playlists are selections/relationships over that music world; no manually maintained parallel music database may replace it.

### Definitive safe physical Master
`Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx`

This v3 is the definitive safe physical Master for the closed taxonomy-repair phase and is durably preserved in the Music-DNA Library folder.

Important:
- the broad taxonomy repair is **GESLOTEN**;
- repair reliable/obvious cases, but do not guess classifications merely to increase coverage;
- difficult or ambiguous remaining cases are accepted and are **not a blocker** for Music DNA;
- later investigated classifications that were not safely exported because of spreadsheet-engine problems are not silently treated as synchronized truth;
- do not reopen broad taxonomy repair unless a concrete urgent functional blocker requires it;
- older v2 / Master 1.7 documents remain historical provenance, not the current physical source-of-truth declaration.

Governing decision:
`docs/DECISION-2026-09-10-TAXONOMY-REPAIR-CLOSED.md`
(commit `1109a489f8c7f211d228795c6ae3111267bec46e`).

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

Accepted post-rating direction:
**beoordelen → dagelijkse oogst → uitnodiging/portal → Mijn Muziekwereld → vrije muzikale verkenning**.

The existing cinematic/daily-harvest pages remain prototypes until deliberately production-integrated.

## Rating concept — accepted semantic direction
Four reactions remain semantically compatible with internal values `raak`, `goed`, `twijfel`, `nee`.
Visible language:
- RAAK — strong musical/emotional hit.
- GOED — positive musical fit.
- NOG EENS — unresolved music that deserves another encounter.
- NEE — does not fit Ben.

The visual symbols must be distinctive, memorable and cinematic in the Music-DNA language. Generic phone emoji are not the final UI.

`NOG EENS` is unresolved music, not discarded music. Exact Second Chance lifecycle still needs technical specification.

## Mijn Muziekwereld — accepted architecture
Mijn Muziekwereld is the broader personal world entered after the finite daily listening task. It has two equal conceptual destinations:

1. **Edelstenenkabinet — BEWAREN**: what Ben has found; weekly Ontdek-DNA jewels become persistent exhibits rather than disposable cover art.
2. **Muziekportaal — ONTDEKKEN**: what Ben might still find; free exploration through artists, genres, years, countries, scenes, influences, relations, concerts, releases and surprise routes.

The two destinations may link bidirectionally. The experience should feel like a navigable musical world, not a database UI.

Core visual/product rule:
**Music DNA builds no generic decor around an artist. The identity, history and real musical relationships of the artist determine how that artist world manifests.**

A useful quality test is: if artist name/logo are removed, the environment should still feel meaningfully connected to that artist rather than like a reskinned template.

## The Music Master — accepted role
The Music Master is gastheer, conservator and ceremoniemeester: distinguished, mysterious and inviting; never more important than the music and never dictating taste.

Core principles:
- Music DNA learns.
- The Music Master notices.
- The portal invites.
- Mijn Muziekwereld lets Ben explore.
- Ben always decides how far he goes.
- The user travels through Music DNA; The Music Master appears where Music DNA needs him.
- He never appears to hurry.
- He knows all the doors.
- He does not dress up as a genre; the genre manifests itself in The Music Master.

In the Edelstenenkabinet he can appear in canonical curator form. In artist worlds his appearance/context may adapt subtly to the real musical environment.

## Edelstenenkabinet — accepted concept direction
Weekly Ontdek-DNA gemstones are persistent museum-like exhibits. The cabinet represents **the jewels of the personal musical taste**.

Each jewel can connect:
- De steen
- Het verhaal
- De muziek

Provenance can use museum language such as `VERWORVEN · WEEK 36 · 2026`, meaning that the jewel became part of Ben's personal musical history through discovery, not that he physically owns the mineral.

The Music Master's fictive **Moeder aller Edelstenen** is separate from weekly real gemstones. His staff contains an exceptional earthly Burmese ruby; that ruby is not a weekly gift.

## Muziekportaal / artist worlds — accepted concept direction / H.E.A.T proof
The rich artist world is evolving from an information page into a **betreedbare artiestenwereld**: a musical backstage environment in which facts and relations become meaningful places and objects.

H.E.A.T is the first controlled conceptual proof. Current exploration includes a possible route through:
- kleedkamer — identity, people, context and first personal connection;
- studio — songwriting, sound, albums, production, musical ingredients and influences;
- coulissen/backstage — relations, tensions, transitions, tour context and the life around performance;
- podium — live identity, setlists, concerts and performance energy;
- doors/routes — grounded connections to other artist/genre/music worlds.

The exact room set is not a rigid universal template. Artist identity determines which spaces matter and how they manifest.

### Muziekkoorts / Mijn Smaak
Avoid false precision such as `87/100` when the evidence does not justify it. Prefer defensible qualitative states such as **STERKE DNA-MATCH**, supported by musical characteristics.

A visual **Muziekkoorts** metaphor is accepted for exploration: temperature, glow and heat can express strength of personal musical connection. It must remain an interpretive Music-DNA signal, not pretend to be an exact scientific score.

For H.E.A.T the first hypothesis arose from one strongly liked track, so broader band affinity must still be learned through listening rather than assumed.

### Phone-first interaction rule
The world may be visually rich, but the active interaction surface must remain calm. Information should reveal progressively through meaningful objects/doors rather than placing every possible fact and control on one iPhone screen.

Status of this artist-world work: **ACCEPTED CONCEPT DIRECTION / H.E.A.T PROOF — NOT PRODUCTION-INTEGRATED**.

## Visual identity
- Double DNA helix + sound waveform retained.
- Brand mark says what Music DNA IS; cinematic language says how Music DNA FEELS.
- Chosen icon direction: **C — Living DNA**.
- Black base, living emerald-green DNA/sound mark, violet action/Second-Chance accent.
- Technology under the hood; wonder on the outside.

## Rich artist world + Verras me! v4 — VALIDATED
`test/surprise-me-v4-full.html` works over the full safe Master-derived world of **3,284 artist worlds**. It remains a validated technical/navigation substrate for broader Music-Portal exploration.

Production data is loaded from 16 controlled parts. Free draw and filtering by Genre, Style, Country and Period are validated on iPhone. Missing biography/people/current facts are not invented. Mood/Theme remain disabled where reliable enrichment is absent.

Validated checkpoint:
`docs/CHECKPOINT-2026-09-05-VERRAS-V4-ARTIST-WORLDS.md`.

## Muzikale pleisterplaats
An artist world is a **muzikale pleisterplaats**, not primarily an information page. Ben can arrive, listen, read, follow a surprising side path and leave again without completing anything.

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

## Ontdek DNA — W36 — GESLOTEN
W36 is closed at 21/21 and must not be silently reopened. The Spotify playlist was created and visually verified. The accepted weekly gift norm is **21 discoveries**.

The weekly visual system is now conceptually tied to the Edelstenenkabinet. W36's first official jewel/prototype is **Granaat**.

Recovery checkpoint:
`docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`.

## W37 — RELEASED / CURRENT LIVE WEEK
W37 is released and active for 6–12 September 2026. Do not revert to obsolete instructions to audit whether W37 can be released.

Persistence/cache risks remain open independently of W37 content status.

## Playlist restoration — current status
### Genre DNA
The earlier 20/21 restoration milestone is historical context. In addition, two UK Punk Genre-DNA playlists are now closed:
- **UK Punk #01 — Raw & Rebellious** — 30/30, Spotify-closed.
- **UK Punk #02 — Art, Hooks and Attitude** — 30/30, Spotify-closed.

Checkpoints:
- `docs/CHECKPOINT-2026-09-09-UK-PUNK-01-RAW-REBELLIOUS.md`
- `docs/CHECKPOINT-2026-09-09-UK-PUNK-02-ART-HOOKS-ATTITUDE.md`

**Alternative Metal DNA 2.0** has a fixed content Top 30 but is not Spotify-closed because HTTP 429/rate limiting blocked final construction/control. **Canterbury Scene** remains separately **ONDER VOORBEHOUD**.

### Band DNA
The controlled content restoration/listening pass is closed. The 19 current Band-DNA playlists have descriptions and custom visual covers. Closed Band-DNA content must not be silently reopened.

Standing listening rule:
> **De naamgever bepaalt de wereld; de volgorde vertelt het verhaal.**

## User-owned W.A.S.P. / Randy Piper albums
Ben successfully completed the local ripping/insertion. The Local Files source contains the relevant material and the three controlled 10/10 local playlists are closed. Do not reopen ripping itself.

## Spotify DNA folder visual hierarchy — fixed
- `♦ DNA` — Moeder aller Edelstenen / source-root symbolism.
- `✧ Band DNA` — gold accent; artist/band personality.
- `Genre DNA` — silver accent; styles/scenes/cartography.
- `💎 Ontdek DNA` — cosmic violet/blue accent; discovery/unknown worlds.

Spotify folders do not support custom folder images; do not build a workflow that assumes they do.

## Playlist/importer control rules
A playlist is closed only after real Spotify verification. CSV/importer success alone never closes it.

Hard rules:
- Spotify is the operational final control for playlists;
- never invent or guess a Spotify URI;
- 30/30 means 30 actually checked tracks;
- weekly Ontdek DNA means 21/21 actually checked tracks;
- a closed playlist is not silently reopened or changed;
- technical/import failure is never reported as content completion.

Historical work year is not silently overwritten by a later digital reissue year. Spotify metadata may identify the digital object while Music-DNA historical year/version fields preserve the historical execution/work semantics.

Spotify availability must not be inferred solely from normal discography visibility. Direct album/track identity and actual playability may reveal valid availability.

A strong duration mismatch can indicate a wrong or malformed Spotify version and should be flagged for identity/version review. The Blitzkrieg 6:15-versus-3:43 case established this as a useful future quality-control rule. Spotify NWOBHM DNA has been manually repaired to the 3:43 execution while retaining 30/30; Master v3 still contains the old 6:15 identity/duration and may be synchronized later in a controlled maintenance pass rather than reopening taxonomy repair.

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
4. Export/import contract must remain versioned/tested against Spotify importer v4.
5. Gift-history commit and Spotify delivery remain separate verifiable states.
6. Stable artist identity should be hardened before broad automatic enrichment.
7. Rights/licensing/source policy for enrichment must be respected; protected editorial text is not bulk-copied.
8. Mood/Theme scope must remain explicit.
9. Generated app-serving data must prevent manual duplication.
10. Living/current data requires source + date.
11. Durable recent-history/personal-state remains open beyond local browser state.
12. Spotify one-tap/autoplay remains an integration/UX issue.
13. Alternative Metal DNA 2.0 still requires safe Spotify construction/final verification when rate limiting allows it.
14. Closed Spotify playlist relations/orders and known corrections may require later controlled Master synchronization, but this is maintenance and **not** a broad taxonomy/coverage audit prerequisite.
15. Exact Second Chance lifecycle, persistence and re-rating behavior remain open.
16. Spotify side-door availability logic should be incorporated structurally: not visible in discography ≠ unavailable; direct identity + actual playability matter.
17. Artist-world visuals must remain grounded in real artist identity/history/relationships and avoid generic reskinning or unsupported factual storytelling.
18. Phone-first progressive disclosure must prevent the rich visual world from becoming a crowded navigation surface.

### Closed / superseded risk
The former risk `Master coverage must be audited before new music data is created; UK Punk is an explicit attention area` is **SUPERSEDED / CLOSED** by the 10 September taxonomy-closure decision and the completed UK Punk #01/#02 work. It is not a prerequisite for further product building.

## Exact next step
**Resume Music DNA product exploration from the accepted Music Portal / artist-world direction. Use H.E.A.T as the first controlled proof: validate how real artist data, personal Music-DNA relations and a calm phone-first backstage/studio experience can form one navigable artist world.**

Do not reopen taxonomy repair unless a concrete urgent functional blocker requires it.

The next proof should distinguish three layers clearly:
1. **fact layer** — verified artist/music facts and relationships;
2. **personal DNA layer** — what Ben's ratings/listening actually support, without false precision;
3. **experience layer** — visual/spatial translation into meaningful rooms, objects, doors, light and Music-Master presence.

The goal is not to build the whole world at once. First prove that one H.E.A.T route can be both truthful and genuinely enjoyable on an iPhone.

Parallel maintenance/design work may continue when useful, but it must not displace this product direction with another broad taxonomy audit.

## Current checkpoints
Read together:
- `docs/DECISION-2026-09-10-TAXONOMY-REPAIR-CLOSED.md`
- `docs/CHECKPOINT-2026-09-09-UK-PUNK-01-RAW-REBELLIOUS.md`
- `docs/CHECKPOINT-2026-09-09-UK-PUNK-02-ART-HOOKS-ATTITUDE.md`
- `docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`
- `docs/CHECKPOINT-2026-09-08-EVENING-CONSOLIDATION.md`

These are provenance/checkpoints. This `PROJECT-STATE.md` is the central current navigation layer and supersedes older next-step wording where those older documents conflict with later accepted decisions.
