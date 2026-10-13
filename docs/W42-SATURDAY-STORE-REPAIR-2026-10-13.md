# Saturday protected-store migration — staged, not released

The Saturday page now opens the same atomic IndexedDB record and lifetime origin lock as daily.html. Candidate and history preflight run before learning/bank hydration. Music data no longer uses legacy localStorage; Spotify refresh credentials retain their existing separate location.

Durable checkpoints precede gift presentation, OAuth redirects, playlist mutation and receipt/FIFO success acknowledgement. A newly created playlist ID is committed before inserting tracks, allowing readback-based resumption. Verified receipt, history/FIFO consumption and museum state are committed together. A history commit failure blocks the page instead of later flushing partial staged consumption. JSON corruption is no longer hidden by a fallback read.

Static and dynamic components have generated integrity pins, checked by the regression runner. The compatibility CSP remains closed: the page does not execute in production until the remaining release gates pass. No W42 delivery configuration or candidate promotion.

27 offline regression programs pass. Browser coverage was extended to exercise the actual Saturday bootstrap against an isolated daily record: same lock, original/current preservation, receipt restart and atomic abort. Its test server removes CSP only for an explicit local synthetic fixture, never for production. Local headless Chrome could not launch under the app sandbox; GitHub browser CI is the validation path. No native-browser result is asserted here before CI completes.

No iPhone or Spotify mutations. Real W42 delivery/readback, device inventory, editorial candidate approval and publication assets remain open. `endToEndProven=false`.
