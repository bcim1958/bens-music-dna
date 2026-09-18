# Music DNA — Visual & World Architecture 1.0

Date: 2026-09-18
Status: CANONICAL DESIGN BASELINE — reconstruction before production restyle

## Why this document exists
Music DNA now has a release-candidate engine and an older, richer visual/product design lineage. The next production pass must combine those two without redesigning accepted ideas from memory.

This baseline therefore separates:
1. verified earlier repository decisions;
2. re-established product decisions from the current design discussion;
3. still-open visual artwork that must be designed and accepted.

## 1. Core spatial model

### Front door — Ontdek-DNA
Ontdek-DNA is the calm daily listening and assessment entrance:
**open → discover/listen → understand enough context → rate → continue.**

The front door is intentionally simple. It must not become a dashboard for every Music DNA function.

### Beyond the front door — Mijn Muziekwereld
After the task-oriented daily layer comes the voluntary exploration layer: the place to stay, wander and enjoy music.

This world can eventually contain Artist World, Music Portal, DNA-LAB, Specials, DNA Express doors and other grounded music routes. The phone-first surface remains calm; depth appears when curiosity asks for it.

### A special destination — Het Edelstenenkabinet
The Edelstenenkabinet is the permanent museum/archive for weekly Ontdek-DNA gifts.

It is not a list of individual favourite tracks and an individual RAAK track is not itself an Edelsteen.

## 2. Weekly gift = one collectible object
Binding product meaning:

> **One completed Ontdek-DNA week becomes one Edelsteen.**

The Saturday gift has two inseparable parts:
- **the music:** the fixed 21-track positive Ontdek-DNA weekly playlist in its deliberate listening order;
- **the gemstone:** a beautiful image/visual plus a concise, engaging story about that week's real gemstone.

The gift is therefore not merely a Spotify playlist with decorative cover art.

After unwrapping, the complete object is placed in the Edelstenenkabinet. The gemstone is the cabinet entry point. Selecting it opens:
**DE STEEN → HET VERHAAL → DE MUZIEK**,
including access to the corresponding Spotify playlist.

## 3. Annual colour journey
Each weekly Edelsteen participates in a deliberate year-long colour progression.

The gemstones are chosen/sequenced so their natural visual colours build a colourful annual collection. The same identity should be recognisable in:
- the weekly Saturday reveal;
- the gemstone in the cabinet;
- the Ontdek-DNA playlist cover in Spotify;
- the corresponding DNA Express treatment.

At year end the Ontdek-DNA Spotify folder and the cabinet should read as a completed colourful annual collection — a visual music-year rather than an administrative row of week numbers.

The exact annual gemstone/calendar palette must live in a separate controlled data/design map; do not improvise weekly colours in UI code.

## 4. App small; DNA Express rich
The same weekly object has different editorial scale in different places.

### Music DNA app
Small, magical, immediately understandable:
- reveal the gemstone;
- show its name and a concise story;
- show/open the 21-track playlist;
- place it visibly in the cabinet;
- allow later revisiting.

### DNA Express
Rich, large and immersive:
- a dedicated weekly Edelsteen page;
- large gemstone visual;
- richer gemstone story and design;
- the musical week/playlist;
- selected musical discoveries where editorially worthwhile;
- a natural listening route to Spotify.

At year end, the complete Edelstenenkabinet becomes a natural DNA Express annual feature: the year's gemstones, colour journey and musical harvest together.

Product shorthand:
> **Music DNA collects. The Edelstenenkabinet preserves. DNA Express tells the story.**

## 5. Recovered cinematic visual grammar
The preserved visual-source register and cinematic prototypes establish these durable qualities:
- predominantly dark/black environment;
- warm gold/orange light, particles, depth and glow;
- cinematic rather than generic app graphics;
- discovery feels like entering/opening a musical universe;
- movement is brief and meaningful, never permanent decoration;
- music remains primary;
- surface calm, depth on demand;
- the user may wander deeply but must never become lost.

