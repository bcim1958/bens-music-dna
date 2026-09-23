# Ben's Music DNA — Project State

**Last updated: 2026-09-23**  
**Status: GREEN — canonieke stopstaat hersteld; Explorer blijft proefbouw.**

## Actuele canonieke ingang

**Nieuwste vervolg:** [Verhaal gelezen → vertelde vondsten verwerkt](VALIDATION-2026-09-23-STORY-DISCOVERY-READING.md). Registry `2026-09-23.3`: expliciete verhaalcoverage en een gecontroleerde leesstatusoperatie. Het producerverhaal verwerkt twee vondsten; Lordi en Ghost blijven beschikbaar. Audits en defectproeven PASS. De UI en W39 zijn ongewijzigd; zie de aanvulling voor de actuele hervatplek.

Lees de [stopstaat van 22 september 2026](HANDOFF-2026-09-22-STOPSTAAT.md) voor de volledige huidige toestand, bewijsgrenzen, commitreeks en hervatplek. De [fresh-chat handoff](HANDOFF-2026-09-22-FRESH-CHAT.md) is de korte ingang.

- Basis: `2bac01859296b28d9a3904ea5345aa3284bcedb5` plus de geaccepteerde slotbespreking.
- Actuele proefbuild: Engine 30; Relation Registry als kennislaag, gebundelde counterparts, Registry-verhalen, traceability, audit en discovery stock.
- Het herstel omvat één ontbrekende bestaande Maiden-coverrelatie. Structurele audit: 0 errors / 0 warnings; self-test en leesstatusscheiding PASS.
- Bouwstop is in deze herstelopdracht gerespecteerd: geen nieuwe productfunctionaliteit. Volgende fase na groen: **vullen en beproeven, niet opnieuw ontwerpen**.
- W39 van 23 september is al voltooid en blijft buiten deze opdracht. Geen gebruikersopslag of weekroute gewijzigd.
- GREEN geldt voor de vastgelegde en gecontroleerde proeflijn, niet voor productiepromotie of een nieuwe Pages-/iPhone-validatie.

## Historische projectkaart — 15 september 2026

Onderstaande ongewijzigde kaart bewaart de eerdere besluiten en gesloten werk. De toenmalige statuswoorden, weekstatus, focus en “Exact restart point” zijn **historisch** en vervangen de actuele stopstaat hierboven niet. Bestaande principes blijven gelden waar de nieuwe stopstaat ze niet bijwerkt.

Last updated: 2026-09-15 18:55 CEST
Status: ACTIVE DEVELOPMENT — W37 CLOSED / TAXONOMY REPAIR CLOSED / DNA EXPRESS EDITIE NUL IN UITVOERING / INFORMATION NETWORK EXPANDED

## Product north star
**Eerst muziek. Dan jij. Dan de wereld.**
Music remains the main road. Music DNA learns why music fits Ben, where the boundaries move, and uses that knowledge to create discovery, context and a personal music world without closing it into an echo chamber.

## Current product focus — DNA EXPRESS
**DNA EXPRESS** is the canonical publication name. `DNA EXPRESS-MAKER` is a historical working name and remains valid only in historical filenames/commits/documents.

Core publication idea: **Geen muzieknieuws dat jij moet doorzoeken. Jouw muziekwereld, voor jou geredigeerd.**
Line: **The personal music weekly · powered by Music DNA**.
Issue notation: `EDITIE NUL · W37 · 2026`; prospective weekly numbering from `No.001`.

DNA EXPRESS is a weekly digital music magazine with one subscriber: Ben. The editorial desk uses Music DNA, current and historical research, visual-world research, concerts, archives and personal taste signals to make an autonomous complete issue. Ben's normal role is reader/subscriber, not pre-publication editor-in-chief.

## Editorial autonomy — ACCEPTED
Governing decision: `docs/DECISION-2026-09-15-PLAYLIST-FIT-AND-EDITORIAL-AUTONOMY.md`.

Normal weekly flow:
**desk researches → desk selects/decides → issue is built/QA'd → Saturday completed issue is delivered → Ben reads/discovers/reacts → feedback informs later issues.**

Do not routinely ask Ben to approve cover artist, Dieptebom, image choice, article mix or sequencing. Editie NUL is the temporary exception while the editorial desk, visual language and publication machinery are being designed and validated.

