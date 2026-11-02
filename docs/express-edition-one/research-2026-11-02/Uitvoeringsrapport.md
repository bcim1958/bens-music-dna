# Vervolg 2 november 2026

## Bewezen

- Live GitHub: main e7351f0c501d32a27248cb708d71a0106ee6abaf; #18 open/draft, conflicterend; #22 open/draft op 5efb2258fb0a428a6d760238565605c2d9fe31da; #23 open/draft op 1da4c3610c8e2dbeb56db739a59cabdfa7c24068 vóór deze toevoeging. Geen andere uitvoering overschreven.
- Nieuwe afzonderlijke werklaag: 21 korte weekportretten in Markdown, HTML en JSON. Alle artist-ID's exact gekoppeld aan de queue van 1 november; track-ID's en echte ratings exact uit dezelfde bevroren selectie. Eén primaire artiest per geselecteerde track; gastrollen blijven afzonderlijk beschreven.
- Gerichte bronnen gelezen: artiest-/labelcatalogi, boekingsbiografieën en oorspronkelijke interviews. Bronsoort en beperkingen staan per portret. Mayank en Lykantropi steunen voorlopig op officiële zoektekst/beschrijving omdat volledige pagina-uitlezing faalde. Dat is zichtbaar, geen volledige paginaverificatie.
- Drie Chrome-viewportcontroles (390, 768, 1440 px): telkens 21 portretten, 21 bronlinks en 21 open controleblokken; geen horizontale overflow. Readback in output/express-edition-one/2026-11-02/viewport-readback.json. Dit is een desktopcontrole met gesimuleerde viewport, geen echte iPhone/iPad-proef.
- Bestaande dossierbestanden vóór aanvulling gecontroleerd tegen hun SHA-256-inventaris. Originele manuscripten, oude leesproeven, input/cutoff en bronbestanden blijven behouden.

## Voorstel / redactioneel werk

[Weekportretten](Weekportretten.html) is een los hoofdstukvoorstel, geen vervanging van leesproef v2 en geen nieuwe goedgekeurde editie-input. Elk JSON-portret heeft publishable=false, status=sourced-draft-needs-review en lege reviewvelden. De verhalen verbinden aantoonbare plaatgegevens met achtergrond; geen eigen afspeel- of luisterervaring verzonnen. Niet elk portret heeft al de volle biografische diepte van de 48p-specificatie.

Belangrijke bronvalkuilen expliciet bewaard: Night Laser heeft twee datums op één pagina; Mayank een afwijkende albumnaam in persberichttekst; Vypera onderscheidt coverbegin en tijdelijke studiogitarist; Fans Of The Dark/Junkyard Drive onderscheiden album- en latere bezettingen; Midas is de Detroit-band; Sanhedrin heeft inmiddels een latere plaat dan de oude boekingsbio noemt; Crypt Sermons winkelpagina betreft een herpersing; Ashbury onderscheidt studio- en livebezetting; LeBrock heeft een remaster; Kalax, PYXIS en Jay Diggs hebben verschillende rollen.

## Open afhankelijkheden

Volledige atomaire claim-/creditcontrole en biografische dekking, bronheropening Mayank/Lykantropi, redactionele goedkeuring, authentiek beeld en eindvormgeving blijven open. Deze teksten zijn niet naar operationele Registry-claims omgezet. Weekbio-queue en input-r2 zijn niet stilzwijgend vrijgegeven of bijgewerkt; preflight blijft HOLD. W44-playlistidentiteit/volgorde is op 1 november apart bewezen; vandaag geen nieuwe Spotify-readback of audio-/hoes-/accountclaim.

Geen nieuwe ketentest uitgevoerd: onveranderde regressiebewijzen blijven aan hun vorige head gebonden, de nieuwe head krijgt eigen CI. Automatische zaterdagwerking, echte apparaatproef, herstel na echte productieonderbreking en onbemande publicatie zijn niet bewezen. Geen merge, deployment, publicatie, bericht of Spotify-mutatie. Beschermde gegevens en overige projecten ongemoeid.
