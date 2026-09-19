# Music DNA iPhone — candidate status 2026-09-19

## Decision
The current iPhone work is a **visual/functional candidate**, not a production replacement. The existing production page remains the fallback and the new shell does not create daily selections or Saturday gifts.

## Closed for this candidate
- Standalone four-screen visual preview: Discover, Detail, My Music World, Gemstone Museum.
- Preview is architecturally isolated from current-week production data and localStorage.
- External UI harness checks route identity, route-specific DOM content, width/clipping, control height and bottom navigation geometry at a 390×844 test viewport.
- Shared rating writer validates scope/rating before mutation, preserves append-only ledger semantics, distinguishes pre-commit rejection from post-commit derived-sync failure, and provides non-rating recovery.
- Synthetic rating harness covers official/reserve separation, append-only rerating, invalid-input immutability, committed failure and non-mutating recovery.
- Saturday handoff uses all 21 official ratings plus Saturday reserve completion and has a deterministic behavior self-test.
- Historical museum W36-W38 remains read-only; W39 stays sealed until a valid released artifact exists.

## Known deliberate limits
- No real W39 rating is used for testing.
- The new shell reads existing selections; it does not yet replace the current production selector.
- Saturday gift construction remains in the existing controlled Saturday route.
- No browser/render PASS has been claimed in this environment.
- Visual judgement (spacing, typography, hierarchy, feel) still requires an actual rendered inspection.

## Promotion gate
Do not replace the current production page until:
1. `test/iphone-rating-write-gate.html` reports PASS in an actual browser.
2. `test/iphone-ui-integrity-gate-v1.html` reports PASS at the intended iPhone viewport.
3. Discover, Detail, My Music World and Gemstone Museum have been visually inspected from rendered output.
4. Any visual defects found are corrected and the two gates are rerun.

Until then this candidate is safe to inspect alongside production, with production retained as fallback.
