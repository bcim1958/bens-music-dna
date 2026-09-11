# Ben's Music DNA — Project State

Last updated: 2026-09-11
Status: ACTIVE DEVELOPMENT — W37 LIVE / TAXONOMY REPAIR CLOSED / ARTIST WORLD 1.0 VERTICAL PROOF ACTIVE

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

### Muziekmeter / personal affinity
The earlier Muziekkoorts metaphor has evolved into the broader **Muziekmeter**: a personal Music-DNA instrument that may distinguish prediction from actual listening evidence. It never claims to score an artist's objective quality.

The strongest first quantitative application is the complete weekly Ontdek-DNA evaluation cycle. Exact artist-level numeric scoring remains provisional and must not pretend to precision when evidence is sparse.

### Phone-first interaction rule
The world may be visually rich, but the active interaction surface must remain calm. Information should reveal progressively through meaningful objects/doors rather than placing every possible fact and control on one iPhone screen.

Status of this artist-world work: **ACCEPTED CONCEPT DIRECTION / H.E.A.T PROOF — NOT PRODUCTION-INTEGRATED**.

## Artist World 1.0 — accepted development principles (2026-09-11)
Governing decision: `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`.

The Master is the trusted **centre, not the boundary**, of Ben's musical world. Grounded external artists and relations may extend the Music Portal without automatically becoming part of Ben's personal Music DNA.

The first complete vertical proof is:
**H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**.

Accepted principles:
- **Studio first** for the H.E.A.T proof.
- The Studio explains music to a **music lover, not a musician or sound engineer**; avoid technical fader-style analysis as the main interaction.
- A single enticing Music-DNA control on the mixing desk may reveal a plain-language **HET GELUID VAN H.E.A.T** explanation, followed optionally by **LAAT HET ME HOREN** and **WAAR KOMT DIT VANDAAN?**.
- Essential artist/music knowledge lives in a compact block with deeper detail behind it; Trivia is similarly optional. Do not fill the iPhone with tappable facts.
- **MEER ZOALS DEZE ARTIEST** opens a small number of explainable musical doors, not an endless recommendation list. Preserve the real relation type rather than calling every relation similarity.
- **LIJKT INTERESSANT** records curiosity only and may feed the Ontdek-DNA candidate pool. It is not a positive taste rating.
- **EXIT** is part of the universal spatial grammar: previous door = where I came from; new doors = where I may go; EXIT = leave artist-world exploration for the Music Portal.
- Core navigation principle: **You may get lost in Music DNA, but you must never become lost.**
- World richness is data-driven: rich data gives a richer world; sparse data gives a compact but credible world; never invent filler.
- Reusable scene grammar/components are preferred over bespoke heavy worlds for every artist.

### Motion / performance rule
Music DNA 1.0 does **not** need animation to feel like a world.

Base rule:
**The world is still by default. Movement happens briefly when something meaningful occurs.**

Avoid continuous character animation, heavy permanent 3D rendering, blocking transitions and movement that exists only to prove the scene is alive. Lightweight glow/pulse/light reactions are acceptable where useful, but content/navigation may never depend on animation.

Development order:
**WERKEN → BEGRIJPELIJK → MOOI → SFEERVOL → LEVENDIG**.

Later improvement passes may add richer motion only where it improves meaning, orientation, reward or wonder.

The Music Master remains restrained: he does not constantly narrate or perform. **He helps the world explain itself.**

## Personal Weekbrief — accepted future product layer (2026-09-11)
Governing decision: `docs/DECISION-2026-09-11-PERSONAL-WEEKBRIEF.md` (commit `c57a0371c0c2e9eca2349c634eb0243d6a2764cb`).

Music DNA may use its living/current source layer to create an **optional, taste-personalized weekly reading experience**. It complements the Saturday Ontdek-DNA gift rather than replacing it.

Saturday can therefore contain two acts:
1. **Weekbrief — what happened this week in my music world?**
2. **Ontdek DNA — what has Music DNA discovered for me this week?**

The Weekbrief may selectively surface relevant releases, album/concert reviews, interviews, live/tour developments and worthwhile short news. Relevance beats volume; no filler and no generic rock-news firehose.

Reputable international music journalism may be offered through concise **Dutch Music-DNA summaries**, with publication/author/date attribution and access to the original source. Summaries must preserve fact versus opinion and may not reproduce or effectively translate full copyrighted articles. Multiple reviews may optionally be compared through a compact **Wat zeggen de recensenten?** view that preserves differences between sources.

The user remains in control: the Weekbrief is opt-in, easy to skim or ignore, and every deeper source remains one tap away. This accepted future layer does **not** interrupt the current Artist World 1.0 vertical proof.

## Muziekmeter / Ontdek-DNA learning layer — accepted concept direction (2026-09-11)
Governing decision: `docs/DECISION-2026-09-11-MUZIEKMETER-ONTDEK-DNA.md` (commit `5d12a7f62ea9a365cb7196dbe92da60d453f2083`).

The Muziekmeter's strongest first application is the **complete weekly Ontdek-DNA measurement**, not the filtered Spotify gift playlist. Seven daily rounds × three discoveries produce **21 explicit ratings**; all four states — RAAK, GOED, NOG EENS and NEE — belong to the measurement.

Keep three things separate:
1. **21 ratings** = raw weekly evidence.
2. **Muziekmeter** = summarized weekly result.
3. **Ontdek-DNA jewel/playlist** = curated weekly harvest.

The weekly Muziekmeter belongs naturally in the Personal Weekbrief and may show the current week, rating distribution, moving average, high/low weeks and later predicted-versus-measured performance.

W36–W52 2026 forms the first calibration/reference set: **17 weeks = 357 individual ratings**. Preserve the raw evidence permanently; calibrate the numeric mapping after the complete 2026 set rather than freezing arbitrary weights now. The 2026 series becomes reference material for later years.

The score is personal, never an objective quality judgment. Working semantic scale: `<70 SCHADUWGEBIED`, `70–79 GOED`, `80–89 STERK`, `90–94 BIJZONDER`, `95–98 UITZONDERLIJK`, `99–100` deliberately rare/possibly unnamed.

The learning goal is broader than simply increasing the average. Strong weeks and weak weeks are both knowledge. Music DNA should learn to improve fit **without optimizing exploration and surprise out of the system**. Prediction error, RAAK/NEE frequency, NOG EENS behavior and recurring musical characteristics of unusually strong/weak weeks can all become useful learning signals.

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
- do not invent Spotify URIs;
- do not silently substitute tracks;
- preserve historical work/year semantics separately from digital reissue metadata;
- use the Spotify side-door check where discography visibility is incomplete;
- verify exact count and actual Spotify state before declaring a playlist closed.

## Current exact next product step
Build the first complete Artist World 1.0 vertical proof from the H.E.A.T Studio:
**H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**.

The accepted Weekbrief and Muziekmeter layers are valuable future/parallel product layers and must be preserved, but they do not require abandoning this controlled vertical proof.
