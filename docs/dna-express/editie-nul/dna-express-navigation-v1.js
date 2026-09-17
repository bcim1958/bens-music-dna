/* DNA EXPRESS — navigation v1 — 17 Sep 2026
   Progressive enhancement for the production carrier.
   Principles: reading stays primary; side paths never lose reading position;
   categories expose only DNA EXPRESS-published material. */
(() => {
  const ROUTE = [
    ['Camden',1],['West Norwood',2],['Drie albums',3],['Magnificent Seven',4],
    ['Necropolis Railway',5],['Rockfield',6],['Necropolitan',7],['Artwork',8],['Roundhouse',9]
  ];
  const INDEX = {
    MUZIEK:[
      ['Green Lung','Coverstory · Necropolitan',1],
      ['Woodland Rites','Green Lung · album',2],
      ['Black Harvest','Green Lung · album',3],
      ['This Heathen Land','Green Lung · album',3],
      ['Necropolitan','Green Lung · album',7]
    ],
    VERHALEN:[['Green Lung — De stad van de doden','Coverstory · 9 bladen',1]],
    MENSEN:[
      ['Green Lung','Band · coverstory',1],['Tom K. Templar','Green Lung · zang',1],
      ['Scott Black','Green Lung · gitaar',1],['Richard Wells','Illustratie / vormwereld',2],
      ['Tom Dalgety','Producer · Necropolitan',6]
    ],
    PLAATSEN:[
      ['Camden','Ontstaan Green Lung',1],['West Norwood Cemetery','Naam Green Lung',2],
      ['Magnificent Seven','Londense begraafplaatsen',4],['Waterloo / Brookwood','Necropolis Railway',5],
      ['Rockfield Studios','Opname Necropolitan',6],['Roundhouse, Camden','Tour / terugkeer',9]
    ]
  };
  let returnPage=1;
  const page=()=>document.querySelector('.page');
  const current=()=>Number(page()?.dataset.page||1);
  const go=n=>{
    const p=page(); if(!p)return;
    const v=Math.max(1,Math.min(9,Number(n)||1)); p.dataset.page=v;
    document.querySelector('[data-current]')?.replaceChildren(String(v).padStart(2,'0'));
    document.querySelector('[data-ph]')?.replaceChildren(String(v));
    document.querySelectorAll('.dna-route button').forEach(b=>b.classList.toggle('active',Number(b.dataset.go)===v));
  };
  const css=document.createElement('style');
  css.textContent=`
  .dna-route{position:fixed;z-index:30;left:50%;bottom:9px;transform:translateX(-50%);width:min(1180px,82vw);display:flex;align-items:center;background:#11140fee;border:1px solid #ffffff26;box-shadow:0 6px 30px #0008;backdrop-filter:blur(8px)}
  .dna-route button{position:relative;flex:1;min-width:0;border:0;background:none;color:#aaa;font:600 10px/1.1 Arial,sans-serif;padding:11px 5px 9px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .dna-route button:before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:#ffffff22}.dna-route button.active{color:#fff}.dna-route button.active:before{background:#7e9b72}
  .dna-drawer{position:fixed;z-index:50;inset:58px 0 0 auto;width:min(520px,92vw);background:#eeeadf;box-shadow:-20px 0 60px #0009;transform:translateX(105%);transition:.22s ease;padding:34px;overflow:auto}.dna-drawer.open{transform:none}.dna-drawer h2{font:700 32px/1 Georgia;margin:0 0 8px}.dna-drawer .sub{font:14px/1.4 Arial;color:#666;border-bottom:1px solid #bbb5a7;padding-bottom:18px;margin-bottom:8px}.dna-drawer button.item{display:block;width:100%;text-align:left;border:0;border-bottom:1px solid #c9c3b6;background:none;padding:15px 4px;cursor:pointer;font:700 17px/1.2 Georgia}.dna-drawer button.item small{display:block;margin-top:5px;font:12px/1.3 Arial;color:#666;font-weight:400}.dna-close{float:right;border:1px solid #aaa;background:none;width:32px;height:32px;cursor:pointer}.dna-backdrop{position:fixed;z-index:45;inset:58px 0 0;background:#0007;display:none}.dna-backdrop.open{display:block}
  .dna-entity{border-bottom:1px dotted currentColor;cursor:pointer}.dna-search{width:100%;font:18px Arial;padding:12px;border:1px solid #aaa;background:#fff;margin:8px 0 16px}
  @media(max-width:900px){.dna-route{width:92vw;overflow:auto}.dna-route button{min-width:92px}.dna-route button span{display:none}}
  `; document.head.appendChild(css);
  const route=document.createElement('nav'); route.className='dna-route'; route.setAttribute('aria-label','Route door Green Lung-coverstory');
  ROUTE.forEach(([label,n])=>{const b=document.createElement('button');b.dataset.go=n;b.title=label;b.innerHTML=`<span>${label}</span><b>${String(n).padStart(2,'0')}</b>`;b.onclick=()=>go(n);route.appendChild(b)}); document.body.appendChild(route);
  const backdrop=document.createElement('div');backdrop.className='dna-backdrop';document.body.appendChild(backdrop);
  const drawer=document.createElement('aside');drawer.className='dna-drawer';drawer.setAttribute('aria-label','DNA EXPRESS ontdeklaag');document.body.appendChild(drawer);
  const close=()=>{drawer.classList.remove('open');backdrop.classList.remove('open');go(returnPage)};backdrop.onclick=close;
  function openCategory(name){returnPage=current();const rows=INDEX[name]||[];drawer.innerHTML=`<button class="dna-close" aria-label="Sluiten">×</button><h2>${name}</h2><div class="sub">Alleen onderwerpen die in DNA EXPRESS zijn gepubliceerd. Sluiten brengt je terug naar blad ${returnPage}.</div>`+rows.map(([a,b,n])=>`<button class="item" data-jump="${n}">${a}<small>${b} · blad ${n}</small></button>`).join('');drawer.querySelector('.dna-close').onclick=close;drawer.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{drawer.classList.remove('open');backdrop.classList.remove('open');go(b.dataset.jump)});drawer.classList.add('open');backdrop.classList.add('open')}
  function openSearch(){returnPage=current();drawer.innerHTML='<button class="dna-close" aria-label="Sluiten">×</button><h2>Zoeken</h2><div class="sub">Zoek binnen de gepubliceerde wereld van DNA EXPRESS.</div><input class="dna-search" type="search" placeholder="Band, album, persoon of plaats…"><div data-results></div>';drawer.querySelector('.dna-close').onclick=close;const input=drawer.querySelector('input'),out=drawer.querySelector('[data-results]');const all=Object.entries(INDEX).flatMap(([cat,rows])=>rows.map(r=>[cat,...r]));input.oninput=()=>{const q=input.value.toLowerCase().trim();out.innerHTML=!q?'':all.filter(x=>x.slice(1,3).join(' ').toLowerCase().includes(q)).map(([cat,a,b,n])=>`<button class="item" data-jump="${n}">${a}<small>${cat} · ${b} · blad ${n}</small></button>`).join('');out.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{drawer.classList.remove('open');backdrop.classList.remove('open');go(b.dataset.jump)})};drawer.classList.add('open');backdrop.classList.add('open');setTimeout(()=>input.focus(),50)}
  document.querySelectorAll('.topbar .navitem').forEach(b=>b.onclick=()=>openCategory(b.textContent.trim()));
  const searchBtn=[...document.querySelectorAll('.topbar button')].find(b=>b.textContent.includes('⌕'));if(searchBtn)searchBtn.onclick=openSearch;
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('open'))close()});
  go(current());
})();