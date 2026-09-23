# Music DNA — verhaal gelezen, vertelde vondsten verwerkt

**Datum:** 23-09-2026  
**Status:** GREEN — gerichte leesstatusproef; nog geen UI-integratie.  
**Vertrekpunt:** `f31019473f10a07e8b93c7431d75d4d0a069034c`, de [Shiraz Lane-vulproef](VALIDATION-2026-09-23-SHIRAZ-LANE-REGISTRY.md).  
**Canonieke hervatplek:** deze aanvulling op de [stopstaat van 22 september](HANDOFF-2026-09-22-STOPSTAAT.md).

## Concrete tekortkoming

Het korte verhaal “Een vertrouwd oor naast de band” vertelt twee bestaande vondsten:
- `disc-shiraz-per-two-roles`: Aldeheim als producer én medeschrijver bij In Vertigo;
- `disc-shiraz-per-return`: de eerdere samenwerking bij Carnival Days.

De vorige queue kende alleen het lezen van losse vondsten. Na het hele verhaal kon dus nog een van deze al vertelde vondsten als nieuw verschijnen. Dit was de expliciete hervatplek van de vorige proef.

## Begrensde oplossing

Het bestaande Registry-verhaal bevat nu `toldDiscoveryIds`: een expliciete, redactioneel gecontroleerde lijst van de twee bovenstaande vondsten. De verhaaltekst en de onderliggende feiten/bronnen zijn niet veranderd.

Een nieuwe kleine API-operatie, `markStoryRead(state, storyId, at)`, verwerkt die lijst in het **aparte presentatiestate-object**. Deze operatie betekent: het volledige verhaal is bewust als gelezen bevestigd. Openen, renderen of alleen een deur zien geldt niet als zo'n bevestiging.

De lijst is geen automatisch resultaat van gelijke bron- of relatie-ID's. Eén interview of relatie kan immers meer bevatten dan een verhaal vertelt. Een andere vondst over dezelfde counterpart en zelfs exact dezelfde bewijsrecords blijft ongelezen als hij niet expliciet op de lijst staat.

Alle koppelingen worden vóór het aanpassen van state gecontroleerd:
- bekende discovery-ID, geen dubbele ID's;
- dezelfde basis en counterpart als het verhaal;
- alle gekoppelde feiten zijn aanwezig in de verhaalitems en behoren tot die verbinding;
- discovery-bronnen bestaan, zijn aanwezig in het verhaal en ondersteunen een gekoppeld feit.

Een ongeldige lijst veroorzaakt een fout zonder gedeeltelijk voorraad te verbruiken. De bestaande integrity audit meldt dan `story-invalid-discovery-coverage`. Deze controles bewaken de structuur; de redactie blijft verantwoordelijk voor de inhoudelijke uitspraak “dit verhaal vertelt deze vondst volledig”.

Oudere verhalen zonder zo'n lijst verbruiken geen vondsten. Bij opnieuw lezen blijven bestaande read-tijdstempels behouden. Er wordt niets geschreven naar browseropslag, een server of de Registry-feiten.

## Gecontroleerd terugkeerscenario

| Moment | Producer-vondsten | Lordi-vondsten | Eerstvolgende Shiraz-deur |
| --- | --- | --- | --- |
| Nieuwe proefstaat | beide unread | beide unread | Per Aldeheim en Lordi |
| Producerverhaal bewust als gelezen bevestigd | beide read | beide unread | Lordi — Europese supporttour |
| Hetzelfde producerverhaal opnieuw bevestigd | blijven read; oorspronkelijke tijden behouden | beide unread | nog steeds Lordi |

De bestaande queue toont maximaal één vondst per counterpart. Daarom staat eerst de Lordi-tour in de queue; de tweede Lordi-vondst blijft ook ongelezen op voorraad. Ghosts selectie en leesstatus blijven ongewijzigd.

De proef markeert alleen synthetische testsessies. **Bens werkelijke leesgeschiedenis is niet gewijzigd** en er wordt niet beweerd dat hij het verhaal heeft gelezen.

## Validatie

Uitgevoerd op de bijgewerkte Registry `2026-09-23.3`:

```sh
node test/relation-registry-health.cjs
```

- **PASS:** Ghost-audit 0 errors / 0 warnings / 5 info; Shiraz-audit 0 errors / 0 warnings / 1 info.
- **PASS:** bestaande bundeling, brontraceability, niet-persistente self-test, semantische selectie en queue-controles.
- **PASS:** één gelezen verhaal verwerkt precies twee expliciet gekoppelde vondsten.
- **PASS:** beide Lordi-vondsten en alle Ghost-vondsten blijven beschikbaar.
- **PASS:** opnieuw lezen is idempotent; een eerdere shown-tijd blijft behouden.
- **PASS:** onbekend verhaal faalt zonder statewijziging; oudere verhalen zonder koppeling veranderen niets.
- **PASS:** een synthetische niet-gekoppelde vondst met dezelfde feiten en bronnen blijft unread.
- **PASS:** defectproeven met ontbrekende, dubbele, verkeerde-context- of ongedekte koppelingen falen vóór enige consumptie en worden door de audit herkend.
- **PASS:** oorspronkelijke kennisrecords en verhaaltekst behouden; alleen expliciete coverage-metadata bij het producerverhaal toegevoegd.

Tellingen blijven **26 relaties, vier verhalen en acht discoveryrecords**. De feitelijke voorraad verdwijnt niet bij lezen. Registry/startwaarden en persoonlijke presentatie blijven gescheiden.

## Grenzen en hervatplek

De oorspronkelijke grens “de queue weet niet welke vondsten één gelezen verhaal vertelt” is nu voor **expliciet beschreven volledige verhaalcoverage op API-niveau** opgelost.

Dit is nog geen zichtbare leesactie in Engine 30: die interface is niet aangepast en roept `markStoryRead` nog niet aan. Het producerverhaal is daar nog geen nieuwe toegankelijke Shiraz-wereld. Geen nieuwe iPhone-test of productiepromotie geclaimd.

Gedeeltelijk lezen, automatische tekstvergelijking, dezelfde inhoud onder verschillende discovery-ID's, gewijzigde verhaalversies en duurzame opslag zijn niet opgelost. Er is ook geen automatische rotatie tussen werelden toegevoegd. De bestaande globale tellers van `discoveryRotation` blijven globaal.

**Exact volgende gerichte proef:** aansluiten op een bewuste “gelezen”-handeling in een geïsoleerde leesproef, met openen/tonen duidelijk gescheiden van gelezen bevestigen. Bewijs daarbij dat de Lordi-deur daarna overblijft. De huidige API en deze controles zijn het vertrekpunt; geen nieuw algemeen ontwerp en geen verdere voorraaduitbreiding nodig om dat te testen.

W39, ratings, daily-route, Flow-DNA en de bestaande Explorer-schermen blijven volledig buiten deze wijziging. De bestaande main-publicatieworkflow blijft ongewijzigd.
