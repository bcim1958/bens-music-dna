# W41 — herstel artiestuniekheid

Datum: 9 oktober 2026

## Aanleiding

De W41-praktijk liet zien dat de reserveplaatsen meerdere tracks van dezelfde artiest konden aanbieden:

- TOWER: `The Black Rose`, `Lay Down the Law`, `Prince of Darkness`
- Tanith: `Snow Tiger`, `Architects of Time`, `Olympus by Dawn`

De tracks waren uniek, maar de artiesten niet. Daarmee voldeed de route niet aan de vaste zaterdagregel van 21 tracks door 21 verschillende artiesten.

## Oorzaak

De dagelijkse productiepagina sloot eerder aangeboden track-ID's uit. Artiestuniekheid werd alleen binnen de op dat moment gekozen batch bewaakt. Artiesten uit eerdere officiële én reserveplaatsen van dezelfde week werden niet gezamenlijk uitgesloten.

De zaterdagbank dedupliceerde eveneens alleen op track-ID. Daardoor kon een tweede positieve track van dezelfde artiest alsnog in het cadeau belanden.

## Herstel

1. Dagselecties lezen voortaan alle eerdere officiële, reserve- en gepensioneerde reservekeuzes van dezelfde week en sluiten hun artiestcredits uit.
2. De zaterdagbank bewaakt naast track-ID ook genormaliseerde artiestcredits en slaat latere tracks van dezelfde artiest over.
3. De cadeaupagina weigert een cadeau dat niet uit 21 verschillende artiesten bestaat.
4. De verouderde tekst `onder 21` is vervangen door `onder de streefvoorraad`; de streefvoorraad blijft 42.
5. De W40-simulatorbediening is verborgen op het gewone dagelijkse scherm.
6. Cacheversies zijn verhoogd zodat de reparatie vóór W41 dag 7 wordt geladen.

## Gegevensbehoud

Geen bestaande beoordeling is verwijderd of gewijzigd. Bij de FIFO-samenstelling kan per artiest slechts één positieve track worden gekozen. Niet-positieve beoordelingen blijven leersignalen.

## Bewijs

`test/w41-artist-uniqueness-regression.cjs` bewijst met dubbele TOWER- en Tanith-records dat:

- de zaterdagselectie 21 tracks en 21 verschillende artiesten bevat;
- slechts één TOWER- en één Tanith-track worden gekozen;
- vier latere dubbele artiestrecords worden overgeslagen;
- de dagelijkse route ook reserveartiesten uit eerdere dagen meeneemt;
- de cadeaupagina een dubbele artiest als fout behandelt.

W41 blijft een open praktijkproef. Pas na de echte dag 7 en zichtbare zaterdaglevering mag de keten als bewezen worden aangemerkt.