Target publication notification: **“Ben, DNA EXPRESS No.xxx ligt voor je klaar.”**

Principle: **The production process repeats. The magazine does not.**

## Weekly Production Protocol v1 — ACTIVE
Governing document: `docs/DNA-EXPRESS-WEEKLY-PRODUCTION-PROTOCOL-V1.md`.

Gates:
0. freeze issue window/cutoff/week/publication state;
1. build evidence pack;
2. build editorial candidate pool;
3. autonomous editorial meeting;
4. source lock;
5. visual-world research;
6. issue score/dramaturgy;
7. build;
8. editorial/source/navigation/device QA;
9. publish completed issue;
10. learn after publication.

If a dependency cannot be verified, do not invent it. Substitute a verified story/visual when editorially sound, omit a nonessential unresolved element, and never claim LIVE before real publication verification.

## Reading model
**De editie is het tijdschrift. Het scherm bepaalt hoe je haar leest.**
- Mac: rich widescreen; no A4-like fixed sheet.
- iPhone: generous one-column reading edition.
- iPad: intermediate model; landscape may support spreads.
- Magazine ritual remains cover → contents → stories → back page, but browsing is deliberately non-linear.
- Chapter jump and exact-position `← TERUG` are functional requirements.
- No permanent website navigation bar/right rail.

## Art direction — ACCEPTED CONCEPT DIRECTION
Canonical direction remains `docs/DECISION-2026-09-14-DNA-EXPRESS-MAKER-ARTDIRECTION-2.0.md`; historical filename does not change the current publication name.

Coffee-table test: would Ben pick it up, turn a page, skip ahead, return and linger?

Permanent character:
- late-1970s NME visual nerve/surprise;
- Melody Maker depth, photography, authority and reading space;
- Music DNA personal intelligence;
- modern 2026 digital execution;
- BRAVO acknowledged as part of Ben's historical magazine DNA without becoming a visual template.

Artist-led model: DNA EXPRESS is the permanent house; the headliner supplies the weekly visual weather; substantial subjects temporarily own their pages through their own visual language.

Core image rule: **Zoek niet eerst naar de artiest. Zoek eerst naar zijn wereld.**
Priority: mythology/world → symbols/objects → places/environment → action/live → portrait.

No substantial artist page without visual identity. No empty pages; visual rest comes from composition. Controlled imperfection is welcome when purposeful. Whole-issue visual dramaturgy precedes page lock.

Editorial restraint: **Geen tekst zonder redactionele functie. Geen versiering die zichzelf moet uitleggen. Vertrouw op het beeld. Een symbool mag een geheim hebben.**

Rights/private-use working boundary remains: **we lenen de beeldtaal; we stelen het beeld niet.** Ben's use is currently private hobby use; if publication becomes public/commercial, perform a new rights review.

## Proof/production state
Proof 1 and Proof 2 are non-canonical visual proofs. Do not repair them as the visible basis; useful technical behavior may be reused.

Active carrier: `dna-express-maker-editie-nul-production.html` (historical filename). It already contains the DNA EXPRESS name, Editie NUL/W37/2026 notation, PRICE: 21 RATINGS, editorial/rubric contents numbering and exact-position return navigation. Most later sections still require the accepted image-led visual execution.

Green Lung / occult-London / Necropolitan is the first successful visual gate and current Editie-NUL visual weather. Build from the accepted world-first direction, not generic band portraits.

## Editie NUL — accepted editorial spine
1. Cover — Green Lung / Necropolitan.
2. Opening + contents.
3–4. Mijn Week.
5–6. Green Lung immersion.
7. Steven Wilson — from *The Overview* scale toward *Requiem For A Village*.
8. Hard & Heavy — current Editie-NUL backbone includes Iron Maiden / *Somewhere in Time* 40.
9. Band/Genre DNA.
10. LIVE!.
11. FLASHBACK — U2 / Dublin / 9 September 1978; working headline **HOE GROOT KAN £50 WORDEN?**
12. DIEPTEBOM only if earned.
13. Ontdek DNA / Edelstenenkabinet.
14. GEZIEN? / Kanttekeningen / Opdracht aan de redactie / back-page closure, arranged for rhythm rather than mechanical screen count.

Arc: **VERLEIDING → ORIËNTATIE → PERSOONLIJK → ONDERDOMPELING → CONTRAST → ENERGIE → HERKENNING → LIVE → TIJDREIS → VERRASSING → BELONING → AFSCHEID.**

