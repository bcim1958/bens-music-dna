# Living Master — representative pilot v2

**Datum:** 25 september 2026  
**Doel:** laatste pre-bulk gate: representatieve echte en structurele cases door hetzelfde v2-model zonder schemawijziging.

## Pilotmatrix

| Case | Risico dat wordt getest | v2-constructie | Resultaat |
|---|---|---|---|
| Rush | zeer rijke artiestwereld | Entity + Source + Claim + Evidence + Relation + DerivedInsight + Projection | PASS |
| Shiraz Lane | compactere maar volledig behandelbare artiestwereld | dezelfde kernstructuur; richness los van completion | PASS |
| Alice Cooper | solo/persoon versus bandcontext | typed Entity + ExternalIdentity + Relation + tijd/context | PASS |
| Holy Ghost-credit | composite performer credit | ArtistCredit + parts/contextOnly + ProviderOccurrence | PASS |
| naamgenoot fixture | dezelfde zichtbare naam, verschillende identiteit | identityResolution=ambiguous; geen name-key dedupe | PASS |
| veel bezettingswisselingen | historische membership | temporal Relation + validFrom/validTo/datePrecision | PASS |
| incomplete/ontbrekende AllMusic-data | afwezig veld/profiel | treated-unresolved/unknown; geen negatief feit uit afwezigheid | PASS |
| reissue/remaster fixture | verpakking versus muziekobject | recording → release → ProviderOccurrence | PASS |
| bronconflict fixture | twee waarden met bewijs | ConflictSet; geen last-write-wins | PASS |
| Voïvod legacy evidence debt | bronloze confirmed relation | nieuwe verified gate weigert zonder supporting evidence | PASS als blokkade |

## Uitkomst

De representatieve pilot vereist **geen nieuwe schemafamilie** boven Living Master v2. De moeilijke gevallen worden opgelost door reeds vastgelegde generieke constructies:
- eigen Music-DNA-identiteit;
- provider IDs als externe identiteit;
- ArtistCredit;
- SourceRecord;
- atomair Claim;
- Evidence;
- ConflictSet;
- typed/temporal Relation;
- work/recording/release/provider occurrence;
- DerivedInsight;
- Projection;
- ShownHistory.

Daarmee is de architectuur niet afhankelijk van artiest-specifieke uitzonderingen.

## Wat nog géén pilotclaim is

Deze gate zegt niet dat alle externe IDs of alle historische feiten van de genoemde artiesten al zijn gevuld. Hij bewijst het **model en de behandelroute**. De echte Master-100%-migratie blijft verantwoordelijk voor directe verificatie, terminale behandelstatus en foutbucket per record.

## Klus 1 — acceptatie

De tien acceptatiecriteria uit Living Master datamodel v1/v2 zijn afgedekt:
1. namen zijn geen identity keys;
2. bron/claim/evidence/relation zijn gescheiden;
3. direct/derived/unknown/conflict zijn expliciet;
4. recording/release/version zijn gescheiden;
5. persoonlijke DNA-feiten staan los van externe taxonomie;
6. meters bewaren inputs, dekking en peildatum;
7. 100%-voortgang gebruikt terminale behandelstatus;
8. rijk en compact passen zonder schemawissel;
9. bronloze confirmed relations passeren de nieuwe gate niet;
10. bulk volgt pas na deze representatieve pilot.

**Klus 1 status: GREEN / CLOSED.**

Volgende bouwfase: **Klus 2 — Master 100% migratie-engine en Batch 001**. Eerst batchmechaniek, teller/foutbucket/checkpoint; daarna pas echte schaalvergroting.
