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

## Rich artist world
Music remains central. Artist/band information makes the app rich and attractive but must never block the daily music process.
Desired enrichment includes: official band bio, current/former member bios, Wikipedia, recent articles, setlist.fm, tour data, band logo, albums, songs, people, interviews, video/Chapters, media, merch, connections/influences.
Editorial source preferences noted in practice: Lust for Life (classic rock/glam/older heroes), Progwereld (prog), Arrow Lords of Metal (hard rock/Ghost/new metal), Rockportaal (punk/new wave/broader rock).
A visual 'Mijn Smaak' thermometer is a desired personal/artist relationship element.
Navigation rule: do not throw Ben 'out of the band'; preserve context and a clear route back.

### Accessibility principle
Richness must never become visible complexity.
The first artist screen must answer within seconds: who is this, what does it sound like, and why is it in Ben's Music DNA?
Use three depths: Kijken -> Bladeren -> Verdwalen. Even at the deepest level, preserve a semantic trail and a guaranteed route back.
Avoid click mazes and Wikipedia-like forests of inline links.

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

## Current pilot
**H.E.A.T is the first full rich-artist pilot.**
Goal: prototype one calm phone-first artist world using real Master relation + Genre/Styles + Moods + Themes + story + albums + people + current/live layer + reviews/interviews + related artists + credits + graph connections.
This pilot should prove how much richness can sit behind a simple, accessible entry screen before scaling enrichment to all Master artists.
Ghost remains a secondary comparison artist because it exercises different mood/theme and relationship patterns.

## Current build status
- Existing W36 discovery/week implementation remains the live build and must not be disrupted.
- Project-memory branch contains durable project-state, decisions, UX/design docs and the AllMusic opportunity audit.
- No full H.E.A.T rich-artist UI has been implemented yet; it is the next design/prototype step.
- The Master has not been altered by the audit; enrichment strategy remains layered on top of it.

## Open technical risks
1. Rating persistence/localStorage migration remains the highest functional risk; historical ratings must never be lost.
2. Stable artist identity is required before automatic enrichment. Name-only matching (e.g. `Ghost`) can attach the wrong artist. Use stable external IDs and provenance.
3. Rights/licensing/source policy for AllMusic enrichment must be defined before large-scale automated ingestion; avoid copying protected editorial text.
4. Mood/Theme scope may vary by artist/album/song; store source scope and provenance rather than pretending every tag is track-level truth.
5. The 30-track Saturday gift still exceeds the maximum 21 daily offers; supplementation/ranking logic must remain explicit.
6. Knowledge-graph enrichment must not create a manually maintained parallel database or a click maze in the UX.
7. Current/live data (news, tours, setlists, reviews) needs source + date and must remain separate from durable Master facts.

## Exact next step
Design and implement the **H.E.A.T rich-artist pilot screen/flow** as the first full proof of the post-3/3 Music DNA world:
1. calm artist entry screen;
2. immediate identity + sound + `why in my DNA`;
3. six simple top-level routes: Luisteren, Verhaal, Albums, Mensen, Actueel, Ontdekken;
4. Mood/Theme character behind an `Ontdek via sfeer` route;
5. `Meer zoals…` and person/credit relationships behind deliberate graph routes;
6. persistent semantic back trail;
7. verify it remains usable on iPhone without exposing graph complexity.
Do not scale to all artists until this pilot has been evaluated.

## Immediate technical priorities
1. Reconstruct the latest implemented W36 behaviour from repository files before changing it.
2. Inspect and harden rating persistence/localStorage migration. A rating once given must never be lost.
3. Map the master database fully as the fixed underlayer and define a generated app-serving data layer instead of manual duplication.
4. Reconcile Ghost_DNA export when available with master relationships.
5. Build the H.E.A.T rich-artist pilot from the agreed UX/design principles.
6. Preserve the live W36 path through Saturday and generate the 30-track gift.

## Session safety rule
A chat is a workbench, never the archive. Decisions and current state must be written to GitHub during the session. Before a new Music DNA work session, read this file plus `DECISIONS.md`, `UX-SPEC.md`, `DESIGN-SYSTEM.md` and the latest dated audit/research notes first.
