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
It already contains Spotify identity, origin, AllMusic taxonomy, release/year data, DNA playlist relations and a DNA-Beheerlaag.
Existing DNA playlist members are already harvested and must not be presented as new discoveries.
`data/artist-registry-v1.json` is an experimental technical layer only, not the central music database.

## Current product architecture
1. Master music database — what Music DNA knows about music.
2. Selection/week engine — candidates, daily discoveries, weekly gift.
3. Personal memory — offers, ratings, learning, second chances; ratings may never be lost or requested again as if new.
4. Rich artist world — story, albums, songs, people, live/setlists, interviews, media, news, merch, connections; supporting/bonus layer.
5. Presentation — calm, cinematic, phone-first interface.
6. Enrichment/knowledge graph — Moods, Themes, related artists, memberships, credits and other durable relationships layered over the Master without duplicating the music world.

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
The visible language is cinematic Music DNA imagery:
- RAAK — golden light impact / spark.
- GOED — calm blue musical resonance/wave.
- NOG EENS — violet returning film/light ribbon; this replaces the negative feel of 'Twijfel' in the visible UI.
- NEE — red/orange signal or light that fades out; no thumbs-down or ugly cross.

`NOG EENS` is unresolved music, not discarded music. It belongs to a Second Chance lifecycle. Current concept: temporary second-chance list on the first day of each quarter for a fresh listen and final/new judgement. Exact lifecycle still needs technical specification.

## Visual identity
- Existing brand idea is retained: double DNA helix + sound waveform.
- Brand mark says what Music DNA IS; cinematic language says how Music DNA FEELS.
- Chosen icon direction on 2026-09-03: **C — Living DNA**.
- Black base, living emerald-green DNA/sound mark, expressive but legible at small iPhone icon size.
- Refine rather than replace: clearer helix, slightly calmer waveform, subtle central light point.
- Violet is the current action/Second-Chance accent.

## Action indicator
The iPhone app icon should show a counter only when Ben has an actual action to perform.
Example daily cycle: 3 -> 2 -> 1 -> no badge after completion.
Do not count passive news/articles as required actions.
Action indicator should harmonize with the Music DNA visual language rather than becoming generic app clutter.

## Rich artist world — VALIDATED FIRST PROOF
Music remains central. Artist/band information makes the app rich and attractive but must never block the daily music process.
Desired enrichment includes: official band bio, current/former member bios, Wikipedia, recent articles, setlist.fm, tour data, band logo, albums, songs, people, interviews, video/Chapters, media, merch, connections/influences.
Editorial source preferences noted in practice: Lust for Life (classic rock/glam/older heroes), Progwereld (prog), Arrow Lords of Metal (hard rock/Ghost/new metal), Rockportaal (punk/new wave/broader rock).
A visual 'Mijn Smaak' thermometer is a desired personal/artist relationship element.
Navigation rule: do not throw Ben 'out of the band'; preserve context and a clear route back.

### H.E.A.T proof — completed and tested on iPhone
The public H.E.A.T rich-artist prototype is implemented and tested successfully on iPhone:
`test/artist-heat-rich-world-v1.html`

Observed product proof:
- the page feels logical and clickable rather than like a click maze;
- Kijken -> Bladeren -> Verdwalen works naturally;
- `Waarom hier?` successfully explains a real Master relationship;
- band -> person -> band graph traversal feels natural (H.E.A.T -> Erik Grönwall -> Skid Row);
- Mood DNA and Theme DNA are understandable as optional routes;
- the bottom semantic return path is calm and reliable;
- the navigation grammar should not be fundamentally redesigned before broader rollout.

### Accessibility principle
Richness must never become visible complexity.
The first artist screen must answer within seconds: who is this, what does it sound like, and why is it in Ben's Music DNA?
Use three depths: Kijken -> Bladeren -> Verdwalen. Even at the deepest level, preserve a semantic trail and a guaranteed route back.
Avoid click mazes and Wikipedia-like forests of inline links.

> **Music DNA hoeft niet alles tegelijk te laten zien om alles bereikbaar te maken.**

> **Iedere klik in Music DNA moet een antwoord geven óf nieuwsgierigheid belonen. Nooit alleen een volgend menu openen.**

## Muzikale pleisterplaats
A rich artist world is not primarily an information page. It is a **muzikale pleisterplaats**: Ben can arrive through one relation, stay briefly, listen, read, follow a surprising side path and leave again. Nothing has to be completed.

Spotify is therefore a contextual listening layer throughout the rich world.

> **Waar Music DNA een muzikale bewering doet, moet je die waar mogelijk met één tik kunnen beluisteren.**

Examples include artist, album, essential-track, person-connection, Mood/Theme and comparison links. A route such as H.E.A.T -> Erik Grönwall -> Skid Row can therefore offer a direct Spotify entry to a representative Skid Row track such as `18 and Life`.

Unexpected links are desirable, but not arbitrary. A surprise should have a real basis in Master/enrichment/graph data and an optional `Waarom deze verbinding?` explanation.

