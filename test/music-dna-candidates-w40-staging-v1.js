// W40 production-shape builder. Load data-1, data-2, data-3 before this file.
(function(){
  var rows=window.MUSIC_DNA_W40_ROWS||[],tracks={};
  rows.forEach(function(r){
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
      source:{master:'1.8-v3',reservoir:'w40-master-reservoir-v1'}
    };
  });
  window.MUSIC_DNA_W40_CANDIDATES={tracks:tracks};
})();