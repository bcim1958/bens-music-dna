// DNA EXPRESS-MAKER — visual/editorial layer v2
// Adds magazine rhythm without inventing Band-DNA house styles.
(function(){
  const css = `
  .page{background-color:var(--paper);background-image:radial-gradient(#1111 .65px,transparent .8px),linear-gradient(#f4ecdbee,#e8dcc5ee);background-size:5px 5px,100% 100%}
  #cover:after{content:'EDITIE NUL';position:absolute;right:-32px;top:43%;transform:rotate(90deg);font:900 14px Arial,sans-serif;letter-spacing:.2em;color:#1118}
  .mast{position:relative}.mast:after{content:'';display:block;height:8px;background:var(--red);margin-top:18px;width:34%}
  .hero{isolation:isolate;border:1px solid #000}.hero:after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 76% 28%,#d9e45d22 0 1px,transparent 1.8px);background-size:8px 8px;mix-blend-mode:screen;opacity:.72}
  .pressline{display:grid;grid-template-columns:1.35fr repeat(3,1fr);gap:2px;background:#111;margin:0 0 28px}.pressline>div{background:#efe3cd;padding:14px 16px}.pressline b{display:block;font:900 16px Arial,sans-serif;text-transform:uppercase}.pressline span{font-size:14px;line-height:1.2}
  .sectionFlag{display:inline-block;background:#111;color:#fff;padding:8px 11px;margin-bottom:18px;font:900 12px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;transform:rotate(-1deg)}
  .article p:first-of-type:first-letter{float:left;font:900 3.25em/.78 Arial,sans-serif;color:var(--red);padding:.08em .08em 0 0}
  .reviewRail{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:34px 0 12px}.reviewCard{background:#151515;color:#fff;padding:18px;min-height:150px;position:relative}.reviewCard:before{content:'PRESS';font:900 10px Arial,sans-serif;letter-spacing:.16em;color:#d9e45d}.reviewCard b{display:block;font:900 18px Arial,sans-serif;margin:10px 0 8px}.reviewCard p{font-size:15px;line-height:1.32;margin:0;color:#eee}.reviewCard:nth-child(2){transform:rotate(.7deg)}.reviewCard:nth-child(3){transform:rotate(-.6deg)}
  .timeline{display:grid;grid-template-columns:130px 1fr;gap:0 18px;margin:30px 0;max-width:760px}.timeline .date{font:900 24px Arial,sans-serif;color:var(--red);border-top:2px solid #111;padding:15px 0}.timeline .event{border-top:2px solid #111;padding:15px 0;font-size:19px;line-height:1.35}.timeline .event b{font-family:Arial,sans-serif}
  .desk:before{content:'RADAR';grid-column:1/-1;font:900 clamp(70px,12vw,150px)/.7 Arial,sans-serif;letter-spacing:-.07em;color:#1110;-webkit-text-stroke:2px #1112;margin-bottom:-20px}
  #live .item:nth-child(odd){background:#fff5;padding-left:10px;padding-right:10px}.liveStamp{display:inline-block;margin:0 0 24px;padding:10px 12px;border:3px solid var(--red);font:900 16px Arial,sans-serif;color:var(--red);transform:rotate(-2deg)}
  #ontdek:after{content:'♦';position:absolute;right:-2%;bottom:-9%;font:900 42vw/1 Arial,sans-serif;color:#77e1d70b;pointer-events:none}.gem .article{position:relative;z-index:1}
  .editionFooter{margin-top:34px;border-top:4px solid currentColor;padding-top:12px;font:800 12px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;display:flex;justify-content:space-between;gap:12px}
  @media(max-width:700px){#cover:after{display:none}.mast:after{height:5px;margin-top:12px}.pressline{grid-template-columns:1fr 1fr}.pressline>div{padding:12px}.pressline span{font-size:13px}.reviewRail{grid-template-columns:1fr}.reviewCard{min-height:0}.timeline{grid-template-columns:82px 1fr;gap:0 12px}.timeline .date{font-size:19px}.timeline .event{font-size:18px}.desk:before{font-size:23vw}.editionFooter{font-size:10px}}
  `;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const q=(s,c=document)=>c.querySelector(s);
  const make=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e};
  const cover=q('#cover .hero');
  if(cover){const p=make('div','pressline','<div><b>Coverstory</b><span>Green Lung · Necropolitan</span></div><div><b>Prog</b><span>Steven Wilson</span></div><div><b>Live!</b><span>Zeeland → Amsterdam</span></div><div><b>Zaterdag</b><span>21 nieuwe deuren</span></div>');cover.insertAdjacentElement('afterend',p)}
  ['greenlung','wilson','desks','live','ontdek'].forEach(id=>{const sec=q('#'+id);const kicker=sec&&q('.kicker',sec);if(kicker){const f=make('span','sectionFlag',id==='desks'?'Redactieradar':id==='ontdek'?'Zaterdagcadeau':id==='live'?'Persoonlijke concertwereld':'Uit de redactie');kicker.insertAdjacentElement('afterend',f)}});
  const gl=q('#greenlung .article');
  if(gl){const rail=make('div','reviewRail','<div class="reviewCard"><b>ROCKPORTAAL</b><p>Seventies-hardrock, stoner en doom: de Nederlandse blik op dezelfde oude Britse bloedlijn.</p></div><div class="reviewCard"><b>ARROW LORDS OF METAL</b><p>Uriah Heep, Deep Purple, Alice Cooper, Ghost en Sabbath komen samen in één herkenbaar referentiekader.</p></div><div class="reviewCard"><b>KERRANG! / LOUDER</b><p>De internationale pers legt meer nadruk op schaal, songs en de ambitie achter Necropolitan.</p></div>');gl.insertAdjacentElement('afterend',rail)}
  const sw=q('#wilson .article');
  if(sw){const tl=make('div','timeline','<div class="date">8 SEP</div><div class="event"><b>De deur gaat op een kier.</b><br>De mysterieuze Requiem For A Village-aanloop verschijnt.</div><div class="date">11 SEP</div><div class="event"><b>De wereld krijgt een naam.</b><br>Het nieuwe soloalbum wordt officieel aangekondigd.</div><div class="date">ARCHIEF</div><div class="event"><b>Waarom dat ertoe doet.</b><br>De terugblik op de vroege solojaren geeft context aan de nieuwe stap.</div>');sw.insertAdjacentElement('afterend',tl)}
  const live=q('#live .title');if(live)live.insertAdjacentElement('afterend',make('div','liveStamp','MIJN CONCERTEN · MIJN REGIO · MIJN VOORPRET'));
  document.querySelectorAll('.page').forEach((p,i)=>{if(!q('.editionFooter',p)){p.appendChild(make('div','editionFooter','<span>DNA EXPRESS-MAKER · EDITIE NUL</span><span>'+(String(i+1).padStart(2,'0'))+'</span>'))}});
})();
