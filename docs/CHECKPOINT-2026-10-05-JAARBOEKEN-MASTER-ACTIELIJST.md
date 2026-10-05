# Music DNA — checkpoint 5 oktober 2026

Dit checkpoint volgt op 93d7c88333087346747b205863af1d306667a745 (3 oktober). Het archiveert het Jaarboekenherstel, de gesynchroniseerde Master en de actuele vervolgopdracht. Het is geen bewijs dat de W40-zaterdagmachine werkt.

## Uitgevoerd en vastgelegd
- 56 Jaarboeken 1970–2025, ieder 20 tracks: 1.120 posities en 1.120 unieke Spotify-URI’s.
- 109 historische herstelposities verwerkt in 36 Jaarboeken; eerste behouden vermeldingen intact. De overige 20 Jaarboeken zijn gecontroleerd op basis van bronbestanden, zonder nieuwe volledige live-export.
- 1.163 geregistreerde genormaliseerde artiestcredit-sleutels; nul herhalingen, interne dubbels of overlaps tussen 1970–2010, 2011–2019 en 2020–2025.
- Bands, soloartiesten en afzonderlijke projecten blijven afzonderlijke artiesten. Naamnormalisatie volgt de gebruikte controlebestanden; niet alle identiteiten zijn onafhankelijk met Spotify-artiest-ID’s bevestigd.
- Extra beschikbaarheidsreparatie: Jaarboek 1989, positie 13, Neil Young — Rockin’ in the Free World. De grijze Paris 1989-opname (spotify:track:4HG3iDrInYahNl3UX0BKCx) is vervangen door de elektrische Freedom-opname uit 1989 (spotify:track:4Y7fEQ4PAzhlLnLviRw2P4). De playlist is teruggelezen met 20 tracks in de bedoelde volgorde; de nieuwe regel was visueel beschikbaar. Geen afspeelproef uitgevoerd.
- Master 1.9 bevat 3.618 unieke URI’s: alle 3.480 oorspronkelijke records behouden en 138 toegevoegd (137 bij de eerste synchronisatie, 1 bij de beschikbaarheidsreparatie). Alle 1.120 actuele Jaarboektoepassingen zijn opgenomen. Bestaande overige toepassingen zijn behouden; de oude Neil Young-versie blijft als record zonder actuele Jaarboektoepassing.
- De bijgewerkte XLSX, volledige JSON/CSV, Jaarboekregister, herstelhistorie en controles zijn als herstelbare archiefbundels bijgevoegd. De oorspronkelijke Master 1.8 is ongewijzigd gebleven. Dit checkpoint publiceert een gegevenssnapshot; het wijzigt geen draaiende database of zaterdagmachine.
- Spotify-titels, bestaande artwork en mapindeling zijn behouden. Het lokale uitvoeringsverslag beschrijft de wijzigingen en grenzen van de controle.

## Nog open / grenzen van het bewijs
- Geen volledige afspeeltest van alle 1.120 tracks; Spotify-beschikbaarheid kan veranderen. Visuele beschikbaarheid is geen luisterbewijs.
- Jaar-fit sluit aan op geregistreerde bronjaren; geen onafhankelijke verificatie van iedere oorspronkelijke release. Acht bestaande verschillen tussen Master-werkjaar en Jaarboekjaar zijn expliciet vastgelegd en niet stilzwijgend overschreven.
- Flow-DNA is redactioneel toegepast. De nacontrole geeft 67 aandachtssignalen bij 531 vergelijkbare overgangen van 684 overgangen in de 36 gewijzigde Jaarboeken. Audiofeatures komen uit de historische export van 2 oktober: 621 van 720 tracks hebben daar een exacte URI-match. De 99 ontbrekende matches betreffen deze featurebron; alle actuele Jaarboektracks staan wél in Master 1.9.
- Credits met mogelijke naamvarianten of complexe samenwerkingen blijven handmatig te beoordelen volgens de creditbevindingen. Een signaal is geen opdracht om automatisch een track te vervangen.

## Geaccepteerde inrichting en actuele actielijn
Jaarboeken en Specials vormen de bibliotheek naast Ontdek DNA en het Edelsteenmuseum. Jaarboeken zijn verdeeld over zes decenniumkasten. De huidige Jaarboeken hebben **20 tracks per jaar**. De vermelding van 15 tracks in een automatische actielijst is achterhaald voor deze reeks en mag geen verkorting veroorzaken.

1. Dit checkpoint publiceren en op GitHub teruglezen.
2. W40 met de echte invoer reproduceerbaar doorlopen: manifest → weekoogst → 21 unieke tracks/artiesten → Flow-DNA → edelsteen → museumtekst → artwork → publicatie → mapplaatsing/archief. Het eerste breekpunt expliciet vastleggen.
3. Een reparatie alleen accepteren na een harde end-to-end bewijsproef. Offline groen bewijst geen Spotify-publicatie, correcte mapplaatsing of volledige aflevering. W40/W41-zaterdaglevering blijft **ONVOLTOOID** tot dit bewijs bestaat.
4. Jaarboeken: resterende beschikbaarheidsmeldingen gericht herstellen, luistersignalen beoordelen en Master/archief na iedere inhoudelijke wijziging synchroniseren.
5. Specials: de resterende opschoning van 01–30 en vervolgproductie volgens de actuele bibliotheekafspraken bewaken. De actielijst noemt acht probleem-/dubbeltracks en vervolg 81–100; die aantallen en oplevering zijn in dit checkpoint niet opnieuw zelfstandig geverifieerd.
6. Muziekmeter/Genre-DNA, koppeling van weekoogsten aan Master en Explorer/Registry blijven vervolgwerk. Geen harde genrequota; Flow-DNA kan eenzijdigheid signaleren. Feiten, bronnen en verhalen moeten herleidbaar blijven; artiestfoto’s gebruiken echte bronnen.

## Provenance en reconstructie
De bewijsbasis is het werk en de gecontroleerde uitvoer van 5 oktober in de Jaarboeken-chat, de repository op 93d7c883, het architectuurcheckpoint van 3 oktober en de geraadpleegde actuele actielijst. Er wordt geen volledige reconstructie van alle ongeziene chats van 4–5 oktober geclaimd. Ongecommitteerde bestanden in oudere lokale werkmappen zijn niet automatisch als geaccepteerde runtime opgenomen.

Zie `archive/2026-10-05/manifest.json` voor aantallen, SHA-256-hashes en bundelpaden. De drie ZIP-bundels bevatten de actuele Jaarboekgegevens, volledige Master en credit-/Flow-nacontrole. Hun interne bestanden bevatten oorspronkelijke lokale bronverwijzingen; die zijn provenance, geen benodigde installatielocaties.

**Status:** Jaarboekenherstel en Master-snapshot vastgelegd; volledige luister-/beschikbaarheidscontrole open; W40-falen en herstelstrategie veilig; zaterdagmachine nog onbewezen.
