# Validation — W38 Saturday path

Date: 2026-09-13
Status: STRUCTURAL VALIDATION PASSED / LIVE SATURDAY DELIVERY PENDING

## Scope
Pre-Saturday validation of the fixed 21-track Ontdek DNA delivery model introduced for W38.

## Governing rules checked
- Saturday target size is exactly 21.
- Current-week RAAK/GOED is selected first.
- Remaining places are filled from the positive reserve.
- Reserve ordering is FIFO: oldest first.
- Tracks already delivered in an earlier weekly playlist are blocked.
- A delivery is committed to history only when it is exactly 21 tracks.
- Existing Spotify playlist content can be replaced/repaired to the exact 21 expected URIs.
- Spotify playlist name is `Ontdek DNA #YYYY-WW`.
- The positive reserve counter excludes current-week official positions 1–3 and includes positive reserve-slot-4 observations.

## Scenario matrix
For a full Saturday delivery the arithmetic is deterministic:
- 8 positive current-week tracks → 13 FIFO reserve tracks required → 21 total.
- 12 positive current-week tracks → 9 FIFO reserve tracks required → 21 total.
- 17 positive current-week tracks → 4 FIFO reserve tracks required → 21 total.
- 21 positive current-week tracks → 0 reserve tracks required → 21 total.

If the available safe, unused positive reserve is smaller than the required supplement, the result cannot be marked full/closed. Music DNA must remain in a safe incomplete state rather than reuse an old weekly track or invent a positive judgment.

## Duplicate and consumption behavior
`buildSaturdayPlaylist()` excludes tracks delivered before the target week and takes unused reserve in `firstPositiveAt` order. `commitSaturdayPlaylist()` only writes weekly delivery history for a full 21-track result. Subsequent inventory then treats those tracks as used. This provides the required no-repeat/FIFO behavior.

## Spotify route
The W38 Saturday bridge:
- derives the fixed name `Ontdek DNA #2026-38`;
- recognizes completion only when stored delivery IDs match the current 21-track gift;
- can repair an existing partial/wrong playlist by replacing its items with the exact expected 21 URIs;
- returns through the current Saturday bridge after authorization;
- does not treat a partial playlist as final delivery.

## Live proof still required
The final operational proof remains the real Saturday run on the installed iPhone plus visual verification in Spotify that `Ontdek DNA #2026-38` contains exactly the expected 21 tracks. Until that happens W38 is not GESLOTEN.

## Result
The Saturday path is structurally ready for W38. Daily reserve collection remains active during the week. The remaining uncertainty is not the routing logic but whether the week's actual positive yield plus accumulated reserve is numerically sufficient on Saturday; the adaptive fourth slot exists specifically to improve that reserve continuously.