## Verras me! — accepted homepage function
`Verras me!` is accepted as a prominent start-page function.

Purpose: rediscover Ben's own existing music world when he does not want to decide in advance what to hear.

Default:
- one tap;
- `Alles / hoofdindeling` preselected;
- choose an artist from the existing Master world;
- reduce recent repeats;
- open the artist's rich musical resting place.

Optional steering after the first tap can use available database dimensions such as:
- Genre;
- Mood;
- Theme;
- year/period;
- taste rating;
- later country, Style, DNA relationship, people, producer/credit and other reliable graph fields.

Combinations are desirable. The interface must reveal this progressively rather than demand setup.

> **Music DNA moet veel keuze bieden, maar nooit voelen alsof je veel móét kiezen.**

> **Music DNA gebruikt de database niet om Ben's keuze te beperken, maar om hem meer manieren te geven om te kiezen.**

`Ontdek DNA` and `Verras me!` are deliberately different:
- Ontdek DNA = find music that may be new to Ben;
- Verras me! = rediscover music already inside Ben's own music world.

See `docs/RICH-ARTIST-PROOF-AND-SURPRISE-MODE-2026-09-03.md`.

## AllMusic opportunity audit — completed 2026-09-03
Current Master usage of AllMusic Genre/Style is valid but does not exploit all useful semantic layers.
Accepted enrichment directions:
- Moods — high-priority durable enrichment layer.
- Themes — high-value context/use layer.
- Similar To / Influenced By / Followed By / Associated With / Collaborated With — graph relations.
- Group Members / Member Of — graph relations.
- Album Picks / Track Picks / Similar Albums / editorial ratings — album/artist enrichment.
- Credits — high-value person/production graph relations.
- Biography, active years, formation, aliases, discography and related artist metadata — artist enrichment.
See `docs/ALLMUSIC-OPPORTUNITY-AUDIT-2026-09-03.md`.

## Mood DNA / Theme DNA direction
Treat them as first-class discovery axes, not as extra genre labels:
- Genre DNA = what kind of music?
- Mood DNA = how does it feel?
- Theme DNA = when/why does it fit?
- Ben DNA = what actually proves to move Ben?
Potential playlist concepts include Dark & Theatrical, Epic & Driving, Energetic & Rousing, Night Driving, Late Night, Road Trip, etc.
Selections should be generated over the existing Master/graph, never by duplicating music into parallel databases.

## Current build status
- Existing W36 discovery/week implementation remains the live build and must not be disrupted.
- H.E.A.T rich-artist v1 is implemented, publicly deployed and positively evaluated on iPhone.
- Its navigation grammar is the current template for rich artist worlds.
- The Master has not been altered by the AllMusic audit; enrichment remains layered on top of it.
- The next product proof after database baseline/enrichment design is `Verras me!`.

## Open technical risks
1. Rating persistence/localStorage migration remains the highest functional risk; historical ratings must never be lost.
2. Stable artist identity is required before automatic enrichment. Name-only matching (e.g. `Ghost`) can attach the wrong artist. Use stable external IDs and provenance.
3. Rights/licensing/source policy for AllMusic enrichment must be defined before large-scale automated ingestion; avoid copying protected editorial text.
4. Mood/Theme scope may vary by artist/album/song; store source scope and provenance rather than pretending every tag is track-level truth.
5. The 30-track Saturday gift still exceeds the maximum 21 daily offers; supplementation/ranking logic must remain explicit.
6. Knowledge-graph enrichment must not create a manually maintained parallel database or a click maze in the UX.
7. Current/live data (news, tours, setlists, reviews) needs source + date and must remain separate from durable Master facts.

## Exact next step
Move from successful product proof to factual database foundation:
1. establish a Master 1.7 baseline: tracks, unique artists, albums, years, countries, Genre/Style and DNA relation coverage;
2. measure completeness and identify fields that are already strong enough to drive choice;
3. assess Mood/Theme and graph enrichment coverage on representative entities;
4. define one enrichment model with stable identity, scope, provenance, date checked and confidence/status;
5. only then build `Verras me!` on the same Master + enrichment + graph substrate.

## Immediate technical priorities
1. Preserve the running W36 path through Saturday and generate the 30-track gift.
2. Inspect and harden rating persistence/localStorage migration. A rating once given must never be lost.
3. Map Master 1.7 fully as the fixed underlayer and quantify its current usable dimensions.
4. Define a generated app-serving data layer instead of manual duplication.
5. Measure Mood/Theme/graph enrichment opportunity before bulk enrichment.
6. Reconcile Ghost_DNA export when available with master relationships.
7. Build `Verras me!` after the data baseline and enrichment model are proven.

## Session safety rule
A chat is a workbench, never the archive. Decisions and current state must be written to GitHub during the session. Before a new Music DNA work session, read this file plus `DECISIONS.md`, `UX-SPEC.md`, `DESIGN-SYSTEM.md` and the latest dated audit/research notes first.