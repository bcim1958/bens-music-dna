# W40 — Express-overdracht en productieproef, 3 oktober 2026

**Simulatie groen; productie nog niet end-to-end bewezen. Geen Spotify-mutaties vanuit deze chat.**

De gebruiker heeft bevestigd dat DNA Express nog niet operationeel is. De W40-stap levert daarom een controleerbaar overdrachtspakket. Het pakket behoudt alle 21 geordende Spotify-identiteiten, titels, artiesten, selectieherkomst, de week-edelsteen, artworkverwijzing en de openstaande biografie-onderzoekstaken. Een ontbrekende bestemming is expliciet `awaiting-operational-destination`; een editie of publicatie wordt niet gefingeerd.

De negen simulatorstappen slagen met de echte iPhone-invoer (20 positieve weektracks + 1 reserve). Express-handoffvalidatie weigert wijzigingen in volgorde, titels, edelsteen of onderzoeksqueue. Weekcontrole blijft een structurele audit met expliciete onbekende Genre-DNA/nieuwheidsannotaties; geen smaakbalansgoedkeuring.

De offline publicatiestap gebruikt nu dezelfde bezorgadapter als de echte cadeaupagina. De adapter leest 21 URI's terug, vergelijkt exacte volgorde met de frozen manifest, uploadt het bestaande artwork en controleert de artworkrespons. De offline proef blijft een mock: zij bewijst geen actuele Spotify-beschikbaarheid, toestemming, netwerkwerking of daadwerkelijk eindresultaat.

De W40-vrijgave is groen en aan exact deze geordende URI's gebonden. De actieve cadeaupagina vraagt tevens de hoes-uploadscope aan en markeert de bezorging pas als `playlist-verified` na teruglezing van tracks en hoes. Een fout voorkomt die registratie. Een bestaande gedeeltelijke playlist wordt hervat via haar ID; er wordt niet blind een tweede playlist gemaakt. De volledige week blijft onvoltooid zolang mapplaatsing en zichtbare eindcontrole ontbreken. Het museum heeft een W40-pagina met de echte volgorde, weeksteen, hoes, redactionele tekst en de lokale Spotify-bezorgstatus.

## Volgende daadwerkelijke stap

Open Music DNA via het bestaande iPhone-startschermicoon, open het cadeau en gebruik de Spotify-knop. Rond indien gevraagd de bestaande Spotify-koppeling af. Controleer vervolgens de playlist en hoes zichtbaar. Spotify-mapplaatsing blijft een handmatige stap volgens het bestaande contract; de bedoelde structuur is W40 onder 💎 Ontdek DNA. Museum en cadeau-afsluiting moeten eveneens zichtbaar gecontroleerd worden.

De operationele weekcontrole vereist daadwerkelijke playlist, hoes, museumregistratie, mapbevestiging en een exact passend Express-handoff. Een operationeel geslaagde W40 betekent niet dat Express gepubliceerd is. `fullChainComplete` blijft false zolang die bestemming niet operationeel is.
