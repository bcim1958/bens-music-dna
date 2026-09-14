// DNA EXPRESS-MAKER — magazine browsing navigation v1
// One-tap chapter jumps + return to exact previous reading position.
(function(){
  if (window.__DNA_EXPRESS_NAV_V1__) return;
  window.__DNA_EXPRESS_NAV_V1__ = true;

  const chapters = [
    ['week','MIJN WEEK'],
    ['greenlung','GREEN LUNG'],
    ['wilson','STEVEN WILSON'],
    ['desks','HARD & HEAVY'],
    ['bandradar','BAND / GENRE DNA'],
    ['live','LIVE!'],
    ['history','FLASHBACK · U2'],
    ['dieptebom','💣 DIEPTEBOM — geen spoilers'],
    ['ontdek','💎 EDELSTENENKABINET'],
    ['opdracht','OPDRACHT AAN DE REDACTIE']
  ].filter(([id])=>document.getElementById(id));

  const css = `
  :root{--em-nav-paper:#eee4cf;--em-nav-ink:#14120f;--em-nav-red:#b82b27}
  .emNavTab,.emReturnTab{position:fixed;z-index:9998;right:18px;border:0;cursor:pointer;font:900 12px/1 Arial,sans-serif;letter-spacing:.09em;text-transform:uppercase;box-shadow:0 8px 28px #0005}
  .emNavTab{top:50%;transform:translateY(-50%) rotate(-90deg) translateY(44px);transform-origin:center;background:var(--em-nav-red);color:#fff;padding:13px 18px}
  .emReturnTab{right:auto;left:18px;bottom:18px;background:#111;color:#fff;padding:13px 16px;display:none}
  .emReturnTab.show{display:block}
  .emTocShade{position:fixed;inset:0;background:#000b;z-index:9999;opacity:0;pointer-events:none;transition:opacity .18s ease}
  .emTocShade.open{opacity:1;pointer-events:auto}
  .emToc{position:fixed;z-index:10000;inset:0 0 0 auto;width:min(520px,92vw);background:var(--em-nav-paper);color:var(--em-nav-ink);transform:translateX(102%);transition:transform .22s ease;box-shadow:-28px 0 70px #0009;padding:28px clamp(22px,4vw,48px) 34px;overflow:auto;background-image:radial-gradient(#1111 .65px,transparent .8px),linear-gradient(#f4ecdbee,#e8dcc5ee);background-size:5px 5px,100% 100%}
  .emToc.open{transform:translateX(0)}
  .emTocHead{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;border-bottom:8px solid #111;padding-bottom:16px;margin-bottom:10px}
  .emTocHead b{font:900 clamp(36px,7vw,64px)/.82 Arial,sans-serif;letter-spacing:-.055em}
  .emTocClose{border:0;background:#111;color:#fff;width:44px;height:44px;font:900 24px Arial,sans-serif;cursor:pointer}
  .emTocSub{font:800 11px/1.35 Arial,sans-serif;letter-spacing:.11em;text-transform:uppercase;margin:10px 0 22px;color:#4b4740}
  .emTocList{display:grid;gap:0}
  .emTocItem{appearance:none;border:0;border-top:2px solid #171717;background:transparent;color:inherit;text-align:left;padding:17px 2px 18px;cursor:pointer;font:900 clamp(20px,2vw,28px)/1 Arial,sans-serif;text-transform:uppercase;display:flex;justify-content:space-between;gap:18px}
  .emTocItem:hover,.emTocItem:focus{background:#111;color:#fff;padding-left:12px;padding-right:12px;outline:0}
  .emTocItem small{font:800 10px Arial,sans-serif;letter-spacing:.08em;opacity:.55;white-space:nowrap;margin-top:4px}
  .emTocNote{margin-top:22px;border-top:1px solid #111;padding-top:14px;font:700 13px/1.45 Georgia,serif}
  .emJumpFlash{animation:emJumpFlash .9s ease}
  @keyframes emJumpFlash{0%{box-shadow:inset 0 0 0 9999px #d5e44a18}100%{box-shadow:inset 0 0 0 9999px transparent}}
  @media(max-width:700px){
    .emNavTab{right:8px;top:auto;bottom:calc(72px + env(safe-area-inset-bottom));transform:none;border-radius:999px;padding:12px 15px;letter-spacing:.06em}
    .emReturnTab{left:8px;bottom:calc(72px + env(safe-area-inset-bottom));border-radius:999px;padding:12px 14px}
    .emToc{width:100vw;padding-top:max(24px,env(safe-area-inset-top))}.emTocItem{font-size:22px}.emTocHead b{font-size:48px}
  }
  `;
  const st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  let returnY = null;
  let lastJumpId = null;

  const tab=document.createElement('button');
  tab.className='emNavTab'; tab.type='button'; tab.textContent='INHOUD'; tab.setAttribute('aria-label','Open inhoudsopgave');

  const ret=document.createElement('button');
  ret.className='emReturnTab'; ret.type='button'; ret.textContent='← TERUG'; ret.setAttribute('aria-label','Terug naar vorige leespositie');

  const shade=document.createElement('div'); shade.className='emTocShade';
  const toc=document.createElement('aside'); toc.className='emToc'; toc.setAttribute('aria-label','Inhoudsopgave');
  toc.innerHTML='<div class="emTocHead"><b>INHOUD</b><button class="emTocClose" type="button" aria-label="Sluit inhoud">×</button></div><div class="emTocSub">Sla direct open waar jij wilt. De editie onthoudt waar je vandaan kwam.</div><div class="emTocList"></div><div class="emTocNote">EXPRESS-MAKER leest niet verplicht van voor naar achter. Bladeren, vooruit springen en terugkeren hoort bij het tijdschrift.</div>';
  const list=toc.querySelector('.emTocList');

  chapters.forEach(([id,label],i)=>{
    const b=document.createElement('button'); b.type='button'; b.className='emTocItem';
    b.innerHTML='<span>'+label+'</span><small>'+(String(i+1).padStart(2,'0'))+'</small>';
    b.addEventListener('click',()=>jumpTo(id)); list.appendChild(b);
  });

  function openToc(){ toc.classList.add('open'); shade.classList.add('open'); document.documentElement.style.overflow='hidden'; }
  function closeToc(){ toc.classList.remove('open'); shade.classList.remove('open'); document.documentElement.style.overflow=''; }
  function jumpTo(id){
    const target=document.getElementById(id); if(!target) return;
    returnY=window.scrollY; lastJumpId=id; closeToc();
    target.scrollIntoView({behavior:'smooth',block:'start'});
    ret.classList.add('show');
    setTimeout(()=>{target.classList.add('emJumpFlash');setTimeout(()=>target.classList.remove('emJumpFlash'),950)},350);
  }
  function goBack(){
    if(returnY===null) return;
    const y=returnY; returnY=null; lastJumpId=null; ret.classList.remove('show');
    window.scrollTo({top:y,behavior:'smooth'});
  }

  tab.addEventListener('click',openToc); ret.addEventListener('click',goBack);
  shade.addEventListener('click',closeToc); toc.querySelector('.emTocClose').addEventListener('click',closeToc);
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeToc();});

  // Existing in-article / contents anchor links get the same magazine return behaviour.
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]'); if(!a || a.classList.contains('top')) return;
    const href=a.getAttribute('href'); if(!href || href==='#') return;
    const target=document.querySelector(href); if(!target) return;
    e.preventDefault(); returnY=window.scrollY; lastJumpId=href.slice(1);
    target.scrollIntoView({behavior:'smooth',block:'start'}); ret.classList.add('show');
  });

  document.body.appendChild(tab); document.body.appendChild(ret); document.body.appendChild(shade); document.body.appendChild(toc);
})();
