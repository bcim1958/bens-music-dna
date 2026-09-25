# Music DNA — Batch 017 voltooid

Datum: 25 september 2026

**100 nieuwe unieke artiestvermeldingen. Stand: 1.175 / 3.333 (35,3%). Resterend: 2.158.**

- Start: 1.075 na Batch 016, commit `a857b3d9cd89dfe7d62563126ba4a5e6b8213459`.
- Resultaat: 90 `treated-verified`, 10 `treated-unresolved`, 0 `treated-conflict`.
- Eerste: Flesh For Lulu. Laatste: Going To Hell In A Chevy.
- Selectie: de eerstvolgende 100 exacte, nog niet geregistreerde credits in de vaste werkmapvolgorde.

## Scope

Gecontroleerde migratie van de bestaande v3-classificatie en bronherkomst. Geen nieuwe AllMusic-raadpleging. Afgeleide classificaties blijven afgeleid; directe v3-bronvermeldingen worden niet voorgesteld als opnieuw geraadpleegde artiestprofielen. `treated-verified` betreft de migratiecontrole, niet volledige profielverrijking. Geen afgeleide persoonlijke Genre-DNA-relaties.

## Onvoldoende metadata

Formosa; Forsaken Throne; Four Trips Ahead; Frank Klepacki; Freaky Things; Frontback; Game On; Get Into Gear; Goddo; Gog Magog.

Deze tien zijn expliciet terminal `treated-unresolved`. Ontbrekende gegevens zijn niet ingevuld of geraden.

## Controle en opslag

De definitieve v3-werkmap heeft dezelfde SHA-256 als bij het herstel: `b9b2dd9444bd42714bb19a51d36e55408c046536aede988a323662276b698ec8`.

Alle 1.175 geregistreerde vermeldingen zijn met hun oorspronkelijke bronrijen vergeleken. Eerdere manifests blijven ongewijzigd. De nieuwe 100 overlappen niet met de eerdere 1.075. Elk record bewaart de exacte credit, stabiele mention-ID, bronrij en oorspronkelijke waarden, claims, evidence, behandelstatus en checkpoint. Controles na 50 en 100 records zijn geslaagd.

De volledige batch staat in `data/master-100/master-017.json`; de berekende cumulatieve stand en hashes staan in `data/master-100/state.json`.

Validatie geslaagd: `node test/master-100-register.cjs` en `python scripts/verify-master-100-source.py <definitieve-v3.xlsx>`.

## Hervatten

Volgende: Batch 018, startstand 1.175. Opdracht: `python scripts/append-master-100-batch.py <definitieve-v3.xlsx> --batch MASTER-018 --expected-prior 1175` (openpyxl benodigd). Daarna beide validaties uitvoeren en de nieuwe batch met state en verslag samen opslaan. De oorspronkelijke spreadsheet blijft ongewijzigd. De eerder vastgelegde onzekerheid over de historische indeling van Batch 009–011 blijft behouden.
