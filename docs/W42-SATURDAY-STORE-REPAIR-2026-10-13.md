# Saturday protected-store migration — staged, not released

The Saturday page now opens the same atomic IndexedDB record and lifetime origin lock as daily.html. Candidate and history preflight run before learning/bank hydration. Music data no longer uses legacy localStorage; Spotify refresh credentials retain their existing separate location.

Durable checkpoints precede gift presentation, OAuth redirects, playlist mutation and receipt/FIFO success acknowledgement. A newly created playlist ID is committed before inserting tracks, allowing readback-based resumption. Verified receipt, history/FIFO consumption and museum state are committed together. A history commit failure blocks the page instead of later flushing partial staged consumption. JSON corruption is no longer hidden by a fallback read.

The cache preflight rejects service-worker registrations and stops further storage activity on controller changes. Static and dynamic components have generated integrity pins, checked by the regression runner. The compatibility CSP remains closed: the page does not execute in production until the remaining release gates pass. No W42 delivery configuration or candidate promotion.

28 offline regression programs pass. Browser coverage was extended to exercise the actual Saturday bootstrap against an isolated daily record: same lock, original/current preservation, receipt restart and atomic abort. Its test server removes CSP only for an explicit local synthetic fixture, never for production. Local headless Chrome could not launch under the app sandbox; GitHub browser CI is the validation path. GitHub browser CI completed successfully; the scoped report is saved in `W42-SATURDAY-STORE-BROWSER-2026-10-13.json`. This is Chromium with synthetic data, not an iPhone or authenticated Spotify proof.

No iPhone or Spotify mutations. Real W42 delivery/readback, device inventory, editorial candidate approval and publication assets remain open. `endToEndProven=false`.

The automatic daily-to-gift transition is staged behind `automaticGift=true` and a complete configured delivery route. It runs only after the daily durable checkpoint and 21 actual official ratings; optional reserve ratings do not delay it. The gift page then uses the guarded automatic publication path. The final real rating handler, restart and failed-checkpoint/no-navigation behavior are covered by the seven-day fixture. W42 retains no automatic flag or delivery configuration in the current release; the staged code is not permission to enable publication.
