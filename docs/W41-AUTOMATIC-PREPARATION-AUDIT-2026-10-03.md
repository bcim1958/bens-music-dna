> Historische tussenstand. De hieronder beschreven W41-blokkade is inmiddels opgelost; zie [W41 — voorbereiding gereed](W41-AUTOMATIC-READY-2026-10-03.md). Echte W41-aflevering is nog niet bewezen.

# Automatische W41-voorbereiding — gecontroleerde tussenstand

W41 is nog niet vrijgegeven. De werkende W40-afleverroute bewijst niet dat de invoer voor W41 al gereed is. Er bestaat geen handmatige W41-keuze die Ben hoeft aan te leveren; de selectiemotor moet deze leveren.

## Structurele fouten en herstel

1. De voorbereidende voorraadcontrole las `items` of de export zelf, terwijl de iPhone-export de gegevens onder `storage` bevat. De lokale controle leest nu deze structuur en serialiseert objectwaarden naar het localStorage-formaat. Het echte bestand levert 115 sleutels en 151 historische leersignalen. Zonder apparaat-export kan deze controle nooit een vrijgave opleveren.
2. De voorbereidende weekproef liet dezelfde artiest op verschillende officiële dagen terugkomen. De lokale proef sluit eerdere officiële artiesten uit gedurende alle zeven dagen. De productiepagina is hiermee nog niet verbonden; deze proef is geen actieve weekselector.
3. Het productie-leermodel verwijderde `discoveryDecision` en `discoveryOrigin` bij het opnieuw verwerken van een beoordeling. Het bewaart nu de oorspronkelijke keuzegegevens uit de opgeslagen beoordeling, of de reeds bestaande gegevens van het leersignaal. De herkomst wordt niet achteraf opnieuw berekend wanneer een artiest inmiddels bekend is.

## Uitkomst met echte historie

De bestaande onderzoeksvoorraad levert maximaal 16 verschillende officiële artiesten. Dag 6 heeft slechts één officiële kandidaat en dag 7 geen. De dagelijkse eis van minimaal twee nieuwe artiesten wordt eveneens op die dagen niet gehaald. Fout: `insufficient-fit-tracks`. W41 blijft `ready:false`.

De onderzoeksvoorraad en nieuwe selectiemotor bevinden zich nog in de werkruimte; de productie gebruikt deze niet. Nieuwe bronnen zijn onderzocht, maar worden pas toegelaten na controle van exacte Spotify-identiteit, originele studio-uitvoering, jaartal, bronverwijzingen, aansluiting bij de referentie en uitsluiting van reeds aangeboden muziek.

## Volgende vereiste overgang

Vergroot de gecontroleerde bronvoorraad, herhaal de zeven-daagse proef met de echte historie, verbind de goedgekeurde selector met W41, en leg de automatisch gekozen edelsteen plus hoes vast volgens de goedgekeurde beeldfamilie. Daarna moeten de echte W41-beoordelingen de zaterdagmanifest en de volledige publicatiesimulatie opleveren. De huidige statische W41-vrijgave is rood; er mogen geen Spotify-schrijfacties volgen.

DNA Express blijft een voorbereide overdracht zonder operationele bestemming. Spotify-mapplaatsing blijft de vastgelegde technische uitzondering. Beide worden eerlijk getoond in het uiteindelijke bewijs.

## Verificatie

- Beleidstests slagen, inclusief herkomstbehoud, historische uitsluiting en unieke officiële artiesten over zeven dagen.
- De simulator met de echte W40-invoer blijft groen; de simulator claimt geen nieuw praktijkbewijs.
- De bestaande zaterdagregressies slagen.
- W41-invoercontrole eindigt met een rode capaciteitspoort, zoals vereist.

## Verduidelijking positieve reservevoorraad

De capaciteit van 16 verschillende officiële artiesten hierboven betreft de onderzoeksvoorraad voor nieuwe dagelijkse ontdekkingen, niet de positieve zaterdagreserve. De echte iPhone-export bevat 115 positieve bankitems: 70 reeds gebruikte en 45 nog niet gebruikte. Van die 45 zijn 20 positieve officiële W40-tracks en 25 positieve reservetracks. De melding van vanochtend 25 / 42 is dus bevestigd. Deze reserve vult ontbrekende positieve weektracks aan tot 21, met behoud van de selectie- en hergebruikregels. Een tekort in nieuwe dagontdekkingen mag niet als tekort in deze reserve worden beschreven. Deze telling betreft de export vóór de W40-aflevering; het actuele saldo na aflevering is hiermee niet opnieuw vastgesteld.
