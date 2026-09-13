// DNA EXPRESS-MAKER — widescreen reading layer v4
// Desktop: the screen is the magazine. Cover gets its own immersive editorial composition.
(function(){
 const css=`
 @media (min-width: 701px){
   html{font-size:20px} body{background:#0b0b0b}
   .issue{width:100%;max-width:none;margin:0;background:var(--paper);box-shadow:none;overflow:hidden}
   .page{width:100%;min-height:100vh;padding:clamp(42px,4.5vw,84px) clamp(52px,6.2vw,124px);display:flex;flex-direction:column}
   .page>*{position:relative;z-index:1}.page>.editionFooter{margin-top:auto!important;padding-top:14px}
   .meta{font-size:clamp(14px,1vw,18px)}.kicker{font-size:clamp(14px,1vw,18px)}
   .title{font-size:clamp(76px,7.8vw,140px);max-width:1550px}.bigquote{font-size:clamp(39px,3.7vw,66px);max-width:1220px;line-height:1.05}
   .article{max-width:980px}.article p{font-size:clamp(25px,1.62vw,31px);line-height:1.62;margin:0 0 1.05em}
   .contents{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px clamp(48px,5vw,100px);max-width:1580px}.item{grid-template-columns:88px minmax(0,1fr);padding:20px 0}.num{font-size:35px}.item b{font-size:clamp(24px,1.65vw,31px)}.item p{font-size:21px;line-height:1.42}
   .spread{grid-template-columns:minmax(0,1.04fr) minmax(0,.96fr);gap:clamp(64px,7vw,150px);align-items:start}.stats{gap:14px}.stat{padding:28px;font-size:20px}.stat b{font-size:52px}
   .storygrid{grid-template-columns:minmax(0,1.22fr) minmax(340px,.78fr);gap:clamp(50px,5vw,100px);max-width:1550px}.storybox{padding-top:18px}.storybox h3{font-size:36px}.storybox p{font-size:23px;line-height:1.52}
   .desk{grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}.card{padding:28px;min-height:220px}.card h3{font-size:32px}.card p{font-size:22px;line-height:1.5}
   .radarband{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.radarband div{padding:25px;min-height:175px}.radarband b{font-size:24px}.radarband span{font-size:19px;line-height:1.46}
   .featurePhoto{width:min(100%,1550px);margin:42px 0}.featurePhoto img{height:min(62vh,720px)}.radarPhotos{grid-template-columns:1.5fr .8fr;gap:20px}.radarPhoto{min-height:520px}
   .reviewRail{grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;max-width:1550px}.reviewCard{padding:28px;min-height:190px}.reviewCard b{font-size:24px}.reviewCard p{font-size:20px;line-height:1.48}
   .timeline{max-width:1120px;grid-template-columns:180px 1fr}.timeline .date{font-size:31px}.timeline .event{font-size:24px;line-height:1.48}
   .livePhoto{height:min(66vh,760px)}.liveManifesto{grid-template-columns:repeat(3,1fr)}.liveManifesto div{padding:28px}.liveManifesto b{font-size:23px}.liveManifesto span{font-size:20px;line-height:1.48}
   .gemstoneStrip{grid-template-columns:repeat(4,1fr);gap:18px;max-width:1550px}.stone{min-height:250px;padding:28px}.stone b{font-size:23px}.stone span{font-size:17px;line-height:1.42}
   .housead{padding:42px;max-width:1550px}.housead p{font-size:22px;line-height:1.45}.sources{max-width:1200px}.source,.btn{font-size:14px;padding:13px 15px}
   .nav{padding:14px 18px;gap:24px;font-size:15px}#inhoud,#live,#ontdek{padding-top:clamp(34px,3.4vw,64px)}
   #greenlung .featurePhoto,#wilson .featurePhoto,#live .livePhoto{margin-left:calc(-1 * clamp(52px,6.2vw,124px));margin-right:calc(-1 * clamp(52px,6.2vw,124px));width:auto}#greenlung .featurePhoto img,#wilson .featurePhoto img{height:min(68vh,780px)}#live .livePhoto{height:min(72vh,820px)}#inhoud .contents{margin-top:18px;flex:1;align-content:start}

   /* COVER — deliberately not a normal page. Full-screen editorial poster, not an A4 simulation. */
   #cover{height:100vh;min-height:760px;padding:0!important;display:grid!important;grid-template-columns:minmax(0,1fr) minmax(290px,22vw);grid-template-rows:auto 1fr;overflow:hidden;background:#111;color:#fff;border:0}
   #cover .meta{grid-column:1/-1;grid-row:1;z-index:8;padding:13px clamp(30px,3vw,58px);background:#e9ddc6;color:#111;border:0;border-bottom:3px solid #111;font-size:clamp(12px,.82vw,15px)}
   #cover .mast{position:absolute!important;z-index:7;top:62px;left:clamp(28px,3.2vw,64px);margin:0;width:min(66vw,1160px);font:900 clamp(76px,8.1vw,148px)/.72 Arial,sans-serif;letter-spacing:-.075em;color:#f1e7d3;text-shadow:0 3px 16px #000b;mix-blend-mode:normal}
   #cover .mast b{color:#d82e29}#cover .sub{position:absolute!important;z-index:7;top:clamp(205px,17vw,315px);left:clamp(32px,3.5vw,70px);padding:8px 12px;background:#111e;color:#fff;font-size:clamp(12px,.9vw,17px);letter-spacing:.16em}
   #cover .hero{grid-column:1;grid-row:2;margin:0!important;min-height:0!important;height:100%;padding:0!important;background:#111;position:relative;overflow:hidden;display:block!important}
   #cover .hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#000b 0%,#00035 42%,transparent 70%),linear-gradient(0deg,#000e 0%,transparent 46%);z-index:2;pointer-events:none}
   #cover .hero>img,#cover .hero picture,#cover .hero .coverPhoto{width:100%;height:100%;object-fit:cover;object-position:center;display:block}
   #cover .hero>div{position:absolute!important;z-index:5;left:clamp(34px,4vw,80px);bottom:clamp(54px,7vh,94px);max-width:min(820px,58vw)}
   #cover .hero h1{font:900 clamp(64px,6.7vw,122px)/.82 Arial,sans-serif;letter-spacing:-.055em;margin:0;color:#dbe84e;text-shadow:2px 3px #000}.dek{font-size:clamp(25px,2vw,38px);max-width:900px;line-height:1.2}#cover .dek{margin:14px 0 6px;color:#fff;font-size:clamp(23px,1.8vw,34px)}#cover .note{color:#fff;font-size:clamp(14px,1vw,18px);margin:0}
   #cover .covergrid{grid-column:2;grid-row:2;margin:0!important;padding:clamp(28px,3.2vw,58px) clamp(24px,2.2vw,44px) 96px;display:flex!important;flex-direction:column;gap:0;background:#e9ddc6;color:#111;border-left:7px solid #d82e29;align-self:stretch;justify-content:flex-end}
   #cover .teaser{background:transparent!important;color:#111!important;border:0!important;border-top:4px solid #111!important;padding:20px 2px 24px!important;min-height:0!important;font:700 clamp(15px,1.05vw,20px)/1.28 Arial,sans-serif;transform:none!important}
   #cover .teaser:first-child{border-top:10px solid #d82e29!important}#cover .teaser strong{display:block;font:900 clamp(24px,2vw,38px)/.9 Arial,sans-serif;letter-spacing:-.04em;margin-bottom:8px;color:#111}
   #cover .open{position:absolute!important;z-index:10;right:clamp(24px,2.2vw,44px);bottom:26px;margin:0;background:#111;color:#fff;padding:15px 18px;font-size:15px;border:0}
   #cover .editionSide,#cover .editionFooter{display:none!important}
   body>.nav,.issue+.nav{z-index:50}
 }
 @media (min-width:1500px){.page{padding-left:max(6.5vw,104px);padding-right:max(6.5vw,104px)}#greenlung .article,#wilson .article,#dieptebom .article,#history .article{max-width:1020px}.article p{font-size:clamp(26px,1.5vw,32px)}}
 `;
 const style=document.createElement('style');style.id='dnaWidescreenV4';style.textContent=css;document.head.appendChild(style);
})();