## Visual context layer
- `KANTTEKENINGEN`: selective visual footnotes/context.
- `GEZIEN?`: playful visual quiz; never homework/judgement.
- `ACHTER HET BEELD`: optional explanation of selected visual choices.
- Some easter eggs remain unexplained.

## Weekly fixed short editorial layers — ACCEPTED
Decision: `docs/DECISION-2026-09-15-DNA-EXPRESS-WORLD-NEWS-AND-THIS-WEEK-IN-HISTORY.md`.

### NEWS OF THE WORLD
Weekly compact worldwide current-news scan, normally about 6–10 strong items depending on the week. Local/original reporting and primary announcement sources are preferred; syndicated press-release copies are deduplicated. Search outside Ben's established Music DNA is allowed and encouraged when editorially worthwhile.

### DEZE WEEK — DOOR DE JAREN
Weekly compact historical constellation: events in the same calendar week across multiple years. Distinct from FLASHBACK: FLASHBACK reconstructs one historical story deeply; DEZE WEEK moves quickly across dates/decades.

Both are standard evidence-pack sweeps from No.001 onward.

## Snoeptrommel — ACCEPTED ROTATING SHORT RUBRICS
Decision: `docs/DECISION-2026-09-15-DNA-EXPRESS-SNOEPTROMMEL-ROTATING-RUBRICS.md`.

NEWS OF THE WORLD and DEZE WEEK are weekly anchors. Other short rubrics rotate and appear only when the evidence produces something worth publishing. No mechanical quota or fixed rotation calendar.

Reservoir includes birthdays and time-awareness (`JARIG DEZE WEEK`, `HOE LANG AL?`, `RONDE GETALLEN`, `DAT IS OOK AL ... JAAR GELEDEN`), plus `UIT DE BAKKEN`, `VERGETEN?`, `DE VERBINDING`, `ACHTER DE KNOPPEN`, `WIE MAAKTE DIT?`, `EEN NUMMER`, `HET BEELD`, `TOEN ZE HIER WAREN`, `VANDAAR DUS...`, `WIST JE DAT...?`, `TOEN & NU`, `EERSTE KEER`, `LAATSTE KEER`, `VOOR ZE ... WAREN`, `DE MAN/VROUW ACHTER ...`, `DE ZAAL HERINNERT ZICH`, `WAT KOSTTE DAT TOEN?`, `NUMMER 1 — MAAR WAAR?`, `ZELFDE STUDIO, ANDERE WERELD`, `ZELFDE PRODUCER, ANDERE WERELD` and related fact-led forms.

Birthdays/anniversaries are derived from verified dates, never stored as permanently current ages.

Principle: **Grote verhalen geven diepte. Kleine feiten houden de hele muziekwereld in beweging.**

## ONDER CONTRACT / LABEL DNA — ACCEPTED
Decision: `docs/DECISION-2026-09-15-DNA-EXPRESS-ONDER-CONTRACT-LABEL-DNA.md`.

Record labels are first-class entities and potential editorial/discovery networks, not administrative metadata. Explore artist/release ↔ label/imprint/parent ↔ A&R ↔ producer ↔ engineer ↔ studio ↔ mastering ↔ artwork ↔ management/booking ↔ roster/scene.

Possible forms: `ONDER CONTRACT`, `LABELGENOTEN`, `NIEUW OP HET LABEL`, `HET LABEL ACHTER DE PLAAT`, and deeper `LABEL DNA`/DIEPTEBOM.

Critical guardrail: shared label ≠ shared sound or quality. Separate:
1. contractual fact;
2. shared infrastructure;
3. credible contemporary/insider claim;
4. DNA EXPRESS editorial observation;
5. Ben's Music-DNA signal.

Store label relationships at release/era/territory level where possible and distinguish signed/licensed/distributed/reissue relationships.

## Information/source architecture — EXPANDED 15 SEPTEMBER
The architecture is now designed as an international research network rather than a static encyclopedia. Goal: know where to look for current and historical artist information and preserve provenance/date/confidence.

Core rule: **The world supplies the evidence. Ben's Music DNA decides what becomes relevant.**

