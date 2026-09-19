(function(){
  var VERSION=3;
  function vals(x){return (x||[]).map(function(v){return String(v).toLowerCase()})}
  function family(t){
    var a=vals((t.styles||[]).concat(t.dnaRoute||[])).join(' '),f=[];
    function hit(n,re){if(re.test(a))f.push(n)}
    hit('hardrock',/hard ?rock|album rock|arena rock|hair metal|aor|glam|sleaze/);
    hit('prog',/prog|progressive/);hit('metal',/metal|heavy/);
    hit('punk',/punk|power pop|proto-punk|post-punk/);
    hit('dark',/goth|dark|occult|post-punk|darkwave/);
    hit('psych',/psychedel|stoner/);hit('blues',/blues|southern/);
    hit('garage',/garage/);hit('indie',/indie|alternative/);
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
    if(/punk|power pop|hard ?rock|arena rock|hair metal|heavy metal|thrash|glam|sleaze/.test(x))e+=1;
    if(/doom|ambient|slowcore|darkwave|post-punk/.test(x))e-=1;
    return Math.max(1,Math.min(3,e));
  }
  function quality(t){return t.rating==='raak'?2:t.rating==='goed'?1:0}
  function has(t,n){return family(t).indexOf(n)!==-1}
  function flowTarget(pos,total){
    var p=total<2?0:pos/(total-1);
    // Flow-DNA Reference 001/002: direct energetic opening, hold it,
    // broaden in the middle, then allow a distinct destination.
    if(p<.52)return 3;
    if(p<.76)return 2.7;
    if(p<.90)return 2.5;
    return 2.0;
  }
  function sequence(rows){
    rows=(rows||[]).slice();if(rows.length<2)return rows;
    var remaining=rows.slice(),ordered=[];
    remaining.sort(function(a,b){
      var as=quality(a)*2+energy(a)+(has(a,'hardrock')?1.1:0),
          bs=quality(b)*2+energy(b)+(has(b,'hardrock')?1.1:0);
      return bs-as;
    });
    ordered.push(remaining.shift());
    while(remaining.length){
      var pos=ordered.length,target=flowTarget(pos,rows.length),best=0,bestScore=-999;
      for(var i=0;i<remaining.length;i++){
        var r=remaining[i],phase=pos/(rows.length-1),
            score=transition(ordered[ordered.length-1],r)-Math.abs(energy(r)-target)*1.15;
        if(phase<.52&&has(r,'hardrock'))score+=.55;
        if(phase>=.52&&phase<.9&&(has(r,'blues')||has(r,'garage')||has(r,'punk')||has(r,'psych')||has(r,'indie')))score+=.35;
        if(phase>=.9){
          if(has(r,'dark')||has(r,'psych')||has(r,'prog'))score+=1.35;
          if(has(r,'hardrock')&&!has(r,'dark'))score-=.65;
          score+=quality(r)*.35;
        }
        if(pos>2){
          var f1=family(ordered[pos-1]),f2=family(ordered[pos-2]),f3=family(ordered[pos-3]),fr=family(r);
          if(fr.length&&overlap(fr,f1)&&overlap(fr,f2)&&overlap(fr,f3))score-=.55;
        }
        if(score>bestScore){bestScore=score;best=i}
      }
      ordered.push(remaining.splice(best,1)[0]);
    }
    return ordered;
  }
  window.MUSIC_DNA_SEQUENCER={version:VERSION,sequence:sequence,transitionScore:transition,energyScore:energy,flowTarget:flowTarget,profile:'W36-W38 energetic-opening-destination-v1'};
})();