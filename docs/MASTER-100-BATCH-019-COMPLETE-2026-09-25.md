# Music DNA — Batch 019 voltooid

Datum: 25 september 2026

**100 nieuwe unieke artiestvermeldingen. Stand: 1.375 / 3.333 (41,3%). Resterend: 1.958.**

- Start: 1.275 na Batch 018, commit `528604812c0ca1d4eab728bfb9a2f266221a38eb`.
- Resultaat: 92 `treated-verified`, 8 `treated-unresolved`, 0 `treated-conflict`.
- Eerste: Helllight. Laatste: Interpol.
- Selectie: de eerstvolgende 100 exacte, nog niet geregistreerde credits in de vaste werkmapvolgorde.

## Scope

Gecontroleerde migratie van de bestaande v3-classificatie en bronherkomst. Geen nieuwe AllMusic-raadpleging. Afgeleide classificaties blijven afgeleid; directe v3-bronvermeldingen worden niet voorgesteld als opnieuw geraadpleegde artiestprofielen. `treated-verified` betreft de migratiecontrole, niet volledige profielverrijking. Geen afgeleide persoonlijke Genre-DNA-relaties.

## Onvoldoende metadata

Hellsbelles; HIMALAYAS; Hollowstar; Holly Johnson; `Hollywood Roses;Axl Rose`; Human Flesh; Hvalross; Igel vs. Shark.

Deze acht zijn expliciet terminal `treated-unresolved`. Ontbrekende gegevens zijn niet ingevuld of geraden.

## Controle en opslag

De definitieve v3-werkmap heeft dezelfde SHA-256 als bij het herstel: `b9b2dd9444bd42714bb19a51d36e55408c046536aede988a323662276b698ec8`.

Alle 1.375 geregistreerde vermeldingen zijn met hun oorspronkelijke bronrijen vergeleken. Eerdere manifests blijven ongewijzigd. De nieuwe 100 overlappen niet met de eerdere 1.275. Elk record bewaart de exacte credit, stabiele mention-ID, bronrij en oorspronkelijke waarden, claims, evidence, behandelstatus en checkpoint. Controles na 50 en 100 records zijn geslaagd.

De volledige batch staat in `data/master-100/master-019.json`; de berekende cumulatieve stand en hashes staan in `data/master-100/state.json`.

Validatie geslaagd: `node test/master-100-register.cjs` en `python scripts/verify-master-100-source.py <definitieve-v3.xlsx>`.

## Hervatten

Volgende: Batch 020, startstand 1.375. Opdracht: `python scripts/append-master-100-batch.py <definitieve-v3.xlsx> --batch MASTER-020 --expected-prior 1375` (openpyxl benodigd). Daarna beide validaties uitvoeren en de nieuwe batch met state en verslag samen opslaan. De oorspronkelijke spreadsheet blijft ongewijzigd. De eerder vastgelegde onzekerheid over de historische indeling van Batch 009–011 blijft behouden.