### International Source Network 1.0
`docs/DNA-EXPRESS-INTERNATIONAL-SOURCE-NETWORK-1.0-2026-09-15.md`.
Weekly core radar spans Dutch/NL, UK, Sweden, Finland, Norway, Denmark, Germany and international prog/specialist sources; Tier B/Tier C add France, Italy, Spain, Australia, Japan, North America and story-triggered local/archive routes.

Scandinavia is a high-priority local-language discovery cluster. Language is not a relevance filter; summarize foreign-language reporting in Dutch but do not silently turn machine-translated nuance into verified quotation.

### Americas Source Expansion 1.1
`docs/DNA-EXPRESS-AMERICAS-SOURCE-EXPANSION-1.1-2026-09-15.md`.
Treat the Americas as multiple local scenes, not one English-language US market. Local-first routes cover US, Canada/Quebec, Mexico, Brazil, Chile, Argentina and wider Latin America, with official/venue/promoter/local culture routes where fixed media coverage remains weaker.

### Gap Closure 1.2
Priority gaps strengthened with active/local routes for Mexico, Peru, Chile, Argentina, Poland and Czech/Central Europe. Colombia remains deliberately dynamic rather than promoted to a weak fixed core. Historical FLASHBACK source ladder now prioritizes actual period issues before later retrospectives.

### Visual-World Source Network 1.3
Creator/archive layer includes professional music-photo archives, creator archives, museum collections, poster archives, studio/location history and stage/lighting records. Research order:
**band world → sleeve/booklet credits → designer/illustrator/photographer → creator archive → museum/image archive → studio/location → stage/poster world → conventional portrait only if useful.**

### Creator Network + Magazine Index 1.4
`docs/DNA-EXPRESS-CREATOR-NETWORK-AND-MAGAZINE-INDEX-1.4-2026-09-15.md`.
Maps creator relationships for priority artist worlds including Iron Maiden/Derek Riggs, Ghost, Judas Priest/Mark Wilkinson, Genesis/Hipgnosis/Colin Elgie, KISS and Metal Church. Ben's Wikipedia music-magazine list is a discovery index only; candidates require independent status/quality/access verification before promotion.

### Artist Information Network 1.5
Artist research is an ecosystem:
**artist ↔ members ↔ releases ↔ labels ↔ management ↔ booking agent ↔ promoter ↔ venues/festivals ↔ producer/studio ↔ designers/photographers ↔ radio/podcast/video ↔ journalism/archives ↔ related artists.**

Platenlabels and management are first-class data. Management is separate from booking/agent/promoter and must carry period/verified-as-of information. Venue/festival archives in Netherlands and neighbouring countries are active historical/current research routes, including local Zeeland routes where relevant.

Media coverage now deliberately spans written press, fanzines/underground press, radio/sessions, podcasts/long-form audio, video journalism/interviews, TV/documentaries, music-industry trade press, instrument/technical press, physical/digital archives, collector/fan material as leads, labels, management, promoters, venues and festivals.

## Source quality / evidence model
For important claims: **search → find source close to the fact → date it → independently confirm where needed → use it.**

Current claims prefer official artist/label/management/venue/promoter sources for hard announcements plus original/local specialist journalism for interpretation. Historical claims prefer contemporaneous press, venue/festival/label/artist archives, radio/audio, magazine/fanzine archives, libraries/museums and only then later retrospectives.

Preserve uncertainty and disagreement instead of flattening conflicting historical accounts.

Source-use dimensions may be recorded separately: relevance, proximity, authority, freshness and depth. Do not turn a summed score into “truth”.

## Knowledge-graph direction
Relationships should support facts such as:
- `ARTIST_SIGNED_TO_LABEL`
- `ARTIST_MANAGED_BY`
- `ARTIST_BOOKED_BY`
- `ARTIST_PLAYED_VENUE`
- `ARTIST_RECORDED_AT`
- `RELEASE_PRODUCED_BY`
- `RELEASE_ARTWORK_BY`
- `TOUR_PROMOTED_BY`
- `ARTIST_INTERVIEWED_IN`

Store period, territory/date precision where relevant, source, confidence and verified-as-of. This supports journalism, historical reconstruction and discovery.

## Recurring editorial source worlds
**Band DNA:** each 30-name playlist is the namegiver plus 29 surrounding artists. Investigate musical, personnel, producer, label, management, touring, geographic, historical, visual and statistical relationships. Weak/no relationships are valid findings. Exact existing Band-DNA visual identities must be recovered/reused, not invented.

