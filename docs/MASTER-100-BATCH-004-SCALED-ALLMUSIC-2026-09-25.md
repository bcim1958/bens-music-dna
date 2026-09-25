# Master 100 — Batch 004 — scaled fresh AllMusic pass

**Datum:** 25 september 2026  
**Omvang:** 10 directe AllMusic-profielen  
**Uitkomst:** 10/10 terminal, alle tien verified, geen schemawijziging.

Batch: TesseracT, VOLA, The Pineapple Thief, Porcupine Tree, Steven Wilson, Gavin Harrison, Blackfield, Richard Barbieri, John Wesley en Storm Corrosion.

## Belangrijkste praktijktests
- **Naamambiguïteit echt aangetroffen:** AllMusic heeft naast de bedoelde TesseracT (`mn0001878711`, progressive metal) ook een andere Tesseract (`mn0003914411`, 1990s Neo-Prog). De batch gebruikt expliciet de provider-ID en niet de naamstring.
- **Multi-genre:** VOLA heeft Electronic én Pop/Rock plus zes styles; het model hoeft niets plat te slaan.
- **Persoon ↔ bands:** Gavin Harrison, Richard Barbieri en John Wesley leveren Member Of-relaties; Steven Wilson blijft een persoon/solo-entiteit naast Porcupine Tree/Blackfield.
- **Rijke band:** Porcupine Tree draagt zeven rechtstreeks blootgelegde styles zonder schemahack.
- **Compact project:** Storm Corrosion past in dezelfde structuur.

## Productiesignaal
Batchgrootte ging van 4 verse artiesten in 003 naar **10** in 004 zonder nieuwe schemafamilie of terminale fout. Daarmee is de eerstvolgende schaalstap niet meer 4 maar een gecontroleerde batch van 25. De bottleneck blijft broncontrole, niet Master-opslag.

Cumulatieve nieuwe/real-source commissioning sinds Batch 002: **18 behandelde bronrecords** (4 + 4 + 10), naast de eerdere architectuurpilots. Dit is nog geen 18 unieke toevoegingen aan de definitieve 3.333-teller totdat de v3-populatie-ID's expliciet zijn gereconcileerd; de migratiemotor mag geen dubbele telling introduceren.
