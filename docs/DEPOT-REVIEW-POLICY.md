# Depot — uitgaand transport en wachtkamer

Ontwerp en offline prototype, 9 oktober 2026. Geen productie-integratie.

## Archief als uitgangspunt

Een Depotrecord blijft bestaan ongeacht gebruik, tentoonstelling of beoordeling. NIET verwijdert geen muziek of historie: het krijgt een administratieve plaats bij uitgaand transport en hoort buiten reguliere ontdekking te blijven. TERUGKOMEN krijgt een wachtkamerplaats en hoort buiten reguliere ontdekking te blijven tot een expliciete herkansing. Deze uitsluiting is een ontwerpafspraak; dit prototype wijzigt geen huidige selector, W41-route, FIFO of Spotify-playlist. RAAK en GOED bewaren hun waarde zonder automatische tentoonstelling of playlistvorming.

## Volledige historie

Nieuwe gebeurtenissen worden uitsluitend toegevoegd. Elke gebeurtenis bevat `eventId`, `candidateId`, `sequence` (strikt oplopend binnen de aangeleverde stream), `rating`, `source` en `observedDate` (ISO-datum of expliciet null). Aanvullend: exact Spotify-ID indien bekend, oorspronkelijke invoer, bronhash, vastleggingstijd en aanleiding. `sequence` bepaalt verwerkingsvolgorde, geen verzonnen historische tijd. Een herimport van exact dezelfde gebeurtenis is idempotent; gewijzigd materiaal met dezelfde eventId of teruglopende volgorde geeft een fout. Een correctie is een nieuwe gebeurtenis met verwijzing naar de vorige; geen overschrijving.

De laatste expliciete gebeurtenis bepaalt de afgeleide archiefplaats. Een nieuw GOED na NIET haalt de track administratief uit uitgaand transport; de oude NIET blijft bewaard. Een nieuw NIET na TERUGKOMEN sluit de wachtkamerplaats. Een nieuw TERUGKOMEN na een herkansing opent de volgende kwartaalronde. Geen antwoord verandert niets: een vervallen rondedatum betekent alleen dat beoordeling nog openstaat. Geen automatische wijziging naar NIET of GOED.

De aangeleverde herstelbron heeft 33 momentopnamewaarden, geen volledige gebeurtenishistorie. `review-preview.json` bewaart deze 33 observaties met bronverwijzing en onbekende oorspronkelijke datum. Het ontwerp ondersteunt voortaan volledige historie; verloren historische gebeurtenissen worden niet gereconstrueerd of als volledig verklaard. De previewvolgorde is importvolgorde, geen bewijs van historische beoordelingsvolgorde.

## Identiteit

Bestaande kandidaat-ID is de veilige sleutel als opname-identiteit ontbreekt. Een onbekende Spotify-ID blokkeert iedere latere Spotify-actie, maar niet administratieve bewaring. Het prototype verbindt geen kandidaten op artiest/titel. Meerdere kandidaat-ID’s voor dezelfde opname vereisen een afzonderlijke, expliciete en herleidbare identiteitskoppeling; geen automatische fusie van beoordelingsgeschiedenissen. Bij tegenstrijdige waarden zonder bewezen volgorde is handmatige reconciliatie nodig en mag geen definitieve archiefplaats worden afgeleid.

## Kwartaalherkansing

Eerste opening: maandag **4 januari 2027**, eerste beoordelingsweek **4–10 januari**. Daarna de eerste maandag van ieder kwartaal: **5 april, 5 juli en 4 oktober 2027**, vervolgens **3 januari 2028**. Berekening gebruikt kalenderdatums in de gebruikerscontext Europe/Amsterdam; een latere runtime moet tijdstippen naar deze lokale datum omzetten.

Bekende beoordelingsdatum: kies de eerstvolgende kwartaalopening strikt na die datum, nooit vóór 4 januari 2027. Onbekende oude datum: eerste ronde 4 januari 2027, met expliciete onzekerheidsmarkering. Een nieuwe TERUGKOMEN op 4 januari verschuift naar 5 april. Gemiste rondes blijven als openstaand zichtbaar. Er is geen verplichte quota, geen automatisch nummertransport en geen automatische playlist. Een latere planner moet een afzonderlijke uitnodiging/rondegebeurtenis vastleggen om dubbele uitnodigingen te voorkomen; uitnodigen telt niet als een nieuwe beoordeling.

## Proef en grenzen

`scripts/depot-review-policy.py` is een zuivere functieproef: toevoegen en afleiden in geheugen; geen opslag- of accounttoegang. `as_of` toetst alleen welke wachtkamerplaatsen aan hun openingsdatum toe zijn; het is geen historische reconstructie van de toestand op die datum. De volledige aangeleverde stream blijft zichtbaar. De preview is een voorstel op basis van begrensde brondata, geen migratie of productiearchief.

`scripts/analyze-depot-meter.py` en `scripts/export-meter-candidates.cjs` inspecteren bestaande data offline. De Muziekmeter moet collectie, werkelijk aangeboden muziek en beoordeling apart tellen, met bronbereik en onbekenden. Voorraad en playlistlidmaatschap zijn nooit vervangende noemers voor compleet aanbod of waardering.