**Genre DNA:** renewable source for clusters, borders, period/country bias, characteristics and contrasts between band kinship and genre kinship.

**Van de MASTER …:** flexible personal facts/patterns from the Master, integrated where editorially useful.

## Character rubrics
**LIVE!** = human/physical/immediate; photography, stage light, movement, crowd and anticipation. Local/personal shows have equal editorial dignity when relevant.

**FLASHBACK** = time machine, not nostalgia list. Start from the actual corresponding historical press week, reconstruct what was knowable then, then add hindsight. Core twist: **ze wisten nog niet wat wij nu weten.**

**DIEPTEBOM** = optional editor's privilege for an unusually compelling connection/discovery. If nothing earns it, no Dieptebom.

## Edelstenenkabinet / Ontdek DNA
Ontdek DNA is the weekly musical harvest/reward near the end; Mijn Week is the personal learning layer.

The Edelstenenkabinet is the visual treasury across Spotify, Ontdek DNA, DNA EXPRESS, Mijn Muziekwereld and Annual. Each week gets one gemstone visual identity, shared with its Spotify playlist where possible.

W36 first jewel/prototype: **Granaat**. W37 exact stone/week visual remains unresolved and must be recovered rather than invented.

Future Annual concept: 52 weekly gemstone visuals form the corona around a total solar eclipse — 52 weeks, one music year.

## Playlist fit learning — ACTIVE
Decision: `docs/DECISION-2026-09-15-PLAYLIST-FIT-AND-EDITORIAL-AUTONOMY.md`.

Ben spontaneously judged completed W36 clearly more enjoyable as a whole than W37. This does not reopen either closed week. Distinguish:
- **track fit** — value of an individual track;
- **playlist fit** — how strongly the completed 21-track week works as a whole and invites replay.

Possible playlist-fit dimensions: variety/clustering, energy contour, contrast/pacing, melodic density, anchor/adventure ratio, sequencing and avoidance of long merely-solid lanes.

Do not optimize toward 21 guaranteed RAAK tracks; discovery requires uncertainty.

## Source of truth — music data
Master remains primary content substrate. Definitive safe physical Master:
`Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx`.

Broad taxonomy repair is **GESLOTEN**. Do not reopen without a concrete functional blocker. `data/artist-registry-v1.json` remains experimental.

## Architecture
1. Master music database
2. Entity registry
3. Semantic enrichment
4. Knowledge graph
5. Living/current layer
6. Personal memory
7. Generated app-serving layer
8. Presentation/publication layer

See `docs/ENRICHMENT-SCHEMA-V1-2026-09-03.md`.

## Daily UX / ratings
Daily discoveries adapt between 3 and 4 positions through the accepted positive-reserve model. Positions 1–3 are official and count for Muziekmeter; position 4 is reserve-only. Visible ratings: **RAAK / GOED / NOG EENS / NEE**. `NOG EENS` remains unresolved until the Second Chance lifecycle is finalized.

## Mijn Muziekwereld
Two equal destinations:
1. **Edelstenenkabinet — BEWAREN**
2. **Muziekportaal — ONTDEKKEN**

Core rule: **Music DNA builds no generic decor around an artist. The identity, history and real musical relationships of the artist determine how that artist world manifests.**

## Music Master
Gastheer, conservator and ceremoniemeester; distinguished, mysterious and inviting; never more important than the music and never dictates taste. In DNA EXPRESS the Music Master may act as editor/curator; DIEPTEBOM FIRE folklore is occasional, not dominant.

## Artist World 1.0
Governing decision: `docs/DECISION-2026-09-11-ARTIST-WORLD-1.0-DEVELOPMENT-PRINCIPLES.md`.
First vertical proof remains **H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**. Accepted but temporarily parked while DNA EXPRESS/Editie NUL is active focus.

## Editorial learning period — ACTIVE
September–December 2026 is the editorial learning period. Each issue remains a full product. Post-issue feedback may tune browsing/visual/story/surprise preference without turning reading into homework. First Redactierapport: January 2027.

## Muziekmeter / Ontdek-DNA
Official weekly observation set = 21 ratings: seven days × three official positions. Position 4 may feed reserve but never official Muziekmeter.

Weekly Ontdek DNA = exactly 21 tracks: current-week positive official tracks first, then unused FIFO positive reserve to 21. Used reserve tracks are consumed permanently. First meaningful formal conclusions begin January 2027; deeper trend analysis quarterly thereafter.

