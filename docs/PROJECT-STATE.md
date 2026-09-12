# Ben's Music DNA — Project State

Last updated: 2026-09-12
Status: ACTIVE DEVELOPMENT — W37 COMPLETE / TAXONOMY REPAIR CLOSED / ARTIST WORLD 1.0 VERTICAL PROOF ACTIVE

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

Governing decision: `docs/DECISION-2026-09-10-TAXONOMY-REPAIR-CLOSED.md` (commit `1109a489f8c7f211d228795c6ae3111267bec46e`).

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

Accepted post-rating direction: **beoordelen → dagelijkse oogst → uitnodiging/portal → Mijn Muziekwereld → vrije muzikale verkenning**.

## Rating concept — accepted semantic direction
Four reactions remain semantically compatible with internal values `raak`, `goed`, `twijfel`, `nee`.
Visible language:
- RAAK — strong musical/emotional hit.
- GOED — positive musical fit.
- NOG EENS — unresolved music that deserves another encounter.
- NEE — does not fit Ben.

`NOG EENS` is unresolved music, not discarded music. Exact Second Chance lifecycle still needs technical specification.

## Mijn Muziekwereld — accepted architecture
Mijn Muziekwereld has two equal conceptual destinations:
1. **Edelstenenkabinet — BEWAREN**: what Ben has found; weekly Ontdek-DNA jewels become persistent exhibits.
2. **Muziekportaal — ONTDEKKEN**: what Ben might still find; free exploration through artists, genres, years, countries, scenes, influences, relations, concerts, releases and surprise routes.

Core visual/product rule: **Music DNA builds no generic decor around an artist. The identity, history and real musical relationships of the artist determine how that artist world manifests.**

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

## Edelstenenkabinet — accepted concept direction
Weekly Ontdek-DNA gemstones are persistent museum-like exhibits: **the jewels of the personal musical taste**.
Each jewel can connect: De steen / Het verhaal / De muziek.
Provenance may use `VERWORVEN · WEEK 36 · 2026`. The fictive Moeder aller Edelstenen is separate from weekly real gemstones. The Music Master's staff contains an exceptional earthly Burmese ruby; that ruby is not a weekly gift.

## Artist World 1.0 — accepted development principles
Governing decision: `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`.

The Master is the trusted **centre, not the boundary**, of Ben's musical world. Grounded external artists and relations may extend the Music Portal without automatically becoming part of Ben's personal Music DNA.

The first complete vertical proof is: **H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**.

Accepted principles:
- **Studio first** for the H.E.A.T proof.
- Explain music to a music lover, not a musician or sound engineer.
- Essential knowledge and Trivia use compact blocks with deeper detail behind them.
- **MEER ZOALS DEZE ARTIEST** opens a small number of explainable musical doors and preserves the real relation type.
- **LIJKT INTERESSANT** records curiosity only and may feed the Ontdek-DNA candidate pool.
- **EXIT** is universal spatial grammar: previous door = where I came from; new doors = where I may go; EXIT = leave artist-world exploration for the Music Portal.
- **You may get lost in Music DNA, but you must never become lost.**
- Rich data gives a richer world; sparse data gives a compact but credible world; never invent filler.
- Reusable scene grammar/components are preferred over bespoke heavy worlds.

### Motion / performance rule
Music DNA 1.0 does **not** need animation to feel like a world. **The world is still by default. Movement happens briefly when something meaningful occurs.**
Development order: **WERKEN → BEGRIJPELIJK → MOOI → SFEERVOL → LEVENDIG**.

## Personal Weekbrief — accepted future product layer (2026-09-11)
Governing decision: `docs/DECISION-2026-09-11-PERSONAL-WEEKBRIEF.md` (commit `c57a0371c0c2e9eca2349c634eb0243d6a2764cb`).

Saturday can contain two acts:
1. **Weekbrief — what happened this week in my music world?**
2. **Ontdek DNA — what has Music DNA discovered for me this week?**

The Weekbrief is optional, taste-personalized and selective. It may surface relevant releases, reviews, interviews, live/tour developments and worthwhile news. Reputable international journalism may be offered through concise Dutch Music-DNA summaries with publication/author/date attribution and access to the original source. Fact and opinion remain distinct. This layer does **not** interrupt the current Artist World 1.0 vertical proof.

