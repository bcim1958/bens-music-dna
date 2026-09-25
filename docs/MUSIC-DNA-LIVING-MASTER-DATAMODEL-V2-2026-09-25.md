# Music DNA — Living Master datamodel v2

**Datum:** 25 september 2026  
**Status:** pilot-contract; kandidaat voor bulkfundering na end-to-end gate  
**Vervangt voor nieuwe bouw:** v1 waar v2 specifieker is.

## 1. Architectuur

`encounter → identity → entity → source → claim → evidence → relation → derived insight → projection → shown-history`

De Living Master bewaart kennis en herkomst. Registry/Explorer/Express zijn projecties. Presentatiegegevens mogen nooit teruglekken als bronfeit.

## 2. Entity en identiteit

Elke duurzame entiteit heeft een stabiele `musicDnaId`. Ondersteunde basistypen:
`person | group | work | recording | release-group | release | track-occurrence | genre-style | place | event | label | publication | other`.

External IDs zijn provider-identiteiten en blijven namespaced. Ontbrekende ID = `null/unknown`, nooit “bestaat niet” tenzij dat expliciet is vastgesteld.

Identity resolution:
`exact | probable | ambiguous | unresolved | conflict`.

## 3. ArtistCredit — occurrence, geen artiest

`ArtistCredit` bewaart de letterlijke credit van een bron:
- displayCredit
- parts[]: creditedName, entityId?, joinPhrase, identityStatus
- contextOnly[] voor bijvoorbeeld bandcontext bij een gastmuzikant
- sourceId
- occurrenceId

Een composite credit wordt nooit als pseudo-artiest in de entity graph gezet.

## 4. SourceRecord

Bronnen zijn eerste-klas records met provider, type, locator, publicatie-/observatiedatum, retrieval date, coverage note en availability/version state. Eén bron kan vele claims ondersteunen.

## 5. Claim + Evidence

Een Claim is atomair. Evidence is de expliciete koppeling tussen claim en bron.

Claimstatus:
`verified | derived | unknown | conflict | rejected`.

Evidence:
`supports | contradicts | contextualizes`, plus sourcePath, observedValue, checkedAt, verificationMethod en confidence.

Geen `verified` zonder minimaal één supporting evidence-record.

## 6. ConflictSet

Claims over hetzelfde subject/predicate mogen naast elkaar bestaan. Een `ConflictSet` bewaart:
- candidateClaimIds[]
- resolutionStatus
- resolvedClaimId? 
- resolverNote?
- reviewedAt

Geen last-write-wins. Resolutie wist de alternatieve evidence niet.

## 7. Relation + tijd

Relation is een semantische edge met claimIds. Voor tijdgebonden relaties:
- validFrom
- validTo
- datePrecision
- currentness

Lidmaatschap wordt dus niet canoniek als tijdloze `members[]`-lijst opgeslagen wanneer historie relevant is.

## 8. Muziekobjecten en ProviderOccurrence

De vaste hiërarchie:
`work → recording/version → release-group → release → provider occurrence`.

Een `ProviderOccurrence` bewaart provider-ID, zichtbare titel, artistCredit, zichtbare release, availability en observedAt. Het occurrence-object mag de datum/identiteit van de gekoppelde recording niet overschrijven.

## 9. Persoonlijke Music-DNA-claims

Genre-DNA-membership, Band-DNA, Ontdek-DNA encounter/rating, W-lijst en Flow-DNA zijn eigen claimfamilies. Zij kunnen relaties/projecties voeden, maar worden niet vermengd met externe classificatie.

## 10. DerivedInsight

Elke meter/afleiding bewaart:
- inputClaimIds
- calculationVersion
- value + unit/scale
- comparisonPopulation/cohort
- coverage
- confidence
- asOf
- explanation

Derived output is reproduceerbaar en mag geen grotere precisie presenteren dan methode/dekking toelaten.

## 11. Research state

Onafhankelijke dimensies:
- treatmentStatus
- researchCoverage
- informationRichness
- evidenceConfidence op claimniveau

`unknown != sparse`.

## 12. Projection

Een `Projection` is een leesmodel, geen nieuwe waarheid. Minimale Explorer-projectie:
- entityId
- headline facts
- grouped relations by counterpart
- derived insights/meters
- evidence drill-down references
- research/coverage badges
- candidate story facts

Bundeling van één counterpart verwijdert geen onderliggende relations/claims.

## 13. ShownHistory / novelty

Om Explorer dagelijks en Express wekelijks nieuw te houden:
- presentationUnitId
- subjectId
- insight/relation/claim refs
- surface: explorer | express
- shownAt
- context/week?
- version

Een feit dat al is getoond blijft beschikbaar maar kan deterministisch lager in de unread-queue komen. Nieuwe evidence kan een eerder getoond onderwerp opnieuw relevant maken zonder te doen alsof het nooit is gezien.

## 14. Treatment completion

Terminal:
- treated-verified
- treated-unresolved
- treated-conflict

Niet-terminal:
- not-started
- identity-resolved
- verification-in-progress
- needs-recheck

Master-100%-teller telt terminale entiteiten, niet gevulde velden.

## 15. End-to-end gate

Bulk mag pas starten als een fixture aantoonbaar doorloopt:
1. bronrecord;
2. atomaire claim;
3. supporting evidence;
4. typed relation;
5. derived insight met input claims;
6. Explorer projection die uitsluitend naar bestaande Master-objecten verwijst;
7. shown-history zonder bronlaag te muteren;
8. reverse audit: elk zichtbaar feit/meter terug naar claims/evidence/source.

Voïvod-regel blijft hard: bronloze `confirmed` edges mogen deze gate niet passeren.
