# Music DNA iPhone — candidate status 2026-09-19

## Decision
The current iPhone work is a **visually approved, production-connected candidate**, not yet a production replacement. The existing production page remains the fallback. The integrated shell reads existing production selections and ratings, but deliberately does not create daily selections or Saturday gifts.

## Closed for this candidate
- Standalone four-screen visual preview: Discover, Detail, My Music World, Gemstone Museum.
- Preview is architecturally isolated from current-week production data and localStorage.
- External UI harness checks route identity, route-specific DOM content, width/clipping, control height and bottom navigation geometry at a 390×844 test viewport.
- Shared rating writer validates scope/rating before mutation, preserves append-only ledger semantics, distinguishes pre-commit rejection from post-commit derived-sync failure, and provides non-rating recovery.
- Synthetic rating harness covers official/reserve separation, append-only rerating, invalid-input immutability, committed failure and non-mutating recovery.
- Saturday handoff now matches the production reserve semantics: all 21 official ratings are required; if reserve is required it must exist and be completed, while a genuinely zero-reserve day may proceed. The shell includes a deterministic behavior self-test for these cases.
- Historical museum W36-W38 remains read-only; W39 stays sealed until a valid released artifact exists.

## Static integration audit completed 2026-09-19
- Internal preview route checks were refreshed after the final wording changes; stale expectations such as “Beoordelen” / “Nog verzegeld” were removed.
- The external UI gate now matches the final four-state wording (RAAK, GOED, NOG EENS, NEE) and tests the current in-flow navigation geometry rather than incorrectly requiring a fixed viewport position.
- The Discover cards again expose a visible “Luister & beoordeel” affordance and are keyboard-operable in the standalone candidate.
- The functional shell now exposes its Saturday-semantics self-test to the outer integrity gate; the gate also requires rating writer v5 and positive bank v14.
- Static source inspection confirms the standalone visual preview remains isolated from production data, while the functional shell deliberately reads the existing production selections/state and uses the shared rating writer / learning / positive-bank stack.
- The temporary hard-coded W38→W39 calendar override has been removed; the shared week registry is again the sole calendar source and `calendarDay()` reads current time dynamically.
- Stock presentation now distinguishes missing local learning history from a real zero reserve: with no local learning signals the shell shows `LOKALE STATUS ONBEKEND`, not `KRITIEK`. The integrity gate protects this wording rule; positive-bank semantics are unchanged.

## Known deliberate limits
- No real W39 rating is used for testing.
- The new functional shell reads existing selections; it does not replace the current production selector.
- The standalone visual preview remains available as a design reference, but its approved visual language has now been merged into the production-connected functional shell. The shell still remains a candidate and production fallback is retained.
- Saturday gift construction remains in the existing controlled Saturday route.
- No automated browser-gate PASS has been claimed in this environment.
- The four-screen candidate has been manually rendered and visually inspected on the user's real iPhone on 2026-09-19; Discover, Detail/Muziekmeter, My Music World and Gemstone Museum were all reviewed. The explicit Detail → Discover return path was added after that inspection exposed the navigation ergonomics.

## Current stop point
All source-level iPhone-candidate work that can be completed safely without executing a real browser has been completed, including the calendar-source cleanup and truthful local-stock wording. Do not add further production behavior merely to make a test pass. The remaining iPhone blockers are runtime verification only. W39 operational preparation is tracked separately and does not reopen the iPhone candidate.

## Real-browser verification — 2026-09-20
- `test/iphone-ui-integrity-gate-v1.html` — **PASS** on the user's real iPhone in Safari, Gate `2026-09-20.1` at `2026-09-20T09:10:18.717Z`. Discover, Detail, World and Museum all passed route, production-isolation, viewport, control-height, clipping and navigation checks.
- `test/iphone-rating-write-gate.html` — **PASS** on the user's real iPhone in Safari, Gate `2026-09-20.1` at `2026-09-20T09:16:52.803Z`. Official/reserve state separation, append-only ledger behavior, validation-before-mutation, rating-writer v5, committed post-ledger failure semantics and non-rating derived recovery all passed.
- The rating-write harness uses isolated synthetic localStorage; these checks did not write to the user's real W39 production ratings.

## Promotion gate
Do not replace the current production page until:
1. ~~`test/iphone-rating-write-gate.html` reports PASS in an actual browser.~~ Completed on real iPhone Safari on 2026-09-20.
2. ~~`test/iphone-ui-integrity-gate-v1.html` reports PASS at the intended iPhone viewport.~~ Completed on real iPhone Safari on 2026-09-20.
3. ~~Discover, Detail, My Music World and Gemstone Museum have been visually inspected from rendered output.~~ Completed on a real iPhone on 2026-09-19.
4. ~~Merge the approved visual candidate into the production-connected functional shell without changing selector, Flow-DNA, rating-ledger or Saturday-gift semantics.~~ Completed; the shell remains read-existing-data-first and the existing selector / Saturday route are retained.
5. ~~Run both automated gates in an actual browser; correct any failures and rerun them.~~ Completed: both Gate `2026-09-20.1` checks PASS on real iPhone Safari. A read-only `MUSIC_DNA_IPHONE_DIAGNOSTIC()` helper remains available in the integrated shell to report current week/day and failed shell checks without changing ratings or selections.

All listed promotion-gate evidence is now closed. Keep the current production page as fallback while W39 is live; promotion of the candidate is a separate controlled deployment decision and must not disturb the active W39 week.

## Controlled deployment freeze — active W39
The integrated candidate source is frozen at `test/music-dna-iphone-shell-v1.html` after the two real-iPhone PASS results. During active W39 it must remain a parallel candidate: do not redirect `test/index.html`, do not replace `test/daily.html`, and do not migrate or rewrite the user's production localStorage. The next promotion decision is deferred until a clean week boundary, unless a production defect requires an explicit recovery change. This preserves the proven W39 daily route while preventing candidate drift after its accepted gates.