### Editorial/source routing — durably recorded
Concrete source families and their intended roles are recorded in `docs/SOURCE-MAP-MUSIC-JOURNALISM-2026-09-12.md` (commit `9fd404fc9f25d0176dd7430988ee50e5083b5ad2`).

This source map includes AllMusic, official artist/label sources, setlist.fm, Wikipedia and Spotify context, plus international journalism such as Louder / Classic Rock, Loudwire, Kerrang!, Revolver, Stereogum and Pitchfork, and Dutch/Dutch-language sources including Lust for Life, Progwereld, Arrow Lords of Metal, Rockportaal, iO Pages, Counter Culture, KINK, ARROW Classic Rock and Muziekweb.

Source use is question- and time-dependent. **Official ≠ automatically current.** Current/state claims require source + date; reviews remain opinion; foreign journalism may be compactly summarized in Dutch but not reproduced or fully translated.

## Muziekmeter / Ontdek-DNA learning layer — accepted concept direction (2026-09-11)
Governing decision: `docs/DECISION-2026-09-11-MUZIEKMETER-ONTDEK-DNA.md` (commit `5d12a7f62ea9a365cb7196dbe92da60d453f2083`).

The strongest first application is the **complete weekly Ontdek-DNA measurement**, not the filtered Spotify gift playlist. Seven daily rounds × three discoveries produce **21 explicit ratings**; all four states — RAAK, GOED, NOG EENS and NEE — belong to the measurement.

Keep separate:
1. **21 ratings** = raw weekly evidence.
2. **Muziekmeter** = summarized weekly result.
3. **Ontdek-DNA jewel/playlist** = curated weekly harvest.

The weekly Muziekmeter belongs naturally in the Personal Weekbrief and may show current week, rating distribution, moving average, high/low weeks and later predicted-versus-measured performance.

W36–W52 2026 forms the first calibration/reference set: **17 weeks = 357 individual ratings**. Preserve raw evidence permanently; calibrate numeric mapping after the complete 2026 set rather than freezing arbitrary weights now. Working semantic scale: `<70 SCHADUWGEBIED`, `70–79 GOED`, `80–89 STERK`, `90–94 BIJZONDER`, `95–98 UITZONDERLIJK`, `99–100` deliberately rare/possibly unnamed.

Strong and weak weeks are both knowledge. Improve fit **without optimizing exploration and surprise out of the system**.

## Visual identity
- Double DNA helix + sound waveform retained.
- Chosen icon direction: **C — Living DNA**.
- Black base, living emerald-green DNA/sound mark, violet action/Second-Chance accent.
- Technology under the hood; wonder on the outside.

## Rich artist world + Verras me! v4 — VALIDATED
`test/surprise-me-v4-full.html` works over the full safe Master-derived world of **3,284 artist worlds**. It remains a validated technical/navigation substrate. Missing biography/people/current facts are not invented.

## Muzikale pleisterplaats
An artist world is a **muzikale pleisterplaats**, not primarily an information page. Spotify is a contextual listening layer.
> **Waar Music DNA een muzikale bewering doet, moet je die waar mogelijk met één tik kunnen beluisteren.**

## Mood DNA / Theme DNA direction
- Genre DNA = what kind of music?
- Mood DNA = how does it feel?
- Theme DNA = when/why does it fit?
- Ben DNA = what actually proves to move Ben?

Mood/Theme are first-class optional discovery axes and are never silently inherited from album to track.

## Verras me! versus Ontdek DNA
- Ontdek DNA = find music that may be new to Ben.
- Verras me! = rediscover music already inside Ben's own music world.

## Ontdek DNA — W36 — GESLOTEN
W36 is closed at 21/21 and must not be silently reopened. Spotify playlist was created and visually verified. W36's first official jewel/prototype is **Granaat**.
Recovery checkpoint: `docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`.

## W37 — 21/21 COMPLETE / GIFT DELIVERY IN SAFE WAIT STATE
W37 ran 6–12 September 2026. The 21 daily ratings are complete. The gift delivery currently reports a safe wait state because not all gift tracks can yet be safely delivered to Spotify. No playlist mutation is inferred from this state; packaging/delivery must be verified separately.