The accepted Artist World rule remains useful across the world:
> **WERKEN → BEGRIJPELIJK → MOOI → SFEERVOL → LEVENDIG**

## 6. Four reaction symbols
The old generic emoji/platform icons are historical and are not the intended final interface.

Semantics remain:
- **RAAK** — strongest positive reaction;
- **GOED** — positive reaction;
- **TERUGKOMEN** — genuine second chance/later reassessment, not a lower score;
- **NIET** — clear negative reaction.

Recovered visual direction from the cinematic exploration:
- RAAK: warm/gold; impact, spark, emotional hit;
- GOED: cool blue; positive, calmer than RAAK;
- TERUGKOMEN: violet/purple; return/loop/second chance;
- NIET: red; clear stop/rejection.

All four must:
- be immediately distinguishable;
- be emotionally legible;
- feel bespoke to Music DNA;
- belong to one coherent cinematic object language;
- work at phone-button and small status-badge scale.

### Important open item
The exact bespoke artwork/symbol shapes are **not yet accepted**. Earlier prototypes (✦ / ◆ / ↻ / — and earlier emoji families) are design evidence, not final assets. The next visual proof must propose one coherent final family for explicit acceptance before production replacement.

## 7. Transition from task to fun
Daily completion must not feel like a dead end.

On ordinary days, completion may quietly reveal a doorway into Mijn Muziekwereld without making exploration mandatory.

On Saturday, the transition becomes a signature Music DNA moment:
**21 official ratings complete → weekly positive gift assembled → gift unwrapped → gemstone + story + playlist revealed → gemstone enters the cabinet.**

This is the natural bridge from the functional front door to the richer Music DNA world.

## 8. Relationship to Spotify
Spotify remains the listening/delivery environment for the weekly playlist.

The Edelstenenkabinet is not a competing playlist store. It is the Music DNA memory and storytelling layer around the same weekly musical object.

The Spotify Ontdek-DNA folder should visually echo the annual gemstone colour journey through its playlist covers.

## 9. Relationship to the existing 1.0 engine
The visual rebuild is a shell/presentation change around the current release-candidate semantics.

It must not change:
- three official daily positions;
- official 21-rating Muziekmeter semantics;
- reserve separation;
- rating storage keys/history;
- fixed-21 positive Saturday gift;
- Smart Flow ordering;
- exact Spotify identity/delivery safety;
- week resolver/transition safeguards.

Before the live W38 Saturday and W39 rollover proof, production logic should remain frozen except for release-critical fixes.

## 10. Next visual production proof
Do not restyle production blindly.

Build one isolated phone-first visual proof using the current cinematic grammar and real daily information hierarchy, containing:
1. Music DNA identity/header;
2. one current discovery;
3. Spotify listening action;
4. compact “Waarom voor jou?” context;
5. the four newly designed bespoke reaction objects;
6. a visible but quiet route back/forward;
7. a subtle hint that Mijn Muziekwereld exists beyond the daily task.

This proof reads no ratings and writes no production state.

Only after the four-symbol family and overall front-door atmosphere are accepted should the styling be transplanted onto the proven production `daily.html`.

## 11. Source lineage consulted
- `docs/MUSIC-DNA-VISUAL-SOURCE-REGISTER.md` (introduced in commit bcf4aefe9; filename as recorded by that commit)
- `test/daily-cinematic-v1.html` (commit 9cdfe9394)
- approved cinematic opening/source lineage recorded in the visual-source register
- `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`
- `docs/DECISION-2026-09-18-DNA-LAB-AND-METAPHOR-BANK.md`
- current Music DNA 1.0 release-gate audit and production path

## Change-control rule
Do not silently replace established visual/product meaning with a newly improvised metaphor. If the new proof conflicts with this baseline, surface the conflict and decide it explicitly before production implementation.
