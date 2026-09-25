# Music DNA — herstel register en Batch 012

Datum: 25 september 2026

## Uitkomst

De teller wordt nu berekend uit **675 unieke, terminal behandelde artiestvermeldingen van 3.333**. Batch 012 voegt 100 vermeldingen toe aan een opnieuw gecontroleerde basis van 575: **91 treated-verified, 9 treated-unresolved, 0 treated-conflict**. Eerste vermelding: Care of Night. Laatste: Corroded. Resterend: 2.658.

Dit betreft migratie van de classificatie en bronherkomst uit de definitieve v3. Er zijn geen nieuwe AllMusic-pagina's geraadpleegd. Afgeleide classificaties blijven afgeleid; oorspronkelijke directe bronvermeldingen worden als opgeslagen v3-provenance bewaard. `treated-verified` betekent in deze batch dat die migratie is gecontroleerd, niet dat alle biografie-, relatie- of profielvelden opnieuw zijn onderzocht.

## Herstel van de overdracht

De oorspronkelijke werkmap is lokaal teruggevonden: `Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx`. SHA-256: `b9b2dd9444bd42714bb19a51d36e55408c046536aede988a323662276b698ec8`.

De 3.333 zijn de exact verschillende credits in `Playlist`, kolom D. `AllMusic-classificatie` bevat 3.284 namen; 49 aanvullende namen komen alleen in de Playlist-populatie voor. Case, spaties en samengestelde credits worden voor deze teller exact bewaard. Zo zijn `Blitz` en `BlitZ` twee bronvermeldingen; dit is geen uitspraak dat zij twee verschillende artiestentiteiten zijn. Composites worden niet gesplitst om extra tellerpunten te maken.

De namenlijsten uit de reconciliatiecheckpoints en Batch 006–008 leveren samen 275 unieke matches in de werkmap op. Die zijn allemaal opnieuw nagelopen. De overige 300 van de oude teller waren niet als volledige individuele manifests opgeslagen. Batch 009 noemt een reeks en onvolledige vervolgindices; Batch 010 en 011 noemen alleen voorbeelden. Hun precieze oude indeling is daarom niet bewijsbaar hersteld.

**Herstelkeuze:** de 275 teruggevonden namen behouden hun historische verwijzing. Daarnaast zijn nu 300 vermeldingen opnieuw behandeld in vaste werkmapvolgorde, met uitsluiting van die 275. Dit levert een expliciet nieuw herstelregister van 575 op. Het register beweert niet dat deze 300 exact de oorspronkelijke Batch 009–011-indeling zijn. De oude verslagen blijven ongewijzigd als historie, inclusief hun SHA-verwijzingen.

Deze herstelpassage telt niet als nieuwe groei. Alleen de daaropvolgende 100 van Batch 012 verhogen de herstelde teller van 575 naar 675.

## Gevonden administratieve afwijkingen

- `5 Star Hooker`, `666packs` en `Airtrain` ontbreken in de oude namenlijst van Batch 007 hoewel zij wel vóór het eindpunt in de werkmap staan. Ze zijn in de herstelpassage behandeld, met onvoldoende bronmetadata behouden.
- Batch 009 zegt dat AWOLNATION al in Batch 006 zat. De volledige 50-namenlijst van Batch 006 bevat die naam niet. AWOLNATION is nu met de concrete v3-bron opgenomen in de herstelpassage.
- Een generieke tekst zoals `AllMusic artiestprofiel` zonder concrete locator wordt niet tot rechtstreeks controleerbaar profielbewijs opgewaardeerd. Ontbrekende locators krijgen `treated-unresolved`.
- Het bekende AC/DC-provenanceconflict blijft bestaan: de directe status verwijst naar de algemene genre-route.

## Duurzame gegevens

- `data/master-100/population-v3.json`: alle 3.333 exacte credits, stabiele mention-ID en Playlist-rijen.
- `data/master-100/master-recovery-001-008-01.json` t/m `-03.json`: 275 opnieuw gecontroleerde historische namen.
- `data/master-100/master-recovery-009-011-01.json` t/m `-03.json`: 300 expliciete herstelrecords, zonder verzonnen oude batchtoewijzing.
- `data/master-100/master-012.json`: de 100 nieuwe records, elk met bronrij, oorspronkelijke celwaarden, claims, evidence en eindstatus.
- `data/master-100/state.json`: berekende teller, bestandshashes en hervatregel.
- `data/master-100/recovered-historical-documents.json`: ongewijzigde inhoud en blob-SHA van de gebruikte historische verslagen.

Elke vermelding krijgt een ID op basis van de exacte UTF-8-credit. Dit zijn populatievermeldingen, geen nieuw aangemaakte artiestentiteiten. Persoonlijke Genre-DNA-relaties worden niet afgeleid.

## Batch 012: unresolved

CHRIS HICKS PROJECT; `Chris Jericho;Paul Gilbert;Bob Kulick;Mike Inez;Brent Fitz`; Chris Vrenna; Chrome Division; Cincinnati Sinners; cleopatrick; CobraKill; Cocaine Cowboys; Corroded.

## Controle en hervatten

De registers zijn getest met de bestaande Master-100-engine, controles op unieke IDs en bewijsverwijzingen, en een afzonderlijke vergelijking van alle 675 records met de oorspronkelijke werkmap. De 100 records van Batch 012 overlappen niet met de 575 herstelrecords en volgen exact de eerstvolgende onbehandelde werkmapvolgorde. De werkmap zelf is niet gewijzigd.

Validatie: `node test/master-100-register.cjs` en `python scripts/verify-master-100-source.py <definitieve-v3.xlsx>` (openpyxl benodigd).

Batch 013 begint met het lezen en valideren van `state.json` en alle daarin genoemde registerdelen. Selectie: vaste AllMusic-classificatie-volgorde, daarna Playlist-only vermeldingen; reeds geregistreerde exacte mention-IDs overslaan; stoppen bij 100 nieuwe terminale records. Een nieuwe bronversie vereist expliciete reconciliatie. Geen teller ophogen op basis van een verslag of losse rij-index.
