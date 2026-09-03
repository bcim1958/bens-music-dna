# Ben's Music DNA — UX Specification

## Core loop
Open -> today's 3 discoveries -> listen -> react -> Music DNA remembers/learns -> next discovery -> 3/3 complete -> home/free exploration -> Saturday weekly gift.

## Daily choice screen
### Header
- Today position: 1/3, 2/3, 3/3.
- Subtle action indicator if another real action exists.

### Music area
- Album/artwork and artist/track/release identity.
- Music is visually dominant.
- Playback progress.
- Explicit elapsed time and remaining time.
- Spotify handoff/opening remains available but subordinate.

### Reaction prompt
Preferred wording direction: `Wat deed dit nummer met je?`
Four equal visual choices:
1. RAAK — strong positive emotional hit.
2. GOED — positive fit.
3. NOG EENS — unresolved; preserve for Second Chance.
4. NEE — does not fit Ben.

Do not visually punish NEE or make NOG EENS look inferior.

### Discovery navigation
- Playback previous/next is not the same as previous/next Music DNA discovery.
- Provide explicit Previous Discovery and Next Discovery controls.
- At 1/3, previous discovery is unavailable.
- At 2/3 and 3/3, user can revisit earlier discoveries.
- Existing rating is shown on revisit and is not erased.
- No unnecessary confirmation/Save/OK step after rating.

## Completion
After the third daily discovery:
- short calm completion state;
- confirm choices were remembered;
- week continues/grows toward Saturday;
- then enter Music DNA home/free exploration.
Do not turn completion into a score or performance dashboard.

## Home / after the round
Music first. Possible content:
- continue listening;
- weekly Ontdek-DNA status;
- existing Genre DNA / Band DNA;
- Mood DNA / Theme DNA routes when sufficient enrichment exists;
- recently opened artist world;
- a gentle curiosity invitation related to a track that hit Ben;
- actual pending action indicator.

## Curiosity / artist world
A positive or interesting music encounter can open a rich world, but enrichment never blocks the music loop.
Navigation is object/relationship-driven rather than a rigid menu hierarchy.
Every deep page must have a clear route back to where Ben came from.

### Accessibility rule for richness
The richness behind Music DNA must never be presented as visible complexity.
The first artist screen should answer within seconds:
1. Who is this?
2. What does it sound like?
3. Why is this artist in Ben's Music DNA?

Only after that should curiosity reveal deeper layers.

Use three depths:
- **Kijken** — immediate identity, musical character, Ben-DNA connection.
- **Bladeren** — story, albums, songs, people, live, news, reviews/interviews.
- **Verdwalen** — deliberate cross-links to people, other bands, albums, moods/themes, producers, labels and `Meer zoals…`.

Even when 'verdwalen', the app must preserve a semantic trail and guaranteed return route. Do not make the user reconstruct where they came from.

Avoid Wikipedia-like forests of inline links and avoid showing every possible relationship at once. Prefer deliberate calls such as:
- `Ontdek de verbinding ->`
- `Meer zoals H.E.A.T ->`
- `Ontdek via sfeer ->`

Potential artist-world dimensions:
- story/timeline/lore
- albums
- songs
- people/current and former members
- live/tours/setlists
- interviews
- video/Chapters/media
- current news
- merch/books/reissues
- connections/influences
- Mood/Theme character
- personal 'Mijn Smaak' relationship indicator

## Mood DNA / Theme DNA
Treat Genre, Mood and Theme as distinct discovery axes:
- Genre DNA — what kind of music?
- Mood DNA — how does it feel?
- Theme DNA — when/why does it fit?
- Ben DNA — what does Ben actually respond to?

Mood/Theme values may be grouped into understandable playlist concepts while preserving source tags underneath. Do not duplicate tracks into separate master stores; playlists are selections/relationships over one music world.

## H.E.A.T pilot UX goal
H.E.A.T is the first full rich-artist pilot. The prototype should test a calm phone-first entry screen with a limited number of obvious top-level routes such as:
- Luisteren
- Verhaal
- Albums
- Mensen
- Actueel
- Ontdekken

Deeper Mood/Theme data, related artists, credits and graph connections should remain available behind those routes rather than crowding the entry screen.

## Second Chance
`NOG EENS` means: this music deserves another encounter.
- Preserve the track and original context/date.
- Current concept: surface in a temporary Second Chance list on the first day of each quarter.
- Re-listen should lead to a fresh explicit judgement, while retaining historical provenance.
- Exact technical rules remain to be specified before implementation.

## Action badge
Only user-required actions count.
Daily discoveries: 3 -> 2 -> 1 -> no badge when complete.
Do not count passive news or enrichment.
The app must make clear inside the app what the pending action is.

## Weekly gift
The daily process feeds a weekly Saturday `Ontdek-DNA Wxx` gift playlist of 30 tracks.
The 30-track gift is not assumed to be identical to the maximum 21 daily offers; selection/supplement/ranking rules must be preserved/reconstructed from the existing implementation before changes.

## Non-negotiable persistence
- Once rated, never lose a rating.
- Never ask for a rating again as if it were new because of an app/version migration.
- Missed daily tracks do not become homework/backlog.
