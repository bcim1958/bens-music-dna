// DNA EXPRESS-MAKER — widescreen reading layer v1
// Desktop: the screen is the magazine. Mobile keeps the existing one-column reading edition.
(function(){
 const css=`
 @media (min-width: 701px){
   html{font-size:18px}
   body{background:#0e0e0e}
   .issue{width:100%;max-width:none;margin:0;background:var(--paper);box-shadow:none;overflow:hidden}
   .page{width:100%;min-height:100vh;padding:clamp(38px,4.2vw,78px) clamp(46px,6vw,118px);}
   .page>*{position:relative;z-index:1}
   .meta{font-size:clamp(13px,.95vw,17px)}
   .mast{font-size:clamp(84px,10.4vw,178px);max-width:1500px}
   .sub{font-size:clamp(15px,1.25vw,23px)}
   .hero{min-height:64vh;margin-top:34px;padding:clamp(42px,5vw,86px);}
   .hero>div:last-child{max-width:980px}
   .hero h1{font-size:clamp(72px,8vw,138px)}
   .dek{font-size:clamp(25px,2.2vw,38px);max-width:900px}
   .covergrid{grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
   .teaser{padding:24px;min-height:150px;font-size:18px;line-height:1.35}
   .teaser strong{font-size:clamp(21px,1.55vw,29px)}
   .open{font-size:18px;padding:17px 25px}
   .title{font-size:clamp(68px,7.5vw,132px);max-width:1450px}
   .bigquote{font-size:clamp(34px,3.5vw,61px);max-width:1100px}
   .article{max-width:880px}
   .article p{font-size:clamp(22px,1.45vw,27px);line-height:1.58}
   .contents{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px clamp(42px,5vw,96px);max-width:1500px}
   .item{grid-template-columns:82px minmax(0,1fr);padding:18px 0}
   .num{font-size:32px}.item b{font-size:clamp(22px,1.5vw,29px)}.item p{font-size:19px;line-height:1.35}
   .spread{grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:clamp(58px,7vw,140px);align-items:start}
   .stats{gap:12px}.stat{padding:24px;font-size:18px}.stat b{font-size:46px}
   .storygrid{grid-template-columns:minmax(0,1.25fr) minmax(300px,.75fr);gap:clamp(44px,5vw,92px);max-width:1450px}
   .storybox h3{font-size:32px}.storybox p{font-size:21px;line-height:1.48}
   .desk{grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
   .card{padding:25px}.card h3{font-size:29px}.card p{font-size:20px;line-height:1.42}
   .radarband{grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.radarband div{padding:22px;min-height:150px}.radarband b{font-size:22px}.radarband span{font-size:17px;line-height:1.4}
   .featurePhoto{width:min(100%,1450px);margin:36px 0}.featurePhoto img{height:min(55vh,650px)}
   .radarPhotos{grid-template-columns:1.45fr .75fr;gap:18px}.radarPhoto{min-height:470px}
   .reviewRail{grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;max-width:1450px}.reviewCard{padding:24px}.reviewCard b{font-size:22px}.reviewCard p{font-size:18px;line-height:1.4}
   .timeline{max-width:1000px;grid-template-columns:160px 1fr}.timeline .date{font-size:28px}.timeline .event{font-size:22px}
   .livePhoto{height:min(60vh,680px)}.liveManifesto{grid-template-columns:repeat(3,1fr)}.liveManifesto div{padding:24px}.liveManifesto b{font-size:21px}.liveManifesto span{font-size:18px;line-height:1.4}
   .gemstoneStrip{grid-template-columns:repeat(4,1fr);gap:16px;max-width:1450px}.stone{min-height:220px;padding:24px}.stone b{font-size:21px}.stone span{font-size:15px;line-height:1.35}
   .housead{padding:38px;max-width:1450px}.housead p{font-size:20px}
   .nav{padding:13px;gap:20px;font-size:14px}
 }
 @media (min-width: 1500px){
   .page{padding-left:max(6vw,96px);padding-right:max(6vw,96px)}
   #greenlung .article,#wilson .article,#dieptebom .article,#history .article{max-width:940px}
 }
 `;
 const style=document.createElement('style');style.id='dnaWidescreenV1';style.textContent=css;document.head.appendChild(style);
})();
