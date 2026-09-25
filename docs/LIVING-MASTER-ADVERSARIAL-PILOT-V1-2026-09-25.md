# Living Master — adversarial pilot v1

**Datum:** 25 september 2026  
**Doel:** het v1-model bewust belasten met gevallen die naam-gebaseerde of platte muziekdatabases stukmaken.

## Cases

1. **Solo versus bandnaam — Alice Cooper**
   - Eén zichtbare naam kan naar een persoon/solo-entiteit én historische bandcontext verwijzen.
   - Regel: geen automatische merge op display name. Entity type + provider-ID + tijd/context bepalen identiteit.
   - Een relatie naar Vincent Furnier/Alice Cooper als persoon mag niet automatisch aan de historische Alice Cooper-band worden gehangen.

2. **Naamgenoot / ambiguïteit**
   - Twee providers of twee records met dezelfde naam blijven afzonderlijke candidate identities totdat voldoende evidence bestaat.
   - Status `ambiguous` blokkeert automatische promotie naar verified.
   - Een naamstring is nooit dedupe-key.

3. **Composite credit**
   - Voorbeeldvorm: `The Picturebooks feat. Jon Harvey [Monster Truck]`.
   - Bewaar de letterlijke credit als `artistCredit`/occurrence.
   - Modelleer The Picturebooks, Jon Harvey en Monster Truck als afzonderlijke entiteiten wanneer hun identiteit geverifieerd is.
   - `feat.`, lidmaatschap en de bandcontext zijn getypeerde relaties; de hele string wordt nooit één pseudo-artiest.

4. **Veel bezettingswisselingen**
   - Lidmaatschap is tijdgebonden relationele data.
   - Eén `members[]`-lijst zonder begin/eind/bron is onvoldoende als canoniek model.
   - Onbekende begin/einddatum blijft unknown, niet gegokt.

5. **Ontbrekende/incomplete AllMusic-pagina**
   - `source unavailable` of ontbrekend veld wordt een expliciete behandeluitkomst.
   - Geen profiel = niet automatisch geen genre/style/relatie.
   - Een artiest kan `treated-unresolved` bereiken en toch 100% behandeld tellen.

6. **Recording/remaster/reissue**
   - Work/composition, recording, release group, release en provider-track zijn aparte identiteiten.
   - Een remaster is niet automatisch een nieuwe recording; een live/remix/rerecording wel wanneer het om ander audio-object gaat.
   - Releasejaar van een latere verpakking overschrijft nooit het oorspronkelijke recording/release-anker.

7. **Bronconflict**
   - Twee bronnen kunnen verschillende waarden ondersteunen.
   - Beide evidence-records blijven bewaard; claimstatus wordt `conflict` tot resolvering.
   - Geen last-write-wins.

8. **Derived meter met onvolledige dekking**
   - Een live-intensiteitsmeter bewaart teller, periode, broncoverage, cohort en as-of-datum.
   - Onvolledige setlistregistratie verlaagt confidence/coverage en mag geen schijnnauwkeurige rangorde produceren.

## Schema-uitbreidingen die uit de stresstest volgen

### ArtistCredit
Een occurrence-level credit krijgt:
- `artistCreditId`
- `displayCredit`
- `parts[]`: entityId + creditedName + joinPhrase
- `identityStatus`
- `sourceId`

Hierdoor kan de presentatie exact blijven wat Spotify/releasebron toont terwijl de graph op echte entiteiten draait.

### Temporal membership
Membership-relaties ondersteunen:
- `validFrom`
- `validTo`
- `datePrecision`
- `currentness`
- meerdere evidence-records

### Conflict set
Claims over hetzelfde subject/predicate kunnen naast elkaar bestaan. Een resolver/projection kiest alleen een canonieke displaywaarde als de evidence dat rechtvaardigt; de Master wist de alternatieven niet.

### Provider occurrence
Een Spotify-track of andere platformvermelding is een occurrence van een muziekobject:
- provider ID
- displayed artist credit
- displayed release
- provider availability
- observedAt
- links naar recording/release zodra geverifieerd

## Resultaat

Geen van deze cases vereist een artiest-specifieke schemahack. De basislagen uit Living Master v1 blijven staan; nodig zijn generieke uitbreidingen voor artist credits, temporele relaties, conflictsets en provider occurrences.

**Conclusie:** schema v1 is geschikt om door te gaan naar een concrete pilot v2. Bulk blijft geblokkeerd totdat deze vier uitbreidingen in de integriteitstest zijn afgedwongen.
