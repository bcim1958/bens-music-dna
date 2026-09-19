# iPhone rating chain — deterministic validation contract
Date: 2026-09-19
Status: source-level gate complete; browser execution still required before browser-PASS.

## Scope
This contract validates the shared iPhone rating path without using real W39 ratings. The executable harness is `test/iphone-rating-write-gate.html` and uses only synthetic track `2026-W39-TEST-A`.

## Required invariants
1. Official rating writes primary state, append-only ledger, learning and positive-bank sync.
2. Reserve rating remains separate from the official meter/state.
3. Re-rating appends a new ledger event; latest value wins.
4. Invalid rating, invalid day, or invalid week is rejected before any state, ledger, or positive-bank mutation.
5. If ledger append has committed but derived sync fails, the result is `committed:true`; primary state and ledger event remain intact.
6. Recovery uses `MUSIC_DNA_RATING_WRITE.resyncDerived()` only. It must not create a rating, alter the stored rating, or append a ledger event.
7. The iPhone UI must never tell the user to rate again after a committed failure; it offers the derived-data recovery path instead.

## Current implementation
- Shared writer: `test/music-dna-rating-write-v1.js`, API version 4.
- Synthetic executable gate: `test/iphone-rating-write-gate.html`.
- iPhone shell recovery UI: `test/music-dna-iphone-shell-v1.html`.

## Release rule
Do not call this chain browser-PASS until the executable gate has actually run in a browser and reports PASS. Source inspection/static checks are not a substitute for browser execution.

No real W39 rating is needed or permitted for this validation.
