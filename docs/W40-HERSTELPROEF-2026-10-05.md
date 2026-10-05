# W40-herstelproef — 5 oktober 2026

## Resultaat
De echte iPhone-invoer van 3 oktober is opnieuw afgespeeld tegen de relevante bronbestanden van GitHub-checkpoint 288fac34c25b96dcada72e1c21b30ac21a661c28, in een afzonderlijke werkkopie. Geen Spotify-mutaties uitgevoerd.

- De oorspronkelijke invoer zonder presentatieartefacten stopt bij **museumtekst: Museum presentation artifact missing**. Manifest, weekcontrole, Flow-DNA en edelsteen slagen.
- Met de reeds bestaande museumtekst, artworkcontrole en mapgegevens slagen alle negen simulatorstappen. De samenstelling blijft **20 positieve weektracks + 1 reserve**; geen nieuwe herselectie.
- De tien bestaande regressiegevallen slagen. Deze gebruiken deels synthetische data en zijn aanvullend foutbewijs, geen productieproef.
- Alle simulatoruitkomsten houden `endToEndProven=false` en `spotifyWrites=0`. De publicatiestap simuleert teruglezing en hoes-upload; mapplaatsing staat in het manifest als bekende technische beperking; Express-groen betekent een geldig overdrachtspakket, geen gepubliceerde editie.
- Genre-DNA en nieuwheidsannotaties ontbreken nog voor de 21 tracks. Structurele weekcontrole-groen is geen goedkeuring van smaakbalans.

## Actueel zichtbaar eindresultaat
In de Spotify-desktopapp staat **Ontdek DNA #2026-40** binnen **💎 Ontdek DNA**. Er zijn 21 tracks in aangepaste volgorde; de 21 zichtbare titel-/artiestregels komen in volgorde overeen met de simulatie. De topaashoes en weekbeschrijving zijn zichtbaar. Deze controle bevestigt titelvolgorde, artwork en de feitelijke parentmap. Geen volledige live URI-export of afspeeltest uitgevoerd; het bestaan van deze playlist bewijst niet dat de automatische zaterdagroute haar heeft gemaakt.

De gepubliceerde [W40-museumpagina](https://bcim1958.github.io/bens-music-dna/test/w40-museum.html) toont de weeksteen, museumtekst en alle 21 tracklinks in de simulatievolgorde. Haar bezorgstatus zegt nog: “De daadwerkelijke bezorging is nog niet gecontroleerd.” DNA Express wacht op een operationele bestemming.

De gepubliceerde [cadeaupagina](https://bcim1958.github.io/bens-music-dna/test/zaterdagcadeau.html?week=2026-W40) opent in de beschikbare Mac-browseromgeving met **WEEK NOG NIET COMPLEET**: de oorspronkelijke 21 beoordelingen uit de iPhone-startschermomgeving zijn daar niet aanwezig. De bewaarde export bevat ze wel. Dit is een verschil in browseropslag, geen bewijs van verloren beoordelingen en geen nieuwe selectorfout.

## Eerste resterende bewijsgat
De automatische productie- en cadeau-afsluiting in de oorspronkelijke iPhone-startschermomgeving is niet bereikbaar via de beschikbare computerbediening. Daardoor kan de volledige echte keten hier nog niet worden bewezen. Er is geen nieuwe playlist aangemaakt om dit gat te omzeilen. Express is bovendien nog niet operationeel.

De concrete vervolgstap is de bestaande iPhone-cadeauroute met dezelfde W40-invoer en bestaande playlist laten afronden en haar bezorgbewijs controleren: exact 21 URI’s en volgorde, hoes, museumregistratie, afsluiting zonder dubbele playlist. Daadwerkelijke Express-publicatie blijft een afzonderlijk open onderdeel. Er is geen runtimecode gewijzigd op basis van deze herhaling.

## Bewijsbestanden
- `W40_OORSPRONKELIJKE_INVOER.json`: volledige simulatie met de oorspronkelijke opslag, zonder bijkomende presentatieartefacten.
- `W40_MET_BESTAANDE_ARTEFACTEN.json`: volledige herhaling met de bestaande voorbereiding.
- `PROVENANCE.json`: bronidentificatie, gecontroleerde bestanden en hashes. De volledige persoonlijke apparaatopslag blijft lokaal in de werkmap; ze wordt niet naar GitHub gepubliceerd.

**Status:** bestaande offline reparaties reproduceerbaar; Spotify-eindresultaat en museum zichtbaar; automatische end-to-end zaterdaglevering en Express-publicatie nog niet bewezen.
