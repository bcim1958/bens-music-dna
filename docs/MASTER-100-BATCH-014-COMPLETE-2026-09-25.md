# Music DNA — Batch 014 voltooid

Datum: 25 september 2026

**100 nieuwe unieke artiestvermeldingen. Stand: 875 / 3.333 (26,3%). Resterend: 2.458.**

- Start: het gecontroleerde register van 775 na Batch 013, commit `c1b2482d671c21ee6b0f6913c48e6b43b77673f5`.
- Resultaat: 86 `treated-verified`, 14 `treated-unresolved`, 0 `treated-conflict`.
- Eerste: David Readman. Laatste: Dr. Know.
- Selectie: de eerstvolgende 100 exacte, nog niet geregistreerde credits in de vaste werkmapvolgorde.

## Scope

Gecontroleerde migratie van de bestaande v3-classificatie en bronherkomst. Geen nieuwe AllMusic-raadpleging. Afgeleide classificaties blijven afgeleid; directe v3-bronvermeldingen worden niet voorgesteld als opnieuw geraadpleegde artiestprofielen. `treated-verified` betreft de migratiecontrole, niet volledige profielverrijking. Geen afgeleide persoonlijke Genre-DNA-relaties.

## Onvoldoende metadata

Dead Posey; Dead Union Social Theory; Deadland Ritual; Deaf Rat; Deathlike Silence; Ded Ringer; Detective; Devilskin; `Dexys Midnight Runners;Kevin Rowland`; Deya Dova; Diamond Nights; DIR EN GREY; Dizzy Reed; Doom Unit.

Deze veertien zijn expliciet terminal `treated-unresolved`. Ontbrekende gegevens zijn niet ingevuld of geraden.

## Controle en opslag

De definitieve v3-werkmap heeft dezelfde SHA-256 als bij het herstel: `b9b2dd9444bd42714bb19a51d36e55408c046536aede988a323662276b698ec8`.

Alle 875 geregistreerde vermeldingen zijn met hun oorspronkelijke bronrijen vergeleken. Eerdere manifests blijven ongewijzigd. De nieuwe 100 overlappen niet met de eerdere 775. Elk record bewaart de exacte credit, stabiele mention-ID, bronrij en oorspronkelijke waarden, claims, evidence, behandelstatus en checkpoint. Controles na 50 en 100 records zijn geslaagd.

De volledige batch staat in `data/master-100/master-014.json`; de berekende cumulatieve stand en hashes staan in `data/master-100/state.json`.

Validatie geslaagd: `node test/master-100-register.cjs` en `python scripts/verify-master-100-source.py <definitieve-v3.xlsx>`.

## Hervatten

Volgende: Batch 015, startstand 875. Opdracht: `python scripts/append-master-100-batch.py <definitieve-v3.xlsx> --batch MASTER-015 --expected-prior 875` (openpyxl benodigd). Daarna beide validaties uitvoeren en de nieuwe batch met state en verslag samen opslaan. De oorspronkelijke spreadsheet blijft ongewijzigd. De eerder vastgelegde onzekerheid over de historische indeling van Batch 009–011 blijft behouden.
