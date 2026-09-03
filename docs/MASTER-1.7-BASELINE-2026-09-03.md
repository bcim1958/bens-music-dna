# Master 1.7 factual baseline — 2026-09-03

## Purpose
This is the factual zero measurement for using Master 1.7 as the substrate for search, rich artist worlds, Mood/Theme enrichment and `Verras me!`.

Source workbook:
`Ben_Master_Music_DNA_Database_1.7_Spotify_Gereconcilieerd_2026-08-25.xlsx`

Primary sheet measured: `Playlist`, 3,480 data rows.

## Scale
- Tracks: **3,480**
- Unique exact artist-credit strings: **3,333**
- Unique individual artist names after splitting semicolon-separated credits: **3,558**
- Unique album titles: **3,371**
- Unique artist+album pairs: **3,425**
- Spotify Track URI present: **3,480 / 3,480 (100%)**

Important interpretation: the Master is much closer to a broad artist catalogue than a small set of bands with many tracks each. This makes artist-level rediscovery especially valuable.

## Existing dimensions and completeness
### Strong / immediately usable
- Artist: **100%**
- Album: **100%**
- Spotify track identity: **100%**
- DNA Gebruikt flag: **100%**
- DNA Aantal toepassingen: **100%**
- Release date/year: **3,287 / 3,480 = 94.5%**
- Country of origin: **3,287 / 3,480 = 94.5%**
- DNA region: **3,287 / 3,480 = 94.5%**
- DNA decade: **3,287 / 3,480 = 94.5%**
- Record label: **3,287 / 3,480 = 94.5%**
- AllMusic main genre field present: **3,287 / 3,480 = 94.5%**
- AllMusic main structure field present: **3,287 / 3,480 = 94.5%**
- AllMusic styles field present: **3,253 / 3,480 = 93.5%**
- Spotify Genres present: **2,869 / 3,480 = 82.4%**

### Taxonomy quality nuance
`Classificatiestatus` shows:
- **2,865** rows: `afgeleid volgens AllMusic-taxonomie`
- **4** rows: `rechtstreeks AllMusic`
- **418** rows: `onvoldoende bronmetadata`
- **193** rows: no classification status yet

Therefore a non-empty Genre/Structure cell is not automatically a fully informative classification. `Niet vastgesteld` / `Niet nader vastgesteld` must be treated as missing semantic value when filtering or surprising.

## Current diversity
### AllMusic main genres
- 16 distinct values in the current field.
- Pop/Rock dominates: **2,811** rows.
- `Niet vastgesteld`: **418** rows.

### AllMusic main structures
- 27 distinct values.
- largest: Heavy Metal **1,113**
- Hard Rock **633**
- Punk/New Wave **457**
- Alternative/Indie Rock **309**
- Art-Rock/Experimental **135**
- `Niet vastgesteld` **418**

### Styles
- **108** distinct Style tokens after splitting semicolon-separated values.
- large examples include Heavy Metal, Album Rock, Punk, Hair Metal, Arena Rock, Speed/Thrash Metal, Hard Rock, Glam Rock, Power Metal, Symphonic Metal, Prog-Rock and Progressive Metal.

### Place
- **126** distinct country/origin strings.
- largest represented countries: United States 1,264; United Kingdom 715; Sweden 255; Germany 189; Finland 104; Canada 102; Norway 62; Italy 61; Netherlands 59; Australia 56.

### Time
Current DNA decade distribution among classified rows:
- 1960s: 21
- 1970s: 218
- 1980s: 530
- 1990s: 395
- 2000s: 645
- 2010s: 902
- 2020s: 575
- one 1900s record
- 193 currently without a DNA decade

Year certainty:
- Hoog: **3,152**
- Te controleren: **135**
- Nog te bepalen: **193**

Place certainty:
- Hoog: **3,282**
- Definitief onbekend: **5**
- Nog te bepalen: **193**

## DNA relationship layer
- `DNA Gebruikt = Ja`: **1,407** tracks
- `DNA Gebruikt = Nee`: **2,073** tracks
- DNA Playlist(s) populated: **1,407** tracks
- Current DNA playlist relation set: **48** playlist tokens

This means `Verras me!` can distinguish at least two valuable pools from day one:
1. the whole Master world;
2. the already-used DNA world versus the not-currently-used part of the Master.

## What Master 1.7 can already drive without new enrichment
`Verras me!` can already be grounded in:
- artist;
- album;
- year;
- decade;
- country;
- region;
- AllMusic main genre;
- AllMusic main structure;
- AllMusic Styles where semantically resolved;
- Spotify genre;
- record label;
- DNA-used status;
- DNA playlist relationship;
- number of DNA applications;
- Spotify track identity/link.

These dimensions can also be combined.

## What is not yet available as a reliable Master-wide axis
- Mood
- Theme
- person/member relations
- producer/credit relations
- Similar To / Influenced By / Associated With graph relations
- stable artist-level external identity for every entity
- personal taste rating as a durable Master field (this currently belongs to the personal-memory/runtime layer)

These require enrichment/graph work rather than ad-hoc columns copied into the Playlist sheet.

## Consequence for `Verras me!`
The first implementation does not need to wait for Mood/Theme enrichment.

A meaningful v1 can already support:
- Alles
- Genre / structure / style
- country / region
- year / decade
- DNA relation/status
- optionally label

Mood, Theme, people, credits and similarity can then become richer steering dimensions as the enrichment layer gains reliable coverage.

## Data design rule
A filter or surprise dimension is only exposed when the eligible pool is large enough and the underlying data quality is explicit. Placeholder values such as `Niet vastgesteld` do not count as semantic coverage.

## Next step
Run a stratified enrichment proof across representative artists/albums to determine realistic coverage and source quality for:
- Mood
- Theme
- stable artist identity
- members/people
- credits/producers
- related/influence relations.

Then define the enrichment schema before bulk ingestion.
