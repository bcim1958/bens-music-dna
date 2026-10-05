# W40 — veilig hervatten van bestaande playlist, 5 oktober 2026

De hervatroute las uitsluitend `items[].item.uri`, terwijl de bestaande bezorgadapter ook `items[].track.uri` ondersteunt. In de regressie met het tweede formaat werden alle 21 bestaande tracks weggefilterd: de route zag nul tracks en stuurde een nieuwe POST met 21 tracks naar dezelfde playlist. Dit kon dubbels veroorzaken. Dit bewijst een codefout, niet dat die fout in de huidige W40-playlist is opgetreden.

De hervatroute leest nu beide vormen. Ontbrekende/ongeldige trackidentiteiten en een gepagineerd antwoord stoppen de route vóór toevoegen of vervangen; onbekende rijen worden niet als een lege playlist behandeld. Een volledig en passend antwoord hervat dezelfde playlist via de bestaande afsluitcontrole.

Bewijs:
- Vóór herstel: onbedoelde POST naar een al gevulde playlist gereproduceerd met 21 fixturetracks.
- Vier nieuwe proeven slagen: beide antwoordformaten hervatten zonder trackmutaties; ongeldige rij en paginering stoppen zonder mutaties.
- Drie callbackproeven en tien simulatorregressies slagen: 17 proeven in totaal.
- W40 met echte invoer en bestaande presentatieartefacten blijft offline groen; `endToEndProven=false`, `spotifyWrites=0`.
- Regressie: `test/w40-resume-regression.cjs`.

Er is geen bestaande Spotify-playlist gewijzigd tijdens deze proeven. De oorspronkelijke iPhone-eindproef en daadwerkelijke Express-publicatie blijven open.
