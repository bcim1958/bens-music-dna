# Decision — Rollende positieve zaterdag-aanvulvoorraad

Date: 2026-09-13
Status: ACCEPTED / ACTIVE

## Doel
Music DNA moet iedere zaterdag betrouwbaar een Ontdek DNA-playlist van 21 unieke nummers kunnen opleveren, zonder dat de machine ooit namens Ben een nummer als RAAK of GOED kwalificeert.

## Vaste weekstructuur
1. Iedere week heeft 7 dagen × 3 officiële Ontdek-DNA-aanbiedingen = 21 meetnummers.
2. Alleen aanbodposities 1, 2 en 3 tellen mee voor de Muziekmeter.
3. De Muziekmeter blijft daardoor exact gebaseerd op 21 door Ben gegeven beoordelingen per week.
4. De wekelijkse Spotify-playlist blijft exact 21 unieke nummers bevatten.

## Positieve zaterdag-aanvulvoorraad
1. Er bestaat permanent een rollende voorraad van nog nooit in een wekelijkse Ontdek DNA-playlist gebruikte nummers die Ben zelf als RAAK of GOED heeft beoordeeld.
2. De minimale gezonde voorraad is 21 nummers.
3. NOG EENS en NEE komen nooit in deze positieve voorraad.
4. De machine mag kansrijkheid voorspellen, maar mag nooit zelfstandig een positieve beoordeling toekennen.
5. De voorraad wordt alle dagen van de week bewaakt en onderhouden, niet pas op zaterdag.

## Adaptief dagaanbod
1. Als de actuele ongebruikte positieve voorraad 21 of meer bedraagt: 3 nummers per dag.
2. Als de actuele ongebruikte positieve voorraad lager dan 21 is: 4 nummers per dag.
3. Aanbodposities 1, 2 en 3 blijven de officiële weeknummers en tellen mee voor de Muziekmeter.
4. Aanbodpositie 4 heeft één doel: aanvullen van de positieve zaterdagvoorraad.
5. Positie 4 telt niet mee voor de Muziekmeter en niet voor de officiële 21 weekmetingen.
6. Een RAAK of GOED op positie 4 gaat direct naar de positieve voorraad; NOG EENS/NEE niet.
7. Zodra de voorraad weer minimaal 21 bedraagt, gaat het dagaanbod vanaf de eerstvolgende dag terug naar 3.

## Zaterdagproces
1. De 21 officiële weeknummers vormen het vertrekpunt.
2. Voor de definitieve zaterdagplaylist worden lege plaatsen, waar de vastgestelde weekselectielogica dat vereist, aangevuld uit de positieve voorraad.
3. Aanvullen gebeurt FIFO: het oudste nog ongebruikte positieve voorraadnummer wordt als eerste ingezet.
4. Een nummer dat eenmaal in een wekelijkse Ontdek DNA-playlist is gebruikt, wordt definitief als verbruikt gemarkeerd en mag nooit opnieuw als voorraadaanvulling worden gebruikt.
5. Direct na de zaterdaglevering wordt de resterende positieve voorraad opnieuw geteld. Zakt die onder 21, dan geldt diezelfde zaterdag opnieuw het 4-nummersregime voor de nieuwe cyclus.

## Naamconventie Spotify
De vaste playlistnaam is:
`Ontdek DNA #YYYY-WW`
Voorbeeld: `Ontdek DNA #2026-38`.
De gebruikersnaam hoeft niet in de titel; Spotify toont de eigenaar zelf.

## Integriteitsregels
- Ben bepaalt altijd zelf RAAK / GOED / NOG EENS / NEE.
- Voorspelling en gemeten oordeel blijven gescheiden.
- Positie 4 mag nooit de Muziekmeter beïnvloeden.
- FIFO voorkomt dat oude positieve voorraad onnodig blijft liggen.
- Geen duplicaten tussen wekelijkse playlists.
- Spotify is de operationele eindcontrole: een week is pas gesloten na verificatie van 21 nummers in Spotify.

## Implementatiedoel W38
Deze regels moeten vóór de zaterdaglevering van W38 operationeel en praktisch getest zijn in de geïnstalleerde iPhone-app, inclusief:
- voorraadcounter;
- automatische 3/4-schakeling;
- aparte opslag/markering van positie 4;
- FIFO-selectie;
- duplicate-blokkering;
- vaste playlistnaam `Ontdek DNA #2026-38`;
- 21-track Spotify-levering;
- herstelbare status indien levering wordt onderbroken.
