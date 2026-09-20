# DNA Explorer — orientation + light reading contract — 2026-09-20

## Design result from the click-session
Explorer may encourage wandering, but the app owns the orientation burden. The user should not need to remember how they arrived.

## Navigation contract
- Always show a compact recent trail.
- Bottom navigation: Back | My route | Main trail.
- My route opens the actual walk as tappable steps.
- Main trail returns to the anchor that started this Explorer session.
- After four or more turns, show a quiet orientation card with distance from the anchor.
- Wandering is never blocked; orientation help is informational, not a warning.
- The session anchor can later be Ghost, an Ontdek-DNA artist/track, an Express story, or another entry point.

## Editorial contract
Explorer is leisure reading, not study.
- Dutch by default.
- Normal story target: roughly 30–60 seconds first-read time.
- Short paragraphs and relaxed language.
- Completeness is not the goal; curiosity is.
- Optional deeper reading follows after the useful short version.
- Original source remains available for source stories.

## Product shorthand
Veel rijkdom, weinig inspanning. Verdwalen mag; verloren raken niet.

## Implementation proof
Engine v2 adds route map, anchor/main-trail return, and a subtle orientation prompt after four turns. It remains standalone and does not touch W39 production.