## Playlist restoration — current status
### Genre DNA
UK Punk #01 — Raw & Rebellious and UK Punk #02 — Art, Hooks and Attitude are 30/30 and Spotify-closed. Alternative Metal DNA 2.0 has a fixed content Top 30 but is not Spotify-closed because rate limiting blocked final construction/control. Canterbury Scene remains **ONDER VOORBEHOUD**.

### Band DNA
The controlled content restoration/listening pass is closed. The 19 current Band-DNA playlists have descriptions and custom covers. Closed Band-DNA content must not be silently reopened.

## User-owned W.A.S.P. / Randy Piper albums
Local Files material and three controlled 10/10 local playlists are closed. Do not reopen ripping itself.

## Spotify DNA folder visual hierarchy — fixed
- `♦ DNA` — Moeder aller Edelstenen / source-root symbolism.
- `✧ Band DNA` — gold accent.
- `Genre DNA` — silver accent.
- `💎 Ontdek DNA` — cosmic violet/blue accent.

## Playlist/importer control rules
A playlist is closed only after real Spotify verification. CSV/importer success alone never closes it.

Hard rules:
- Spotify is the operational final control for playlists;
- never invent or guess a Spotify URI;
- 30/30 means 30 actually checked tracks;
- weekly Ontdek DNA means 21/21 actually checked tracks where 21 is the applicable gift norm;
- a closed playlist is not silently reopened or changed;
- technical/import failure is never reported as content completion;
- historical work year is not silently overwritten by a later digital reissue year;
- Spotify availability is not inferred solely from normal discography visibility: direct identity and actual playability matter;
- a strong duration mismatch is an identity/version warning and must be reviewed rather than silently accepted.

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
- **HISTORISCH** — preserved for provenance but not current truth;
- **VALIDATED** — technically demonstrated in its stated scope;
- **ACCEPTED CONCEPT DIRECTION** — accepted design/product direction, not necessarily production-integrated;
- **RELEASED / LIVE** — currently released/active in its stated scope.

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
19. W37 gift packaging/delivery is currently in a safe wait state and must be diagnosed without disabling the safety gate or silently substituting content.

### Closed / superseded risk
The former risk `Master coverage must be audited before new music data is created; UK Punk is an explicit attention area` is **SUPERSEDED / CLOSED** by the 10 September taxonomy-closure decision and completed UK Punk work. It is not a prerequisite for further product building.

## Exact next step
**Build the first complete Artist World 1.0 vertical proof from the H.E.A.T Studio: H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate.**

Do not reopen taxonomy repair unless a concrete urgent functional blocker requires it.

The proof keeps three layers distinct:
1. **fact layer** — verified artist/music facts and relationships;
2. **personal DNA layer** — what Ben's ratings/listening actually support, without false precision;
3. **experience layer** — calm phone-first spatial translation into meaningful rooms, objects, doors, EXIT, light and restrained Music-Master presence.

Start with a simple, convincing H.E.A.T Studio 1.0. Prove the functional loop before broadening. Weekbrief and Muziekmeter are preserved accepted layers but do not displace this proof.

## Current checkpoints
Read together:
- `docs/HANDOFF-2026-09-12-FRESH-CHAT.md` (commit `a6c13fdbc4570eaf81efa100ec058085f18c241e`)
- `docs/SOURCE-MAP-MUSIC-JOURNALISM-2026-09-12.md` (commit `9fd404fc9f25d0176dd7430988ee50e5083b5ad2`)
- `docs/DECISION-2026-09-11-MUZIEKMETER-ONTDEK-DNA.md`
- `docs/DECISION-2026-09-11-PERSONAL-WEEKBRIEF.md`
- `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`
- `docs/DECISION-2026-09-10-TAXONOMY-REPAIR-CLOSED.md`
- `docs/CHECKPOINT-2026-09-09-UK-PUNK-01-RAW-REBELLIOUS.md`
- `docs/CHECKPOINT-2026-09-09-UK-PUNK-02-ART-HOOKS-ATTITUDE.md`
- `docs/CHECKPOINT-2026-09-08-W36-RECOVERY.md`
- `docs/CHECKPOINT-2026-09-08-EVENING-CONSOLIDATION.md`

These are provenance/checkpoints. This `PROJECT-STATE.md` is the central current navigation layer and supersedes older next-step wording where older documents conflict with later accepted decisions.
