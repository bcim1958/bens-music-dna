// DNA EXPRESS-MAKER — widescreen reading layer v3
// Desktop: use the screen as a digital music weekly, not as an A4 simulation.
(function(){
 const css=`
 @media (min-width: 701px){
   html{font-size:20px}
   body{background:#0b0b0b}
   .issue{width:100%;max-width:none;margin:0;background:var(--paper);box-shadow:none;overflow:hidden}
   .page{width:100%;min-height:100vh;padding:clamp(42px,4.5vw,84px) clamp(52px,6.2vw,124px);display:flex;flex-direction:column;}
   .page>*{position:relative;z-index:1}
   .page>.editionFooter{margin-top:auto!important;padding-top:14px}
   .meta{font-size:clamp(14px,1vw,18px)}
   .kicker{font-size:clamp(14px,1vw,18px)}
   .mast{font-size:clamp(92px,10.8vw,186px);max-width:1600px}
   .sub{font-size:clamp(16px,1.35vw,25px)}
   .hero{min-height:70vh;margin-top:36px;padding:clamp(48px,5.4vw,94px);}
   .hero>div:last-child{max-width:1100px}
   .hero h1{font-size:clamp(82px,8.6vw,150px)}
   .dek{font-size:clamp(28px,2.4vw,42px);max-width:980px;line-height:1.22}
   .note{font-size:clamp(17px,1.25vw,22px);line-height:1.45}
   .covergrid{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
   .teaser{padding:26px;min-height:165px;font-size:20px;line-height:1.42}
   .teaser strong{font-size:clamp(23px,1.7vw,31px)}
   .open{font-size:20px;padding:18px 27px}
   .title{font-size:clamp(76px,7.8vw,140px);max-width:1550px}
   .bigquote{font-size:clamp(39px,3.7vw,66px);max-width:1220px;line-height:1.05}
   .article{max-width:980px}
   .article p{font-size:clamp(25px,1.62vw,31px);line-height:1.62;margin:0 0 1.05em}
   .contents{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px clamp(48px,5vw,100px);max-width:1580px}
   .item{grid-template-columns:88px minmax(0,1fr);padding:20px 0}
   .num{font-size:35px}.item b{font-size:clamp(24px,1.65vw,31px)}.item p{font-size:21px;line-height:1.42}
   .spread{grid-template-columns:minmax(0,1.04fr) minmax(0,.96fr);gap:clamp(64px,7vw,150px);align-items:start}
   .stats{gap:14px}.stat{padding:28px;font-size:20px}.stat b{font-size:52px}
   .storygrid{grid-template-columns:minmax(0,1.22fr) minmax(340px,.78fr);gap:clamp(50px,5vw,100px);max-width:1550px}
   .storybox{padding-top:18px}.storybox h3{font-size:36px}.storybox p{font-size:23px;line-height:1.52}
   .desk{grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
   .card{padding:28px;min-height:220px}.card h3{font-size:32px}.card p{font-size:22px;line-height:1.5}
   .radarband{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.radarband div{padding:25px;min-height:175px}.radarband b{font-size:24px}.radarband span{font-size:19px;line-height:1.46}
   .featurePhoto{width:min(100%,1550px);margin:42px 0}.featurePhoto img{height:min(62vh,720px)}
   .radarPhotos{grid-template-columns:1.5fr .8fr;gap:20px}.radarPhoto{min-height:520px}
   .reviewRail{grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;max-width:1550px}.reviewCard{padding:28px;min-height:190px}.reviewCard b{font-size:24px}.reviewCard p{font-size:20px;line-height:1.48}
   .timeline{max-width:1120px;grid-template-columns:180px 1fr}.timeline .date{font-size:31px}.timeline .event{font-size:24px;line-height:1.48}
   .livePhoto{height:min(66vh,760px)}.liveManifesto{grid-template-columns:repeat(3,1fr)}.liveManifesto div{padding:28px}.liveManifesto b{font-size:23px}.liveManifesto span{font-size:20px;line-height:1.48}
   .gemstoneStrip{grid-template-columns:repeat(4,1fr);gap:18px;max-width:1550px}.stone{min-height:250px;padding:28px}.stone b{font-size:23px}.stone span{font-size:17px;line-height:1.42}
   .housead{padding:42px;max-width:1550px}.housead p{font-size:22px;line-height:1.45}
   .sources{max-width:1200px}.source,.btn{font-size:14px;padding:13px 15px}
   .nav{padding:14px 18px;gap:24px;font-size:15px}
   #cover,#inhoud,#live,#ontdek{padding-top:clamp(34px,3.4vw,64px)}
   #greenlung .featurePhoto,#wilson .featurePhoto,#live .livePhoto{margin-left:calc(-1 * clamp(52px,6.2vw,124px));margin-right:calc(-1 * clamp(52px,6.2vw,124px));width:auto}
   #greenlung .featurePhoto img,#wilson .featurePhoto img{height:min(68vh,780px)}
   #live .livePhoto{height:min(72vh,820px)}
   #inhoud .contents{margin-top:18px;flex:1;align-content:start}
 }
 @media (min-width: 1500px){
   .page{padding-left:max(6.5vw,104px);padding-right:max(6.5vw,104px)}
   #greenlung .article,#wilson .article,#dieptebom .article,#history .article{max-width:1020px}
   .article p{font-size:clamp(26px,1.5vw,32px)}
 }
 `;
 const style=document.createElement('style');style.id='dnaWidescreenV3';style.textContent=css;document.head.appendChild(style);
})();
