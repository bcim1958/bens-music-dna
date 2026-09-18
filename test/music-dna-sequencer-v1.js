(function(){
  var VERSION=1;
  function vals(x){return (x||[]).map(function(v){return String(v).toLowerCase()})}
  function family(t){
    var a=vals((t.styles||[]).concat(t.dnaRoute||[])).join(' '),f=[];
    function hit(n,re){if(re.test(a))f.push(n)}
    hit('hardrock',/hard ?rock|album rock|arena rock|hair metal|aor/);hit('prog',/prog|progressive/);hit('metal',/metal|heavy/);hit('punk',/punk|power pop|proto-punk|post-punk/);hit('dark',/goth|dark|occult/);hit('psych',/psychedel|stoner/);hit('blues',/blues|southern/);
    return f;
  }
  function overlap(a,b){var x={},n=0;(a||[]).forEach(function(v){x[v]=1});(b||[]).forEach(function(v){if(x[v])n++});return n}
  function transition(a,b){
    var af=family(a),bf=family(b),s=overlap(af,bf)*3+overlap(vals(a.styles),vals(b.styles))*1.2+overlap(vals(a.dnaRoute),vals(b.dnaRoute))*1.5;
    if(a.artist&&b.artist&&a.artist===b.artist)s-=8;
    if(a.country&&b.country&&a.country===b.country)s+=.25;
    return s;
  }
  function energy(t){
    var x=vals((t.styles||[]).concat(t.dnaRoute||[])).join(' '),e=2;
    if(/punk|power pop|hard ?rock|arena rock|hair metal|heavy metal|thrash/.test(x))e+=1;
    if(/doom|ambient|slowcore/.test(x))e-=1;
    return e;
  }
  function quality(t){return t.rating==='raak'?2:t.rating==='goed'?1:0}
  function sequence(rows){
    rows=(rows||[]).slice();if(rows.length<2)return rows;
    var remaining=rows.slice(),ordered=[];
    remaining.sort(function(a,b){return (quality(b)*2+energy(b))-(quality(a)*2+energy(a))});
    ordered.push(remaining.shift());
    while(remaining.length){
      var pos=ordered.length,phase=pos/(rows.length-1),target=phase<.2?3:phase<.72?2.4:3.1,best=0,bestScore=-999;
      for(var i=0;i<remaining.length;i++){
        var r=remaining[i],score=transition(ordered[ordered.length-1],r)-Math.abs(energy(r)-target)*.8;
        if(pos===rows.length-1)score+=quality(r)*1.3+energy(r)*.7;
        if(pos>1&&family(ordered[pos-1])[0]&&family(ordered[pos-2])[0]&&family(r)[0]===family(ordered[pos-1])[0]&&family(r)[0]===family(ordered[pos-2])[0])score-=2;
        if(score>bestScore){bestScore=score;best=i}
      }
      ordered.push(remaining.splice(best,1)[0]);
    }
    return ordered;
  }
  window.MUSIC_DNA_SEQUENCER={version:VERSION,sequence:sequence,transitionScore:transition,energyScore:energy};
})();