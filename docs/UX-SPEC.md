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
- recently opened artist world;
- a gentle curiosity invitation related to a track that hit Ben;
- actual pending action indicator.

## Curiosity / artist world
A positive or interesting music encounter can open a rich world, but enrichment never blocks the music loop.
Navigation is object/relationship-driven rather than a rigid menu hierarchy.
Every deep page must have a clear route back to where Ben came from.

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
- personal 'Mijn Smaak' relationship indicator

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
