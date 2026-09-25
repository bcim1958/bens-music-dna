# Music DNA — Klus 1 — Living Master datamodel v1

**Datum:** 25 september 2026  
**Status:** ontwerpcontract voor pilot; nog geen bulkpromotie  
**Doel:** het hart van Music DNA vastleggen vóór massale AllMusic-verificatie of Explorer-uitbreiding.

## 1. Hoofdinvariant

De Living Master is de gezaghebbende, provenance-bewuste kennisbasis. Registry, Explorer, Express, meters en andere presentaties zijn projecties of afleidingen daarvan.

Een record is **100% behandeld** wanneer het een expliciete behandelstatus en provenance heeft. Het hoeft niet 100% gevuld te zijn. Informatierijkdom, onderzoeksdekking en betrouwbaarheid zijn verschillende dimensies.

## 2. Kernketen

`encounter → identity → entity → source → atomic claim → evidence/provenance → relation → derived insight → presentation`

Geen stap mag een eerdere laag stilzwijgend overschrijven.

## 3. Eigen identiteit

Iedere duurzame entiteit krijgt een stabiele `musicDnaId`. Namen zijn labels, geen primaire sleutel.

### Entity
Minimaal:
- `musicDnaId`
- `entityType`: artist | person | group | work | recording | release | track | genre-style | place | event | label | publication | other
- `canonicalName`
- `aliases[]`
- `status`: active | historical | unresolved | merged
- `externalIds{}`
- `createdAt`, `updatedAt`

### External identity
Provider-identiteiten worden afzonderlijk opgeslagen:
- Spotify artist/track/release ID
- AllMusic artist ID
- MusicBrainz ID
- later waar nuttig: Discogs, setlist.fm, Metal Archives, WhoSampled, Wikidata e.d.

Een provider-ID bewijst identiteit bij die provider; hij is niet de Music-DNA-identiteit zelf.

### Identity resolution
Status:
- `exact`
- `probable`
- `ambiguous`
- `unresolved`
- `conflict`

Composite credits worden niet automatisch gesplitst. Aliassen worden niet gegokt.

## 4. Bronnen zijn records

Een bron wordt één keer geregistreerd en kan meerdere feiten ondersteunen.

### SourceRecord
- `sourceId`
- `provider`
- `sourceType`: primary | editorial | database | archive | platform | user-curated
- `title`
- `canonicalLocator`
- `publishedAt` indien bekend
- `retrievedAt`
- `language`
- `coverageNote`
- `sourceStatus`: available | changed | unavailable | archived
- `sourceVersion/observedState` waar relevant

Bronpublicatiedatum is nooit automatisch datum van het muzikale object.

## 5. Atomaire feiten

De kleinste bewering die onafhankelijk kan worden bevestigd, gewijzigd of tegengesproken is een `Claim`.

### Claim
- `claimId`
- `subjectId`
- `predicate`
- `objectId` of typed literal
- `claimType`
- `validTime{}` indien tijdgebonden
- `assertionStatus`: verified | derived | unknown | conflict | rejected
- `currentness`: current | historical | unknown
- `createdAt`, `lastReviewedAt`

Voorbeelden:
- Rush — formed-in → Toronto
- Rush — allmusic-style → Prog-Rock
- Shiraz Lane — allmusic-similar-to → Crashdïet
- recording-X — canonical-release-year → 1984

## 6. Evidence en provenance

Bewijs hoort niet als losse URL in het feit maar als expliciete koppeling.

### EvidenceRecord
- `evidenceId`
- `claimId`
- `sourceId`
- `evidenceRole`: supports | contradicts | contextualizes
- `sourcePath`: veld/sectie/pagina indien beschikbaar
- `observedValue`
- `checkedAt`
- `verificationMethod`: direct | imported | mapped | inferred
- `confidence`: high | medium | low
- `note`

**Direct** betekent: de concrete bron heeft de bewering expliciet getoond. Een zoekresultaat, snippet of biografieproza mag een ontbrekend AllMusic Styles-veld niet vervangen.

## 7. Relaties

Een relatie is een semantisch getypeerd feit tussen entiteiten, niet een presentatietegel.

### Relation
- `relationId`
- `fromId`
- `toId`
- `relationFamily`
- `relationType`
- `direction`
- `claimIds[]`
- `status`
- `validTime{}`

AllMusic-relaties blijven exact onderscheiden:
- `similar-to`
- `influenced-by`
- `followed-by`
- `associated-with`
- `member-of/group-member`

Geen van deze typen mag in een ander type worden vertaald om de graph voller te maken.

## 8. AllMusic-profielmodule

AllMusic heeft classificatieprimaat. Per artiest kan de directe profielobservatie bevatten:
- AllMusic ID
- canonical profile name
- artist/person/group type indien blootgelegd
- active period
- born/formed + plaats
- genre
- main structure indien relevant
- **alle** styles
- group members
- Similar To
- Influenced By
- Followed By
- Associated With
- Member Of / groepscontext
- moods/themes indien gestructureerd en betrouwbaar blootgelegd
- relevante discografie/credits als afzonderlijke objecten, niet als één platte artiestregel

