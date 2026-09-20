# DNA Explorer — semantic position model — 2026-09-20

## User-facing rule
Click history is technical state. It is not the user's route.

Explorer shows only the current semantic position relative to the session anchor/head trail.

## Behaviour
- Back still uses the internal click stack and goes one screen back.
- Hubs such as Verken Ghost and Bands/artiesten zoals Ghost do not count as musical turns.
- Returning to the anchor resets the visible distance to zero.
- Revisiting a semantic node collapses loops in the visible route.
- The top line is compact: `⌂ Ghost · 2 afslagen`, not a browser-like breadcrumb.
- My route shows only semantic music/story/person/place nodes from the anchor to the current position.
- Main trail returns directly to the anchor.

## Product principle
The app remembers every click only where needed for Back. The user is shown only information that helps orientation.

W39 production remains untouched.