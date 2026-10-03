# Music DNA — W40-zaterdagmachine, 3 oktober 2026

**Status: onvoltooid; niet end-to-end bewezen. Geen Spotify-publicatie uitgevoerd.**

De architectuur-checkpoint is opgeslagen in GitHub (commit 36ac634). Jaarboeken 1970–heden krijgen een bibliotheek met zes decennium-Kabinetten; Specials krijgen thematische expositieruimten met schilderijen en vitrinekasten; het Edelsteenmuseum verenigt Ontdek-DNA, Explorer, Jaarboeken en Specials binnen hetzelfde recreatieve hoofddoel.

## Aantoonbare technische breuken

1. **Actieve cadeaupagina laadt W40 verkeerd.** `daily.html` verwijst naar `zaterdagcadeau.html`. Die loader gebruikte alleen `candidateFile`; W40 heeft uitsluitend `candidateFiles`. De oude loader faalt reproduceerbaar bij een ongedefinieerde bestandsnaam. De reparatie ondersteunt alle deelbestanden, voegt de externe kandidaten toe en synchroniseert de opgeslagen beoordelingen nadat de kandidaatidentiteiten beschikbaar zijn. De gerepareerde loader laadt 355 records uit de bestaande week- en externe bronnen. Dit zijn kandidaten, geen 355 W40-beoordelingen.
2. **De alternatieve manifest-route is eveneens geblokkeerd.** `zaterdagcadeau-v3.html` controleert een draft-manifest met nul tracks. Dit is een afzonderlijke bevinding, niet bewijs dat juist die route de gemelde iPhone-fout veroorzaakte.
3. **Oplevering werd te vroeg compleet genoemd.** De manifest-voltooiingspoort eist nu ook een playlist-ID, bevestigde Spotify-mapplaatsing, Express-editie-ID en museum-entry-ID. De actieve cadeaupagina heeft daarnaast geen volledige museum/Express-orkestratie; de loaderreparatie bewijst dus nog geen volledige zaterdagmachine.
4. **Publicatiebeveiliging.** De actieve W40-publicatiefunctie controleert vóór Spotify-mutaties een afzonderlijk, standaard geblokkeerd simulatiebesluit. Een vrijgave moet groen zijn én dezelfde geordende Spotify-URI's bevatten. Het huidige besluit blijft rood.

## Simulator en bewijs

De simulator draait zonder netwerk en met een kopie van geëxporteerde apparaatopslag. Hij gebruikt de bestaande positieve bank en Flow-DNA-code. Iedere stap krijgt groen, rood of niet uitgevoerd. Na de eerste fout worden opvolgende stappen niet uitgevoerd. Ontbrekende persoonsgegevens worden niet uit kandidaatlidmaatschap of de samenvatting 25/42 afgeleid.

Volgorde: manifest → weekcontrole → Flow-DNA → edelsteen → museumtekst → artwork → publicatie → Spotify-mapplaatsing → DNA Express.

De werkelijke invoerrun stopt momenteel bij **manifest**: de actuele iPhone-opslag is niet beschikbaar in deze chat. Dit zegt niets over verlies van beoordelingen op de iPhone. De gebruiker bevestigde dat de invoer daar is gedaan. Twee pogingen om Safari op de Mac te benaderen leverden een time-out op; de Mac is bovendien niet als actuele bron bevestigd.

De regressieproeven reproduceren de laadfout en testen de reparatie, ontbreken van invoer, 19+2-selectie, behoud van identiteiten, volgordecontrole, ontbrekende edelsteen en onbevestigde mapplaatsing. Een volledig groene negenstappenproef gebruikt **uitsluitend synthetische beoordelingen en presentatiegegevens**; ook dan blijft `endToEndProven=false` en `spotifyWrites=0`.

Weekcontrole blijft een audit zonder nieuwe genrequota. Onbekende Genre-DNA/nieuwheidsannotaties blijven expliciet onbekend; concentratie leidt niet automatisch tot vervanging. De bestaande 19+2-regel wordt gecontroleerd, niet herschreven.

## Vervolg met echte gegevens

Open `test/w40-snapshot-export.html` op de iPhone vanuit dezelfde Music DNA-browseromgeving waarin is beoordeeld. De pagina exporteert uitsluitend vooraf toegestane muziekgegevens; geen Spotify-tokens. Voeg het JSON-bestand toe aan deze chat. Bij nul gevonden dagselecties schrijft de pagina geen export en vermeldt zij dat mogelijk een andere opslagomgeving is geopend. Safari en een startscherm-app mogen niet zonder bewijs als dezelfde opslagcontext worden behandeld.

Draai vervolgens de simulator met die snapshot. Leg per eerste breuk de invoer en diagnose vast. Een edelsteen moet aan een werkelijk gekozen weektrack en artiest gekoppeld zijn; museumtekst, artworkcontrole en Express moeten concrete artefacten hebben. De bestaande canonical map is `💎 Ontdek DNA`; de precieze W40-hiërarchie moet vóór productie worden bevestigd. Een offline mapplan bewijst geen Spotify-mapplaatsing.

Een groen rapport mag pas een vrijgave voor exact die trackvolgorde opleveren na controle van echte invoer en alle artefacten. De vrijgave is nu niet gezet. Productie is pas bewezen na daadwerkelijke publicatie, readback van de volledige trackvolgorde, zichtbare hoes, museum/edelsteen, juiste map, Express en succesvolle cadeau-afsluiting. De oudere `completeDelivery`-status alleen is daarvoor onvoldoende.
