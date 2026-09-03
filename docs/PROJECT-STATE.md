# Ben's Music DNA — Project State

Last updated: 2026-09-03
Status: ACTIVE DEVELOPMENT

## Product north star
Music DNA is Ben's daily go-to place for music experience.

**Eerst muziek. Dan jij. Dan de wereld.**

Music is the main road. Rich artist information is an optional reward for curiosity. The app must always remember the route back to the music.

## Live process
- Week 36 is running now as the first real weekly practice cycle.
- Ben receives 3 discoveries per day and rates them.
- The weekly process continues through Saturday and must result in an Ontdek-DNA W36 gift playlist of 30 tracks.
- Do not disrupt the running W36 process while rebuilding/refining the app.

## Source of truth — music data
Primary content substrate: `Ben_Master_Music_DNA_Database_1.7_Spotify_Gereconcilieerd_2026-08-25.xlsx`.
Existing DNA playlist members are already harvested and must not be presented as new discoveries.
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

## Rating concept — current design direction
Four reactions remain semantically compatible with internal values `raak`, `goed`, `twijfel`, `nee`, but the UI must NOT use generic phone emoji.
Visible language:
- RAAK — golden light impact / spark.
- GOED — calm blue musical resonance/wave.
- NOG EENS — violet returning film/light ribbon.
- NEE — red/orange signal or light that fades out.

`NOG EENS` is unresolved music, not discarded music. Exact Second Chance lifecycle still needs technical specification.

## Visual identity
- Double DNA helix + sound waveform retained.
- Brand mark says what Music DNA IS; cinematic language says how Music DNA FEELS.
- Chosen icon direction: **C — Living DNA**.
- Black base, living emerald-green DNA/sound mark, violet action/Second-Chance accent.

## Rich artist world — VALIDATED
H.E.A.T rich artist v1 is implemented, deployed and successfully tested on iPhone:
`test/artist-heat-rich-world-v1.html`

Validated observations:
- logical and clickable, not a click maze;
- Kijken -> Bladeren -> Verdwalen works naturally;
- `Waarom hier?` successfully explains a real Master relationship;
- H.E.A.T -> Erik Grönwall -> Skid Row proves natural graph traversal;
- Mood DNA / Theme DNA work as optional discovery routes;
- bottom semantic return path is calm and reliable;
- navigation grammar should not be fundamentally redesigned before broader rollout.

> **Music DNA hoeft niet alles tegelijk te laten zien om alles bereikbaar te maken.**

> **Iedere klik in Music DNA moet een antwoord geven óf nieuwsgierigheid belonen. Nooit alleen een volgend menu openen.**

## Muzikale pleisterplaats
A rich artist world is a **muzikale pleisterplaats**, not primarily an information page. Ben can arrive, listen, read, follow a surprising side path and leave again without completing anything.

Spotify is a contextual listening layer.

> **Waar Music DNA een muzikale bewering doet, moet je die waar mogelijk met één tik kunnen beluisteren.**

Unexpected links should be grounded in real Master/enrichment/graph data and have an optional `Waarom deze verbinding?` explanation.

See `docs/RICH-ARTIST-PROOF-AND-SURPRISE-MODE-2026-09-03.md`.

## Master 1.7 factual baseline — COMPLETED
Measured on the `Playlist` sheet:
- 3,480 tracks
- 3,333 unique exact artist-credit strings
- 3,558 individual names after semicolon split
- 3,371 unique album titles
- 3,425 artist+album pairs
- Spotify Track URI 100%
- release/year 94.5%
- country 94.5%
- region/decade 94.5%
- AllMusic main genre/structure 94.5% field presence
- AllMusic styles 93.5% field presence
- 108 distinct Style tokens
- 126 country/origin strings
- 48 DNA playlist relation tokens
- 1,407 DNA-used tracks, 2,073 currently not DNA-used

Quality nuance: 418 rows are marked `onvoldoende bronmetadata` / semantically `Niet vastgesteld`; 193 rows remain without the corresponding classification/place/time data. Placeholder values do not count as useful semantic coverage.

