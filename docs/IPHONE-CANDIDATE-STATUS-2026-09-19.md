# Music DNA iPhone — candidate status 2026-09-19

## Decision
The current iPhone work is a **visual/functional candidate**, not a production replacement. The existing production page remains the fallback and the new shell does not create daily selections or Saturday gifts.

## Closed for this candidate
- Standalone four-screen visual preview: Discover, Detail, My Music World, Gemstone Museum.
- Preview is architecturally isolated from current-week production data and localStorage.
- External UI harness checks route identity, route-specific DOM content, width/clipping, control height and bottom navigation geometry at a 390×844 test viewport.
- Shared rating writer validates scope/rating before mutation, preserves append-only ledger semantics, distinguishes pre-commit rejection from post-commit derived-sync failure, and provides non-rating recovery.
- Synthetic rating harness covers official/reserve separation, append-only rerating, invalid-input immutability, committed failure and non-mutating recovery.
- Saturday handoff now matches the production reserve semantics: all 21 official ratings are required; if reserve is required it must exist and be completed, while a genuinely zero-reserve day may proceed. The shell includes a deterministic behavior self-test for these cases.
- Historical museum W36-W38 remains read-only; W39 stays sealed until a valid released artifact exists.

## Known deliberate limits
- No real W39 rating is used for testing.
- The new shell reads existing selections; it does not yet replace the current production selector.
- Saturday gift construction remains in the existing controlled Saturday route.
- No automated browser-gate PASS has been claimed in this environment.
- The four-screen candidate has been manually rendered and visually inspected on the user's real iPhone on 2026-09-19; Discover, Detail/Muziekmeter, My Music World and Gemstone Museum were all reviewed. The explicit Detail → Discover return path was added after that inspection exposed the navigation ergonomics.

## Promotion gate
Do not replace the current production page until:
1. `test/iphone-rating-write-gate.html` reports PASS in an actual browser.
2. `test/iphone-ui-integrity-gate-v1.html` reports PASS at the intended iPhone viewport.
3. ~~Discover, Detail, My Music World and Gemstone Museum have been visually inspected from rendered output.~~ Completed on a real iPhone on 2026-09-19.
4. Run both automated gates in an actual browser; correct any failures and rerun them.

Until then this candidate is safe to inspect alongside production, with production retained as fallback.