## Week status
**W36 — GESLOTEN:** 21/21, Spotify verified, first jewel Granaat. Do not reopen.

**W37 — GESLOTEN:** 6–12 September 2026, all 21 ratings preserved, Spotify playlist restored to agreed 21 and visually verified. Do not reopen.

**W38 — OPEN / IN UITVOERING:** adaptive 3/4 daily model + positive reserve. Candidate/config and Saturday-path implementation exist; structural Saturday validation passed. Live Saturday delivery remains pending. Do not claim live before verification.

## Playlist restoration
Genre DNA: UK Punk #01/#02 30/30 Spotify-closed. Alternative Metal DNA 2.0 fixed Top 30 awaits safe Spotify final verification. Canterbury Scene remains **ONDER VOORBEHOUD**.
Band DNA: controlled restoration/listening pass closed; 19 current Band-DNA playlists have descriptions/covers.

## W.A.S.P. / Randy Piper
Local Files material and three controlled 10/10 local playlists closed. Do not reopen ripping.

## Spotify folder hierarchy — fixed
- `♦ DNA`
- `✧ Band DNA`
- `Genre DNA`
- `💎 Ontdek DNA`

## Playlist/importer rules
Spotify is operational final control. Never guess URI. 30/30 means 30 checked tracks. Weekly Ontdek DNA means 21/21 before closure. Closed playlists are not silently reopened. Technical/import failure ≠ content completion. Spotify availability requires direct identity/playability; strong duration mismatch triggers review.

## Governance
Material decision changes name the existing decision, explain why, receive Ben's acceptance, get a dated GitHub decision and record supersession. Status words remain strict: **GESLOTEN / OPEN / IN UITVOERING / ONDER VOORBEHOUD / HISTORISCH / VALIDATED / ACCEPTED CONCEPT DIRECTION / RELEASED / LIVE**.

## Open risks / unresolved locks
### Editie NUL — immediate
1. Full image-led visual execution is incomplete.
2. U2 / Dublin / 9 Sep 1978 / £50 story requires strong source verification before publication.
3. Current GEZIEN? must not imply an unverified Green Lung / Necropolis Railway artwork connection; use only grounded clues.
4. Exact W37 gemstone/week visual must be recovered; do not invent.
5. Exact existing Band-DNA visual identities must be recovered; do not invent.
6. Device QA on Mac/iPhone/iPad only after meaningful visual integration.

### Product/technical
1. Rating persistence/localStorage migration.
2. Safari vs installed home-screen storage context.
3. Durable iOS launch/cache/version routing.
4. Export/import contract.
5. Gift-history vs Spotify delivery verification.
6. Stable artist identity before broad enrichment.
7. Rights/licensing/source policy if use becomes public/commercial.
8. Mood/Theme scope.
9. Generated app-serving duplication prevention.
10. Living/current source + date.
11. Durable personal state beyond local browser.
12. Spotify one-tap/autoplay.
13. Alternative Metal DNA 2.0 final Spotify verification.
14. Controlled Master synchronization where needed.
15. Exact Second Chance lifecycle.
16. Structural Spotify side-door availability.
17. Grounded artist-world visuals.
18. Phone-first progressive disclosure.

## Exact restart point — DNA EXPRESS Editie NUL
**Resume actual production build now; do not add another large conceptual layer first.**

Start from commit `fd51cf130c524ff6a3d956a3f9f1726117f82acc` and the accepted Green Lung cover/contents visual direction. Integrate canonical copy into the active `dna-express-maker-editie-nul-production.html` carrier (historical filename), refine the cover/contents architecture toward the accepted image-led balance, then build the second deliberately different visual world. Continue issue-wide visual dramaturgy before asking Ben for the next Mac coffee-table test.

In parallel, resolve the four critical evidence/asset questions: U2 £50 source, safe GEZIEN? clue, W37 gemstone identity, existing Band-DNA visual identities.

After the visual gate passes: translate deliberately to iPhone/iPad, complete source/navigation/device QA, and only then claim Editie NUL publication readiness.

## Current health checkpoint
The 2026-09-14 end-of-day GREEN checkpoint remains historical evidence for the prior state. This 2026-09-15 consolidation supersedes it as the central current map while preserving all closed-work protections.
