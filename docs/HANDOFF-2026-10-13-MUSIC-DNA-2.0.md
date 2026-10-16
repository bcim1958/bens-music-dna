# Music DNA — documentatieoverdracht 13 oktober 2026

Status: **functioneel besluit vastgelegd; bouw/test/release OPEN**.

## Gecontroleerde uitgangspositie

Repository: bcim1958/bens-music-dna. Main: `122d064b378707f4968eb93942e6212069920b30` (12 oktober; PR #15 archivering). Beide Pages-runs voor deze commit zijn success: [Deploy](https://github.com/bcim1958/bens-music-dna/actions/runs/38303561411) en [Pages](https://github.com/bcim1958/bens-music-dna/actions/runs/38303560619). Dit is geen bewijs voor 2.0 of volledige zaterdaglevering.

PROJECT-STATE, het handoff van 12 oktober en het gecontroleerde releasebeleid zijn gelezen. Het oudere handoff bevat een QA-hervatopdracht op een oude werkbranch: **niet hervat**. Dag-2-iPhone-waarneming is gebruikersbewijs, geen volledige voorraad-/historieback-up. Bestaande export en beschermde opslag mogen niet blind worden teruggezet of gewist.

## Open PR's bij deze controle

| PR | Titel | Type | Head | Base |
| --- | --- | --- | --- | --- |
| [#17](https://github.com/bcim1958/bens-music-dna/pull/17) | W42: beschermde zaterdagroute, automatische overgang en kandidaatonderzoek | Draft | `c4f4122a3a3bfaee740de67fe9818044719e99c1` | `main` |
| [#16](https://github.com/bcim1958/bens-music-dna/pull/16) | W42: zeven dagen veilig afronden — dag 3 stop en releasevoorwaarden | Open | `7cf1e17b303718d3d19405570571bc1c74eaaed5` | `main` |
| [#11](https://github.com/bcim1958/bens-music-dna/pull/11) | W42: herstel automatische cadeau-overgang en bewijs voorraadblokkade | Draft | `7706da392b8bd3edb51a8ceb9e436634c67ad065` | `main` |
| [#10](https://github.com/bcim1958/bens-music-dna/pull/10) | W41: controleer Spotify-museumtekst en leg metadataherstel vast | Draft | `13a85bd6b7efcb9cb54c292f775fb28883b4aa8d` | `main` |
| [#7](https://github.com/bcim1958/bens-music-dna/pull/7) | W41: begrensde proefberekening met zes aangeboden dagen | Draft | `8c957a63263cca17b8c780d9e4f89df0984fb1d9` | `main` |
| [#5](https://github.com/bcim1958/bens-music-dna/pull/5) | W41: actuele status, NO-GO-bewijs en begrensde archivering | Draft | `92d3dcffc38b4b24200db81dbb78ba016b7df7b1` | `main` |
| [#4](https://github.com/bcim1958/bens-music-dna/pull/4) | W41 dag 7: NO-GO bevestigd in alle bestaande kandidaatvoorraden | Draft | `c82b7a72d62f76796d2accbd016059ac8d520dfb` | `codex/discovery-history-audit-2026-10-09` |
| [#3](https://github.com/bcim1958/bens-music-dna/pull/3) | Ontdek-DNA: bewijs reserveherhaling en W41 dag-7-blokkade | Draft | `5c38d211554f5095ffbb7fd05b5b04c2e0385601` | `main` |
| [#2](https://github.com/bcim1958/bens-music-dna/pull/2) | Depot & Muziekmeter: reproduceerbare nulmeting en kwartaalherkansing | Open | `077cb10dabd8528c2291200be9e7b6e5a003a6cd` | `main` |

#4 is gestapeld op #3; #17 meldt voortbouw op #16 maar richt zich op main. Geen bestaande branch aangepast, geen merge uitgevoerd. PR-beschrijvingen en het zaterdagopslagrapport van #17 zijn statusbronnen, geen onafhankelijk herhaalde tests. #17 zegt zelf: geen iPhone-/Spotify-mutaties, productie-CSP gesloten, endToEndProven=false.

## Nieuwe leidende afspraak

[Music DNA 2.0 — Vereenvoudigde zaterdagmachine](DECISION-2026-10-13-MUSIC-DNA-2.0-VEREENVOUDIGDE-ZATERDAGMACHINE.md) bevat functioneel contract, expliciete vervanging van dagelijkse quota en ratingafhankelijke zaterdaglevering, migratieplan en AC01–AC12. Het besluit is inhoudelijk geaccepteerd door Bens opdracht; opname in main en implementatie zijn nog open. Deze documentatie staat op een nieuwe branch vanaf bovenstaande main, zonder oude PR-wijzigingen mee te nemen.

## Volgende werkopdracht

Begin bij stap 1 van het migratieplan: actuele GitHub-status opnieuw lezen en volledige echte apparaatstand veiligstellen/reconciliëren. Daarna W42/W43-voorraadcapaciteit en overgangsmanifesten bewijzen. Geen nieuwe muziekselectie, automatische import, kandidaatpromotie, productiecode, merge of Spotify-write is door deze documentatiesessie uitgevoerd.

Bij latere integratie van PR's die PROJECT-STATE wijzigen, behoud dit 13-oktoberbesluit boven oudere actuele claims. Technische herstelvoorstellen kunnen bruikbare onderdelen bevatten, maar hun 21-ratingspoort en dagelijkse cyclus moeten tegen 2.0 worden beoordeeld voordat iets wordt hergebruikt.
