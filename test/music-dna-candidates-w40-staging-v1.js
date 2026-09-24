// W40 production-shape builder. Load data-1, data-2, data-3 before this file.
(function(){
  var rows=window.MUSIC_DNA_W40_ROWS||[],tracks={};
  function plausibleOriginalYear(year){ return Number.isInteger(year) && year>=1950 && year<=2026; }
  rows.forEach(function(r){
    if(!plausibleOriginalYear(r[3])) throw new Error('W40 invalid canonical release year: '+r[1]+' — '+r[2]+' ('+r[3]+')');
    var styles=r[7]||[],low=(styles.join(' ')+' '+(r[9]||'')).toLowerCase();
    var anchor=/hard rock|heavy metal|prog|arena rock|album rock|hair metal|glam rock|blues-rock|southern rock|stoner/.test(low);
    var route=styles.slice(0,3).map(function(x){return x.toLowerCase().replace('prog-rock','prog rock').replace('blues-rock','blues rock')});
    tracks[r[0]]={
      identity:{artist:r[1],title:r[2],releaseYear:r[3],albumOrRelease:r[4],country:r[5]},
      spotifyUrl:'https://open.spotify.com/track/'+r[6],
      discoverDNA:{dnaRoute:route,role:anchor?'anker':'avontuur'},
      taxonomy:{allMusicStyles:styles,allMusicMainGenre:r[8],allMusicMainStructure:r[9],classificationStatus:r[10]},
      selection:{baseScore:anchor?4.4:3.2},
      editorial:{whyForYou:anchor?'Een gerichte test vanuit je vertrouwde rock-DNA: '+route.slice(0,2).join(', ')+'.':'Een gecontroleerde zijstap vanuit je rock-DNA: '+route.slice(0,2).join(', ')+'; gekozen om de rand van je smaak te testen.'},
      source:{master:'1.8-v3',reservoir:'w40-master-reservoir-v1',releaseYearSemantics:'canonical-original-release-year-not-spotify-edition-year'}
    };
  });
  window.MUSIC_DNA_W40_CANDIDATES={tracks:tracks,releaseYearPolicy:{field:'identity.releaseYear',meaning:'canonical original release year of this recording/song version',forbid:'Spotify/reissue/remaster/compilation year when the recording is older',gate:'verify suspicious edition/title/year combinations before weekly delivery'}};
})();