Afwezigheid van een veld is geen negatief feit tenzij de bron dat expliciet stelt.

## 9. Tijd en muziekobjecten

Vaste invariant: **dateer het muzikale object, niet de verpakking waarin het gevonden is.**

Objectlagen:
1. work/composition
2. recording/version
3. release/package
4. Spotify/provider occurrence

Een reissue/remaster/compilatie mag de datum of identiteit van een oudere opname niet overschrijven. Live, remake, rerecording en remix zijn aparte versies.

## 10. Persoonlijke Music-DNA-feiten

Persoonlijke feiten blijven afzonderlijke claimfamilies:
- Genre-DNA playlist membership
- Band-DNA membership
- Ontdek-DNA encounter
- rating / RAAK / terugkomen / niet
- weeklijst/aflevering
- Flow-DNA-referentie

AllMusic-classificatie creëert nooit automatisch persoonlijk playlistlidmaatschap en omgekeerd.

## 11. Derived insights en meters

Een derived insight is reproduceerbaar uit bronfeiten maar is zelf geen bronfeit.

### DerivedInsight
- `insightId`
- `subjectId`
- `metricType`
- `value`
- `unit/scale`
- `calculationVersion`
- `inputClaimIds[]`
- `comparisonPopulation`
- `coverage`
- `confidence`
- `asOf`
- `explanation`

Voorbeelden: live-intensiteit, netwerkbreedte, onderzoeksdekking, classificatiebrugwaarde. Een meter mag geen grotere precisie tonen dan brondekking en methode toelaten.

## 12. Dekking, rijkdom en betrouwbaarheid

Drie onafhankelijke assen:
- **researchCoverage**: unresearched | light | developing | well-researched | deep
- **informationRichness**: unknown | sparse | limited | moderate | rich | very-rich
- **evidenceConfidence**: claimniveau, niet als roemscore

Regel: unknown is niet sparse. Een kleine artiest wordt niet gestraft voor minder webmateriaal.

## 13. Behandelstatus / Master 100%

Per entiteit:
- `not-started`
- `identity-resolved`
- `verification-in-progress`
- `treated-verified`
- `treated-unresolved`
- `treated-conflict`
- `needs-recheck`

Alleen `treated-*` telt als afgehandeld voor Master 100%. Daardoor kan de voortgang exact worden gemeten zonder te doen alsof alle records even rijk zijn.

## 14. Niet-destructieve actualisering

Nieuwe bronobservaties:
- wissen oude provenance niet;
- kunnen een claim current/historical maken;
- kunnen conflict openen;
- kunnen derived output opnieuw laten berekenen;
- wijzigen geen onafhankelijke persoonlijke feiten.

Wijzigingen moeten auditbaar blijven via `supersedes`, observatiedatum of equivalent historisch spoor.

## 15. Voïvod-test voor semantische zuiverheid

De bestaande bronloze `confirmed` relaties naar Progressive Metal en Experimental Metal zijn een verplichte provenance-test.

Een relationeel record mag pas `verified` zijn als echte evidence bestaat. Anders moet het:
- naar persoonlijke/derived navigatie worden verplaatst, of
- pending/unresolved blijven.

Er wordt geen bron achteraf verzonnen om een bestaande graph-edge groen te kleuren.

## 16. Pilot vóór bulk

De eerste pilot moet minimaal bevatten:
- Rush — zeer rijk, veel leden/relaties/classificaties;
- Shiraz Lane — compactere maar bruikbare AllMusic-kaart;
- solo-artiest;
- obscure artiest/band;
- naamambiguïteit;
- composite credit;
- band met veel leden/wisselingen;
- incomplete of ontbrekende AllMusic-pagina;
- één recording/reissue/version-probleem.

Pilot slaagt pas als dezelfde structuur al deze gevallen kan opslaan zonder speciale artiest-specifieke schemahack.

## 17. Bulkcontract

Pas na pilot:
- restartbare batches;
- vaste inputset per batch;
- deterministic checkpoint;
- teller behandeld/totaal;
- foutbucket zonder stilzwijgend overslaan;
- iedere batch commitbaar en hervatbaar;
- nieuwe relevante vondsten direct door dezelfde intake.

Work mag later versnellen, maar is geen afhankelijkheid.

## 18. Acceptatiecriteria Klus 1

Klus 1 is inhoudelijk gesloten wanneer:
1. identiteit niet meer van naamstrings afhangt;
2. bron, claim, evidence en relation gescheiden zijn;
3. direct/derived/unknown/conflict niet door elkaar kunnen lopen;
4. tijd/versioning recording/release correct kan modelleren;
5. persoonlijke DNA-feiten losstaan van externe taxonomie;
6. derived meters hun inputs en dekking bewaren;
7. 100%-voortgang op behandelstatus kan worden berekend;
8. Rush én Shiraz Lane zonder schemawijziging passen;
9. Voïvod-evidence debt niet langer als normaal `confirmed` patroon kan worden gekopieerd;
10. bulkverrijking pas na een geslaagde representatieve pilot kan starten.
