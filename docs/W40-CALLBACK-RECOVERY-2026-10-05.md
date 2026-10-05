# W40 — herstel automatische Spotify-terugkeer, 5 oktober 2026

## Probleem en wijziging
Na terugkeer van Spotify (`?spotify=ready`) startte de cadeaupagina na de uitpakanimatie rechtstreeks `createGift`. Die promise werd niet afgewacht of opgevangen. Een afwijzing, bijvoorbeeld `track-readback 503`, liet een uitgeschakelde knop achter zonder foutmelding of herhaalmogelijkheid. Ook een ontbrekend/verlopen toegangstoken liet de route hangen zonder opnieuw te koppelen.

De automatische terugkeer gebruikt nu dezelfde `deliver`-functie als de gewone Spotify-knop. Daardoor worden bezorgfouten zichtbaar, wordt de herhaalknop hersteld en wordt een toegestane bestaande koppeling zo nodig opnieuw gestart. Selectie, beoordelingsopslag, vrijgavecontrole, bestaande-playlisthergebruik en artwork-/trackcontrole veranderen niet.

## Reproduceerbaar bewijs
- Vóór de wijziging: afgewezen bezorgpromise gereproduceerd; knop bleef uitgeschakeld, geen diagnose. Zonder token werd niet opnieuw gekoppeld.
- Na de wijziging: drie callbackproeven slagen — foutmelding plus herhaalknop en opgeslagen diagnose; ontbrekend token leidt tot koppeling; succes bezorgt eenmaal.
- Alle tien bestaande simulatorregressies slagen.
- De echte W40-invoer met bestaande presentatieartefacten doorloopt alle negen offline stappen opnieuw groen. `spotifyWrites=0`, `endToEndProven=false`.
- Testbestand: `test/w40-callback-recovery-regression.cjs`. Bestaande test: `test/saturday-simulator-regression.cjs`.

Dit is een bewezen herstel van de foutafhandeling, geen bewijs dat juist deze fout de oorspronkelijke W40-mislukking veroorzaakte. De automatische echte iPhone-cadeau-afsluiting blijft nog te controleren. DNA Express blijft een overdracht naar een nog niet operationele bestemming.
