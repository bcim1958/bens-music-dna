# Music DNA W41 — controle en herstel, 10 oktober 2026

## Feitelijk uitgevoerd

De bestaande privéplaylist https://open.spotify.com/playlist/0VyIb6M1YWFPsPWaDjYYEf is via Spotify Desktop bijgewerkt met de bestaande Citrien-hoes en de volledige museumtekst (295 tekens). Alleen hoes en beschrijving zijn opgeslagen. Geen tracks toegevoegd, verwijderd, vervangen of verplaatst; geen playlist aangemaakt; geen ratings toegevoegd.

Voor en direct na opslaan zijn alle 21 zichtbare titel/artiest/duurregels vergeleken: exact dezelfde volgorde. De playlist bevat 21 nummers, 1 uur 28 minuten, in de zichtbare map 💎 Ontdek DNA. Na navigeren naar W40 en terug naar W41 blijven hoes en volledige beschrijving aanwezig. Na heropenen waren 13 trackregels tegelijk beschikbaar; die en het totaal zijn opnieuw gecontroleerd. Dit is UI-bewijs, geen verse API-uitlezing van alle opname-ID's. De bedoelde ID-volgorde staat in het herstelbewijs, afkomstig uit het eerdere bevroren voorstel.

De gebruikte JPEG is 131.567 bytes, SHA-256 668265261d43cb9cf9f4508593b819e9fea6de5362c3160ca9d5ba4a398dec45, overeenkomstig het actuele GitHub-manifest. De Spotify-weergave is visueel gecontroleerd; de door Spotify geleverde afbeeldingsbytes zijn niet gehasht.

## Oorzaak

De tracks waren eerder via de desktopapp geplaatst. Dat bewijst geen automatische zaterdagaflevering. De eerdere hoesupload liep vast in het bestandsvenster. Deze keer is eerst de map geopend en daarna het JPEG-bestand geselecteerd; de knop Open werd actief en de afbeelding kon worden opgeslagen. De eerdere dialoogfout is niet tot een bestandscorruptie of Spotify-API-fout herleid.

De productiecode test/music-dna-week-delivery-v1.js controleert trackvolgorde, uploadt artwork en leest de afbeelding terug, maar bevat geen beschrijvingsupdate of terugleescontrole. De cadeaupagina gebruikt bij playlistcreatie slechts een algemene weekbeschrijving. Het bestaan van gemstone.editorialText in het manifest publiceert die tekst dus niet automatisch.

## Actuele GitHub-status

Main: 53f6b075fdda63acb18032b6c22a6366e4064023 (merge PR #9). Deploy-run 38063189292 en Pages-run 38063188795 slagen. De joblogs van 114245444009 bevestigen 17 offline regressies en een consistente Master/CSV/Depot met 3.877 tracks; dezelfde logs zeggen spotifyWrites=0 en endToEndProven=false. Deze Actions voeren geen Spotify-zaterdagbezorging uit.

PR #7 is nog een open concept met een zesdaagse offline proef. De W41-productievrijgave blijft simulationGreen=false en endToEndProven=false. Het huidige productie-manifest is draft, tracks en freeze zijn leeg, playlistId ontbreekt. De desktopaflevering is nog niet gereconcilieerd met apparaatopslag, manifest of reserveverbruik.

## Selectie en Flow-DNA

Het opgeslagen voorstel bevat 12 positieve weektracks en 9 positieve reservetracks: 21 verschillende opnamen en artiesten. De eerdere echte gegevensproef rapporteert smart-flow-v1, sequenceIntegrity.ok=true en sequenceDeterminism.ok=true. De Spotify-titel/artiestvolgorde komt overeen met de bevroren uitvoer. Dat ondersteunt een reproduceerbare Flow-DNA-volgorde, geen bewijs van volledige productie-eligibility.

Dag 7 was niet aangeboden of beoordeeld. In de oorspronkelijke audit ontbreken genre- en nieuwheidsannotaties (42 waarschuwingen, dataChecksPass=false). Lokale genrevoorstellen en 12 NEW_ARTIST-bewijzen zijn voorbereid; bij 9 reserve-items ontbreekt nieuwheidsbewijs. Er is geen nieuwe volledige live bibliotheek-/FIFO-controle uitgevoerd. Blood Star blijft buiten de bewaarde set; de oorspronkelijke vervangingsplek is niet vastgesteld. Geen selectie of volgorde aangepast.

## Gerichte codecorrectie

Een conceptwijziging laat verifyAndAttach de bestaande museumtekst vóór schrijven op aanwezigheid en 300-tekenslimiet controleren, alleen het beschrijvingsveld bijwerken, de exacte tekst teruglezen en daarna de trackvolgorde opnieuw controleren. Een reeds correcte beschrijving veroorzaakt geen beschrijvingsupdate. De artworkstap behoudt zijn bestaande gedrag. De regressiemocks zijn aangevuld en de cacheversie van de cadeaupagina vernieuwd.

18 lokale offline controles slagen, inclusief verkeerde beginvolgorde, ontbrekende/te lange tekst, 403, afwijkende teruggelezen beschrijving en gelijktijdig veranderde trackvolgorde. De Master/Depot-audit slaagt. Dit zijn mocktests, geen Spotify-API-end-to-endbewijs. De wijziging wordt als concept-PR aangeboden en is niet gemerged of uitgerold.

## Niet bewezen of afgerond

De automatische keten blijft onbewezen; volledige eligibility, apparaat-FIFO/reconciliatie, DNA Express-publicatie en museumpublicatie blijven open. De al eerder ontstane extra lege playlist is ongemoeid gelaten. De cadeauknop mag niet opnieuw worden gebruikt als nieuwe aflevering zolang de bestaande playlistidentiteit niet veilig met de apparaatregistratie is verbonden: anders kan een nieuwe playlist ontstaan.

W41 heeft nu daadwerkelijk de hoes en beschrijving op Spotify. Dat is een gecontroleerde metadatareparatie, geen volledige goedkeuring van de zaterdagmachine.
