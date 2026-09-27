/* салон desktop — SalonTemplate reference build. Mobile bundle is intentionally untouched. */
(function(){
  'use strict';
  const desktopDevice=window.__BR_DESKTOP_DEVICE__===true || (!('__BR_DESKTOP_DEVICE__' in window) && !!window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches);
  if(!desktopDevice) return;

  const PHONE='';
  const ADDRESS='Город, Адрес салона';
  const MAP_URL='#salonDesktopContacts';
  const ROUTE=MAP_URL;
  const MESSENGER_URL='#salonDesktopContacts';
  const REVIEWS_URL=MAP_URL;
  const DESKTOP_REAL_REVIEWS=[["Клиент 1","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 2","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 3","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 4","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 5","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 6","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 7","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 8","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 9","Текст отзыва клиента будет добавлен при заполнении шаблона."]];
  const PORTFOLIO=Array.from({length:7},()=>({src:'media-placeholder.svg',alt:'Работа салона'}));
  const DESKTOP_GALLERY_GROUPS={
    'Салон':Array.from({length:2},()=>({src:'media-placeholder.svg',alt:'Фото салона'})),
    'Ногти':Array.from({length:9},()=>({src:'media-placeholder.svg',alt:'Работа салона'})),
    'Волосы':Array.from({length:7},()=>({src:'media-placeholder.svg',alt:'Работа салона'})),
    'Макияж':Array.from({length:3},()=>({src:'media-placeholder.svg',alt:'Работа салона'}))
  };
  const DESKTOP_GALLERY=Object.values(DESKTOP_GALLERY_GROUPS).flat().map(x=>x.src);
  const SERVICE_DATA={
  "Маникюр": [
    [
      "Услуга 01",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 14",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 15",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 16",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 17",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 26",
      "",
      "",
      [],
      ""
    ]
  ],
  "Брови и ресницы": [
    [
      "Услуга 02",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 04",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 21",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 23",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 24",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 30",
      "",
      "",
      [],
      ""
    ]
  ],
  "Волосы": [
    ["Окрашивание волос средней длины","5 000–10 000 ֏","2 ч",[],""],
    ["Сложное мелирование","15 000 ₽","4 ч",[],"Привет, это описание. Оно очень необходимо для того, чтобы вы понимали, что это такое. Но это мелирование, поэтому действуйте именно вот так."],
    ["Сложная покраска волос с заливкой","от 6 000 ₽","1,5 ч",[],"если ваши волосы когда-то испортились или вы обожгли их утюгом, есть специальное средство для того, чтобы выйти из этого состояния и вновь обрести хорошие, свежие, красивые волосы. Чтобы всё было хорошо, запишитесь к нам на услугу, и мы примем вас, как только вы возьмёте."],
    [
      "Услуга 03",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 06",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 09",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 11",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 12",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 13",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 22",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 28",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 29",
      "",
      "",
      [],
      ""
    ]
  ],
  "Эпиляция": [
    [
      "Услуга 05",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 08",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 10",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 20",
      "",
      "",
      [],
      ""
    ]
  ],
  "Другое": [
    [
      "Услуга 07",
      "",
      "",
      [],
      ""
    ]
  ],
  "Косметология": [
    [
      "Услуга 18",
      "",
      "",
      [],
      ""
    ],
    [
      "Услуга 19",
      "",
      "",
      [],
      ""
    ]
  ],
  "Макияж": [
    [
      "Услуга 25",
      "",
      "",
      [],
      ""
    ]
  ],
  "Массаж": [
    [
      "Услуга 27",
      "",
      "",
      [],
      ""
    ]
  ]
};
  const SERVICE_CATEGORIES=['Волосы',...Object.keys(SERVICE_DATA).filter(cat=>cat!=='Волосы')];
  const TEAM_MASTERS=[
  {
    "id": "master-1",
    "name": "Мастер 1",
    "role": "Специалист",
    "cats": [
      "Маникюр"
    ],
    "work": [
      "media-placeholder.svg",
      "media-placeholder.svg",
      "media-placeholder.svg"
    ]
  },
  {
    "id": "master-2",
    "name": "Мастер 2",
    "role": "Специалист",
    "cats": [
      "Волосы"
    ],
    "work": [
      "media-placeholder.svg",
      "media-placeholder.svg",
      "media-placeholder.svg"
    ]
  },
  {
    "id": "master-3",
    "name": "Мастер 3",
    "role": "Специалист",
    "cats": [
      "Косметология"
    ],
    "work": []
  },
  {
    "id": "master-4",
    "name": "Мастер 4",
    "role": "Специалист",
    "cats": [
      "Брови и ресницы"
    ],
    "work": []
  }
];
  const TEAM_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap';
  document.head.appendChild(font);
  const desktopStyle=document.createElement('style');
  desktopStyle.id='salon-desktop-styles';
  desktopStyle.textContent=String.raw`@media(min-width:768px){
html,body{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow-x:hidden}
body>main.shell,body>.booking-island{display:none!important}
body>.desktop{display:none!important}
#salon-desktop-v1{
--purple:#715b53;
--purple2:#8b7167;
--ink:#17171a;
--muted:#6d6b73;
--line:#ecebee;
display:block;
width:100%;
min-height:100vh;
background:#fff;
color:var(--ink);
font-family:"Manrope",Arial,sans-serif;
-webkit-font-smoothing:antialiased;
}
#salon-desktop-v1 *{box-sizing:border-box}
#salon-desktop-v1 a,#salon-desktop-v1 button{font:inherit;color:inherit}
#salon-desktop-v1 a{text-decoration:none}
#salon-desktop-v1 button{cursor:pointer}
.std-header{
height:80px;
width:100%;
display:flex;
align-items:center;
position:relative;
z-index:20;
padding:0 100px;
border-bottom:0;
background:#fff!important;
}
.std-header-brand{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:242px;
min-width:242px;
color:#211d1a!important;
text-decoration:none!important;
line-height:1;
}
.std-header-brand-main{
font:500 31px/.9 "Cormorant Garamond",Georgia,serif;
letter-spacing:.075em;
text-transform:uppercase;
}
.std-header-brand-sub{
margin-top:8px;
font:600 9px/1 "Manrope",Arial,sans-serif;
letter-spacing:.39em;
text-transform:uppercase;
color:#5f534d;
}
.std-nav{
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
display:flex;
align-items:center;
gap:37px;
white-space:nowrap;
}
.std-nav a{
font-size:14px;
font-weight:500;
line-height:1;
color:#211d1a!important;
text-shadow:none;
transition:opacity .18s ease;
}
.std-nav a:hover{opacity:.52}
.std-header-right{
margin-left:auto;
display:flex;
align-items:center;
gap:25px;
transform:translateX(38px);
}
.std-phone{
margin-left:0;
width:auto;
height:44px;
display:flex;
align-items:center;
justify-content:center;
gap:11px;
border-radius:0;
background:transparent;
color:#211d1a!important;
box-shadow:none;
font-size:16px;
font-weight:500;
letter-spacing:0;
text-shadow:none;
white-space:nowrap;
}
.std-phone svg{width:21px;height:21px;flex:0 0 21px}
.std-header-book{
height:47px;
width:159px;
min-width:159px;
padding:0 22px;
border:0;
border-radius:999px;
background:#9c7967;
color:#fff!important;
font:500 15px/1 "Manrope",Arial,sans-serif!important;
box-shadow:none;
transition:transform .18s ease,background .18s ease;
}
.std-header-book:hover{transform:translateY(-1px);background:#8f6d5c;box-shadow:0 10px 24px rgba(104,78,65,.20)}
.std-hero{
position:relative;
display:grid;
grid-template-columns:48.5% 51.5%;
height:calc(100svh - 80px);
min-height:760px;
margin:0;
background:#fff!important;
overflow:hidden;
}
.std-hero-copy{
position:relative;
min-width:0;
display:flex;
justify-content:center;
align-items:flex-start;
padding:0 48px;
background:#fff!important;
}
.std-hero-copy:before{
content:'';
position:absolute;
left:-42px;
bottom:-26px;
width:230px;
height:570px;
opacity:.60;
filter:blur(6px);
transform:rotate(-7deg);
background:
radial-gradient(ellipse 34px 76px at 34% 13%,rgba(65,91,58,.88) 0 54%,transparent 58%),
radial-gradient(ellipse 32px 70px at 69% 24%,rgba(77,104,67,.84) 0 54%,transparent 58%),
radial-gradient(ellipse 36px 78px at 26% 39%,rgba(63,92,56,.80) 0 54%,transparent 58%),
radial-gradient(ellipse 31px 72px at 72% 50%,rgba(78,108,69,.77) 0 54%,transparent 58%),
radial-gradient(ellipse 37px 82px at 30% 65%,rgba(67,97,60,.72) 0 54%,transparent 58%),
radial-gradient(ellipse 32px 74px at 69% 78%,rgba(76,105,66,.68) 0 54%,transparent 58%),
linear-gradient(79deg,transparent 46%,rgba(69,90,62,.62) 47% 49%,transparent 50%);
pointer-events:none;
}
.std-copy-inner{
width:min(100%,470px);
margin-top:110px;
transform:none;
text-align:center;
}
.std-hero-kicker{
margin:0 0 34px;
font:600 12px/1 "Manrope",Arial,sans-serif;
letter-spacing:.43em;
text-transform:uppercase;
color:#9b7768;
}
.std-logo{
margin:0;
font-family:"Cormorant Garamond",Georgia,serif;
font-size:clamp(62px,5.1vw,82px);
line-height:.84;
font-weight:500;
letter-spacing:.105em;
text-indent:.105em;
text-transform:uppercase;
text-align:center;
color:#211d1a;
white-space:nowrap;
}
.std-logo-sub{
margin:24px 0 37px;
font-family:"Manrope",Arial,sans-serif;
font-size:12px;
line-height:1;
font-weight:600;
letter-spacing:.43em;
text-indent:.43em;
text-align:center;
color:#4f443f;
text-transform:uppercase;
white-space:nowrap;
}
.std-tagline{
margin:0 auto 38px;
max-width:455px;
font-family:"Manrope",Arial,sans-serif;
font-size:24px;
line-height:1.36;
font-weight:400;
letter-spacing:-.022em;
color:#2d2724;
text-align:center;
}
.std-meta{
display:grid;
grid-template-columns:1fr 1px 1.18fr;
gap:24px;
align-items:center;
justify-content:center;
margin-bottom:32px;
}
.std-meta-divider{width:1px;height:64px;background:rgba(75,61,54,.18)}
.std-meta-item{
display:flex;
align-items:center;
justify-content:center;
gap:14px;
min-width:0;
}
.std-meta-icon{
width:59px;
height:59px;
flex:0 0 59px;
display:grid;
place-items:center;
border:1px solid rgba(75,61,54,.16);
border-radius:50%;
background:rgba(255,255,255,.12);
color:#2b2623;
}
.std-meta-icon svg{width:25px;height:25px}
.std-meta-text{
min-width:0;
font-size:15px;
line-height:1.38;
letter-spacing:-.02em;
color:#4f4540;
text-align:left;
}
.std-status-main{display:block;color:#a45e64;font-weight:500}
.std-status-sub{display:block;color:#554b46}
.std-address{display:block;color:#423a36}
.std-actions{display:grid;gap:14px}
.std-btn{
width:100%;
height:69px;
border-radius:11px;
display:flex;
align-items:center;
justify-content:center;
gap:18px;
font-size:17px;
font-weight:500;
border:1px solid rgba(126,95,79,.46);
background:rgba(255,255,255,.08);
color:#332c28!important;
transition:transform .15s ease,box-shadow .15s ease,background .15s ease;
}
.std-btn:not(.std-btn-primary){color:#332c28!important}
.std-sparkles{color:#8e6e5e!important}
.std-btn:hover{transform:translateY(-1px);background:rgba(255,255,255,.34)}
.std-btn:active{transform:translateY(0)}
.std-btn-primary{
position:relative;
overflow:hidden;
border-color:#9a7866;
color:#fff!important;
background:#9c7967;
box-shadow:none;
}
.std-btn-primary:after{
content:'';
position:absolute;
top:-35%;
bottom:-35%;
left:-34%;
width:24%;
pointer-events:none;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.30),transparent);
transform:skewX(-22deg);
animation:stdBookShine 4.2s ease-in-out infinite;
}
@keyframes stdBookShine{0%,68%{left:-34%}100%{left:132%}}
@media(prefers-reduced-motion:reduce){.std-btn-primary:after{animation:none!important}}
.std-btn-primary:hover{background:#8f6d5c;box-shadow:0 10px 26px rgba(104,78,65,.22)}
.std-btn svg{width:24px;height:24px;flex:0 0 24px}
.std-sparkles{width:25px;height:25px;position:relative;display:inline-grid;place-items:center;font-size:25px;line-height:1}
.std-scroll-hint{
position:absolute;
right:-88px;
bottom:30px;
display:flex;
flex-direction:column;
align-items:center;
gap:8px;
padding:10px 15px 8px;
border-radius:999px;
color:#65564e;
background:rgba(237,228,221,.48);
box-shadow:0 0 28px 22px rgba(237,228,221,.48);
backdrop-filter:blur(5px);
font:600 10px/1 "Manrope",Arial,sans-serif;
letter-spacing:.34em;
text-transform:uppercase;
z-index:6;
animation:stdScrollHintFloat 2.8s ease-in-out infinite;
will-change:transform;
}
.std-scroll-hint span{font-size:22px;line-height:1;letter-spacing:0;font-weight:300}
@keyframes stdScrollHintFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
@media(prefers-reduced-motion:reduce){.std-scroll-hint{animation:none!important}}
.std-hero-photo{
position:relative;
min-width:0;
height:100%;
margin:0;
overflow:hidden;
background:#e7ddd4;
}
.std-hero-photo video,
.std-hero-photo img{
position:absolute;
inset:0;
width:100%;
height:100%;
object-fit:cover;
object-position:center center;
display:block;
border:0;
margin:0;
padding:0;
background:#e7ddd4;
}
.std-hero-photo video{pointer-events:none}
.std-hero:after{
content:'';
position:absolute;
z-index:5;
left:0;
right:0;
bottom:0;
height:86px;
pointer-events:none;
background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.28) 45%,#fff 100%);
}
.std-portfolio{
position:relative;
overflow:hidden;
min-height:auto;
padding:46px 42px 46px;
background:
radial-gradient(620px 430px at -8% 96%,rgba(176,145,128,.10) 0%,transparent 70%),
radial-gradient(620px 420px at 108% 2%,rgba(190,159,142,.08) 0%,transparent 70%),
linear-gradient(180deg,#f0e8e1 0%,#f4ede7 34%,#f7f2ed 100%);
color:#17171a;
}
.std-portfolio:before,
.std-portfolio:after{
content:'';
position:absolute;
pointer-events:none;
border-radius:50%;
z-index:0;
filter:blur(28px);
}
.std-portfolio:before{
width:560px;
height:420px;
left:-210px;
bottom:-165px;
background:radial-gradient(circle,rgba(169,132,112,.13) 0%,rgba(169,132,112,.07) 38%,rgba(169,132,112,.025) 62%,transparent 78%);
}
.std-portfolio:after{
width:560px;
height:420px;
right:-210px;
top:-165px;
background:radial-gradient(circle,rgba(178,142,122,.12) 0%,rgba(178,142,122,.065) 38%,rgba(178,142,122,.022) 62%,transparent 78%);
}
.std-portfolio-inner{
position:relative;
z-index:1;
width:min(100%,1452px);
max-width:none;
margin:0 auto;
}
.std-portfolio-head{
width:auto;
margin:0;
padding:0;
text-align:center;
}
.std-portfolio-kicker{
margin:0;
font:600 12px/1 "Manrope",Arial,sans-serif;
letter-spacing:.31em;
text-transform:uppercase;
color:#66636a;
}
.std-portfolio-title{
margin:20px 0 0;
font:500 76px/.92 "Cormorant Garamond",Georgia,serif;
letter-spacing:-.045em;
color:#171518;
}
.std-portfolio-copy{
width:min(100%,760px);
max-width:760px;
margin:20px auto 0;
font:400 17px/1.45 "Manrope",Arial,sans-serif;
color:#77747b;
white-space:normal;
text-align:center;
}
.std-portfolio-grid{
display:grid;
grid-template-columns:330px repeat(3,minmax(0,1fr));
grid-template-rows:276px 304px;
gap:12px;
margin-top:28px;
padding:0;
}
.std-work{
border:0;
padding:0;
border-radius:13px;
overflow:hidden;
background:#e7e4e8;
box-shadow:none;
}
.std-work:first-child{grid-row:1 / span 2}
.std-work img{
width:100%;
height:100%;
object-fit:cover;
display:block;
transition:transform .35s cubic-bezier(.2,.7,.2,1);
}
.std-work:hover img{transform:scale(1.018)}
.std-portfolio-more{
width:516px;
max-width:calc(100% - 84px);
height:76px;
margin:42px auto 0;
padding:0 28px;
border:1px solid #d8c8bd;
border-radius:13px;
background:linear-gradient(180deg,#faf6f2 0%,#f1e7e0 100%);
color:#2a2530;
display:flex;
align-items:center;
justify-content:center;
gap:18px;
font:500 18px/1 "Manrope",Arial,sans-serif;
position:static;
left:auto;
box-shadow:0 8px 22px rgba(116,84,68,.07);
transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
}
.std-portfolio-more:hover{
background:linear-gradient(180deg,#fcf8f5 0%,#f3e9e2 100%);
transform:translateY(-1px);
box-shadow:0 10px 26px rgba(116,84,68,.10);
}
.std-services{
position:relative;
overflow:hidden;
min-height:900px;
padding:54px 72px 58px;
background:
radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
#242424;
color:#f7f3f8;
}
.std-services-inner{
width:min(100%,1215px);
margin:0 auto;
display:grid;
grid-template-columns:minmax(0,.98fr) 1px minmax(0,1.12fr);
gap:58px;
align-items:start;
}
.std-services-divider{
width:1px;
min-height:770px;
background:rgba(255,255,255,.16);
}
.std-services-left{min-width:0}
.std-services-right{
min-width:0;
overflow:hidden;
}
.std-services-kicker{
margin:0;
font:600 12px/1 "Manrope",Arial,sans-serif;
letter-spacing:.31em;
text-transform:uppercase;
color:#bcb5c0;
}
.std-services-title{
margin:17px 0 36px;
font:500 67px/.92 "Cormorant Garamond",Georgia,serif;
letter-spacing:-.035em;
color:#fff;
}
.std-price-wrap{
width:min(100%,530px);
}
.std-price-card{
position:relative;
width:100%;
height:auto;
border-radius:9px;
overflow:hidden;
background:#f0ece7;
box-shadow:0 18px 50px rgba(0,0,0,.17);
}
.std-price-card img{
width:100%;
height:auto;
display:block;
object-fit:contain;
background:#f4f0ea;
}
.std-price-count{
position:absolute;
top:14px;
right:17px;
z-index:2;
padding:4px 8px;
border-radius:999px;
background:rgba(248,245,240,.82);
color:#57515c;
font:600 10px/1 "Manrope",Arial,sans-serif;
letter-spacing:.08em;
backdrop-filter:blur(8px);
}
.std-price-arrow{
position:absolute;
z-index:3;
top:50%;
transform:translateY(-50%);
width:44px;
height:64px;
border:0;
background:transparent;
color:#17151a!important;
font:300 47px/1 Arial,sans-serif!important;
text-shadow:0 1px 8px rgba(255,255,255,.55);
}
.std-price-prev{left:0}
.std-price-next{right:0}
.std-price-dots{
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:11px;
margin-top:23px;
}
.std-price-dot{
width:10px;
height:10px;
padding:0;
border:0;
border-radius:50%;
background:rgba(255,255,255,.22);
}
.std-price-dot.active{
background:#8b7167;
box-shadow:0 0 13px rgba(151,73,227,.34);
}
.std-price-open{
display:block;
width:min(100%,390px);
height:60px;
margin:30px auto 0;
border:1px solid rgba(181,148,130,.30);
border-radius:999px;
background:linear-gradient(135deg,#715b53,#5d4841);
color:#fff!important;
box-shadow:0 10px 28px rgba(65,48,42,.22);
font:500 15px/1 "Manrope",Arial,sans-serif;
transition:background .18s ease,box-shadow .18s ease,transform .18s ease;
}
.std-price-open:hover{
background:linear-gradient(135deg,#80675e,#694f48);
box-shadow:0 12px 30px rgba(65,48,42,.27);
transform:translateY(-1px);
}
.std-service-tabs{
display:flex;
flex-wrap:nowrap;
align-items:center;
gap:12px;
width:calc(100% + max(0px,(100vw - 1215px)/2));
margin:0 0 31px;
padding:2px 44px 9px 10px;
overflow-x:auto;
overflow-y:hidden;
overscroll-behavior-inline:contain;
scrollbar-width:none;
-webkit-overflow-scrolling:touch;
cursor:grab;
user-select:none;
-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 25px,#000 calc(100% - 44px),transparent 100%);
mask-image:linear-gradient(90deg,transparent 0,#000 25px,#000 calc(100% - 44px),transparent 100%);
}
.std-service-tabs::-webkit-scrollbar{display:none}
.std-service-tabs.dragging{cursor:grabbing}
.std-service-tab{
min-height:43px;
padding:0 24px;
border:1px solid rgba(255,255,255,.16);
border-radius:999px;
background:transparent;
color:#ded8e2!important;
font:500 14px/1 "Manrope",Arial,sans-serif;
white-space:nowrap;
transition:background .18s ease,border-color .18s ease,color .18s ease,box-shadow .18s ease;
}
.std-service-tab.active{
border-color:#715b53;
background:#715b53;
color:#fff!important;
box-shadow:0 5px 20px rgba(111,61,130,.20);
}
.std-service-list{
border-top:1px solid rgba(255,255,255,.12);
}
.std-service-row{
padding:23px 3px 23px 5px;
border-bottom:1px solid rgba(255,255,255,.13);
}
.std-service-head{
display:grid;
grid-template-columns:minmax(0,1fr) auto;
gap:24px;
align-items:baseline;
}
.std-service-name{
font:500 27px/1.05 "Cormorant Garamond",Georgia,serif;
color:#f6f2f7;
}
.std-service-price{
font:600 27px/1 "Cormorant Garamond",Georgia,serif;
color:#f7f3f8;
white-space:nowrap;
}
.std-service-detail{
display:block;
margin-top:9px;
font:400 15.5px/1.45 "Manrope",Arial,sans-serif;
color:#b9b2bd;
}
.std-service-variants{
display:grid;
gap:8px;
margin-top:13px;
}
.std-service-variant{
display:grid;
grid-template-columns:minmax(0,1fr) auto;
gap:18px;
align-items:baseline;
font:400 15.5px/1.4 "Manrope",Arial,sans-serif;
color:#c9c1cc;
}
.std-service-variant b{
font:600 23px/1 "Cormorant Garamond",Georgia,serif;
color:#f7f3f8;
white-space:nowrap;
}
.std-service-note{
display:block;
margin-top:10px;
font:400 13px/1.5 "Manrope",Arial,sans-serif;
color:#aaa2ad;
}
.std-service-more{
width:100%;
height:57px;
margin-top:20px;
border:1px solid rgba(255,255,255,.15);
border-radius:9px;
background:rgba(255,255,255,.025);
color:#e8e2ea!important;
display:flex;
align-items:center;
justify-content:center;
gap:13px;
font:500 14px/1 "Manrope",Arial,sans-serif;
}
.std-service-more:hover{background:rgba(255,255,255,.055)}
.std-services-count{
margin-top:17px;
text-align:right;
font:500 11px/1 "Manrope",Arial,sans-serif;
color:#77707c;
letter-spacing:.06em;
}
.std-price-viewer{
position:fixed;
inset:0;
z-index:340;
display:none;
align-items:center;
justify-content:center;
box-sizing:border-box;
width:100vw;
height:100dvh;
padding:22px 88px 50px;
overflow:hidden;
background:rgba(16,14,18,.97);
backdrop-filter:blur(10px);
}
.std-price-viewer.open{display:flex}
.std-price-viewer-stage{
position:relative;
width:min(calc(100vw - 176px),1120px);
height:calc(100dvh - 72px);
max-height:880px;
display:grid;
place-items:center;
touch-action:pan-y;
user-select:none;
}
.std-price-viewer-img{
display:block;
max-width:100%;
max-height:calc(100dvh - 92px);
width:auto;
height:auto;
object-fit:contain;
border-radius:8px;
box-shadow:0 24px 80px rgba(0,0,0,.35);
-webkit-user-drag:none;
user-select:none;
}
.std-price-viewer-close{
position:absolute;
top:22px;
right:27px;
width:46px;
height:46px;
border:1px solid rgba(255,255,255,.17);
border-radius:50%;
background:rgba(255,255,255,.07);
color:#fff!important;
font-size:27px;
line-height:1;
}
.std-price-viewer-nav{
position:absolute;
top:50%;
transform:translateY(-50%);
width:54px;
height:72px;
border:0;
background:transparent;
color:#fff!important;
font:300 54px/1 Arial,sans-serif!important;
}
.std-price-viewer-prev{left:-70px}
.std-price-viewer-next{right:-70px}
.std-price-viewer-count{
position:absolute;
left:50%;
bottom:-37px;
transform:translateX(-50%);
color:rgba(255,255,255,.72);
font:500 12px/1 "Manrope",Arial,sans-serif;
letter-spacing:.08em;
}
.std-about{
position:relative;
overflow:hidden;
min-height:790px;
padding:92px 64px 96px;
background:
radial-gradient(470px 340px at 108% 14%,rgba(150,79,190,.135),transparent 68%),
radial-gradient(340px 250px at -12% 92%,rgba(157,91,194,.055),transparent 73%),
#f7f7f8;
color:#211e23;
}
.std-about-inner{
width:min(100%,1405px);
margin:0 auto;
}
.std-about-kicker{
margin:0 0 27px;
font:600 11px/1 "Manrope",Arial,sans-serif;
letter-spacing:.29em;
text-transform:uppercase;
color:#6f6971;
}
.std-about-grid{
display:grid;
grid-template-columns:minmax(0,635px) minmax(0,1fr);
gap:44px;
align-items:center;
}
.std-about-visual{
position:relative;
min-width:0;
height:556px;
border-radius:29px;
overflow:hidden;
background:#342338;
box-shadow:0 18px 46px rgba(55,40,62,.10);
}
.std-about-visual:after{
content:'';
position:absolute;
inset:0;
pointer-events:none;
background:radial-gradient(340px 230px at 88% 12%,rgba(189,121,222,.18),transparent 70%);
}
.std-about-visual img{
width:100%;
height:100%;
display:block;
object-fit:cover;
object-position:center center;
filter:brightness(1.17) saturate(1.08) contrast(.98);
}
.std-about-rating{
position:absolute;
z-index:2;
left:29px;
bottom:29px;
height:72px;
padding:0 25px;
border:1px solid rgba(255,255,255,.25);
border-radius:999px;
background:rgba(62,35,72,.74);
backdrop-filter:blur(12px);
display:flex;
align-items:center;
gap:13px;
color:#fff;
box-shadow:0 8px 22px rgba(26,18,29,.16);
}
.std-about-rating-star{
color:#f0c45d;
font-size:25px;
line-height:1;
}
.std-about-rating strong{
font:600 25px/1 "Manrope",Arial,sans-serif;
color:#fff;
}
.std-about-rating span{
font:500 15px/1 "Manrope",Arial,sans-serif;
color:rgba(255,255,255,.72);
white-space:nowrap;
}
.std-about-copy{
min-width:0;
padding:6px 0 0;
}
.std-about-lead{
margin:0;
max-width:700px;
font:500 55px/1.08 "Cormorant Garamond",Georgia,serif;
letter-spacing:-.035em;
color:#211e23;
}
.std-about-text{
margin:36px 0 0;
max-width:710px;
font:400 20px/1.5 "Manrope",Arial,sans-serif;
color:#5c565f;
}
.std-about-facts{
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
gap:20px;
margin-top:24px;
}
.std-about-fact{
min-height:136px;
padding:20px 18px;
border:1px solid rgba(75,58,81,.09);
border-radius:19px;
background:#dfdce2;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
font:500 17px/1.35 "Manrope",Arial,sans-serif;
color:#2c282e;
box-shadow:none;
}
.std-team{
position:relative;
overflow:hidden;
min-height:610px;
padding:58px 49px 44px;
background:
radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
#242424;
color:#f7f3f8;
}
.std-team-inner{
width:min(100%,1335px);
margin:0 auto;
}
.std-team-kicker{
margin:0;
font:600 13px/1 "Manrope",Arial,sans-serif;
letter-spacing:.31em;
text-transform:uppercase;
color:#aaa2ad;
}
.std-team-title{
margin:14px 0 0;
font:500 52px/.92 "Cormorant Garamond",Georgia,serif;
letter-spacing:-.035em;
color:#f7f3f8;
}
.std-team-subtitle{
margin:16px 0 0;
font:400 14px/1.4 "Manrope",Arial,sans-serif;
color:#aaa2ad;
}
.std-team-window{
position:relative;
width:100%;
margin-top:32px;
overflow:hidden;
}
.std-team-track{
display:flex;
align-items:flex-start;
gap:58px;
width:max-content;
min-width:100%;
overflow-x:auto;
padding:0 0 10px;
scrollbar-width:none;
overscroll-behavior-inline:contain;
-webkit-overflow-scrolling:touch;
scroll-snap-type:x proximity;
}
.std-team-track::-webkit-scrollbar{display:none}
.std-master{
flex:0 0 230px;
scroll-snap-align:start;
margin:0;
text-align:center;
color:#f7f3f8;
}
.std-master-avatar{
width:224px;
height:224px;
margin:0 auto;
border-radius:50%;
display:grid;
place-items:center;
color:#cbbfd0;
background:
radial-gradient(circle at 42% 30%,rgba(255,255,255,.07),transparent 45%),
linear-gradient(145deg,#3c3641,#302b34);
border:1px solid rgba(255,255,255,.085);
box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 16px 42px rgba(0,0,0,.10);
}
.std-master-avatar svg{
width:64px;
height:64px;
opacity:.92;
}
.std-master-name{
display:block;
margin-top:18px;
font:500 25px/1 "Cormorant Garamond",Georgia,serif;
color:#f7f3f8;
}
.std-master-role{
display:block;
margin-top:9px;
font:400 12px/1.3 "Manrope",Arial,sans-serif;
color:#b9b2bd;
}
.std-team-hint{
margin-top:37px;
display:flex;
align-items:center;
justify-content:flex-end;
gap:12px;
font:500 10px/1 "Manrope",Arial,sans-serif;
letter-spacing:.22em;
text-transform:uppercase;
color:#aaa2ad;
}
.std-team-hint span{
font-size:22px;
line-height:1;
letter-spacing:0;
transform:translateY(-1px);
}
.std-contact{
position:relative;
box-sizing:border-box;
overflow:hidden;
min-height:0;
padding:42px 84px 40px;
background:
radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
#242424;
color:#f8f5fa;
}
.std-contact-inner{
position:relative;
width:min(100%,1368px);
margin:0 auto;
display:grid;
grid-template-columns:550px minmax(0,1fr);
gap:30px;
align-items:start;
}
.std-contact-status{
position:absolute;
z-index:3;
top:0;
right:0;
height:58px;
padding:0 26px 0 22px;
border:1px solid rgba(255,124,139,.32);
border-radius:999px;
background:rgba(116,50,65,.39);
backdrop-filter:blur(12px);
display:flex;
align-items:center;
gap:11px;
color:#ffb1bb;
font:500 17px/1 "Manrope",Arial,sans-serif;
white-space:nowrap;
}
.std-contact-status svg{
width:25px;
height:25px;
fill:none;
stroke:currentColor;
stroke-width:1.9;
stroke-linecap:round;
stroke-linejoin:round;
}
.std-contact-status.open{
border-color:rgba(107,210,132,.34);
background:rgba(49,104,66,.38);
color:#b7efc3;
}
.std-contact-kicker{
margin:0;
font:500 16px/1 "Manrope",Arial,sans-serif;
letter-spacing:.34em;
text-transform:uppercase;
color:rgba(255,255,255,.83);
}
.std-contact-title{
margin:8px 0 42px;
font:500 78px/.88 "Cormorant Garamond",Georgia,serif;
letter-spacing:-.035em;
color:#fbf8fc;
}
.std-contact-list{
display:grid;
gap:10px;
}
.std-contact-card{
box-sizing:border-box;
width:100%;
min-height:94px;
padding:0 22px;
border:1px solid rgba(255,255,255,.11);
border-radius:18px;
background:rgba(255,255,255,.045);
display:grid;
grid-template-columns:78px minmax(0,1fr);
align-items:center;
color:#f8f5fa!important;
text-decoration:none!important;
box-shadow:inset 0 1px 0 rgba(255,255,255,.025);
transition:border-color .18s ease,background .18s ease;
}
.std-contact-card:hover{
border-color:rgba(198,155,210,.30);
background:rgba(255,255,255,.065);
}
.std-contact-card.static{
cursor:default;
}
.std-contact-card-icon{
width:49px;
height:49px;
display:grid;
place-items:center;
color:#c5a795;
}
.std-contact-card-icon svg{
width:36px;
height:36px;
fill:none;
stroke:currentColor;
stroke-width:1.8;
stroke-linecap:round;
stroke-linejoin:round;
}
.std-contact-brand-icon.viber svg,
.std-contact-brand-icon.max svg{
fill:currentColor;
stroke:none;
}
.std-contact-brand-icon.phone svg{
fill:none;
stroke:currentColor;
}
.std-contact-card-copy{
min-width:0;
}
.std-contact-card-title{
display:block;
font:500 25px/1.05 "Cormorant Garamond",Georgia,serif;
color:#f8f5fa;
}
.std-contact-card-sub{
display:block;
margin-top:7px;
font:400 13.5px/1.18 "Manrope",Arial,sans-serif;
color:#aaa5b1;
}
.std-contact-right{
min-width:0;
padding-top:134px;
}
.std-contact-map{
position:relative;
width:100%;
height:510px;
overflow:hidden;
border-radius:18px;
background:#eee;
}
.std-contact-map iframe{
display:block;
width:100%;
height:100%;
border:0;
filter:saturate(.88) contrast(.98);
}
.std-contact-actions{display:none!important}
.std-contact-action{
box-sizing:border-box;
height:82px;
border-radius:18px;
display:flex;
align-items:center;
justify-content:center;
color:#fff!important;
text-decoration:none!important;
font:500 29px/1 "Cormorant Garamond",Georgia,serif;
transition:filter .18s ease,transform .18s ease;
}
.std-contact-action:hover{
filter:brightness(1.05);
transform:translateY(-1px);
}
.std-contact-call{
border:1px solid rgba(255,255,255,.12);
background:rgba(30,28,36,.92);
}
.std-contact-route{
border:1px solid rgba(199,120,238,.35);
background:linear-gradient(105deg,#715b53 0%,#8b7167 100%);
box-shadow:0 8px 30px rgba(117,57,145,.12);
}
.std-contact-bottom{
width:auto;
margin:32px -84px 0;
border-top:1px solid rgba(255,255,255,.16);
padding-top:27px;
padding-bottom:6px;
}
.std-contact-brand{
width:max-content;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;
gap:7px;
color:#eee8f0!important;
text-decoration:none!important;
}
.std-contact-brand-mark{
width:36px;
height:36px;
border:1px solid rgba(255,255,255,.24);
border-radius:9px;
display:grid;
place-items:center;
font:500 27px/1 "Cormorant Garamond",Georgia,serif;
color:#f6f2f7;
box-shadow:0 4px 14px rgba(0,0,0,.10);
}
.std-contact-brand-text{
font:500 14px/1 "Cormorant Garamond",Georgia,serif;
letter-spacing:0;
color:#eee8f0;
}
@media(max-width:1280px){
.std-contact{
min-height:0;
padding:34px 40px 34px;
}
.std-contact-inner{
grid-template-columns:500px minmax(0,1fr);
gap:28px;
}
.std-contact-title{font-size:72px;margin-bottom:37px}
.std-contact-right{padding-top:119px}
.std-contact-card{grid-template-columns:78px minmax(0,1fr)}
.std-contact-card-title{font-size:25px}
.std-contact-card-sub{font-size:13px}
.std-contact-action{font-size:25px}
.std-contact-map{height:510px}
.std-contact-bottom{margin-left:-40px;margin-right:-40px}
}
.std-gallery{
position:fixed;
inset:0;
z-index:360;
display:none;
align-items:center;
justify-content:center;
box-sizing:border-box;
width:100vw;
height:100dvh;
padding:22px 82px 50px;
overflow:hidden;
background:rgba(18,16,20,.96);
backdrop-filter:blur(9px);
}
.std-gallery.open{display:flex}
.std-gallery-close{
position:absolute;
top:24px;
right:28px;
width:46px;
height:46px;
border:1px solid rgba(255,255,255,.17);
border-radius:50%;
background:rgba(255,255,255,.07);
color:#fff!important;
font-size:27px;
line-height:1;
}
.std-gallery-stage{
position:relative;
width:min(calc(100vw - 164px),1180px);
height:calc(100dvh - 72px);
max-height:900px;
display:grid;
place-items:center;
touch-action:pan-y;
user-select:none;
}
.std-gallery-image{
display:block;
max-width:100%;
max-height:calc(100dvh - 92px);
width:auto;
height:auto;
object-fit:contain;
border-radius:12px;
box-shadow:0 24px 80px rgba(0,0,0,.35);
-webkit-user-drag:none;
user-select:none;
}
.std-gallery-nav{
position:absolute;
top:50%;
transform:translateY(-50%);
width:52px;
height:70px;
border:0;
background:transparent;
color:#fff!important;
font:300 52px/1 Arial,sans-serif!important;
opacity:.82;
}
.std-gallery-nav:hover{opacity:1}
.std-gallery-prev{left:-68px}
.std-gallery-next{right:-68px}
.std-gallery-count{
position:absolute;
left:50%;
bottom:-39px;
transform:translateX(-50%);
color:rgba(255,255,255,.72);
font:500 12px/1 "Manrope",Arial,sans-serif;
letter-spacing:.08em;
}
.std-gallery-browser{
position:fixed;
inset:0;
z-index:350;
display:none;
width:100vw;
height:100dvh;
overflow:auto;
background:
radial-gradient(430px 300px at 108% 2%,rgba(143,85,181,.17),transparent 68%),
radial-gradient(320px 230px at -12% 92%,rgba(111,61,130,.08),transparent 72%),
#242424;
color:#f7f3f8;
}
.std-gallery-browser.open{display:block}
.std-gallery-browser-shell{
box-sizing:border-box;
width:min(100%,1320px);
min-height:100%;
margin:0 auto;
padding:28px 42px 56px;
}
.std-gallery-browser-top{
display:grid;
grid-template-columns:54px 1fr 54px;
align-items:center;
}
.std-gallery-browser-back{
width:46px;
height:46px;
border:0;
background:transparent;
color:#f7f3f8!important;
font:300 34px/1 Arial,sans-serif!important;
}
.std-gallery-browser-title{text-align:center}
.std-gallery-browser-title strong{
display:block;
font:500 48px/.92 "Cormorant Garamond",Georgia,serif;
color:#f7f3f8;
}
.std-gallery-browser-title span{
display:block;
margin-top:8px;
font:500 10px/1 "Manrope",Arial,sans-serif;
letter-spacing:.34em;
text-transform:uppercase;
color:#b9b2bd;
}
.std-gallery-browser-tabs{
display:flex;
justify-content:center;
gap:8px;
margin:27px auto 0;
overflow-x:auto;
scrollbar-width:none;
}
.std-gallery-browser-tabs::-webkit-scrollbar{display:none}
.std-gallery-browser-tab{
flex:0 0 auto;
height:38px;
padding:0 17px;
border:1px solid rgba(255,255,255,.11);
border-radius:999px;
background:rgba(255,255,255,.025);
color:#c6bec9!important;
font:500 11px/1 "Manrope",Arial,sans-serif!important;
}
.std-gallery-browser-tab.active{
background:#715b53;
border-color:#715b53;
color:#fff!important;
}
.std-gallery-browser-grid{
display:grid;
grid-template-columns:repeat(4,minmax(0,1fr));
gap:10px;
margin-top:22px;
}
.std-gallery-browser-tile{
aspect-ratio:4/3;
padding:0;
border:0;
border-radius:12px;
overflow:hidden;
background:#302b34;
}
.std-gallery-browser-tile img{
display:block;
width:100%;
height:100%;
object-fit:cover;
-webkit-user-drag:none;
user-select:none;
}
@media(max-width:1100px){
.std-gallery-browser-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
}
#salonDesktopTeam.std-team{
min-height:0!important;
padding:46px 70px 38px!important;
}
#salonDesktopTeam .std-team-inner{
width:min(100%,1120px)!important;
}
#salonDesktopTeam .std-team-kicker{
font-size:10px!important;
}
#salonDesktopTeam .std-team-title{
margin-top:12px!important;
font-size:46px!important;
}
#salonDesktopTeam .std-team-subtitle{
margin-top:13px!important;
font-size:13px!important;
}
#salonDesktopTeam .std-team-window{
margin-top:26px!important;
}
#salonDesktopTeam .std-team-track{
width:100%!important;
min-width:0!important;
gap:48px!important;
justify-content:space-between!important;
overflow-x:auto!important;
}
#salonDesktopTeam .std-master{
flex:0 0 210px!important;
}
#salonDesktopTeam .std-master-avatar{
width:200px!important;
height:200px!important;
}
#salonDesktopTeam .std-master-avatar svg{
width:58px!important;
height:58px!important;
}
#salonDesktopTeam .std-master-name{
margin-top:14px!important;
font-size:25px!important;
}
#salonDesktopTeam .std-master-role{
margin-top:7px!important;
font-size:11px!important;
}
#salonDesktopTeam .std-team-hint{
margin-top:18px!important;
font-size:9px!important;
}
#salonDesktopTeam .std-team-hint span{
font-size:19px!important;
}
@media(max-width:1180px){
.std-header{padding:0 30px}
.std-header-brand{width:190px;min-width:190px}
.std-header-brand-main{font-size:27px}
.std-nav{gap:20px}
.std-nav a{font-size:13px}
.std-header-right{gap:12px;transform:translateX(12px)}
.std-phone{width:auto;font-size:14px}
.std-header-book{width:132px;min-width:132px;padding:0 18px}
.std-hero{grid-template-columns:49% 51%}
.std-hero-copy{padding-inline:28px}
.std-copy-inner{width:min(100%,430px);margin-top:92px}
.std-logo{font-size:58px;letter-spacing:.055em;white-space:nowrap}
.std-logo-sub{font-size:11px;margin-left:0}
.std-tagline{font-size:21px}
.std-meta{gap:14px}
.std-meta-icon{width:52px;height:52px;flex-basis:52px}
.std-meta-text{font-size:14px}
.std-scroll-hint{right:-68px}
}
}
@media(min-width:768px){.std-book-overlay{position:fixed;inset:0;z-index:360;display:none;align-items:center;justify-content:center;padding:28px;background:rgba(18,16,15,.62);backdrop-filter:blur(8px)}.std-book-overlay.open{display:flex}.std-book-panel{position:relative;width:min(100%,560px);padding:34px;border-radius:22px;background:#f7f2eb;color:#211d1a;box-shadow:0 28px 90px rgba(0,0,0,.28);animation:stdEsBookIn .32s cubic-bezier(.16,1,.3,1)}@keyframes stdEsBookIn{from{opacity:0;transform:translateY(22px) scale(.985)}to{opacity:1;transform:none}}.std-book-close{position:absolute;right:18px;top:18px;width:42px;height:42px;border:1px solid rgba(61,49,43,.13);border-radius:50%;background:#fff;color:#221e1b;font-size:23px}.std-book-panel h3{margin:16px 52px 0 0;font:500 40px/.95 "Cormorant Garamond",Georgia,serif}.std-book-panel>p:not(.std-services-kicker){margin:13px 0 0;color:#756a63;font:400 13px/1.5 "Manrope",Arial,sans-serif}.std-book-options{display:grid;gap:9px;margin-top:24px}.std-book-options a{min-height:62px;padding:0 17px;border:1px solid rgba(61,49,43,.12);border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:space-between;color:#211d1a!important;font:600 13px/1 "Manrope",Arial,sans-serif}.std-book-options a span:last-child{color:#82766f;font-size:11px}}
@media(min-width:768px){
#salon-desktop-v1{
--br-bg:#f8f4ee;
--br-section:#f7f2eb;
--br-warm:#e9e2da;
--br-team:#f6f1e9;
--br-ink:#171513;
--br-soft:#746c66;
--br-line:rgba(62,51,44,.12);
--br-taupe:#8f7167;
background:var(--br-bg)!important;
color:var(--br-ink)!important;
}
.std-copy-inner{width:min(100%,560px)!important}
.std-logo{max-width:100%!important;font-size:clamp(54px,4.15vw,70px)!important;letter-spacing:.055em!important;white-space:nowrap!important}
.std-hero-kicker{font-size:14px!important;letter-spacing:.40em!important;margin-bottom:31px!important}
.std-logo-sub{font-size:14px!important;letter-spacing:.40em!important;margin-top:20px!important}
.std-tagline{font-size:26px!important;max-width:510px!important}
.std-meta{width:100%!important;grid-template-columns:1fr 1px 1.18fr!important;margin-top:2px!important;margin-bottom:34px!important}
.std-meta-icon{width:68px!important;height:68px!important;flex-basis:68px!important}
.std-meta-icon svg{width:29px!important;height:29px!important}
.std-meta-text{font-size:17px!important;line-height:1.42!important}
.std-actions{width:100%!important;gap:15px!important}
.std-btn{height:74px!important;font-size:18px!important;border-radius:10px!important}
.std-phone{font-size:19px!important}
.std-header-book{width:174px!important;min-width:174px!important;height:50px!important;font-size:17px!important}
.std-hero-copy:before{
left:0!important;
bottom:0!important;
width:190px!important;
height:545px!important;
opacity:.92!important;
filter:none!important;
transform:none!important;
background-image:url('media-placeholder.svg')!important;
background-repeat:no-repeat!important;
background-size:1648px auto!important;
background-position:left bottom!important;
-webkit-mask-image:linear-gradient(90deg,#000 0%,#000 58%,transparent 100%)!important;
mask-image:linear-gradient(90deg,#000 0%,#000 58%,transparent 100%)!important;
pointer-events:none!important;
}
.std-portfolio{padding-top:82px!important;background:linear-gradient(180deg,#f0e8e1 0%,#f4ede7 24%,#f7f2eb 100%)!important}
.std-portfolio-kicker{color:#746c66!important}
.std-portfolio-title{color:#171513!important}
.std-portfolio-copy{color:#746c66!important}
.std-gallery-browser{background:#f7f2eb!important;color:#171513!important}
.std-gallery-browser-shell{background:#f7f2eb!important}
.std-gallery-browser-title strong{font-size:31px!important;color:#171513!important}
.std-gallery-browser-title span{color:#746c66!important}
.std-gallery-browser-back{color:#171513!important;border-color:rgba(62,51,44,.16)!important;background:rgba(255,255,255,.34)!important}
.std-gallery-browser-tab{
height:44px!important;
padding:0 20px!important;
border-color:rgba(62,51,44,.16)!important;
background:rgba(255,255,255,.20)!important;
color:#655d57!important;
font-size:12.7px!important;
}
.std-gallery-browser-tab.active{background:#171513!important;border-color:#171513!important;color:#fff!important}
.std-services{
min-height:0!important;
padding:96px 0 104px!important;
background:
radial-gradient(circle at 9% 4%,rgba(204,171,158,.15),transparent 29%),
radial-gradient(circle at 92% 83%,rgba(218,195,184,.12),transparent 31%),
#f8f4ef!important;
color:#171513!important;
}
.std-services-inner{width:min(calc(100% - 96px),1400px)!important;margin:0 auto!important;display:block!important}
.std-services-head-ref{display:grid!important;grid-template-columns:minmax(360px,.95fr) minmax(360px,1.05fr)!important;align-items:end!important;column-gap:clamp(54px,7vw,110px)!important}
.std-services-kicker{margin:0!important;color:#9b7d72!important;font-size:12px!important;font-weight:600!important;letter-spacing:.24em!important;text-transform:uppercase!important}
.std-services-title{margin:12px 0 0!important;color:#171513!important;font:500 clamp(64px,5.6vw,82px)/.90 "Cormorant Garamond",Georgia,serif!important;letter-spacing:-.045em!important}
.std-services-intro{max-width:540px!important;margin:0 0 7px!important;color:#625b57!important;font-size:14px!important;line-height:1.7!important}
.std-price-hidden{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important}
.std-services-right{width:100%!important}
.std-service-tabs{
width:100%!important;
max-width:none!important;
margin-top:38px!important;
padding:5px!important;
display:flex!important;
gap:5px!important;
overflow-x:auto!important;
border:1px solid rgba(83,63,55,.09)!important;
border-radius:17px!important;
background:rgba(229,216,208,.58)!important;
box-shadow:inset 0 1px 0 rgba(255,255,255,.62)!important;
scrollbar-width:none!important;
}
.std-service-tabs::-webkit-scrollbar{display:none!important}
.std-service-tab{
flex:1 0 auto!important;
min-height:50px!important;
padding:0 18px!important;
border:1px solid transparent!important;
border-radius:13px!important;
background:transparent!important;
color:#655d57!important;
font-size:12px!important;
font-weight:600!important;
transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease!important;
}
.std-service-tab:hover{background:rgba(237,226,219,.76)!important;transform:translateY(-2px)!important}
.std-service-tab.active{background:#171513!important;color:#fff!important;border-color:#171513!important;box-shadow:0 12px 24px rgba(50,39,33,.12)!important}
.std-service-list{display:block!important;width:100%!important;margin-top:30px!important;border:0!important}
.std-service-category-ref + .std-service-category-ref{margin-top:38px!important}
.std-service-category-heading-ref{display:flex!important;min-height:34px!important;align-items:center!important;gap:12px!important;margin:0 0 14px!important;color:#705a52!important;font-size:13px!important;font-weight:600!important;letter-spacing:.12em!important;text-transform:uppercase!important}
.std-service-category-heading-ref:before{width:34px!important;height:1px!important;flex:0 0 34px!important;background:rgba(104,79,70,.28)!important;content:""!important}
.std-service-category-heading-ref i{height:1px!important;flex:1 1 auto!important;background:linear-gradient(90deg,rgba(104,79,70,.18),transparent)!important}
.std-service-grid-ref{position:relative!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px 38px!important}
.std-service-grid-ref:after{position:absolute!important;top:0!important;bottom:0!important;left:50%!important;width:1px!important;background:linear-gradient(180deg,transparent,rgba(100,77,68,.14) 8%,rgba(100,77,68,.14) 92%,transparent)!important;content:""!important;transform:translateX(-.5px)!important;pointer-events:none!important}
.std-service-card-ref{
position:relative!important;
display:flex!important;
width:100%!important;
min-height:154px!important;
flex-direction:column!important;
align-items:stretch!important;
padding:24px 76px 22px 24px!important;
overflow:hidden!important;
border:1px solid rgba(79,60,53,.105)!important;
border-radius:22px!important;
background:rgba(255,253,250,.80)!important;
box-shadow:0 10px 26px rgba(68,50,43,.05)!important;
color:#171513!important;
text-align:left!important;
transition:transform 200ms ease,border-color 200ms ease,box-shadow 200ms ease,background 200ms ease!important;
}
.std-service-card-ref:after{position:absolute!important;top:22px!important;right:20px!important;display:grid!important;width:42px!important;height:42px!important;place-items:center!important;border:1px solid rgba(112,81,71,.16)!important;border-radius:50%!important;background:#eee3dd!important;color:#6d514a!important;content:"↗"!important;font:500 16px/1 "Manrope",Arial,sans-serif!important}
.std-service-card-ref:hover{border-color:rgba(117,82,72,.22)!important;background:#fffdf9!important;box-shadow:0 16px 35px rgba(68,50,43,.085)!important;transform:translateY(-3px)!important}
.std-service-card-ref:hover:after{background:#171513!important;color:#fff!important}
.std-service-card-title-ref{max-width:100%!important;color:#2d2825!important;font:500 clamp(23px,1.65vw,28px)/1.08 "Cormorant Garamond",Georgia,serif!important}
.std-service-card-detail-ref{margin-top:10px!important;color:#716964!important;font-size:11.5px!important;line-height:1.5!important}
.std-service-card-bottom-ref{display:flex!important;align-items:end!important;justify-content:space-between!important;gap:14px!important;margin-top:auto!important;padding-top:22px!important}
.std-service-card-bottom-ref span{display:inline-flex!important;min-height:27px!important;align-items:center!important;padding:0 10px!important;border-radius:999px!important;background:#f0e7e1!important;color:#81736b!important;font-size:9.5px!important;font-weight:600!important}
.std-service-card-bottom-ref b{color:#332d2a!important;font:600 18px/1 "Cormorant Garamond",Georgia,serif!important}
.std-service-more{width:min(100%,390px)!important;height:56px!important;margin:32px auto 0!important;border:1px solid #bbaea5!important;border-radius:10px!important;background:rgba(255,255,255,.26)!important;color:#342f2b!important}
.std-services-count{text-align:center!important;color:#8a7f78!important;font-size:10px!important;margin-top:14px!important}
.std-about{padding:96px 70px 104px!important;background:#f8f4ee!important;color:#171513!important}
.std-about-inner{width:min(100%,1360px)!important;margin:0 auto!important}
.std-about-kicker{color:#9b7d72!important;font-size:12px!important;letter-spacing:.24em!important}
.std-about-grid{display:grid!important;grid-template-columns:1.05fr .95fr!important;gap:70px!important;align-items:center!important;margin-top:28px!important}
.std-about-copy{padding:20px 0!important}
.std-about-lead{max-width:720px!important;font-size:clamp(55px,4.6vw,72px)!important;line-height:.98!important;color:#171513!important}
.std-about-text{max-width:690px!important;margin-top:30px!important;color:#625b57!important;font-size:17px!important;line-height:1.65!important}
.std-about-facts{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;margin-top:36px!important}
.std-about-fact{min-height:92px!important;padding:18px!important;border:1px solid rgba(63,50,44,.10)!important;border-radius:15px!important;background:rgba(255,255,255,.28)!important;display:flex!important;flex-direction:column!important;align-items:flex-start!important;justify-content:center!important;text-align:left!important;color:#171513!important}
.std-about-fact strong{font:500 18px/1.05 "Cormorant Garamond",Georgia,serif!important}
.std-about-fact span{margin-top:7px!important;color:#81766f!important;font-size:10px!important}
.std-about-visual{min-height:520px!important;border-radius:28px!important;overflow:hidden!important;box-shadow:0 24px 60px rgba(67,50,43,.10)!important}
.std-about-visual img{width:100%!important;height:100%!important;object-fit:cover!important}
.std-about-rating{left:24px!important;bottom:24px!important;background:rgba(248,244,238,.92)!important;color:#171513!important}
#salonDesktopTeam.std-team{min-height:0!important;padding:88px 70px 92px!important;background:#f6f1e9!important;color:#171513!important}
#salonDesktopTeam .std-team-inner{width:min(100%,1360px)!important}
#salonDesktopTeam .std-team-kicker{color:#9b7d72!important;font-size:12px!important}
#salonDesktopTeam .std-team-title{margin-top:14px!important;color:#171513!important;font-size:64px!important;line-height:.93!important}
#salonDesktopTeam .std-team-subtitle{margin-top:14px!important;color:#746c66!important;font-size:14px!important}
#salonDesktopTeam .std-team-track{display:grid!important;width:100%!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:30px!important;margin-top:46px!important;overflow:visible!important;padding:0!important}
#salonDesktopTeam .std-master{position:relative!important;display:block!important;width:100%!important;min-width:0!important;padding:0 8px 18px!important;border:0!important;background:none!important;color:#171513!important;text-align:center!important;cursor:pointer!important}
#salonDesktopTeam .std-master-arrow{position:absolute!important;top:7px!important;right:12px!important;z-index:2!important;width:36px!important;height:36px!important;border:1px solid rgba(62,51,44,.12)!important;border-radius:50%!important;background:rgba(255,255,255,.48)!important;display:grid!important;place-items:center!important;color:#75675f!important;font-size:14px!important}
#salonDesktopTeam .std-master-avatar{width:min(100%,190px)!important;height:auto!important;aspect-ratio:1/1!important;margin:0 auto!important;border:0!important;border-radius:50%!important;background:linear-gradient(145deg,#e9e3dc,#d7cec6)!important;color:#9b9088!important;box-shadow:none!important;transition:transform .22s ease!important}
#salonDesktopTeam .std-master:hover .std-master-avatar{transform:translateY(-4px)!important}
#salonDesktopTeam .std-master-avatar svg{width:64px!important;height:64px!important}
#salonDesktopTeam .std-master-name{margin-top:18px!important;color:#171513!important;font-size:29px!important}
#salonDesktopTeam .std-master-role{margin-top:7px!important;color:#827871!important;font-size:11px!important}
#salonDesktopReviews.std-reviews{
height:auto!important;
min-height:760px!important;
padding:78px 0 62px!important;
background:#fff!important;
color:#171513!important;
}
#salonDesktopReviews .std-reviews-kicker{color:#746c66!important}
#salonDesktopReviews .std-reviews-title{color:#171513!important}
#salonDesktopReviews .std-reviews-score>strong{color:#171513!important}
#salonDesktopReviews .std-reviews-count{color:#716862!important}
#salonDesktopReviews .std-review-card{border-color:rgba(66,55,49,.15)!important;border-radius:14px!important;background:#f6f7f8!important}
#salonDesktopReviews .std-review-avatar{background:#e4e6e8!important;border-color:rgba(66,55,49,.10)!important;color:#514943!important}
#salonDesktopReviews .std-review-name{color:#2a2522!important}
#salonDesktopReviews .std-review-text{color:#4f4843!important}
#salonDesktopReviews .std-reviews-all{border-color:rgba(66,55,49,.18)!important;background:#f3f4f5!important;color:#2f2a26!important}
.std-contact{padding:74px 70px 54px!important;background:#f7f2eb!important;color:#171513!important}
.std-contact-inner{width:min(100%,1360px)!important;grid-template-columns:520px minmax(0,1fr)!important;gap:42px!important}
.std-contact-kicker{color:#9b7d72!important}
.std-contact-title{color:#171513!important}
.std-contact-card{border-color:rgba(63,50,44,.12)!important;background:rgba(255,255,255,.55)!important;color:#1e1a17!important}
.std-contact-card:hover{border-color:rgba(63,50,44,.22)!important;background:rgba(255,255,255,.76)!important}
.std-contact-card-title{color:#171513!important}
.std-contact-card-sub{color:#81766f!important}
.std-contact-card-icon{color:#8d7e74!important}
.std-contact-map{border:1px solid rgba(63,50,44,.12)!important;border-radius:24px!important;overflow:hidden!important;background:#eee!important}
.std-contact-status{border-color:#b8b0aa!important;background:#fff0df!important;color:#a46020!important}
.std-contact-status.open{background:#e7f4e6!important;color:#3a7440!important}
.std-contact-bottom{margin-top:34px!important;display:flex!important;justify-content:center!important}
.std-contact-brand{min-width:280px!important;min-height:58px!important;padding:0 22px!important;border-radius:16px!important;background:#171513!important;color:#fff!important;box-shadow:0 14px 34px rgba(23,21,19,.16)!important}
.std-contact-brand-mark{background:#8f7167!important;color:#fff!important}
.std-contact-brand-text{color:#f4eee8!important}
.std-master-overlay{position:fixed!important;z-index:390!important;inset:0!important;display:block!important;overflow:auto!important;background:#f8f4ee!important;color:#171513!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:opacity .34s ease,visibility 0s linear .42s!important}
.std-master-overlay.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important;transition-delay:0s!important}
.std-master-page-panel{width:min(100%,1120px)!important;min-height:100vh!important;margin:0 auto!important;padding:24px 48px 120px!important;transform:translateY(28px)!important;transition:transform .46s cubic-bezier(.16,1,.3,1)!important}
.std-master-overlay.open .std-master-page-panel{transform:none!important}
.std-master-page-top{display:grid!important;grid-template-columns:48px 1fr 48px!important;align-items:center!important;text-align:center!important}
.std-master-page-top span{font-size:14px!important;font-weight:600!important;letter-spacing:.28em!important}
.std-master-page-top i{width:48px!important;height:48px!important}
.std-master-page-close{width:48px!important;height:48px!important;border:1px solid rgba(63,50,44,.12)!important;border-radius:50%!important;background:rgba(255,255,255,.45)!important;font-size:27px!important}
.std-master-profile{text-align:center!important;margin-top:28px!important}
.std-master-profile .std-master-avatar{width:158px!important;height:158px!important;margin:0 auto!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#e9e3dc,#d7cec6)!important;color:#9b9088!important}
.std-master-profile .std-master-avatar svg{width:72px!important;height:72px!important}
.std-master-profile h2{margin:18px 0 0!important;font:500 54px/.95 "Cormorant Garamond",Georgia,serif!important}
.std-master-profile p{margin:8px 0 0!important;color:#837970!important;font-size:14px!important}
.std-master-profile-rating{margin-top:10px!important;font-size:12px!important;font-weight:600!important}.std-master-profile-rating b{color:#b78d4f!important}
.std-master-page-grid{display:grid!important;grid-template-columns:1.1fr .9fr!important;gap:34px!important;margin-top:38px!important}
.std-master-page-block{padding:26px!important;border:1px solid rgba(63,50,44,.10)!important;border-radius:20px!important;background:rgba(255,255,255,.38)!important}
.std-master-page-block h3{margin:0 0 16px!important;font:500 31px/1 "Cormorant Garamond",Georgia,serif!important}
.std-master-page-service{display:flex!important;justify-content:space-between!important;gap:18px!important;padding:14px 0!important;border-bottom:1px solid rgba(63,50,44,.10)!important}
.std-master-page-service:last-child{border-bottom:0!important}.std-master-page-service strong{font-size:13px!important}.std-master-page-service span{color:#81766f!important;font-size:11px!important}
.std-master-page-works{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:9px!important}.std-master-page-works img{width:100%!important;aspect-ratio:1.25/1!important;object-fit:cover!important;border-radius:12px!important}
.std-master-page-empty{color:#81766f!important;font-size:12px!important;line-height:1.55!important}
.std-master-page-book{position:fixed!important;z-index:395!important;left:50%!important;bottom:22px!important;width:min(620px,calc(100% - 64px))!important;height:58px!important;transform:translateX(-50%)!important;border:0!important;border-radius:14px!important;background:#171513!important;color:#fff!important;font-size:14px!important;font-weight:600!important;box-shadow:0 16px 38px rgba(23,21,19,.18)!important}
}
@media(min-width:768px){
#salon-desktop-v1{
--br-bg:#f8f4ee;--br-light:#f7f2eb;--br-warm:#e9e2da;--br-dark:#2f2926;
--br-ink:#171513;--br-soft:#746c66;--br-taupe:#8b7167;--br-line:rgba(62,51,44,.12);
background:var(--br-bg)!important;color:var(--br-ink)!important
}
.std-portfolio-title,.std-services-title,.std-about-title,#salonDesktopTeam .std-team-title,
#salonDesktopReviews .std-reviews-title,.std-contact-title{
margin-top:14px!important;font:500 clamp(54px,4.35vw,68px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important
}
.std-portfolio-kicker,.std-services-kicker,.std-about-kicker,#salonDesktopTeam .std-team-kicker,
#salonDesktopReviews .std-reviews-kicker,.std-contact-kicker{
font:600 12px/1 "Manrope",Arial,sans-serif!important;letter-spacing:.26em!important;text-transform:uppercase!important
}
.std-header{background:#fff!important;border-bottom:1px solid rgba(62,51,44,.06)!important}
.std-header-right{gap:17px!important}
.std-lang-switch{height:42px;display:flex;align-items:center;gap:4px;padding:0 4px}
.std-lang-switch button{min-width:28px;height:34px;padding:0 3px;border:0;background:transparent;color:#8b817b;
font:600 11px/1 "Manrope",Arial,sans-serif!important;letter-spacing:.04em}
.std-lang-switch button.active{color:#171513!important}.std-lang-switch .sep{color:#c7bbb3;font-size:10px;pointer-events:none}
.std-copy-inner{width:min(100%,560px)!important;transform:translateY(38px)!important}
.std-hero-kicker{font-size:14px!important;letter-spacing:.40em!important;margin-bottom:31px!important}
.std-logo{max-width:100%!important;font-size:clamp(54px,4.15vw,70px)!important;letter-spacing:.055em!important;white-space:nowrap!important}
.std-logo-sub{font-size:14px!important;letter-spacing:.40em!important;margin-top:20px!important}
.std-tagline{font-size:25px!important;line-height:1.38!important;max-width:500px!important}
.std-meta-text{font-size:16px!important;line-height:1.42!important}
.std-actions{gap:12px!important}.std-btn{height:66px!important;font-size:16px!important;border-radius:8px!important}
.std-scroll-hint{right:-88px!important;color:#fff!important;background:rgba(50,42,38,.78)!important;
border:1px solid rgba(255,255,255,.13)!important;box-shadow:0 12px 34px rgba(36,29,26,.20)!important;backdrop-filter:blur(7px)!important}
.std-scroll-hint span{color:#fff!important}
.std-portfolio{padding:82px 42px 78px!important;background:#f7f2eb!important;color:#171513!important}
.std-portfolio-inner{width:min(calc(100% - 24px),1400px)!important}
.std-portfolio-kicker{color:#746c66!important}.std-portfolio-title{color:#171513!important}
.std-portfolio-copy{margin-top:17px!important;color:#746c66!important;font-size:15px!important;line-height:1.55!important}
.std-portfolio-more{width:min(100%,520px)!important;height:56px!important;margin:34px auto 0!important;
border:1px solid rgba(64,52,46,.18)!important;border-radius:10px!important;background:transparent!important;color:#1a1715!important;
box-shadow:none!important;font:500 14px/1 "Manrope",Arial,sans-serif!important;gap:12px!important}
.std-portfolio-more:hover{background:rgba(255,255,255,.32)!important;box-shadow:none!important;transform:translateY(-1px)!important}
.std-gallery-browser{background:#f7f2eb!important;color:#171513!important}
.std-gallery-browser-shell{width:min(100%,1320px)!important;padding:32px 42px 60px!important;background:#f7f2eb!important}
.std-gallery-browser-back{width:46px!important;height:46px!important;border:0!important;border-radius:0!important;background:transparent!important;
box-shadow:none!important;color:#171513!important;font:300 36px/1 Arial,sans-serif!important}
.std-gallery-browser-title strong{font:500 clamp(54px,4vw,64px)/.9 "Cormorant Garamond",Georgia,serif!important;color:#171513!important}
.std-gallery-browser-title span{margin-top:9px!important;color:#746c66!important;font-size:11px!important}
.std-gallery-browser-tab{height:43px!important;padding:0 18px!important;border-color:rgba(55,44,39,.12)!important;background:transparent!important;color:#6f655f!important}
.std-gallery-browser-tab.active{background:#171513!important;border-color:#171513!important;color:#fff!important}
.std-gallery-browser-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:9px!important;margin-top:20px!important}
.std-gallery-browser-tile{aspect-ratio:1/1!important;border-radius:11px!important}
.std-gallery{z-index:450!important;padding:22px!important;background:rgba(27,20,20,.90)!important;backdrop-filter:blur(9px)!important}
.std-gallery-stage{width:min(calc(100vw - 130px),980px)!important;height:min(78dvh,760px)!important;max-height:none!important;touch-action:none!important;overflow:visible!important}
.std-gallery-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;box-shadow:0 18px 54px rgba(0,0,0,.28);touch-action:none}
.std-gallery-image{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;
object-fit:contain!important;border-radius:0!important;box-shadow:none!important;transform:translate3d(0,0,0) scale(1);transform-origin:center;will-change:transform}
.std-gallery-hint{position:absolute;top:-35px;left:0;color:rgba(255,255,255,.66);font:400 10px/1 "Manrope",Arial,sans-serif}
.std-gallery-nav{width:34px!important;height:54px!important;border:0!important;background:transparent!important;font-size:39px!important}
.std-gallery-prev{left:-48px!important}.std-gallery-next{right:-48px!important}
.std-gallery-count{bottom:-32px!important;font-size:10px!important;color:#fff!important}
.std-view-gallery{position:absolute;left:50%;bottom:-54px;transform:translateX(-50%);height:42px;padding:0 18px;
border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(22,18,16,.74);backdrop-filter:blur(12px);
color:#fff!important;font:600 11px/1 "Manrope",Arial,sans-serif!important;white-space:nowrap}
.std-gallery:not([data-source="portfolio"]) .std-view-gallery{display:none!important}
.std-services{min-height:0!important;padding:88px 0 94px!important;background:#2f2926!important;color:#f7f3f0!important}
.std-services-inner{width:min(calc(100% - 96px),1360px)!important;margin:0 auto!important;display:block!important}
.std-services-head-ref{display:grid!important;grid-template-columns:minmax(340px,.88fr) minmax(360px,1.12fr)!important;align-items:end!important;gap:68px!important}
.std-services-kicker{color:#b8ada7!important}.std-services-title{color:#f7f3f0!important}
.std-services-intro{max-width:570px!important;margin:0 0 5px!important;color:#b9ada7!important;font-size:15px!important;line-height:1.65!important}
.std-price-hidden{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip-path:inset(50%)!important}
.std-service-tabs{width:100%!important;margin:34px 0 0!important;padding:0 0 8px!important;display:flex!important;gap:8px!important;
overflow-x:auto!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;
-webkit-mask-image:none!important;mask-image:none!important}
.std-service-tab{flex:0 0 auto!important;min-height:38px!important;padding:0 16px!important;border:1px solid rgba(255,255,255,.18)!important;
border-radius:999px!important;background:transparent!important;color:#cfc5bf!important;font-size:11px!important;font-weight:500!important}
.std-service-tab:hover{transform:translateY(-2px)!important;background:rgba(255,255,255,.06)!important}
.std-service-tab.active{background:#8b7167!important;border-color:#8b7167!important;color:#fff!important;box-shadow:none!important}
.std-service-list{display:block!important;width:100%!important;margin-top:24px!important;border:0!important}
.std-service-grid-ref{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.std-service-grid-ref:after{display:none!important}
.std-service-card-ref{position:relative!important;display:flex!important;min-height:142px!important;flex-direction:column!important;
padding:23px 68px 20px 23px!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:17px!important;
background:rgba(255,255,255,.045)!important;box-shadow:none!important;color:#f7f3f0!important;text-align:left!important}
.std-service-card-ref:after{position:absolute!important;top:20px!important;right:18px!important;display:grid!important;width:38px!important;height:38px!important;
place-items:center!important;border:1px solid rgba(255,255,255,.16)!important;border-radius:50%!important;background:rgba(255,255,255,.06)!important;
color:#d8b7aa!important;content:"↗"!important;font:500 15px/1 "Manrope",Arial,sans-serif!important}
.std-service-card-ref:hover{transform:translateY(-3px)!important;border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.07)!important;box-shadow:none!important}
.std-service-card-title-ref{color:#f7f3f0!important;font:500 clamp(23px,1.55vw,27px)/1.08 "Cormorant Garamond",Georgia,serif!important}
.std-service-card-detail-ref{margin-top:9px!important;color:#b9ada7!important;font-size:11px!important;line-height:1.5!important}
.std-service-card-bottom-ref{display:flex!important;align-items:end!important;justify-content:space-between!important;gap:12px!important;margin-top:auto!important;padding-top:20px!important}
.std-service-card-bottom-ref span{display:inline-flex!important;min-height:25px!important;align-items:center!important;padding:0 9px!important;border-radius:999px!important;background:rgba(255,255,255,.07)!important;color:#c9bdb6!important;font-size:9px!important}
.std-service-card-bottom-ref b{color:#f7f3f0!important;font:500 17px/1 "Cormorant Garamond",Georgia,serif!important}
.std-service-all-grid{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:50px}
.std-service-all-grid:after{content:"";position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,.13);transform:translateX(-.5px)}
.std-service-all-row{min-height:92px;padding:20px 5px;border:0;border-bottom:1px solid rgba(255,255,255,.14);background:transparent;
color:#f7f3f0!important;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;text-align:left}
.std-service-all-title{display:block;color:#f7f3f0;font:500 24px/1.08 "Cormorant Garamond",Georgia,serif}
.std-service-all-cat{display:block;margin-top:7px;color:#a99e98;font:500 9.5px/1 "Manrope",Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}
.std-service-all-action{color:#d8b7aa;font:500 11px/1 "Manrope",Arial,sans-serif;white-space:nowrap}
.std-service-more{width:min(100%,390px)!important;height:52px!important;margin:28px auto 0!important;border:1px solid rgba(255,255,255,.22)!important;
border-radius:8px!important;background:rgba(255,255,255,.06)!important;color:#f4eeea!important}
.std-service-more[hidden]{display:none!important}.std-services-count{margin-top:13px!important;text-align:center!important;color:#938984!important;font-size:10px!important}
.std-about{min-height:0!important;padding:88px 70px 96px!important;background:#f7f2eb!important;color:#171513!important}
.std-about-inner{width:min(100%,1360px)!important;margin:0 auto!important}.std-about-kicker{color:#88786e!important}.std-about-title{color:#171513!important}
.std-about-grid{margin-top:38px!important;padding:18px!important;display:grid!important;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr)!important;
gap:54px!important;align-items:stretch!important;border:1px solid rgba(66,55,49,.11)!important;border-radius:28px!important;background:#eee7df!important;
box-shadow:0 14px 34px rgba(47,37,31,.08)!important}
.std-about-visual{height:auto!important;min-height:500px!important;border-radius:20px!important;overflow:hidden!important;box-shadow:none!important;order:0!important}
.std-about-visual:after{background:none!important}.std-about-visual img{filter:none!important;object-fit:cover!important}
.std-about-rating{left:18px!important;bottom:18px!important;height:42px!important;padding:0 14px!important;background:rgba(18,17,16,.72)!important;color:#fff!important;border-color:rgba(255,255,255,.28)!important}
.std-about-rating strong,.std-about-rating span{color:#fff!important}
.std-about-copy{padding:38px 34px 34px 0!important;display:flex!important;flex-direction:column!important;justify-content:center!important}
.std-about-lead{margin:0!important;max-width:670px!important;color:#1d1a18!important;font:500 clamp(31px,2.55vw,40px)/1.12 "Cormorant Garamond",Georgia,serif!important;letter-spacing:-.025em!important}
.std-about-text{max-width:660px!important;margin:23px 0 0!important;color:#58504a!important;font-size:15px!important;line-height:1.68!important}
.std-about-facts{display:grid!important;grid-template-columns:1fr!important;gap:0!important;margin-top:29px!important;border-top:1px solid rgba(66,55,49,.12)!important}
.std-about-fact{min-height:57px!important;padding:0!important;border:0!important;border-bottom:1px solid rgba(66,55,49,.12)!important;border-radius:0!important;background:transparent!important;
display:flex!important;align-items:center!important;justify-content:flex-start!important;text-align:left!important}
.std-about-fact strong{color:#2b2724!important;font:500 16px/1.2 "Manrope",Arial,sans-serif!important;white-space:nowrap!important}
#salonDesktopTeam.std-team{min-height:0!important;padding:84px 70px 88px!important;background:#2f2926!important;color:#f7f3f0!important}
#salonDesktopTeam .std-team-inner{width:min(100%,1360px)!important}#salonDesktopTeam .std-team-kicker{color:#b8ada7!important}
#salonDesktopTeam .std-team-title{color:#f7f3f0!important}#salonDesktopTeam .std-team-subtitle{margin-top:14px!important;color:#b9ada7!important;font-size:14px!important}
#salonDesktopTeam .std-team-track{display:grid!important;width:100%!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:28px!important;margin-top:42px!important;overflow:visible!important;padding:0!important}
#salonDesktopTeam .std-master{position:relative!important;display:block!important;width:100%!important;min-width:0!important;padding:20px 12px 22px!important;
border:1px solid rgba(255,255,255,.10)!important;border-radius:18px!important;background:rgba(255,255,255,.035)!important;color:#f7f3f0!important;text-align:center!important}
#salonDesktopTeam .std-master-arrow{position:absolute!important;top:13px!important;right:13px!important;width:34px!important;height:34px!important;border:1px solid rgba(255,255,255,.14)!important;
border-radius:50%!important;background:rgba(255,255,255,.05)!important;color:#d8b7aa!important;display:grid!important;place-items:center!important}
#salonDesktopTeam .std-master-avatar{width:min(100%,176px)!important;height:auto!important;aspect-ratio:1!important;margin:0 auto!important;border-radius:50%!important;
background:linear-gradient(145deg,#806b61,#5b4a43)!important;color:#e6d8d0!important;border:1px solid rgba(255,255,255,.10)!important}
#salonDesktopTeam .std-master-name{margin-top:17px!important;color:#f7f3f0!important;font-size:27px!important}
#salonDesktopTeam .std-master-role{margin-top:6px!important;color:#c5b9b2!important;font-size:11px!important}
.std-master-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:13px}
.std-master-cat{display:inline-flex;min-height:25px;align-items:center;padding:0 9px;border:1px solid rgba(255,255,255,.11);border-radius:999px;color:#d8cdc6;font:500 9px/1 "Manrope",Arial,sans-serif}
#salonDesktopReviews.std-reviews{height:auto!important;min-height:0!important;padding:82px 0 70px!important;background:#fff!important;color:#171513!important}
#salonDesktopReviews .std-reviews-head{width:min(calc(100% - 96px),1360px)!important;margin:0 auto!important;text-align:center!important}
#salonDesktopReviews .std-reviews-kicker{color:#746c66!important}#salonDesktopReviews .std-reviews-title{color:#171513!important}
#salonDesktopReviews .std-reviews-score{margin-top:34px!important}#salonDesktopReviews .std-reviews-score>strong{font:500 78px/.82 "Cormorant Garamond",Georgia,serif!important;color:#171513!important}
#salonDesktopReviews .std-reviews-stars{margin-top:17px!important;font-size:27px!important;color:#b78d4f!important}
#salonDesktopReviews .std-reviews-count{margin-top:13px!important;color:#716862!important;font-size:13px!important}
#salonDesktopReviews .std-review-card{height:270px!important;min-height:270px!important;padding:25px!important;border-color:rgba(66,55,49,.15)!important;border-radius:13px!important;background:#f6f7f8!important}
#salonDesktopReviews .std-review-text{margin-top:22px!important;color:#4f4843!important;font-size:14px!important;line-height:1.5!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:5!important;overflow:hidden!important}
.std-contact{min-height:0!important;padding:82px 70px 46px!important;background:#2f2926!important;color:#f7f3f0!important}
.std-contact-inner{width:min(100%,1360px)!important;grid-template-columns:500px minmax(0,1fr)!important;gap:42px!important}
.std-contact-kicker{color:#b8ada7!important}.std-contact-title{color:#f7f3f0!important;margin-bottom:32px!important}.std-contact-right{padding-top:94px!important}
.std-contact-card{min-height:76px!important;border-color:rgba(255,255,255,.13)!important;background:rgba(255,255,255,.06)!important;color:#f7f3f0!important}
.std-contact-card:hover{border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.085)!important}
.std-contact-card-title{color:#f7f3f0!important;font-size:21px!important}.std-contact-card-sub{color:#c7bbb4!important;font-size:11px!important}.std-contact-card-icon{color:#f0e8e3!important}
.std-contact-map{height:430px!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:18px!important;overflow:hidden!important;background:#423a36!important}
.std-contact-status{border-color:rgba(255,255,255,.16)!important;background:#493336!important;color:#d59a9f!important}
.std-contact-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}
.std-contact-bottom{margin-top:34px!important;display:flex!important;justify-content:center!important}
.std-contact-brand{width:min(100%,480px)!important;min-height:76px!important;padding:0 24px!important;border-radius:14px!important;background:#171513!important;color:#fff!important;
display:flex!important;align-items:center!important;justify-content:space-between!important;gap:24px!important;box-shadow:none!important;text-decoration:none!important}
.std-contact-brand strong{font:500 23px/1 "Cormorant Garamond",Georgia,serif!important;color:#fff!important;white-space:nowrap}
.std-contact-brand-text{max-width:220px!important;text-align:right!important;color:#d6cec8!important;font:400 10px/1.35 "Manrope",Arial,sans-serif!important}
.std-master-page-close{border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}
.std-master-profile-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:7px;margin-top:12px}
.std-master-profile-cats span{display:inline-flex;min-height:28px;align-items:center;padding:0 10px;border:1px solid rgba(61,49,43,.12);border-radius:999px;color:#71665f;font-size:10px}
.std-master-tabs{display:flex!important;justify-content:center!important;gap:7px!important;margin:24px auto 0!important;overflow-x:auto!important}
.std-master-tabs button{height:42px!important;padding:0 17px!important;border:1px solid rgba(61,49,43,.12)!important;border-radius:999px!important;background:transparent!important;color:#615851!important;font-size:11px!important}
.std-master-tabs button.active{background:#171513!important;color:#fff!important;border-color:#171513!important}
.std-master-tab-content{margin-top:28px!important}.std-master-tab-content h3{margin:0 0 14px!important;font:500 31px/1 "Cormorant Garamond",Georgia,serif!important}
.std-master-about-copy{max-width:660px;margin:0 auto;color:#514a45;font-size:13px;line-height:1.65;text-align:center}
.std-master-page-works{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}
.std-master-page-work{border:0;padding:0;background:none}.std-master-page-work img{width:100%!important;aspect-ratio:1.15!important;object-fit:cover!important;border-radius:11px!important}
.std-section-reveal{opacity:0;transform:translate3d(0,28px,0);transition:opacity .72s ease,transform .82s cubic-bezier(.16,1,.3,1)}
.std-section-reveal.in-view{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.std-section-reveal{opacity:1!important;transform:none!important;transition:none!important}}
@media(max-width:1180px){
.std-header{padding:0 30px!important}.std-nav{gap:19px!important}.std-header-right{gap:9px!important}.std-phone{font-size:14px!important}
.std-lang-switch{gap:1px}.std-lang-switch button{min-width:23px;font-size:10px!important}
.std-services-inner{width:min(calc(100% - 56px),1360px)!important}.std-services-head-ref{gap:40px!important}
.std-about{padding-left:42px!important;padding-right:42px!important}.std-about-grid{gap:36px!important}.std-about-copy{padding-right:18px!important}
#salonDesktopTeam.std-team{padding-left:42px!important;padding-right:42px!important}#salonDesktopTeam .std-team-track{gap:16px!important}
.std-contact{padding-left:42px!important;padding-right:42px!important}.std-contact-inner{grid-template-columns:430px minmax(0,1fr)!important}
.std-about-fact strong{font-size:14px!important}
}
@media(max-width:930px){
.std-nav{display:none!important}.std-services-head-ref{grid-template-columns:1fr!important;gap:20px!important}
.std-service-grid-ref,.std-service-all-grid{grid-template-columns:1fr!important}.std-service-all-grid:after{display:none!important}
.std-about-grid{grid-template-columns:1fr!important}.std-about-visual{min-height:390px!important}.std-about-copy{padding:24px 18px 30px!important}
#salonDesktopTeam .std-team-track{grid-template-columns:repeat(2,minmax(0,1fr))!important}
.std-contact-inner{grid-template-columns:1fr!important}.std-contact-right{padding-top:0!important}.std-contact-map{height:360px!important}
.std-gallery-browser-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
}
}
@media(min-width:768px){
html,body{
scroll-behavior:smooth!important;
overscroll-behavior-y:auto!important;
}
.std-hero{
height:calc(100dvh - 80px)!important;
min-height:700px!important;
background:#fff!important;
}
.std-hero-copy{
position:relative!important;
align-items:stretch!important;
justify-content:center!important;
padding:0 24px!important;
overflow:visible!important;
}
.std-hero-frame{
position:relative!important;
z-index:2!important;
width:min(100%,660px)!important;
height:100%!important;
margin:30px auto 0!important;
border:1px solid rgba(70,55,48,.10)!important;
border-bottom:0!important;
border-radius:24px 24px 0 0!important;
background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 82%,rgba(247,242,235,.93) 100%)!important;
box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05)!important;
display:flex!important;
justify-content:center!important;
overflow:visible!important;
}
.std-hero-frame:after{
content:""!important;
position:absolute!important;
z-index:4!important;
left:-26px!important;
right:-26px!important;
bottom:-2px!important;
height:150px!important;
background:linear-gradient(180deg,rgba(240,232,22—) 0%,rgba(240,232,225,.60) 48%,#f0e8e1 90%,#f0e8e1 100%)!important;
pointer-events:none!important;
}
.std-copy-inner{
position:relative!important;
z-index:5!important;
width:min(100% - 64px,560px)!important;
margin-top:116px!important;
transform:none!important;
}
.std-scroll-hint{
position:absolute!important;
z-index:7!important;
left:50%!important;
right:auto!important;
bottom:24px!important;
transform:translateX(-50%)!important;
display:flex!important;
flex-direction:column!important;
align-items:center!important;
gap:9px!important;
padding:0!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
box-shadow:none!important;
backdrop-filter:none!important;
color:#65564e!important;
text-decoration:none!important;
animation:none!important;
}
.std-scroll-label{
display:block!important;
color:#7d6d65!important;
font:600 9px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.30em!important;
text-transform:uppercase!important;
white-space:nowrap!important;
}
.std-scroll-circle{
display:grid!important;
width:54px!important;
height:54px!important;
place-items:center!important;
border:1px solid rgba(255,255,255,.24)!important;
border-radius:50%!important;
background:#715b53!important;
color:#fff!important;
box-shadow:0 12px 28px rgba(74,54,47,.22)!important;
font:300 24px/1 Arial,sans-serif!important;
letter-spacing:0!important;
animation:stdScrollCircleFloat 2.5s ease-in-out infinite!important;
}
@keyframes stdScrollCircleFloat{
0%,100%{transform:translateY(0)}
50%{transform:translateY(5px)}
}
@media(prefers-reduced-motion:reduce){
.std-scroll-circle{animation:none!important}
}
#salonDesktopServices.mct-prices{
overflow:hidden!important;
padding:96px 0 104px!important;
background:#2f2926!important;
color:#f7f3f0!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
position:relative!important;
display:grid!important;
width:min(calc(100% - 96px),1360px)!important;
margin:0 auto!important;
grid-template-columns:minmax(285px,.72fr) minmax(0,1.58fr)!important;
column-gap:clamp(46px,5.5vw,82px)!important;
align-items:start!important;
}
#salonDesktopServices .mct-price-head{
position:sticky!important;
top:108px!important;
display:block!important;
grid-column:1!important;
width:100%!important;
padding:0 clamp(22px,2.7vw,40px) 0 0!important;
text-align:left!important;
transform:translate(-1.5cm,-3cm)!important;
}
#salonDesktopServices .mct-price-head:after{
position:absolute!important;
top:4px!important;
right:-1.6cm!important;
width:1px!important;
height:min(72vh,660px)!important;
background:linear-gradient(180deg,transparent,rgba(255,255,255,.20) 10%,rgba(255,255,255,.12) 86%,transparent)!important;
content:""!important;
}
#salonDesktopServices .mct-section-kicker{
margin:0!important;
color:#b8ada7!important;
font:600 12px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.24em!important;
text-transform:uppercase!important;
}
#salonDesktopServices .mct-price-head h2{
width:auto!important;
margin:12px 0 0!important;
color:#f7f3f0!important;
font:500 clamp(49.5px,4.125vw,63.8px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important;
white-space:nowrap!important;
}
#salonDesktopServices .mct-price-head>span{
display:block!important;
width:auto!important;
max-width:374px!important;
margin:26px 0 0!important;
color:#b9ada7!important;
font-size:14.3px!important;
line-height:1.72!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
grid-column:2!important;
width:100%!important;
min-width:0!important;
margin:0 0 12px!important;
padding:24px 0 16px!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs{
width:calc(100% + 32px)!important;
margin:-10px -16px -16px!important;
padding:10px 16px 16px!important;
overflow-x:auto!important;
overflow-y:hidden!important;
scrollbar-width:none!important;
overscroll-behavior-x:contain!important;
scroll-snap-type:x proximity!important;
box-sizing:border-box!important;
}
#salonDesktopServices .mct-tabs::-webkit-scrollbar{display:none!important}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{
display:flex!important;
width:max-content!important;
min-width:100%!important;
flex-wrap:nowrap!important;
gap:10px!important;
padding:5px 6px 18px!important;
box-sizing:border-box!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
display:inline-flex!important;
width:auto!important;
min-width:max-content!important;
min-height:56px!important;
flex:0 0 auto!important;
align-items:center!important;
justify-content:center!important;
padding:0 28px!important;
border:1px solid rgba(255,255,255,.18)!important;
border-radius:14px!important;
background:rgba(255,255,255,.045)!important;
color:#cfc5bf!important;
box-shadow:0 10px 22px rgba(0,0,0,.08)!important;
font:600 14px/1 "Manrope",Arial,sans-serif!important;
white-space:nowrap!important;
scroll-snap-align:start!important;
transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease!important;
}
#salonDesktopServices .mct-tab:not(.is-active):hover{
border-color:rgba(255,255,255,.28)!important;
background:rgba(255,255,255,.08)!important;
transform:translateY(-2px)!important;
}
#salonDesktopServices .mct-tab.is-active{
border-color:#8b7167!important;
background:#8b7167!important;
color:#fff!important;
box-shadow:0 14px 30px rgba(0,0,0,.16)!important;
}
#salonDesktopServices .dct-service-groups{
grid-column:2!important;
width:100%!important;
min-width:0!important;
margin-top:-1cm!important;
}
#salonDesktopServices .dct-service-category+.dct-service-category{
margin-top:30px!important;
}
#salonDesktopServices .dct-service-category-heading{
display:flex!important;
min-height:30px!important;
align-items:center!important;
gap:12px!important;
margin:0 0 10px!important;
color:#d8b7aa!important;
font-size:13px!important;
font-weight:600!important;
letter-spacing:.12em!important;
text-transform:uppercase!important;
}
#salonDesktopServices .dct-service-category-heading:before{
width:34px!important;
height:1px!important;
flex:0 0 34px!important;
background:rgba(216,183,170,.38)!important;
content:""!important;
}
#salonDesktopServices .dct-service-category-heading i{
height:1px!important;
flex:1 1 auto!important;
background:linear-gradient(90deg,rgba(216,183,170,.26),transparent)!important;
}
#salonDesktopServices .dct-service-category-list{
display:grid!important;
width:100%!important;
gap:11px!important;
}
#salonDesktopServices .dct-service-card,
#salonDesktopServices .dct-service-card.has-description{
position:relative!important;
display:block!important;
width:100%!important;
min-height:104px!important;
padding:18px 24px!important;
overflow:hidden!important;
border:1px solid rgba(255,255,255,.12)!important;
border-radius:20px!important;
background:rgba(255,255,255,.045)!important;
box-shadow:0 10px 26px rgba(0,0,0,.06)!important;
color:#f7f3f0!important;
text-align:left!important;
text-decoration:none!important;
transition:transform 200ms ease,border-color 200ms ease,box-shadow 200ms ease,background 200ms ease!important;
}
#salonDesktopServices .dct-service-card:hover{
border-color:rgba(255,255,255,.23)!important;
background:rgba(255,255,255,.075)!important;
box-shadow:0 16px 35px rgba(0,0,0,.10)!important;
transform:translateY(-3px)!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
display:grid!important;
min-height:68px!important;
grid-template-columns:minmax(0,1fr) 112px 150px!important;
grid-template-rows:1fr!important;
align-items:center!important;
column-gap:18px!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-title{
grid-column:1!important;
grid-row:1!important;
align-self:center!important;
margin:0!important;
color:#f7f3f0!important;
font:500 clamp(24px,1.8vw,30px)/1.04 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-body{
min-height:84px!important;
grid-template-rows:auto auto!important;
align-content:center!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-title{
grid-row:1!important;
align-self:end!important;
}
#salonDesktopServices .dct-service-card-description{
grid-column:1!important;
grid-row:2!important;
align-self:start!important;
max-width:95%!important;
margin:7px 0 0!important;
color:#b9ada7!important;
}
#salonDesktopServices .dct-service-card-description.is-empty{display:none!important}
#salonDesktopServices .dct-service-card-description p{
margin:0!important;
color:#b9ada7!important;
font-size:11.5px!important;
line-height:1.48!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-meta{
display:contents!important;
}
#salonDesktopServices .dct-service-card-meta>small{
grid-column:2!important;
grid-row:1!important;
align-self:center!important;
justify-self:start!important;
display:inline-flex!important;
min-height:30px!important;
align-items:center!important;
padding:0 10px!important;
border:1px solid rgba(255,255,255,.10)!important;
border-radius:999px!important;
background:rgba(255,255,255,.06)!important;
color:#c9bdb6!important;
font-size:11px!important;
font-weight:650!important;
white-space:nowrap!important;
}
#salonDesktopServices .dct-service-card-meta>small:before{
margin-right:6px!important;
content:"◷"!important;
font-size:12px!important;
}
#salonDesktopServices .dct-service-card-meta>b{
grid-column:3!important;
grid-row:1!important;
align-self:center!important;
justify-self:end!important;
width:150px!important;
min-width:150px!important;
color:#f7f3f0!important;
font:600 23px/1 "Cormorant Garamond",Georgia,serif!important;
text-align:right!important;
white-space:nowrap!important;
}
#salonDesktopServices .mct-more-services{
display:flex!important;
grid-column:2!important;
width:320px!important;
min-height:58px!important;
margin:26px auto 0!important;
align-items:center!important;
justify-content:center!important;
gap:9px!important;
border:1px solid rgba(255,255,255,.22)!important;
border-radius:10px!important;
background:rgba(255,255,255,.06)!important;
color:#f4eeea!important;
font:600 13px/1 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .mct-more-services[hidden]{display:none!important}
#salonDesktopServices .mct-more-services svg{transition:transform .2s ease!important}
#salonDesktopServices .mct-more-services.is-open svg{transform:rotate(180deg)!important}
#salonDesktopServices .mct-more-services-mobile-copy{display:none!important}
#salonDesktopServices .mct-more-services-desktop-copy{display:inline!important}
#salonDesktopAbout.mct-about{
padding:84px 0 88px!important;
background:#fff!important;
color:#171513!important;
}
#salonDesktopAbout>.mct-shell{
width:min(calc(100% - 96px),1360px)!important;
margin:0 auto!important;
}
#salonDesktopAbout .mct-about-head{
display:flex!important;
align-items:end!important;
justify-content:space-between!important;
gap:24px!important;
}
#salonDesktopAbout .mct-section-kicker{
margin:0!important;
color:#88786e!important;
font:600 12px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.22em!important;
text-transform:uppercase!important;
}
#salonDesktopAbout .mct-about-head h2{
margin:13px 0 0!important;
color:#171513!important;
font:500 clamp(54px,4.35vw,68px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important;
}
#salonDesktopAbout .mct-about-monogram{
color:rgba(113,91,83,.22)!important;
font:500 76px/.8 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopAbout .mct-about-card{
display:grid!important;
grid-template-columns:minmax(360px,.84fr) minmax(500px,1.16fr)!important;
height:clamp(600px,43vw,640px)!important;
min-height:0!important;
margin-top:28px!important;
overflow:hidden!important;
border:1px solid rgba(85,64,57,.10)!important;
border-radius:28px!important;
background:#fff!important;
box-shadow:0 18px 48px rgba(67,50,44,.075)!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
position:relative!important;
height:100%!important;
min-height:540px!important;
overflow:hidden!important;
}
#salonDesktopAbout .mct-about-portrait{
width:100%!important;
height:100%!important;
margin:0!important;
overflow:hidden!important;
}
#salonDesktopAbout .mct-about-portrait img{
display:block!important;
width:100%!important;
height:100%!important;
object-fit:cover!important;
object-position:center 20%!important;
}
#salonDesktopAbout .mct-about-copy{
display:flex!important;
flex-direction:column!important;
justify-content:center!important;
padding:clamp(34px,3.6vw,52px)!important;
}
#salonDesktopAbout .mct-about-lead{
margin:0 0 12px!important;
color:#1d1a18!important;
font:500 clamp(30px,2.5vw,38px)/1.15 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.025em!important;
}
#salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){
margin:8px 0 0!important;
color:#58504a!important;
font-size:13.5px!important;
line-height:1.62!important;
}
#salonDesktopAbout .mct-about-list{display:none!important}
#salonDesktopAbout .dct-about-amenities{
display:block!important;
margin-top:24px!important;
padding-top:20px!important;
border-top:1px solid rgba(83,63,55,.11)!important;
}
#salonDesktopAbout .dct-about-amenities-head{
display:flex!important;
align-items:center!important;
justify-content:space-between!important;
gap:22px!important;
}
#salonDesktopAbout .dct-about-amenities-head>span{
color:#716a66!important;
font-size:10px!important;
}
#salonDesktopAbout .dct-about-amenities-grid{
display:grid!important;
grid-template-columns:repeat(3,minmax(0,1fr))!important;
margin-top:16px!important;
}
#salonDesktopAbout .dct-about-amenities-grid article{
min-width:0!important;
padding:3px 15px 0 0!important;
}
#salonDesktopAbout .dct-about-amenities-grid article+article{
padding-left:15px!important;
border-left:1px solid rgba(83,63,55,.10)!important;
}
#salonDesktopAbout .dct-about-amenities-grid strong,
#salonDesktopAbout .dct-about-amenities-grid span{display:block!important}
#salonDesktopAbout .dct-about-amenities-grid strong{
color:#373331!important;
font:600 22px/1.08 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopAbout .dct-about-amenities-grid span{
margin-top:5px!important;
color:#716a66!important;
font-size:9.5px!important;
line-height:1.42!important;
}
#salonDesktopTeam .std-team-track{
gap:42px!important;
}
#salonDesktopTeam .std-master{
position:relative!important;
display:block!important;
width:100%!important;
min-width:0!important;
padding:0!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
box-shadow:none!important;
color:#f7f3f0!important;
text-align:center!important;
}
#salonDesktopTeam .std-master-arrow{display:none!important}
#salonDesktopTeam .std-master-avatar{
width:min(100%,188px)!important;
height:auto!important;
aspect-ratio:1!important;
margin:0 auto!important;
border-radius:50%!important;
background:linear-gradient(145deg,#806b61,#5b4a43)!important;
border:1px solid rgba(255,255,255,.08)!important;
box-shadow:none!important;
}
#salonDesktopTeam .std-master-name{
margin-top:17px!important;
}
#salonDesktopTeam .std-master-cats{
margin-top:9px!important;
gap:8px!important;
}
#salonDesktopTeam .std-master-cat{
min-height:0!important;
padding:0!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
color:#bdb5b0!important;
font-size:10px!important;
}
#salonDesktopReviews.std-reviews{
position:relative!important;
box-sizing:border-box!important;
width:100%!important;
height:auto!important;
min-height:760px!important;
overflow:hidden!important;
padding:65px 0 52px!important;
background:#fff!important;
color:#171513!important;
}
#salonDesktopReviews .std-reviews-head{
width:min(calc(100% - 128px),1408px)!important;
margin:0 auto!important;
text-align:center!important;
}
#salonDesktopReviews .std-reviews-kicker{
margin:0!important;
color:#746c66!important;
font:500 17px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.30em!important;
text-transform:uppercase!important;
}
#salonDesktopReviews .std-reviews-title{
margin:22px 0 0!important;
color:#151517!important;
font:500 76px/.92 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important;
}
#salonDesktopReviews .std-reviews-score{margin-top:44px!important;text-align:center!important}
#salonDesktopReviews .std-reviews-score>strong{
display:block!important;
margin:0!important;
color:#151517!important;
font:500 88px/.78 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.045em!important;
}
#salonDesktopReviews .std-reviews-stars{
display:block!important;
margin-top:21px!important;
color:#b78d4f!important;
font-size:34px!important;
line-height:1!important;
letter-spacing:6px!important;
}
#salonDesktopReviews .std-reviews-count{
margin-top:20px!important;
color:#716862!important;
font:400 18px/1 "Manrope",Arial,sans-serif!important;
}
#salonDesktopReviews .std-reviews-viewport{
position:relative!important;
box-sizing:border-box!important;
width:100%!important;
margin-top:35px!important;
padding:0 64px 4px!important;
overflow:hidden!important;
cursor:grab!important;
}
#salonDesktopReviews .std-reviews-loop{
display:flex!important;
align-items:stretch!important;
gap:16px!important;
width:max-content!important;
will-change:transform!important;
}
#salonDesktopReviews .std-reviews-set{
display:flex!important;
flex:0 0 auto!important;
align-items:stretch!important;
gap:16px!important;
}
#salonDesktopReviews .std-review-card{
box-sizing:border-box!important;
flex:0 0 459px!important;
width:459px!important;
height:320px!important;
min-width:459px!important;
min-height:320px!important;
max-width:none!important;
padding:31px 30px 28px!important;
border:1px solid rgba(66,55,49,.15)!important;
border-radius:12px!important;
background:#f6f7f8!important;
color:#19191b!important;
text-decoration:none!important;
box-shadow:none!important;
}
#salonDesktopReviews .std-review-head{
display:grid!important;
grid-template-columns:70px minmax(0,1fr)!important;
gap:24px!important;
align-items:center!important;
}
#salonDesktopReviews .std-review-avatar{
width:70px!important;
height:70px!important;
border-radius:50%!important;
display:grid!important;
place-items:center!important;
background:#e4e6e8!important;
border:1px solid rgba(66,55,49,.10)!important;
color:#514943!important;
font:500 32px/1 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopReviews .std-review-name{
display:block!important;
margin:0!important;
color:#2a2522!important;
font:600 25px/1 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopReviews .std-review-meta{
display:block!important;
margin-top:7px!important;
color:#818087!important;
font:500 11px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.13em!important;
text-transform:uppercase!important;
}
#salonDesktopReviews .std-review-stars{
display:block!important;
margin-top:8px!important;
color:#b78d4f!important;
font-size:16px!important;
line-height:1!important;
letter-spacing:1.5px!important;
}
#salonDesktopReviews .std-review-text{
display:-webkit-box!important;
margin:31px 0 0!important;
min-height:95px!important;
overflow:hidden!important;
color:#4f4843!important;
font:400 16px/1.52 "Manrope",Arial,sans-serif!important;
-webkit-box-orient:vertical!important;
-webkit-line-clamp:4!important;
}
#salonDesktopReviews .std-review-more{
display:block!important;
margin-top:18px!important;
color:#67666c!important;
font:400 12px/1 "Manrope",Arial,sans-serif!important;
}
#salonDesktopReviews .std-reviews-actions{
display:flex!important;
justify-content:center!important;
margin-top:27px!important;
}
#salonDesktopReviews .std-reviews-all{
width:458px!important;
height:55px!important;
border:1px solid rgba(66,55,49,.18)!important;
border-radius:7px!important;
background:#f3f4f5!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
color:#242327!important;
font:500 14px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.14em!important;
text-transform:uppercase!important;
}
#salonDesktopContacts.std-contact{
padding:82px 70px 0!important;
background:#2f2926!important;
color:#f7f3f0!important;
}
#salonDesktopContacts .std-contact-inner{
display:block!important;
width:min(100%,1360px)!important;
margin:0 auto!important;
}
#salonDesktopContacts .std-contact-head{
display:flex!important;
align-items:flex-end!important;
justify-content:space-between!important;
gap:28px!important;
}
#salonDesktopContacts .std-contact-kicker{color:#b8ada7!important}
#salonDesktopContacts .std-contact-title{
margin:14px 0 0!important;
color:#f7f3f0!important;
}
#salonDesktopContacts .std-contact-status{
position:static!important;
display:inline-flex!important;
min-height:38px!important;
align-items:center!important;
gap:7px!important;
padding:8px 12px!important;
border:1px solid rgba(255,255,255,.16)!important;
border-radius:999px!important;
background:#493336!important;
color:#d59a9f!important;
}
#salonDesktopContacts .std-contact-status.open{
background:#2e4133!important;
border-color:#4d6752!important;
color:#a9d5b0!important;
}
#salonDesktopContacts .std-contact-body{
display:grid!important;
grid-template-columns:minmax(420px,.9fr) minmax(0,1.1fr)!important;
gap:34px!important;
margin-top:34px!important;
align-items:stretch!important;
}
#salonDesktopContacts .std-contact-list{
display:grid!important;
gap:10px!important;
margin:0!important;
}
#salonDesktopContacts .std-contact-card{
min-height:76px!important;
grid-template-columns:46px minmax(0,1fr)!important;
gap:13px!important;
padding:13px 15px!important;
border:1px solid rgba(255,255,255,.13)!important;
border-radius:14px!important;
background:rgba(255,255,255,.06)!important;
color:#f7f3f0!important;
}
#salonDesktopContacts .std-contact-card-icon{
width:40px!important;
height:40px!important;
display:grid!important;
place-items:center!important;
border-radius:50%!important;
background:rgba(255,255,255,.08)!important;
color:#f0e8e3!important;
}
#salonDesktopContacts .std-contact-card-title{
color:#f7f3f0!important;
font:500 19px/1.15 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopContacts .std-contact-card-sub{
margin-top:5px!important;
color:#c7bbb4!important;
font-size:10.5px!important;
}
#salonDesktopContacts .std-contact-right{
display:flex!important;
flex-direction:column!important;
padding:0!important;
}
#salonDesktopContacts .std-contact-map{
height:100%!important;
min-height:334px!important;
border:1px solid rgba(255,255,255,.12)!important;
border-radius:18px!important;
overflow:hidden!important;
background:#423a36!important;
}
#salonDesktopContacts .std-contact-actions{
display:grid!important;
grid-template-columns:1fr 1.15fr!important;
gap:10px!important;
margin-top:12px!important;
}
#salonDesktopContacts .std-contact-action-btn{
height:50px!important;
border-radius:10px!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
text-decoration:none!important;
font:500 12px/1 "Manrope",Arial,sans-serif!important;
}
#salonDesktopContacts .std-contact-call{
border:1px solid rgba(255,255,255,.22)!important;
color:#f7f3f0!important;
}
#salonDesktopContacts .std-contact-route{
background:#f4ede8!important;
color:#2b2522!important;
}
#salonDesktopContacts .std-contact-bottom{
width:calc(100% + 140px)!important;
margin:42px -70px 0!important;
display:block!important;
}
#salonDesktopContacts .std-contact-brand{
width:100%!important;
min-height:96px!important;
padding:12px 24px!important;
border:0!important;
border-radius:0!important;
background:#11100f!important;
color:#fff!important;
display:flex!important;
flex-direction:column!important;
align-items:center!important;
justify-content:center!important;
gap:8px!important;
box-shadow:none!important;
}
#salonDesktopContacts .br-tanem-mark{
width:30px!important;
height:30px!important;
border:1px solid rgba(255,255,255,.42)!important;
border-radius:8px!important;
display:grid!important;
place-items:center!important;
color:#fff!important;
font:500 21px/1 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopContacts .br-tanem-copy{
display:block!important;
color:#cfc8c4!important;
font:400 10px/1.2 "Manrope",Arial,sans-serif!important;
text-align:center!important;
}
#salonDesktopContacts .br-tanem-copy strong{
display:inline!important;
color:#fff!important;
font:500 15px/1 "Cormorant Garamond",Georgia,serif!important;
}
@media(max-width:1199px){
#salonDesktopServices.mct-prices>.mct-shell{
width:min(calc(100% - 56px),1360px)!important;
grid-template-columns:minmax(255px,.68fr) minmax(0,1.52fr)!important;
column-gap:34px!important;
}
#salonDesktopServices .mct-price-head{
top:96px!important;
}
#salonDesktopServices .mct-price-head h2{font-size:47.3px!important}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
grid-template-columns:minmax(0,1fr) 98px 132px!important;
column-gap:14px!important;
}
#salonDesktopServices .dct-service-card-meta>b{
width:132px!important;
min-width:132px!important;
}
#salonDesktopAbout>.mct-shell{
width:min(calc(100% - 56px),1360px)!important;
}
#salonDesktopAbout .mct-about-card{
grid-template-columns:minmax(330px,.84fr) minmax(0,1.16fr)!important;
}
#salonDesktopContacts.std-contact{padding-left:42px!important;padding-right:42px!important}
#salonDesktopContacts .std-contact-bottom{
width:calc(100% + 84px)!important;
margin-left:-42px!important;
margin-right:-42px!important;
}
}
@media(max-width:930px){
.std-hero-frame{margin-top:18px!important}
.std-copy-inner{width:min(100% - 44px,540px)!important;margin-top:90px!important}
#salonDesktopServices.mct-prices>.mct-shell{
grid-template-columns:1fr!important;
row-gap:26px!important;
}
#salonDesktopServices .mct-price-head{
position:relative!important;
top:auto!important;
grid-column:1!important;
padding:0!important;
transform:none!important;
}
#salonDesktopServices .mct-price-head:after{display:none!important}
#salonDesktopServices .mct-tabs-ribbon-wrap,
#salonDesktopServices .dct-service-groups,
#salonDesktopServices .mct-more-services{grid-column:1!important}
#salonDesktopServices .dct-service-groups{margin-top:0!important}
#salonDesktopAbout .mct-about-card{
grid-template-columns:1fr!important;
height:auto!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{min-height:390px!important}
#salonDesktopAbout .dct-about-amenities-grid{grid-template-columns:1fr!important;gap:12px!important}
#salonDesktopAbout .dct-about-amenities-grid article+article{padding-left:0!important;border-left:0!important}
#salonDesktopContacts .std-contact-body{grid-template-columns:1fr!important}
#salonDesktopContacts .std-contact-map{min-height:330px!important}
}
}
@media(min-width:768px){
html,body{scroll-behavior:auto!important;overscroll-behavior-y:auto!important}
.std-hero{height:calc(100dvh - 80px)!important;min-height:0!important}
.std-hero-copy{min-height:0!important}
.std-hero-frame{min-height:0!important}
#salonDesktopPortfolio,#salonDesktopServices,#salonDesktopAbout,#salonDesktopTeam,#salonDesktopReviews,#salonDesktopContacts{scroll-margin-top:80px!important}
}
@media(min-width:768px) and (max-height:820px){
.std-hero-frame{margin-top:18px!important}
.std-copy-inner{margin-top:72px!important;width:min(100% - 56px,540px)!important}
.std-hero-kicker{margin-bottom:20px!important}
.std-logo-sub{margin-bottom:22px!important}
.std-tagline{margin-bottom:22px!important;font-size:21px!important}
.std-meta{margin-bottom:20px!important}
.std-meta-icon{width:52px!important;height:52px!important;flex-basis:52px!important}
.std-btn{height:58px!important}
.std-scroll-hint{bottom:14px!important}
.std-scroll-circle{width:46px!important;height:46px!important}
}
@media(min-width:768px){
.std-header{
height:80px!important;
padding:0 48px!important;
background:#fff!important;
border-bottom:1px solid rgba(77,59,50,.055)!important;
}
.std-header-brand{
width:auto!important;
min-width:0!important;
align-items:flex-start!important;
}
.std-header-brand-main{
font-size:31px!important;
letter-spacing:.075em!important;
}
.std-header-brand-sub{
margin-top:7px!important;
font-size:8px!important;
letter-spacing:.38em!important;
padding-left:2px!important;
}
.std-header-right{
margin-left:auto!important;
gap:19px!important;
transform:none!important;
}
.std-phone{font-size:16px!important}
.std-header-book{
width:158px!important;
min-width:158px!important;
height:48px!important;
font-size:15px!important;
}
.std-hero{
position:relative!important;
isolation:isolate!important;
display:grid!important;
grid-template-columns:46.5% 53.5%!important;
height:calc(100dvh - 80px)!important;
min-height:690px!important;
overflow:hidden!important;
background:#fff!important;
}
.std-hero:before,
.std-hero:after{
content:""!important;
position:absolute!important;
z-index:0!important;
width:1040px!important;
height:1040px!important;
border:1px solid rgba(151,112,91,.17)!important;
border-radius:50%!important;
pointer-events:none!important;
background:transparent!important;
}
.std-hero:before{
left:33%!important;
top:-600px!important;
}
.std-hero:after{
width:820px!important;
height:820px!important;
right:-410px!important;
bottom:-540px!important;
}
.std-hero-copy{
position:relative!important;
z-index:2!important;
min-width:0!important;
align-items:stretch!important;
justify-content:flex-start!important;
padding:0 40px 0 78px!important;
overflow:visible!important;
background:#fff!important;
}
.std-hero-copy:before{
content:""!important;
position:absolute!important;
z-index:0!important;
width:540px!important;
height:540px!important;
left:-365px!important;
top:70px!important;
border:1px solid rgba(151,112,91,.10)!important;
border-radius:50%!important;
opacity:1!important;
filter:none!important;
transform:none!important;
background:transparent!important;
-webkit-mask-image:none!important;
mask-image:none!important;
pointer-events:none!important;
}
.std-hero-copy:after{
content:"YOUR LOOK.\AYOUR RULES."!important;
white-space:pre!important;
position:absolute!important;
left:78px!important;
bottom:44px!important;
z-index:3!important;
padding-left:58px!important;
color:#9b7768!important;
font:500 italic 19px/1.24 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:.01em!important;
background:linear-gradient(#9b7768,#9b7768) left 9px/38px 1px no-repeat!important;
pointer-events:none!important;
}
.std-hero-frame{
position:relative!important;
z-index:2!important;
width:min(100%,610px)!important;
height:100%!important;
min-height:0!important;
margin:0!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
box-shadow:none!important;
display:flex!important;
justify-content:flex-start!important;
overflow:visible!important;
}
.std-hero-frame:after{display:none!important}
.std-copy-inner{
position:relative!important;
z-index:4!important;
width:min(100%,570px)!important;
margin:clamp(72px,10.5vh,120px) 0 0!important;
transform:none!important;
text-align:left!important;
}
.std-hero-kicker{
margin:0 0 28px!important;
color:#9b7768!important;
font-size:12px!important;
letter-spacing:.43em!important;
text-align:left!important;
}
.std-logo{
max-width:100%!important;
margin:0!important;
color:#211d1a!important;
font-size:clamp(64px,5.35vw,88px)!important;
line-height:.84!important;
letter-spacing:.055em!important;
text-indent:0!important;
text-align:left!important;
white-space:nowrap!important;
}
.std-logo-sub{
width:min(100%,540px)!important;
margin:22px 0 38px!important;
color:#4f443f!important;
font-size:12px!important;
letter-spacing:.43em!important;
text-indent:0!important;
text-align:center!important;
}
.std-tagline{
max-width:540px!important;
margin:0 0 34px!important;
color:#2d2724!important;
font-size:23px!important;
line-height:1.35!important;
text-align:left!important;
}
.std-meta{
width:min(100%,540px)!important;
display:grid!important;
grid-template-columns:1fr 1px 1.13fr!important;
gap:20px!important;
margin:0 0 30px!important;
}
.std-meta-item{justify-content:flex-start!important}
.std-meta-icon{
width:56px!important;
height:56px!important;
flex-basis:56px!important;
background:rgba(255,255,255,.20)!important;
border-color:rgba(103,78,65,.15)!important;
}
.std-meta-icon svg{width:24px!important;height:24px!important}
.std-meta-text{font-size:15px!important;line-height:1.38!important}
.std-meta-divider{height:58px!important}
.std-actions{
width:min(100%,540px)!important;
gap:11px!important;
}
.std-btn{
height:62px!important;
border-radius:9px!important;
font-size:16px!important;
}
.std-btn-primary{
background:#a58270!important;
border-color:#a58270!important;
}
.std-btn-primary:hover{background:#967361!important}
.std-scroll-hint{display:none!important}
.std-hero-photo{
position:relative!important;
z-index:3!important;
min-width:0!important;
height:auto!important;
margin:36px 48px 36px 0!important;
overflow:hidden!important;
border:1px solid rgba(109,82,68,.16)!important;
border-radius:28px!important;
background:#e7ddd4!important;
box-shadow:
0 24px 70px rgba(75,53,43,.11),
inset 0 0 0 1px rgba(255,255,255,.18)!important;
cursor:pointer!important;
}
.std-hero-photo:before{
content:""!important;
position:absolute!important;
inset:0!important;
z-index:2!important;
pointer-events:none!important;
border-radius:inherit!important;
box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)!important;
}
.std-hero-photo video,
.std-hero-photo img{
position:absolute!important;
inset:0!important;
width:100%!important;
height:100%!important;
object-fit:cover!important;
object-position:center center!important;
border-radius:inherit!important;
display:block!important;
}
.std-hero-photo video{
pointer-events:auto!important;
cursor:pointer!important;
}
}
@media(min-width:768px) and (max-width:1180px){
.std-header{padding:0 28px!important}
.std-header-brand-main{font-size:27px!important}
.std-header-right{gap:10px!important}
.std-header-book{width:132px!important;min-width:132px!important}
.std-hero{grid-template-columns:48% 52%!important}
.std-hero-copy{padding-left:42px!important;padding-right:24px!important}
.std-hero-copy:after{left:42px!important}
.std-copy-inner{width:min(100%,500px)!important;margin-top:clamp(58px,8vh,86px)!important}
.std-logo{font-size:clamp(52px,5.1vw,66px)!important}
.std-logo-sub{margin-bottom:27px!important}
.std-tagline{font-size:20px!important;margin-bottom:26px!important}
.std-meta{gap:13px!important;margin-bottom:24px!important}
.std-meta-icon{width:50px!important;height:50px!important;flex-basis:50px!important}
.std-meta-text{font-size:13px!important}
.std-btn{height:56px!important;font-size:14px!important}
.std-hero-photo{margin:26px 28px 26px 0!important;border-radius:22px!important}
}
@media(min-width:768px) and (max-height:820px){
.std-copy-inner{margin-top:48px!important}
.std-hero-kicker{margin-bottom:18px!important}
.std-logo-sub{margin-top:15px!important;margin-bottom:20px!important}
.std-tagline{margin-bottom:20px!important;font-size:19px!important}
.std-meta{margin-bottom:18px!important}
.std-meta-icon{width:48px!important;height:48px!important;flex-basis:48px!important}
.std-btn{height:54px!important}
.std-hero-copy:after{bottom:24px!important;font-size:17px!important}
.std-hero-photo{margin-top:24px!important;margin-bottom:24px!important}
}
@media(min-width:768px){
html{scrollbar-width:none!important}
html::-webkit-scrollbar,body::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}
.std-header{padding-left:36px!important;padding-right:36px!important}
.std-header-right{margin-left:auto!important;transform:translateX(0)!important}
.std-hero{
background:#fff!important;
}
.std-hero:before{
left:30%!important;
top:-620px!important;
border-color:rgba(146,106,85,.20)!important;
box-shadow:0 0 90px rgba(150,112,91,.035)!important;
}
.std-hero:after{
right:-395px!important;
bottom:-525px!important;
border-color:rgba(146,106,85,.16)!important;
box-shadow:0 0 100px rgba(150,112,91,.04)!important;
}
.std-hero-copy{
padding-left:58px!important;
padding-right:58px!important;
}
.std-hero-copy:before{
left:-355px!important;
top:88px!important;
border-color:rgba(146,106,85,.12)!important;
box-shadow:0 0 80px rgba(108,77,61,.035)!important;
}
.std-copy-inner{
width:100%!important;
max-width:570px!important;
margin-left:auto!important;
margin-right:auto!important;
text-align:center!important;
}
.std-hero-kicker,
.std-logo,
.std-logo-sub,
.std-tagline{text-align:center!important}
.std-logo{margin-left:auto!important;margin-right:auto!important}
.std-logo-sub,
.std-tagline,
.std-meta,
.std-actions{
margin-left:auto!important;
margin-right:auto!important;
}
.std-meta-item{justify-content:center!important;text-align:left!important}
.std-actions{justify-content:center!important}
.std-hero-photo{
margin:36px 36px 36px 0!important;
border-color:rgba(112,83,68,.20)!important;
box-shadow:
0 34px 82px rgba(71,48,38,.18),
-18px 10px 42px rgba(91,64,51,.075),
18px 10px 42px rgba(91,64,51,.07),
0 0 0 7px rgba(255,255,255,.16),
inset 0 0 0 1px rgba(255,255,255,.24)!important;
}
.std-hero-photo:before{
box-shadow:
inset 0 0 0 1px rgba(255,255,255,.18),
inset 0 -34px 70px rgba(55,39,31,.035)!important;
}
}
@media(min-width:768px) and (max-width:1180px){
.std-header{padding-left:26px!important;padding-right:26px!important}
.std-hero-copy{padding-left:34px!important;padding-right:34px!important}
.std-hero-photo{margin:26px 26px 26px 0!important}
}
@media(min-width:768px){
.std-hero-copy{padding-left:0!important;padding-right:0!important}
.std-hero-frame{
width:100%!important;
max-width:none!important;
justify-content:center!important;
}
.std-copy-inner{
width:min(calc(100% - 72px),570px)!important;
max-width:570px!important;
margin-left:auto!important;
margin-right:auto!important;
}
.std-actions{
width:min(100%,540px)!important;
display:grid!important;
grid-template-columns:1fr!important;
gap:11px!important;
}
.std-actions .std-btn{
width:100%!important;
min-width:0!important;
height:62px!important;
padding:0 28px!important;
font-size:16px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
.std-hero-copy{padding-left:0!important;padding-right:0!important}
.std-copy-inner{width:min(calc(100% - 52px),500px)!important}
.std-actions .std-btn{height:58px!important;font-size:15px!important}
}
@media(min-width:768px){
.std-hero-copy{position:static!important}
.std-hero-frame{position:static!important}
.std-copy-inner{
position:absolute!important;
z-index:4!important;
left:0!important;
top:0!important;
width:46.5%!important;
max-width:none!important;
height:100%!important;
margin:0!important;
padding:clamp(72px,10.5vh,120px) 36px 118px!important;
box-sizing:border-box!important;
display:flex!important;
flex-direction:column!important;
align-items:center!important;
justify-content:flex-start!important;
text-align:center!important;
}
.std-hero-kicker,.std-logo,.std-logo-sub,.std-tagline{
width:100%!important;
text-align:center!important;
}
.std-logo{
margin-left:auto!important;
margin-right:auto!important;
white-space:nowrap!important;
}
.std-logo-sub,.std-tagline,.std-meta,.std-actions{
margin-left:auto!important;
margin-right:auto!important;
}
.std-meta{
justify-content:center!important;
justify-items:center!important;
}
.std-meta-item{justify-content:center!important}
.std-actions{
width:min(100%,540px)!important;
grid-template-columns:1fr 1fr!important;
gap:12px!important;
}
.std-actions .std-btn{
width:100%!important;
height:62px!important;
font-size:16px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
.std-copy-inner{
width:48%!important;
padding:clamp(58px,8vh,86px) 26px 100px!important;
}
.std-actions{width:min(100%,500px)!important}
.std-actions .std-btn{height:58px!important;font-size:15px!important}
}
@media(min-width:768px) and (max-height:820px){
.std-copy-inner{padding-top:48px!important;padding-bottom:82px!important}
}
@media(min-width:768px){
.std-hero{--hero-video-start:46.5%}
.std-copy-inner{
left:0!important;
width:var(--hero-video-start)!important;
padding-left:36px!important;
padding-right:36px!important;
transform:none!important;
align-items:center!important;
text-align:center!important;
}
.std-copy-inner > *{margin-left:auto!important;margin-right:auto!important}
.std-hero-kicker,.std-logo,.std-logo-sub,.std-tagline{text-align:center!important}
.std-meta{justify-content:center!important;justify-items:center!important}
.std-meta-item{justify-content:center!important}
}
@media(min-width:768px) and (max-width:1180px){
.std-hero{--hero-video-start:48%}
.std-copy-inner{
width:var(--hero-video-start)!important;
padding-left:26px!important;
padding-right:26px!important;
transform:none!important;
}
}
@media(min-width:768px){
.std-actions .std-btn{
height:62px!important;
padding:0 28px!important;
font-size:16px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
.std-actions .std-btn{
height:58px!important;
padding:0 26px!important;
font-size:15px!important;
}
}
@media(min-width:768px){
.std-actions{
display:grid!important;
grid-template-columns:1fr!important;
width:min(100%,540px)!important;
gap:11px!important;
}
.std-actions .std-btn{
width:100%!important;
min-width:0!important;
height:62px!important;
padding:0 28px!important;
font-size:16px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
.std-actions{width:min(100%,500px)!important}
.std-actions .std-btn{
width:100%!important;
height:58px!important;
padding:0 26px!important;
font-size:15px!important;
}
}
@media(min-width:768px){
#salonDesktopTop .std-actions{
display:flex!important;
flex-direction:column!important;
align-items:stretch!important;
justify-content:flex-start!important;
width:540px!important;
max-width:calc(100% - 72px)!important;
gap:12px!important;
}
#salonDesktopTop .std-actions > #stdBookBtn,
#salonDesktopTop .std-actions > a.std-btn{
display:flex!important;
flex:0 0 auto!important;
width:100%!important;
max-width:none!important;
min-width:0!important;
box-sizing:border-box!important;
height:62px!important;
margin:0!important;
}
}
@media(min-width:768px) and (max-width:1180px){
#salonDesktopTop .std-actions{
width:500px!important;
max-width:calc(100% - 52px)!important;
}
#salonDesktopTop .std-actions > #stdBookBtn,
#salonDesktopTop .std-actions > a.std-btn{height:58px!important}
}
@media(min-width:768px){
#salonDesktopTop .std-copy-inner{
top:calc(50% + 36px - 1.5cm)!important;
bottom:auto!important;
height:auto!important;
padding-top:0!important;
padding-bottom:0!important;
transform:translateY(-50%)!important;
}
}
@media(min-width:768px){
#salonDesktopTop .std-hero-kicker{
width:min(100%,540px)!important;
text-align:left!important;
align-self:center!important;
}
#salonDesktopTop .std-logo-sub{
font-size:13.2px!important;
}
#salonDesktopTop .std-meta-text{
font-size:16.05px!important;
}
#salonDesktopTop .std-actions > #stdBookBtn,
#salonDesktopTop .std-actions > a.std-btn{
height:66.34px!important;
font-size:17.12px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
#salonDesktopTop .std-logo-sub{font-size:15.4px!important}
#salonDesktopTop .std-meta-text{font-size:13.91px!important}
#salonDesktopTop .std-actions > #stdBookBtn,
#salonDesktopTop .std-actions > a.std-btn{
height:62.06px!important;
font-size:16.05px!important;
}
}
@media(min-width:768px){
#salonDesktopTop .std-hero-kicker{
width:min(100%,540px)!important;
box-sizing:border-box!important;
text-align:left!important;
align-self:center!important;
margin-left:auto!important;
margin-right:auto!important;
}
#salonDesktopTop .std-logo-sub{font-size:14.52px!important}
#salonDesktopTop .std-meta-text{font-size:17.1735px!important}
#salonDesktopTop .std-actions > #stdBookBtn,
#salonDesktopTop .std-actions > a.std-btn{
height:70.9838px!important;
font-size:18.3184px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
#salonDesktopTop .std-hero-kicker{width:min(100%,500px)!important}
#salonDesktopTop .std-logo-sub{font-size:16.94px!important}
#salonDesktopTop .std-meta-text{font-size:14.8837px!important}
#salonDesktopTop .std-actions > #stdBookBtn,
#salonDesktopTop .std-actions > a.std-btn{
height:66.4042px!important;
font-size:17.1735px!important;
}
}
@media(min-width:768px){
#salonDesktopTop .std-hero-kicker{
width:100%!important;
text-align:center!important;
align-self:center!important;
}
#salonDesktopTop .std-logo{
font-size:inherit!important;
}
#salonDesktopTop .std-logo-sub{
font-size:15.5364px!important;
}
}
@media(min-width:768px) and (max-width:1180px){
#salonDesktopTop .std-logo-sub{
font-size:18.1258px!important;
}
}
@media(min-width:768px){
#salonDesktopTop .std-logo{
font-size:clamp(59.52px,4.9755vw,81.84px)!important;
}
#salonDesktopTop .std-hero-kicker{
width:max-content!important;
max-width:100%!important;
align-self:center!important;
margin-left:auto!important;
margin-right:auto!important;
text-align:center!important;
}
}
@media(min-width:768px) and (max-width:1180px){
#salonDesktopTop .std-logo{
font-size:clamp(48.36px,4.743vw,61.38px)!important;
}
}
@media(min-width:768px){
#salonDesktopTop.std-hero{
background:#fff!important;
}
#salonDesktopTop.std-hero:before{
width:1040px!important;
height:1040px!important;
left:31%!important;
top:-610px!important;
border:1px solid rgba(150,111,90,.17)!important;
border-radius:50%!important;
background:transparent!important;
box-shadow:none!important;
}
#salonDesktopTop.std-hero:after{
width:820px!important;
height:820px!important;
right:-410px!important;
bottom:-540px!important;
border:1px solid rgba(150,111,90,.13)!important;
border-radius:50%!important;
background:transparent!important;
box-shadow:none!important;
}
#salonDesktopTop .std-hero-copy:before{
width:540px!important;
height:540px!important;
left:-365px!important;
top:70px!important;
border:1px solid rgba(150,111,90,.085)!important;
border-radius:50%!important;
background:transparent!important;
box-shadow:none!important;
opacity:1!important;
filter:none!important;
transform:none!important;
}
}
@media(min-width:768px){
#salonDesktopTop.std-hero{
background:#fff!important;
}
#salonDesktopTop .std-hero-copy,
#salonDesktopTop .std-hero-frame,
#salonDesktopTop .std-copy-inner{
background:transparent!important;
}
#salonDesktopTop.std-hero:before{
content:""!important;
position:absolute!important;
z-index:1!important;
width:1040px!important;
height:1040px!important;
left:31%!important;
top:-610px!important;
border:1px solid rgba(151,112,91,.18)!important;
border-radius:50%!important;
background:transparent!important;
pointer-events:none!important;
}
#salonDesktopTop.std-hero:after{
content:""!important;
position:absolute!important;
z-index:1!important;
width:820px!important;
height:820px!important;
right:-410px!important;
bottom:-540px!important;
border:1px solid rgba(151,112,91,.14)!important;
border-radius:50%!important;
background:transparent!important;
pointer-events:none!important;
}
#salonDesktopTop .std-hero-copy:before{
content:""!important;
position:absolute!important;
z-index:0!important;
width:540px!important;
height:540px!important;
left:-365px!important;
top:70px!important;
border:1px solid rgba(151,112,91,.10)!important;
border-radius:50%!important;
background:transparent!important;
opacity:1!important;
filter:none!important;
transform:none!important;
pointer-events:none!important;
}
}
@media(min-width:768px){
#salonDesktopTop.std-hero{
background:#fff!important;
}
}
@media(min-width:768px){
.std-header{position:relative!important;overflow:visible!important}
.std-lang-switch-under-brand{
position:absolute!important;
left:calc(36px - 0.1cm)!important;
top:calc(66px + 0.6cm)!important;
height:28px!important;
z-index:20!important;
display:flex!important;
align-items:center!important;
gap:4px!important;
padding:0!important;
margin:0!important;
}
.std-lang-switch-under-brand button{
min-width:28px!important;
height:28px!important;
padding:0 3px!important;
font-size:13px!important;
font-weight:500!important;
letter-spacing:0!important;
}
.std-lang-switch-under-brand .sep{font-size:13px!important}
.std-lang-switch-placeholder{display:none!important}
}
@media(min-width:768px) and (max-width:1180px){
.std-lang-switch-under-brand{left:calc(26px - 0.1cm)!important;gap:2px!important}
.std-lang-switch-under-brand button{min-width:25px!important;font-size:13px!important}
}
@media(min-width:768px){
.std-lang-switch-under-brand:before{
content:"🌐"!important;
display:inline-flex!important;
align-items:center!important;
justify-content:center!important;
width:20px!important;
height:28px!important;
margin-right:5px!important;
font-size:16px!important;
line-height:1!important;
filter:grayscale(1)!important;
}
}
@media(min-width:768px){
.std-lang-switch-under-brand{
box-sizing:border-box!important;
padding:4px 10px 4px 8px!important;
height:38px!important;
border:1px solid rgba(72,68,65,.16)!important;
border-radius:13px!important;
background:rgba(105,105,105,.13)!important;
box-shadow:0 6px 18px rgba(55,48,44,.07),inset 0 1px 0 rgba(255,255,255,.38)!important;
backdrop-filter:blur(9px)!important;
-webkit-backdrop-filter:blur(9px)!important;
}
.std-lang-switch-under-brand:before{
margin-right:6px!important;
}
}
@media(min-width:768px){
.std-header{
background:#fff!important;
border-bottom:1px solid rgba(103,82,70,.10)!important;
box-shadow:0 7px 24px rgba(73,55,46,.035)!important;
}
.std-lang-switch-under-brand{transform:translateY(.1cm)!important}
.std-lang-switch-under-brand button{
position:relative!important;
border-radius:7px!important;
transition:background .18s ease,color .18s ease,font-weight .18s ease,transform .18s ease!important;
}
.std-lang-switch-under-brand button:hover{
background:rgba(64,58,54,.08)!important;
color:#201c1a!important;
transform:translateY(-1px)!important;
}
.std-lang-switch-under-brand button.active{
background:rgba(61,55,51,.14)!important;
color:#171412!important;
font-weight:700!important;
box-shadow:inset 0 0 0 1px rgba(56,49,45,.08)!important;
}
.std-nav a{position:relative!important;transition:color .18s ease!important}
.std-nav a:after{
content:""!important;
position:absolute!important;
left:50%!important;
right:50%!important;
bottom:-7px!important;
height:1px!important;
background:currentColor!important;
opacity:.65!important;
transition:left .2s ease,right .2s ease!important;
}
.std-nav a:hover:after{left:0!important;right:0!important}
#salonDesktopTop .std-tagline{
font-family:"Cormorant Garamond",Georgia,serif!important;
font-weight:500!important;
letter-spacing:.005em!important;
font-style:italic!important;
}
}
@media(min-width:768px){
.std-lang-switch-under-brand button.active{
background:rgba(61,55,51,.075)!important;
box-shadow:inset 0 0 0 1px rgba(56,49,45,.045)!important;
font-weight:650!important;
}
.std-lang-switch-under-brand .sep{
color:rgba(43,38,35,.42)!important;
font-weight:400!important;
}
.std-nav a{color:#332d29!important}
.std-nav a:hover{color:#1f1b19!important}
html,body{scroll-snap-type:none!important;overscroll-behavior-y:auto!important}
}
@media(min-width:768px){
.std-lang-switch-under-brand{background:rgba(125,125,125,.095)!important;border-color:rgba(72,68,65,.125)!important;box-shadow:0 6px 18px rgba(55,48,44,.045),inset 0 1px 0 rgba(255,255,255,.46)!important}
html,body,#salon-desktop-v1{scroll-behavior:auto!important;scroll-snap-type:none!important;overscroll-behavior:auto!important}
.std-section-reveal,.std-section-reveal.in-view,.std-section-reveal.is-visible{opacity:1!important;transform:none!important;transition:none!important}
#salon-desktop-v1 section{scroll-snap-align:none!important;scroll-snap-stop:normal!important}
#salonDesktopTop.std-hero:after{content:""!important;display:block!important;position:absolute!important;z-index:4!important;left:0!important;right:0!important;bottom:-1px!important;width:auto!important;height:150px!important;border:0!important;border-radius:0!important;background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.46) 45%,#fff 100%)!important;pointer-events:none!important}
#salonDesktopPortfolio.std-portfolio{margin-top:-1px!important;padding-top:92px!important;background:radial-gradient(ellipse 330px 520px at -2% 18%,rgba(83,57,45,.12) 0%,rgba(105,74,58,.06) 38%,transparent 76%),radial-gradient(ellipse 390px 560px at 102% 76%,rgba(119,84,67,.08) 0%,rgba(151,112,91,.035) 35%,transparent 76%),radial-gradient(ellipse 760px 500px at 37% 20%,rgba(255,255,255,.36) 0%,rgba(255,255,255,.13) 48%,transparent 78%),linear-gradient(180deg,#f3ebe3 0%,#f4eee7 48%,#eee3da 100%)!important}
#salonDesktopPortfolio.std-portfolio:before{width:760px!important;height:760px!important;left:-470px!important;bottom:-390px!important;border:1px solid rgba(151,112,91,.09)!important;border-radius:50%!important;background:transparent!important;filter:none!important}
#salonDesktopPortfolio.std-portfolio:after{width:980px!important;height:980px!important;right:-520px!important;top:-610px!important;border:1px solid rgba(151,112,91,.12)!important;border-radius:50%!important;background:transparent!important;filter:none!important}
#salonDesktopPortfolio .std-portfolio-kicker{color:#62564f!important}
#salonDesktopPortfolio .std-portfolio-title{color:#211c19!important}
#salonDesktopPortfolio .std-portfolio-copy{color:#655b55!important}
#salonDesktopPortfolio .std-work{border:1px solid rgba(93,70,59,.10)!important;box-shadow:0 18px 42px rgba(70,51,43,.07)!important}
#salonDesktopPortfolio .std-portfolio-more{background:rgba(255,255,255,.20)!important;border-color:rgba(80,61,52,.17)!important;backdrop-filter:blur(8px)!important;-webkit-backdrop-filter:blur(8px)!important}
}
@media(min-width:768px){
#salonDesktopTop.std-hero:after{display:none!important}
#salonDesktopPortfolio.std-portfolio{
margin-top:0!important;
padding-top:92px!important;
border-top:1px solid rgba(93,70,59,.055)!important;
background:
radial-gradient(ellipse 185px 610px at -1% 38%,rgba(83,57,45,.18) 0%,rgba(105,74,58,.105) 25%,rgba(133,96,76,.05) 48%,transparent 76%),
radial-gradient(ellipse 360px 640px at 101% 68%,rgba(119,84,67,.09) 0%,rgba(151,112,91,.04) 34%,transparent 76%),
radial-gradient(ellipse 720px 500px at 35% 34%,rgba(255,255,255,.42) 0%,rgba(255,255,255,.17) 48%,transparent 78%),
linear-gradient(102deg,#f3ebe3 0%,#f4eee7 47%,#eee3da 100%)!important;
box-shadow:inset 0 30px 52px -48px rgba(73,54,45,.38)!important;
}
#salonDesktopPortfolio.std-portfolio:before{
width:620px!important;height:620px!important;left:-430px!important;bottom:-330px!important;
border:1px solid rgba(151,112,91,.075)!important;border-radius:50%!important;background:transparent!important;filter:none!important;
}
#salonDesktopPortfolio.std-portfolio:after{
width:900px!important;height:900px!important;right:-520px!important;top:-590px!important;
border:1px solid rgba(151,112,91,.10)!important;border-radius:50%!important;background:transparent!important;filter:none!important;
}
#salonDesktopPortfolio .std-portfolio-inner{
padding-top:8px!important;
}
#salonDesktopPortfolio .std-portfolio-grid{
filter:drop-shadow(0 18px 30px rgba(71,52,44,.055))!important;
}
}
@media(min-width:768px){
#salonDesktopTop.std-hero{box-shadow:none!important}
#salonDesktopPortfolio.std-portfolio{
padding-top:calc(92px - .7cm)!important;
box-shadow:inset 0 38px 64px -62px rgba(64,45,37,.52),inset 0 -28px 58px -58px rgba(64,45,37,.24)!important;
}
#salonDesktopPortfolio .std-work{box-shadow:0 20px 46px rgba(66,48,40,.105)!important}
#salonDesktopPortfolio .std-portfolio-more{
width:min(100%,650px)!important;
height:72px!important;
margin:54px auto 48px!important;
border-radius:14px!important;
font-size:17.5px!important;
gap:16px!important;
background:rgba(255,255,255,.25)!important;
box-shadow:0 14px 34px rgba(68,49,41,.09)!important;
transition:transform .22s cubic-bezier(.2,.75,.25,1),box-shadow .22s ease,background .22s ease,border-color .22s ease!important;
}
#salonDesktopPortfolio .std-portfolio-more:hover{
transform:translateY(-3px) scale(1.012)!important;
background:rgba(255,255,255,.39)!important;
border-color:rgba(75,55,47,.25)!important;
box-shadow:0 20px 42px rgba(68,49,41,.14)!important;
}
#salonDesktopPortfolio .std-portfolio-more span{transition:transform .22s ease!important}
#salonDesktopPortfolio .std-portfolio-more:hover span{transform:translateX(5px)!important}
.std-gallery-browser{
display:block!important;
opacity:0!important;
visibility:hidden!important;
pointer-events:none!important;
transform:translate3d(0,16px,0) scale(.992)!important;
transition:opacity .34s ease,transform .42s cubic-bezier(.16,1,.3,1),visibility .42s!important;
}
.std-gallery-browser.open{
opacity:1!important;
visibility:visible!important;
pointer-events:auto!important;
transform:none!important;
}
.std-gallery-browser-shell{
opacity:0!important;
transform:translateY(12px)!important;
transition:opacity .32s ease .06s,transform .42s cubic-bezier(.16,1,.3,1) .06s!important;
}
.std-gallery-browser.open .std-gallery-browser-shell{opacity:1!important;transform:none!important}
.std-gallery-browser-title strong{font-size:clamp(59.4px,4.4vw,70.4px)!important}
.std-gallery-browser-title span{
margin-top:calc(9px + .1cm)!important;
font-size:11.55px!important;
}
.std-gallery-browser-back{
width:50px!important;height:50px!important;
border:1px solid rgba(64,52,46,.18)!important;
border-radius:50%!important;
background:rgba(255,255,255,.34)!important;
box-shadow:0 8px 22px rgba(70,51,43,.08)!important;
transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important;
}
.std-gallery-browser-back:hover{transform:translateX(-2px)!important;background:rgba(255,255,255,.58)!important;box-shadow:0 11px 26px rgba(70,51,43,.12)!important}
.std-gallery-browser-tabs{gap:11px!important}
.std-gallery-browser-tab{
min-width:116px!important;
height:46px!important;
padding:0 25px!important;
border:1px solid rgba(72,57,49,.17)!important;
background:#e7ddd4!important;
color:#4f4540!important;
box-shadow:0 5px 14px rgba(65,48,41,.045)!important;
transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important;
}
.std-gallery-browser-tab:hover{transform:translateY(-2px)!important;background:#ded0c5!important;box-shadow:0 9px 20px rgba(65,48,41,.08)!important}
.std-gallery-browser-tab.active{background:#302825!important;border-color:#302825!important;color:#fff!important;box-shadow:0 8px 18px rgba(48,40,37,.14)!important}
}
@media(min-width:768px){
#salonDesktopTop.std-hero{background:#FAF8F4!important}
#salonDesktopPortfolio.std-portfolio{
background:
radial-gradient(ellipse 185px 610px at -1% 43%,rgba(83,57,45,.24) 0%,rgba(105,74,58,.15) 25%,rgba(133,96,76,.065) 48%,transparent 76%),
radial-gradient(ellipse 360px 640px at 101% 70%,rgba(119,84,67,.105) 0%,rgba(151,112,91,.045) 34%,transparent 76%),
radial-gradient(ellipse 720px 500px at 35% 45%,rgba(255,255,255,.52) 0%,rgba(255,255,255,.22) 48%,transparent 78%),
linear-gradient(102deg,#F3EFE8 0%,#F3EFE8 47%,#EBE5DC 100%)!important;
}
#salonDesktopTop.std-hero{
box-shadow:inset 0 0 90px rgba(83,57,45,.035)!important;
}
#salonDesktopPortfolio.std-portfolio{
border-top:0!important;
box-shadow:inset 0 26px 52px -50px rgba(69,49,41,.28),inset 0 -32px 62px -58px rgba(69,49,41,.20)!important;
}
#salonDesktopPortfolio.std-portfolio:before{
width:540px!important;height:540px!important;left:-365px!important;top:70px!important;bottom:auto!important;
border:1px solid rgba(151,112,91,.10)!important;background:transparent!important;
}
#salonDesktopPortfolio.std-portfolio:after{
width:820px!important;height:820px!important;right:-410px!important;bottom:-540px!important;top:auto!important;
border:1px solid rgba(151,112,91,.10)!important;background:transparent!important;
}
.std-gallery-browser-title span{margin-top:calc(9px + .2cm)!important}
.std-gallery-browser-tabs{
overflow:visible!important;
padding:8px 10px 12px!important;
margin-top:19px!important;
}
.std-gallery-browser-tab{overflow:visible!important}
.std-gallery-browser-tab:hover,
.std-gallery-browser-tab.active{transform:translateY(-2px)!important}
.std-gallery-browser-shell{overflow:visible!important}
.std-gallery-hint{
top:-45px!important;
left:0!important;
padding:8px 12px!important;
border:1px solid rgba(255,255,255,.15)!important;
border-radius:9px!important;
background:rgba(24,20,18,.56)!important;
backdrop-filter:blur(10px)!important;
-webkit-backdrop-filter:blur(10px)!important;
color:rgba(255,255,255,.88)!important;
font:500 12px/1.2 "Manrope",Arial,sans-serif!important;
letter-spacing:.01em!important;
}
.std-gallery-count{
left:calc(50% + 132px)!important;
bottom:-54px!important;
transform:none!important;
min-width:76px!important;
height:42px!important;
padding:0 13px!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
border:1px solid rgba(255,255,255,.25)!important;
border-radius:999px!important;
background:rgba(22,18,16,.66)!important;
backdrop-filter:blur(12px)!important;
-webkit-backdrop-filter:blur(12px)!important;
color:#fff!important;
font:600 11px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.08em!important;
}
.std-view-gallery{left:calc(50% - 48px)!important}
}
@media(min-width:768px){#salon-desktop-v1{opacity:0;transform:none;transition:opacity 1.05s cubic-bezier(.22,.72,.28,1)}#salon-desktop-v1.desktop-ready{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){#salon-desktop-v1{opacity:1!important;transform:none!important;transition:none!important}}
@media(min-width:768px){
#salon-desktop-v1{transition:opacity .45s cubic-bezier(.22,.72,.28,1)!important}
#salonDesktopServices.mct-prices{
overflow:clip!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
align-items:start!important;
}
#salonDesktopServices .mct-price-head{
position:sticky!important;
top:104px!important;
z-index:6!important;
grid-column:1!important;
grid-row:1 / span 4!important;
width:100%!important;
transform:none!important;
padding:0 clamp(22px,2.7vw,40px) 0 0!important;
align-self:start!important;
}
#salonDesktopServices .mct-price-head:after{
top:0!important;
right:-1.6cm!important;
height:min(72vh,660px)!important;
}
#salonDesktopServices .dct-service-sticky-card{
width:100%!important;
max-width:440px!important;
min-height:360px!important;
margin:0!important;
padding:30px 30px 28px!important;
border:1px solid rgba(92,69,59,.16)!important;
border-radius:26px!important;
background:
radial-gradient(310px 180px at 88% 0%,rgba(255,255,255,.76),transparent 72%),
linear-gradient(145deg,#f8f4ee 0%,#eee1d8 100%)!important;
box-shadow:0 22px 52px rgba(17,14,12,.20)!important;
color:#211d1a!important;
}
#salonDesktopServices .dct-service-sticky-kicker{
display:block!important;
margin:0 0 12px!important;
color:#8f7167!important;
font:600 11px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.24em!important;
text-transform:uppercase!important;
}
#salonDesktopServices .dct-service-sticky-card>strong{
display:block!important;
color:#211d1a!important;
font:500 39px/.98 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.03em!important;
}
#salonDesktopServices .dct-service-sticky-info{
display:grid!important;
grid-template-columns:1fr 1fr!important;
gap:10px!important;
margin-top:28px!important;
}
#salonDesktopServices .dct-service-sticky-row{
min-width:0!important;
min-height:82px!important;
display:grid!important;
grid-template-columns:42px minmax(0,1fr)!important;
gap:11px!important;
align-items:center!important;
padding:12px!important;
border:1px solid rgba(83,63,55,.105)!important;
border-radius:16px!important;
background:rgba(255,255,255,.42)!important;
}
#salonDesktopServices .dct-service-sticky-icon{
width:42px!important;
height:42px!important;
display:grid!important;
place-items:center!important;
border:1px solid rgba(103,78,65,.13)!important;
border-radius:50%!important;
background:rgba(255,255,255,.42)!important;
color:#715b53!important;
}
#salonDesktopServices .dct-service-sticky-icon svg{
width:20px!important;
height:20px!important;
fill:none!important;
stroke:currentColor!important;
stroke-width:1.7!important;
stroke-linecap:round!important;
stroke-linejoin:round!important;
}
#salonDesktopServices .dct-service-sticky-copy{
min-width:0!important;
display:block!important;
}
#salonDesktopServices .dct-service-sticky-copy b{
display:block!important;
overflow:hidden!important;
color:#302925!important;
font:600 12px/1.15 "Manrope",Arial,sans-serif!important;
text-overflow:ellipsis!important;
white-space:nowrap!important;
}
#salonDesktopServices .dct-service-sticky-copy small{
display:block!important;
margin-top:5px!important;
overflow:hidden!important;
color:#776b64!important;
font:500 10px/1.25 "Manrope",Arial,sans-serif!important;
text-overflow:ellipsis!important;
white-space:nowrap!important;
}
#salonDesktopServices .dct-service-sticky-book{
width:100%!important;
height:56px!important;
margin-top:22px!important;
padding:0 22px!important;
border:0!important;
border-radius:999px!important;
background:#9c7967!important;
color:#fff!important;
display:flex!important;
align-items:center!important;
justify-content:space-between!important;
box-shadow:0 10px 24px rgba(104,78,65,.18)!important;
font:600 12px/1 "Manrope",Arial,sans-serif!important;
transition:background .18s ease,box-shadow .18s ease!important;
}
#salonDesktopServices .dct-service-sticky-book:hover{
background:#8f6d5c!important;
box-shadow:0 12px 28px rgba(104,78,65,.24)!important;
}
#salonDesktopServices .dct-services-right-head{
grid-column:2!important;
width:min(100%,780px)!important;
margin:0 0 22px!important;
padding:0!important;
}
#salonDesktopServices .dct-services-right-head .mct-section-kicker{
margin:0!important;
color:#b8ada7!important;
font:600 12px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.24em!important;
text-transform:uppercase!important;
}
#salonDesktopServices .dct-services-right-head h2{
margin:12px 0 0!important;
color:#f7f3f0!important;
font:500 clamp(50px,4.2vw,64px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important;
}
#salonDesktopServices .dct-services-right-head>span{
display:block!important;
max-width:620px!important;
margin-top:20px!important;
color:#b9ada7!important;
font:400 14px/1.7 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
grid-column:2!important;
width:calc(100% + max(48px, calc((100vw - 1360px)/2)))!important;
max-width:none!important;
margin:0!important;
padding:14px 0 18px!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs{
width:100%!important;
max-width:none!important;
margin:0!important;
padding:4px max(48px, calc((100vw - 1360px)/2)) 12px 0!important;
overflow-x:auto!important;
overflow-y:visible!important;
scrollbar-width:none!important;
overscroll-behavior-x:contain!important;
scroll-snap-type:x proximity!important;
}
#salonDesktopServices .mct-tabs::-webkit-scrollbar{display:none!important}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{
min-width:max-content!important;
gap:10px!important;
padding:0!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
min-height:48px!important;
padding:0 24px!important;
border:1px solid rgba(255,255,255,.18)!important;
border-radius:999px!important;
background:rgba(255,255,255,.045)!important;
color:#d2c8c2!important;
box-shadow:none!important;
transform:none!important;
transition:background .16s ease,border-color .16s ease,color .16s ease,box-shadow .16s ease!important;
scroll-snap-align:start!important;
}
#salonDesktopServices .mct-tab:hover,
#salonDesktopServices .mct-tab-all:hover{
transform:none!important;
background:rgba(255,255,255,.085)!important;
border-color:rgba(255,255,255,.25)!important;
}
#salonDesktopServices .mct-tab.is-active,
#salonDesktopServices .mct-tab-all.is-active{
background:#9c7967!important;
border-color:#ad8a78!important;
color:#fff!important;
box-shadow:0 8px 20px rgba(0,0,0,.14)!important;
}
#salonDesktopServices .dct-service-groups,
#salonDesktopServices .mct-more-services{
grid-column:2!important;
}
#stdGalleryBrowser.std-gallery-browser{
overflow-y:scroll!important;
scrollbar-gutter:stable both-edges!important;
}
#stdGalleryBrowser .std-gallery-browser-shell{
width:100%!important;
min-width:0!important;
margin-left:auto!important;
margin-right:auto!important;
}
#stdGalleryBrowser .std-gallery-browser-top,
#stdGalleryBrowser .std-gallery-browser-tabs,
#stdGalleryBrowser .std-gallery-browser-grid{
box-sizing:border-box!important;
}
#salon-desktop-v1 .std-section-reveal{
opacity:1!important;
transform:none!important;
transition:none!important;
}
}
@media(min-width:768px) and (max-width:930px){
#salonDesktopServices .mct-price-head{
position:relative!important;
top:auto!important;
grid-column:1!important;
grid-row:auto!important;
}
#salonDesktopServices .dct-services-right-head{
grid-column:1!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
width:100%!important;
}
#salonDesktopServices .mct-tabs{
padding-right:0!important;
}
#salonDesktopServices .dct-service-sticky-card{
max-width:none!important;
}
}
@media(min-width:768px){
#salonDesktopPortfolio,
#salonDesktopAbout,
#salonDesktopReviews,
#salonDesktopContacts{
content-visibility:auto;
contain-intrinsic-size:auto 900px;
}
#salonDesktopServices.mct-prices{
overflow:visible!important;
padding:92px 0 108px!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
width:min(calc(100% - 96px),1360px)!important;
grid-template-columns:minmax(390px,440px) minmax(0,1fr)!important;
column-gap:clamp(58px,6vw,86px)!important;
align-items:start!important;
}
#salonDesktopServices .mct-price-head{
position:sticky!important;
top:96px!important;
grid-column:1!important;
grid-row:1 / span 3!important;
width:100%!important;
padding:0 34px 0 0!important;
display:flex!important;
justify-content:center!important;
align-self:start!important;
}
#salonDesktopServices .mct-price-head:after{
top:0!important;
right:-26px!important;
height:min(74vh,720px)!important;
}
#salonDesktopServices .dct-service-sticky-card{
position:relative!important;
isolation:isolate!important;
width:100%!important;
max-width:460px!important;
min-height:500px!important;
margin:0 auto!important;
padding:42px 34px 32px!important;
overflow:hidden!important;
border:1px solid rgba(102,78,67,.18)!important;
border-radius:30px!important;
background:
radial-gradient(ellipse 190px 330px at -6% 48%,rgba(118,83,66,.16),transparent 76%),
radial-gradient(ellipse 210px 330px at 104% 76%,rgba(142,102,82,.12),transparent 76%),
linear-gradient(135deg,#f8f2ec 0%,#eee1d8 100%)!important;
box-shadow:0 28px 68px rgba(12,10,9,.24)!important;
color:#211d1a!important;
}
#salonDesktopServices .dct-service-sticky-card:before,
#salonDesktopServices .dct-service-sticky-card:after{
position:absolute!important;
z-index:-1!important;
border:1px solid rgba(139,101,81,.14)!important;
border-radius:50%!important;
content:""!important;
pointer-events:none!important;
}
#salonDesktopServices .dct-service-sticky-card:before{
width:360px!important;
height:360px!important;
left:-250px!important;
top:-115px!important;
}
#salonDesktopServices .dct-service-sticky-card:after{
width:300px!important;
height:300px!important;
right:-218px!important;
bottom:-128px!important;
}
#salonDesktopServices .dct-service-sticky-kicker{
margin-bottom:16px!important;
color:#8f7167!important;
font-size:12px!important;
letter-spacing:.25em!important;
}
#salonDesktopServices .dct-service-sticky-card>strong{
font-size:46px!important;
line-height:.94!important;
}
#salonDesktopServices .dct-service-sticky-info{
gap:12px!important;
margin-top:34px!important;
}
#salonDesktopServices .dct-service-sticky-row{
min-height:96px!important;
padding:14px 12px!important;
border-radius:18px!important;
background:rgba(255,255,255,.48)!important;
}
#salonDesktopServices .dct-service-sticky-book,
#salonDesktopServices .dct-service-sticky-work{
width:100%!important;
height:62px!important;
padding:0 24px!important;
border-radius:999px!important;
display:flex!important;
align-items:center!important;
justify-content:space-between!important;
text-decoration:none!important;
font:600 13px/1 "Manrope",Arial,sans-serif!important;
transition:transform .18s ease,background .18s ease,border-color .18s ease,box-shadow .18s ease!important;
}
#salonDesktopServices .dct-service-sticky-book{
margin-top:28px!important;
background:#9c7967!important;
color:#fff!important;
}
#salonDesktopServices .dct-service-sticky-work{
margin-top:12px!important;
border:1px solid rgba(91,68,58,.22)!important;
background:rgba(248,244,238,.62)!important;
color:#302925!important;
}
#salonDesktopServices .dct-service-sticky-book:hover,
#salonDesktopServices .dct-service-sticky-work:hover{
transform:translateY(-2px)!important;
box-shadow:0 14px 28px rgba(63,47,40,.14)!important;
}
#salonDesktopServices .dct-services-right-head{display:none!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{
grid-column:2!important;
width:100%!important;
margin:0 0 26px!important;
padding:0!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs{
width:100%!important;
margin:0!important;
padding:0!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{
width:100%!important;
min-width:0!important;
padding:0!important;
display:flex!important;
flex-wrap:wrap!important;
gap:11px!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
min-width:0!important;
min-height:49px!important;
padding:0 22px!important;
border:1px solid rgba(255,255,255,.19)!important;
border-radius:999px!important;
background:rgba(255,255,255,.045)!important;
color:#d5cbc5!important;
box-shadow:none!important;
transform:none!important;
transition:transform .18s ease,background .18s ease,border-color .18s ease,color .18s ease,box-shadow .18s ease!important;
}
#salonDesktopServices .mct-tab:not(.is-active):hover,
#salonDesktopServices .mct-tab-all:not(.is-active):hover{
transform:translateY(-3px)!important;
border-color:rgba(255,255,255,.36)!important;
background:rgba(255,255,255,.10)!important;
color:#fff!important;
box-shadow:0 10px 22px rgba(0,0,0,.14)!important;
}
#salonDesktopServices .mct-tab.is-active,
#salonDesktopServices .mct-tab-all.is-active{
border-color:#fff!important;
background:#fff!important;
color:#2f2926!important;
box-shadow:0 12px 26px rgba(0,0,0,.16)!important;
}
#salonDesktopServices .dct-service-groups{
grid-column:2!important;
margin-top:0!important;
}
#salonDesktopServices .mct-more-services{grid-column:2!important}
#salonDesktopAbout.br-about-team{
padding:92px 0 102px!important;
background:#fff!important;
}
#salonDesktopAbout>.br-about-team-shell{
width:min(calc(100% - 96px),1360px)!important;
display:grid!important;
grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr)!important;
gap:clamp(42px,5vw,72px)!important;
align-items:start!important;
}
#salonDesktopAbout .mct-about-head{display:block!important}
#salonDesktopAbout .mct-about-head h2,
#salonDesktopTeam .std-team-title{
margin:14px 0 0!important;
font:500 clamp(50px,4.1vw,64px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important;
}
#salonDesktopAbout .mct-about-card{
display:block!important;
height:auto!important;
min-height:0!important;
margin-top:28px!important;
overflow:hidden!important;
border:1px solid rgba(85,64,57,.10)!important;
border-radius:28px!important;
background:#fff!important;
box-shadow:0 18px 48px rgba(67,50,44,.075)!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
height:270px!important;
min-height:270px!important;
}
#salonDesktopAbout .mct-about-copy{
display:block!important;
padding:30px 32px 32px!important;
}
#salonDesktopAbout .mct-about-lead{
font-size:clamp(29px,2.4vw,37px)!important;
}
#salonDesktopAbout .dct-about-amenities{
margin-top:24px!important;
padding-top:20px!important;
}
#salonDesktopAbout .dct-about-amenities-grid{
grid-template-columns:repeat(3,minmax(0,1fr))!important;
gap:0!important;
}
#salonDesktopTeam.br-team-panel{
min-height:680px!important;
padding:42px 40px 40px!important;
border-radius:28px!important;
background:
radial-gradient(circle at 92% 8%,rgba(139,113,103,.20),transparent 34%),
#2f2926!important;
color:#f7f3f0!important;
box-shadow:0 20px 52px rgba(54,41,35,.13)!important;
}
#salonDesktopTeam .std-team-kicker{
margin:0!important;
color:#c0b5af!important;
font:600 12px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.25em!important;
text-transform:uppercase!important;
}
#salonDesktopTeam .std-team-title{color:#f7f3f0!important}
#salonDesktopTeam .std-team-subtitle{
margin:15px 0 0!important;
color:#b9ada7!important;
font-size:13px!important;
line-height:1.5!important;
}
#salonDesktopTeam .std-team-track{
display:grid!important;
width:100%!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:34px 24px!important;
margin-top:38px!important;
padding:0!important;
overflow:visible!important;
}
#salonDesktopTeam .std-master{
width:100%!important;
min-width:0!important;
padding:0!important;
border:0!important;
background:transparent!important;
color:#f7f3f0!important;
text-align:center!important;
}
#salonDesktopTeam .std-master-avatar{
width:min(100%,142px)!important;
height:auto!important;
aspect-ratio:1!important;
margin:0 auto!important;
border:1px solid rgba(255,255,255,.09)!important;
border-radius:50%!important;
background:linear-gradient(145deg,#806b61,#5b4a43)!important;
color:#e6d8d0!important;
box-shadow:none!important;
transition:transform .2s ease,box-shadow .2s ease!important;
}
#salonDesktopTeam .std-master:hover .std-master-avatar{
transform:translateY(-4px)!important;
box-shadow:0 14px 28px rgba(0,0,0,.16)!important;
}
#salonDesktopTeam .std-master-name{
margin-top:15px!important;
color:#f7f3f0!important;
font-size:24px!important;
}
#salonDesktopTeam .std-master-role{
margin-top:6px!important;
color:#c1b5ae!important;
font-size:10.5px!important;
}
#salonDesktopTeam .std-master-cats{display:none!important}
#salonDesktopContacts.std-contact{padding-top:92px!important}
#salonDesktopContacts .std-contact-status{
min-width:208px!important;
min-height:48px!important;
justify-content:center!important;
gap:9px!important;
padding:10px 18px!important;
font-size:13px!important;
}
#salonDesktopContacts .std-contact-status svg{
width:19px!important;
height:19px!important;
}
#salonDesktopContacts .std-contact-body{
gap:46px!important;
margin-top:42px!important;
}
#salonDesktopContacts .std-contact-list{gap:14px!important}
#salonDesktopContacts .std-contact-card{
min-height:88px!important;
padding:15px 17px!important;
}
#salonDesktopContacts .std-contact-map{min-height:382px!important}
#salonDesktopContacts .std-contact-actions{
gap:14px!important;
margin-top:16px!important;
}
#salonDesktopContacts .std-contact-action-btn{
height:66px!important;
border-radius:13px!important;
font-size:15px!important;
transition:transform .18s ease,filter .18s ease,background .18s ease!important;
}
#salonDesktopContacts .std-contact-action-btn:hover{
transform:translateY(-2px)!important;
filter:brightness(1.05)!important;
}
}
@media(min-width:768px) and (max-width:1199px){
#salonDesktopServices.mct-prices>.mct-shell{
width:min(calc(100% - 56px),1360px)!important;
grid-template-columns:minmax(330px,380px) minmax(0,1fr)!important;
column-gap:50px!important;
}
#salonDesktopServices .mct-price-head{padding-right:24px!important}
#salonDesktopServices .dct-service-sticky-card{
min-height:470px!important;
padding:36px 26px 28px!important;
}
#salonDesktopAbout>.br-about-team-shell{
width:min(calc(100% - 56px),1360px)!important;
gap:34px!important;
}
#salonDesktopTeam.br-team-panel{padding:36px 28px!important}
#salonDesktopTeam .std-master-avatar{width:min(100%,118px)!important}
}
@media(min-width:768px){
#salonDesktopServices.mct-prices{
padding-top:54px!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
width:calc(100% - 0.8cm)!important;
max-width:1360px!important;
margin-left:0.8cm!important;
margin-right:auto!important;
grid-template-columns:minmax(455px,505px) minmax(0,1fr)!important;
column-gap:58px!important;
}
#salonDesktopServices .mct-price-head{
top:92px!important;
padding-right:38px!important;
justify-content:stretch!important;
}
#salonDesktopServices .mct-price-head:after{
right:0!important;
}
#salonDesktopServices .dct-service-sticky-card{
width:100%!important;
max-width:none!important;
min-height:520px!important;
padding-top:28px!important;
}
#salonDesktopServices .dct-service-sticky-card>strong{
margin:0!important;
}
#salonDesktopServices .dct-services-main-title{
grid-column:2!important;
margin:0 0 26px!important;
color:#f7f3f0!important;
font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.03em!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
grid-column:2!important;
width:calc(100% + max(38px,calc((100vw - 1360px)/2)))!important;
max-width:none!important;
margin:0!important;
padding:0 0 22px!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs{
width:100%!important;
max-width:none!important;
margin:0!important;
padding:4px max(38px,calc((100vw - 1360px)/2)) 12px 0!important;
overflow-x:auto!important;
overflow-y:hidden!important;
scrollbar-width:none!important;
overscroll-behavior-x:contain!important;
scroll-snap-type:x proximity!important;
}
#salonDesktopServices .mct-tabs::-webkit-scrollbar{display:none!important}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{
display:flex!important;
width:max-content!important;
min-width:max-content!important;
flex-wrap:nowrap!important;
gap:10px!important;
padding:0!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
#salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
flex:0 0 auto!important;
width:auto!important;
min-width:max-content!important;
min-height:49px!important;
padding:0 22px!important;
border-radius:999px!important;
scroll-snap-align:start!important;
}
#salonDesktopServices .mct-tab.is-active,
#salonDesktopServices .mct-tab-all.is-active{
border-color:#d8b7aa!important;
background:#d8b7aa!important;
color:#2f2926!important;
box-shadow:0 12px 26px rgba(0,0,0,.14)!important;
}
#salonDesktopServices.mct-prices{
overflow-x:hidden!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
width:calc(100% - 2cm)!important;
max-width:none!important;
margin-left:1cm!important;
margin-right:1cm!important;
grid-template-columns:minmax(455px,505px) minmax(0,1fr)!important;
column-gap:2cm!important;
}
#salonDesktopServices .mct-price-head{
top:92px!important;
padding-right:0!important;
}
#salonDesktopServices .mct-price-head:after{
right:-1cm!important;
}
#salonDesktopServices .dct-service-sticky-card{
min-height:0!important;
padding:30px 32px!important;
border-color:rgba(153,112,91,.24)!important;
background:
radial-gradient(340px 210px at 95% 2%,rgba(255,255,255,.94),transparent 70%),
radial-gradient(290px 230px at 0% 100%,rgba(194,151,128,.18),transparent 74%),
linear-gradient(145deg,#fffdf9 0%,#f2e5db 100%)!important;
box-shadow:
0 28px 70px rgba(86,56,43,.18),
0 10px 32px rgba(194,151,128,.18),
inset 0 1px 0 rgba(255,255,255,.92)!important;
}
#salonDesktopServices .dct-service-sticky-card>strong,
#salonDesktopServices .dct-services-main-title{
font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.03em!important;
}
#salonDesktopServices .dct-services-main-title{
align-self:start!important;
margin:0!important;
padding:0!important;
}
#salonDesktopServices .dct-service-sticky-lead{
max-width:390px!important;
margin:16px 0 0!important;
color:#76675f!important;
font:500 12px/1.65 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .dct-service-sticky-info{
gap:12px!important;
margin-top:24px!important;
}
#salonDesktopServices .dct-service-sticky-row{
min-height:82px!important;
padding:12px!important;
}
#salonDesktopServices .dct-service-sticky-benefits{
display:grid!important;
grid-template-columns:1fr 1fr!important;
gap:12px!important;
margin-top:12px!important;
}
#salonDesktopServices .dct-service-sticky-benefits>span{
min-height:68px!important;
padding:13px 14px!important;
border:1px solid rgba(112,82,68,.10)!important;
border-radius:16px!important;
background:rgba(255,255,255,.34)!important;
}
#salonDesktopServices .dct-service-sticky-benefits b,
#salonDesktopServices .dct-service-sticky-benefits small{
display:block!important;
}
#salonDesktopServices .dct-service-sticky-benefits b{
color:#302925!important;
font:650 11px/1.25 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .dct-service-sticky-benefits small{
margin-top:5px!important;
color:#8b7c74!important;
font:500 9px/1.45 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .dct-service-sticky-book{
position:relative!important;
overflow:hidden!important;
margin-top:20px!important;
background:linear-gradient(100deg,#8d6959,#ad8571,#8d6959)!important;
background-size:220% 100%!important;
box-shadow:0 12px 28px rgba(147,102,80,.24)!important;
animation:brServiceBookGlow 3.8s ease-in-out infinite!important;
}
#salonDesktopServices .dct-service-sticky-book:after{
position:absolute!important;
top:-45%!important;
left:-35%!important;
width:28%!important;
height:190%!important;
content:""!important;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.42),transparent)!important;
transform:rotate(18deg)!important;
animation:brServiceBookShine 4.6s ease-in-out infinite!important;
}
#salonDesktopServices .dct-service-sticky-work{
margin-top:10px!important;
}
@keyframes brServiceBookGlow{
0%,100%{background-position:0 50%;box-shadow:0 12px 28px rgba(147,102,80,.20)}
50%{background-position:100% 50%;box-shadow:0 16px 36px rgba(147,102,80,.34)}
}
@keyframes brServiceBookShine{
0%,62%{left:-35%;opacity:0}
68%{opacity:1}
82%{left:120%;opacity:0}
100%{left:120%;opacity:0}
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
grid-column:2!important;
width:calc(100% + 1cm)!important;
margin-top:30px!important;
padding:0 0 24px!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs{
width:100%!important;
padding:4px 1cm 12px 0!important;
overflow-x:auto!important;
overflow-y:hidden!important;
clip-path:none!important;
mask-image:none!important;
-webkit-mask-image:none!important;
}
#salonDesktopServices .dct-service-groups,
#salonDesktopServices .mct-more-services{
grid-column:2!important;
}
#salonDesktopAbout{
position:relative!important;
}
#salonDesktopAbout>.br-about-team-headings{
width:min(calc(100% - 72px),1460px)!important;
margin:0 auto 24px!important;
display:grid!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:72px!important;
position:relative!important;
}
#salonDesktopAbout>.br-about-team-headings:after{
position:absolute!important;
left:50%!important;
top:4px!important;
width:1px!important;
height:76px!important;
content:""!important;
background:linear-gradient(to bottom,transparent,rgba(116,90,78,.26),transparent)!important;
}
#salonDesktopAbout>.br-about-team-headings h2{
margin:0!important;
text-align:center!important;
font:500 clamp(50px,4.1vw,64px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.035em!important;
}
#salonDesktopAbout>.br-about-team-headings h2:last-child{color:#2e2724!important}
#salonDesktopAbout>.br-about-team-shell{
width:min(calc(100% - 72px),1460px)!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:72px!important;
align-items:stretch!important;
position:relative!important;
}
#salonDesktopAbout>.br-about-team-shell:after{
position:absolute!important;
left:50%!important;
top:2%!important;
width:1px!important;
height:96%!important;
content:""!important;
pointer-events:none!important;
background:linear-gradient(to bottom,transparent,rgba(116,90,78,.18) 15%,rgba(116,90,78,.18) 85%,transparent)!important;
}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{
box-sizing:border-box!important;
min-height:820px!important;
}
#salonDesktopAbout .br-about-column{
display:flex!important;
flex-direction:column!important;
padding:36px!important;
border:1px solid rgba(85,64,57,.10)!important;
border-radius:28px!important;
background:#fff!important;
box-shadow:0 20px 52px rgba(67,50,44,.09)!important;
}
#salonDesktopAbout .mct-about-head,
#salonDesktopTeam .std-team-title{display:none!important}
#salonDesktopAbout .mct-about-card{
flex:1 1 auto!important;
margin-top:0!important;
border:0!important;
border-radius:22px!important;
background:#fff!important;
box-shadow:none!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
height:310px!important;
min-height:310px!important;
border-radius:22px!important;
overflow:hidden!important;
}
#salonDesktopAbout .mct-about-copy{
padding:28px 0 0!important;
}
#salonDesktopTeam.br-team-panel{
display:flex!important;
flex-direction:column!important;
padding:36px!important;
}
#salonDesktopTeam .std-team-kicker{display:none!important}
#salonDesktopTeam .std-team-title{color:#f7f3f0!important}
#salonDesktopTeam .std-team-subtitle{
margin:13px 0 0!important;
text-align:center!important;
}
#salonDesktopTeam .std-team-track{
flex:1 1 auto!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:28px!important;
margin-top:28px!important;
align-content:center!important;
}
#salonDesktopTeam .std-master{
box-sizing:border-box!important;
min-height:272px!important;
padding:16px 12px 18px!important;
border:1px solid rgba(255,255,255,.075)!important;
border-radius:22px!important;
background:rgba(255,255,255,.035)!important;
}
#salonDesktopTeam .std-master-avatar{
width:166px!important;
max-width:100%!important;
}
#salonDesktopTeam .std-master-name{
margin-top:17px!important;
font-size:26px!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
align-items:start!important;
}
#salonDesktopServices .mct-price-head{
position:sticky!important;
top:92px!important;
align-self:start!important;
transform:none!important;
}
#salonDesktopServices .dct-service-sticky-card>strong,
#salonDesktopServices .dct-services-main-title{
margin:0!important;
padding:0!important;
font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopServices .dct-services-main-title{
min-height:44px!important;
display:flex!important;
align-items:flex-start!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
width:calc(100% + 1.7cm)!important;
margin-left:-.7cm!important;
margin-top:32px!important;
}
#salonDesktopServices .mct-tabs{
padding-left:.7cm!important;
padding-right:1cm!important;
}
#salonDesktopServices .mct-tab.is-active,
#salonDesktopServices .mct-tab-all.is-active{
border-color:#d8b7aa!important;
background:#d8b7aa!important;
color:#2f2926!important;
box-shadow:0 13px 30px rgba(216,183,170,.24)!important;
}
#salonDesktopServices .dct-service-groups{
margin-top:0!important;
}
#salonDesktopServices .dct-service-category,
#salonDesktopServices .dct-service-category-list{
width:100%!important;
min-width:0!important;
}
#salonDesktopServices .dct-service-card,
#salonDesktopServices .dct-service-card-body{
box-sizing:border-box!important;
max-width:100%!important;
min-width:0!important;
}
#salonDesktopServices .dct-service-sticky-book{
isolation:isolate!important;
animation:brHeroLikePulse 3.4s ease-in-out infinite!important;
}
#salonDesktopServices .dct-service-sticky-book:after{
z-index:0!important;
width:36%!important;
left:-48%!important;
opacity:0!important;
animation:brHeroLikeShine 3.4s cubic-bezier(.2,.7,.25,1) infinite!important;
}
#salonDesktopServices .dct-service-sticky-book>span{
position:relative!important;
z-index:1!important;
}
@keyframes brHeroLikePulse{
0%,100%{filter:brightness(1);transform:translateY(0);box-shadow:0 12px 28px rgba(147,102,80,.22)}
50%{filter:brightness(1.09);transform:translateY(-1px);box-shadow:0 17px 38px rgba(185,137,113,.38)}
}
@keyframes brHeroLikeShine{
0%,48%{left:-48%;opacity:0}
54%{opacity:.9}
72%{left:118%;opacity:0}
100%{left:118%;opacity:0}
}
#salonDesktopAbout>.br-about-team-headings,
#salonDesktopAbout>.br-about-team-shell{
width:min(calc(100% - 56px),1500px)!important;
gap:78px!important;
}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{
min-height:0!important;
}
#salonDesktopAbout .mct-about-card{
display:flex!important;
flex-direction:column!important;
height:100%!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
height:390px!important;
min-height:390px!important;
}
#salonDesktopAbout .mct-about-portrait,
#salonDesktopAbout .mct-about-portrait img{
width:100%!important;
height:100%!important;
}
#salonDesktopAbout .mct-about-portrait img{object-fit:cover!important}
#salonDesktopTeam .std-team-kicker{
display:block!important;
margin:0 0 10px!important;
text-align:center!important;
color:#bcb2ad!important;
font:600 11px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.25em!important;
text-transform:uppercase!important;
}
#salonDesktopTeam .std-team-track{
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:28px 34px!important;
align-content:center!important;
}
#salonDesktopTeam .std-master{
min-height:0!important;
padding:4px 0 12px!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
box-shadow:none!important;
}
#salonDesktopTeam .std-master:hover{
background:transparent!important;
transform:translateY(-3px)!important;
}
#salonDesktopTeam .std-master-avatar{
width:190px!important;
height:190px!important;
max-width:100%!important;
}
#salonDesktopTeam .std-master-avatar svg{
width:72px!important;
height:72px!important;
}
#salonDesktopTeam .std-master-name{font-size:28px!important}
#salonDesktopTeam .std-master-role{font-size:13px!important}
#salonDesktopTeam .std-master-cat{
font-size:10px!important;
padding:7px 10px!important;
}
#stdMasterOverlay .std-master-page-panel{
width:min(calc(100% - 72px),1320px)!important;
padding:30px 54px 132px!important;
}
#stdMasterOverlay .std-master-page-top{
grid-template-columns:58px 1fr 58px!important;
}
#stdMasterOverlay .std-master-page-top span{
font-size:17px!important;
letter-spacing:.3em!important;
}
#stdMasterOverlay .std-master-page-close{
width:54px!important;
height:54px!important;
font-size:31px!important;
}
#stdMasterOverlay .std-master-profile{
margin-top:34px!important;
}
#stdMasterOverlay .std-master-profile .std-master-avatar{
width:190px!important;
height:190px!important;
}
#stdMasterOverlay .std-master-profile .std-master-avatar svg{
width:86px!important;
height:86px!important;
}
#stdMasterOverlay .std-master-profile h2{
margin-top:22px!important;
font-size:66px!important;
}
#stdMasterOverlay .std-master-profile p{
font-size:17px!important;
}
#stdMasterOverlay .std-master-profile-rating{
font-size:15px!important;
}
#stdMasterOverlay .std-master-page-grid{
gap:42px!important;
margin-top:46px!important;
}
#stdMasterOverlay .std-master-page-block{
padding:34px!important;
border-radius:24px!important;
}
#stdMasterOverlay .std-master-page-block h3{
margin-bottom:21px!important;
font-size:39px!important;
}
#stdMasterOverlay .std-master-page-service{
padding:18px 0!important;
}
#stdMasterOverlay .std-master-page-service strong{font-size:16px!important}
#stdMasterOverlay .std-master-page-service span,
#stdMasterOverlay .std-master-page-empty{font-size:14px!important}
#stdMasterOverlay .std-master-page-book{
min-width:300px!important;
height:66px!important;
font-size:15px!important;
}
#salonDesktopContacts.std-contact{
padding-top:54px!important;
padding-bottom:0!important;
}
#salonDesktopContacts .std-contact-inner{
padding-bottom:48px!important;
}
#salonDesktopContacts .std-contact-card{
min-height:106px!important;
padding:0 25px!important;
transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease!important;
}
#salonDesktopContacts a.std-contact-card:hover{
transform:translateY(-4px)!important;
border-color:rgba(216,183,170,.42)!important;
background:rgba(255,255,255,.085)!important;
box-shadow:0 16px 34px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.06)!important;
}
#salonDesktopContacts a.std-contact-card:hover .std-contact-card-icon{
transform:scale(1.08)!important;
color:#e0bfae!important;
}
#salonDesktopContacts .std-contact-card-icon{
transition:transform .22s ease,color .22s ease!important;
}
#salonDesktopContacts .std-contact-card-title{
font-size:29px!important;
}
#salonDesktopContacts a[href^="tel:"] .std-contact-card-title{
font:500 20px/1.15 "Manrope",Arial,sans-serif!important;
letter-spacing:.01em!important;
}
#salonDesktopContacts .std-contact-card-sub{
margin-top:8px!important;
font-size:15px!important;
line-height:1.28!important;
}
#salonDesktopContacts .std-contact-bottom{
min-height:150px!important;
margin:0 -84px!important;
overflow:visible!important;
}
#salonDesktopContacts .std-contact-brand{
min-height:150px!important;
overflow:visible!important;
}
#salonDesktopContacts .br-tanem-mark{
width:38px!important;
height:38px!important;
flex:0 0 38px!important;
font-size:25px!important;
}
#salonDesktopContacts .br-tanem-copy{
font-size:12px!important;
line-height:1.3!important;
}
#salonDesktopContacts .br-tanem-copy strong{font-size:18px!important}
#salonDesktopContacts .std-contact-bottom{
min-height:118px!important;
margin:36px -70px -54px!important;
padding:0!important;
border-top:1px solid rgba(23,21,19,.18)!important;
background:#171513!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
}
#salonDesktopContacts .std-contact-brand{
width:100%!important;
max-width:none!important;
min-height:118px!important;
margin:0!important;
padding:0 70px!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
box-shadow:none!important;
display:flex!important;
flex-direction:column!important;
align-items:center!important;
justify-content:center!important;
gap:8px!important;
}
}
@media(min-width:768px) and (max-width:1199px){
#salonDesktopServices.mct-prices>.mct-shell{
width:calc(100% - 0.8cm)!important;
max-width:1360px!important;
margin-left:0.8cm!important;
margin-right:auto!important;
grid-template-columns:minmax(400px,440px) minmax(0,1fr)!important;
column-gap:40px!important;
}
#salonDesktopServices .mct-price-head{padding-right:28px!important}
#salonDesktopServices .mct-price-head:after{right:0!important}
#salonDesktopAbout>.br-about-team-shell{
width:min(calc(100% - 56px),1360px)!important;
gap:30px!important;
}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{
min-height:760px!important;
padding:30px!important;
}
#salonDesktopTeam .std-master-avatar{width:142px!important}
#salonDesktopTeam .std-master{min-height:248px!important}
}
@media(min-width:768px){
#salonDesktopServices.mct-prices{overflow:visible!important;padding:54px 0 90px!important}
#salonDesktopServices.mct-prices>.mct-shell{
display:grid!important;width:calc(100% - 2cm)!important;max-width:1480px!important;margin:0 auto!important;
grid-template-columns:minmax(340px,440px) minmax(0,1fr)!important;
grid-template-rows:48px auto minmax(680px,auto) auto!important;column-gap:2cm!important;row-gap:0!important;
align-items:start!important;overflow:visible!important
}
#salonDesktopServices .mct-price-head{
position:sticky!important;top:92px!important;grid-column:1!important;grid-row:1 / span 4!important;
align-self:start!important;display:block!important;width:100%!important;height:auto!important;
margin:0!important;padding:0!important;transform:none!important;z-index:4!important
}
#salonDesktopServices .mct-price-head:after{top:0!important;right:-1cm!important;height:min(75vh,700px)!important}
#salonDesktopServices .dct-service-sticky-card{
box-sizing:border-box!important;width:100%!important;max-width:none!important;min-height:0!important;height:auto!important;
margin:0!important;padding:0 28px 28px!important;overflow:hidden!important;
background:radial-gradient(300px 230px at 100% 0%,#fffefa,transparent 76%),linear-gradient(145deg,#fbf6f0,#ecddd1)!important;
box-shadow:0 24px 65px rgba(94,57,42,.2),0 0 80px rgba(192,148,124,.1)!important
}
#salonDesktopServices .dct-service-sticky-card>strong{
display:block!important;height:48px!important;margin:0!important;padding:0!important;
font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;color:#241d19!important;white-space:nowrap!important
}
#salonDesktopServices .dct-services-main-title{
grid-column:2!important;grid-row:1!important;display:block!important;height:48px!important;min-height:0!important;
margin:0!important;padding:0!important;font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;color:#f7f3f0!important
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
grid-column:2!important;grid-row:2!important;width:calc(100% + 1.7cm)!important;max-width:none!important;
margin:27px 0 0 -.7cm!important;padding:0 0 22px!important;overflow:visible!important
}
#salonDesktopServices .mct-tabs{
box-sizing:border-box!important;width:100%!important;max-width:none!important;margin:0!important;
padding:5px 1cm 15px .7cm!important;overflow-x:auto!important;overflow-y:hidden!important;
clip-path:none!important;mask-image:none!important;-webkit-mask-image:none!important
}
#salonDesktopServices .mct-tabs-track{display:flex!important;flex-wrap:nowrap!important;width:max-content!important;min-width:100%!important;gap:10px!important}
#salonDesktopServices .mct-tab{flex:0 0 auto!important}
#salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
#salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
border-color:#e3c0aa!important;background:#d8b7aa!important;color:#241d19!important;
box-shadow:0 0 0 2px rgba(227,192,170,.24),0 12px 26px rgba(190,142,113,.25)!important
}
#salonDesktopServices .dct-service-groups{
grid-column:2!important;grid-row:3!important;width:100%!important;min-width:0!important;min-height:680px!important;
margin:0!important;padding:0!important;align-self:start!important
}
#salonDesktopServices .dct-service-category,#salonDesktopServices .dct-service-category-list{
box-sizing:border-box!important;width:100%!important;min-width:0!important;max-width:100%!important
}
#salonDesktopServices .mct-more-services{grid-column:2!important;grid-row:4!important;align-self:start!important;margin-top:24px!important}
#salonDesktopServices .dct-service-sticky-lead{margin-top:15px!important}
#salonDesktopServices .dct-service-sticky-info{margin-top:18px!important}
#salonDesktopServices .dct-service-sticky-book{position:relative!important;isolation:isolate!important;overflow:hidden!important;animation:brV49BookPulse 3.3s ease-in-out infinite!important}
#salonDesktopServices .dct-service-sticky-book:after{
position:absolute!important;content:""!important;top:-55%!important;left:-50%!important;width:34%!important;height:210%!important;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)!important;
transform:rotate(20deg)!important;pointer-events:none!important;animation:brV49BookShine 3.3s ease-in-out infinite!important
}
#salonDesktopServices .dct-service-sticky-book>span{position:relative!important;z-index:1!important}
@keyframes brV49BookPulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.13)}}
@keyframes brV49BookShine{0%,48%{left:-50%;opacity:0}55%{opacity:1}74%{left:125%;opacity:0}100%{left:125%;opacity:0}}
#salonDesktopAbout>.br-about-team-headings,#salonDesktopAbout>.br-about-team-shell{
box-sizing:border-box!important;width:min(calc(100% - 64px),1500px)!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:76px!important
}
#salonDesktopAbout .br-about-column,#salonDesktopTeam.br-team-panel{
box-sizing:border-box!important;min-height:0!important;height:auto!important;padding:24px!important
}
#salonDesktopAbout .mct-about-card{
box-sizing:border-box!important;display:flex!important;flex-direction:column!important;min-height:0!important;height:auto!important;margin:0!important;padding:0!important
}
#salonDesktopAbout .mct-about-portrait-wrap{width:100%!important;height:420px!important;min-height:420px!important;flex:0 0 420px!important;margin:0!important;overflow:hidden!important}
#salonDesktopAbout .mct-about-portrait,#salonDesktopAbout .mct-about-portrait img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important}
#salonDesktopAbout .mct-about-copy{padding:28px!important}
#salonDesktopTeam .std-team-track{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:24px!important;width:100%!important;overflow:visible!important;padding:0!important}
#salonDesktopTeam .std-master{
display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;
width:100%!important;min-height:0!important;height:auto!important;padding:10px 0 16px!important;border:0!important;background:transparent!important;box-shadow:none!important
}
#salonDesktopTeam .std-master-avatar{width:180px!important;height:180px!important;max-width:100%!important}
#salonDesktopTeam .std-master-name{font-size:28px!important}
#salonDesktopTeam .std-master-role{font-size:14px!important}
#stdMasterOverlay .std-master-page-panel{box-sizing:border-box!important;width:min(calc(100% - 56px),1320px)!important;max-width:none!important;padding:32px 52px 140px!important}
#stdMasterOverlay .std-master-profile h2{font-size:66px!important}
#stdMasterOverlay .std-master-page-block h3{font-size:39px!important}
#stdMasterOverlay .std-master-page-service strong{font-size:16px!important}
#stdMasterOverlay .std-master-page-service span{font-size:14px!important}
#salonDesktopContacts.std-contact{box-sizing:border-box!important;min-height:0!important;padding:58px 64px 0!important;overflow:visible!important}
#salonDesktopContacts .std-contact-inner{width:min(100%,1460px)!important;margin:0 auto!important;padding-bottom:50px!important}
#salonDesktopContacts .std-contact-card{min-height:110px!important;padding:16px 25px!important;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease,background .22s ease!important}
#salonDesktopContacts a.std-contact-card:hover{transform:translateY(-5px)!important;border-color:rgba(216,183,170,.6)!important;background:rgba(255,255,255,.10)!important;box-shadow:0 18px 36px rgba(0,0,0,.22)!important}
#salonDesktopContacts .std-contact-card-title{font-size:29px!important}
#salonDesktopContacts a[href^="tel:"] .std-contact-card-title{font:600 21px/1.25 "Manrope",Arial,sans-serif!important}
#salonDesktopContacts .std-contact-card-sub{font-size:15px!important}
#salonDesktopContacts .std-contact-bottom{
box-sizing:border-box!important;width:calc(100% + 128px)!important;margin:0 -64px!important;padding:20px 0!important;
min-height:132px!important;overflow:visible!important;background:#11100f!important
}
#salonDesktopContacts .std-contact-brand{
box-sizing:border-box!important;display:flex!important;flex-direction:row!important;justify-content:center!important;align-items:center!important;
width:min(100%,450px)!important;min-height:90px!important;margin:0 auto!important;padding:16px 22px!important;overflow:visible!important
}
#salonDesktopContacts .br-tanem-mark{display:grid!important;flex:0 0 48px!important;width:48px!important;height:48px!important;place-items:center!important;overflow:visible!important}
#salonDesktopContacts .br-tanem-copy{display:block!important;font-size:14px!important}
}
@media(min-width:768px) and (max-width:1199px){
#salonDesktopServices.mct-prices>.mct-shell{width:calc(100% - 56px)!important;grid-template-columns:minmax(280px,39%) minmax(0,1fr)!important;column-gap:36px!important}
#salonDesktopServices .mct-price-head:after{right:-18px!important}
#salonDesktopServices .dct-service-sticky-card{padding:0 18px 22px!important}
#salonDesktopServices .dct-service-sticky-card>strong,#salonDesktopServices .dct-services-main-title{font-size:40px!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{width:calc(100% + .5cm)!important;margin-left:-.5cm!important}
#salonDesktopServices .mct-tabs{padding-left:.5cm!important}
#salonDesktopAbout>.br-about-team-headings,#salonDesktopAbout>.br-about-team-shell{gap:34px!important}
#salonDesktopTeam .std-master-avatar{width:130px!important;height:130px!important}
}
@media(prefers-reduced-motion:reduce){
#salonDesktopServices .dct-service-sticky-book,#salonDesktopServices .dct-service-sticky-book:after{animation:none!important}
}
@media(min-width:768px){
#salonDesktopServices.mct-prices{overflow:visible!important}
#salonDesktopServices.mct-prices>.mct-shell{overflow:visible!important}
#salonDesktopServices .mct-price-head{
position:sticky!important;top:92px!important;z-index:5!important;
grid-column:1!important;grid-row:1 / 5!important;align-self:start!important;
}
#salonDesktopServices .dct-service-sticky-card{
transform:none!important;margin:0!important;box-sizing:border-box!important;
}
#salonDesktopServices .dct-service-sticky-card>strong,
#salonDesktopServices .dct-services-main-title{
font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.03em!important;margin:0!important;padding:0!important;
}
#salonDesktopServices .dct-service-sticky-card>strong{display:block!important}
#salonDesktopServices .dct-services-main-title{display:block!important;grid-column:2!important;grid-row:1!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{grid-column:2!important;grid-row:2!important}
#salonDesktopServices .dct-service-groups{grid-column:2!important;grid-row:3!important;margin-top:0!important}
#salonDesktopServices .mct-more-services{grid-column:2!important;grid-row:4!important}
#salonDesktopServices .mct-tab[aria-selected="true"]{
background:#d7b5a4!important;border-color:#ead1c4!important;color:#241d19!important;
box-shadow:0 0 0 2px rgba(234,209,196,.16),0 14px 30px rgba(0,0,0,.16)!important;
transform:translateY(-1px)!important;
}
#salonDesktopServices .dct-service-sticky-book{
background:linear-gradient(105deg,#8d6959 0%,#b68a73 45%,#8d6959 100%)!important;
background-size:220% 100%!important;animation:brHeroLikePulse 3.4s ease-in-out infinite!important;
}
#salonDesktopServices .dct-service-sticky-book:after{
content:""!important;display:block!important;position:absolute!important;pointer-events:none!important;
top:-45%!important;left:-45%!important;width:32%!important;height:190%!important;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.72),transparent)!important;
transform:rotate(18deg)!important;animation:brHeroLikeShine 3.4s ease-in-out infinite!important;
}
#salonDesktopAbout .br-about-column{min-height:760px!important;padding:28px!important}
#salonDesktopAbout .mct-about-card{
height:100%!important;display:grid!important;grid-template-rows:minmax(390px,1.2fr) auto!important;
gap:0!important;overflow:hidden!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{height:100%!important;min-height:390px!important}
#salonDesktopAbout .mct-about-portrait{height:100%!important}
#salonDesktopAbout .mct-about-portrait img{width:100%!important;height:100%!important;object-fit:cover!important}
#salonDesktopAbout .mct-about-copy{padding:24px 4px 2px!important}
#salonDesktopTeam.br-team-panel{min-height:760px!important;padding:30px 28px!important}
#salonDesktopTeam .std-team-kicker{
display:block!important;margin:0!important;text-align:center!important;color:#bcaea7!important;
font:600 12px/1 "Manrope",Arial,sans-serif!important;letter-spacing:.24em!important;text-transform:uppercase!important;
}
#salonDesktopTeam .std-team-subtitle{margin:12px auto 22px!important;max-width:480px!important}
#salonDesktopTeam .std-team-track{
display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:30px 42px!important;margin:0!important;align-content:space-evenly!important;overflow:visible!important;
}
#salonDesktopTeam .std-master{
min-height:0!important;padding:0!important;border:0!important;border-radius:0!important;
background:transparent!important;box-shadow:none!important;
}
#salonDesktopTeam .std-master:hover{background:transparent!important;box-shadow:none!important;transform:translateY(-4px)!important}
#salonDesktopTeam .std-master-avatar{width:190px!important;height:190px!important;max-width:100%!important}
#salonDesktopTeam .std-master-name{font-size:29px!important}
#salonDesktopTeam .std-master-role{font-size:13px!important}
#salonDesktopTeam .std-master-cat{border:0!important;background:transparent!important;padding:0!important}
#stdMasterOverlay .std-master-page-panel{width:min(calc(100% - 64px),1380px)!important;padding:30px 56px 140px!important}
#stdMasterOverlay .std-master-profile .std-master-avatar{width:210px!important;height:210px!important}
#stdMasterOverlay .std-master-profile h2{font-size:72px!important}
#stdMasterOverlay .std-master-profile p{font-size:18px!important}
#stdMasterOverlay .std-master-profile-cats{gap:10px!important;margin-top:16px!important}
#stdMasterOverlay .std-master-profile-cats span{font-size:14px!important;padding:9px 15px!important}
#stdMasterOverlay .std-master-tabs{gap:12px!important;margin-top:34px!important}
#stdMasterOverlay .std-master-tabs button{min-height:58px!important;padding:0 26px!important;font-size:15px!important}
#stdMasterOverlay .std-master-tab-content{margin-top:30px!important}
#stdMasterOverlay .std-master-tab-content>h3,#stdMasterOverlay .std-master-page-block h3{font-size:42px!important}
#stdMasterOverlay .std-master-about-copy{font-size:18px!important;line-height:1.65!important}
#stdMasterOverlay .std-master-page-service strong{font-size:17px!important}
#stdMasterOverlay .std-master-page-service span{font-size:14px!important}
#salonDesktopContacts.std-contact{padding-bottom:0!important}
#salonDesktopContacts .std-contact-card{min-height:112px!important}
#salonDesktopContacts .std-contact-card-title{font-size:30px!important}
#salonDesktopContacts .std-contact-card-sub{font-size:15px!important}
#salonDesktopContacts a[href^="tel:"] .std-contact-card-title{
font:500 21px/1.15 "Manrope",Arial,sans-serif!important;letter-spacing:.01em!important;
}
#salonDesktopContacts a.std-contact-card{transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease!important}
#salonDesktopContacts a.std-contact-card:hover{
transform:translateY(-5px)!important;background:rgba(255,255,255,.09)!important;
border-color:rgba(216,183,170,.44)!important;box-shadow:0 16px 38px rgba(0,0,0,.20)!important;
}
#salonDesktopContacts .std-contact-bottom{
box-sizing:border-box!important;width:calc(100% + 168px)!important;min-height:128px!important;
margin:42px -84px 0!important;padding:24px 0 20px!important;overflow:visible!important;
}
#salonDesktopContacts .std-contact-brand{
box-sizing:border-box!important;width:min(calc(100% - 80px),560px)!important;min-height:78px!important;
margin:0 auto!important;padding:12px 24px!important;overflow:visible!important;
}
#salonDesktopContacts .br-tanem-mark{width:40px!important;height:40px!important;flex:0 0 40px!important}
}
@media(min-width:1200px){
#salonDesktopServices.mct-prices>.mct-shell{
width:calc(100% - 2cm)!important;margin:0 1cm!important;max-width:none!important;
grid-template-columns:minmax(410px,470px) minmax(0,1fr)!important;column-gap:2cm!important;
grid-template-rows:auto auto auto auto!important;
}
#salonDesktopServices .mct-price-head:after{right:-1cm!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{
width:calc(100% + 1.7cm)!important;margin:34px 0 0 -.7cm!important;overflow:visible!important;
}
#salonDesktopServices .mct-tabs{padding:5px 1cm 15px .7cm!important}
}
@media(min-width:768px){
html[data-br-device="desktop"]{overflow-x:clip!important;overflow-y:auto!important}
html[data-br-device="desktop"] body{overflow-x:clip!important;overflow-y:visible!important}
#salonDesktopPortfolio.std-portfolio{padding-bottom:38px!important}
#salonDesktopPortfolio #stdOpenGallery{margin-bottom:0!important}
#salonDesktopServices.mct-prices{
padding:58px 0 94px!important;
overflow:visible!important;
background:
radial-gradient(720px 520px at 6% 12%,rgba(190,145,121,.14),transparent 68%),
radial-gradient(760px 520px at 96% 92%,rgba(190,145,121,.08),transparent 72%),
#2d2824!important;
}
#salonDesktopServices.mct-prices>.mct-shell{
width:calc(100% - 2cm)!important;
max-width:none!important;
margin:0 1cm!important;
grid-template-columns:minmax(410px,470px) minmax(0,1fr)!important;
grid-template-rows:48px auto minmax(680px,auto) auto!important;
column-gap:2cm!important;
row-gap:0!important;
overflow:visible!important;
}
#salonDesktopServices .mct-price-head{
position:relative!important;
top:auto!important;
grid-column:1!important;
grid-row:1 / 5!important;
align-self:stretch!important;
width:100%!important;
height:100%!important;
margin:0!important;
padding:0!important;
transform:none!important;
z-index:5!important;
}
#salonDesktopServices .mct-price-head:after{
top:0!important;
right:-1cm!important;
width:1px!important;
height:min(74vh,700px)!important;
background:linear-gradient(180deg,rgba(229,205,193,0),rgba(229,205,193,.22) 10%,rgba(229,205,193,.22) 88%,rgba(229,205,193,0))!important;
}
#salonDesktopServices .dct-service-sticky-card{
position:sticky!important;
top:94px!important;
width:100%!important;
min-height:0!important;
margin:0!important;
padding:0 28px 28px!important;
overflow:hidden!important;
border:1px solid rgba(255,255,255,.44)!important;
border-radius:28px!important;
background:
radial-gradient(360px 260px at 100% 0%,rgba(255,255,255,.92),transparent 76%),
linear-gradient(145deg,#fffaf5 0%,#f0e1d6 100%)!important;
box-shadow:0 28px 70px rgba(8,6,5,.28),0 0 84px rgba(206,164,140,.09)!important;
}
#salonDesktopServices .dct-service-sticky-card:before{
content:""!important;
position:absolute!important;
inset:auto -90px -125px auto!important;
width:280px!important;
height:280px!important;
border:1px solid rgba(143,103,85,.09)!important;
border-radius:50%!important;
pointer-events:none!important;
}
#salonDesktopServices .dct-service-sticky-card>strong,
#salonDesktopServices .dct-services-main-title{
height:48px!important;
min-height:48px!important;
margin:0!important;
padding:0!important;
font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.03em!important;
white-space:nowrap!important;
}
#salonDesktopServices .dct-service-sticky-card>strong{
display:block!important;
color:#241d19!important;
}
#salonDesktopServices .dct-services-main-title{
display:block!important;
grid-column:2!important;
grid-row:1!important;
color:#f7f3f0!important;
}
#salonDesktopServices .dct-service-sticky-lead{
margin:13px 0 0!important;
max-width:390px!important;
color:#6c5f58!important;
font:400 12px/1.55 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .dct-service-sticky-info{
display:grid!important;
grid-template-columns:1fr 1.08fr!important;
gap:11px!important;
margin:17px 0 0!important;
}
#salonDesktopServices .dct-service-sticky-row{
min-width:0!important;
min-height:68px!important;
padding:11px 12px!important;
gap:10px!important;
border:1px solid rgba(84,61,51,.10)!important;
border-radius:15px!important;
background:rgba(255,255,255,.55)!important;
transition:background .22s ease,border-color .22s ease,box-shadow .22s ease!important;
}
#salonDesktopServices .dct-service-sticky-icon{
width:38px!important;
height:38px!important;
flex:0 0 38px!important;
background:rgba(255,255,255,.64)!important;
}
#salonDesktopServices .dct-service-sticky-icon svg{width:18px!important;height:18px!important}
#salonDesktopServices .dct-service-sticky-copy b{font-size:12px!important}
#salonDesktopServices .dct-service-sticky-copy small{margin-top:4px!important;font-size:9.5px!important;color:#766a64!important}
#salonDesktopServices .dct-service-sticky-card.is-closed .dct-service-availability{
border-color:rgba(167,79,86,.22)!important;
background:rgba(255,240,239,.82)!important;
box-shadow:inset 3px 0 0 rgba(167,79,86,.56)!important;
}
#salonDesktopServices .dct-service-sticky-card.is-closed .dct-service-availability b,
#salonDesktopServices .dct-service-sticky-card.is-closed .dct-service-availability svg{color:#a34f56!important;stroke:#a34f56!important}
#salonDesktopServices .dct-service-sticky-card.is-open .dct-service-availability{
border-color:rgba(63,135,80,.20)!important;
background:rgba(239,249,241,.84)!important;
box-shadow:inset 3px 0 0 rgba(63,135,80,.55)!important;
}
#salonDesktopServices .dct-service-sticky-card.is-open .dct-service-availability b,
#salonDesktopServices .dct-service-sticky-card.is-open .dct-service-availability svg{color:#3f8750!important;stroke:#3f8750!important}
#salonDesktopServices .dct-service-sticky-steps{
margin-top:16px!important;
padding:14px 0 13px!important;
border-top:1px solid rgba(89,66,56,.11)!important;
border-bottom:1px solid rgba(89,66,56,.11)!important;
}
#salonDesktopServices .dct-service-sticky-steps-title{
display:block!important;
margin-bottom:11px!important;
color:#77675f!important;
font:600 9px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.14em!important;
text-transform:uppercase!important;
}
#salonDesktopServices .dct-service-sticky-steps ol{
display:grid!important;
grid-template-columns:repeat(3,minmax(0,1fr))!important;
gap:0!important;
margin:0!important;
padding:0!important;
list-style:none!important;
}
#salonDesktopServices .dct-service-sticky-steps li{
min-width:0!important;
padding:0 11px!important;
border-left:1px solid rgba(89,66,56,.11)!important;
}
#salonDesktopServices .dct-service-sticky-steps li:first-child{padding-left:0!important;border-left:0!important}
#salonDesktopServices .dct-service-sticky-steps li:last-child{padding-right:0!important}
#salonDesktopServices .dct-service-sticky-steps b{
display:block!important;
color:#a77f6c!important;
font:600 9px/1 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .dct-service-sticky-steps li span{
display:block!important;
margin-top:6px!important;
overflow:hidden!important;
color:#352d29!important;
font:600 10px/1.22 "Manrope",Arial,sans-serif!important;
text-overflow:ellipsis!important;
}
#salonDesktopServices .dct-service-sticky-book,
#salonDesktopServices .dct-service-sticky-work{
width:100%!important;
height:58px!important;
border-radius:15px!important;
}
#salonDesktopServices .dct-service-sticky-book{
margin-top:17px!important;
border:1px solid rgba(255,255,255,.18)!important;
background:linear-gradient(105deg,#8d6959 0%,#b68a73 45%,#8d6959 100%)!important;
background-size:220% 100%!important;
color:#fff!important;
box-shadow:0 15px 30px rgba(108,72,56,.22)!important;
}
#salonDesktopServices .dct-service-sticky-work{
margin-top:10px!important;
border:1px solid rgba(85,62,52,.16)!important;
background:rgba(255,255,255,.38)!important;
color:#332b27!important;
}
#salonDesktopServices .dct-service-sticky-work:hover{background:#fff!important;transform:translateY(-2px)!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{
position:relative!important;
grid-column:2!important;
grid-row:2!important;
width:100%!important;
max-width:none!important;
margin:27px 0 0!important;
padding:0 0 19px!important;
overflow:hidden!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:after{
content:""!important;
position:absolute!important;
z-index:2!important;
top:0!important;
right:0!important;
width:40px!important;
height:58px!important;
background:linear-gradient(90deg,transparent,#2d2824 88%)!important;
pointer-events:none!important;
}
#salonDesktopServices .mct-tabs{
width:100%!important;
max-width:none!important;
margin:0!important;
padding:4px 0 10px!important;
overflow-x:auto!important;
overflow-y:hidden!important;
clip-path:none!important;
mask-image:none!important;
-webkit-mask-image:none!important;
scrollbar-width:none!important;
}
#salonDesktopServices .mct-tabs-track{
display:flex!important;
width:max-content!important;
min-width:100%!important;
flex-wrap:nowrap!important;
gap:10px!important;
padding-right:36px!important;
}
#salonDesktopServices .mct-tab{
flex:0 0 auto!important;
min-height:48px!important;
padding:0 21px!important;
border:1px solid rgba(255,255,255,.16)!important;
border-radius:999px!important;
background:rgba(255,255,255,.035)!important;
color:#ded5cf!important;
font-size:13px!important;
transition:transform .2s ease,background .2s ease,border-color .2s ease,color .2s ease,box-shadow .2s ease!important;
}
#salonDesktopServices .mct-tab:hover{
border-color:rgba(229,196,180,.34)!important;
background:rgba(255,255,255,.08)!important;
transform:translateY(-2px)!important;
}
#salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
#salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
border-color:#e7c8b8!important;
background:#d7b5a4!important;
color:#241d19!important;
box-shadow:0 10px 24px rgba(0,0,0,.18)!important;
transform:none!important;
}
#salonDesktopServices .dct-service-groups{
grid-column:2!important;
grid-row:3!important;
width:100%!important;
min-width:0!important;
min-height:680px!important;
margin:0!important;
padding:0!important;
}
#salonDesktopServices .dct-service-category-list{width:100%!important;max-width:none!important}
#salonDesktopServices .dct-service-card{
width:100%!important;
min-width:0!important;
border-color:rgba(255,255,255,.12)!important;
background:rgba(255,255,255,.035)!important;
transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease!important;
}
#salonDesktopServices .dct-service-card:hover{
border-color:rgba(225,191,174,.30)!important;
background:rgba(255,255,255,.075)!important;
box-shadow:0 18px 36px rgba(0,0,0,.14)!important;
transform:translateY(-2px)!important;
}
#salonDesktopServices .mct-more-services{
grid-column:2!important;
grid-row:4!important;
margin:26px auto 0!important;
}
#salonDesktopAbout.br-about-team{
padding:88px 32px 102px!important;
overflow:hidden!important;
background:#fff!important;
}
#salonDesktopAbout>.br-about-team-headings,
#salonDesktopAbout>.br-about-team-shell{
width:min(100%,1500px)!important;
margin-inline:auto!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
column-gap:72px!important;
}
#salonDesktopAbout>.br-about-team-headings{margin-bottom:27px!important}
#salonDesktopAbout>.br-about-team-headings h2{
margin:0!important;
color:#201b18!important;
font:500 clamp(54px,4.5vw,68px)/.94 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.045em!important;
text-align:center!important;
}
#salonDesktopAbout>.br-about-team-shell{
position:relative!important;
align-items:stretch!important;
}
#salonDesktopAbout>.br-about-team-shell:after{
content:""!important;
position:absolute!important;
top:16px!important;
bottom:16px!important;
left:50%!important;
width:1px!important;
background:linear-gradient(180deg,transparent,rgba(78,58,49,.16) 12%,rgba(78,58,49,.16) 88%,transparent)!important;
transform:translateX(-.5px)!important;
pointer-events:none!important;
}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{
box-sizing:border-box!important;
width:100%!important;
min-width:0!important;
min-height:760px!important;
height:760px!important;
border-radius:30px!important;
}
#salonDesktopAbout .br-about-column{
padding:20px!important;
border:1px solid rgba(72,55,47,.10)!important;
background:#fff!important;
box-shadow:0 24px 60px rgba(69,50,42,.09)!important;
}
#salonDesktopAbout .mct-about-card{
display:grid!important;
width:100%!important;
height:100%!important;
min-height:0!important;
grid-template-columns:minmax(0,1fr)!important;
grid-template-rows:385px minmax(0,1fr)!important;
gap:0!important;
margin:0!important;
padding:0!important;
overflow:hidden!important;
border:0!important;
border-radius:22px!important;
background:#fff!important;
box-shadow:none!important;
}
#salonDesktopAbout .mct-about-portrait-wrap,
#salonDesktopAbout .mct-about-portrait,
#salonDesktopAbout .mct-about-portrait img{
display:block!important;
width:100%!important;
height:385px!important;
min-height:385px!important;
margin:0!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{overflow:hidden!important;border-radius:20px!important}
#salonDesktopAbout .mct-about-portrait img{
object-fit:cover!important;
transition:transform .8s cubic-bezier(.2,.7,.2,1)!important;
}
#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{transform:scale(1.025)!important}
#salonDesktopAbout .mct-about-copy{
display:flex!important;
min-width:0!important;
flex-direction:column!important;
justify-content:flex-start!important;
padding:24px 8px 2px!important;
overflow:visible!important;
}
#salonDesktopAbout .mct-about-lead{
margin:0!important;
color:#241e1a!important;
font:500 31px/1.02 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.025em!important;
}
#salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){
margin:11px 0 0!important;
color:#685f5a!important;
font:400 13px/1.5 "Manrope",Arial,sans-serif!important;
}
#salonDesktopAbout .dct-about-amenities{margin-top:20px!important;padding-top:0!important}
#salonDesktopAbout .dct-about-amenities-grid{
display:grid!important;
grid-template-columns:repeat(3,minmax(0,1fr))!important;
gap:9px!important;
}
#salonDesktopAbout .dct-about-amenities-grid article{
min-width:0!important;
min-height:88px!important;
padding:13px!important;
border:1px solid rgba(81,60,51,.09)!important;
border-radius:14px!important;
background:#f3f4f5!important;
}
#salonDesktopAbout .dct-about-amenities-grid article+article{border-left:1px solid rgba(81,60,51,.09)!important}
#salonDesktopAbout .dct-about-amenities-grid strong{font-size:11.5px!important;line-height:1.2!important}
#salonDesktopAbout .dct-about-amenities-grid span{margin-top:7px!important;font-size:8.8px!important;line-height:1.35!important}
#salonDesktopTeam.br-team-panel{
display:flex!important;
flex-direction:column!important;
padding:34px 34px 30px!important;
overflow:hidden!important;
border:1px solid rgba(255,255,255,.08)!important;
background:
radial-gradient(460px 340px at 100% 0%,rgba(185,142,121,.14),transparent 72%),
#302925!important;
color:#f7f3f0!important;
box-shadow:0 24px 60px rgba(38,27,22,.16)!important;
}
#salonDesktopTeam .std-team-kicker{
display:block!important;
margin:0!important;
color:#d1c1b9!important;
font:600 11px/1 "Manrope",Arial,sans-serif!important;
letter-spacing:.24em!important;
text-align:center!important;
text-transform:uppercase!important;
}
#salonDesktopTeam .std-team-subtitle{
margin:12px auto 24px!important;
max-width:460px!important;
color:#ad9f98!important;
font-size:11px!important;
line-height:1.5!important;
text-align:center!important;
}
#salonDesktopTeam .std-team-track{
display:grid!important;
width:100%!important;
min-height:0!important;
flex:1 1 auto!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
grid-template-rows:repeat(2,minmax(0,1fr))!important;
gap:18px 28px!important;
align-items:center!important;
margin:0!important;
padding:0!important;
overflow:visible!important;
}
#salonDesktopTeam .std-master{
display:flex!important;
width:100%!important;
min-width:0!important;
min-height:0!important;
height:100%!important;
flex-direction:column!important;
align-items:center!important;
justify-content:center!important;
padding:4px!important;
border:0!important;
border-radius:0!important;
background:transparent!important;
box-shadow:none!important;
color:#f7f3f0!important;
transition:transform .22s ease!important;
}
#salonDesktopTeam .std-master:hover{background:transparent!important;box-shadow:none!important;transform:translateY(-4px)!important}
#salonDesktopTeam .std-master-avatar{
width:154px!important;
height:154px!important;
max-width:100%!important;
border:1px solid rgba(255,255,255,.10)!important;
background:radial-gradient(circle at 38% 28%,rgba(255,255,255,.12),transparent 43%),linear-gradient(145deg,#826d63,#5b4a43)!important;
color:#eaded7!important;
box-shadow:0 14px 34px rgba(0,0,0,.16)!important;
}
#salonDesktopTeam .std-master-avatar svg{width:58px!important;height:58px!important}
#salonDesktopTeam .std-master-name{
margin-top:13px!important;
color:#f7f3f0!important;
font-size:25px!important;
line-height:1!important;
}
#salonDesktopTeam .std-master-role{
margin-top:7px!important;
color:#baada6!important;
font-size:10.5px!important;
}
#salonDesktopTeam .std-master-cats{margin-top:5px!important}
#salonDesktopTeam .std-master-cat{padding:0!important;border:0!important;background:transparent!important;color:#d3c5be!important;font-size:9px!important}
#salonDesktopContacts .std-contact-action-btn{
border:1px solid rgba(244,237,232,.26)!important;
background:#f4ede8!important;
color:#2b2522!important;
box-shadow:0 12px 28px rgba(0,0,0,.14)!important;
}
#salonDesktopContacts .std-contact-action-btn:hover{
border-color:#fff!important;
background:#fff!important;
color:#211d1a!important;
transform:translateY(-3px)!important;
}
#salonDesktopContacts .std-contact-bottom{
width:100vw!important;
min-height:118px!important;
margin:42px calc(50% - 50vw) 0!important;
padding:18px 24px!important;
overflow:visible!important;
background:#11100f!important;
}
#salonDesktopContacts .std-contact-brand{
display:flex!important;
width:auto!important;
min-height:82px!important;
margin:0 auto!important;
padding:10px 24px!important;
flex-direction:column!important;
align-items:center!important;
justify-content:center!important;
gap:7px!important;
border:0!important;
background:transparent!important;
box-shadow:none!important;
}
#salonDesktopContacts .br-tanem-mark{
display:grid!important;
width:31px!important;
height:31px!important;
flex:0 0 31px!important;
place-items:center!important;
border:1px solid rgba(255,255,255,.38)!important;
border-radius:9px!important;
color:#fff!important;
font:600 20px/1 "Cormorant Garamond",Georgia,serif!important;
}
#salonDesktopContacts .br-tanem-copy{
color:rgba(255,255,255,.72)!important;
font:500 10px/1.2 "Manrope",Arial,sans-serif!important;
letter-spacing:.04em!important;
text-align:center!important;
}
#salonDesktopContacts .br-tanem-copy strong{color:#fff!important;font-size:11.5px!important;font-weight:600!important}
}
@media(min-width:768px) and (max-width:1199px){
#salonDesktopServices.mct-prices>.mct-shell{
width:calc(100% - 56px)!important;
margin:0 28px!important;
grid-template-columns:minmax(310px,39%) minmax(0,1fr)!important;
column-gap:44px!important;
}
#salonDesktopServices .mct-price-head:after{right:-22px!important}
#salonDesktopServices .dct-service-sticky-card{padding-inline:20px!important}
#salonDesktopServices .dct-service-sticky-card>strong,
#salonDesktopServices .dct-services-main-title{font-size:40px!important}
#salonDesktopServices .dct-service-sticky-info{grid-template-columns:1fr!important}
#salonDesktopServices .dct-service-sticky-steps li{padding-inline:7px!important}
#salonDesktopServices .dct-service-sticky-steps li span{font-size:9px!important}
#salonDesktopAbout>.br-about-team-headings,
#salonDesktopAbout>.br-about-team-shell{column-gap:42px!important}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{height:720px!important;min-height:720px!important}
#salonDesktopAbout .mct-about-card{grid-template-rows:340px minmax(0,1fr)!important}
#salonDesktopAbout .mct-about-portrait-wrap,
#salonDesktopAbout .mct-about-portrait,
#salonDesktopAbout .mct-about-portrait img{height:340px!important;min-height:340px!important}
#salonDesktopAbout .mct-about-lead{font-size:27px!important}
#salonDesktopAbout .dct-about-amenities-grid{grid-template-columns:1fr!important}
#salonDesktopAbout .dct-about-amenities-grid article{min-height:54px!important}
#salonDesktopTeam .std-master-avatar{width:126px!important;height:126px!important}
#salonDesktopTeam .std-master-name{font-size:22px!important}
}
@media(prefers-reduced-motion:reduce){
#salonDesktopAbout .mct-about-portrait img,
#salonDesktopTeam .std-master,
#salonDesktopServices .mct-tab,
#salonDesktopServices .dct-service-card{transition:none!important}
}
@media(min-width:1024px){
.std-btn-primary{
height:58px!important;border:0!important;border-radius:8px!important;
background:#715b53!important;color:#fff!important;
box-shadow:0 12px 28px rgba(74,53,45,.20)!important;
font:500 14px/1 "Manrope",Arial,sans-serif!important;
}
.std-btn-primary:hover{
background:#654f48!important;transform:translateY(-1px)!important;
box-shadow:0 16px 34px rgba(74,53,45,.27)!important;
}
.std-btn-primary:after,
#salonDesktopServices .dct-service-sticky-book:after{
content:""!important;position:absolute!important;top:-42%!important;left:-38%!important;
width:25%!important;height:190%!important;pointer-events:none!important;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.46),transparent)!important;
transform:skewX(-22deg)!important;
animation:brDesktopBookShine 4.2s ease-in-out infinite!important;
}
@keyframes brDesktopBookShine{
0%,66%{left:-38%;opacity:0}
70%{opacity:1}
100%{left:132%;opacity:0}
}
#salonDesktopPortfolio.std-portfolio{
padding-bottom:42px!important;
box-shadow:inset 0 1px 0 rgba(255,255,255,.72),inset 0 -20px 42px rgba(124,91,74,.035)!important;
}
#salonDesktopPortfolio .std-work{
box-shadow:0 18px 42px rgba(84,59,48,.13),0 4px 13px rgba(84,59,48,.08)!important;
}
#salonDesktopPortfolio .std-work:hover{
box-shadow:0 22px 48px rgba(84,59,48,.17),0 5px 15px rgba(84,59,48,.10)!important;
}
#salonDesktopPortfolio .std-portfolio-more{
box-shadow:0 14px 32px rgba(116,84,68,.12)!important;
}
#salonDesktopServices.mct-prices{
padding-top:58px!important;background:#242424!important;
}
#salonDesktopServices .dct-service-sticky-card{
padding:34px 28px 34px!important;
background:radial-gradient(330px 230px at 100% 0%,rgba(255,255,255,.78),transparent 72%),linear-gradient(145deg,#f7f2eb 0%,#eaded4 100%)!important;
border-color:rgba(66,55,49,.14)!important;
box-shadow:0 28px 70px rgba(9,7,6,.25),0 0 46px rgba(190,145,121,.11)!important;
}
#salonDesktopServices .dct-service-sticky-card>strong{margin:0!important}
#salonDesktopServices .dct-service-sticky-lead{
max-width:390px!important;margin:16px 0 0!important;color:#5f5752!important;
font:400 12.5px/1.58 "Manrope",Arial,sans-serif!important;
}
#salonDesktopServices .dct-service-sticky-row:not(.dct-service-availability){
border-color:rgba(109,101,95,.25)!important;background:rgba(238,235,232,.82)!important;
box-shadow:inset 3px 0 0 rgba(137,129,123,.54)!important;
}
#salonDesktopServices .dct-service-sticky-row:not(.dct-service-availability) .dct-service-sticky-icon{
border-color:rgba(109,101,95,.19)!important;background:rgba(255,255,255,.52)!important;color:#77706b!important;
}
#salonDesktopServices .dct-service-sticky-row:not(.dct-service-availability) .dct-service-sticky-copy b{color:#57514d!important}
#salonDesktopServices .dct-service-sticky-steps{margin-top:18px!important;padding:16px 0 15px!important}
#salonDesktopServices .dct-service-sticky-steps-title{
margin-bottom:13px!important;color:#6f655f!important;font-size:9.5px!important;letter-spacing:.16em!important;
}
#salonDesktopServices .dct-service-sticky-steps li span{
white-space:normal!important;overflow:visible!important;text-overflow:clip!important;
color:#342e2a!important;font-size:9.8px!important;line-height:1.35!important;
}
#salonDesktopServices .dct-service-sticky-book{
position:relative!important;isolation:isolate!important;width:100%!important;height:64px!important;
margin-top:20px!important;overflow:hidden!important;border:0!important;border-radius:8px!important;
background:#715b53!important;background-image:none!important;color:#fff!important;
box-shadow:0 13px 30px rgba(74,53,45,.22)!important;animation:none!important;
transition:transform .16s ease,background .16s ease,box-shadow .16s ease!important;
}
#salonDesktopServices .dct-service-sticky-book:hover{
background:#654f48!important;transform:translateY(-1px)!important;
box-shadow:0 17px 36px rgba(74,53,45,.30)!important;
}
#salonDesktopServices .dct-service-sticky-book>span{position:relative!important;z-index:2!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{position:relative!important;overflow:hidden!important}
#salonDesktopServices .mct-tabs-ribbon-wrap:before,
#salonDesktopServices .mct-tabs-ribbon-wrap:after{
content:""!important;position:absolute!important;z-index:3!important;top:0!important;height:58px!important;pointer-events:none!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
left:72px!important;width:48px!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.74) 34%,transparent 100%)!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:after{
right:0!important;width:54px!important;background:linear-gradient(90deg,transparent,#242424 90%)!important;
}
#salonDesktopServices .mct-tab-all{position:sticky!important;left:0!important;z-index:5!important}
#salonDesktopServices .mct-tab-all:not(.is-active){
background:#242424!important;box-shadow:10px 0 16px rgba(36,36,36,.72)!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
grid-template-columns:minmax(0,1fr) 112px 142px!important;
}
#salonDesktopServices .dct-service-card-meta>b,
#salonDesktopServices .dct-service-card-variant-meta>b{
display:inline-flex!important;width:142px!important;min-width:142px!important;min-height:42px!important;
align-items:center!important;justify-content:center!important;padding:0 16px!important;
border:1px solid rgba(255,255,255,.92)!important;border-radius:999px!important;
background:#f7f2eb!important;color:#171513!important;box-shadow:0 8px 18px rgba(0,0,0,.10)!important;
font:600 12.5px/1 "Manrope",Arial,sans-serif!important;text-align:center!important;white-space:nowrap!important;
transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important;
}
#salonDesktopServices .dct-service-card:hover .dct-service-card-meta>b,
#salonDesktopServices .dct-service-card:hover .dct-service-card-variant-meta>b{
transform:translateY(-1px)!important;background:#fff!important;box-shadow:0 10px 22px rgba(0,0,0,.14)!important;
}
#salonDesktopAbout.br-about-team{
padding-top:64px!important;
background:#fff!important;
}
#salonDesktopAbout .mct-about-card{
box-shadow:0 28px 64px rgba(87,61,49,.13),inset 0 1px 0 rgba(255,255,255,.82)!important;
}
#salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){font-size:15px!important;line-height:1.62!important}
#salonDesktopAbout .dct-about-amenities-grid article{box-shadow:0 10px 24px rgba(92,65,52,.06)!important}
#salonDesktopAbout .dct-about-amenities-grid strong{font-size:14.5px!important;line-height:1.25!important}
#salonDesktopAbout .dct-about-amenities-grid span{margin-top:8px!important;font-size:11.3px!important;line-height:1.42!important}
#salonDesktopTeam.br-team-panel{
background:radial-gradient(circle at 88% 8%,rgba(255,255,255,.055),transparent 26%),radial-gradient(circle at 8% 96%,rgba(139,113,103,.12),transparent 32%),#242424!important;
box-shadow:0 30px 68px rgba(42,30,25,.18),inset 0 1px 0 rgba(255,255,255,.035)!important;
}
#salonDesktopTeam .std-team-kicker{font-size:14px!important;letter-spacing:.22em!important}
#salonDesktopTeam .std-team-subtitle{font-size:13px!important}
#salonDesktopTeam .std-team-track{gap:30px!important}
#salonDesktopTeam .std-master-avatar{
width:235px!important;height:235px!important;max-width:100%!important;
background:linear-gradient(145deg,#4a4542,#34302e)!important;box-shadow:0 18px 38px rgba(0,0,0,.18)!important;
}
#salonDesktopTeam .std-master-avatar svg{width:78px!important;height:78px!important}
#salonDesktopTeam .std-master-name{margin-top:19px!important;font-size:28px!important}
#salonDesktopTeam .std-master-role{margin-top:7px!important;font-size:13px!important}
#salonDesktopTeam .std-master-cat{font-size:12px!important}
#salonDesktopContacts.std-contact{background:#2f2926!important}
#salonDesktopContacts .std-contact-bottom{background:#11100f!important}
#salonDesktopContacts .std-contact-brand{background:#11100f!important}
}
@media(prefers-reduced-motion:reduce){
.std-btn-primary:after,#salonDesktopServices .dct-service-sticky-book:after{animation:none!important}
}
@media(min-width:1024px){
.std-header-book{
background:#715b53!important;
color:#fff!important;
box-shadow:0 10px 24px rgba(74,53,45,.18)!important;
}
.std-header-book:hover{background:#654f48!important;box-shadow:0 12px 28px rgba(74,53,45,.24)!important}
#salonDesktopServices .dct-service-sticky-card{
top:58px!important;
}
#salonDesktopServices .dct-service-sticky-steps li span{
font-size:11.2px!important;
line-height:1.35!important;
font-weight:550!important;
}
#salonDesktopServices .mct-tab{
font-size:13.4px!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
left:0!important;
width:22px!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.72) 42%,transparent 100%)!important;
}
#salonDesktopServices .mct-tab-all{
position:relative!important;
left:auto!important;
z-index:5!important;
}
#salonDesktopServices .mct-tab-all:not(.is-active){
background:rgba(255,255,255,.035)!important;
box-shadow:none!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
grid-template-columns:minmax(0,1fr) 112px 158px!important;
}
#salonDesktopServices .dct-service-card-meta>b,
#salonDesktopServices .dct-service-card-variant-meta>b{
position:relative!important;
width:158px!important;
min-width:158px!important;
min-height:44px!important;
padding:0 18px 0 34px!important;
font-weight:700!important;
}
#salonDesktopServices .dct-service-card-meta>b:before,
#salonDesktopServices .dct-service-card-variant-meta>b:before{
content:""!important;
position:absolute!important;
left:15px!important;
top:50%!important;
width:7px!important;
height:7px!important;
border-radius:50%!important;
background:#171513!important;
transform:translateY(-50%)!important;
box-shadow:0 0 0 0 rgba(23,21,19,.32)!important;
animation:brServiceRadar 1.65s ease-out infinite!important;
}
@keyframes brServiceRadar{
0%{box-shadow:0 0 0 0 rgba(23,21,19,.34)}
72%{box-shadow:0 0 0 7px rgba(23,21,19,0)}
100%{box-shadow:0 0 0 0 rgba(23,21,19,0)}
}
#salonDesktopServices.mct-prices>.mct-shell{
grid-template-rows:48px auto auto auto!important;
}
#salonDesktopServices .dct-service-groups{
min-height:calc(680px - 5cm)!important;
}
#salonDesktopServices .dct-service-category-list{
min-height:0!important;
}
#salonDesktopAbout .mct-about-card{
border:0!important;
background:#fff!important;
box-shadow:none!important;
}
#salonDesktopAbout .dct-about-amenities-grid article{
border:0!important;
border-radius:0!important;
background:#f3f4f5!important;
box-shadow:none!important;
padding:10px 12px!important;
}
#salonDesktopAbout .dct-about-amenities-grid article+article{border-left:0!important}
#salonDesktopAbout .dct-about-amenities-grid strong{
font-size:16px!important;
line-height:1.24!important;
}
#salonDesktopAbout .dct-about-amenities-grid span{
font-size:12.8px!important;
line-height:1.45!important;
}
#salonDesktopAbout .mct-about-portrait img{
object-fit:contain!important;
object-position:center 42%!important;
transform:scale(.88)!important;
}
#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{
transform:scale(.90)!important;
}
#salonDesktopTeam .std-team-kicker{
font-size:15.5px!important;
}
#salonDesktopTeam .std-team-subtitle{
font-size:15px!important;
line-height:1.55!important;
}
#salonDesktopTeam .std-master-avatar{
width:216px!important;
height:216px!important;
}
#salonDesktopTeam .std-master-name{
font-size:30px!important;
}
#salonDesktopTeam .std-master-role{
font-size:14px!important;
}
#salonDesktopTeam .std-master-cat{
font-size:13px!important;
}
#salonDesktopContacts.std-contact,
#salonDesktopContacts .std-contact-bottom,
#salonDesktopContacts .std-contact-brand{
background:#242424!important;
}
}
@media(prefers-reduced-motion:reduce){
#salonDesktopServices .dct-service-card-meta>b:before,
#salonDesktopServices .dct-service-card-variant-meta>b:before{animation:none!important}
}
@media(min-width:1024px){
.std-header-book{
border:0!important;
border-radius:8px!important;
background:#715b53!important;
color:#fff!important;
font-weight:500!important;
}
.std-header-book:hover{background:#654f48!important}
#salonDesktopServices.mct-prices{position:relative!important}
#salonDesktopServices .dct-service-sticky-card{
top:58px!important;
}
#salonDesktopServices .mct-tabs{padding-left:28px!important}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
left:0!important;
width:28px!important;
z-index:8!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.88) 36%,rgba(36,36,36,0) 100%)!important;
}
#salonDesktopServices .mct-tab-all{z-index:2!important}
#salonDesktopServices .mct-tab{font-size:13.4px!important}
#salonDesktopServices .dct-service-sticky-steps li span{
font-size:11.5px!important;
line-height:1.42!important;
}
#salonDesktopAbout .br-about-column{
padding:0!important;
border:0!important;
background:#fff!important;
box-shadow:none!important;
}
#salonDesktopAbout .mct-about-card{
border:0!important;
background:#fff!important;
box-shadow:none!important;
border-radius:0!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
border-radius:20px!important;
background:#f3f4f5!important;
}
#salonDesktopAbout .mct-about-portrait img{
object-fit:contain!important;
object-position:center center!important;
transform:scale(.84) translateY(-10px)!important;
}
#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{
transform:scale(.84) translateY(-10px)!important;
}
#salonDesktopAbout .dct-about-amenities{
margin-bottom:0!important;
padding-bottom:0!important;
}
#salonDesktopAbout .dct-about-amenities-grid strong{font-size:17px!important}
#salonDesktopAbout .dct-about-amenities-grid span{font-size:13.2px!important}
#salonDesktopTeam .std-team-kicker{font-size:16px!important}
#salonDesktopTeam .std-team-subtitle{font-size:15.5px!important}
#salonDesktopTeam .std-master-avatar{width:216px!important;height:216px!important}
#salonDesktopTeam .std-master-name{font-size:30px!important}
#salonDesktopTeam .std-master-role{font-size:14px!important}
#salonDesktopContacts.std-contact{background:#242424!important}
}
@media(min-width:1024px){
.std-header-book{
background:#715b53!important;border-color:#715b53!important;color:#fff!important;
border-radius:8px!important;box-shadow:0 10px 24px rgba(74,53,45,.18)!important;
}
#salonDesktopServices .dct-service-sticky-card{top:58px!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{padding-left:0!important}
#salonDesktopServices .mct-tabs{
padding-left:34px!important;
scroll-padding-left:34px!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
left:0!important;width:34px!important;z-index:20!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.92) 34%,rgba(36,36,36,.38) 70%,transparent 100%)!important;
}
#salonDesktopServices .mct-tab-all{position:relative!important;left:auto!important;z-index:1!important}
#salonDesktopServices.mct-prices>.mct-shell{grid-template-rows:48px auto auto auto!important}
#salonDesktopServices .dct-service-groups{min-height:491px!important}
#salonDesktopServices .dct-service-category,
#salonDesktopServices .dct-service-category-list{min-height:0!important;height:auto!important}
#salonDesktopAbout .br-about-column{
padding:0!important;border:0!important;background:#fff!important;box-shadow:none!important;
}
#salonDesktopAbout .mct-about-card{
border:0!important;border-radius:0!important;background:#fff!important;box-shadow:none!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
border:0!important;box-shadow:none!important;background:#f3f4f5!important;
}
#salonDesktopAbout .mct-about-portrait img{
object-fit:contain!important;object-position:center center!important;
transform:translateY(-12px) scale(.82)!important;
}
#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{
transform:translateY(-12px) scale(.82)!important;
}
#salonDesktopAbout .dct-about-amenities-grid article{
border:0!important;background:#f3f4f5!important;box-shadow:none!important;
}
#salonDesktopAbout .dct-about-amenities-grid strong{font-size:17px!important}
#salonDesktopAbout .dct-about-amenities-grid span{font-size:13.2px!important}
#salonDesktopTeam .std-team-kicker{font-size:16px!important}
#salonDesktopTeam .std-team-subtitle{font-size:15.5px!important}
#salonDesktopTeam .std-master-avatar{width:216px!important;height:216px!important}
#salonDesktopTeam .std-master-name{font-size:30px!important}
#salonDesktopTeam .std-master-role{font-size:14px!important}
#salonDesktopContacts.std-contact,
#salonDesktopContacts .std-contact-bottom,
#salonDesktopContacts .std-contact-brand{background:#242424!important}
}
@media(min-width:1024px){
#salonDesktopServices .dct-service-sticky-copy b{font-size:14px!important}
#salonDesktopServices .dct-service-sticky-copy small{font-size:11px!important}
#salonDesktopServices .dct-service-sticky-steps-title{font-size:10.5px!important}
#salonDesktopServices .dct-service-sticky-steps li span{font-size:12px!important;line-height:1.42!important}
#salonDesktopServices .dct-service-sticky-book>span:first-child{font-size:15px!important;font-weight:600!important}
#salonDesktopServices .dct-service-sticky-work>span:first-child{font-size:13px!important;font-weight:600!important}
#salonDesktopServices .mct-tabs{padding-left:0!important;scroll-padding-left:0!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{overflow:visible!important}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
left:-.5cm!important;
width:.5cm!important;
z-index:12!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.82) 38%,transparent 100%)!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:after{right:0!important}
#salonDesktopServices .mct-tab-all{position:relative!important;z-index:3!important}
#salonDesktopAbout.br-about-team{
position:relative!important;
padding-top:64px!important;
background:radial-gradient(circle at 88% 18%,rgba(193,158,145,.13),transparent 31%),linear-gradient(180deg,#f8f3ef 0%,#f4ebe5 100%)!important;
}
#salonDesktopAbout.br-about-team:before{
content:""!important;position:absolute!important;inset:0!important;pointer-events:none!important;
background:
linear-gradient(120deg,transparent 0 42%,rgba(255,255,255,.28) 42.2%,transparent 42.5%),
radial-gradient(circle at 76% 20%,rgba(255,255,255,.44),transparent 19%)!important;
opacity:.72!important;
}
#salonDesktopAbout>.br-about-team-headings,
#salonDesktopAbout>.br-about-team-shell{position:relative!important;z-index:1!important}
#salonDesktopAbout .br-about-column{
display:flex!important;
flex-direction:column!important;
padding:20px!important;
border:1px solid rgba(72,55,47,.10)!important;
border-radius:28px!important;
background:#fff!important;
box-shadow:0 24px 58px rgba(69,50,42,.11)!important;
}
#salonDesktopAbout .mct-about-card{
display:grid!important;
width:100%!important;height:100%!important;min-height:0!important;
grid-template-rows:385px minmax(0,1fr)!important;
margin:0!important;padding:0!important;overflow:hidden!important;
border:0!important;border-radius:22px!important;background:#fff!important;box-shadow:none!important;
}
#salonDesktopAbout .mct-about-portrait-wrap{
height:385px!important;min-height:385px!important;
overflow:hidden!important;border:0!important;border-radius:20px!important;
background:#f3f4f5!important;box-shadow:none!important;
}
#salonDesktopAbout .mct-about-portrait{width:100%!important;height:100%!important}
#salonDesktopAbout .mct-about-portrait img{
width:100%!important;height:100%!important;object-fit:contain!important;object-position:center center!important;
transform:translateY(-8px) scale(.88)!important;
}
#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{transform:translateY(-8px) scale(.88)!important}
#salonDesktopAbout .mct-about-copy{padding:24px 4px 2px!important}
#salonDesktopAbout .mct-about-lead{font-size:clamp(30px,2.3vw,38px)!important;line-height:1.02!important}
#salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){font-size:15.5px!important;line-height:1.62!important}
#salonDesktopAbout .dct-about-amenities{margin-top:24px!important;padding-top:20px!important}
#salonDesktopAbout .dct-about-amenities-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:9px!important}
#salonDesktopAbout .dct-about-amenities-grid article{
min-height:94px!important;padding:14px!important;
border:1px solid rgba(81,60,51,.09)!important;border-radius:14px!important;
background:#f3f4f5!important;box-shadow:0 9px 22px rgba(80,56,45,.055)!important;
}
#salonDesktopAbout .dct-about-amenities-grid article+article{border-left:1px solid rgba(81,60,51,.09)!important}
#salonDesktopAbout .dct-about-amenities-grid strong{font-size:16.5px!important;line-height:1.2!important}
#salonDesktopAbout .dct-about-amenities-grid span{margin-top:8px!important;font-size:12.5px!important;line-height:1.42!important}
#salonDesktopTeam.br-team-panel{
border-radius:28px!important;
box-shadow:0 24px 58px rgba(54,41,35,.15)!important;
}
#salonDesktopContacts .std-contact-bottom,
#salonDesktopContacts .std-contact-brand{background:#11100f!important}
}
@media(min-width:1024px){
#salonDesktopServices .dct-service-sticky-lead{
font-size:13.5px!important;line-height:1.58!important;
}
#salonDesktopServices .dct-service-sticky-steps li span{
font-size:13px!important;line-height:1.42!important;font-weight:550!important;
}
#salonDesktopServices .dct-service-card-meta>b,
#salonDesktopServices .dct-service-card-variant-meta>b{
justify-content:center!important;
padding:0 15px 0 28px!important;
}
#salonDesktopServices .dct-service-card-meta>b:before,
#salonDesktopServices .dct-service-card-variant-meta>b:before{
left:13px!important;width:7px!important;height:7px!important;
animation:brServiceRadarFinal 1.25s ease-out infinite!important;
}
@keyframes brServiceRadarFinal{
0%{opacity:1;box-shadow:0 0 0 0 rgba(23,21,19,.38)}
55%{opacity:.48}
78%{opacity:1;box-shadow:0 0 0 6px rgba(23,21,19,0)}
100%{opacity:1;box-shadow:0 0 0 0 rgba(23,21,19,0)}
}
#salonDesktopServices .mct-tabs-ribbon-wrap{overflow:visible!important}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
content:""!important;display:block!important;
left:-28px!important;width:28px!important;top:0!important;height:58px!important;
z-index:20!important;pointer-events:none!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.96) 22%,rgba(36,36,36,.62) 58%,transparent 100%)!important;
}
#salonDesktopServices .dct-service-sticky-route{
text-decoration:none!important;cursor:pointer!important;
}
#salonDesktopServices .dct-service-sticky-route:hover{
transform:translateY(-1px)!important;
}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{
box-shadow:
0 30px 70px rgba(61,43,35,.16),
0 7px 20px rgba(61,43,35,.10),
inset 0 1px 0 rgba(255,255,255,.72)!important;
}
#salonDesktopAbout .mct-about-card{overflow:hidden!important}
#salonDesktopAbout .mct-about-portrait-wrap{
height:385px!important;min-height:385px!important;overflow:hidden!important;
}
#salonDesktopAbout .mct-about-portrait img{
width:100%!important;height:100%!important;
object-fit:cover!important;object-position:center 44%!important;
transform:none!important;
}
#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{transform:none!important}
#salonDesktopAbout .mct-about-copy{
display:flex!important;flex-direction:column!important;padding:24px 4px 0!important;
}
#salonDesktopAbout .dct-about-amenities{
margin-top:24px!important;margin-bottom:0!important;padding-top:20px!important;padding-bottom:0!important;
}
#salonDesktopAbout .dct-about-amenities-grid{
margin-bottom:0!important;padding-bottom:0!important;
}
#salonDesktopAbout .dct-about-amenities-grid article{
min-height:102px!important;
box-shadow:0 12px 28px rgba(71,49,40,.085),inset 0 1px 0 rgba(255,255,255,.78)!important;
}
#salonDesktopContacts .br-tanem-copy{
font-size:11.5px!important;line-height:1.25!important;
}
#salonDesktopContacts .br-tanem-copy strong{font-size:16px!important}
}
@media(min-width:1024px){
#salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
#salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
background:#8b7167!important;
border-color:#8b7167!important;
color:#fff!important;
box-shadow:0 9px 22px rgba(0,0,0,.16)!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap{
margin-left:0!important;
width:100%!important;
overflow:visible!important;
}
#salonDesktopServices .mct-tabs{
padding-left:0!important;
scroll-padding-left:0!important;
}
#salonDesktopServices .mct-tabs-ribbon-wrap:before{
left:-28px!important;
width:28px!important;
height:58px!important;
z-index:30!important;
background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.96) 24%,rgba(36,36,36,.68) 58%,transparent 100%)!important;
}
#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
grid-template-columns:minmax(0,1fr) 112px 136px!important;
}
#salonDesktopServices .dct-service-card-meta>b,
#salonDesktopServices .dct-service-card-variant-meta>b{
width:136px!important;min-width:136px!important;
display:inline-flex!important;align-items:center!important;justify-content:center!important;
gap:7px!important;padding:0 15px!important;
}
#salonDesktopServices .dct-service-card-meta>b:before,
#salonDesktopServices .dct-service-card-variant-meta>b:before{
position:relative!important;left:auto!important;top:auto!important;transform:none!important;
flex:0 0 auto!important;margin:0!important;
}
#salonDesktopServices .dct-service-sticky-book{overflow:hidden!important}
#salonDesktopServices .dct-service-sticky-book:after{
content:""!important;position:absolute!important;z-index:1!important;top:-30%!important;bottom:-30%!important;
width:34%!important;left:-46%!important;pointer-events:none!important;
background:linear-gradient(105deg,transparent 0%,rgba(255,255,255,.08) 28%,rgba(255,255,255,.48) 50%,rgba(255,255,255,.08) 72%,transparent 100%)!important;
transform:skewX(-18deg)!important;
animation:brStickySheen 4.6s ease-in-out infinite!important;
}
@keyframes brStickySheen{
0%,62%{left:-46%;opacity:0}
68%{opacity:1}
84%{left:118%;opacity:1}
85%,100%{left:118%;opacity:0}
}
#salonDesktopAbout .br-about-column{
background:#fff!important;
}
#salonDesktopAbout .br-about-column,
#salonDesktopTeam.br-team-panel{
min-height:820px!important;height:820px!important;
}
#salonDesktopAbout .mct-about-card{
grid-template-rows:390px minmax(0,1fr)!important;
}
#salonDesktopAbout .mct-about-portrait-wrap,
#salonDesktopAbout .mct-about-portrait{height:390px!important;min-height:390px!important}
#salonDesktopAbout .mct-about-portrait{position:relative!important}
#salonDesktopAbout .mct-about-copy{
padding:28px 18px 18px!important;
}
#salonDesktopAbout .mct-about-lead{margin:0!important}
#salonDesktopAbout .dct-about-brand{
display:block!important;
color:#1d1a18!important;
font:400 clamp(35px,2.75vw,43px)/1.04 "Cormorant Garamond",Georgia,serif!important;
letter-spacing:-.032em!important;
}
#salonDesktopAbout .dct-about-kind{
display:block!important;
margin-top:8px!important;
color:#58504a!important;
font:500 14px/1.3 "Manrope",Arial,sans-serif!important;
letter-spacing:0!important;
}
#salonDesktopAbout .dct-about-copy{
margin:18px 0 0!important;
color:#58504a!important;
font:400 14px/1.62 "Manrope",Arial,sans-serif!important;
}
#salonDesktopAbout .dct-about-rating{
position:absolute!important;left:14px!important;bottom:14px!important;height:36px!important;
padding:0 12px!important;border:1px solid rgba(255,255,255,.28)!important;border-radius:999px!important;
background:rgba(18,17,16,.72)!important;backdrop-filter:blur(10px)!important;
display:flex!important;align-items:center!important;gap:7px!important;color:#fff!important;
box-shadow:0 5px 14px rgba(0,0,0,.13)!important;
}
#salonDesktopAbout .dct-about-rating-star{font-size:12px!important;color:#d6ad6b!important}
#salonDesktopAbout .dct-about-rating strong{font:600 14px/1 "Manrope",Arial,sans-serif!important;color:#fff!important}
#salonDesktopAbout .dct-about-rating span:last-child{font:500 8px/1 "Manrope",Arial,sans-serif!important;letter-spacing:.035em!important;color:rgba(255,255,255,.72)!important}
#salonDesktopAbout .dct-about-amenities{margin-top:auto!important;padding-top:18px!important}
#salonDesktopAbout .dct-about-amenities-grid article{min-height:96px!important}
body[data-br-lang="hy"] #salonDesktopServices .dct-service-sticky-card>strong{
font-size:clamp(31px,2.25vw,38px)!important;
letter-spacing:-.035em!important;
}
}
@media(min-width:1024px){
#salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
#salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
background:#fff!important;
border-color:#fff!important;
color:#171513!important;
box-shadow:0 9px 22px rgba(0,0,0,.16)!important;
}
}
@media(min-width:1024px){
#salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
#salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
background:#eee7df!important;border-color:#eee7df!important;color:#2b2420!important;
box-shadow:0 8px 20px rgba(0,0,0,.13)!important;
}
#salonDesktopServices .dct-service-sticky-book{position:relative!important;isolation:isolate!important;overflow:hidden!important}
#salonDesktopServices .dct-service-sticky-book>span{position:relative!important;z-index:2!important}
#salonDesktopServices .dct-service-sticky-book:after{
content:""!important;display:block!important;position:absolute!important;z-index:1!important;
top:-45%!important;bottom:-45%!important;left:-52%!important;width:38%!important;
background:linear-gradient(105deg,transparent 0%,rgba(255,255,255,.08) 24%,rgba(255,255,255,.72) 50%,rgba(255,255,255,.10) 76%,transparent 100%)!important;
transform:skewX(-20deg)!important;animation:brStickyBookGlint 3.8s cubic-bezier(.2,.7,.2,1) infinite!important;pointer-events:none!important;
}
@keyframes brStickyBookGlint{0%,58%{left:-52%;opacity:0}61%{opacity:1}78%{left:120%;opacity:1}80%,100%{left:120%;opacity:0}}
#salonDesktopAbout .dct-about-rating{transform:scale(1.07)!important;transform-origin:left bottom!important}
#salonDesktopAbout .mct-about-copy{padding:26px 18px 18px!important}
#salonDesktopAbout .dct-about-copy{margin-top:15px!important;line-height:1.58!important}
#salonDesktopAbout .dct-about-amenities{margin-top:18px!important;padding-top:15px!important}
#salonDesktopAbout .dct-about-amenities-grid{gap:10px!important}
#salonDesktopAbout .dct-about-amenities-grid article{
min-height:102px!important;padding:15px!important;
background:#f3f4f5!important;
border-color:rgba(86,64,53,.10)!important;
box-shadow:0 10px 24px rgba(70,50,41,.075),inset 0 1px 0 rgba(255,255,255,.42)!important;
}
#salonDesktopAbout .dct-about-amenities-grid strong{font-size:16.5px!important}
#salonDesktopAbout .dct-about-amenities-grid span{font-size:12.7px!important;line-height:1.45!important}
#salonDesktopContacts .std-contact-status,
#salonDesktopContacts .std-contact-status span{font-size:14px!important;font-weight:600!important}
}
@media(min-width:1024px){
#salonDesktopTop #stdBookBtn,
#salonDesktopServices #stdStickyServiceBook{
position:relative!important;overflow:hidden!important;isolation:isolate!important;
}
#salonDesktopTop #stdBookBtn>*,
#salonDesktopServices #stdStickyServiceBook>*{position:relative!important;z-index:2!important}
#salonDesktopTop #stdBookBtn:after,
#salonDesktopServices #stdStickyServiceBook:after{
content:""!important;display:block!important;position:absolute!important;z-index:1!important;
top:-55%!important;bottom:-55%!important;left:-55%!important;width:42%!important;
background:linear-gradient(105deg,transparent 0%,rgba(255,255,255,.08) 22%,rgba(255,255,255,.78) 50%,rgba(255,255,255,.10) 78%,transparent 100%)!important;
transform:skewX(-19deg)!important;pointer-events:none!important;
animation:brFinalBookingSheen 4.2s cubic-bezier(.22,.72,.18,1) infinite!important;
}
@keyframes brFinalBookingSheen{
0%,56%{left:-55%;opacity:0}
59%{opacity:1}
77%{left:122%;opacity:1}
79%,100%{left:122%;opacity:0}
}
#salonDesktopPortfolio.std-portfolio{border-top:0!important;box-shadow:none!important}
#salonDesktopPortfolio .std-portfolio-head,
#salonDesktopPortfolio .std-portfolio-grid,
#salonDesktopPortfolio .std-portfolio-more,
#salonDesktopServices .dct-services-main-title,
#salonDesktopServices .mct-tabs-ribbon-wrap,
#salonDesktopServices .dct-service-groups,
#salonDesktopServices .mct-more-services,
#salonDesktopReviews .std-reviews-head,
#salonDesktopReviews .std-reviews-viewport,
#salonDesktopReviews .std-reviews-actions,
#salonDesktopContacts .std-contact-inner{
opacity:0!important;transform:translateY(24px)!important;
transition:opacity .72s ease,transform .82s cubic-bezier(.16,1,.3,1)!important;
}
#salonDesktopServices .mct-price-head{
opacity:0!important;transform:translateX(-52px)!important;
transition:opacity .72s ease,transform .86s cubic-bezier(.16,1,.3,1)!important;
}
#salonDesktopAbout .br-about-column{
opacity:0!important;transform:translateX(-52px)!important;
transition:opacity .75s ease,transform .9s cubic-bezier(.16,1,.3,1)!important;
}
#salonDesktopTeam.br-team-panel{
opacity:0!important;transform:translateX(52px)!important;
transition:opacity .75s ease,transform .9s cubic-bezier(.16,1,.3,1)!important;
}
#salonDesktopPortfolio.in-view .std-portfolio-head,
#salonDesktopPortfolio.in-view .std-portfolio-grid,
#salonDesktopPortfolio.in-view .std-portfolio-more,
#salonDesktopServices.in-view .mct-price-head,
#salonDesktopServices.in-view .dct-services-main-title,
#salonDesktopServices.in-view .mct-tabs-ribbon-wrap,
#salonDesktopServices.in-view .dct-service-groups,
#salonDesktopServices.in-view .mct-more-services,
#salonDesktopAbout.in-view .br-about-column,
#salonDesktopTeam.in-view,
#salonDesktopReviews.in-view .std-reviews-head,
#salonDesktopReviews.in-view .std-reviews-viewport,
#salonDesktopReviews.in-view .std-reviews-actions,
#salonDesktopContacts.in-view .std-contact-inner{
opacity:1!important;transform:none!important;
}
#salonDesktopPortfolio .std-portfolio-grid{transition-delay:.10s!important}
#salonDesktopPortfolio .std-portfolio-more{transition-delay:.18s!important}
#salonDesktopServices .mct-tabs-ribbon-wrap{transition-delay:.08s!important}
#salonDesktopServices .dct-service-groups{transition-delay:.14s!important}
#salonDesktopServices .mct-more-services{transition-delay:.20s!important}
#salonDesktopReviews .std-reviews-viewport{transition-delay:.10s!important}
#salonDesktopReviews .std-reviews-actions{transition-delay:.17s!important}
}
@media(min-width:1024px){
#salonDesktopAbout .dct-about-rating{
transform:scale(1.1556)!important;
transform-origin:left bottom!important;
}
}
@media(min-width:1024px){
#salonDesktopTop #stdBookBtn,
#salonDesktopServices #stdStickyServiceBook{
position:relative!important;
overflow:hidden!important;
isolation:isolate!important;
}
#salonDesktopTop #stdBookBtn:after,
#salonDesktopServices #stdStickyServiceBook:after{
content:""!important;
display:block!important;
position:absolute!important;
z-index:1!important;
top:-30%!important;
bottom:-30%!important;
left:-30%!important;
width:34%!important;
height:auto!important;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)!important;
transform:skewX(-20deg)!important;
animation:brMobileExactShine 3.2s ease-in-out infinite!important;
opacity:1!important;
pointer-events:none!important;
}
#salonDesktopTop #stdBookBtn>*,
#salonDesktopServices #stdStickyServiceBook>*{
position:relative!important;
z-index:2!important;
}
@keyframes brMobileExactShine{
0%,65%{left:-40%}
100%{left:130%}
}
}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopTeam{display:none!important}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopAbout>.br-about-team-headings{
display:block!important;width:min(calc(100% - 64px),920px)!important;max-width:920px!important;margin-left:auto!important;margin-right:auto!important
}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopAbout>.br-about-team-headings:after{display:none!important}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopAbout>.br-about-team-headings h2:last-child{display:none!important}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopAbout>.br-about-team-shell{
display:flex!important;width:min(calc(100% - 64px),920px)!important;max-width:920px!important;margin-left:auto!important;margin-right:auto!important;justify-content:center!important
}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopAbout>.br-about-team-shell:after{display:none!important}
#salon-desktop-v1[data-empty-team="1"] #salonDesktopAbout .br-about-column{
width:100%!important;max-width:920px!important;min-height:0!important;height:auto!important;flex:1 1 auto!important
}`;
  document.head.appendChild(desktopStyle);

  const root=document.createElement('div');
  root.id='salon-desktop-v1';
  root.dataset.emptyTeam=TEAM_MASTERS.length?'0':'1';
  root.innerHTML=`
    <header class="std-header">
      <a class="std-header-brand" href="#salonDesktopTop" aria-label="SALON NAME">
        <span class="std-header-brand-main">SALON NAME</span>

      </a>
      <div class="std-lang-switch std-lang-switch-under-brand" role="group" aria-label="Language"><button type="button" data-desktop-lang="ru">RU</button><span class="sep">|</span><button type="button" data-desktop-lang="en">EN</button><span class="sep">|</span><button type="button" data-desktop-lang="hy">HY</button></div>
      <nav class="std-nav" aria-label="Основная навигация">
        <a href="#salonDesktopServices">Услуги</a>
        <a href="#salonDesktopPortfolio">Наши работы</a>
        <a href="#salonDesktopAbout">О нас</a>
        <a href="#salonDesktopReviews">Отзывы</a>
        <a href="#salonDesktopContacts">Контакты</a>
      </nav>
      <div class="std-header-right">
        <div class="std-lang-switch std-lang-switch-placeholder" aria-hidden="true"></div>
        <a class="std-phone" href="#salonDesktopContacts" aria-disabled="true" aria-label="Позвонить в SALON NAME">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z" fill="currentColor"/></svg>
          <span>Телефон салона</span>
        </a>
        <button class="std-header-book" id="stdHeaderBookBtn" type="button">Записаться</button>
      </div>
    </header>

    <section class="std-hero" id="salonDesktopTop" aria-label="SALON NAME">
      <div class="std-hero-copy">
        <div class="std-hero-frame">
          <div class="std-copy-inner">

          <h1 class="std-logo">SALON NAME</h1>


          <p class="std-tagline">Описание салона.</p>

          <div class="std-meta">
            <div class="std-meta-item">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.7v4.8l3 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-meta-text"><span class="std-status-main" id="stdStatusMain">График</span><span class="std-status-sub" id="stdStatusSub">Уточняется</span></span>
            </div>

            <span class="std-meta-divider" aria-hidden="true"></span>

            <a class="std-meta-item" href="#salonDesktopContacts" aria-disabled="true">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </span>
              <span class="std-meta-text std-address">Город,<br>Адрес салона</span>
            </a>
          </div>

          <div class="std-actions">
            <button class="std-btn std-btn-primary" id="stdBookBtn" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.8v4.4M16 3.8v4.4M4 10h16M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <span>Записаться</span>
            </button>
            <a class="std-btn" id="stdViewWorks" href="#salonDesktopPortfolio">
              <span class="std-sparkles" aria-hidden="true">✦</span>
              <span>Смотреть работы</span>
            </a>
          </div>
          </div>
          <a class="std-scroll-hint" href="#salonDesktopPortfolio" aria-label="Листайте вниз"><span class="std-scroll-label">Листайте вниз</span><span class="std-scroll-circle" aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div class="std-hero-photo">
        <img id="stdHeroMedia" src="media-placeholder.svg" alt="Медиа салона">
      </div>
    </section>

    <section class="std-portfolio" id="salonDesktopPortfolio" aria-labelledby="salonDesktopPortfolioTitle">
      <div class="std-portfolio-inner">
        <div class="std-portfolio-head">
          <p class="std-portfolio-kicker">Портфолио</p>
          <h2 class="std-portfolio-title" id="salonDesktopPortfolioTitle">Наши работы</h2>
          <p class="std-portfolio-copy">Фотографии и работы салона будут добавлены при заполнении шаблона.</p>
        </div>
        <div class="std-portfolio-grid">
          ${PORTFOLIO.map((item,i)=>`<button class="std-work" type="button" data-portfolio-index="${i}" aria-label="Открыть фотографию"><img src="${item.src}" alt="${item.alt}" loading="${i<4?'eager':'lazy'}"></button>`).join('')}
        </div>
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Открыть галерею <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="mct-prices" id="salonDesktopServices" aria-labelledby="stdServicesTitle">
      <div class="mct-shell">
        <div class="mct-price-head">
          <div class="dct-service-sticky-card" id="stdStickyServiceCard" aria-label="Выберите услугу">
            <strong>Выберите услугу</strong>
            <p class="dct-service-sticky-lead">Все услуги собраны по направлениям. Выберите подходящую процедуру — запись откроется сразу, без лишних шагов.</p>
            <div class="dct-service-sticky-info">
              <div class="dct-service-sticky-row dct-service-availability">
                <span class="dct-service-sticky-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 2"></path></svg>
                </span>
                <span class="dct-service-sticky-copy">
                  <b id="stdStickyServiceStatus">График</b>
                  <small id="stdStickyServiceStatusSub">Уточняется</small>
                </span>
              </div>
              <a class="dct-service-sticky-row dct-service-sticky-route" href="#salonDesktopContacts" aria-disabled="true" aria-label="Построить маршрут">
                <span class="dct-service-sticky-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M19 10c0 5.2-7 10-7 10s-7-4.8-7-10a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>
                </span>
                <span class="dct-service-sticky-copy">
                  <b>Город</b>
                  <small>Адрес салона</small>
                </span>
              </a>
            </div>
            <div class="dct-service-sticky-steps" aria-label="Как записаться">
              <span class="dct-service-sticky-steps-title">Быстрая запись</span>
              <ol>
                <li><b>01</b><span>Выберите услугу</span></li>
                <li><b>02</b><span>Записаться</span></li>
                <li><b>03</b><span>Связь с салоном</span></li>
              </ol>
            </div>
            <button class="dct-service-sticky-book" id="stdStickyServiceBook" type="button"><span>Записаться</span><span aria-hidden="true">→</span></button>
            <button class="dct-service-sticky-work" id="stdStickyGalleryOpen" type="button"><span>Открыть галерею</span><span aria-hidden="true">✦</span></button>
          </div>
        </div>

        <div class="dct-services-main-title" id="stdServicesTitle">Услуги и цены</div>
        <div class="mct-tabs-ribbon-wrap is-many">
          <div class="mct-tabs mct-tabs-scroll is-many" role="tablist" aria-label="Категории услуг">
            <div class="mct-tabs-track" id="stdServiceTabs"></div>
          </div>
        </div>

        <div class="dct-service-groups" id="stdServiceList" aria-label="Услуги по категориям на компьютере"></div>

        <button class="mct-more-services" id="stdServiceMore" type="button" aria-expanded="false">
          <span class="mct-more-services-mobile-copy" id="stdServiceMoreTextMobile"></span>
          <span class="mct-more-services-desktop-copy" id="stdServiceMoreText"></span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </section>

    <section class="mct-about br-about-team" id="salonDesktopAbout" aria-labelledby="stdAboutTitle">
      <div class="br-about-team-headings">
        <h2 id="stdAboutTitle">О салоне</h2>
        <h2 id="stdTeamTitle">Наша команда</h2>
      </div>
      <div class="mct-shell br-about-team-shell">
        <article class="br-about-column">
          <div class="mct-about-card">
            <div class="mct-about-portrait-wrap">
              <figure class="mct-about-portrait">
                <img src="media-placeholder.svg" alt="SALON NAME" loading="lazy">
                <div class="dct-about-rating"><span class="dct-about-rating-star">★</span><strong>—</strong><span>рейтинг не указан</span></div>
              </figure>
            </div>
            <div class="mct-about-copy">
              <p class="mct-about-lead"><span class="dct-about-brand">SALON NAME</span><span class="dct-about-kind">Салон красоты</span></p>
              <p class="dct-about-copy">Описание салона будет добавлено при заполнении шаблона.</p>
              <div class="dct-about-amenities">
                <div class="dct-about-amenities-grid">
                  <article><strong>Разные направления</strong><span>Маникюр, волосы, брови и косметология.</span></article>
                  <article><strong>Комфорт</strong><span>Спокойная атмосфера и внимание к каждому гостю.</span></article>
                  <article><strong>Прямая запись</strong><span>Контакты будут добавлены при заполнении шаблона.</span></article>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside class="br-team-panel" id="salonDesktopTeam" aria-labelledby="stdTeamTitle">
          <p class="std-team-kicker">Наша команда</p>
          <p class="std-team-subtitle">Нажмите на мастера, чтобы открыть страницу специалиста.</p>
          <div class="std-team-track" id="stdTeamTrack">
            ${TEAM_MASTERS.map(master=>`
              <button class="std-master" type="button" data-desktop-master="${master.id}">
                <div class="std-master-avatar">${TEAM_AVATAR}</div>
                <strong class="std-master-name">${master.name}</strong>
                <span class="std-master-role">${master.role}</span>
                <span class="std-master-cats">${master.cats.map(cat=>'<span class="std-master-cat">'+cat+'</span>').join('')}</span>
              </button>
            `).join('')}
          </div>
        </aside>
      </div>
    </section>

    <section class="std-reviews" id="salonDesktopReviews" aria-labelledby="stdReviewsTitle">
      <div class="std-reviews-head">
        <p class="std-reviews-kicker">Отзывы</p>
        <h2 class="std-reviews-title" id="stdReviewsTitle">Что говорят о нас</h2>
        <div class="std-reviews-score">
          <strong>—</strong>
          <div class="std-reviews-stars" aria-label="Рейтинг не указан">★★★★★</div>
          <div class="std-reviews-count">Отзывы будут добавлены</div>
        </div>
      </div>

      <div class="std-reviews-viewport" id="stdReviewsViewport" aria-label="Отзывы клиентов. Наведите курсор, чтобы остановить ленту.">
        <div class="std-reviews-loop">
          <div class="std-reviews-set">
            ${DESKTOP_REAL_REVIEWS.map(r=>`
              <a class="std-review-card" href="${REVIEWS_URL}" aria-disabled="true">
                <div class="std-review-head">
                  <span class="std-review-avatar">${([...(String(r[0]).trim())][0]||'S').toUpperCase()}</span>
                  <span>
                    <strong class="std-review-name">${r[0]}</strong>
                    <span class="std-review-meta">Источник отзыва</span>
                    <span class="std-review-stars">★★★★★</span>
                  </span>
                </div>
                <p class="std-review-text">${r[1]}</p>
                <span class="std-review-more">Подробнее →</span>
              </a>
            `).join('')}
          </div>
          <div class="std-reviews-set" aria-hidden="true">
            ${DESKTOP_REAL_REVIEWS.map(r=>`
              <a class="std-review-card" href="${REVIEWS_URL}" aria-disabled="true" tabindex="-1">
                <div class="std-review-head">
                  <span class="std-review-avatar">${([...(String(r[0]).trim())][0]||'S').toUpperCase()}</span>
                  <span>
                    <strong class="std-review-name">${r[0]}</strong>
                    <span class="std-review-meta">Источник отзыва</span>
                    <span class="std-review-stars">★★★★★</span>
                  </span>
                </div>
                <p class="std-review-text">${r[1]}</p>
                <span class="std-review-more">Подробнее →</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="std-reviews-actions">
        <a class="std-reviews-all" href="${REVIEWS_URL}" aria-disabled="true">Смотреть все отзывы →</a>
      </div>
    </section>

    <section class="std-contact" id="salonDesktopContacts" aria-labelledby="stdContactTitle">
      <div class="std-contact-inner">
        <div class="std-contact-head">
          <div>
            <p class="std-contact-kicker">Контакты</p>
            <h2 class="std-contact-title" id="stdContactTitle">Ждём вас</h2>
          </div>
          <div class="std-contact-status" id="stdContactStatus">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
            <span id="stdContactStatusText">График работы</span>
          </div>
        </div>

        <div class="std-contact-body">
          <div class="std-contact-list">
            <a class="std-contact-card" href="${MAP_URL}" aria-disabled="true">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6.5-5.4 6.5-11a6.5 6.5 0 1 0-13 0c0 5.6 6.5 11 6.5 11Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Город, адрес салона</strong><span class="std-contact-card-sub">Адрес салона</span></span>
            </a>

            <a class="std-contact-card" href="#salonDesktopContacts">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Телефон салона</strong><span class="std-contact-card-sub">Контакт будет добавлен</span></span>
            </a>

            <a class="std-contact-card" href="${MESSENGER_URL}" aria-disabled="true">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 9.2c.8 2.2 2.1 3.5 4.3 4.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Мессенджер</strong><span class="std-contact-card-sub">Контакт будет добавлен</span></span>
            </a>

            <div class="std-contact-card static">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">График работы</strong><span class="std-contact-card-sub" id="stdContactHoursSub">Уточняется</span></span>
            </div>
          </div>

          <div class="std-contact-right">
            <div class="std-contact-map"><iframe title="Карта салона" loading="eager" src="about:blank"></iframe></div>
            <div class="std-contact-actions">
              <a class="std-contact-action-btn std-contact-call" href="#salonDesktopContacts">Позвонить</a>
              <a class="std-contact-action-btn std-contact-route" href="${ROUTE}" aria-disabled="true">Построить маршрут</a>
            </div>
          </div>
        </div>
      </div>

      <div class="std-contact-bottom">
        <a class="std-contact-brand" href="https://tanem.ru/" target="_blank" rel="noopener">
          <span class="br-tanem-mark">T</span>
          <span class="br-tanem-copy">Создано в <strong>TANEM.ru</strong></span>
        </a>
      </div>
    </section>

    <div class="std-master-overlay" id="stdMasterOverlay" role="dialog" aria-modal="true" aria-label="Мастер SALON NAME">
      <div class="std-master-page-panel">
        <div class="std-master-page-top">
          <button class="std-master-page-close" id="stdMasterPageClose" type="button" aria-label="Закрыть">←</button>
          <span>SALON NAME</span>
          <i aria-hidden="true"></i>
        </div>
        <div class="std-master-page-content" id="stdMasterPageContent"></div>
        <button class="std-master-page-book" id="stdMasterPageBook" type="button">Записаться онлайн</button>
      </div>
    </div>

    <div class="std-book-overlay" id="stdBookOverlay" role="dialog" aria-modal="true" aria-label="Запись SALON NAME">
      <div class="std-book-panel">
        <button class="std-book-close" id="stdBookClose" type="button" aria-label="Закрыть">×</button>
        <p class="std-services-kicker">Запись</p><h3>Как вам удобнее записаться?</h3><p>Выберите удобный способ связи.</p>
        <div class="std-book-options">
          <a href="#salonDesktopContacts" aria-disabled="true"><span>Телефон</span><span>Будет добавлен →</span></a>
          <a href="#salonDesktopContacts" aria-disabled="true"><span>Мессенджер</span><span>Будет добавлен →</span></a>
          <a href="${MAP_URL}" aria-disabled="true"><span>Карты</span><span>Будут добавлены →</span></a>
        </div>
      </div>
    </div>

    <div class="std-gallery-browser" id="stdGalleryBrowser" role="dialog" aria-modal="true" aria-label="Галерея SALON NAME">
      <div class="std-gallery-browser-shell">
        <div class="std-gallery-browser-top">
          <button class="std-gallery-browser-back" id="stdGalleryBrowserBack" type="button" aria-label="Закрыть галерею">←</button>
          <div class="std-gallery-browser-title"><strong>Галерея</strong><span>SALON NAME</span></div>
          <div></div>
        </div>
        <div class="std-gallery-browser-tabs" id="stdGalleryBrowserTabs"></div>
        <div class="std-gallery-browser-grid" id="stdGalleryBrowserGrid"></div>
      </div>
    </div>

    <div class="std-gallery" id="stdGallery" role="dialog" aria-modal="true" aria-label="Галерея SALON NAME">
      <button class="std-gallery-close" id="stdGalleryClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-gallery-stage">
        <div class="std-gallery-hint">Увеличение: прокрутите колесо мыши или дважды нажмите на фотографию</div>
        <div class="std-gallery-canvas"><img class="std-gallery-image" id="stdGalleryImage" src="" alt="Фотография SALON NAME"></div>
        <button class="std-gallery-nav std-gallery-prev" id="stdGalleryPrev" type="button" aria-label="Предыдущее фото">‹</button>
        <button class="std-gallery-nav std-gallery-next" id="stdGalleryNext" type="button" aria-label="Следующее фото">›</button>
        <span class="std-gallery-count" id="stdGalleryCount"></span>
        <button class="std-view-gallery" id="stdViewGallery" type="button">Открыть галерею</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  const revealDesktopRoot=()=>requestAnimationFrame(()=>root.classList.add('desktop-ready'));
  if(document.documentElement.classList.contains('br-booting')){
    window.addEventListener('br:intro-done',revealDesktopRoot,{once:true});
  }else{
    revealDesktopRoot();
  }

  const heroVideo=document.getElementById('stdHeroVideo');
  if(heroVideo){
    heroVideo.muted=true;
    heroVideo.defaultMuted=true;
    const tryHeroVideo=()=>{if(document.hidden)return;const p=heroVideo.play();if(p&&typeof p.catch==='function')p.catch(()=>{})};
    if(document.documentElement.classList.contains('br-booting')){
      try{heroVideo.pause()}catch(_){}
      window.addEventListener('br:intro-done',tryHeroVideo,{once:true});
    }else{
      requestAnimationFrame(tryHeroVideo);
    }
    heroVideo.addEventListener('loadeddata',()=>{if(!document.documentElement.classList.contains('br-booting'))tryHeroVideo()},{once:true});
    if('IntersectionObserver' in window){
      const heroVideoObserver=new IntersectionObserver(entries=>{
        const visible=!!entries[0]?.isIntersecting;
        if(visible&&!document.hidden)tryHeroVideo();
        else try{heroVideo.pause()}catch(_){}
      },{threshold:.04});
      heroVideoObserver.observe(heroVideo);
    }
    document.addEventListener('visibilitychange',()=>{if(document.hidden){try{heroVideo.pause()}catch(_){}}else if(heroVideo.getBoundingClientRect().bottom>0)tryHeroVideo()});
  }

  const bookBtn=document.getElementById('stdBookBtn');
  const bookOverlay=document.getElementById('stdBookOverlay');
  const openDesktopBooking=()=>{bookOverlay.classList.add('open');document.body.style.overflow='hidden'};
  const closeDesktopBooking=()=>{bookOverlay.classList.remove('open');if(!document.querySelector('.std-gallery.open,.std-gallery-browser.open,.std-price-viewer.open'))document.body.style.overflow=''};
  bookBtn.addEventListener('click',openDesktopBooking);
  const headerBookBtn=document.getElementById('stdHeaderBookBtn');
  if(headerBookBtn)headerBookBtn.addEventListener('click',openDesktopBooking);
  const stickyServiceBook=document.getElementById('stdStickyServiceBook');
  if(stickyServiceBook)stickyServiceBook.addEventListener('click',openDesktopBooking);
  document.getElementById('stdBookClose').addEventListener('click',closeDesktopBooking);
  bookOverlay.addEventListener('click',e=>{if(e.target===bookOverlay)closeDesktopBooking()});

  const galleryBrowser=document.getElementById('stdGalleryBrowser');
  const galleryBrowserTabs=document.getElementById('stdGalleryBrowserTabs');
  const galleryBrowserGrid=document.getElementById('stdGalleryBrowserGrid');
  const gallery=document.getElementById('stdGallery');
  const galleryStage=document.querySelector('.std-gallery-stage');
  const galleryCanvas=document.querySelector('.std-gallery-canvas');
  const galleryImage=document.getElementById('stdGalleryImage');
  const galleryCount=document.getElementById('stdGalleryCount');
  const galleryViewAll=document.getElementById('stdViewGallery');
  let galleryCategory='Ногти';
  let galleryItems=PORTFOLIO.slice();
  let galleryIndex=0;
  let galleryScale=1,galleryX=0,galleryY=0;
  let galleryDragStartX=0,galleryDragStartY=0,galleryPanStartX=0,galleryPanStartY=0,galleryDragging=false;
  let galleryPinchStart=0,galleryPinchBase=1,galleryHadPinch=false;
  const galleryWarmCache=new Map();
  function warmGalleryImage(src){
    if(!src||galleryWarmCache.has(src))return;
    const image=new Image();image.decoding="async";image.src=src;
    galleryWarmCache.set(src,image);
    if(galleryWarmCache.size>8)galleryWarmCache.delete(galleryWarmCache.keys().next().value);
  }
  function warmGalleryNeighbours(){
    if(galleryItems.length<2)return;
    warmGalleryImage(galleryItems[(galleryIndex+1)%galleryItems.length].src);
    warmGalleryImage(galleryItems[(galleryIndex-1+galleryItems.length)%galleryItems.length].src);
  }

  function clampDesktopViewer(){
    if(galleryScale<=1){galleryX=0;galleryY=0;return}
    const maxX=(galleryScale-1)*galleryCanvas.clientWidth*.5;
    const maxY=(galleryScale-1)*galleryCanvas.clientHeight*.5;
    galleryX=Math.max(-maxX,Math.min(maxX,galleryX));
    galleryY=Math.max(-maxY,Math.min(maxY,galleryY));
  }
  function applyDesktopViewerTransform(){
    clampDesktopViewer();
    galleryImage.style.transform='translate3d('+galleryX+'px,'+galleryY+'px,0) scale('+galleryScale+')';
  }
  function resetDesktopViewer(){
    galleryScale=1;galleryX=0;galleryY=0;galleryPinchStart=0;galleryPinchBase=1;
    applyDesktopViewerTransform();
  }
  function paintGallery(){
    const item=galleryItems[galleryIndex];
    if(!item)return;
    warmGalleryImage(item.src);
    galleryImage.decoding="async";
    galleryImage.src=item.src;
    galleryImage.alt=item.alt||'Фотография SALON NAME';
    if(typeof galleryImage.decode==="function")galleryImage.decode().catch(()=>{});
    warmGalleryNeighbours();
    galleryCount.textContent=String(galleryIndex+1).padStart(2,'0')+' / '+String(galleryItems.length).padStart(2,'0');
    document.getElementById('stdGalleryPrev').hidden=galleryItems.length<2;
    document.getElementById('stdGalleryNext').hidden=galleryItems.length<2;
    resetDesktopViewer();
  }
  function openDesktopViewer(items,index=0,source='gallery'){
    galleryItems=Array.isArray(items)&&items.length?items:PORTFOLIO.slice();
    gallery.dataset.source=source;
    galleryViewAll.hidden=source!=='portfolio';
    galleryIndex=Math.max(0,Math.min(index,galleryItems.length-1));
    paintGallery();
    gallery.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopViewer(){
    gallery.classList.remove('open');
    resetDesktopViewer();
    if(!galleryBrowser.classList.contains('open'))document.body.style.overflow='';
  }
  function moveDesktopGallery(step){
    if(galleryItems.length<2)return;
    galleryIndex=(galleryIndex+step+galleryItems.length)%galleryItems.length;
    paintGallery();
  }

  function renderDesktopGalleryBrowser(){
    const cats=Object.keys(DESKTOP_GALLERY_GROUPS);
    const items=DESKTOP_GALLERY_GROUPS[galleryCategory]||[];
    if(!galleryBrowserTabs.childElementCount){
      galleryBrowserTabs.innerHTML=cats.map(cat=>'<button class="std-gallery-browser-tab" type="button" data-gallery-category="'+cat+'">'+cat+'</button>').join('');
      galleryBrowserTabs.querySelectorAll('[data-gallery-category]').forEach(btn=>btn.onclick=()=>{
        galleryCategory=btn.dataset.galleryCategory;
        renderDesktopGalleryBrowser();
      });
    }
    galleryBrowserTabs.querySelectorAll('[data-gallery-category]').forEach(btn=>{
      const active=btn.dataset.galleryCategory===galleryCategory;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-selected',active?'true':'false');
    });
    galleryBrowserGrid.innerHTML=items.map((item,i)=>'<button class="std-gallery-browser-tile" type="button" data-gallery-item="'+i+'" aria-label="Открыть фотографию"><img src="'+item.src+'" alt="'+item.alt+'" loading="lazy" decoding="async"></button>').join('');
    if(items.length)warmGalleryImage(items[0].src);
  }
  galleryBrowserGrid.addEventListener("click",e=>{
    const tile=e.target.closest("[data-gallery-item]");
    if(!tile)return;
    const items=DESKTOP_GALLERY_GROUPS[galleryCategory]||[];
    openDesktopViewer(items,Number(tile.dataset.galleryItem)||0,"gallery");
  });
  galleryBrowserGrid.addEventListener("pointerover",e=>{
    const tile=e.target.closest("[data-gallery-item]");
    if(!tile)return;
    const item=(DESKTOP_GALLERY_GROUPS[galleryCategory]||[])[Number(tile.dataset.galleryItem)||0];
    if(item)warmGalleryImage(item.src);
  },{passive:true});
  function openDesktopGalleryBrowser(cat='Салон'){
    galleryCategory=Object.prototype.hasOwnProperty.call(DESKTOP_GALLERY_GROUPS,cat)?cat:'Салон';
    renderDesktopGalleryBrowser();
    galleryBrowser.classList.add('open');
    galleryBrowser.scrollTop=0;
    document.body.style.overflow='hidden';
  }
  function closeDesktopGalleryBrowser(){
    galleryBrowser.classList.remove('open');
    if(!gallery.classList.contains('open'))document.body.style.overflow='';
  }

  document.querySelectorAll('.std-work').forEach(btn=>{
    btn.addEventListener('click',()=>openDesktopViewer(PORTFOLIO,Number(btn.dataset.portfolioIndex)||0,'portfolio'));
  });
  document.getElementById('stdOpenGallery').addEventListener('click',()=>openDesktopGalleryBrowser('Ногти'));
  document.getElementById('stdStickyGalleryOpen')?.addEventListener('click',()=>openDesktopGalleryBrowser('Ногти'));
  if(heroVideo)heroVideo.addEventListener('click',()=>openDesktopGalleryBrowser('Ногти'));
  document.getElementById('stdViewWorks')?.addEventListener('click',e=>{e.preventDefault();openDesktopGalleryBrowser('Ногти')});
  document.getElementById('stdGalleryBrowserBack').addEventListener('click',closeDesktopGalleryBrowser);
  document.getElementById('stdGalleryClose').addEventListener('click',closeDesktopViewer);
  document.getElementById('stdGalleryPrev').addEventListener('click',()=>moveDesktopGallery(-1));
  document.getElementById('stdGalleryNext').addEventListener('click',()=>moveDesktopGallery(1));
  galleryViewAll.addEventListener('click',()=>{closeDesktopViewer();openDesktopGalleryBrowser('Ногти')});
  gallery.addEventListener('click',e=>{if(e.target===gallery)closeDesktopViewer()});

  galleryStage.addEventListener('wheel',e=>{
    if(!gallery.classList.contains('open'))return;
    e.preventDefault();
    const delta=e.deltaY<0?.18:-.18;
    galleryScale=Math.max(1,Math.min(4,galleryScale+delta));
    if(galleryScale<=1.01)galleryScale=1;
    applyDesktopViewerTransform();
  },{passive:false});
  const toggleDesktopViewerZoom=e=>{
    if(e)e.preventDefault();
    galleryScale=galleryScale>1?1:2;
    if(galleryScale===1){galleryX=0;galleryY=0}
    applyDesktopViewerTransform();
  };
  galleryCanvas.addEventListener('dblclick',toggleDesktopViewerZoom);
  galleryImage.addEventListener('dblclick',toggleDesktopViewerZoom);

  galleryStage.addEventListener('pointerdown',e=>{
    if(e.pointerType==='touch'||e.target.closest('.std-gallery-nav,.std-view-gallery'))return;
    galleryDragging=true;
    galleryDragStartX=e.clientX;galleryDragStartY=e.clientY;
    galleryPanStartX=galleryX;galleryPanStartY=galleryY;
    try{galleryStage.setPointerCapture(e.pointerId)}catch(_){}
  });
  galleryStage.addEventListener('pointermove',e=>{
    if(!galleryDragging||e.pointerType==='touch')return;
    if(galleryScale>1){
      galleryX=galleryPanStartX+(e.clientX-galleryDragStartX);
      galleryY=galleryPanStartY+(e.clientY-galleryDragStartY);
      applyDesktopViewerTransform();
    }
  });
  galleryStage.addEventListener('pointerup',e=>{
    if(!galleryDragging||e.pointerType==='touch')return;
    galleryDragging=false;
    const dx=e.clientX-galleryDragStartX,dy=e.clientY-galleryDragStartY;
    try{galleryStage.releasePointerCapture(e.pointerId)}catch(_){}
    if(galleryScale===1&&Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.1)moveDesktopGallery(dx<0?1:-1);
  });
  galleryStage.addEventListener('pointercancel',()=>{galleryDragging=false});

  const pinchDistance=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
  galleryCanvas.addEventListener('touchstart',e=>{
    if(e.touches.length===2){
      e.preventDefault();galleryHadPinch=true;galleryPinchStart=pinchDistance(e);galleryPinchBase=galleryScale;
    }else if(e.touches.length===1){
      galleryDragStartX=e.touches[0].clientX;galleryDragStartY=e.touches[0].clientY;
      galleryPanStartX=galleryX;galleryPanStartY=galleryY;
    }
  },{passive:false});
  galleryCanvas.addEventListener('touchmove',e=>{
    if(e.touches.length===2&&galleryPinchStart){
      e.preventDefault();
      galleryScale=Math.max(1,Math.min(4,galleryPinchBase*(pinchDistance(e)/galleryPinchStart)));
      applyDesktopViewerTransform();
    }else if(e.touches.length===1&&galleryScale>1){
      e.preventDefault();
      galleryX=galleryPanStartX+(e.touches[0].clientX-galleryDragStartX);
      galleryY=galleryPanStartY+(e.touches[0].clientY-galleryDragStartY);
      applyDesktopViewerTransform();
    }
  },{passive:false});
  galleryCanvas.addEventListener('touchend',e=>{
    if(e.touches.length<2)galleryPinchStart=0;
    if(e.touches.length===0){
      if(!galleryHadPinch&&galleryScale===1&&galleryItems.length>1&&e.changedTouches.length){
        const dx=e.changedTouches[0].clientX-galleryDragStartX;
        const dy=e.changedTouches[0].clientY-galleryDragStartY;
        if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)moveDesktopGallery(dx<0?1:-1);
      }
      galleryHadPinch=false;
      if(galleryScale<=1.01)resetDesktopViewer();
    }
  },{passive:false});

  document.addEventListener('keydown',e=>{if(bookOverlay.classList.contains('open')&&e.key==='Escape'){closeDesktopBooking();return}});
  document.addEventListener('keydown',e=>{
    if(gallery.classList.contains('open')){
      if(e.key==='Escape')closeDesktopViewer();
      else if(e.key==='ArrowLeft')moveDesktopGallery(-1);
      else if(e.key==='ArrowRight')moveDesktopGallery(1);
      return;
    }
    if(galleryBrowser.classList.contains('open')&&e.key==='Escape')closeDesktopGalleryBrowser();
  });

  const SERVICE_PREVIEW_LIMIT=7;
  let activeServiceCategory='Все';
  let desktopServicesExpanded=false;
  let desktopServiceLanguageReady=false;
  const serviceTabs=document.getElementById('stdServiceTabs');
  const serviceList=document.getElementById('stdServiceList');
  const serviceMore=document.getElementById('stdServiceMore');
  const serviceMoreText=document.getElementById('stdServiceMoreText');
  const serviceMoreTextMobile=document.getElementById('stdServiceMoreTextMobile');
  const DESKTOP_SERVICE_TABS=['Все',...SERVICE_CATEGORIES];

  function desktopServiceWord(n){
    const n10=n%10,n100=n%100;
    if(n10===1&&n100!==11)return 'услугу';
    if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';
    return 'услуг';
  }

  function desktopDurationValue(raw){const m=String(raw||'').match(/\d+(?:[.,]\d+)?/);return m?m[0]:''}
  function activeDesktopServiceLang(){const raw=(document.body.dataset.brLang||document.documentElement.lang||'en').toLowerCase();return raw.startsWith('ru')?'ru':raw.startsWith('hy')?'hy':'en'}
  function desktopDurationLabel(raw,lang=activeDesktopServiceLang()){let v=desktopDurationValue(raw);if(!v)return '';v=lang==='ru'?v.replace('.',','):v.replace(',','.');const minutes=/(?:мин|minutes?|mins?)/i.test(String(raw||''));return v+(minutes?(lang==='hy'?' րոպե':lang==='en'?' min':' мин'):(lang==='hy'?' ժ.':lang==='en'?' h':' ч'))}
  function updateDesktopServiceDurations(lang=activeDesktopServiceLang()){document.querySelectorAll('#salonDesktopServices .dct-service-duration[data-duration]').forEach(el=>{el.textContent=desktopDurationLabel(el.dataset.duration,lang)})}
  window.addEventListener('salon-template:languagechange',e=>updateDesktopServiceDurations(e.detail&&e.detail.lang));

  function templateServiceCard(item){
    const title=item[0];
    const price=item[1]||'';
    const duration=item[2]||'';
    const description=item[4]||'';
    const variants=item[3]||[];
    const hasVariants=variants.length>0;
    const action=price||'Записаться';
    const actionClass=price?'is-price':'is-book';
    const hasPriceRange=/^[\d ]+[–-][\d ]+\s*[֏₽€$£]$/u.test(price);
    const durationMarkup=duration?'<span class="dct-service-duration" data-duration="'+duration+'">'+desktopDurationLabel(duration)+'</span>':'';

    if(hasVariants){
      return '<button class="dct-service-card has-variants'+(description?' has-description':'')+'" type="button" data-service-book>'+
        '<span class="dct-service-card-body">'+
          '<strong class="dct-service-card-title">'+title+'</strong>'+durationMarkup+
          '<div class="dct-service-card-description '+(description?'has-copy':'is-empty')+'">'+(description?'<p>'+description+'</p>':'')+'</div>'+
          '<div class="dct-service-card-variants">'+variants.map(v=>{
            const variantAction=v[2]||action;
            const variantClass=variantAction==='Записаться'?'is-book':'is-price';
            return '<div class="dct-service-card-variant"><span class="dct-service-duration" data-duration="'+v[0]+'">'+desktopDurationLabel(v[0])+'</span><span class="dct-service-card-variant-meta">'+(v[1]?'<small>'+v[1]+'</small>':'')+'<b class="'+variantClass+'">'+variantAction+'</b></span></div>';
          }).join('')+'</div>'+
        '</span>'+
      '</button>';
    }

    // This one demo has a separate accessible expand control; its booking action remains independent.
    if((title==='Сложное мелирование'||title==='Сложная покраска волос с заливкой')&&description){
      const descriptionId=title==='Сложное мелирование'?'stdDemoServiceDescription':'stdDemoServiceRepairDescription';
      return '<article class="dct-service-card has-description is-demo-expandable">'+
        '<div class="dct-service-card-body">'+
          '<strong class="dct-service-card-title">'+title+'</strong>'+durationMarkup+
          '<div class="dct-service-card-description has-copy">'+
            '<p id="'+descriptionId+'">'+description+'</p>'+
            '<button class="dct-service-demo-more" type="button" data-service-details aria-expanded="false" aria-controls="'+descriptionId+'">Подробнее…</button>'+
          '</div>'+
          '<div class="dct-service-card-meta"><b class="'+actionClass+'">'+action+'</b></div>'+
        '</div>'+
        '<button class="dct-service-demo-book-hit" type="button" data-service-book data-demo-title="'+title+'" aria-label="Записаться: '+title+'"></button>'+
      '</article>';
    }

    return '<button class="dct-service-card'+(description?' has-description':'')+(hasPriceRange?' is-price-range':'')+'" type="button" data-service-book>'+
      '<span class="dct-service-card-body">'+
        '<strong class="dct-service-card-title">'+title+'</strong>'+durationMarkup+
        '<div class="dct-service-card-description '+(description?'has-copy':'is-empty')+'">'+(description?'<p>'+description+'</p>':'')+'</div>'+
        '<div class="dct-service-card-meta"><b class="'+actionClass+'">'+action+'</b></div>'+
      '</span>'+
    '</button>';
  }

  function currentTemplateServiceState(){
    const groups=activeServiceCategory==='Все'
      ? SERVICE_CATEGORIES.map(cat=>({id:cat,label:cat,services:SERVICE_DATA[cat]||[]}))
      : SERVICE_CATEGORIES.filter(cat=>cat===activeServiceCategory).map(cat=>({id:cat,label:cat,services:SERVICE_DATA[cat]||[]}));

    const total=groups.reduce((sum,group)=>sum+group.services.length,0);
    if(desktopServicesExpanded||total<=SERVICE_PREVIEW_LIMIT){
      return {groups,total,hidden:Math.max(total-SERVICE_PREVIEW_LIMIT,0)};
    }

    let remaining=SERVICE_PREVIEW_LIMIT;
    const visible=groups.map(group=>{
      const services=group.services.slice(0,Math.max(remaining,0));
      remaining-=services.length;
      return {...group,services};
    }).filter(group=>group.services.length>0);

    return {groups:visible,total,hidden:Math.max(total-SERVICE_PREVIEW_LIMIT,0)};
  }

  function renderDesktopServices(){
    serviceTabs.innerHTML=DESKTOP_SERVICE_TABS.map(cat=>
      '<button class="mct-tab'+(cat==='Все'?' mct-tab-all':'')+(cat===activeServiceCategory?' is-active':'')+'" type="button" role="tab" aria-selected="'+(cat===activeServiceCategory?'true':'false')+'" data-service-category="'+cat+'">'+cat+'</button>'
    ).join('');

    serviceTabs.querySelectorAll('[data-service-category]').forEach(btn=>btn.onclick=()=>{
      const rail=serviceTabs.closest('.mct-tabs');
      const previousScroll=rail?.scrollLeft||0;
      activeServiceCategory=btn.dataset.serviceCategory;
      desktopServicesExpanded=false;
      renderDesktopServices();
      if(rail)rail.scrollLeft=previousScroll;
    });

    const state=currentTemplateServiceState();
    serviceList.innerHTML=state.groups.map(group=>{
      const heading=activeServiceCategory==='Все'
        ? '<div class="dct-service-category-heading"><span>'+group.label+'</span><i aria-hidden="true"></i></div>'
        : '';
      return '<section class="dct-service-category">'+heading+'<div class="dct-service-category-list">'+group.services.map(templateServiceCard).join('')+'</div></section>';
    }).join('');

    serviceList.querySelectorAll('[data-service-book]').forEach(btn=>btn.onclick=openDesktopBooking);
    serviceList.querySelectorAll('[data-service-details]').forEach(btn=>btn.onclick=()=>{
      const card=btn.closest('.is-demo-expandable');
      if(!card.classList.contains('is-expanded'))card.style.setProperty('--desktop-side-y',(card.offsetHeight/2)+'px');
      const expanded=card.classList.toggle('is-expanded');
      if(!expanded)requestAnimationFrame(syncDesktopServiceSidePositions);
      btn.setAttribute('aria-expanded',String(expanded));
      btn.textContent=expanded?'Свернуть описание':'Подробнее…';
      translateDesktopTree(btn,currentDesktopLang);
    });

    serviceMore.hidden=state.total<=SERVICE_PREVIEW_LIMIT;
    serviceMore.classList.toggle('is-open',desktopServicesExpanded);
    serviceMore.setAttribute('aria-expanded',desktopServicesExpanded?'true':'false');

    const copy=desktopServicesExpanded
      ? 'Свернуть услуги'
      : ('Открыть ещё '+state.hidden+' '+desktopServiceWord(state.hidden));
    serviceMoreText.textContent=copy;
    serviceMoreTextMobile.textContent=copy;

    updateDesktopServiceDurations();
    if(desktopServiceLanguageReady){
      translateDesktopTree(serviceTabs,currentDesktopLang);
      translateDesktopTree(serviceList,currentDesktopLang);
      translateDesktopTree(serviceMore,currentDesktopLang);
      serviceList.querySelectorAll('[data-demo-title]').forEach(btn=>btn.setAttribute('aria-label',desktopTrText('Записаться',currentDesktopLang)+': '+desktopTrText(btn.dataset.demoTitle,currentDesktopLang)));
    }
    requestAnimationFrame(syncDesktopServiceSidePositions);
  }

  function syncDesktopServiceSidePositions(){
    serviceList.querySelectorAll('.is-demo-expandable').forEach(card=>{
      const expanded=card.classList.contains('is-expanded');
      if(expanded)card.classList.remove('is-expanded');
      card.style.setProperty('--desktop-side-y',(card.offsetHeight/2)+'px');
      if(expanded)card.classList.add('is-expanded');
    });
  }
  window.addEventListener('resize',()=>requestAnimationFrame(syncDesktopServiceSidePositions),{passive:true});
  window.addEventListener('salon-template:languagechange',()=>requestAnimationFrame(syncDesktopServiceSidePositions));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(syncDesktopServiceSidePositions));

  serviceMore.onclick=()=>{
    // Keep the clicked control at the same viewport position in both directions.
    const anchorTop=serviceMore.getBoundingClientRect().top;
    const html=document.documentElement;
    const scrollRoot=document.scrollingElement||html;
    const priorBehavior=html.style.scrollBehavior;
    const priorAnchor=scrollRoot.style.overflowAnchor;
    html.style.scrollBehavior='auto';
    scrollRoot.style.overflowAnchor='none';
    desktopServicesExpanded=!desktopServicesExpanded;
    renderDesktopServices();
    // Collapsing a long list can instantly clamp window.scrollY. Use the
    // CURRENT scroll position, not the pre-collapse one, to keep the button in view.
    const keepButtonInPlace=()=>{
      const delta=serviceMore.getBoundingClientRect().top-anchorTop;
      if(Number.isFinite(delta)&&Math.abs(delta)>1){
        window.scrollTo({top:Math.max(0,window.scrollY+delta),behavior:'instant'});
      }
    };
    keepButtonInPlace();
    requestAnimationFrame(()=>{
      keepButtonInPlace();
      html.style.scrollBehavior=priorBehavior;
      scrollRoot.style.overflowAnchor=priorAnchor;
    });
  };
  renderDesktopServices();

  const desktopReviewsViewport=document.getElementById('stdReviewsViewport');
  const desktopReviewsLoop=desktopReviewsViewport?.querySelector('.std-reviews-loop');
  const desktopReviewsFirstSet=desktopReviewsViewport?.querySelector('.std-reviews-set');
  if(desktopReviewsViewport&&desktopReviewsLoop&&desktopReviewsFirstSet){
    desktopReviewsLoop.style.setProperty('animation','none','important');
    desktopReviewsViewport.style.cursor='grab';
    let reviewCycle=0;
    let reviewX=0;
    let reviewLast=performance.now();
    let reviewDragging=false;
    let reviewMoved=false;
    let reviewStartX=0;
    let reviewStartOffset=0;
    let reviewPauseUntil=0;
    let reviewHoverPause=false;
    let reviewIgnoreHoverUntil=0;
    let reviewSuppressClick=false;
    let reviewInView=false;
    let reviewRaf=0;
    if('IntersectionObserver' in window){
      const reviewObserver=new IntersectionObserver(entries=>{
        reviewInView=!!entries[0]?.isIntersecting;
        if(reviewInView)startDesktopReviews();
        else stopDesktopReviews();
      },{rootMargin:'160px 0px',threshold:0});
      reviewObserver.observe(desktopReviewsViewport);
    }else{
      reviewInView=true;
    }

    function measureDesktopReviews(){
      reviewCycle=desktopReviewsFirstSet.getBoundingClientRect().width+16;
      if(reviewCycle>0){
        while(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        while(reviewX>0)reviewX-=reviewCycle;
      }
    }
    function paintDesktopReviews(){
      desktopReviewsLoop.style.setProperty('transform','translate3d('+reviewX+'px,0,0)','important');
    }
    function desktopReviewsFrame(now){
      reviewRaf=0;
      const dt=Math.min(50,now-reviewLast);
      reviewLast=now;
      const hoverBlocked=reviewHoverPause&&Date.now()>=reviewIgnoreHoverUntil;
      if(!document.hidden&&!reviewDragging&&Date.now()>=reviewPauseUntil&&!hoverBlocked&&reviewCycle>0){
        reviewX-=52*dt/1000;
        if(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        paintDesktopReviews();
      }
      if(reviewInView&&!document.hidden)reviewRaf=requestAnimationFrame(desktopReviewsFrame);
    }
    function startDesktopReviews(){
      if(reviewRaf||!reviewInView||document.hidden)return;
      reviewLast=performance.now();
      reviewRaf=requestAnimationFrame(desktopReviewsFrame);
    }
    function stopDesktopReviews(){
      if(!reviewRaf)return;
      cancelAnimationFrame(reviewRaf);
      reviewRaf=0;
    }
    measureDesktopReviews();
    paintDesktopReviews();
    startDesktopReviews();
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden)stopDesktopReviews();
      else startDesktopReviews();
    });
    window.addEventListener('resize',()=>{measureDesktopReviews();paintDesktopReviews()},{passive:true});

    desktopReviewsViewport.addEventListener('pointerenter',()=>{
      if(Date.now()>=reviewIgnoreHoverUntil)reviewHoverPause=true;
    });
    desktopReviewsViewport.addEventListener('pointerleave',()=>{
      reviewHoverPause=false;
      reviewPauseUntil=Date.now()+900;
    });
    desktopReviewsViewport.addEventListener('pointerdown',e=>{
      reviewDragging=true;
      reviewMoved=false;
      reviewStartX=e.clientX;
      reviewStartOffset=reviewX;
      reviewHoverPause=false;
      reviewPauseUntil=Number.POSITIVE_INFINITY;
      desktopReviewsViewport.style.cursor='grabbing';
      try{desktopReviewsViewport.setPointerCapture(e.pointerId)}catch(_){}
    });
    desktopReviewsViewport.addEventListener('pointermove',e=>{
      if(!reviewDragging)return;
      const dx=e.clientX-reviewStartX;
      if(Math.abs(dx)>5)reviewMoved=true;
      reviewX=reviewStartOffset+dx;
      if(reviewCycle>0){
        while(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        while(reviewX>0)reviewX-=reviewCycle;
      }
      paintDesktopReviews();
    });
    function finishDesktopReviewDrag(e){
      if(!reviewDragging)return;
      reviewDragging=false;
      reviewSuppressClick=reviewMoved;
      desktopReviewsViewport.style.cursor='grab';
      reviewPauseUntil=Date.now()+3200;
      reviewIgnoreHoverUntil=Date.now()+3200;
      reviewHoverPause=false;
      try{desktopReviewsViewport.releasePointerCapture(e.pointerId)}catch(_){}
    }
    desktopReviewsViewport.addEventListener('pointerup',finishDesktopReviewDrag);
    desktopReviewsViewport.addEventListener('pointercancel',finishDesktopReviewDrag);
    desktopReviewsViewport.addEventListener('click',e=>{
      if(reviewSuppressClick){
        e.preventDefault();
        e.stopPropagation();
        reviewSuppressClick=false;
      }
    },true);
    desktopReviewsViewport.addEventListener('wheel',e=>{
      const horizontal=Math.abs(e.deltaX)>Math.abs(e.deltaY)&&Math.abs(e.deltaX)>2;
      if(!horizontal)return;
      e.preventDefault();
      const delta=e.deltaX;
      reviewX-=delta;
      if(reviewCycle>0){
        while(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        while(reviewX>0)reviewX-=reviewCycle;
      }
      paintDesktopReviews();
      reviewPauseUntil=Date.now()+2600;
      reviewIgnoreHoverUntil=Date.now()+2600;
      reviewHoverPause=false;
    },{passive:false});
  }

  // Desktop master pages: mobile structure adapted to a wide screen.
  const masterOverlay=document.getElementById('stdMasterOverlay');
  const masterPageContent=document.getElementById('stdMasterPageContent');
  const masterPageClose=document.getElementById('stdMasterPageClose');
  const masterPageBook=document.getElementById('stdMasterPageBook');
  let activeDesktopMaster=null;
  let activeDesktopMasterTab='Профиль';

  function desktopMasterServices(master){
    return (master.cats||[]).flatMap(cat=>(SERVICE_DATA[cat]||[]).map(item=>({cat,item})));
  }
  function desktopMasterAbout(master){
    const map={
      nails:'Маникюр и педикюр. Аккуратная работа и внимание к деталям.',
      hair:'Стрижки, окрашивание, укладки и уход за волосами.',
      cosmetology:'Косметология и профессиональный уход за кожей.',
      brows:'Брови и ресницы — форма, ламинирование и уход.'
    };
    return map[master.id]||'Описание специалиста.';
  }
  function paintDesktopMasterTab(){
    const target=masterPageContent.querySelector('.std-master-tab-content');
    if(!target||!activeDesktopMaster)return;
    const master=activeDesktopMaster;
    const items=desktopMasterServices(master);
    const works=master.work||[];
    if(activeDesktopMasterTab==='Профиль'){
      target.innerHTML='<h3>О мастере</h3><p class="std-master-about-copy">'+desktopMasterAbout(master)+'</p>';
    }else if(activeDesktopMasterTab==='Услуги'){
      target.innerHTML='<section class="std-master-page-block"><h3>Услуги</h3>'+(items.length?items.map(({cat,item})=>'<div class="std-master-page-service"><strong>'+item[0]+'</strong><span>'+cat+'</span></div>').join(''):'<p class="std-master-page-empty">Пока нет данных об услугах.</p>')+'</section>';
    }else if(activeDesktopMasterTab==='Портфолио'){
      target.innerHTML='<section class="std-master-page-block"><h3>Портфолио</h3>'+(works.length?'<div class="std-master-page-works">'+works.map((src,i)=>'<button class="std-master-page-work" type="button" data-master-work="'+i+'"><img src="'+src+'" alt="'+master.name+'" loading="lazy"></button>').join('')+'</div>':'<p class="std-master-page-empty">Пока нет фото.</p>')+'</section>';
      target.querySelectorAll('[data-master-work]').forEach(btn=>btn.onclick=()=>{
        const list=works.map(src=>({src,alt:master.name}));
        openDesktopViewer(list,Number(btn.dataset.masterWork)||0,'gallery');
      });
    }else{
      target.innerHTML='<section class="std-master-page-block"><h3>Отзывы</h3><p class="std-master-page-empty">Пока нет отзывов.</p></section>';
    }
  }
  function paintDesktopMaster(master){
    masterPageContent.innerHTML='<div class="std-master-profile"><div class="std-master-avatar">'+TEAM_AVATAR+'</div><h2>'+master.name+'</h2><p>'+master.role+'</p><div class="std-master-profile-rating"><b>—</b> · Рейтинг не указан</div><div class="std-master-profile-cats">'+(master.cats||[]).map(cat=>'<span>'+cat+'</span>').join('')+'</div></div><div class="std-master-tabs">'+['Профиль','Услуги','Портфолио','Отзывы'].map(tab=>'<button type="button" data-master-tab="'+tab+'" class="'+(tab===activeDesktopMasterTab?'active':'')+'">'+tab+'</button>').join('')+'</div><div class="std-master-tab-content"></div>';
    masterPageContent.querySelectorAll('[data-master-tab]').forEach(btn=>btn.onclick=()=>{
      activeDesktopMasterTab=btn.dataset.masterTab;
      masterPageContent.querySelectorAll('[data-master-tab]').forEach(x=>x.classList.toggle('active',x===btn));
      paintDesktopMasterTab();
    });
    paintDesktopMasterTab();
  }
  function openDesktopMaster(master){
    activeDesktopMaster=master;
    activeDesktopMasterTab='Профиль';
    paintDesktopMaster(master);
    masterOverlay.classList.add('open');
    masterOverlay.scrollTop=0;
    document.body.style.overflow='hidden';
  }
  function closeDesktopMaster(){
    masterOverlay.classList.remove('open');
    activeDesktopMaster=null;
    if(!bookOverlay.classList.contains('open')&&!gallery.classList.contains('open')&&!galleryBrowser.classList.contains('open'))document.body.style.overflow='';
  }
  document.querySelectorAll('[data-desktop-master]').forEach(btn=>btn.addEventListener('click',()=>{
    const master=TEAM_MASTERS.find(item=>item.id===btn.dataset.desktopMaster);
    if(master)openDesktopMaster(master);
  }));
  masterPageClose.addEventListener('click',closeDesktopMaster);
  masterOverlay.addEventListener('click',e=>{if(e.target===masterOverlay)closeDesktopMaster()});
  masterPageBook.addEventListener('click',()=>{closeDesktopMaster();openDesktopBooking()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&masterOverlay.classList.contains('open'))closeDesktopMaster()});

  const DESKTOP_LANG_STORAGE='salon-template-language';
  const DESKTOP_I18N_ROWS=[
    ["Окрашивание волос средней длины","Միջին երկարության մազերի ներկում","Medium-length hair coloring"],
    ["Сложное мелирование","Բարդ մելիրավորում","Advanced highlights"],
    ["Сложная покраска волос с заливкой","Մազերի բարդ ներկում՝ գույնի լցմամբ","Complex hair coloring with color filling"],
    ["Привет, это описание. Оно очень необходимо для того, чтобы вы понимали, что это такое. Но это мелирование, поэтому действуйте именно вот так.","Բարև, սա ծառայության նկարագրությունն է։ Այն անհրաժեշտ է, որպեսզի հասկանաք, թե ինչ է այս ծառայությունը։ Սա մելիրավորում է, ուստի պետք է գործել հենց այսպես։","Hello, this is a description. It is important so you understand what this service is. Since this is highlighting, follow these instructions."],
    ["если ваши волосы когда-то испортились или вы обожгли их утюгом, есть специальное средство для того, чтобы выйти из этого состояния и вновь обрести хорошие, свежие, красивые волосы. Чтобы всё было хорошо, запишитесь к нам на услугу, и мы примем вас, как только вы возьмёте.","Եթե ձեր մազերը երբևէ վնասվել են կամ այրվել են արդուկից, կա հատուկ միջոց, որը կօգնի վերականգնել դրանք և վերադարձնել առողջ, թարմ ու գեղեցիկ տեսքը։ Գրանցվեք այս ծառայությանը, և մենք ձեզ կընդունենք հենց որ ամրագրեք այցը։","If your hair was damaged or burned with a straightener, there is a special treatment to help restore it and bring back a healthy, fresh, beautiful look. Book this service and we will welcome you as soon as you make an appointment."],
    ["Подробнее…","Ավելին…","Read more…"],
    ["Свернуть описание","Փակել նկարագրությունը","Show less"],
    ["5 000–10 000 ֏","5 000–10 000 ֏","5 000–10 000 ֏"],
    ["15 000 ₽","15 000 ₽","15 000 ₽"],
    ["от 6 000 ₽","սկսած 6 000 ₽","from 6 000 ₽"],
    ['Услуги','Ծառայություններ','Services'],['Наши работы','Մեր աշխատանքները','Our work'],['О нас','Մեր մասին','About us'],
    ['Отзывы','Կարծիքներ','Reviews'],['Контакты','Կոնտակտներ','Contacts'],['Салон красоты','Գեղեցկության սրահ','Beauty salon'],
    ['Салон красоты в самом сердце Города.','Գեղեցկության սրահ Քաղաքի սրտում։','A beauty salon in the heart of City.'],['Листайте вниз','Սահեցրեք ներքև','Scroll down'],['Город,','Քաղաք,','City,'],['Адрес салона','Սրահի հասցե','Адрес салона'],
    ['Записаться','Ամրագրել','Book now'],['Записаться →','Ամրագրել →','Book now →'],['Записаться онлайн','Ամրագրել առցանց','Book online'],['Смотреть работы','Դիտել աշխատանքները','View our work'],
    ['Портфолио','Պորտֆոլիո','Portfolio'],['Вдохновляйтесь реальными результатами наших мастеров и выбирайте свой идеальный образ.','Ոգեշնչվեք մեր մասնագետների իրական աշխատանքներով և ընտրեք ձեր կերպարը։','Explore real results from our specialists and choose your look.'],['Открыть галерею','Բացել պատկերասրահը','Open gallery'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],['Колесо или двойной клик — увеличить','Մեծացնելու համար օգտագործեք անիվը կամ կրկնակի սեղմումը','Use the wheel or double-click to zoom'],['Галерея','Պատկերասրահ','Gallery'],
    ['Ногти','Եղունգներ','Nails'],['Волосы','Մազեր','Hair'],['Брови и ресницы','Հոնքեր և թարթիչներ','Brows & lashes'],
    ['Косметология','Կոսմետոլոգիա','Cosmetology'],['Эпиляция','Էպիլյացիա','Hair removal'],['Макияж','Դիմահարդարում','Makeup'],
    ['Массаж','Մերսում','Massage'],['Другое','Այլ','Other'],['Все','Բոլորը','All'],
    ['Услуги и цены','Ծառայություններ և գներ','Services & prices'],['Выберите услугу','Ընտրեք ծառայությունը','Choose a service'],
    ['Все услуги собраны по направлениям. Выберите подходящую процедуру — запись откроется сразу, без лишних шагов.','Աջ կողմում ընտրեք ուղղությունը, ապա անհրաժեշտ ծառայությունը։ Դրանից հետո կբացվի սրահի հետ կապվելու հարմար տարբերակը։','Choose a category on the right, then select a service. You can then contact the salon in the way that suits you.'],
    ['Как записаться','Ինչպես ամրագրվել','How to book'],['Быстрая запись','Արագ ամրագրում','Quick booking'],['Записаться','Ամրագրել','Book'],['Категория','Բաժին','Category'],['Услуга','Ծառայություն','Service'],['Связь с салоном','Կապ սրահի հետ','Contact the salon'],
    ['Выберите направление и нужную процедуру. Запись открывается в отдельной плашке, а все услуги собраны в одной понятной структуре.','Ընտրեք ուղղությունն ու անհրաժեշտ ծառայությունը։ Բոլոր ծառայությունները հավաքված են մեկ պարզ կառուցվածքում։','Choose a category and service. Everything is organized in one clear structure.'],['Выберите направление и нужную процедуру. Нажмите на услугу, чтобы выбрать удобный способ записи.','Ընտրեք ուղղությունն ու անհրաժեշտ ծառայությունը։ Սեղմեք ծառայության վրա՝ ամրագրման հարմար տարբերակ ընտրելու համար։','Choose a category and service. Select a service to choose a convenient booking method.'],
    ['Свернуть','Փակել ցանկը','Show less'],['Свернуть услуги','Փակել ծառայությունները','Collapse services'],['Открыть ещё','Բացել ևս','Show'],['О салоне','Սրահի մասին','About the salon'],
    ['SALON NAME — салон красоты в городе.','SALON NAME — գեղեցկության սրահ Քաղաքում։','SALON NAME — a beauty salon in City.'],
    ['Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений. Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և ձեր խնամքը վստահել տարբեր ուղղությունների մասնագետների։ Մենք կարևորում ենք կոկիկ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Here you can comfortably choose the services you need and trust your care to specialists in different fields. We value precise work, comfort and attentive service for every guest.'],
    ['Несколько направлений в одном салоне','Մի քանի ուղղություն մեկ սրահում','Several services in one salon'],
    ['Комфортная атмосфера','Հարմարավետ մթնոլորտ','Comfortable atmosphere'],['Индивидуальный подход','Անհատական մոտեցում','Personal approach'],
    ['Наша команда','Մեր թիմը','Our team'],['Наша команда','SALON NAME-ի մասնագետները','SALON NAME specialists'],
    ['Нажмите на мастера, чтобы открыть отдельную страницу специалиста.','Ընտրեք մասնագետին՝ նրա էջը բացելու համար։','Select a specialist to open their profile.'],
    ['Nail-мастер','Մատնահարդարման վարպետ','Nail specialist'],['Парикмахер','Վարսահարդար','Hair stylist'],['Косметолог','Կոսմետոլոգ','Cosmetologist'],
    ['Brow & Lash-мастер','Հոնքերի և թարթիչների վարպետ','Brow & lash specialist'],
    ['Маникюр · педикюр','Մատնահարդարում · ոտնահարդարում','Manicure · pedicure'],['Волосы · укладки','Մազեր · հարդարում','Hair · styling'],
    ['Что говорят о нас','Ինչ են ասում մեր մասին','What clients say about us'],['Отзывы клиентов','Հաճախորդների կարծիքներ','Client reviews'],['Подробнее →','Ավելին →','Read more →'],['рейтинг салона','սրահի վարկանիշ','salon rating'],
    ['Смотреть все отзывы →','Դիտել բոլոր կարծիքները →','View all reviews →'],['Ждём вас','Սպասում ենք ձեզ','We look forward to seeing you'],['Город, Адрес салона','Քաղաք, Սրահի հասցե','City, salon address'],
    ['Открыть карту','Բացել քարտեզը','Open map'],
    ['Нажмите, чтобы позвонить','Սեղմեք զանգահարելու համար','Click to call'],['Написать в салон','Գրել սրահին','Message the salon'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],['Уточняется','Կավելացվի','To be added'],
    ['Цифровой офис для салонов красоты','Թվային գրասենյակ գեղեցկության սրահների համար','Digital office for beauty salons'],['Создано в','Ստեղծված է','Created in'],['Позвонить','Զանգահարել','Call'],['Построить маршрут','Կառուցել երթուղի','Get directions'],['Всё необходимое для комфортного визита','Ամեն ինչ հարմարավետ այցի համար','Everything for a comfortable visit'],['Салон красоты в городе','Գեղեցկության սրահ Քաղաքում','Beauty salon in City'],['Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений. Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և վստահել խնամքը տարբեր ուղղությունների մասնագետներին։ Մենք կարևորում ենք ճշգրիտ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Choose the services you need and trust your care to specialists across different beauty fields. We value precise work, comfort, and attentive service for every guest.'],['Маникюр, волосы, брови и косметология.','Մատնահարդարում, մազեր, հոնքեր և կոսմետոլոգիա։','Nails, hair, brows and cosmetology.'],['Спокойная атмосфера и внимание к каждому гостю.','Հանգիստ մթնոլորտ և ուշադրություն յուրաքանչյուր հյուրի նկատմամբ։','A calm atmosphere and personal attention.'],['Контакты будут добавлены при заполнении шаблона.','Կոնտակտները կավելացվեն ձևանմուշը լրացնելիս։','Contact details will be added when the template is completed.'],['Разные направления','Տարբեր ուղղություններ','Different services'],['Комфорт','Հարմարավետություն','Comfort'],['Прямая запись','Ուղիղ ամրագրում','Direct booking'],
    ['Запись','Ամրագրում','Booking'],['Как вам удобнее записаться?','Ինչպե՞ս է ձեզ հարմար ամրագրել։','How would you like to book?'],
    ['Выберите удобный способ связи.','Ընտրեք ձեզ հարմար կապի տարբերակը։','Choose the most convenient way to contact us.'],
    ['Телефон','Հեռախոս','Phone'],['Открыть','Բացել','Open'],['Профиль','Պրոֆիլ','Profile'],['О мастере','Մասնագետի մասին','About the specialist'],
    ['Пока нет данных об услугах.','Ծառայությունների մասին տվյալներ դեռ չկան։','No service information yet.'],
    ['Пока нет фото.','Լուսանկարներ դեռ չկան։','No photos yet.'],['Пока нет отзывов.','Կարծիքներ դեռ չկան։','No reviews yet.'],
    ['Маникюр и педикюр. Аккуратная работа и внимание к деталям.','Մատնահարդարում և ոտնահարդարում։ Կոկիկ աշխատանք և ուշադրություն մանրուքներին։','Manicure and pedicure with careful attention to detail.'],
    ['Стрижки, окрашивание, укладки и уход за волосами.','Սանրվածք, ներկում, հարդարում և մազերի խնամք։','Haircuts, coloring, styling and hair care.'],
    ['Косметология и профессиональный уход за кожей.','Կոսմետոլոգիա և մասնագիտական մաշկի խնամք։','Cosmetology and professional skin care.'],
    ['Брови и ресницы — форма, ламинирование и уход.','Հոնքեր և թարթիչներ՝ ձևավորում, լամինացիա և խնամք։','Brows and lashes — shaping, lamination and care.'],
    ['Педикюр','Ոտնահարդարում','Pedicure'],['Наращивание ногтей','Եղունգների երկարացում','Nail extensions'],
    ['Маникюр + покрытие гель-лак','Մատնահարդարում + գել-լաք','Manicure + gel polish'],['Маникюр + покрытие лак','Մատնահարդարում + լաք','Manicure + nail polish'],
    ['Парафинотерапия для рук','Ձեռքերի պարաֆինաթերապիա','Paraffin hand treatment'],['Маникюр','Մատնահարդարում','Manicure'],
    ['Свадебные прически','Հարսանեկան սանրվածքներ','Bridal hairstyles'],['Укладка волос','Մազերի հարդարում','Hair styling'],
    ['Стрижка волос','Մազերի կտրում','Haircut'],['Окрашивание волос','Մազերի ներկում','Hair coloring'],['Уход за волосами','Մազերի խնամք','Hair care'],
    ['Спа-процедура для волос','ՍՊԱ խնամք մազերի համար','Hair spa treatment'],['Косы','Հյուսքեր','Braids'],['Наращивание волос','Մազերի երկարացում','Hair extensions'],
    ['Процедуры для бровей','Հոնքերի խնամքի ծառայություններ','Brow treatments'],['Тридинг бровей','Հոնքերի թրիդինգ','Brow threading'],
    ['Коррекция формы бровей','Հոնքերի ձևի շտկում','Brow shaping'],['Ламинирование бровей','Հոնքերի լամինացիա','Brow lamination'],
    ['Ламинирование ресниц','Թարթիչների լամինացիա','Lash lamination'],['Наращивание ресниц','Թարթիչների երկարացում','Eyelash extensions'],
    ['Карбокси-терапия','Կարբոքսիթերապիա','Carboxytherapy'],['Ультразвуковая чистка лица','Դեմքի ուլտրաձայնային մաքրում','Ultrasonic facial cleansing'],
    ['Удаление волос нитью','Մազահեռացում թելով','Threading hair removal'],['Шугаринг','Շուգարինգ','Sugaring'],
    ['Электроэпиляция игловая','Ասեղային էլեկտրոէպիլյացիա','Needle electrolysis'],['Восковая эпиляция','Մոմային էպիլյացիա','Waxing'],
    ['Прокалывание ушей','Ականջների ծակում','Ear piercing'],
    ['Открыто','Բաց է','Open'],['Закрыто','Փակ է','Closed'],['Уточняется','Կավելացվի','To be added'],['Уточняется','Կավելացվի','To be added'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],['График работы','Աշխատանքային ժամեր','Opening hours']
  ];
  const desktopLangIndex={ru:0,hy:1,en:2};
  const desktopDirect={};
  DESKTOP_I18N_ROWS.forEach(row=>desktopDirect[row[0]]=row);

  function desktopDetectLanguage(){
    try{
      const saved=localStorage.getItem(DESKTOP_LANG_STORAGE);
      if(/^(hy|ru|en)$/.test(saved||''))return saved;
    }catch(_){}
    return 'en';
  }
  let currentDesktopLang=desktopDetectLanguage();

  function desktopDynamicTranslation(source,lang){
    const genericService=source.match(/^Услуга (\d+)$/);
    if(genericService)return lang==='hy'?'Ծառայություն '+genericService[1]:lang==='en'?'Service '+genericService[1]:source;
    let m=source.match(/^Показать ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m)return lang==='hy'?'Ցույց տալ ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Открыть ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m)return lang==='hy'?'Բացել ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Все категории · (\d+) позиций$/);
    if(m)return lang==='hy'?'Բոլոր բաժինները · '+m[1]+' ծառայություն':lang==='en'?'All categories · '+m[1]+' services':source;
    m=source.match(/^(.+) · (\d+) (?:услугу|услуги|услуг)$/);
    if(m){
      const row=desktopDirect[m[1]],cat=row?row[desktopLangIndex[lang]]:m[1];
      return lang==='hy'?cat+' · '+m[2]+' ծառայություն':lang==='en'?cat+' · '+m[2]+' services':source;
    }
    return null;
  }
  function desktopTrText(source,lang=currentDesktopLang){
    const row=desktopDirect[source];
    if(row)return row[desktopLangIndex[lang]];
    const dyn=desktopDynamicTranslation(source,lang);
    return dyn===null?source:dyn;
  }
  function desktopCanTranslate(source){return !!desktopDirect[source]||desktopDynamicTranslation(source,'ru')!==null}
  function desktopSkipText(node){
    const el=node.parentElement;
    if(!el)return true;
    if(el.closest('.std-lang-switch,.std-review-text'))return true;
    return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName);
  }
  function translateDesktopTree(scope,lang=currentDesktopLang){
    if(!scope)return;
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(desktopSkipText(node))return;
      const raw=node.nodeValue||'',trimmed=raw.trim();
      if(!trimmed)return;
      let canonical=node.__desktopI18nCanonical;
      if(!canonical&&desktopCanTranslate(trimmed)){
        canonical=trimmed;
        node.__desktopI18nCanonical=canonical;
      }
      if(!canonical)return;
      const leading=(raw.match(/^\s*/)||[''])[0],trailing=(raw.match(/\s*$/)||[''])[0];
      node.nodeValue=leading+desktopTrText(canonical,lang)+trailing;
    });
  }
  function updateDesktopLangSwitcher(){
    root.querySelectorAll('.std-lang-switch [data-desktop-lang]').forEach(btn=>{
      const active=btn.dataset.desktopLang===currentDesktopLang;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }
  function applyDesktopLanguage(){
    translateDesktopTree(root,currentDesktopLang);
    root.querySelectorAll('[data-demo-title]').forEach(btn=>btn.setAttribute('aria-label',desktopTrText('Записаться',currentDesktopLang)+': '+desktopTrText(btn.dataset.demoTitle,currentDesktopLang)));
    updateDesktopLangSwitcher();
    document.documentElement.lang=currentDesktopLang;
    document.documentElement.dir='ltr';
    document.body.dataset.brLang=currentDesktopLang;
    window.dispatchEvent(new CustomEvent('salon-template:languagechange',{detail:{lang:currentDesktopLang}}));

    if(currentDesktopLang==='hy'){
      const team=root.querySelector('#salonDesktopTeam');
      const teamKicker=team?.querySelector('.std-team-kicker');
      const teamSubtitle=team?.querySelector('.std-team-subtitle');
      if(teamKicker)teamKicker.textContent='Salon team';
      if(teamSubtitle)teamSubtitle.textContent='Choose a specialist to open their profile.';
      const teamEnglish={
        nails:{name:'Nail Master',role:'Manicure · Pedicure',cat:'Nails'},
        hair:{name:'Hairdresser',role:'Hair · Styling',cat:'Hair'},
        cosmetology:{name:'Cosmetologist',role:'Cosmetology',cat:'Cosmetology'},
        brows:{name:'Brow & Lash Master',role:'Brows · Lashes',cat:'Brows & Lashes'}
      };
      root.querySelectorAll('#salonDesktopTeam [data-desktop-master]').forEach(card=>{
        const data=teamEnglish[card.dataset.desktopMaster];
        if(!data)return;
        const name=card.querySelector('.std-master-name'),role=card.querySelector('.std-master-role'),cat=card.querySelector('.std-master-cat');
        if(name)name.textContent=data.name;
        if(role)role.textContent=data.role;
        if(cat)cat.textContent=data.cat;
      });
    }

    const titles={ru:'SALON NAME — Город',hy:'SALON NAME — Քաղաք',en:'SALON NAME — City'};
    document.title=titles[currentDesktopLang]||titles.hy;
  }
  root.querySelectorAll('.std-lang-switch [data-desktop-lang]').forEach(btn=>btn.addEventListener('click',()=>{
    currentDesktopLang=btn.dataset.desktopLang;
    try{localStorage.setItem(DESKTOP_LANG_STORAGE,currentDesktopLang)}catch(_){}
    applyDesktopLanguage();
  }));
  const desktopLangObserver=new MutationObserver(records=>{
    records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE)translateDesktopTree(node.parentElement,currentDesktopLang);
      else if(node.nodeType===Node.ELEMENT_NODE)translateDesktopTree(node,currentDesktopLang);
    }));
  });
  desktopLangObserver.observe(root,{childList:true,subtree:true});
  applyDesktopLanguage();
  desktopServiceLanguageReady=true;

  const revealSections=[...root.querySelectorAll('.std-portfolio,.mct-prices,.mct-about,.std-reviews,.std-contact')];
  revealSections.forEach(el=>el.classList.add('std-section-reveal'));
  if('IntersectionObserver' in window){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view','is-visible');
          if(entry.target.id==='salonDesktopAbout')entry.target.querySelector('#salonDesktopTeam')?.classList.add('in-view','is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.09,rootMargin:'0px 0px -5% 0px'});
    revealSections.forEach(el=>revealObserver.observe(el));
  }else{
    revealSections.forEach(el=>{
      el.classList.add('in-view','is-visible');
      if(el.id==='salonDesktopAbout')el.querySelector('#salonDesktopTeam')?.classList.add('in-view','is-visible');
    });
  }

  function updateStatus(){
    const main=document.getElementById('stdStatusMain'),sub=document.getElementById('stdStatusSub');
    if(main){main.textContent='График';main.className='std-status-main';main.style.color=''}
    if(sub)sub.textContent='Уточняется';
    const stickyStatus=document.getElementById('stdStickyServiceStatus'),stickyStatusSub=document.getElementById('stdStickyServiceStatusSub'),stickyCard=document.getElementById('stdStickyServiceCard');
    if(stickyStatus)stickyStatus.textContent='График';
    if(stickyStatusSub)stickyStatusSub.textContent='Уточняется';
    if(stickyCard)stickyCard.classList.remove('is-open','is-closed');
    const contactStatus=document.getElementById('stdContactStatus'),contactStatusText=document.getElementById('stdContactStatusText');
    if(contactStatus)contactStatus.classList.remove('open','closed');
    if(contactStatusText)contactStatusText.textContent='График работы';
  }
  updateStatus();
})();

/* salon-template-desktop-cold-neutral-20260924 */
(function(){if(document.getElementById('salon-template-desktop-cold-neutral-20260924'))return;const style=document.createElement('style');style.id='salon-template-desktop-cold-neutral-20260924';style.textContent="\n@media(min-width:1024px){\n#salon-desktop-v1{--purple:#181818!important;--purple2:#303030!important;background:#fafaf9!important;color:#181818!important}\n#salon-desktop-v1 .std-header{background:#f5f5f3!important;border-bottom:1px solid rgba(24,24,24,.06)!important}\n#salon-desktop-v1 .std-header-book,#salon-desktop-v1 .std-btn-primary,#salon-desktop-v1 .dct-service-sticky-book{background:#181818!important;border-color:#181818!important;color:#fff!important;box-shadow:none!important}\n#salon-desktop-v1 .std-btn:not(.std-btn-primary){background:#e8e8e6!important;border-color:#d2d2cf!important;color:#181818!important}\n#salon-desktop-v1 .std-sparkles{color:#454545!important}\n#salon-desktop-v1 .std-status-main.open{color:#2f7d46!important}#salon-desktop-v1 .std-status-main.closed{color:#c54b55!important}\n#salonDesktopPortfolio{background:#fafaf9!important;color:#181818!important}\n#salon-desktop-v1 .std-gallery-browser,#salon-desktop-v1 .std-gallery-browser-shell{background:#f2f2f0!important;color:#181818!important}\n#salon-desktop-v1 .std-gallery-browser-tab.active{background:#181818!important;border-color:#181818!important;color:#fff!important}\n#salonDesktopReviews{background:#f2f2f0!important;color:#181818!important}\n#salonDesktopReviews .std-review-card{background:#fafafa!important;border-color:rgba(24,24,24,.12)!important}\n#salonDesktopReviews .std-review-avatar{background:#dededc!important;color:#404040!important}\n#salonDesktopReviews .std-reviews-stars,#salonDesktopReviews .std-review-stars{color:#E4AD35!important;-webkit-text-stroke:.2px #D99D1E!important}\n#salonDesktopServices.mct-prices,#salonDesktopContacts.std-contact{background:#242424!important;color:#f7f7f6!important}\n#salonDesktopServices .mct-tab.is-active{background:#EDE1D6!important;border-color:#CDB8A5!important;color:#49362D!important}\n#salonDesktopServices .dct-service-sticky-card{background:#EEE4DA!important;border-color:#D6C3B2!important;color:#49362D!important}\n#salonDesktopServices .dct-service-sticky-work{border-color:rgba(113,91,83,.38)!important;background:#efe7e1!important;color:#2f2926!important}\n#salonDesktopContacts .std-contact-card{background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.13)!important}\n#salonDesktopContacts .std-contact-status.open{background:#203b2a!important;border-color:#315b40!important;color:#8fd0a1!important}\n#salonDesktopContacts .std-contact-status.closed{background:#46292e!important;border-color:#63383f!important;color:#ef9ea7!important}\n#salonDesktopContacts .std-contact-map{background:#333!important;border-color:rgba(255,255,255,.10)!important}\n#salonDesktopContacts .std-contact-brand{background:#181818!important}\n#salonDesktopAbout .mct-about-card{box-shadow:0 26px 58px rgba(0,0,0,.10)!important}\nbody[data-br-lang=\"en\"] #salon-desktop-v1 .std-nav{width:min(46vw,690px)!important;justify-content:space-between!important;gap:0!important}\n\n/* Approved salon-template desktop synchronisation inside the existing neutral theme. */\n#salonDesktopTop.std-hero{background:radial-gradient(ellipse 185px 610px at -1% 43%,rgba(83,57,45,.24) 0%,rgba(105,74,58,.15) 25%,rgba(133,96,76,.065) 48%,transparent 76%),radial-gradient(ellipse 360px 640px at 101% 70%,rgba(119,84,67,.105) 0%,rgba(151,112,91,.045) 34%,transparent 76%),radial-gradient(ellipse 720px 500px at 35% 45%,rgba(255,255,255,.52) 0%,rgba(255,255,255,.22) 48%,transparent 78%),linear-gradient(102deg,#f3ebe3 0%,#f4eee7 47%,#eee3da 100%)!important;border-bottom:0!important;box-shadow:inset 0 0 90px rgba(83,57,45,.035)!important}\n#salonDesktopTop .std-hero-copy{background:transparent!important}\n#salonDesktopTop .std-hero-frame:before,#salonDesktopTop .std-hero-frame:after{border-color:rgba(24,24,24,.12)!important}\n#salonDesktopTop .std-tagline{color:#575757!important}\n#salonDesktopTop .std-hero-copy:after{color:#575757!important;background:linear-gradient(#575757,#575757) left 9px/38px 1px no-repeat!important}\n#salonDesktopTop .std-tagline,#salonDesktopTop .std-meta,#salonDesktopTop .std-actions{transform:translateY(24px)!important}\n#salonDesktopTop.std-hero,#salonDesktopTop .std-hero-photo,#salonDesktopTop .std-hero-photo:before,#salonDesktopTop .std-hero-photo:after,#salonDesktopTop .std-hero-copy,#salonDesktopTop .std-hero-copy:before,#salonDesktopTop .std-hero-frame,#salonDesktopTop .std-copy-inner,#salonDesktopTop .std-btn{box-shadow:none!important}\n#salonDesktopTop .std-meta-icon{background:rgba(24,24,24,.035)!important;border-color:rgba(24,24,24,.12)!important}\n#salonDesktopTop .std-btn-primary:hover,#salonDesktopServices .dct-service-sticky-book:hover{background:#654f48!important;border-color:#654f48!important;color:#fff!important}\n#salonDesktopTop .std-btn-primary{background:#715b53!important;border-color:#715b53!important;color:#fff!important;box-shadow:0 12px 28px rgba(74,53,45,.20)!important}\n#salonDesktopTop .std-btn:not(.std-btn-primary),#salonDesktopPortfolio .std-portfolio-more{background:#efe7e1!important;border-color:rgba(113,91,83,.38)!important;color:#2f2926!important}\n#salonDesktopPortfolio .std-portfolio-more:active{transform:translateY(2px) scale(.988)!important;background:#DDC9B8!important;box-shadow:0 2px 9px rgba(74,53,45,.14)!important}\n#salonDesktopPortfolio .std-portfolio-more{backdrop-filter:blur(9px)!important;-webkit-backdrop-filter:blur(9px)!important}\n#salon-desktop-v1 .std-header{background:rgba(239,230,221,.92)!important;border-bottom:1px solid rgba(103,82,70,.10)!important;box-shadow:0 7px 24px rgba(73,55,46,.035)!important}\n#salon-desktop-v1 .std-header-book{background:#715b53!important;border:0!important;color:#fff!important;border-radius:8px!important;box-shadow:0 10px 24px rgba(74,53,45,.18)!important}\n#stdGalleryBrowser.std-gallery-browser,#stdGalleryBrowser .std-gallery-browser-shell{background:#f7f2eb!important;color:#171513!important}\n#stdGalleryBrowser .std-gallery-browser-title strong,#stdGalleryBrowser .std-gallery-browser-back{color:#171513!important}\n#stdGalleryBrowser .std-gallery-browser-title span{color:#746c66!important}\n#salonDesktopTop .std-btn:not(.std-btn-primary),#salonDesktopPortfolio .std-portfolio-more{transition:background .32s ease,border-color .32s ease,color .32s ease,transform .22s ease,box-shadow .32s ease!important}\n#salonDesktopTop .std-btn:not(.std-btn-primary):hover,#salonDesktopPortfolio .std-portfolio-more:hover{background:#ccb39e!important;color:#342820!important;border-color:#b69880!important;box-shadow:0 12px 24px rgba(74,53,45,.12)!important}\n#salonDesktopTeam.br-team-panel,#salonDesktopTeam.std-team{background:#242424!important}\n#salonDesktopTeam .std-team-inner{background:transparent!important}\n#salonDesktopTop .std-btn-primary:active{transform:translateY(1px) scale(.992)!important;background:#654f48!important}\n#salonDesktopTop .std-btn:not(.std-btn-primary):active,#salonDesktopPortfolio .std-portfolio-more:active{transform:translateY(2px) scale(.988)!important;background:#715b53!important;color:#fff!important;border-color:#715b53!important}\n#salonDesktopAbout .mct-about-card{background:#eee7df!important;border-color:rgba(66,55,49,.14)!important}\n#salonDesktopAbout .br-about-column{background:#eee7df!important}\n#salonDesktopAbout .dct-about-amenities-grid article{background:linear-gradient(145deg,#e4d6cb 0%,#eadfd6 100%)!important;border-color:rgba(86,64,53,.10)!important}\n#salonDesktopTop.std-hero:before{box-shadow:none!important}\n#salonDesktopPortfolio.std-portfolio:before,#salonDesktopPortfolio.std-portfolio:after{display:none!important}\n#salonDesktopServices .mct-tabs-ribbon-wrap{background:transparent!important}\n#salonDesktopServices .mct-tabs-ribbon-wrap:before{background:linear-gradient(90deg,#242424,transparent)!important}\n#salonDesktopServices .mct-tabs-ribbon-wrap:after{background:linear-gradient(90deg,transparent,#242424)!important}\n#salonDesktopServices #stdServiceTabs .mct-tab-all,#salonDesktopServices #stdServiceTabs .mct-tab-all:not(.is-active){position:relative!important;left:auto!important;background:#242424!important;color:#EDE1D6!important;box-shadow:none!important}\n#salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected=\"true\"],#salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected=\"true\"]{background:#EDE1D6!important;border-color:#CDB8A5!important;color:#49362D!important;box-shadow:none!important}\n#salonDesktopServices .mct-tabs-ribbon-wrap{background:#242424!important;border:0!important;box-shadow:none!important}\n#salonDesktopServices .mct-tabs{background:#242424!important;scrollbar-width:none!important}\n#salonDesktopServices .mct-tabs::-webkit-scrollbar{display:none!important}\n#salonDesktopPortfolio.std-portfolio:before,#salonDesktopPortfolio.std-portfolio:after{display:none!important}\n#salonDesktopTop.std-hero:after{display:none!important}\n\n#salonDesktopServices .dct-service-sticky-work:hover{background:#454545!important;color:#fff!important;border-color:#454545!important}\n#salonDesktopTop .std-btn:not(.std-btn-primary):hover,#salonDesktopPortfolio .std-portfolio-more:hover{background:#ccb39e!important;color:#342820!important;border-color:#b69880!important;box-shadow:0 12px 24px rgba(74,53,45,.12)!important}\n#salonDesktopTop .std-btn:not(.std-btn-primary):active,#salonDesktopPortfolio .std-portfolio-more:active{transform:translateY(1px) scale(.992)!important;background:#a98a74!important;color:#fff!important;border-color:#a98a74!important;box-shadow:0 4px 13px rgba(74,53,45,.15)!important}\n#salonDesktopPortfolio.std-portfolio{background:radial-gradient(620px 430px at -8% 96%,rgba(176,145,128,.10) 0%,transparent 70%),radial-gradient(620px 420px at 108% 2%,rgba(190,159,142,.08) 0%,transparent 70%),linear-gradient(180deg,#f0e8e1 0%,#f4ede7 34%,#f7f2ed 100%)!important;border:0!important;margin-top:0!important;box-shadow:inset 0 26px 52px -50px rgba(69,49,41,.28),inset 0 -32px 62px -58px rgba(69,49,41,.20)!important}\n#salonDesktopPortfolio.std-portfolio:before,#salonDesktopPortfolio.std-portfolio:after{border-color:rgba(24,24,24,.06)!important}\n#salon-desktop-v1 .std-gallery-browser-tabs{background:transparent!important;gap:11px!important;overflow:visible!important;padding:8px 10px 12px!important;margin-top:19px!important}\n#salon-desktop-v1 .std-gallery-browser-tab{min-width:116px!important;height:46px!important;padding:0 25px!important;border:1px solid rgba(72,57,49,.17)!important;background:#e7ddd4!important;color:#4f4540!important;box-shadow:0 5px 14px rgba(65,48,41,.045)!important;transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important}\n#salon-desktop-v1 .std-gallery-browser-tab.active{background:#302825!important;border-color:#302825!important;color:#fff!important;box-shadow:0 8px 18px rgba(48,40,37,.14)!important}\n#salon-desktop-v1 .std-gallery-browser-tab:hover{background:#ded0c5!important;box-shadow:0 9px 20px rgba(65,48,41,.08)!important;transform:translateY(-2px)!important}\n#salon-desktop-v1 .std-gallery-browser-tab.active:hover{background:#302825!important}\n#salonDesktopServices .dct-service-sticky-card{background:radial-gradient(330px 230px at 100% 0%,rgba(255,255,255,.78),transparent 72%),linear-gradient(145deg,#f7f2eb 0%,#eaded4 100%)!important;border-color:rgba(66,55,49,.14)!important;color:#2f2926!important;box-shadow:0 28px 70px rgba(9,7,6,.25),0 0 46px rgba(190,145,121,.11)!important}\n#salonDesktopServices .dct-service-sticky-card>strong,#salonDesktopServices .dct-service-sticky-card p,#salonDesktopServices .dct-service-sticky-card span:not(.std-status-main):not(.std-status-sub){color:#49362D!important}\n#salonDesktopServices .dct-service-sticky-book{background:#715b53!important;color:#fff!important}\n#salonDesktopServices .dct-service-sticky-book span{color:#fff!important}\n#salonDesktopServices .dct-service-sticky-work{background:#e8e8e6!important;color:#181818!important;border-color:rgba(24,24,24,.15)!important}\n#salonDesktopServices .dct-service-card-meta{justify-content:center!important;text-align:center!important}\n#salonDesktopServices .dct-service-card-meta>b{display:block!important;width:100%!important;text-align:center!important}\n#salonDesktopServices .dct-service-card-meta>b.is-price,#salonDesktopServices .dct-service-card-variant-meta>b.is-price{color:#181818!important;background:#f7f2eb!important;border-color:rgba(255,255,255,.92)!important;justify-content:center!important;text-align:center!important}\n#salonDesktopServices .dct-service-card-meta>b.is-book,#salonDesktopServices .dct-service-card-variant-meta>b.is-book{color:#fff!important;background:transparent!important;border-color:transparent!important;box-shadow:none!important;justify-content:center!important;text-align:center!important}\n#salonDesktopServices .dct-service-card-meta>b.is-price:before,#salonDesktopServices .dct-service-card-variant-meta>b.is-price:before,#salonDesktopServices .dct-service-card-meta>b.is-book:before,#salonDesktopServices .dct-service-card-variant-meta>b.is-book:before{display:none!important;content:none!important;animation:none!important;box-shadow:none!important}\n#salonDesktopServices .dct-service-card:hover .dct-service-card-meta>b.is-book,#salonDesktopServices .dct-service-card:hover .dct-service-card-variant-meta>b.is-book{transform:none!important;background:transparent!important;box-shadow:none!important}\n#salonDesktopServices .dct-service-duration{display:inline-flex!important;align-items:center!important;min-height:30px!important;margin-top:12px!important;padding:0 12px!important;border-radius:999px!important;background:rgba(255,255,255,.13)!important;border:1px solid rgba(255,255,255,.1)!important;color:#e6e6e6!important;font:600 15px/1 Manrope,Arial,sans-serif!important;align-self:flex-start!important}\n#salonDesktopReviews.std-reviews{background:#e9e2da!important;color:#171513!important}\n#salonDesktopReviews .std-reviews-all{background:rgba(255,255,255,.18)!important;border:1px solid rgba(66,55,49,.18)!important;color:#242327!important}\n#salonDesktopReviews .std-review-avatar{background:#d7cec6!important;border-color:rgba(66,55,49,.10)!important;color:#514943!important}\n#salonDesktopReviews .std-review-name{color:#2a2522!important}\n#salonDesktopReviews .std-review-text{color:#4f4843!important}\n#salonDesktopReviews .std-reviews-count{color:#716862!important}\n#salonDesktopReviews .std-reviews-kicker{color:#746c66!important}\n#salonDesktopReviews .std-review-card{background:rgba(255,255,255,.34)!important;border:1px solid rgba(66,55,49,.15)!important;box-shadow:none!important}\n#salonDesktopAbout .mct-about-portrait{overflow:hidden!important}\n#salonDesktopAbout .mct-about-portrait img{height:calc(100% + 1cm)!important;max-height:none!important;transform:translateY(-1cm)!important;object-position:center 38%!important;transition:none!important}\n#salonDesktopAbout .br-about-column:hover,#salonDesktopAbout .mct-about-card:hover,#salonDesktopAbout .dct-about-amenities-grid article:hover{transform:none!important}\n#salonDesktopAbout .br-about-column:hover .mct-about-portrait img{transform:translateY(-1cm)!important}\n\n#salonDesktopTop .std-hero-copy:before{background:radial-gradient(ellipse 34px 76px at 34% 13%,rgba(52,52,52,.9) 0 54%,transparent 58%),radial-gradient(ellipse 32px 70px at 69% 24%,rgba(70,70,70,.84) 0 54%,transparent 58%),radial-gradient(ellipse 36px 78px at 26% 39%,rgba(54,54,54,.8) 0 54%,transparent 58%),radial-gradient(ellipse 31px 72px at 72% 50%,rgba(72,72,72,.77) 0 54%,transparent 58%),radial-gradient(ellipse 37px 82px at 30% 65%,rgba(57,57,57,.72) 0 54%,transparent 58%),radial-gradient(ellipse 32px 74px at 69% 78%,rgba(65,65,65,.68) 0 54%,transparent 58%),linear-gradient(79deg,transparent 46%,rgba(65,65,65,.62) 47% 49%,transparent 50%)!important;opacity:.23!important;filter:blur(8px)!important}\n#salon-desktop-v1 .std-header-book:hover{background:#654f48!important;border-color:#654f48!important;box-shadow:0 12px 28px rgba(74,53,45,.24)!important}\n#salonDesktopContacts .std-contact-bottom,#salonDesktopContacts .std-contact-brand,#salonDesktopContacts .br-tanem-mark{background:#181818!important}\n#salonDesktopContacts .br-tanem-mark{border-color:rgba(255,255,255,.25)!important}\n\n}\n/* Desktop-only salon-template polish: preserve mobile service chooser. */\n@media(min-width:1024px){\n#salonDesktopTop.std-hero,#salonDesktopTop.std-hero:before,#salonDesktopTop.std-hero:after,\n#salonDesktopTop .std-hero-copy,#salonDesktopTop .std-hero-copy:before,#salonDesktopTop .std-hero-copy:after,\n#salonDesktopTop .std-hero-frame,#salonDesktopTop .std-hero-frame:before,#salonDesktopTop .std-hero-frame:after,\n#salonDesktopTop .std-copy-inner,#salonDesktopTop .std-hero-copy *,\n#salonDesktopTop .std-hero-copy *:before,#salonDesktopTop .std-hero-copy *:after{\n  box-shadow:none!important;text-shadow:none!important;\n}\n#salonDesktopTop .std-hero-copy:before{background:none!important;filter:none!important;opacity:0!important}\n#salonDesktopTop .std-hero-photo{box-shadow:0 30px 66px rgba(28,28,28,.18),0 9px 22px rgba(28,28,28,.10)!important}\n#salonDesktopTop .std-hero-photo:before,#salonDesktopTop .std-hero-photo:after{box-shadow:none!important}\n#salonDesktopServices #stdStickyServiceBook,\n#salonDesktopServices #stdStickyServiceBook span{color:#fff!important;-webkit-text-fill-color:#fff!important}\n#salonDesktopServices .mct-tabs{scroll-snap-type:none!important;scroll-behavior:auto!important;overflow-anchor:none!important}\n#salonDesktopServices .dct-service-groups{overflow-anchor:none!important}\n/* Esmeralda-style fixed fade lanes: present before any category scrolling. */\n#salonDesktopServices .mct-tabs-ribbon-wrap{\n  margin-left:-28px!important;\n  width:calc(100% + 28px)!important;\n  overflow:hidden!important;\n}\n#salonDesktopServices .mct-tabs{\n  padding-left:28px!important;\n  scroll-padding-left:28px!important;\n}\n#salonDesktopServices .mct-tabs-ribbon-wrap:before{\n  content:\"\"!important;position:absolute!important;left:0!important;top:0!important;\n  width:28px!important;height:58px!important;z-index:30!important;\n  background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.96) 24%,rgba(36,36,36,.68) 58%,transparent 100%)!important;\n  pointer-events:none!important;display:block!important;opacity:1!important;\n}\n#salonDesktopServices .mct-tabs-ribbon-wrap:after{\n  content:\"\"!important;position:absolute!important;right:0!important;top:0!important;\n  width:54px!important;height:58px!important;z-index:30!important;\n  background:linear-gradient(90deg,transparent,#242424 100%)!important;\n  pointer-events:none!important;display:block!important;opacity:1!important;\n}\n#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{\n  grid-template-columns:minmax(0,1fr) max-content minmax(108px,124px)!important;\n  column-gap:7px!important;align-items:center!important;\n}\n#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-duration{\n  grid-column:2!important;grid-row:1!important;justify-self:end!important;align-self:center!important;\n  width:max-content!important;max-width:82px!important;\n}\n#salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-meta>b{\n  grid-column:3!important;grid-row:1!important;justify-self:center!important;align-self:center!important;\n}\n#salonDesktopServices .dct-service-card .dct-service-duration{\n  display:inline-flex!important;align-items:center!important;justify-content:center!important;\n  width:max-content!important;min-width:0!important;min-height:23px!important;\n  margin:0!important;padding:2px 7px!important;\n  border:1px solid rgba(255,255,255,.15)!important;border-radius:999px!important;\n  background:rgba(255,255,255,.085)!important;color:#e8e8e6!important;\n  font:600 12.5px/1.1 \"Manrope\",Arial,sans-serif!important;white-space:nowrap!important;\n}\n#salonDesktopServices .dct-service-card-meta>b.is-price,\n#salonDesktopServices .dct-service-card-variant-meta>b.is-price{\n  display:inline-flex!important;align-items:center!important;justify-content:center!important;\n  width:max-content!important;min-width:0!important;min-height:30px!important;\n  padding:0 2px!important;margin:0!important;border:0!important;\n  background:transparent!important;color:#fff!important;box-shadow:none!important;\n  font:700 clamp(16px,1.35vw,19px)/1.15 \"Manrope\",Arial,sans-serif!important;\n  text-align:center!important;white-space:nowrap!important;transform:none!important;\n  justify-self:center!important;align-self:center!important;\n}\n#salonDesktopServices .dct-service-card:hover .dct-service-card-meta>b.is-price,\n#salonDesktopServices .dct-service-card:hover .dct-service-card-variant-meta>b.is-price{\n  background:transparent!important;color:#fff!important;box-shadow:none!important;transform:none!important;\n}\n#salonDesktopServices .dct-service-card-meta>b.is-price:before,\n#salonDesktopServices .dct-service-card-variant-meta>b.is-price:before{display:none!important;content:none!important}\n#stdGallery.std-gallery,#stdGalleryBrowser.std-gallery-browser{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}\n#stdGalleryBrowser.std-gallery-browser{transition:opacity .34s ease,transform .42s cubic-bezier(.16,1,.3,1),visibility .42s!important}\n#stdGalleryBrowser .std-gallery-browser-shell{transition:opacity .32s ease .06s,transform .42s cubic-bezier(.16,1,.3,1) .06s!important}\n\n/* Expandable hair-service demos; preserve the existing category and booking mechanics. */\n#salonDesktopServices .dct-service-card.is-demo-expandable{height:auto!important;min-height:104px!important}\n#salonDesktopServices .dct-service-card.is-demo-expandable .dct-service-card-body{\n  height:auto!important;min-height:84px!important;grid-template-rows:auto auto!important;align-content:center!important\n}\n#salonDesktopServices .dct-service-card.is-demo-expandable .dct-service-card-description{\n  grid-column:1!important;grid-row:2!important;min-width:0!important;width:calc(100% - 32px)!important;max-width:calc(100% - 32px)!important\n}\n#salonDesktopServices .dct-service-card.is-demo-expandable .dct-service-card-description p{\n  display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;\n  overflow:hidden!important;white-space:normal!important;overflow-wrap:anywhere!important\n}\n#salonDesktopServices .dct-service-card.is-demo-expandable.is-expanded .dct-service-card-description p{\n  display:block!important;-webkit-line-clamp:unset!important;overflow:visible!important\n}\n#salonDesktopServices .dct-service-demo-book-hit{\n  position:absolute!important;inset:0!important;z-index:2!important;\n  display:block!important;width:100%!important;height:100%!important;opacity:0!important;\n  padding:0!important;border:0!important;background:transparent!important;cursor:pointer!important\n}\n#salonDesktopServices .dct-service-demo-more{\n  position:relative!important;z-index:3!important;display:block!important;\n  margin:7px 0 0!important;padding:3px 0!important;border:0!important;\n  background:transparent!important;color:#eee0d4!important;cursor:pointer!important;\n  font:600 11.5px/1.35 \"Manrope\",Arial,sans-serif!important;\n  text-align:left!important;text-decoration:underline!important;text-underline-offset:3px!important\n}\n#salonDesktopServices .dct-service-demo-more:focus-visible{\n  outline:2px solid #eee0d4!important;outline-offset:3px!important\n}\n\n/* The same anchored time and price columns in every desktop service card. */\n #salonDesktopServices .dct-service-card:not(.has-variants){\n  position:relative!important;min-height:82px!important;\n  height:auto!important;padding:13px 18px!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants).is-demo-expandable{\n  min-height:82px!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body,\n #salonDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-body{\n  position:static!important;display:block!important;\n  min-height:54px!important;height:auto!important;\n  padding:0 284px 0 0!important;margin:0!important;\n  align-content:initial!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-title,\n #salonDesktopServices .dct-service-card.has-description.is-demo-expandable .dct-service-card-title{\n  display:block!important;min-width:0!important;max-width:100%!important;\n  width:100%!important;margin:0!important;padding:0!important;\n  align-self:auto!important;line-height:1.12!important;\n  overflow:visible!important;white-space:normal!important;\n  overflow-wrap:anywhere!important;hyphens:auto!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-duration{\n  position:absolute!important;top:var(--desktop-side-y,50%)!important;right:231px!important;\n  transform:translateY(-50%)!important;\n  display:inline-flex!important;width:58px!important;min-width:58px!important;\n  max-width:58px!important;min-height:29px!important;\n  justify-content:center!important;align-items:center!important;\n  padding:4px 4px!important;margin:0!important;\n  border:1px solid rgba(255,255,255,.15)!important;border-radius:999px!important;\n  background:rgba(255,255,255,.085)!important;color:#e8e8e6!important;\n  font:600 12px/1.15 \"Manrope\",Arial,sans-serif!important;white-space:nowrap!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-meta{\n  display:contents!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-meta>b.is-price{\n  position:absolute!important;top:var(--desktop-side-y,50%)!important;right:18px!important;\n  transform:translateY(-50%)!important;display:flex!important;\n  width:200px!important;min-width:200px!important;max-width:200px!important;min-height:37px!important;\n  margin:0!important;padding:0 2px!important;box-sizing:border-box!important;\n  border:0!important;border-radius:0!important;background:transparent!important;\n  box-shadow:none!important;color:#fff!important;\n  align-items:center!important;justify-content:center!important;text-align:center!important;\n  font:600 clamp(22px,1.85vw,26px)/1.08 \"Cormorant Garamond\",\"Manrope\",Georgia,serif!important;\n  font-variant-numeric:tabular-nums!important;\n  white-space:nowrap!important;overflow-wrap:normal!important;\n }\n #salonDesktopServices .dct-service-card.is-price-range:not(.has-variants) .dct-service-card-meta>b.is-price{\n  font-size:clamp(21px,1.7vw,24px)!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-description{\n  display:block!important;min-width:0!important;width:100%!important;\n  max-width:100%!important;margin:2px 0 0!important;padding:0!important;\n  overflow-wrap:anywhere!important;align-self:auto!important\n }\n #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-description p{\n  display:-webkit-box!important;-webkit-box-orient:vertical!important;\n  -webkit-line-clamp:2!important;overflow:hidden!important;\n  margin:0!important;line-height:1.34!important\n }\n #salonDesktopServices .dct-service-card.is-demo-expandable.is-expanded .dct-service-card-description p{\n  display:block!important;-webkit-line-clamp:unset!important;overflow:visible!important\n }\n #salonDesktopServices .dct-service-card.is-demo-expandable .dct-service-demo-more{\n  margin:3px 0 0!important;padding:2px 0!important\n }\n body[data-br-lang=\"hy\"] #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-title{\n  font-size:clamp(20px,1.75vw,27px)!important;line-height:1.17!important\n }\n}\n@media(prefers-reduced-motion:reduce){\n#stdGalleryBrowser.std-gallery-browser,#stdGalleryBrowser .std-gallery-browser-shell{transition:none!important}\n}";document.head.appendChild(style);})();
