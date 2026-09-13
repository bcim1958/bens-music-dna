// DNA EXPRESS-MAKER — Editie NUL (W37)
// Retrospective reconstruction of the issue that could have landed on 2026-09-12.
// Editorial cutoff is strict: no source published after 2026-09-12 may determine issue selection.
// This is an app-serving editorial layer; it does not replace the Music DNA Master.

window.DNA_EXPRESS_MAKER_EDITIE_NUL = {
  version: 1,
  issue: {
    id: '2026-NUL',
    week: '2026-W37',
    publicationDate: '2026-09-12',
    editorialCutoff: '2026-09-12T23:59:59+02:00',
    masthead: 'DNA EXPRESS-MAKER',
    strapline: 'The personal music weekly · powered by Music DNA',
    priceLine: 'PRICE: 21 RATINGS',
    status: 'EDITORIAL PROOF'
  },
  editorialRules: {
    combineSameArtistSignals: true,
    noCommercialAdvertising: true,
    internationalSourcesSummarizedInDutch: true,
    sourceOpinionSeparatedFromFact: true,
    officialMuziekmeterRatingsPerWeek: 21,
    reserveExcludedFromMuziekmeter: true,
    weeklyOntdekDnaSize: 21,
    bandDnaVisuals: 'REUSE_EXISTING_ONLY',
    ontdekDnaVisuals: 'EDELSTENENKABINET_PALETTE'
  },
  sections: [
    {
      id: 'green-lung',
      kind: 'coverstory',
      world: ['Classic Heavy Metal','Hard Rock & AOR'],
      title: 'GREEN LUNG',
      headline: 'Een nieuwe plaat met oude geesten',
      standfirst: 'Necropolitan verscheen op 11 september. Niet alleen de zwaarte maakt dit Music-DNA-materiaal, maar juist de Britse seventies-wortels en de deuren richting Sabbath, Deep Purple, Uriah Heep en vroege Ghost.',
      angle: 'Meerdere recensenten horen dezelfde oude Britse bloedlijn, maar leggen andere accenten. EXPRESS-MAKER maakt daarvan één verhaal in plaats van een stapel losse links.',
      relevance: ['Uriah Heep','Deep Purple','Ghost','Classic Heavy Metal','Hard Rock'],
      sourceRefs: ['greenlung-rockportaal','greenlung-arrow','greenlung-kerrang','greenlung-louder','greenlung-devolution','greenlung-metalhammer-de']
    },
    {
      id: 'steven-wilson',
      kind: 'feature',
      world: ['Prog & Art Rock'],
      title: 'STEVEN WILSON',
      headline: 'Verleden, heden en de volgende zet',
      standfirst: 'Een mysterieuze Requiem For A Village-aanloop, de albumonthulling en een terugblik op de riskante eerste solotour horen in één redactionele lijn.',
      angle: 'Niet drie Wilson-berichtjes, maar één verhaal over hoe een artiest een nieuwe wereld opent terwijl zijn verleden de inzet ervan verklaart.',
      relevance: ['Prog & Art Rock','Steven Wilson'],
      sourceRefs: ['wilson-teaser','wilson-official']
    },
    {
      id: 'prog-desk',
      kind: 'desk',
      world: ['Prog & Art Rock'],
      title: 'PROG & ART ROCK — OP DE REDACTIETAFEL',
      items: [
        {artist:'Jethro Tull',title:'J-Tull Dot Com: Another Cast of the Net',note:'Bruce Soord-remix en heruitgave: precies het soort oude plaat dat door een nieuwe luisterlaag opnieuw interessant wordt.',sourceRefs:['tull-progwereld']},
        {artist:'Albion',title:'Live in Alphen aan den Rijn',note:'Folk/prog met onverwachte dwarsverbindingen; bruikbaar als zijdeur, niet als automatische smaakclaim.',sourceRefs:['albion-progwereld']}
      ]
    },
    {
      id: 'hard-heavy-desk',
      kind: 'desk',
      world: ['Classic Heavy Metal','Hard Rock & AOR','Hair Metal'],
      title: 'HARD & HEAVY — NIEUW OP DE REDACTIETAFEL',
      items: [
        {artist:'Tygers Of Pan Tang',title:'Electrifyed',note:'Nieuwe plaat op 11 september; een mooi geval om lovende en gematigder recensies naast elkaar te leggen.',sourceRefs:['tygers-official','tygers-metalde']},
        {artist:'Europe',title:'Scandinavian Eyes',note:'Nieuwe single met een hoorbare klassieke hardrocklijn; relevant zonder te doen alsof herkenning hetzelfde is als RAAK.',sourceRefs:['tracks-louder','europe-dansendeberen']},
        {artist:'Airbourne',title:'Kid In A Candy Store',note:'Een directe hardrock-kandidaat uit dezelfde weekselectie.',sourceRefs:['tracks-louder']},
        {artist:'Sweet Electric',title:'Something Something Disco',note:'Retro hardrock, glam en sleaze met punkhouding: meerdere Music-DNA-deuren tegelijk.',sourceRefs:['sweetelectric-rockportaal']}
      ]
    },
    {
      id: 'live',
      kind: 'live',
      title: 'LIVE! — JOUW CONCERTWERELD',
      groups: [
        {title:'MIJN CONCERTEN',items:[
          {date:'2026-09-26',artist:'Up The Irons',venue:"Podium 't Beest",city:'Goes',why:'Iron Maiden Band DNA · dichtbij huis · Somewhere in Time 40th Anniversary-concept'},
          {date:'2026-11-06',artist:'KISS Forever Band',venue:'Podium De Piek',city:'Vlissingen',why:'KISS Band DNA · tribute · lokaal'},
          {date:'2027-02-23',artist:'RUSH',venue:'Ziggo Dome',city:'Amsterdam',why:'Rush Band DNA · persoonlijk lopend dossier'},
          {date:'2027-04-23',artist:'Thirty Seconds to Mars',venue:'Lotto Arena',city:'Antwerpen',why:'Voorpret als redactionele relevantie, los van de smaakscore'}
        ]},
        {title:'DICHT BIJ HUIS',note:'Wekelijkse radar voor Vlissingen, Middelburg, Goes, Zierikzee, Terneuzen en Bergen op Zoom. Goede cover- en tributebands tellen volwaardig mee.'},
        {title:'DE REIS WAARD',note:'Alleen shows die muzikaal of persoonlijk genoeg gewicht hebben om de afstand te rechtvaardigen.'}
      ]
    },
    {
      id: 'ontdek-dna',
      kind: 'ontdek',
      title: 'ONTDEK DNA #2026-37',
      headline: '21 tracks. Geen eindpunt — 21 deuren.',
      note: 'De uiteindelijke 21-track Spotify-playlist is het zaterdagcadeau. De officiële 21 beoordelingen en de uiteindelijke playlist zijn twee verschillende lagen en worden niet door elkaar gehaald.'
    },
    {
      id: 'assignment',
      kind: 'assignment',
      title: 'OPDRACHT AAN DE REDACTIE',
      prompt: 'Waar zullen we volgende week eens écht induiken?',
      choices: ['RUSH','IRON MAIDEN','KISS','STEVEN WILSON'],
      customChoice: true,
      signalType: 'editorial-curiosity',
      explicitlyNotTasteRating: true
    }
  ],
  sources: {
    'greenlung-rockportaal':{publication:'Rockportaal',date:'2026-09-11',url:'https://www.rockportaal.nl/green-lung-necropolitan/'},
    'greenlung-arrow':{publication:'Arrow Lords of Metal',date:'2026-09-05',url:'https://arrowlordsofmetal.nl/green-lung-necropolitan/'},
    'greenlung-kerrang':{publication:'Kerrang!',date:'2026-09-10',url:'https://www.kerrang.com/album-review-green-lung-necropolitan'},
    'greenlung-louder':{publication:'Metal Hammer / Louder',date:'2026-09-09',url:'https://www.loudersound.com/music/albums/british-heavy-metal-is-alive-well-and-out-of-its-mind-britains-answer-to-ghost-new-green-lung-album-necropolitan-is-packing-massive-riffs-occult-themes-and-killer-choruses'},
    'greenlung-devolution':{publication:'Devolution',date:'2026-09-11',url:'https://devolutionmagazine.co.uk/2026/09/11/review-green-lung-necropolitan/'},
    'greenlung-metalhammer-de':{publication:'Metal Hammer DE',date:'2026-09-11',url:'https://www.metal-hammer.de/reviews/green-lung-necropolitan/'},
    'wilson-teaser':{publication:'Louder',date:'2026-09-08',url:'https://www.loudersound.com/music/albums/steven-wilson-launches-requiem-for-a-village-website-and-shares-video-trailer'},
    'wilson-official':{publication:'Steven Wilson',date:'2026-09-11',url:'https://news.stevenwilsonhq.com/p/requiem-for-a-village-new-album-out'},
    'tull-progwereld':{publication:'Progwereld',date:'2026-09-08',url:'https://www.progwereld.org/recensie/jethro-tull-j-tull-dot-com-another-cast-of-the-net/'},
    'albion-progwereld':{publication:'Progwereld',date:'2026-09-08',url:'https://www.progwereld.org/recensie/albion-04-09-2026-parkvilla-theater-alphen-aan-den-rijn/'},
    'tygers-official':{publication:'Tygers Of Pan Tang',date:'2026-09-11',url:'https://www.tygersofpantang.com/official/news.html'},
    'tygers-metalde':{publication:'metal.de',date:'2026-09-04',url:'https://www.metal.de/reviews/tygers-of-pan-tang-electrifyed-628590/'},
    'tracks-louder':{publication:'Classic Rock / Louder',date:'2026-09-07',url:'https://www.loudersound.com/music/tracks-singles/classic-rock-tracks-of-the-week-september-7-2026'},
    'europe-dansendeberen':{publication:'Dansende Beren',date:'2026-09-06',url:'https://www.dansendeberen.be/2026/09/06/nieuwe-single-europe-scandinavian-eyes/'},
    'sweetelectric-rockportaal':{publication:'Rockportaal',date:'2026-09-10',url:'https://www.rockportaal.nl/sweet-electric-something-something-disco/'}
  }
};
