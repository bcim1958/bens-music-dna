# CHECKPOINT — 2026-10-03 — W40 zaterdaglevering mislukt

Status: **ONVOLTOOID — zaterdagmachine structureel onbewezen/defect.**

Dit checkpoint archiveert de door Ben gemelde actuele praktijkuitkomst en de gekozen herstelstrategie, na repositorybasis `4019489c249d80a90270140bc4719127ecc9caa6`. Het vult het [W40-checkpoint van 2 oktober](CHECKPOINT-2026-10-02-W40-PRACTICAL-PROGRESS.md) aan en bevestigt de [harde opleverregel van 3 oktober](ARCHITECTURE-CHECKPOINT-2026-10-03.md). Eerdere technische checks, simulaties, deelbewijzen en gereedheidsclaims gelden niet als bewijs dat de afgesproken zaterdagaflevering daadwerkelijk is geleverd.

## Actuele W40-praktijkuitkomst

- W40 dag 7 eindigde met **5× RAAK**. Dit is de gemelde daguitkomst; het wijzigt niet de bestaande regel dat alleen officiële posities 1–3 voor de Muziekmeter tellen.
- De afgesproken zaterdagaflevering kwam **niet tot stand**. Er werd ook **niets stil naar Spotify gepubliceerd**.
- Dit is de **derde zaterdag op rij** dat de end-to-end zaterdagketen faalt.
- Daarom geldt de zaterdagmachine als **structureel onbewezen/defect**, totdat hij reproduceerbaar end-to-end is aangetoond. Een geslaagde deelstap of technische controle sluit deze tekortkoming niet.

## Vastgelegde herstelstrategie

Eerst een reproduceerbare simulatie/testbank van de volledige keten, met **W40 als testcase**:

**manifest → weekcontrole → Flow-DNA → edelsteen → museumtekst → artwork → publicatie → Spotify-mapplaatsing → DNA Express**

Gebruik de werkelijke W40-invoer, leg invoer, uitvoer en controlebewijs per stap vast en lokaliseer het werkelijke breekpunt. Pas na een volledig groene reproduceerbare simulatie volgt het daadwerkelijke end-to-end praktijkbewijs. Een groene simulatie alleen is geen bewijs van productie-oplevering.

## Harde Definition of Done

Alleen **‘klaar / end-to-end bewezen’** wanneer het daadwerkelijke eindresultaat **zichtbaar bestaat** en **alle stappen zijn gecontroleerd**: de 21-trackselectie in definitieve Flow-DNA-volgorde met behoud van Spotify-identiteiten, edelsteen, museumtekst, artwork, daadwerkelijke publicatie, Spotify-playlist op de afgesproken mapplaats, DNA Express en succesvolle cadeau-afsluiting zonder fallback. Het controlebewijs moet het echte geleverde resultaat betreffen.

**Ontbreekt één stap of het controlebewijs daarvan, dan is de status = ONVOLTOOID.**

## W41 en opdrachtgrens

De bestaande **W41-voorbereiding mag blijven staan**. De echte **W41-zaterdag blijft onbewezen tot gecontroleerde praktijklevering**; voorbereiding, deployment of regressiechecks veranderen dat niet.

Dit is uitsluitend checkpoint/archivering. Er is in deze opdracht geen nieuwe functionele bouw, testbankimplementatie, runtimewijziging of Spotify-publicatie uitgevoerd. Eerst deze back-up; verdere herstelbouw valt buiten deze opdracht.
