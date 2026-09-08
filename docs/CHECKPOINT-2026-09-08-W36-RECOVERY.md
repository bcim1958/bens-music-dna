# Ben's Music DNA — Checkpoint 2026-09-08 — W36 recovery

Status: RECOVERY CHECKPOINT — W36 CLOSED

## Scope
This checkpoint consolidates the W36 recovery and delivery work completed on 2026-09-08 so that continuation does not depend on chat reconstruction or loose commits.

## Accepted W36 outcome
W36 is now **GESLOTEN**.

Verified chain:
1. 21/21 W36 ratings were preserved in the installed iPhone app storage.
2. 10 positive W36 tracks were found.
3. The safety guard remained active; nothing was forced through an incomplete positive bank.
4. 11 previously verified positive W35 reserve tracks were restored into the same app storage context.
5. The W36 gift was assembled as exactly 21 tracks: 10 current-week positives + 11 verified W35 reserve tracks.
6. The gift was committed to the positive-playlist history through the existing `commitSaturdayPlaylist` path.
7. The export was made compatible with Ben's Spotify DNA Importer v4 by using the supported CSV header `Spotify Track URI`.
8. Importer v4 verified: **21 unique exact Spotify tracks found; file checked**.
9. Spotify playlist was actually created and visually verified at 21/21 tracks.
10. Playlist was moved to the correct Spotify route and renamed:
   `♦️ DNA → 💎 Ontdek DNA → Ben's Ontdek DNA #2026-36`.

This W36 playlist must not be silently reopened or changed. A later uniform weekly cover may be added as a cosmetic system-wide design step; that does not reopen musical content.

## Active recovery / launch route
The installed iPhone home-screen web app proved to retain its own localStorage context and to cache/start from older routes independently of Safari.

Safe recovery architecture used:
- `test/daily.html` functions as a same-storage bridge;
- bridge currently routes to `test/daily-w36-repair-7.html`;
- `daily-w36-repair-6.html` was also converted into a bridge to build 7 because iOS could still reopen that cached page directly;
- **Herstelbuild 7** is the definitive W36 recovery/finalization build.

Important finding:
- Safari and the installed home-screen app did **not** expose the same W36 localStorage state in this test: Safari showed 0 ratings while the installed app showed 21/21.
- Therefore deleting/reinstalling the installed app or assuming browser/app storage equivalence is unsafe until a deliberate persistence/migration design exists.

## W35 reserve recovery
The positive W35 reserve used for the W36 repair was limited to previously verified positive tracks with exact Spotify identities. The reserve was not used to overwrite or alter W36 ratings.

The recovered 11 were:
- Elder — Catastasis
- Green Lung — Maxine (Witch Queen)
- Nestor — On the Run
- Amyl and the Sniffers — Hertz
- The Chats — 6L GTR
- Airbourne — Breakin' Outta Hell
- Grade 2 — Under the Streetlight
- Unto Others — Butterfly
- King Buffalo — Mammoth
- White Reaper — Might Be Right
- Drab Majesty — Ellipsis

## Spotify importer v4 compatibility
The first W36 CSV export used the header `spotify_uri`, which importer v4 rejected with:
`Geen kolom met een Spotify Track URI of Spotify-tracklink gevonden.`

The export was corrected to the importer-supported exact field name:
`Spotify Track URI`

No track IDs, ratings, order, or musical content were changed by this fix.

Latest relevant visible code commit before this checkpoint:
`f6cbdec8c42c8442934290c2002215990a611d40` — **Make W36 gift CSV compatible with Spotify importer v4**.

## Open technical risks exposed by W36
1. **Installed-app localStorage persistence / migration** remains a hard risk.
2. **Safari vs installed web-app storage-context differences** must not be assumed away.
3. **iOS home-screen launch/cache behavior** can keep older entry pages alive even after GitHub updates.
4. **Bridge/version routing** needs a durable general solution; today's bridge is a controlled repair mechanism, not yet the final product architecture.
5. **Export/import contract** must be versioned and tested so generated CSV headers always match importer v4 requirements.
6. **Gift-history commit and Spotify delivery** must remain separate verifiable states; local completion alone is not Spotify closure.

## W37 — current truth
W37 is **OPEN / IN UITVOERING** and was not safely released by the Saturday transition.

Known state before further work:
- `test/music-dna-weeks-v1.js` previously showed W36 `ready:true` and W37 `ready:false`;
- the W37 candidate file was not yet safely present/validated in the known production state;
- therefore W37 must **not** be made ready by merely flipping a flag.

Required W37 chain:
1. inspect current week resolver/config and exact live files;
2. build or verify 21 W37 candidates;
3. verify exact Spotify identities/deliverability;
4. validate daily flow and Saturday-transition logic;
5. only then set W37 ready;
6. verify on the installed iPhone without damaging W36 history or ratings.

## Exact next step
**Audit W37 readiness before any further substantial app/enrichment work.**

Specifically: inspect the current `music-dna-weeks-v1.js`, candidate-file presence/content and resolver behavior, then establish exactly what W37 lacks. Do not change W36.

## Governance reminder
A chat is a workbench, never the archive. This checkpoint supersedes chat-only reconstruction for the W36 recovery outcome and becomes the current dated transfer point for this part of the project.
