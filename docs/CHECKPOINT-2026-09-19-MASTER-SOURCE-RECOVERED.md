# Music DNA — master source recovered

Date: 2026-09-19
Status: SOURCE FOUND / W40 NOT YET READY

The current usable master has been recovered from the user's persistent file library:

**Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx**

This is newer than the earlier 2026-09-04 v2 reference in the repository metadata.

Verified structure includes:
- Playlist master sheet with the full track/metadata layer;
- exact Spotify Track URI field;
- artist, track, album and release information;
- country/region layer;
- AllMusic main genre, main structure and styles;
- DNA usage and DNA playlist relations;
- Spotify reconciliation/snapshot sheets;
- taxonomy repair layer.

The README reports the reconciled Spotify baseline of 48 DNA playlists / 1,440 positions and 1,407 unique current DNA tracks. The master retains the wider source population as well.

## Production rule
This recovered workbook is the authoritative source layer to reconnect. Do not rebuild the master and do not substitute the small repository proof payload.

## Important distinction for W40
The master contains Ben's known Music-DNA universe. A track being present in the master does **not automatically make that exact track a valid new Ontdek-DNA discovery**. The W40 generator may use the master for artist/taxonomy/taste/source knowledge, but must still prevent already-known/used tracks from masquerading as new discoveries.

Therefore:
1. reconnect master metadata first;
2. derive/validate discovery candidates against history;
3. require exact Spotify identity;
4. only then build the >=63 candidate W40 pool and run the 63/63 stress gate.

No W40 ready flag is set by this checkpoint.
