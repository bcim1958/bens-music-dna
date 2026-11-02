# W44 OAuth-onderzoek — 2 november 2026

## Uitkomst en bewijsgrens

Main rechtstreeks opgehaald en bevestigd op `63ff7d89d8e5d7bb3789cef718f89571a0adbcd9` (merge #25). Het checkpoint op main bevat nog de oudere pre-merge-peiling; die blijft historisch. Dit onderzoek staat op een aparte documentatiebranch vanaf die merge.

**Bestaande bruikbare OAuth-toegang is niet vastgesteld. De authenticated API-proef is niet uitgevoerd; geen 401/403 of tokenverloop geobserveerd.** Dit is een toegangs-/bedieningsblokkade, geen bewijs dat Ben nergens een geldige sessie heeft.

- Geen Spotify/Music-DNA-omgevingsvariabelen in het uitvoeringsproces. Geen benoemde `.env`-, token- of OAuth-configuratie gevonden in de werkmap (inclusief verborgen bestandsnamen, exclusief git/node_modules). In de directe home-/config-/cache-/local-share-mappen geen herkenbare Spotify/Spotipy-configuratie aangetroffen. Alleen bestandsnamen geïnventariseerd, geen algemene geheimenverzameling doorzocht.
- Spotify Desktop is actief; onder Application Support bestaat de Spotify-appmap. Interne appcredentials/cookies/keychain zijn niet uitgelezen: een Desktop-login is geen aantoonbare OAuth-grant voor de Music DNA-app.
- Geen bestaande tab in de beschikbare geautomatiseerde browsers; Safari toont een startpagina. Safari-opslag is via de beschikbare browserbediening niet veilig uitleesbaar. Geen browserdatabase, profiel of token gekopieerd. Overige browserprofielen en iPhone-opslag niet gecontroleerd.
- Geen Spotify-connector beschikbaar. GitHub-toegang verleent geen Spotify-toegang.

## Bestaande integratie op de gecontroleerde main

- `test/spotify-callback.html`: Authorization Code + PKCE S256, state-controle, vaste bestaande client-ID en HTTPS-callback op dezelfde GitHub Pages-origin. Client-ID is een publieke appidentifier, geen client secret. Access token/expiry in sessionStorage (`bmd_spotify_access`, `bmd_spotify_expires`); refresh token in localStorage (`bmd_spotify_refresh`). De callback bewaart de geretourneerde scope niet en navigeert standaard naar een cadeaupagina.
- `test/spotify-click-play-probe-v7.html`: vraagt `user-modify-playback-state user-read-playback-state`; leest daarnaast fallback `musicdna_spotify_access`. De tokenfunctie controleert geen expiry en verwijdert tokens bij 401. Niet gebruikt: geen strikt lezende OAuth-route en opslagmutaties mogelijk.
- `test/zaterdagcadeau-v2.html`: vraagt `playlist-modify-private`; refreshfunctie kan tokens vervangen en de afleverroute schrijft playlists. v3 voegt onder meer `ugc-image-upload` en vervanging van playlistinhoud toe. Legacy cadeaupagina's staan onder CSP-wachtstand. Geen geschikte route voor deze proef; niet activeren of de blokkade omzeilen.
- Callback gebruikt een vaste client-ID terwijl de afspeelproef een invulbare client-ID heeft: bij een afwijkende ingevulde ID kan de code-uitwisseling mislukken. Niet live getest; niets aangepast.

## Kleinste vervolghandeling zonder nieuwe toestemming

Laat eerst de bestaande browser zelf uitsluitend lezen. Geen tokens delen, niets uit opslag kopiëren, niets wissen, geen Koppel/Bezorg/Afspelen-knoppen gebruiken.

1. Gebruik Safari (of de browser waarin Music DNA eerder gekoppeld was), bij voorkeur het oorspronkelijke nog open tabblad: sessionStorage hoort bij die tab. Open anders een nieuwe tab op `https://bcim1958.github.io/bens-music-dna/test/spotify-click-play-probe-v7.html`. Alleen openen vraagt geen OAuth en start geen afspelen; dit is in de bron gecontroleerd. Een nieuwe tab kan een oude sessionStorage-sessie niet herstellen.
2. Open de JavaScript-console voor die pagina (Safari: Ontwikkel → Toon JavaScript-console; indien nodig onder Safari → Instellingen → Geavanceerd de functies voor webontwikkelaars tonen). Dit verandert geen Spotify-toestemming. Onderstaande leesproef kan door Ben zelf in die console worden uitgevoerd. Het resultaat bevat alleen status en playlistgegevens; het token blijft binnen de pagina en gaat uitsluitend als Authorization-header naar Spotify.
3. Deel alleen het JSON-resultaat met label `Music DNA W44 read-only`. Geen volledige console-/netwerkdump. Bij BLOCKED is geen nieuwe koppeling gestart. Een gemelde refresh-tokenaanwezigheid bewijst geen geldigheid; vernieuwen is onder deze opdracht bewust niet uitgevoerd.

De snippet is voorbereid en op syntaxis gecontroleerd, **niet live uitgevoerd**. Hij gebruikt uitsluitend GET, geen refresh, opslagwijziging, OAuth of publicatie. Een bestaand ruimer token wordt alleen voor lezen gebruikt; de scopes van dat token zijn daarmee niet bewezen.

```javascript
void (async () => {
  const out = {checkedAt: new Date().toISOString(), status: 'BLOCKED',
    receiptHead: '5efb2258fb0a428a6d760238565605c2d9fe31da'};
  try {
    if (location.origin !== 'https://bcim1958.github.io') throw Error('Verkeerde origin');
    const token = sessionStorage.getItem('bmd_spotify_access') || localStorage.getItem('musicdna_spotify_access');
    out.accessPresent = Boolean(token);
    out.refreshPresent = Boolean(localStorage.getItem('bmd_spotify_refresh'));
    if (!token) throw Error('Geen bestaand access token in deze tab/browser');
    const id = '1oUn9w2BWTztyCmARl8xzk';
    const expected = ["spotify:track:4OEjJbIBMzaTFsYJhBF4DO", "spotify:track:3pUuCPjhocrhbfQ8V0qO1G", "spotify:track:7s3iIgurAG0xgDg1ebAweA", "spotify:track:5R8u2wIpO2OKg2EhSygZne", "spotify:track:6Ko5PM4RK7eumjqnKt5Ahi", "spotify:track:45yGG3vEZTV8MBVxKqXAq5", "spotify:track:6jIWMzMQ9NuGHAdPFxAjcI", "spotify:track:5aISIm0BHmorW4Z7hMDdg7", "spotify:track:6VnK5Xeg2u7Zg5qJqKYaDo", "spotify:track:6lmrfYBEaTpKk3M30yUrZ7", "spotify:track:6Ny1GkA2KbnytfBYyQskzd", "spotify:track:2h7J8G3II0eZj0Kl8uDWmH", "spotify:track:6jEGUmbMdvWq6Di1Kv61J0", "spotify:track:3E6xrYViwCil3oK4pkqpZ4", "spotify:track:6eKjzKEAz48JsIjsHTkGHH", "spotify:track:58C4uAvr4MTr88Chmkc6nz", "spotify:track:0Ws0ZUpn49O9B1P4lVNvPx", "spotify:track:69feEDlBjijnisHbOWgH7P", "spotify:track:3lS99gJJAWuxKxQfXArvvx", "spotify:track:4O6pSwn4xxx8FdBBdqeEin", "spotify:track:6Hy7t4RIksivCxEXyu6T1b"];
    const get = async (url) => {
      const u = new URL(url);
      if (u.origin !== 'https://api.spotify.com' ||
          !(u.pathname === '/v1/me' || u.pathname === '/v1/playlists/' + id ||
            u.pathname === '/v1/playlists/' + id + '/items')) throw Error('Onverwachte API-route');
      const r = await fetch(u.href, {method: 'GET', redirect: 'error', credentials: 'omit',
        headers: {Authorization: 'Bearer ' + token}});
      if (!r.ok) throw Error('Spotify HTTP ' + r.status);
      return r.json();
    };
    const me = await get('https://api.spotify.com/v1/me');
    out.accountId = me.id;
    if (me.id !== '11124659869') throw Error('Ander account dan delivery receipt');
    const url = 'https://api.spotify.com/v1/playlists/' + id;
    const before = await get(url);
    out.playlist = {id: before.id, ownerId: before.owner?.id, name: before.name, public: before.public};
    if (before.id !== id || before.owner?.id !== '11124659869') throw Error('Playlistidentiteit wijkt af');
    let next = url + '/items?limit=10&offset=0', total;
    const seen = new Set(), rows = [], pages = [];
    while (next) {
      if (seen.has(next) || seen.size >= 100) throw Error('Onveilige paginering');
      seen.add(next);
      const page = await get(next);
      if (!Array.isArray(page.items) || page.offset !== rows.length ||
          !Number.isInteger(page.total) || (total !== undefined && page.total !== total))
        throw Error('Onvolledige of veranderde paginering');
      total = page.total;
      pages.push({offset: page.offset, count: page.items.length, total});
      for (const row of page.items) {
        const t = row.item ?? row.track;
        rows.push({position: rows.length + 1, uri: t?.uri ?? null,
          linkedFrom: t?.linked_from?.uri ?? null, type: t?.type ?? null, isLocal: row.is_local ?? null});
      }
      next = page.next;
    }
    const after = await get(url);
    if (!before.snapshot_id || before.snapshot_id !== after.snapshot_id) throw Error('Playlist gewijzigd tijdens uitlezing');
    if (rows.length !== total) throw Error('Aantal onvolledig');
    out.pages = pages; out.count = rows.length; out.tracks = rows; out.snapshotId = after.snapshot_id;
    out.exactOrderedUriMatch = rows.length === expected.length && rows.every((t,i) => t.uri === expected[i]);
    out.differences = Array.from({length: Math.max(rows.length, expected.length)}, (_,i) => ({
      position: i+1, expected: expected[i] ?? null, actual: rows[i]?.uri ?? null
    })).filter(x => x.expected !== x.actual);
    out.status = out.exactOrderedUriMatch ? 'MATCH' : 'DIFFERENT';
  } catch (e) { out.reason = e instanceof Error ? e.message : 'Leesproef afgebroken'; }
  console.log('Music DNA W44 read-only', JSON.stringify(out, null, 2));
})();
```

## Als bestaande toegang ontbreekt of Spotify weigert

- **Geen access token / HTTP 401:** eerst de oorspronkelijke gekoppelde tab/browser gebruiken. Als daar ook geen geldig access token beschikbaar is, is onder de huidige grens (geen OAuth-mutaties) geen verdere API-proef mogelijk. Een refresh is een tokenhandeling en daarom niet stilzwijgend uitgevoerd.
- **Minimale nieuwe autorisatie indien werkelijk nodig:** een afzonderlijke, vooraf reviewbare PKCE-leesroute voor de bestaande app voorbereiden, zonder cadeaureturn, alleen `playlist-read-private`, inloggen als bestaande eigenaar `11124659869`, en Ben éénmaal Spotify's toestemmingsscherm laten goedkeuren. Geen playlist-modify, playback, upload, e-mail of profiel-privérechten vragen. PKCE vereist geen client secret. De huidige callback niet hergebruiken voor dit doel zonder isolatie: hij bewaart tokens en keert terug naar een cadeaupagina. Deze leesroute bestaat nu niet; toestemming en implementatie zijn nog geen uitgevoerd feit.
- **HTTP 403:** niet automatisch bredere scopes aanvragen. Eerst eigenaar/collaborator en bestaande app-toegang controleren. De actuele `/items`-documentatie beperkt uitlezing tot eigenaar of collaborator, ook bij een openbare playlist. Een verkeerde accountlogin is dus geen reden om schrijfrechten toe te voegen. Eventuele development-mode-toelating pas bespreken wanneer Spotify die blokkade werkelijk aantoont.
- **HTTP 429:** stoppen; pas later volgens Retry-After opnieuw lezen. Geen OAuth-herkoppeling.

Na werkende toegang: metadata en alle pagina's (10/10/1 bij 21 items), account/eigenaar, snapshots voor/na, exacte URI-volgorde en relinking vastleggen. Relinked URI's niet stilzwijgend als exacte match behandelen. Null/lokale items en ontbrekende pagina's niet overslaan. Vergelijkingsbron: [#22 delivery receipt op vaste head](https://github.com/bcim1958/bens-music-dna/blob/5efb2258fb0a428a6d760238565605c2d9fe31da/docs/w44-2026-44/DELIVERY-2026-10-31.json), live uit GitHub gelezen en via git op dezelfde commit bevestigd: 21 posities, 21 URI's. Geen huidige match-/verschiluitkomst beschikbaar.

## Actuele primaire documentatie

Geraadpleegd op 2 november 2026: [Get Playlist Items](https://developer.spotify.com/documentation/web-api/reference/get-playlists-items) (`GET /playlists/{id}/items`, scope `playlist-read-private`, eigenaar/collaborator, paginering); [PKCE](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow). De oudere `/tracks`-route is deprecated; het nieuwe schema gebruikt `item` (snippet accepteert ook historische `track`).

Geen playlist-, ratings-, ledger-, OAuth-, runtime- of publicatiemutaties. Geen refresh of autorisatie gestart. Alleen dit onderzoeksverslag en een statusverwijzing gewijzigd; geen merge/deployment. Geen claim over audioflow, mappen of herstelbaarheid.