See `docs/MASTER-1.7-BASELINE-2026-09-03.md`.

## AllMusic / enrichment proof — COMPLETED
A representative cross-section across hard rock, metal, prog, punk/new wave, goth/alternative and grunge confirms:
- artist Mood sets are often rich and highly differentiating;
- Theme is useful but generally sparser;
- artist/album/song scope differs and must be stored explicitly;
- people, member and credit relations are strong graph material;
- stable identity resolution is mandatory;
- bulk enrichment should be incremental rather than pretending uniform coverage.

See `docs/ENRICHMENT-PROOF-2026-09-03.md`.

## Mood DNA / Theme DNA direction
- Genre DNA = what kind of music?
- Mood DNA = how does it feel?
- Theme DNA = when/why does it fit?
- Ben DNA = what actually proves to move Ben?

Mood/Theme are first-class optional discovery axes. They are not required fields for every entity and are never silently inherited from album to track.

## Verras me! — ACCEPTED + V1 BUILT
Purpose: rediscover Ben's own music world when he does not want to decide in advance what to hear.

Core principle:
> **Music DNA moet veel keuze bieden, maar nooit voelen alsof je veel móét kiezen.**

> **Music DNA gebruikt de database niet om Ben's keuze te beperken, maar om hem meer manieren te geven om te kiezen.**

Default:
- one tap;
- all/whole music world preselected;
- recent repeats suppressed;
- artist becomes a musical resting place;
- `Waarom deze?` explains the selection.

Optional steering may use Genre, Style, country, period, Mood, Theme and later taste/graph dimensions. Multiple dimensions can be combined.

A first phone-first functional prototype now exists:
`test/surprise-me-v1.html`

Prototype data:
`data/surprise-sample-v1.json`

Important: the sample JSON is deliberately a proof dataset, NOT a parallel database. The production version must be generated from Master + enrichment + graph layers.

## Ontdek DNA versus Verras me!
- Ontdek DNA = find music that may be new to Ben.
- Verras me! = rediscover music already inside Ben's own music world.

They share data infrastructure but have different product purposes.

## Current build status
- W36 live discovery path remains untouched.
- H.E.A.T rich artist proof is validated.
- Master baseline is measured.
- enrichment opportunity is proven.
- enrichment/graph schema v1 is defined.
- `Verras me!` v1 prototype is committed as a safe standalone test page.

## Open technical risks
1. Rating persistence/localStorage migration remains the highest functional risk.
2. Stable artist identity must be generated before automatic broad enrichment.
3. Rights/licensing/source policy for enrichment must be respected; protected editorial text is not bulk-copied.
4. Mood/Theme scope must remain explicit.
5. Saturday 30-track gift supplementation logic remains open.
6. Generated app-serving data must prevent manual duplication.
7. Living/current data requires source + date.
8. `Verras me!` production logic needs a Master-derived eligible-artist dataset and durable recent-history/personal-state integration.

## Exact next step
Evaluate `Verras me! v1` on iPhone, then replace its small proof sample with a generated Master-derived artist/facet dataset.

Productionization sequence:
1. verify the prototype interaction/feel on phone;
2. generate canonical artist entities from Master 1.7 with safe identity keys;
3. generate surprise facets and eligible pools from real Master fields;
4. attach existing Spotify Track URI anchors rather than search URLs;
5. add Mood/Theme only where verified enrichment exists;
6. connect the selected artist to the rich artist-world grammar;
7. persist recent surprise history so repeats remain controlled across sessions.

## Immediate technical priorities
1. Preserve W36 through Saturday and generate the gift.
2. Harden rating persistence.
3. Build the Master -> generated app-serving pipeline.
4. Verify `Verras me!` on iPhone and then feed it real Master-derived data.
5. Expand canonical identity and enrichment incrementally.
6. Reconcile Ghost_DNA export when available.

## Session safety rule
A chat is a workbench, never the archive. Decisions and current state must be written to GitHub during the session. Before a new Music DNA work session, read this file plus `DECISIONS.md`, `UX-SPEC.md`, `DESIGN-SYSTEM.md` and the latest dated audit/research notes first.