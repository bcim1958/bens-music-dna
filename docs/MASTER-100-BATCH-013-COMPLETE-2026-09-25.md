# Music DNA — Batch 013 voltooid

Datum: 25 september 2026

**100 nieuwe unieke artiestvermeldingen. Stand: 775 / 3.333 (23,3%). Resterend: 2.558.**

- Start: het gecontroleerde register van 675 na Batch 012, commit `2496a01cc02cd792943e27fe7d48a29d11e457ea`.
- Resultaat: 88 `treated-verified`, 12 `treated-unresolved`, 0 `treated-conflict`.
- Eerste: `Corrosion Of Conformity\t` (de afsluitende tab in de broncredit blijft behouden).
- Laatste: David Lee Roth.
- Selectie: de eerstvolgende 100 exacte, nog niet geregistreerde credits in de vaste werkmapvolgorde.

## Scope

Gecontroleerde migratie van de bestaande v3-classificatie en bronherkomst. Geen nieuwe AllMusic-raadpleging. Afgeleide classificaties blijven afgeleid. Directe v3-bronvermeldingen blijven als zodanig opgeslagen en worden niet voorgesteld als opnieuw geraadpleegde artiestprofielen. `treated-verified` betreft de migratiecontrole, niet volledige profielverrijking. Geen afgeleide persoonlijke Genre-DNA-relaties.

## Onvoldoende metadata

Crash Test Dummies; Crimson; Crucified Barbara; `Cruel Juno;Fabio Lione`; Cryoshell; Crystal Steel; Crystal Tears; Cynical Sons; Cöntraband; D'OR; `Daniel Licht;Jon Licht`; David Baechler.

Deze twaalf zijn expliciet terminal `treated-unresolved`. Ontbrekende gegevens zijn niet ingevuld of geraden.

## Controle

De definitieve v3-werkmap heeft dezelfde SHA-256 als bij het herstel: `b9b2dd9444bd42714bb19a51d36e55408c046536aede988a323662276b698ec8`.

Het volledige register en de bronrijen zijn gecontroleerd. De eerdere 675 records en alle eerdere manifests blijven ongewijzigd. De nieuwe 100 hebben geen overlap met die basis. Elke vermelding bevat de exacte credit, stabiele mention-ID, bronrij en oorspronkelijke waarden, claims, evidence, behandelstatus en checkpoint. De interne controles na 50 en 100 records zijn geslaagd.

Opslag: `data/master-100/master-013.json` met de volledige 100-recordlijst en `data/master-100/state.json` voor de berekende cumulatieve stand.

## Hervatten

Volgende: Batch 014. De selectie sluit alle 775 geregistreerde mention-IDs uit. De afzonderlijke bronvermeldingen blijven de teleenheid; samengestelde credits worden niet opgesplitst voor extra tellerpunten.

Er is nu een herbruikbare vervolgopdracht: `python scripts/append-master-100-batch.py <definitieve-v3.xlsx> --batch MASTER-014 --expected-prior 775`. Deze controleert de bronhash en alle bestaande manifests voordat zij een nieuw registerdeel toevoegt. Een verkeerde startteller, herhaalde batch of bestaand doelbestand wordt geweigerd.

Validatie: `node test/master-100-register.cjs` en `python scripts/verify-master-100-source.py <definitieve-v3.xlsx>` (openpyxl benodigd). Eerst lokaal uitvoeren en controleren, daarna samen opslaan. De oorspronkelijke spreadsheet blijft ongewijzigd.
