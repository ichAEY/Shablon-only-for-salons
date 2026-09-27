

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  const PHONE='';
  const MESSENGER_URL='#tn13Visit';
  const MAP_URL='#tn13Visit';
  const REVIEWS_URL='#tn13Reviews';
  const ADDRESS='Адрес салона';
  const RATING='—';
  const RATINGS_COUNT=0;
  const services=[
  [
    "nails",
    "Услуга 01",
    "Записаться"
  ],
  [
    "brows",
    "Услуга 02",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 03",
    "Записаться"
  ],
  [
    "brows",
    "Услуга 04",
    "Записаться"
  ],
  [
    "depilation",
    "Услуга 05",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 06",
    "Записаться"
  ],
  [
    "other",
    "Услуга 07",
    "Записаться"
  ],
  [
    "depilation",
    "Услуга 08",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 09",
    "Записаться"
  ],
  [
    "depilation",
    "Услуга 10",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 11",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 12",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 13",
    "Записаться"
  ],
  [
    "nails",
    "Услуга 14",
    "Записаться"
  ],
  [
    "nails",
    "Услуга 15",
    "Записаться"
  ],
  [
    "nails",
    "Услуга 16",
    "Записаться"
  ],
  [
    "nails",
    "Услуга 17",
    "Записаться"
  ],
  [
    "face",
    "Услуга 18",
    "Записаться"
  ],
  [
    "face",
    "Услуга 19",
    "Записаться"
  ],
  [
    "depilation",
    "Услуга 20",
    "Записаться"
  ],
  [
    "brows",
    "Услуга 21",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 22",
    "Записаться"
  ],
  [
    "brows",
    "Услуга 23",
    "Записаться"
  ],
  [
    "brows",
    "Услуга 24",
    "Записаться"
  ],
  [
    "makeup",
    "Услуга 25",
    "Записаться"
  ],
  [
    "nails",
    "Услуга 26",
    "Записаться"
  ],
  [
    "massage",
    "Услуга 27",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 28",
    "Записаться"
  ],
  [
    "hair",
    "Услуга 29",
    "Записаться"
  ],
  [
    "brows",
    "Услуга 30",
    "Записаться"
  ]
];
  const works=[
    {src:'media-placeholder.svg',cat:'salon',alt:'Фото салона'},
    {src:'media-placeholder.svg',cat:'nails',alt:'Работа салона'},
    {src:'media-placeholder.svg',cat:'nails',alt:'Работа салона'},
    {src:'media-placeholder.svg',cat:'hair',alt:'Работа салона'},
    {src:'media-placeholder.svg',cat:'hair',alt:'Работа салона'},
    {src:'media-placeholder.svg',cat:'makeup',alt:'Работа салона'}
  ];
  const reviews=[
  {
    "name": "Клиент 1",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 2",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 3",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 4",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 5",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 6",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 7",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 8",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  },
  {
    "name": "Клиент 9",
    "text": "Текст отзыва клиента будет добавлен при заполнении шаблона."
  }
];
  const masters=[
  {
    "id": "master-1",
    "name": "Мастер 1",
    "category": "Специалист",
    "initial": "1",
    "about": "",
    "cats": [
      "nails"
    ]
  },
  {
    "id": "master-2",
    "name": "Мастер 2",
    "category": "Специалист",
    "initial": "2",
    "about": "",
    "cats": [
      "hair"
    ]
  },
  {
    "id": "master-3",
    "name": "Мастер 3",
    "category": "Специалист",
    "initial": "3",
    "about": "",
    "cats": [
      "face"
    ]
  }
];

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='salon-mobile-style';
  css.textContent=`
  @media(max-width:1023px){
    html,body{margin:0!important;padding:0!important;min-height:100%!important;background:#f6f1eb!important;color:#2f2926!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased!important;scrollbar-width:none}
    html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}
    body.br-app-ready>.mobile,body.br-app-ready>.desktop{display:none!important}
    #salon-mobile{--ink:#2f2926;--soft:#6e625c;--paper:#f6f1eb;--paper2:#fbf8f4;--taupe:#8b7167;--taupe-dark:#715b53;--line:rgba(65,52,47,.13);display:block;width:100%;min-height:100dvh;overflow:clip;background:var(--paper);color:var(--ink);font-family:"Manrope",Arial,sans-serif;font-weight:400}
    #salon-mobile *{box-sizing:border-box}
    #salon-mobile button,#salon-mobile a{font:inherit;-webkit-tap-highlight-color:transparent;color:inherit}
    #salon-mobile button{cursor:pointer}
    .tn13-shell{width:min(100%,520px);margin:0 auto;padding-inline:clamp(16px,4.8vw,24px)}
    .tn13-kicker{margin:0;color:#9b7d72;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}
    .tn13-display{font-family:"Cormorant Garamond",Georgia,serif}

    .tn13-intro{position:fixed;z-index:500;inset:0;display:grid;place-items:center;background:radial-gradient(circle at 50% 42%,rgba(222,203,193,.38),transparent 37%),#f8f4ef;animation:tn13Intro 1.55s cubic-bezier(.22,.78,.25,1) both;pointer-events:none}
    .tn13-intro-inner{text-align:center;color:#493c37;transform:translateY(-2vh)}
    .tn13-intro-name{font:500 clamp(54px,16vw,72px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}
    .tn13-intro-line{width:76px;height:1px;background:rgba(116,90,80,.48);margin:13px auto 10px}
    .tn13-intro-small{color:#927b72;font-size:9px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
    @keyframes tn13Intro{0%,72%{opacity:1}100%{opacity:0;visibility:hidden}}

    .tn13-hero{height:100svh;min-height:640px;background:#fff;overflow:hidden}
    .tn13-hero .tn13-shell{height:100%;display:flex;flex-direction:column;padding-bottom:max(12px,env(safe-area-inset-bottom))}
    .tn13-topbar{position:relative;z-index:40;display:flex;min-height:56px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}
    .tn13-brand{font:600 clamp(25px,7vw,31px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em;text-decoration:none}
    .tn13-menu-wrap{position:relative}
    .tn13-menu-btn{width:44px;height:44px;border:1px solid rgba(76,59,52,.1);border-radius:50%;background:rgba(255,255,255,.42);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0;backdrop-filter:blur(10px)}
    .tn13-menu-btn span{display:block;width:19px;height:1.5px;border-radius:999px;background:currentColor;transition:.24s ease}
    .tn13-menu-btn.open span:first-child{transform:translateY(6.5px) rotate(45deg)}.tn13-menu-btn.open span:nth-child(2){opacity:0}.tn13-menu-btn.open span:last-child{transform:translateY(-6.5px) rotate(-45deg)}
    .tn13-menu{position:absolute;z-index:60;top:calc(100% + 7px);right:0;width:min(74vw,270px);padding:8px 12px;border:1px solid rgba(75,56,49,.12);border-radius:18px;background:rgba(250,246,242,.97);box-shadow:0 20px 48px rgba(58,42,36,.16);backdrop-filter:blur(20px);display:none}
    .tn13-menu.open{display:grid;animation:tn13Menu .25s ease both}@keyframes tn13Menu{from{opacity:0;transform:translateY(-7px) scale(.97)}to{opacity:1;transform:none}}
    .tn13-menu a{display:flex;min-height:43px;align-items:center;gap:13px;border-bottom:1px solid rgba(75,56,49,.09);font:600 15px/1 "Cormorant Garamond",Georgia,serif;text-decoration:none}.tn13-menu a:last-child{border-bottom:0}.tn13-menu a span{color:#a48a80;font:600 8px/1 "Manrope",Arial,sans-serif;letter-spacing:.12em}

    .tn13-hero-content{padding:clamp(22px,4svh,36px) 0 0;flex:0 0 auto}
    .tn13-ticker{overflow:hidden;color:#9b7d72;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
    .tn13-ticker-track{display:flex;width:max-content;animation:tn13Ticker 24s linear infinite}.tn13-ticker-track span{padding-right:30px;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap}@keyframes tn13Ticker{to{transform:translateX(-50%)}}
    .tn13-hero h1{max-width:390px;margin:17px 0 10px;font:500 clamp(45px,14.3vw,59px)/.89 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}.tn13-hero h1 em{color:#8f7167;font-weight:500}
    .tn13-hero-copy{max-width:370px;margin:0;color:var(--soft);font-size:clamp(12px,3.45vw,13.5px);line-height:1.5}

    .tn13-visual{position:relative;flex:1 1 270px;min-height:255px;max-height:325px;margin:10px -5px 9px;overflow:visible}
    .tn13-visual-main{position:absolute;inset:3% 9% 3% 3%;border-radius:28px;overflow:hidden;background:#e8dfd7;box-shadow:0 18px 50px rgba(84,62,52,.11)}
    .tn13-visual-main img{width:100%;height:100%;object-fit:cover;display:block}
    .tn13-visual-small{position:absolute;right:0;bottom:7%;width:37%;height:44%;border:7px solid #f8f4ee;border-radius:24px;overflow:hidden;background:#ddd;box-shadow:0 12px 34px rgba(73,53,46,.15)}.tn13-visual-small img{width:100%;height:100%;object-fit:cover}
    .tn13-visual-label{position:absolute;left:5%;bottom:7%;z-index:2;padding:7px 11px;border-radius:999px;background:rgba(248,244,238,.88);backdrop-filter:blur(10px);font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#765f57}

    .tn13-hero-bottom{flex:0 0 auto;margin-top:auto}
    .tn13-hero-actions{display:flex;align-items:center;gap:14px;margin:0 0 12px}
    .tn13-main-cta{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;background:var(--taupe-dark);color:#fff!important;padding:0 20px;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.02em;border:0}
    .tn13-quiet-link{font-size:11px;color:#7b6b64;text-decoration:none;border-bottom:1px solid rgba(83,67,60,.28);padding-bottom:3px}
    .tn13-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);padding-top:11px}.tn13-stat{display:grid;gap:2px}.tn13-stat strong{font:500 22px/1 "Cormorant Garamond",Georgia,serif}.tn13-stat span{font-size:9px;color:#8b7b74;text-transform:uppercase;letter-spacing:.1em}

    .tn13-section{padding:58px 0 62px}.tn13-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:22px}.tn13-section-head h2{margin:5px 0 0;font:500 clamp(38px,11vw,48px)/.93 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-section-note{max-width:145px;margin:0;color:#8a7b74;font-size:10px;line-height:1.45;text-align:right}
    .tn13-reveal{opacity:0;transform:translateY(18px);transition:opacity .75s ease,transform .75s cubic-bezier(.22,.78,.25,1)}.tn13-reveal.visible{opacity:1;transform:none}

    .tn13-portfolio{background:#f6f1eb}
    .tn13-feature{margin:0 -7px;display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 7px}.tn13-feature::-webkit-scrollbar{display:none}.tn13-feature button{flex:0 0 86%;height:64vw;max-height:340px;border:0;padding:0;border-radius:24px;overflow:hidden;background:#e7ddd5;scroll-snap-align:center}.tn13-feature img{width:100%;height:100%;object-fit:cover}
    .tn13-work-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:16px}.tn13-work-grid button{border:0;padding:0;aspect-ratio:1/1.18;border-radius:16px;overflow:hidden;background:#e5ddd7}.tn13-work-grid img{width:100%;height:100%;object-fit:cover}
    .tn13-gallery-btn{width:100%;margin-top:13px;min-height:48px;border:1px solid var(--line);border-radius:999px;background:transparent;display:flex;align-items:center;justify-content:space-between;padding:0 17px;font-size:12px;font-weight:600;color:#66564f}

    .tn13-services{background:#2f2926;color:#f7f2ec}.tn13-services .tn13-kicker{color:#c8aa9e}.tn13-services .tn13-section-note{color:#b9a9a2}.tn13-services .tn13-section-head{margin-bottom:28px}
    .tn13-tabs{display:flex;gap:8px;overflow-x:auto;margin:0 -24px 11px;padding:0 24px;scrollbar-width:none}.tn13-tabs::-webkit-scrollbar{display:none}.tn13-tab{border:1px solid rgba(255,255,255,.18);border-radius:999px;background:transparent;color:#d8cec8!important;padding:9px 13px;white-space:nowrap;font-size:11px}.tn13-tab.active{background:#f1e7df;color:#392f2b!important;border-color:#f1e7df}
    .tn13-service-list{border-top:1px solid rgba(255,255,255,.16)}.tn13-service-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.14)}.tn13-service-name strong{display:block;font-size:13px;font-weight:500;line-height:1.35}.tn13-service-name small{display:none}.tn13-service-action{text-align:right}.tn13-service-action b{display:block;font:500 17px/1 "Cormorant Garamond",Georgia,serif}.tn13-service-action button{border:0;background:transparent;color:#d8b7aa!important;padding:6px 0 0;font-size:10.5px;border-bottom:1px solid rgba(216,183,170,.38)}
    .tn13-more{margin-top:17px;border:0;background:transparent;color:#d6c8c1!important;font-size:11px;padding:0;text-decoration:underline;text-underline-offset:5px}

    .tn13-team{background:#f3ece6}.tn13-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.tn13-master{position:relative;border:1px solid rgba(74,57,49,.1);background:rgba(255,255,255,.45);border-radius:24px;padding:16px;text-align:left;min-height:186px;overflow:hidden}.tn13-master-monogram{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;background:#e2d6cf;color:#725d55;font:500 32px/1 "Cormorant Garamond",Georgia,serif;margin-bottom:22px}.tn13-master strong{display:block;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-master span{display:block;margin-top:5px;color:#83736c;font-size:10.5px;line-height:1.35}.tn13-master-arrow{position:absolute;right:15px;top:15px;font-size:18px;color:#8f776e}

    .tn13-reviews{background:#fbf8f4}.tn13-review-summary{display:flex;align-items:end;justify-content:space-between;text-decoration:none;border-bottom:1px solid var(--line);padding:0 0 18px;margin-bottom:21px}.tn13-review-summary strong{font:500 64px/.8 "Cormorant Garamond",Georgia,serif;letter-spacing:-.05em}.tn13-review-summary span{text-align:right;color:#8c766e;font-size:10px;line-height:1.7;letter-spacing:.08em;text-transform:uppercase}.tn13-review-viewport{overflow:hidden;margin:0 -24px}.tn13-review-track{display:flex;width:max-content;gap:10px;padding:0 24px;animation:tn13Reviews 125s linear infinite}.tn13-review-track.paused{animation-play-state:paused}@keyframes tn13Reviews{to{transform:translateX(-50%)}}
    .tn13-review-card{width:286px;min-height:178px;border:1px solid rgba(74,57,49,.1);border-radius:22px;background:#f5eee8;padding:18px;text-decoration:none}.tn13-review-stars{color:#9a796c;font-size:11px;letter-spacing:2px}.tn13-review-card blockquote{margin:17px 0 18px;font:500 22px/1.05 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-review-card small{color:#8b7b74;font-size:9.5px}

    .tn13-final{background:#8b7167;color:#fff;padding:62px 0 54px}.tn13-final .tn13-kicker{color:#ead8d0}.tn13-final h2{margin:8px 0 14px;font:500 clamp(42px,12vw,53px)/.9 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-final h2 em{color:#ead9d1;font-weight:500}.tn13-final-copy{margin:0 0 25px;max-width:370px;color:#ede2dd;font-size:12px;line-height:1.55}
    .tn13-final-actions{display:grid;gap:9px}.tn13-final-cta{height:52px;border:0;border-radius:999px;background:#f8f1eb;color:#503f39!important;display:flex;align-items:center;justify-content:space-between;padding:0 18px;text-decoration:none;font-size:12px;font-weight:600}.tn13-final-secondary-row{display:grid;grid-template-columns:1fr 1fr;gap:9px}.tn13-final-secondary{height:48px;border:1px solid rgba(255,255,255,.27);border-radius:999px;display:flex;align-items:center;justify-content:center;gap:7px;text-decoration:none;color:#fff!important;font-size:11px}.tn13-final-secondary svg{width:16px;height:16px;flex:0 0 auto}.tn13-final-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.22)}.tn13-final-facts strong{display:block;font:500 20px/1 "Cormorant Garamond",Georgia,serif}.tn13-final-facts small{display:block;margin-top:4px;color:#eadad3;font-size:8.5px;text-transform:uppercase;letter-spacing:.08em}
    .tn13-map{width:100%;height:210px;border:0;border-radius:22px;margin:23px 0 0;background:#ddd;filter:saturate(.6) contrast(.95)}
    .tn13-footer{background:#2f2926;color:#d8ccc6;padding:28px 0 36px;text-align:center;font-size:10px;letter-spacing:.08em;text-transform:uppercase}.tn13-footer strong{display:block;color:#fff;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em;text-transform:none;margin-bottom:7px}

    .tn13-sticky{position:fixed;z-index:180;left:14px;right:14px;bottom:calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 7px 7px 15px;border:1px solid rgba(71,55,48,.12);border-radius:999px;background:rgba(248,244,239,.93);box-shadow:0 12px 38px rgba(56,40,34,.15);backdrop-filter:blur(18px);transform:translateY(150%);transition:transform .3s ease}.tn13-sticky.show{transform:none}.tn13-sticky span{font-size:10px;color:#81716a}.tn13-sticky strong{display:block;color:#3d332f;font-size:11px;font-weight:600}.tn13-sticky button{height:46px;border:0;border-radius:999px;background:#171513;color:#fff!important;min-width:142px;padding:0 24px;font-size:12px;font-weight:600}

    .tn13-overlay,.tn13-sheet{position:fixed;z-index:350;inset:0;display:none}.tn13-overlay.open{display:block;background:#f8f4ef;overflow:auto}.tn13-gallery-head{position:sticky;top:0;z-index:5;background:rgba(248,244,239,.94);backdrop-filter:blur(18px);padding:17px 20px 15px;border-bottom:1px solid var(--line)}.tn13-back{width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.5);font-size:20px}.tn13-gallery-title{font:500 39px/.95 "Cormorant Garamond",Georgia,serif;margin:17px 0 3px}.tn13-gallery-sub{font-size:10px;color:#907a71;letter-spacing:.12em;text-transform:uppercase}.tn13-gallery-tabs{display:flex;gap:8px;overflow:auto;padding:16px 20px;scrollbar-width:none}.tn13-gallery-tabs button{border:1px solid var(--line);border-radius:999px;background:transparent;padding:9px 13px;font-size:11px}.tn13-gallery-tabs button.active{background:#715b53;color:#fff!important}.tn13-gallery-list{display:grid;gap:12px;padding:0 20px 30px}.tn13-gallery-list img{width:100%;border-radius:20px;display:block}
    .tn13-sheet.open{display:flex;align-items:flex-end;background:rgba(37,29,26,.35)}.tn13-panel{width:100%;max-height:92vh;overflow:auto;background:#f8f4ef;border-radius:29px 29px 0 0;padding:26px 20px calc(26px + env(safe-area-inset-bottom));position:relative}.tn13-close{position:absolute;right:16px;top:16px;width:40px;height:40px;border:0;border-radius:50%;background:#eee4dd;font-size:20px}.tn13-master-hero{padding:20px 0 24px}.tn13-master-big{width:120px;height:120px;border-radius:50%;display:grid;place-items:center;background:#e3d7cf;color:#725d55;font:500 48px/1 "Cormorant Garamond",Georgia,serif}.tn13-master-title{font:500 42px/.95 "Cormorant Garamond",Georgia,serif;margin:19px 0 4px}.tn13-master-sub{color:#8a7770;font-size:11px}.tn13-master-about{padding:20px 0;border-top:1px solid var(--line);font-size:12px;line-height:1.58;color:#5f514b}.tn13-master-services{border-top:1px solid var(--line)}.tn13-master-service{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-bottom:1px solid var(--line);font-size:11px}.tn13-master-service b{font-weight:500}.tn13-master-service span{color:#8a7770}.tn13-sheet-cta{width:100%;height:50px;border:0;border-radius:999px;background:#715b53;color:#fff!important;margin-top:20px;font-size:12px;font-weight:600}
    #tn13BookSheet .tn13-panel{background:#fff}.tn50-book-title{margin:17px 50px 0 0;font:500 38px/.95 "Cormorant Garamond",Georgia,serif;letter-spacing:-.025em}.tn50-book-copy{margin:12px 42px 0 0;color:#736861;font-size:11.5px;line-height:1.5}.tn50-book-options{display:grid;gap:8px;margin-top:22px}.tn50-book-option{width:100%;min-height:62px;border:1px solid rgba(66,52,45,.12);border-radius:14px;padding:9px 12px;display:grid;grid-template-columns:38px minmax(0,1fr) auto;align-items:center;gap:11px;background:#fff;color:#211d1a!important;text-align:left;text-decoration:none!important}.tn50-book-option.is-pending{cursor:default;opacity:1}.tn50-book-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center}.tn50-book-icon svg{width:21px;height:21px}.tn50-book-icon.phone{background:#f0edeb;color:#211d1a}.tn50-book-icon.message{background:#e9f7f0;color:#128c7e}.tn50-book-icon.max{background:#efebff;color:#471aff}.tn50-book-option strong{display:block;font:500 14px/1.2 "Manrope",Arial,sans-serif}.tn50-book-arrow{color:#9b8e86;font-size:17px}
  }
  @media(min-width:1024px){#salon-mobile{display:none!important}}
  `;
  document.head.appendChild(css);

  const root=document.createElement('div');
  root.id='salon-mobile';

  const serviceTabs=[['all','Все'],['nails','Ногти'],['hair','Волосы'],['brows','Брови и ресницы'],['face','Косметология'],['depilation','Эпиляция'],['makeup','Макияж'],['massage','Массаж'],['other','Другое']];
  const galleryTabs=[['all','Все'],['salon','Салон'],['nails','Ногти'],['hair','Волосы'],['makeup','Макияж']];

  root.innerHTML=`
    <header class="tn13-hero" id="tn13Top">
      <div class="tn13-shell">
        <div class="tn13-topbar">
          <a class="tn13-brand" href="#tn13Top">SALON NAME</a>
          <div class="tn13-menu-wrap">
            <button class="tn13-menu-btn" id="tn13MenuBtn" type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
            <nav class="tn13-menu" id="tn13Menu">
              <a href="#tn13Portfolio"><span>01</span>Портфолио</a>
              <a href="#tn13Services"><span>02</span>Услуги</a>
              <a href="#tn13Team"><span>03</span>Команда</a>
              <a href="#tn13Reviews"><span>04</span>Отзывы</a>
              <a href="#tn13Visit"><span>05</span>Визит и запись</a>
            </nav>
          </div>
        </div>

        <div class="tn13-hero-content">
          <div class="tn13-ticker"><div class="tn13-ticker-track"><span>Салон красоты · Город · услуги · запись</span><span>Салон красоты · Город · услуги · запись</span></div></div>
          <h1>Салон красоты <em>SALON NAME</em></h1>
          <p class="tn13-hero-copy">Описание салона будет добавлено при заполнении шаблона.</p>
        </div>

        <div class="tn13-visual" aria-label="Интерьер и работы SALON NAME">
          <button class="tn13-visual-main" type="button" data-gallery="salon"></button>
          <button class="tn13-visual-small" type="button" data-gallery="nails"></button>
          <div class="tn13-visual-label">Город · Адрес салона</div>
        </div>

        <div class="tn13-hero-bottom">
          <div class="tn13-hero-actions"><button class="tn13-main-cta" type="button" data-book>Записаться&nbsp; →</button><a class="tn13-quiet-link" href="#tn13Portfolio">Смотреть работы ↓</a></div>
          <div class="tn13-stats"><div class="tn13-stat"><strong>${RATING}</strong><span>рейтинг</span></div><div class="tn13-stat"><strong>${RATINGS_COUNT}</strong><span>оценок</span></div><div class="tn13-stat"><strong>${services.length}</strong><span>услуг</span></div></div>
        </div>
      </div>
    </header>

    <section class="tn13-section tn13-portfolio" id="tn13Portfolio">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Портфолио</p><h2>Пространство<br>и работы</h2></div><p class="tn13-section-note">Фотографии салона</p></div>
      </div>
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-feature">${works.slice(0,2).map(w=>`<button type="button" data-gallery="${w.cat}"><img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <div class="tn13-work-grid">${works.slice(2,5).map(w=>`<button type="button" data-gallery="${w.cat}"><img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <button class="tn13-gallery-btn" type="button" data-gallery="all"><span>Открыть всю галерею</span><span>→</span></button>
      </div>
    </section>

    <section class="tn13-section tn13-services" id="tn13Services">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Услуги</p><h2>Выберите<br>услугу</h2></div></div>
        <div class="tn13-tabs" id="tn13ServiceTabs">${serviceTabs.map((t,i)=>`<button class="tn13-tab ${i===0?'active':''}" data-service-cat="${t[0]}" type="button">${t[1]}</button>`).join('')}</div>
        <div class="tn13-service-list" id="tn13ServiceList"></div>
        <button class="tn13-more" id="tn13More" type="button">Показать ещё услуги</button>
      </div>
    </section>

    <section class="tn13-section tn13-team" id="tn13Team"${masters.length?'':' hidden'}>
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Команда</p><h2>Наша<br>команда</h2></div><p class="tn13-section-note">Персональные страницы специалистов</p></div>
        <div class="tn13-team-grid">${masters.map(m=>`<button class="tn13-master" type="button" data-master="${m.id}"><span class="tn13-master-arrow">↗</span><div class="tn13-master-monogram">${m.initial}</div><strong>${m.name}</strong><span>${m.category}</span></button>`).join('')}</div>
      </div>
    </section>

    <section class="tn13-section tn13-reviews" id="tn13Reviews">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Отзывы</p><h2>Что говорят<br>клиенты</h2></div></div>
        <a class="tn13-review-summary" href="${REVIEWS_URL}" aria-disabled="true"><strong>${RATING}</strong><span>★★★★★<br>Отзывы будут добавлены</span></a>
      </div>
      <div class="tn13-review-viewport" id="tn13ReviewViewport"><div class="tn13-review-track" id="tn13ReviewTrack">${reviews.concat(reviews).map(r=>`<a class="tn13-review-card" href="${REVIEWS_URL}" aria-disabled="true"><div class="tn13-review-stars">★★★★★</div><blockquote>«${r.text}»</blockquote><small>${r.name} · Источник отзыва</small></a>`).join('')}</div></div>
    </section>

    <section class="tn13-final" id="tn13Visit">
      <div class="tn13-shell tn13-reveal">
        <p class="tn13-kicker">Визит и запись</p>
        <h2>Выберите удобный<br><em>способ записи</em></h2>
        <p class="tn13-final-copy">Адрес, график и контакты заполняются для каждого салона.</p>
        <div class="tn13-final-actions">
          <button class="tn13-final-cta" type="button" data-book><span>Записаться</span><span>→</span></button>
          <div class="tn13-final-secondary-row"><a class="tn13-final-secondary" href="#tn13Visit" aria-disabled="true"><svg class="tn50-brand-svg" aria-hidden="true"><use href="#stl-icon-message"/></svg>Мессенджер</a><a class="tn13-final-secondary" href="#tn13Visit" aria-disabled="true"><svg aria-hidden="true"><use href="#stl-icon-phone"/></svg>Позвонить</a><a class="tn13-final-secondary" href="${MAP_URL}" aria-disabled="true">Карты</a></div>
        </div>
        <iframe class="tn13-map" loading="lazy" src="about:blank" title="Карта SALON NAME"></iframe>
        <div class="tn13-final-facts"><span><strong>—</strong><small>график</small></span><span><strong>—</strong><small>рейтинг</small></span><span><strong>30</strong><small>услуг</small></span></div>
      </div>
    </section>

    <footer class="tn13-footer"><div class="tn13-shell"><strong>SALON NAME</strong>Цифровой офис TANEM.RU</div></footer>

    <div class="tn13-sticky" id="tn13Sticky"><span>Доступно <strong>${services.length} услуги</strong></span><button type="button" data-book>Записаться</button></div>

    <div class="tn13-overlay" id="tn13Gallery"><div class="tn13-gallery-head"><button class="tn13-back" id="tn13GalleryClose" type="button">←</button><div class="tn13-gallery-title">Галерея SALON NAME</div><div class="tn13-gallery-sub">Салон · ногти · волосы · макияж</div></div><div class="tn13-gallery-tabs" id="tn13GalleryTabs"></div><div class="tn13-gallery-list" id="tn13GalleryList"></div></div>

    <div class="tn13-sheet" id="tn13MasterSheet"><div class="tn13-panel"><button class="tn13-close" id="tn13MasterClose" type="button">×</button><div id="tn13MasterBody"></div></div></div>
    <div class="tn13-sheet" id="tn13BookSheet" role="dialog" aria-modal="true" aria-labelledby="tn50BookTitle"><div class="tn13-panel"><button class="tn13-close" id="tn13BookClose" type="button" aria-label="Закрыть">×</button><p class="tn13-kicker">Запись</p><h2 class="tn50-book-title" id="tn50BookTitle">Как вам удобнее записаться?</h2><p class="tn50-book-copy">Выберите удобный способ связи.</p><div class="tn50-book-options"><a class="tn50-book-option" href="#tn13Visit" aria-disabled="true"><span class="tn50-book-icon phone"><svg aria-hidden="true"><use href="#stl-icon-phone"/></svg></span><span><strong>Телефон будет добавлен</strong></span><span class="tn50-book-arrow">→</span></a><a class="tn50-book-option" href="#tn13Visit" aria-disabled="true"><span class="tn50-book-icon viber-generic"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg></span><span><strong>Мессенджер будет добавлен</strong></span><span class="tn50-book-arrow">→</span></a></div></div></div>
  `;
  document.body.appendChild(root);

  const $=(s,c=root)=>c.querySelector(s);const $$=(s,c=root)=>Array.from(c.querySelectorAll(s));

  const menuBtn=$('#tn13MenuBtn'),menu=$('#tn13Menu');
  menuBtn.addEventListener('click',()=>{menuBtn.classList.toggle('open');menu.classList.toggle('open')});
  $$('#tn13Menu a').forEach(a=>a.addEventListener('click',()=>{menuBtn.classList.remove('open');menu.classList.remove('open')}));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn13-menu-wrap')){menuBtn.classList.remove('open');menu.classList.remove('open')}});

  let serviceCat='all',expanded=false;
  function renderServices(){const all=services.filter(s=>serviceCat==='all'||s[0]===serviceCat);const shown=expanded?all:all.slice(0,6);$('#tn13ServiceList').innerHTML=shown.map(s=>`<article class="tn13-service-row"><div class="tn13-service-name"><strong>${s[1]}</strong></div><div class="tn13-service-action"><button type="button" data-book>Записаться →</button></div></article>`).join('');const more=$('#tn13More');more.style.display=all.length>6?'block':'none';more.textContent=expanded?'Свернуть услуги':'Показать ещё '+Math.max(0,all.length-6)+' услуг';bindBook();}
  renderServices();
  $$('#tn13ServiceTabs [data-service-cat]').forEach(b=>b.addEventListener('click',()=>{serviceCat=b.dataset.serviceCat;expanded=false;$$('#tn13ServiceTabs .tn13-tab').forEach(x=>x.classList.toggle('active',x===b));renderServices()}));
  $('#tn13More').addEventListener('click',()=>{expanded=!expanded;renderServices()});

  let galleryCat='all';
  function renderGalleryTabs(){ $('#tn13GalleryTabs').innerHTML=galleryTabs.map(t=>`<button type="button" data-gallery-tab="${t[0]}" class="${galleryCat===t[0]?'active':''}">${t[1]}</button>`).join('');$$('#tn13GalleryTabs button').forEach(b=>b.addEventListener('click',()=>{galleryCat=b.dataset.galleryTab;renderGalleryTabs();renderGalleryList()})); }
  function renderGalleryList(){const arr=works.filter(w=>galleryCat==='all'||w.cat===galleryCat);$('#tn13GalleryList').innerHTML=arr.map(w=>`<img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}">`).join('')}
  function openGallery(cat){galleryCat=galleryTabs.some(t=>t[0]===cat)?cat:'all';renderGalleryTabs();renderGalleryList();$('#tn13Gallery').classList.add('open');document.body.style.overflow='hidden'}
  $$('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.gallery)));
  $('#tn13GalleryClose').addEventListener('click',()=>{$('#tn13Gallery').classList.remove('open');document.body.style.overflow=''});

  function openMaster(id){const m=masters.find(x=>x.id===id);if(!m)return;const ms=services.filter(s=>m.cats.includes(s[0]));$('#tn13MasterBody').innerHTML=`<div class="tn13-master-hero"><div class="tn13-master-big">${m.initial}</div><div class="tn13-master-title">${m.name}</div><div class="tn13-master-sub">Мастер · ${m.category}</div></div><div class="tn13-master-about">${m.about}</div><div class="tn13-master-services">${ms.length?ms.slice(0,6).map(s=>`<div class="tn13-master-service"><b>${s[1]}</b><span>${s[2]}</span></div>`).join(''):'<div class="tn13-master-about">Персональные услуги будут добавлены после подтверждения салоном.</div>'}</div><button class="tn13-sheet-cta" type="button" data-book>Записаться</button>`;$('#tn13MasterSheet').classList.add('open');document.body.style.overflow='hidden';bindBook();}
  $$('[data-master]').forEach(b=>b.addEventListener('click',()=>openMaster(b.dataset.master)));
  $('#tn13MasterClose').addEventListener('click',()=>{$('#tn13MasterSheet').classList.remove('open');document.body.style.overflow=''});

  function openBook(){ $('#tn13BookSheet').classList.add('open');document.body.style.overflow='hidden'; }
  function bindBook(){ $$('[data-book]').forEach(b=>{if(b.dataset.bound)return;b.dataset.bound='1';b.addEventListener('click',openBook)}); }
  bindBook();
  $('#tn13BookClose').addEventListener('click',()=>{$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''});
  $$('.tn13-sheet').forEach(s=>s.addEventListener('click',e=>{if(e.target===s){s.classList.remove('open');document.body.style.overflow=''}}));

  const reviewTrack=$('#tn13ReviewTrack'),reviewViewport=$('#tn13ReviewViewport');let resume;
  reviewViewport.addEventListener('pointerdown',()=>{clearTimeout(resume);reviewTrack.classList.add('paused')},{passive:true});
  const resumeReviews=()=>{clearTimeout(resume);resume=setTimeout(()=>reviewTrack.classList.remove('paused'),500)};
  reviewViewport.addEventListener('pointerup',resumeReviews,{passive:true});reviewViewport.addEventListener('pointercancel',resumeReviews,{passive:true});

  const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -8% 0px'});$$('.tn13-reveal').forEach(el=>reveal.observe(el));

  const sticky=$('#tn13Sticky'),hero=$('#tn13Top'),final=$('#tn13Visit');let raf=0;
  function scrollState(){raf=0;const heroDone=hero.getBoundingClientRect().bottom<=0;const finalNear=final.getBoundingClientRect().top<=window.innerHeight+70;sticky.classList.toggle('show',heroDone&&!finalNear)}
  window.addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(scrollState)},{passive:true});scrollState();

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#tn13Gallery').classList.remove('open');$('#tn13MasterSheet').classList.remove('open');$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''}});
})();

(function(){
'use strict';

if(!window.matchMedia||!window.matchMedia('(max-width:1023px)').matches||window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches)return;
const root=document.getElementById('salon-mobile'); if(!root)return;
const MAP_URL='#tn13Visit';
const REVIEWS_URL='#tn13Reviews';
const ROUTE='#tn13Visit';
const PHONE='';
const MESSENGER_URL='#tn13Visit';
const SERVICES=[
  {"cat":"Волосы","title":"Окрашивание волос средней длины","price":"5 000–10 000 ֏","desc":"2 ч"},
  {"cat":"Волосы","title":"Сложное мелирование","price":"15 000 ₽","desc":"4 ч","details":"Привет, это описание. Оно очень необходимо для того, чтобы вы понимали, что это такое. Но это мелирование, поэтому действуйте именно вот так."},
  {"cat":"Волосы","title":"Сложная покраска волос с заливкой","price":"от 6 000 ₽","desc":"","details":"если ваши волосы когда-то испортились или вы обожгли их утюгом, есть специальное средство для того, чтобы выйти из этого состояния и вновь обрести хорошие, свежие, красивые волосы. Чтобы всё было хорошо, запишитесь к нам на услугу, и мы примем вас, как только вы возьмёте."},
  {
    "cat": "Маникюр",
    "title": "Услуга 01",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Услуга 02",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 03",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Услуга 04",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Эпиляция",
    "title": "Услуга 05",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 06",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Другое",
    "title": "Услуга 07",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Эпиляция",
    "title": "Услуга 08",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 09",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Эпиляция",
    "title": "Услуга 10",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 11",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 12",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 13",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Маникюр",
    "title": "Услуга 14",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Маникюр",
    "title": "Услуга 15",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Маникюр",
    "title": "Услуга 16",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Маникюр",
    "title": "Услуга 17",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Косметология",
    "title": "Услуга 18",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Косметология",
    "title": "Услуга 19",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Эпиляция",
    "title": "Услуга 20",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Услуга 21",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 22",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Услуга 23",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Услуга 24",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Макияж",
    "title": "Услуга 25",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Маникюр",
    "title": "Услуга 26",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Массаж",
    "title": "Услуга 27",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 28",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Волосы",
    "title": "Услуга 29",
    "price": "",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Услуга 30",
    "price": "",
    "desc": ""
  }
];
const GALLERY={
'Салон':Array.from({length:2},()=>({src:'media-placeholder.svg',alt:'Фото салона'})),
'Ногти':Array.from({length:10},()=>({src:'media-placeholder.svg',alt:'Работа салона'})),
'Волосы':Array.from({length:9},()=>({src:'media-placeholder.svg',alt:'Работа салона'})),
'Макияж':Array.from({length:3},()=>({src:'media-placeholder.svg',alt:'Работа салона'}))
};
const PORTFOLIO=Array.from({length:7},()=>({src:'media-placeholder.svg',alt:'Работа салона'}));
const REVIEW_DATA=[["Клиент 1","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 2","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 3","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 4","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 5","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 6","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 7","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 8","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 9","Текст отзыва клиента будет добавлен при заполнении шаблона."]];
const MASTERS=[
  {
    "id": "master-1",
    "name": "Мастер 1",
    "role": "Специалист",
    "about": "",
    "cats": [
      "Маникюр"
    ],
    "work": [
      "media-placeholder.svg",
      "media-placeholder.svg",
      "media-placeholder.svg"
    ],
    "reviewNames": []
  },
  {
    "id": "master-2",
    "name": "Мастер 2",
    "role": "Специалист",
    "about": "",
    "cats": [
      "Волосы"
    ],
    "work": [
      "media-placeholder.svg",
      "media-placeholder.svg",
      "media-placeholder.svg"
    ],
    "reviewNames": []
  },
  {
    "id": "master-3",
    "name": "Мастер 3",
    "role": "Специалист",
    "about": "",
    "cats": [
      "Косметология"
    ],
    "work": [],
    "reviewNames": []
  },
  {
    "id": "master-4",
    "name": "Мастер 4",
    "role": "Специалист",
    "about": "",
    "cats": [
      "Брови и ресницы"
    ],
    "work": [],
    "reviewNames": []
  }
];
const MASTER_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

const css=document.createElement('style'); css.id='salon-mobile-base-style'; css.textContent=`
@media(max-width:1023px){
#tn13Intro{display:none!important} #salon-mobile{background:#f6f0e9!important;color:#181512!important}
#salon-mobile .tn13-hero{height:744px!important;min-height:744px!important;padding:0!important;background:#fff!important;position:relative!important;overflow:hidden!important}#salon-mobile>.tn13-footer{display:none!important}
.tn22-top{position:absolute;z-index:30;top:0;left:0;right:0;height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;background:#fff}
.tn22-brand{font:500 24px/1 'Cormorant Garamond',Georgia,serif!important;letter-spacing:.02em;text-decoration:none!important;color:#171513!important}
.tn22-menu{width:32px;height:32px;border:0;background:none;padding:0;display:grid;align-content:center;justify-items:end;gap:5px}.tn22-menu i{display:block;width:23px;height:1px;background:#1b1816}.tn22-menu i:nth-child(2){width:17px}.tn22-navpop{position:absolute;z-index:60;top:46px;right:12px;width:196px;padding:7px 12px;border:1px solid rgba(70,55,48,.12);border-radius:15px;background:rgba(250,247,242,.98);box-shadow:0 16px 40px rgba(45,34,29,.16);backdrop-filter:blur(18px);display:none}.tn22-navpop.open{display:grid}.tn22-navpop a{min-height:40px;display:flex;align-items:center;border-bottom:1px solid rgba(70,55,48,.08);font:500 14px/1 'Cormorant Garamond',Georgia,serif;color:#211d1a!important;text-decoration:none}.tn22-navpop a:last-child{border-bottom:0}
.tn22-media{position:absolute;top:52px;left:0;right:0;height:372px;overflow:hidden;background:#eee;border:0;padding:0;touch-action:pan-y}.tn22-slide{position:absolute;inset:0;opacity:0;transition:opacity .7s ease}.tn22-slide.active{opacity:1}.tn22-slide img{width:100%;height:100%;object-fit:cover;filter:none!important;pointer-events:none;-webkit-user-drag:none;user-select:none}.tn22-media:after{content:'';position:absolute;inset:auto 0 0;height:120px;background:linear-gradient(180deg,rgba(255,255,255,0),#fff 96%);pointer-events:none}.tn22-dots{position:absolute;z-index:3;left:50%;bottom:20px;transform:translateX(-50%);display:flex;gap:6px}.tn22-dots i{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.65);box-shadow:0 0 0 1px rgba(0,0,0,.08)}.tn22-dots i.active{width:18px;border-radius:999px;background:#fff}
.tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px 20px 24px;border-radius:13px 13px 0 0;background:#fff;box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05);text-align:center}.tn22-card:after{content:'';position:absolute;z-index:0;left:-15px;right:-15px;bottom:-1px;height:62px;background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.60) 48%,#fff 92%);pointer-events:none}.tn22-card>*{position:relative;z-index:1}.tn22-title{margin:0;font:500 49px/.88 'Cormorant Garamond',Georgia,serif;letter-spacing:.18em;text-indent:.18em;text-transform:uppercase}.tn22-sub{margin:12px 0 17px;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.38em;text-indent:.38em;text-transform:uppercase;color:#635d58}.tn22-orn{display:flex;align-items:center;justify-content:center;gap:8px;margin:15px auto 14px;color:#bda388}.tn22-orn:before,.tn22-orn:after{content:'';width:45px;height:1px;background:#bfa589}.tn22-copy{margin:0 auto;width:270px;max-width:100%;font:400 14px/1.38 'Manrope',Arial,sans-serif;color:#33302d}.tn37-hero-info{width:min(100%,330px);margin:18px auto 0;display:grid;grid-template-columns:1fr 1px 1.18fr;align-items:center;gap:12px;text-align:left}.tn37-info-divider{width:1px;height:42px;background:rgba(62,51,44,.13)}.tn37-info{display:grid;grid-template-columns:40px minmax(0,1fr);align-items:center;gap:9px;min-width:0}.tn37-info-icon{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.52);border:1px solid rgba(62,51,44,.09);box-shadow:0 5px 14px rgba(47,37,31,.05)}.tn37-info-icon svg{width:21px;height:21px;fill:none;stroke:#171513;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tn37-info-copy{font:400 10.5px/1.28 'Manrope',Arial,sans-serif;color:#282420}.tn37-info-copy strong{display:block;margin-bottom:3px;font:500 11.5px/1.1 'Manrope',Arial,sans-serif;color:#3f8750}.tn37-location .tn37-info-copy strong{color:#282420;font-weight:500}.tn22-cta{display:flex;width:min(100%,330px);height:50px;margin:18px auto 0;align-items:center;justify-content:center;gap:12px;border:0;border-radius:8px;background:#111;color:#fff!important;font:500 14px/1 'Manrope',Arial,sans-serif}.tn22-cta svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.tn22-worklink{display:flex;width:min(100%,330px);height:48px;margin:10px auto 0;align-items:center;justify-content:center;gap:11px;border:1px solid rgba(157,126,93,.5);border-radius:8px;background:rgba(255,255,255,.12);color:#25211f!important;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif}.tn22-worklink svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}

.tn23-section-nav{position:fixed;z-index:70;top:0;left:0;right:0;width:100%;height:48px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:rgba(249,245,239,.96);border-bottom:1px solid rgba(61,49,43,.12);box-shadow:0 8px 26px rgba(48,36,30,.07);backdrop-filter:blur(18px);transform:translateY(-110%);opacity:0;pointer-events:none;transition:transform .28s cubic-bezier(.22,.78,.25,1),opacity .2s ease;will-change:transform,opacity;scroll-behavior:smooth}.tn23-section-nav.visible{transform:translateY(0);opacity:1;pointer-events:auto}.tn23-section-nav::-webkit-scrollbar{display:none}.tn23-section-nav button{position:relative;flex:0 0 auto;min-width:82px;padding:0 11px;border:0;background:transparent;color:#7b746f;font:600 13.2px/1 Manrope,Arial,sans-serif;letter-spacing:0;white-space:nowrap}.tn23-section-nav button.active{color:#171513;font-weight:600}.tn23-section-nav button.active:after{content:'';position:absolute;left:12px;right:12px;bottom:-1px;height:3px;border-radius:3px 3px 0 0;background:#171513}

#tn13Portfolio{margin:0!important;padding:0!important;background:#F3EFE8!important;color:#171513!important;min-height:860px!important}.tn22-port{padding:22px 24px 34px}.tn22-kicker{margin:0;font:500 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.31em;text-transform:uppercase;color:#6f665f}.tn22-port h2,.tn22-services h2,.tn22-team h2,.tn22-reviews h2,.tn22-visit h2{margin:16px 0 0;font:500 44px/.95 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em}.tn22-port-grid{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:150px;gap:6px;margin-top:27px}.tn22-photo{border:0;padding:0;border-radius:10px;overflow:hidden;background:#ddd}.tn22-photo img{width:100%;height:100%;object-fit:cover;filter:none!important}.tn22-photo:nth-child(1){grid-row:span 2}.tn22-port-all{width:100%;height:48px;margin-top:18px;border:1px solid #CDB8A5;border-radius:10px;background:#EDE1D6;color:#49362D;font:500 13px/1 'Manrope',Arial,sans-serif;display:flex;align-items:center;justify-content:center;gap:12px;transition:transform .14s ease,background .14s ease,box-shadow .14s ease}.tn22-port-all:active{transform:translateY(2px) scale(.988);background:#DDC9B8;box-shadow:0 2px 9px rgba(74,53,45,.14)}

#tn13Services{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn31-services{padding:43px 25px 40px}.tn31-services .tn22-kicker{color:#746c66}.tn31-services h2{margin:17px 0 0;font:500 50px/.92 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#171513;white-space:nowrap}.tn31-cats-wrap{position:relative;margin:25px -25px 0}.tn31-cats{display:flex;align-items:center;gap:8px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:0 25px 11px}.tn31-cats::-webkit-scrollbar{display:none}.tn31-cat{position:relative;flex:0 0 auto;height:35px;padding:0 15px;border:1px solid rgba(67,57,51,.18);border-radius:999px;background:transparent;color:#655d57;font:500 10.5px/1 'Manrope',Arial,sans-serif;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease}.tn31-cat.active{background:#171513!important;color:#fff!important;border-color:#171513!important}.tn31-service-list{margin-top:18px;border-top:1px solid rgba(55,47,42,.18)}.tn31-service-row{min-height:84px;display:grid;grid-template-columns:minmax(0,1fr) 108px;gap:16px;align-items:center;border-bottom:1px solid rgba(55,47,42,.18)}.tn31-service-copy{min-width:0;padding:13px 0}.tn31-service-name{font:600 18px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.tn31-service-detail{display:block;margin-top:5px;font:400 9.5px/1.35 'Manrope',Arial,sans-serif;color:#81766f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tn31-service-side{text-align:right;align-self:center}.tn31-service-price{font:500 20px/1 'Cormorant Garamond',Georgia,serif;letter-spacing:.005em;color:#171513;white-space:nowrap}.tn31-service-book{display:inline-block;margin-top:8px;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#655d57!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;white-space:nowrap;text-decoration:none!important}.tn31-service-more{width:100%;height:48px;margin-top:22px;padding:0!important;border:1px solid #bbaea5!important;border-radius:7px!important;background:rgba(255,255,255,.18)!important;color:#342f2b!important;display:flex;align-items:center;justify-content:center;gap:9px;box-shadow:none!important;font:500 12px/1 'Manrope',Arial,sans-serif!important}.tn31-service-more span:last-child{font-size:17px;line-height:1;color:#82756c}.tn31-service-more[hidden]{display:none!important}@media(max-width:370px){.tn31-services{padding-left:20px;padding-right:20px}.tn31-cats-wrap{margin-left:-20px;margin-right:-20px}.tn31-cats{padding-left:20px;padding-right:20px}.tn31-service-row{grid-template-columns:minmax(0,1fr) 100px;gap:12px}.tn31-services h2{font-size:46px}.tn31-service-name{font-size:17px}.tn31-service-price{font-size:19px}}

#tn13Team{margin:0!important;padding:0!important;background:#f6f1e9!important;color:#171513!important}.tn22-team{padding:42px 28px 38px;overflow:hidden}.tn22-team h2{font-size:40px}.tn22-team-grid{display:flex;gap:14px;margin:30px 0 0;padding:0 0 8px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none;scroll-padding:0}.tn22-team-grid::-webkit-scrollbar{display:none}.tn22-master-card{flex:0 0 136px;scroll-snap-align:start;border:0;background:none;padding:0;text-align:center;color:#171513}.tn22-master-circle{width:100%;aspect-ratio:1/1;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#e9e3dc,#d7cec6);overflow:hidden;color:#9b9088}.tn22-master-circle svg{width:62px;height:62px}.tn22-master-name{display:block;margin-top:11px;font:500 20px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-role{display:block;margin-top:5px;font:400 10px/1.3 'Manrope',Arial,sans-serif;color:#827871}.tn22-team-all{display:none!important}.tn42-team-hint{margin-top:8px;text-align:right;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a7f78}.tn42-team-hint span{display:inline-block;margin-left:5px;font-size:14px;vertical-align:-1px}

#tn13Reviews{margin:0!important;padding:0!important;background:#fff!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn30-reviews{padding:44px 0 46px}.tn30-reviews>.tn22-kicker,.tn30-reviews>h2{margin-left:24px;margin-right:24px}.tn30-reviews .tn22-kicker{color:#746c66}.tn30-reviews h2{margin-top:16px;font:500 46px/.96 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em;color:#171513}.tn30-score{text-align:center;margin-top:43px}.tn30-score strong{display:block;font:500 84px/.82 'Cormorant Garamond',Georgia,serif;color:#171513}.tn30-stars{margin-top:20px;color:#b78d4f;font-size:27px;letter-spacing:6px}.tn30-count{margin-top:14px;font:400 13px/1 'Manrope',Arial,sans-serif;color:#716862}.tn30-review-stage{display:grid;gap:12px;margin:37px 0 0;overflow:hidden;touch-action:pan-y;cursor:grab;user-select:none}.tn30-review-stage.dragging{cursor:grabbing}.tn30-lane{width:100%;overflow:hidden}.tn30-track{display:flex;width:100%;gap:12px;will-change:transform}.tn30-review-card{flex:0 0 calc(100% - 52px);box-sizing:border-box;min-height:154px;padding:16px 17px 17px;border:1px solid rgba(66,55,49,.15);border-radius:13px;background:#f6f7f8;text-decoration:none!important;color:#171513!important}.tn30-review-head{display:grid;grid-template-columns:45px minmax(0,1fr);gap:12px;align-items:center}.tn30-review-avatar{width:43px;height:43px;border-radius:50%;display:grid;place-items:center;background:#d7cec6;border:1px solid rgba(66,55,49,.1);font:500 22px/1 'Cormorant Garamond',Georgia,serif;color:#514943}.tn30-review-name{display:block;font:600 19px/1 'Cormorant Garamond',Georgia,serif;color:#2a2522}.tn30-review-meta{display:block;margin-top:5px;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a817a}.tn30-review-card p{margin:14px 0 0;font:400 12.5px/1.5 'Manrope',Arial,sans-serif;color:#4f4843}.tn30-review-open{display:block;margin-top:11px;font:500 9.5px/1 'Manrope',Arial,sans-serif;color:#655b54}.tn30-review-all{display:flex;align-items:center;justify-content:center;margin:28px 22px 0;height:46px;border:1px solid rgba(66,55,49,.18);border-radius:7px;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.15em;text-transform:uppercase;background:rgba(255,255,255,.18)}

#tn13Visit{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;border-radius:34px 34px 0 0!important;overflow:hidden!important}.tn22-visit{padding:40px 24px 0}.tn22-visit-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.tn22-status{display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border:1px solid #b8b0aa;border-radius:999px;font:600 10px/1 'Manrope',Arial,sans-serif}.tn22-status svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tn22-status.open{background:#e7f4e6;color:#3a7440}.tn22-status.closed{background:#fff0df;color:#a46020}.tn22-visit h2{font-size:46px}.tn22-contact-grid{display:grid;gap:9px;margin-top:28px}.tn22-contact{display:grid;grid-template-columns:38px minmax(0,1fr);gap:11px;align-items:center;min-height:62px;padding:10px 12px;border:1px solid rgba(63,50,44,.12);border-radius:12px;background:rgba(255,255,255,.55);text-decoration:none!important;color:#1e1a17!important}.tn22-contact svg{width:20px;height:20px;fill:none;stroke:#8d7e74;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.tn22-contact strong{display:block;font:500 15px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513!important}.tn22-contact span{display:block;margin-top:4px;font:400 9.5px/1.3 'Manrope',Arial,sans-serif;color:#837971}.tn22-mapwrap{position:relative;height:168px;margin-top:15px;border-radius:13px;overflow:hidden;background:#e7e1da}.tn22-mapwrap iframe{width:100%;height:100%;border:0;filter:grayscale(.35) saturate(.75);opacity:0;transition:opacity .25s ease}.tn22-mapwrap.loaded iframe{opacity:1}.tn22-map-skeleton{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(110deg,#e8e1da 10%,#f3eee8 35%,#e8e1da 60%);background-size:220% 100%;animation:tn22Map 1.4s linear infinite;color:#8f837b;font:500 10px/1 'Manrope',Arial,sans-serif}@keyframes tn22Map{to{background-position:-220% 0}}.tn22-mapwrap.loaded .tn22-map-skeleton{display:none}.tn22-visit-actions{display:grid;grid-template-columns:1fr 1.2fr;gap:9px;margin-top:14px}.tn22-visit-btn{height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif}.tn22-call{border:1px solid rgba(52,43,38,.18);color:#1e1a17!important;background:transparent}.tn22-route{background:#151311;color:#fff!important}.tn22-footer{margin:28px -24px 0;height:76px;background:#171513;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 24px;text-decoration:none!important}.tn22-footer strong{font:500 23px/1 'Cormorant Garamond',Georgia,serif;color:#fff!important}.tn22-footer span{max-width:185px;text-align:right;font:400 10px/1.35 'Manrope',Arial,sans-serif;color:#d6cec8}
.tn22-contact>.tn50-book-icon{display:grid!important;margin:0!important;font:inherit!important}.tn22-contact>.tn50-book-icon svg{width:21px!important;height:21px!important}.tn22-contact>.tn50-book-icon.phone svg{stroke:currentColor!important}.tn50-brand-svg{fill:currentColor!important;stroke:none!important}.tn22-contact.is-pending{width:100%;cursor:default;text-align:left;font:inherit;opacity:1}

#tn13Sticky{width:min(calc(100% - 20px),500px)!important;min-height:62px!important;padding:8px 8px 8px 15px!important;border-radius:18px!important;border:1px solid rgba(61,49,43,.12)!important;background:rgba(249,245,239,.96)!important;box-shadow:0 14px 40px rgba(48,36,30,.16)!important;backdrop-filter:blur(18px)!important;align-items:center!important}#tn13Sticky span{font:500 12px/1.12 'Manrope',Arial,sans-serif!important;color:#6f635c!important;white-space:nowrap}#tn13Sticky strong{display:block;margin:0;font:600 14px/1 'Manrope',Arial,sans-serif!important;color:#191613!important;white-space:nowrap}#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;min-width:142px!important;border-radius:999px!important;background:#171513!important;color:#fff!important;padding:0 24px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}#tn13Sticky button:after{content:'';position:absolute;inset:-30% auto -30% -30%;width:34%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);transform:skewX(-20deg);animation:tn22Shine 3.2s ease-in-out infinite}@keyframes tn22Shine{0%,65%{left:-40%}100%{left:130%}}

#tn13Gallery{display:block!important;z-index:650!important;background:#f7f2eb!important;color:#171513!important;padding:0!important;overflow:auto!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;touch-action:pan-y!important;visibility:hidden!important;opacity:0!important;transform:translate3d(100%,0,0)!important;pointer-events:none!important;transition:transform .34s ease,opacity .22s ease,visibility 0s linear .34s!important;will-change:transform,opacity}#tn13Gallery.open{visibility:visible!important;opacity:1!important;transform:translate3d(0,0,0)!important;pointer-events:auto!important;transition-delay:0s!important}#tn13Gallery.closing{visibility:visible!important;opacity:0!important;transform:translate3d(100%,0,0)!important;pointer-events:none!important}.tn22-gallery{min-height:100dvh;padding:24px 18px 40px}.tn22-gallery-top{display:grid;grid-template-columns:44px 1fr 44px;align-items:center}.tn22-gallery-back{width:40px;height:40px;border:0;background:none;font-size:28px}.tn22-gallery-title{text-align:center}.tn22-gallery-title strong{display:block;font:500 42px/.9 'Cormorant Garamond',Georgia,serif}.tn22-gallery-title span{display:block;margin-top:8px;font:500 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.34em;color:#7e746d}.tn22-gallery-tabs{display:flex;gap:0;margin-top:26px;border:1px solid rgba(55,44,39,.12);border-radius:14px;overflow-x:auto;scrollbar-width:none}.tn22-gallery-tabs::-webkit-scrollbar{display:none}.tn22-gallery-tab{flex:0 0 auto;height:43px;padding:0 18px;border:0;background:transparent;font:500 11px/1 'Manrope',Arial,sans-serif;color:#6f655f}.tn22-gallery-tab.active{background:#171513;color:#fff!important}.tn22-gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:18px}.tn22-gallery-grid.salon{grid-template-columns:1fr 1fr}.tn22-gallery-tile{border:0;padding:0;overflow:hidden;border-radius:11px;background:#ddd;aspect-ratio:1/1}.tn22-gallery-grid.salon .tn22-gallery-tile{aspect-ratio:1/1}.tn23-gallery-empty{grid-column:1/-1;padding:54px 10px;text-align:center;color:#847a73;font:400 13px/1.5 'Manrope',Arial,sans-serif}.tn22-gallery-tile img{width:100%;height:100%;object-fit:cover;filter:none!important}
.tn22-viewer{position:fixed;z-index:760;inset:0;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(27,20,20,.9);backdrop-filter:blur(9px);touch-action:none;overscroll-behavior:contain}.tn22-viewer.open{display:flex}.tn22-viewer-frame{position:relative;width:min(100%,520px);height:min(72dvh,640px);background:transparent;overflow:visible;touch-action:none}.tn42-viewer-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;touch-action:none;box-shadow:0 18px 54px rgba(0,0,0,.28)}.tn23-viewer-hint{position:absolute;z-index:4;top:-42px;left:0;color:rgba(255,255,255,.65);font:400 10px/1 'Manrope',Arial,sans-serif}.tn22-viewer-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#151312;transform:translate3d(0,0,0) scale(1);transform-origin:center center;will-change:transform;-webkit-user-drag:none;user-select:none}.tn22-viewer-top{position:absolute;z-index:5;top:-52px;left:0;right:0;display:flex;justify-content:flex-end}.tn22-viewer-actions{display:flex}.tn22-vbtn{width:42px;height:42px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(255,255,255,.08);color:#fff!important;font-size:22px}.tn22-navbtn{position:absolute;z-index:5;top:50%;transform:translateY(-50%);width:30px;height:52px;border:0;background:transparent;color:#fff!important;font-size:35px;line-height:1}.tn22-prev{left:-5px}.tn22-next{right:-5px}.tn22-navbtn[hidden]{display:none!important}.tn23-viewer-foot{position:absolute;z-index:5;left:0;right:0;bottom:-34px;display:flex;align-items:center;justify-content:space-between;color:rgba(255,255,255,.68);font:400 10px/1 'Manrope',Arial,sans-serif}.tn22-viewer-count{font:500 10px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn22-team-sheet{position:fixed;z-index:140;inset:0;display:none;align-items:flex-end;background:rgba(30,25,22,.35);backdrop-filter:blur(4px)}.tn22-team-sheet.open{display:flex}.tn22-team-panel{width:100%;max-height:82dvh;overflow:auto;border-radius:26px 26px 0 0;background:#f8f4ee;padding:18px 20px 30px;animation:tn22Sheet .28s ease}@keyframes tn22Sheet{from{transform:translateY(100%)}to{transform:none}}.tn22-handle{width:38px;height:4px;border-radius:999px;background:#c9bdb5;margin:0 auto 18px}.tn22-team-panel h3{margin:0;font:500 36px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-list{display:grid;gap:9px;margin-top:19px}.tn22-team-row{display:grid;grid-template-columns:54px minmax(0,1fr) 30px;align-items:center;gap:12px;min-height:72px;padding:8px 10px;border:1px solid rgba(58,46,40,.1);border-radius:14px;background:#fff;border-width:1px}.tn22-team-mini{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#d9d0c8;font:500 26px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-row strong{display:block;font:500 18px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-row span{display:block;margin-top:5px;font:400 10px/1 'Manrope',Arial,sans-serif;color:#80766f}
.tn22-master-page{position:fixed;z-index:650;inset:0;display:block;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;touch-action:pan-y;background:#f8f4ee;color:#171513;visibility:hidden;opacity:0;pointer-events:none;transition:opacity .36s ease,visibility 0s linear .5s;will-change:opacity}.tn22-master-page.open{visibility:visible;opacity:1;pointer-events:auto;transition-delay:0s}.tn22-master-page.closing{visibility:visible;opacity:0;pointer-events:none}.tn22-master-shell{padding:18px 20px 112px;transform:translate3d(0,34px,0);transition:transform .5s cubic-bezier(.16,1,.3,1);will-change:transform}.tn22-master-page.open .tn22-master-shell{transform:translate3d(0,0,0)}.tn22-master-page.closing .tn22-master-shell{transform:translate3d(0,24px,0)}.tn22-master-top{display:flex;align-items:center;justify-content:space-between}.tn22-back{width:40px;height:40px;border:0;background:none;font-size:27px}.tn42-master-spacer{width:40px;height:40px;display:block}.tn22-master-brand{font:500 16px/1 'Manrope',Arial,sans-serif;letter-spacing:.34em}.tn22-profile{text-align:center;margin-top:12px}.tn22-profile-circle{width:142px;height:142px;margin:auto;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 45% 35%,#e4ddd5,#cfc5bc 60%,#b8aaa0)}.tn22-profile-circle{color:#9b9088}.tn22-profile-circle svg{width:72px;height:72px}.tn22-profile h1{margin:14px 0 0;font:500 45px/.95 'Cormorant Garamond',Georgia,serif}.tn22-profile-role{margin-top:7px;font:400 14px/1 'Manrope',Arial,sans-serif;color:#837970}.tn22-salon-rating{margin-top:9px;font:600 12px/1 'Manrope',Arial,sans-serif;color:#504841}.tn22-salon-rating b{color:#e2ad3e}.tn22-master-about{max-width:340px;margin:14px auto 0;font:400 12.5px/1.55 'Manrope',Arial,sans-serif;color:#3d3834}.tn22-master-tabs{display:flex;margin:22px -2px 0;overflow-x:auto;gap:7px;scrollbar-width:none}.tn22-master-tabs button{flex:1 0 auto;height:42px;padding:0 16px;border:1px solid rgba(61,49,43,.12);border-radius:999px;background:transparent;font:500 11px/1 'Manrope',Arial,sans-serif}.tn22-master-tabs button.active{background:#171513;color:#fff!important}.tn22-master-content{margin-top:20px}.tn22-master-content h3{margin:0 0 13px;font:500 30px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-service{display:flex;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid rgba(61,49,43,.1)}.tn22-master-service b{font:500 14px/1.3 'Manrope',Arial,sans-serif}.tn22-master-service span{font:500 14px/1 'Cormorant Garamond',Georgia,serif;white-space:nowrap}.tn22-master-works{display:grid;grid-template-columns:1fr 1fr;gap:7px}.tn22-master-works img{width:100%;aspect-ratio:1.25/1;object-fit:cover;border-radius:10px}.tn22-master-review{padding:14px;border:1px solid rgba(61,49,43,.1);border-radius:12px;margin-bottom:8px;background:#fff}.tn22-master-review strong{font:500 16px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-review p{margin:7px 0 0;font:400 11px/1.5 'Manrope',Arial,sans-serif;color:#514a45}.tn22-master-book{position:fixed;z-index:670;left:20px;right:20px;bottom:max(14px,env(safe-area-inset-bottom));height:52px;border:0;border-radius:14px;background:#171513;color:#fff!important;font:600 13px/1 'Manrope',Arial,sans-serif;box-shadow:0 12px 34px rgba(0,0,0,.16);opacity:0;transform:translate3d(0,18px,0);pointer-events:none;transition:transform .46s cubic-bezier(.16,1,.3,1),opacity .3s ease;will-change:transform,opacity}.tn22-master-page.open .tn22-master-book{opacity:1;transform:translate3d(0,0,0);pointer-events:auto}.tn22-master-page.closing .tn22-master-book{opacity:0;transform:translate3d(0,12px,0);pointer-events:none}
}
`;
document.head.appendChild(css);

const requestedFixStyle=document.createElement('style');
requestedFixStyle.id='salon-mobile-layout-style';
requestedFixStyle.textContent=`
@media(max-width:1023px){
  #salon-mobile .tn13-hero{height:100svh!important;min-height:0!important;max-height:none!important}
  .tn22-card{display:flex!important;flex-direction:column!important;padding-bottom:max(14px,env(safe-area-inset-bottom))!important}
  .tn22-cta{margin-top:auto!important}
  .tn22-worklink{margin-top:10px!important}
  #tn13Portfolio .tn22-port{padding-top:58px!important}

  .tn22-view-gallery{position:absolute;z-index:7;left:50%;bottom:14px;transform:translateX(-50%);height:42px;padding:0 18px;border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(22,18,16,.74);backdrop-filter:blur(12px);color:#fff!important;font:600 11px/1 'Manrope',Arial,sans-serif;white-space:nowrap;box-shadow:0 10px 30px rgba(0,0,0,.22)}
  .tn22-viewer:not([data-source="portfolio"]) .tn22-view-gallery{display:none!important}

  #tn13Services{background:#2f2926!important;color:#f7f3f0!important;border-color:rgba(255,255,255,.08)!important}
  #tn13Services .tn22-kicker{color:#b8ada7!important}
  #tn13Services h2,#tn13Services .tn31-service-name{color:#f7f3f0!important}
  #tn13Services .tn31-cats{color:#f7f3f0!important}
  #tn13Services .tn31-cat{border-color:rgba(255,255,255,.18)!important;color:#cfc5bf!important}
  #tn13Services .tn31-cat.active{background:#8b7167!important;border-color:#8b7167!important;color:#fff!important}
  #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
  #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
  #tn13Services .tn31-service-detail{color:#b9ada7!important}
  #tn13Services .tn31-service-book{color:#d8b7aa!important}
  #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.06)!important;color:#f4eeea!important}
  #tn13Services .tn31-service-more span:last-child{color:#d2c7c0!important}

  #tn13Team{background:#2f2926!important;color:#f7f3f0!important}
  #tn13Team .tn22-kicker,#tn13Team .tn42-team-hint{color:#b8ada7!important}
  #tn13Team h2{color:#f7f3f0!important}
  #tn13Team .tn22-team-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;overflow:visible!important;padding-bottom:0!important}
  #tn13Team .tn22-master-card{width:auto!important;min-width:0!important;flex:none!important;color:#f7f3f0!important}
  #tn13Team .tn22-master-circle{background:linear-gradient(145deg,#806b61,#5b4a43)!important;color:#e6d8d0!important;border:1px solid rgba(255,255,255,.1)!important}
  #tn13Team .tn22-master-name{color:#f7f3f0!important;font-size:17px!important;white-space:nowrap!important}
  #tn13Team .tn22-master-role{display:none!important}
  #tn13Team .tn42-team-hint{display:none!important}

  #tn13Reviews .tn30-review-stage{gap:12px!important}
  #tn13Reviews .tn30-review-card{height:184px!important;min-height:184px!important;overflow:hidden!important}
  #tn13Reviews .tn30-review-card p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden}

  #tn13Visit{background:#2f2926!important;color:#f7f3f0!important;border-radius:0!important}
  #tn13Visit .tn22-kicker{color:#b8ada7!important}
  #tn13Visit h2{color:#f7f3f0!important}
  #tn13Visit .tn22-status{min-height:34px!important;padding:8px 11px!important;border:1px solid rgba(255,255,255,.16)!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;color:#f7f3f0!important;background:rgba(255,255,255,.06)!important}
  #tn13Visit .tn22-status svg{width:14px!important;height:14px!important;stroke:currentColor!important}
  #tn13Visit .tn22-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}
  #tn13Visit .tn22-status.closed{background:#493336!important;border-color:#65474b!important;color:#d59a9f!important}
  #tn13Visit .tn22-contact{grid-template-columns:42px minmax(0,1fr)!important;gap:11px!important;background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.13)!important;color:#f7f3f0!important}
  #tn13Visit .tn22-contact-icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;justify-self:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
  #tn13Visit .tn22-contact-icon svg{width:20px!important;height:20px!important;fill:none!important;stroke:#f0e8e3!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
  #tn13Visit .tn22-contact strong{color:#f7f3f0!important}
  #tn13Visit .tn22-contact>span:last-child>span{color:#c7bbb4!important}
  #tn13Visit .tn22-mapwrap{background:#423a36!important}
  #tn13Visit .tn22-call{border-color:rgba(255,255,255,.22)!important;color:#f7f3f0!important}
  #tn13Visit .tn22-route{background:#f4ede8!important;color:#2b2522!important}
  #tn13Visit .tn22-footer{background:#171513!important}

  .tn50-book-icon.viber-generic{background:#f1edf7!important;color:#67507f!important}
}
@media(max-width:1023px) and (max-height:720px){
  .tn22-media{height:330px!important}
  .tn22-card{top:304px!important;padding-top:14px!important}
  .tn22-title{font-size:43px!important}
  .tn22-sub{margin:8px 0 10px!important}
  .tn22-copy{font-size:12.5px!important;line-height:1.32!important}
  .tn37-hero-info{margin-top:11px!important}
  .tn22-cta{height:44px!important}
  .tn22-worklink{height:42px!important;margin-top:8px!important}
}
`;
document.head.appendChild(requestedFixStyle);

const $=s=>root.querySelector(s); const $$=s=>[...root.querySelectorAll(s)];
const book=()=>{const s=$('#tn13BookSheet');if(s){s.classList.add('open');document.body.style.overflow='hidden'}};

// HERO
const hero=$('#tn13Top');
hero.innerHTML=`<div class="tn22-top"><a class="tn22-brand" href="#tn13Top">SALON NAME</a><button class="tn22-menu" type="button" aria-label="Меню"><i></i><i></i><i></i></button></div><button class="tn22-media" type="button" aria-label="Открыть галерею салона"><span class="tn22-slide active"></span><span class="tn22-slide"></span><span class="tn22-dots"><i class="active"></i><i></i></span></button><div class="tn22-card"><h1 class="tn22-title">SALON NAME</h1><div class="tn22-sub">Салон красоты</div><p class="tn22-copy">Описание салона.</p><div class="tn37-hero-info"><div class="tn37-info"><span class="tn37-info-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 2"></path></svg></span><span class="tn37-info-copy tn50-hero-status"><strong class="tn50-hero-status-main">Проверяем</strong><span class="tn50-hero-status-sub">режим работы</span></span></div><span class="tn37-info-divider" aria-hidden="true"></span><div class="tn37-info tn37-location"><span class="tn37-info-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5.2-7 10-7 10s-7-4.8-7-10a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg></span><span class="tn37-info-copy"><strong>Город,</strong>Адрес салона</span></div></div><button class="tn22-cta" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.2"></rect><path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h.01M12 13h.01M16 13h.01M8 16h.01M12 16h.01"></path></svg><span>Записаться</span></button><a class="tn22-worklink" href="#tn13Portfolio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 .9 3.1L16 7l-3.1.9L12 11l-.9-3.1L8 7l3.1-.9L12 3ZM6 13l.7 2.3L9 16l-2.3.7L6 19l-.7-2.3L3 16l2.3-.7L6 13ZM17.5 12l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z"></path></svg><span>Смотреть работы</span></a></div>`;
hero.querySelector('.tn22-cta').addEventListener('click',book);
const menuButton=hero.querySelector('.tn22-menu');
const navPop=document.createElement('nav');navPop.className='tn22-navpop';navPop.innerHTML='<a href="#tn13Portfolio">Портфолио</a><a href="#tn13Services">Услуги</a><a href="#tn38About">О нас</a><a href="#tn13Team">Команда</a><a href="#tn13Reviews">Отзывы</a><a href="#tn13Visit">Контакты</a>';hero.querySelector('.tn22-top').appendChild(navPop);menuButton.addEventListener('click',e=>{e.stopPropagation();navPop.classList.toggle('open')});if(!MASTERS.length){const teamLink=navPop.querySelector('a[href="#tn13Team"]');if(teamLink)teamLink.remove();}navPop.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navPop.classList.remove('open')));document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn22-top'))navPop.classList.remove('open')});
let slide=0; const slides=[...hero.querySelectorAll('.tn22-slide')],dots=[...hero.querySelectorAll('.tn22-dots i')];
function setHeroSlide(i){slide=(i+slides.length)%slides.length;slides.forEach((x,j)=>x.classList.toggle('active',j===slide));dots.forEach((x,j)=>x.classList.toggle('active',j===slide));}
const heroMedia=hero.querySelector('.tn22-media');let heroStartX=0,heroMoved=false,heroPointer=null;
heroMedia.querySelectorAll('img').forEach(img=>img.draggable=false);
heroMedia.addEventListener('pointerdown',e=>{heroStartX=e.clientX;heroMoved=false;heroPointer=e.pointerId;try{heroMedia.setPointerCapture(e.pointerId)}catch(_){}});
heroMedia.addEventListener('pointermove',e=>{if(heroPointer!==null&&Math.abs(e.clientX-heroStartX)>12)heroMoved=true});
const finishHeroGesture=e=>{if(heroPointer===null)return;const dx=e.clientX-heroStartX;try{heroMedia.releasePointerCapture(heroPointer)}catch(_){}heroPointer=null;if(Math.abs(dx)>42){setHeroSlide(slide+(dx<0?1:-1));return}if(!heroMoved)openGallery('Салон')};
heroMedia.addEventListener('pointerup',finishHeroGesture);heroMedia.addEventListener('pointercancel',()=>{heroPointer=null;heroMoved=false});

// VIEWER
const viewer=document.createElement('div');viewer.className='tn22-viewer';viewer.innerHTML=`<div class="tn22-viewer-frame"><div class="tn23-viewer-hint">Разведите двумя пальцами, чтобы увеличить</div><div class="tn22-viewer-top"><div class="tn22-viewer-actions"><button class="tn22-vbtn tn22-view-close" type="button" aria-label="Закрыть">×</button></div></div><div class="tn42-viewer-canvas"><img class="tn22-viewer-img" alt=""></div><button class="tn22-navbtn tn22-prev" type="button">‹</button><button class="tn22-navbtn tn22-next" type="button">›</button><div class="tn23-viewer-foot"><span class="tn23-viewer-label">Фото SALON NAME</span><span class="tn22-viewer-count">01 / 01</span></div><button class="tn22-view-gallery" type="button">Открыть галерею</button></div>`;root.appendChild(viewer);
let viewerItems=[],viewerIndex=0; const vFrame=viewer.querySelector('.tn22-viewer-frame'),vCanvas=viewer.querySelector('.tn42-viewer-canvas'),vImg=viewer.querySelector('.tn22-viewer-img'),vCount=viewer.querySelector('.tn22-viewer-count'),vPrev=viewer.querySelector('.tn22-prev'),vNext=viewer.querySelector('.tn22-next');
let sx=0,sy=0,viewerScale=1,viewerX=0,viewerY=0,pinchStart=0,pinchBaseScale=1,panStartX=0,panStartY=0,gestureHadPinch=false;
const pinchDist=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
function clampViewerPan(){if(viewerScale<=1){viewerX=0;viewerY=0;return}const maxX=(viewerScale-1)*vCanvas.clientWidth*.5,maxY=(viewerScale-1)*vCanvas.clientHeight*.5;viewerX=Math.max(-maxX,Math.min(maxX,viewerX));viewerY=Math.max(-maxY,Math.min(maxY,viewerY))}
function applyViewerTransform(){clampViewerPan();vImg.style.transform=`translate3d(${viewerX}px,${viewerY}px,0) scale(${viewerScale})`}
function resetViewerTransform(){viewerScale=1;viewerX=0;viewerY=0;pinchStart=0;pinchBaseScale=1;applyViewerTransform()}
function paintViewer(){const it=viewerItems[viewerIndex];if(!it)return;vImg.src=it.src;vImg.alt=it.alt||'';vCount.textContent=`${String(viewerIndex+1).padStart(2,'0')} из ${String(viewerItems.length).padStart(2,'0')}`;resetViewerTransform();vPrev.hidden=viewerItems.length<2;vNext.hidden=viewerItems.length<2;}
function openViewer(items,index=0,source='gallery'){viewerItems=Array.isArray(items)?items:[];if(!viewerItems.length)return;viewer.dataset.source=source;const galleryButton=viewer.querySelector('.tn22-view-gallery');if(galleryButton)galleryButton.hidden=source!=='portfolio';viewerIndex=Math.max(0,Math.min(index,viewerItems.length-1));paintViewer();viewer.classList.add('open');document.body.style.overflow='hidden'}
function closeViewer(){viewer.classList.remove('open');resetViewerTransform();if(!$('#tn13Gallery').classList.contains('open')&&!masterPage.classList.contains('open'))document.body.style.overflow=''}
vPrev.onclick=()=>{viewerIndex=(viewerIndex-1+viewerItems.length)%viewerItems.length;paintViewer()};vNext.onclick=()=>{viewerIndex=(viewerIndex+1)%viewerItems.length;paintViewer()};viewer.querySelector('.tn22-view-close').onclick=closeViewer;viewer.querySelector('.tn22-view-gallery').onclick=()=>{closeViewer();openGallery('Салон')};viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
vCanvas.addEventListener('touchstart',e=>{if(e.touches.length===2){e.preventDefault();gestureHadPinch=true;pinchStart=pinchDist(e);pinchBaseScale=viewerScale}else if(e.touches.length===1){sx=e.touches[0].clientX;sy=e.touches[0].clientY;panStartX=viewerX;panStartY=viewerY}},{passive:false});
vCanvas.addEventListener('touchmove',e=>{if(e.touches.length===2&&pinchStart){e.preventDefault();viewerScale=Math.max(1,Math.min(4,pinchBaseScale*(pinchDist(e)/pinchStart)));if(viewerScale<=1.01){viewerScale=1;viewerX=0;viewerY=0}applyViewerTransform()}else if(e.touches.length===1&&viewerScale>1){e.preventDefault();viewerX=panStartX+(e.touches[0].clientX-sx);viewerY=panStartY+(e.touches[0].clientY-sy);applyViewerTransform()}},{passive:false});
vCanvas.addEventListener('touchend',e=>{if(e.touches.length<2)pinchStart=0;if(e.touches.length===0){if(!gestureHadPinch&&viewerScale===1&&viewerItems.length>1&&e.changedTouches.length){const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)(dx<0?vNext:vPrev).click()}gestureHadPinch=false;if(viewerScale<=1.01)resetViewerTransform()}},{passive:false});

// GALLERY
const gallery=$('#tn13Gallery');let galleryCat='Салон';
function renderGallery(){const items=GALLERY[galleryCat]||[];gallery.innerHTML=`<div class="tn22-gallery"><div class="tn22-gallery-top"><button class="tn22-gallery-back" type="button">←</button><div class="tn22-gallery-title"><strong>${["en","hy"].includes(document.body.dataset.brLang)?"Gallery":"Галерея"}</strong><span>SALON NAME</span></div><div></div></div><div class="tn22-gallery-tabs-wrap"><div class="tn22-gallery-tabs">${Object.keys(GALLERY).map(c=>`<button class="tn22-gallery-tab${c===galleryCat?' active':''}" type="button" data-gcat="${c}">${c}</button>`).join('')}</div></div><div class="tn22-gallery-grid${galleryCat==='Салон'?' salon':''}">${items.length?items.map((x,i)=>`<button class="tn22-gallery-tile" type="button" data-gi="${i}"><img loading="lazy" decoding="async" src="${x.src}" alt="${x.alt}"></button>`).join(''):'<div class="tn23-gallery-empty">Фото ресниц пока не добавлены</div>'}</div></div>`;gallery.querySelector('.tn22-gallery-back').onclick=closeGallery;gallery.querySelectorAll('[data-gcat]').forEach(b=>b.onclick=()=>{galleryCat=b.dataset.gcat;renderGallery()});gallery.querySelectorAll('[data-gi]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();openViewer(items,+b.dataset.gi,'gallery')});}
let galleryCloseTimer=0;
function openGallery(cat='Салон'){clearTimeout(galleryCloseTimer);galleryCat=Object.prototype.hasOwnProperty.call(GALLERY,cat)?cat:'Салон';renderGallery();gallery.classList.remove('closing');gallery.scrollTop=0;requestAnimationFrame(()=>gallery.classList.add('open'))}
function closeGallery(){if(!gallery.classList.contains('open'))return;clearTimeout(galleryCloseTimer);gallery.classList.remove('open');gallery.classList.add('closing');galleryCloseTimer=setTimeout(()=>gallery.classList.remove('closing'),520)}
const heroWorksLink=hero.querySelector('.tn22-worklink');if(heroWorksLink)heroWorksLink.onclick=e=>{e.preventDefault();openGallery('Салон')};

const sectionItems=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn38About','О нас'],...(MASTERS.length?[['tn13Team','Команда']]:[]),['tn13Reviews','Отзывы'],['tn13Visit','Визит']];const sectionIds=sectionItems.map(x=>x[0]);const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.setAttribute('aria-hidden','true');sectionNav.innerHTML=sectionItems.map((x,i)=>`<button type="button" data-section="${x[0]}" class="${i===0?'active':''}">${x[1]}</button>`).join('');sectionNav.classList.add('salon-template-fixed-nav');document.body.appendChild(sectionNav);
let activeSection='tn13Portfolio',navRaf=0,navTargetLock=null,navUnlockTimer=0;
const mobileThemeMeta=document.querySelector('meta[name="theme-color"]');
function updateThemeChrome(){const visit=document.getElementById('tn13Visit');const dark=!!visit&&visit.getBoundingClientRect().top<=window.innerHeight-24&&window.scrollY>hero.offsetHeight-48;const desired=dark?'#181818':'#fafaf9';if(mobileThemeMeta&&mobileThemeMeta.getAttribute('content')!==desired)mobileThemeMeta.setAttribute('content',desired)}
function revealActiveNavButton(btn){const navRect=sectionNav.getBoundingClientRect(),btnRect=btn.getBoundingClientRect(),pad=10;let delta=0;if(btnRect.right>navRect.right-pad)delta=btnRect.right-(navRect.right-pad);else if(btnRect.left<navRect.left+pad)delta=btnRect.left-(navRect.left+pad);if(Math.abs(delta)>1)sectionNav.scrollBy({left:delta,behavior:'smooth'})}
function setActiveSection(id){if(!id)return;activeSection=id;const btn=sectionNav.querySelector(`[data-section="${id}"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));revealActiveNavButton(btn)}
function scrollSectionFromNav(id){clearTimeout(navUnlockTimer);if(id==='tn13Portfolio'){navTargetLock=null;setActiveSection('tn13Portfolio');const top=Math.max(0,window.scrollY+hero.getBoundingClientRect().top);window.scrollTo({top,behavior:'smooth'});return}const el=document.getElementById(id);if(!el)return;navTargetLock=id;setActiveSection(id);const top=Math.max(0,window.scrollY+el.getBoundingClientRect().top-sectionNav.offsetHeight+1);window.scrollTo({top,behavior:'smooth'});navUnlockTimer=setTimeout(()=>{navTargetLock=null;updateSectionNav()},900)}
sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>scrollSectionFromNav(b.dataset.section));
function updateSectionNav(){navRaf=0;const heroPassed=window.scrollY>=Math.max(0,hero.offsetTop+hero.offsetHeight-2);updateThemeChrome();sectionNav.classList.toggle('visible',heroPassed);sectionNav.setAttribute('aria-hidden',heroPassed?'false':'true');if(!heroPassed){navTargetLock=null;clearTimeout(navUnlockTimer);if(activeSection!=='tn13Portfolio')setActiveSection('tn13Portfolio');return}if(navTargetLock){if(activeSection!==navTargetLock)setActiveSection(navTargetLock);return}const line=sectionNav.getBoundingClientRect().bottom+3;let chosen=sectionIds[0];for(const id of sectionIds){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line){chosen=id;break}if(r.top<=line)chosen=id}if(chosen!==activeSection)setActiveSection(chosen)}
window.addEventListener('scroll',()=>{if(!navRaf)navRaf=requestAnimationFrame(updateSectionNav)},{passive:true});window.addEventListener('resize',updateSectionNav,{passive:true});requestAnimationFrame(updateSectionNav);

// PORTFOLIO
const port=$('#tn13Portfolio');port.innerHTML=`<div class="tn22-port"><p class="tn22-kicker">Портфолио</p><h2>Наши работы</h2><div class="tn22-port-grid">${PORTFOLIO.map((x,i)=>`<button class="tn22-photo" type="button" data-pi="${i}"><img loading="lazy" decoding="async" src="${x.src}" alt="${x.alt}"></button>`).join('')}</div><button class="tn22-port-all" type="button">Открыть галерею <span>→</span></button></div>`;port.querySelectorAll('[data-pi]').forEach(b=>b.onclick=()=>openViewer(PORTFOLIO,+b.dataset.pi,'portfolio'));port.querySelector('.tn22-port-all').onclick=()=>openGallery('Салон');

// SERVICES
const serv=$('#tn13Services');let serviceCat='Волосы',servicesExpanded=false;
const SERVICE_CATS=['Волосы',...[...new Set(SERVICES.map(s=>s.cat))].filter(c=>c!=='Волосы')];
serv.innerHTML=`<div class="tn31-services"><p class="tn22-kicker">Услуги</p><h2>Наши услуги</h2><div class="tn31-cats-wrap"><div class="tn31-cats"></div></div><div class="tn31-service-list"></div><button class="tn31-service-more" type="button"><span class="tn31-more-text"></span><span aria-hidden="true">↓</span></button></div>`;
const scats=serv.querySelector('.tn31-cats'),slist=serv.querySelector('.tn31-service-list'),sMore=serv.querySelector('.tn31-service-more');
function splitServiceTitle(raw){const parts=String(raw).split(' — ');const main=parts.shift()||raw;let detail=parts.join(' — ');if(!detail&&main.length>48){const m=main.match(/^(.*?)(\s\([^)]{5,}\)|\sBrazilian Blowout)$/i);if(m)return {main:m[1],detail:m[2].trim()}}return {main,detail}}
function serviceDurationValue(raw){const m=String(raw||'').match(/\d+(?:[.,]\d+)?/);return m?m[0]:''}
function mobileServiceLang(){const raw=(document.body.dataset.brLang||document.documentElement.lang||(navigator.languages&&navigator.languages[0])||navigator.language||'en').toLowerCase();return raw.startsWith('ru')?'ru':raw.startsWith('hy')?'hy':'en'}
function mobileDurationLabel(raw,lang=mobileServiceLang()){let v=serviceDurationValue(raw);if(!v)return '';v=lang==='ru'?v.replace('.',','):v.replace(',','.');return v+(lang==='hy'?' ժ.':lang==='en'?' h':' ч')}
function updateServiceDurationLabels(lang=mobileServiceLang()){slist?.querySelectorAll('.tn31-service-time[data-duration]').forEach(el=>{el.textContent=mobileDurationLabel(el.dataset.duration,lang)})}
function serviceLine(s){
 const t=splitServiceTitle(s.title);
 const isDuration=x=>/^\s*\d+(?:[.,]\d+)?\s*(?:ч(?:ас(?:а|ов)?)?|мин(?:ут(?:ы)?)?|h|hr|min)\s*$/i.test(String(x||''));
 const duration=isDuration(s.desc)?s.desc:(isDuration(t.detail)?t.detail:'');
 const detail=[t.detail,s.desc].filter(x=>x&&!isDuration(x)).join(' · ');
 const content=`<span class="tn31-service-copy"><strong class="tn31-service-name">${t.main}</strong>${detail?`<span class="tn31-service-detail">${detail}</span>`:''}</span><span class="tn31-service-side">${duration?`<small class="tn31-service-time" data-duration="${duration}">${mobileDurationLabel(duration)}</small>`:''}<span class="tn31-service-price">${s.price||'—'}</span></span>`;
 if(!s.details)return `<button class="tn31-service-row" type="button" data-book-service>${content}</button>`;
 // Description expands in place; each example uses a unique accessibility target.
 const detailId=s.title==='Сложное мелирование'?'tnDemoMeliorationDesc':'tnDemoRepairDesc';
 return `<div class="tn31-service-row tn31-service-demo"><button class="tn31-service-primary" type="button" data-book-service>${content}</button><div class="tn31-service-demo-desc"><p id="${detailId}">${s.details}</p><button class="tn31-service-demo-more" type="button" data-service-details aria-expanded="false" aria-controls="${detailId}">Подробнее…</button></div></div>`;
}
function serviceWord(n){const n10=n%10,n100=n%100;if(n10===1&&n100!==11)return 'услугу';if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';return 'услуг'}
/* Category selection must not auto-scroll the viewport or horizontal rail. */
function renderServices(){scats.innerHTML=SERVICE_CATS.map(c=>`<button class="tn31-cat${c===serviceCat?' active':''}" type="button" data-scat="${c}">${c}</button>`).join('');scats.querySelectorAll('[data-scat]').forEach(b=>b.onclick=()=>{const previousRailLeft=scats.scrollLeft;serviceCat=b.dataset.scat;servicesExpanded=false;renderServices();scats.scrollLeft=previousRailLeft});const arr=SERVICES.filter(s=>s.cat===serviceCat),shown=servicesExpanded?arr:arr.slice(0,7),remaining=Math.max(0,arr.length-7);slist.innerHTML=shown.map(serviceLine).join('');slist.querySelectorAll('[data-book-service]').forEach(b=>b.onclick=book);slist.querySelectorAll('[data-service-details]').forEach(b=>b.onclick=()=>{const row=b.closest('.tn31-service-demo');row.style.setProperty('--service-price-y',(row.offsetHeight/2)+'px');const expanded=row.classList.toggle('is-expanded');b.setAttribute('aria-expanded',String(expanded));b.textContent=expanded?'Свернуть':'Подробнее…';if(b.firstChild)b.firstChild.__brI18nCanonical=expanded?'Свернуть':'Подробнее…';});requestAnimationFrame(syncDemoPricePositions);sMore.hidden=arr.length<=7;sMore.querySelector('.tn31-more-text').textContent=servicesExpanded?'Свернуть':`Показать ещё ${remaining} ${serviceWord(remaining)}`;sMore.querySelector('span:last-child').textContent=servicesExpanded?'↑':'↓';updateServiceDurationLabels()}
function syncDemoPricePositions(){slist.querySelectorAll('.tn31-service-demo:not(.is-expanded)').forEach(row=>row.style.setProperty('--service-price-y',(row.offsetHeight/2)+'px'))}
sMore.onclick=()=>{servicesExpanded=!servicesExpanded;renderServices()};
window.addEventListener('salon-template:languagechange',e=>{updateServiceDurationLabels(e.detail&&e.detail.lang);requestAnimationFrame(syncDemoPricePositions)});
window.addEventListener('resize',()=>requestAnimationFrame(syncDemoPricePositions),{passive:true});
renderServices();

// TEAM + TEAM SHEET
const team=$('#tn13Team');team.hidden=!MASTERS.length;team.innerHTML=`<div class="tn22-team"><p class="tn22-kicker">Наша команда</p><h2>Мастера своего дела</h2><div class="tn22-team-grid">${MASTERS.map(m=>`<button class="tn22-master-card" type="button" data-mid="${m.id}"><span class="tn22-master-circle">${MASTER_AVATAR}</span><strong class="tn22-master-name">${m.name}</strong><span class="tn22-master-role">${m.role}</span></button>`).join('')}</div><div class="tn42-team-hint">Листайте <span>→</span></div></div>`;
const teamSheet=document.createElement('div');teamSheet.className='tn22-team-sheet';root.appendChild(teamSheet);

// MASTER PAGE
const masterPage=document.createElement('div');masterPage.className='tn22-master-page';masterPage.innerHTML=`<div class="tn22-master-shell"><div class="tn22-master-top"><button class="tn22-back" type="button">←</button><div class="tn22-master-brand">SALON NAME</div><span class="tn42-master-spacer" aria-hidden="true"></span></div><div class="tn22-master-body"></div></div><button class="tn22-master-book" type="button">Записаться онлайн</button>`;root.appendChild(masterPage);let masterCloseTimer=0;function closeMaster(){if(!masterPage.classList.contains('open'))return;clearTimeout(masterCloseTimer);masterPage.classList.remove('open');masterPage.classList.add('closing');masterCloseTimer=setTimeout(()=>masterPage.classList.remove('closing'),520)}masterPage.querySelector('.tn22-back').onclick=closeMaster;masterPage.querySelector('.tn22-master-book').onclick=book;let currentMaster=null,currentMasterTab='Профиль';
function masterReviews(m){return REVIEW_DATA.filter(r=>m.reviewNames.includes(r[0]));}
function renderMasterTab(){const body=masterPage.querySelector('.tn22-master-content');if(!body||!currentMaster)return;if(currentMasterTab==='Профиль'){body.innerHTML=`<h3>О мастере</h3><p class="tn22-master-about" style="text-align:left;margin:0">${currentMaster.about}</p>`}else if(currentMasterTab==='Услуги'){const arr=SERVICES.filter(s=>currentMaster.cats.includes(s.cat)).slice(0,8);body.innerHTML=`<h3>Услуги</h3>${arr.length?arr.map(s=>`<div class="tn22-master-service"><b>${s.title}</b><span>Записаться</span></div>`).join(''):'<p class="tn22-master-about" style="text-align:left;margin:0">Пока нет данных об услугах.</p>'}`}else if(currentMasterTab==='Портфолио'){body.innerHTML=`<h3>Портфолио</h3><div class="tn22-master-works">${currentMaster.work.length?currentMaster.work.map(src=>`<img loading="lazy" decoding="async" src="${src}" alt="Работа ${currentMaster.name}">`).join(''):'<p class="tn22-master-about" style="grid-column:1/-1;text-align:left;margin:0">Пока нет фото.</p>'}</div>`}else{const rs=masterReviews(currentMaster);body.innerHTML=`<h3>Отзывы</h3>${rs.length?rs.map(r=>`<div class="tn22-master-review"><strong>${r[0]}</strong><p>${r[1]}</p></div>`).join(''):'<p class="tn22-master-about" style="text-align:left;margin:0">Пока нет отзывов.</p>'}`}}
function openMaster(id){currentMaster=MASTERS.find(m=>m.id===id);if(!currentMaster)return;currentMasterTab='Профиль';const b=masterPage.querySelector('.tn22-master-body');b.innerHTML=`<div class="tn22-profile"><div class="tn22-profile-circle">${MASTER_AVATAR}</div><h1>${currentMaster.name}</h1><div class="tn22-profile-role">${currentMaster.role}</div><div class="tn22-salon-rating"><b>★</b> — <span>рейтинг не указан</span></div></div><div class="tn22-master-tabs">${['Профиль','Услуги','Портфолио','Отзывы'].map(t=>`<button class="${t==='Профиль'?'active':''}" type="button" data-mtab="${t}">${t}</button>`).join('')}</div><div class="tn22-master-content"></div>`;b.querySelectorAll('[data-mtab]').forEach(x=>x.onclick=()=>{currentMasterTab=x.dataset.mtab;b.querySelectorAll('[data-mtab]').forEach(y=>y.classList.toggle('active',y===x));renderMasterTab()});renderMasterTab();teamSheet.classList.remove('open');clearTimeout(masterCloseTimer);masterPage.classList.remove('closing');masterPage.scrollTop=0;requestAnimationFrame(()=>masterPage.classList.add('open'))}
team.querySelectorAll('[data-mid]').forEach(b=>b.onclick=()=>openMaster(b.dataset.mid));teamSheet.querySelectorAll('[data-sheet-mid]').forEach(b=>b.onclick=()=>openMaster(b.dataset.sheetMid));

// REVIEWS
const reviews=$('#tn13Reviews');
const REAL_REVIEW_DATA=[["Клиент 1","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 2","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 3","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 4","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 5","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 6","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 7","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 8","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 9","Текст отзыва клиента будет добавлен при заполнении шаблона."]];
const reviewInitial=n=>([...String(n).trim()][0]||'S').toUpperCase();
const reviewHref=()=>REVIEWS_URL;
const reviewCard=r=>`<a class="tn30-review-card" href="${reviewHref(r)}" aria-disabled="true"><div class="tn30-review-head"><span class="tn30-review-avatar">${reviewInitial(r[0])}</span><span><strong class="tn30-review-name">${r[0]}</strong><span class="tn30-review-meta">Источник отзыва</span></span></div><p>${r[1]}</p><span class="tn30-review-open">Подробнее →</span></a>`;
const reviewLanes=[0,1,2].map(row=>REAL_REVIEW_DATA.filter((_,i)=>i%3===row));
reviews.innerHTML=`<div class="tn30-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="tn30-score"><strong>—</strong><div class="tn30-stars">★★★★★</div><div class="tn30-count">Отзывы будут добавлены</div></div><div class="tn30-review-stage">${reviewLanes.map((lane,i)=>{const loop=[lane[lane.length-1],...lane,lane[0]];return `<div class="tn30-lane" data-lane="${i}"><div class="tn30-track">${loop.map(reviewCard).join('')}</div></div>`}).join('')}</div><a class="tn30-review-all" href="${REVIEWS_URL}" aria-disabled="true">Смотреть все отзывы →</a></div>`;
const reviewStage=reviews.querySelector('.tn30-review-stage'),reviewTracks=[...reviews.querySelectorAll('.tn30-track')];
let reviewIndex=1,reviewPauseTimer=0,reviewMotionTimer=0,reviewDragging=false,reviewMoved=false,reviewSuppressClick=false,reviewStartX=0,reviewStartY=0,reviewDx=0;
const reviewGap=12,reviewDuration=780,reviewGroupCount=Math.max(1,...reviewLanes.map(l=>l.length));
function reviewMetrics(){const lane=reviews.querySelector('.tn30-lane'),card=reviews.querySelector('.tn30-review-card');const width=card?card.getBoundingClientRect().width:0;return {step:width+reviewGap,edge:lane?Math.max(0,(lane.clientWidth-width)/2):26}}
function paintReviewTracks(animated,drag=0){const {step,edge}=reviewMetrics();reviewTracks.forEach(t=>{t.style.transition=animated?`transform ${reviewDuration}ms cubic-bezier(.22,.66,.24,1)`:'none';t.style.transform=`translate3d(${edge-reviewIndex*step+drag}px,0,0)`})}
function scheduleReviews(){clearTimeout(reviewPauseTimer);reviewPauseTimer=setTimeout(()=>moveReviews(reviewIndex+1),4000)}
function normalizeReviewIndex(){if(reviewIndex===0){reviewIndex=reviewGroupCount;paintReviewTracks(false)}else if(reviewIndex===reviewGroupCount+1){reviewIndex=1;paintReviewTracks(false)}}
function moveReviews(next){clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,next));paintReviewTracks(true);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+40)}
requestAnimationFrame(()=>{paintReviewTracks(false);scheduleReviews()});
window.addEventListener('resize',()=>paintReviewTracks(false),{passive:true});
reviewStage.addEventListener('pointerdown',e=>{clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewDragging=true;reviewMoved=false;reviewDx=0;reviewStartX=e.clientX;reviewStartY=e.clientY;reviewStage.classList.add('dragging');paintReviewTracks(false);try{reviewStage.setPointerCapture(e.pointerId)}catch(_){}});
reviewStage.addEventListener('pointermove',e=>{if(!reviewDragging)return;const dx=e.clientX-reviewStartX,dy=e.clientY-reviewStartY;if(!reviewMoved&&Math.abs(dx)<6)return;if(!reviewMoved&&Math.abs(dy)>Math.abs(dx))return;reviewMoved=true;reviewDx=dx;paintReviewTracks(false,reviewDx)});
function finishReviewDrag(e){if(!reviewDragging)return;reviewDragging=false;reviewStage.classList.remove('dragging');try{reviewStage.releasePointerCapture(e.pointerId)}catch(_){}const {step}=reviewMetrics();if(reviewMoved&&Math.abs(reviewDx)>Math.min(70,step*.16))reviewIndex+=reviewDx<0?1:-1;reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,reviewIndex));reviewSuppressClick=reviewMoved;reviewDx=0;paintReviewTracks(true);clearTimeout(reviewMotionTimer);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+40)}
reviewStage.addEventListener('pointerup',finishReviewDrag);reviewStage.addEventListener('pointercancel',finishReviewDrag);reviewStage.addEventListener('click',e=>{if(reviewSuppressClick){e.preventDefault();e.stopPropagation();reviewSuppressClick=false}},true);

// VISIT
const visit=$('#tn13Visit');
const iconPin=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg></span>`;
const iconPhone=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg></span>`;
const iconMessage=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg></span>`;
const iconClock=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg></span>`;
const statusClock=`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg>`;
visit.innerHTML=`<div class="tn22-visit"><div class="tn22-visit-head"><p class="tn22-kicker">Контакты</p><span class="tn22-status" id="tn22Status">${statusClock}<span class="tn22-status-text"></span></span></div><h2>Ждём вас</h2><div class="tn22-contact-grid"><a class="tn22-contact" href="#tn13Visit" aria-disabled="true">${iconPin}<span><strong>Город, Адрес салона</strong><span>Адрес салона</span></span></a><a class="tn22-contact" href="#tn13Visit" aria-disabled="true">${iconPhone}<span><strong>Телефон салона</strong><span>Контакт будет добавлен</span></span></a><a class="tn22-contact" href="#tn13Visit" aria-disabled="true">${iconMessage}<span><strong>Мессенджер</strong><span>Контакт будет добавлен</span></span></a><div class="tn22-contact">${iconClock}<span><strong>График работы</strong><span>Уточняется</span></span></div></div><div class="tn22-mapwrap"><div class="tn22-map-skeleton">Загружаем карту…</div><iframe title="Карта SALON NAME" loading="lazy" src="about:blank"></iframe></div><div class="tn22-visit-actions"><a class="tn22-visit-btn tn22-call" href="#tn13Visit" aria-disabled="true">Позвонить</a><a class="tn22-visit-btn tn22-route" href="#tn13Visit" aria-disabled="true">Построить маршрут</a></div><a class="tn22-footer" href="https://tanem.ru/" target="_blank" rel="noopener"><strong>TANEM.ru</strong><span>Цифровой офис для салонов красоты</span></a></div>`;
const map=visit.querySelector('.tn22-mapwrap'),iframe=map.querySelector('iframe');iframe.addEventListener('load',()=>map.classList.add('loaded'));setTimeout(()=>map.classList.add('loaded'),5000);
function status(){const el=visit.querySelector('#tn22Status'),txt=el&&el.querySelector('.tn22-status-text');if(txt)txt.textContent='График работы';if(el)el.className='tn22-status';const hs=hero.querySelector('.tn50-hero-status');if(hs){const main=hs.querySelector('.tn50-hero-status-main'),sub=hs.querySelector('.tn50-hero-status-sub');if(main)main.textContent='График';if(sub)sub.textContent='Уточняется';hs.classList.remove('open','closed')}}status();

// STICKY
const sticky=$('#tn13Sticky');if(sticky){sticky.innerHTML=`<strong>Доступно ${SERVICES.length} ${serviceWord(SERVICES.length)}</strong><button type="button">Записаться</button>`;sticky.querySelector('button').onclick=book}

const oldMaster=$('#tn13MasterSheet');if(oldMaster)oldMaster.style.display='none';document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(viewer.classList.contains('open'))closeViewer();else if(masterPage.classList.contains('open'))closeMaster();else if(teamSheet.classList.contains('open'))teamSheet.classList.remove('open');else if(gallery.classList.contains('open'))closeGallery()});
})();

(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:1023px)').matches||window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches)return;
const root=document.getElementById('salon-mobile');
if(!root||document.getElementById('tn38About'))return;
const services=root.querySelector('#tn13Services');
if(!services)return;

const style=document.createElement('style');
style.id='tn42-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#EBE5DC!important;color:#171513!important;overflow:hidden!important}
.tn42-about{padding:40px 18px 58px}
.tn42-kicker{margin:0 3px 18px;font:600 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#88786e}
.tn42-card{max-width:500px;margin:0 auto;border:1px solid rgba(66,55,49,.11);border-radius:27px;overflow:hidden;background:#fff;box-shadow:0 14px 34px rgba(40,45,50,.08)}
.tn42-photo{position:relative;height:238px;background:#171513;overflow:hidden}
.tn42-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center center;filter:none!important}
.tn42-rating{position:absolute;left:12px;bottom:12px;height:32px;padding:0 10px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(18,17,16,.72);backdrop-filter:blur(10px);display:flex;align-items:center;gap:6px;color:#fff;box-shadow:0 5px 14px rgba(0,0,0,.13)}
.tn42-rating-star{font-size:11px;line-height:1;color:#d6ad6b}
.tn42-rating strong{font:600 13px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn42-rating span{font:500 7.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.035em;color:rgba(255,255,255,.7)}
.tn42-body{padding:24px 18px 18px}
.tn42-lead{margin:0;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif;letter-spacing:-.032em;color:#1d1a18}
.tn42-copy{margin:17px 0 0;font:400 12.8px/1.62 'Manrope',Arial,sans-serif;color:#58504a}
.tn42-facts{display:grid;gap:8px;margin-top:22px}
.tn42-fact{min-height:54px;display:flex;align-items:center;padding:0 15px;border:1px solid rgba(64,52,45,.09);border-radius:14px;background:rgba(255,255,255,.78);box-shadow:0 4px 12px rgba(50,39,32,.035);font:500 12.5px/1.3 'Manrope',Arial,sans-serif;color:#292521}
@media(max-width:370px){.tn42-about{padding-left:14px;padding-right:14px}.tn42-photo{height:218px}.tn42-body{padding-left:16px;padding-right:16px}.tn42-lead{font-size:25px}.tn42-copy{font-size:12.3px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn42-about"><p class="tn42-kicker">О нас</p><div class="tn42-card"><div class="tn42-photo"><img src="media-placeholder.svg" alt="SALON NAME" loading="lazy"><div class="tn42-rating"><span class="tn42-rating-star">★</span><strong>—</strong><span>рейтинг не указан</span></div></div><div class="tn42-body"><p class="tn42-lead">SALON NAME — салон красоты.</p><p class="tn42-copy">Описание салона будет добавлено при заполнении шаблона.</p><div class="tn42-facts"><div class="tn42-fact">Мастера разных направлений</div><div class="tn42-fact">Комфортная атмосфера</div><div class="tn42-fact">Индивидуальный подход</div></div></div></div></div>`;
services.insertAdjacentElement('afterend',about);
})();

/* Reveal the enhanced site only after the complete bundle has initialized. */
(()=>{
  const root=document.getElementById('salon-mobile');
  if(!root) return;
  root.dataset.brAppReady='1';
  document.body.classList.add('br-app-ready');
})();

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

    const style=document.createElement('style');
    style.id='salon-mobile-ui-style';
    style.textContent=`
    @media(max-width:1023px){

      #salon-mobile .tn13-hero{height:744px!important;min-height:744px!important;max-height:none!important;padding:0!important;background:#FAF8F4!important;position:relative!important;overflow:hidden!important}
      .tn22-media{position:absolute!important;top:52px!important;left:50%!important;right:auto!important;width:100vw!important;height:372px!important;min-height:0!important;transform:translateX(-50%)!important;overflow:hidden!important;padding:0!important;margin:0!important;border:0!important}
      .tn22-media .tn22-slide,.tn22-media img{inset:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;display:block!important}
      .tn22-media img{object-fit:cover!important}
      .tn22-card{position:absolute!important;z-index:8!important;top:343px!important;left:15px!important;right:15px!important;bottom:0!important;height:auto!important;display:block!important;padding:20px 20px 24px!important;border-radius:13px 13px 0 0!important;text-align:center!important}
      .tn22-title{margin:0!important;font:500 49px/.88 'Cormorant Garamond',Georgia,serif!important;letter-spacing:.18em!important;text-indent:.18em!important;text-align:center!important;text-transform:uppercase!important}
      .tn22-sub{margin:12px 0 17px!important;font:500 10.5px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.38em!important;text-indent:.38em!important;text-transform:uppercase!important;color:#635d58!important}
      .tn22-copy{display:none!important}
      .tn37-hero-info{width:min(100%,330px)!important;margin:37px auto 0!important;display:grid!important;grid-template-columns:1fr 1px 1.18fr!important;align-items:center!important;gap:12px!important;text-align:left!important}
      .tn37-info-divider{width:1px!important;height:42px!important}
      .tn37-info{grid-template-columns:40px minmax(0,1fr)!important;gap:9px!important}
      .tn37-info-icon{width:40px!important;height:40px!important}
      .tn37-info-copy{font:400 10.5px/1.28 'Manrope',Arial,sans-serif!important}
      .tn37-info-copy strong{font:500 11.5px/1.1 'Manrope',Arial,sans-serif!important}
      .tn22-cta{display:flex!important;width:min(100%,330px)!important;height:50px!important;margin:18px auto 0!important;align-items:center!important;justify-content:center!important;gap:12px!important;border:0!important;border-radius:8px!important;background:#715b53!important;color:#fff!important;font:500 14px/1 'Manrope',Arial,sans-serif!important;transition:transform .14s ease,background .14s ease!important}
      .tn22-cta:active{transform:translateY(1px) scale(.992)!important;background:#654f48!important}
      .tn22-worklink{display:flex!important;width:min(100%,330px)!important;height:48px!important;margin:10px auto 0!important;align-items:center!important;justify-content:center!important;gap:11px!important;border-radius:8px!important;border:1px solid rgba(113,91,83,.38)!important;background:#efe7e1!important;color:#2f2926!important;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif!important;transition:transform .14s ease,background .14s ease,color .14s ease!important}
      .tn22-worklink:active{transform:translateY(2px) scale(.988)!important;background:#715b53!important;color:#fff!important;border-color:#715b53!important}


      #tn13Portfolio{min-height:824px!important}
      #tn13Portfolio .tn22-port{padding-top:22px!important}

      /* SERVICES — categories live inside exactly the same 25px content line as service rows. */
      #tn13Services{background:#242424!important;color:#f3f3f3!important;border-color:rgba(255,255,255,.08)!important}
      #tn13Services .tn22-kicker{color:#bdbdbd!important}
      #tn13Services h2,#tn13Services .tn31-service-name{color:#f5f5f5!important}
      #tn13Services .tn31-cats-wrap{position:relative!important;margin:25px -25px 0!important;overflow:hidden!important}
      #tn13Services .tn31-cats{display:flex!important;align-items:center!important;gap:8px!important;overflow-x:auto!important;overscroll-behavior-inline:contain!important;-webkit-overflow-scrolling:touch!important;padding:0 0 11px!important;scroll-padding-left:36px!important;scroll-padding-right:25px!important;box-sizing:border-box!important}
      #tn13Services .tn31-cats:before,#tn13Services .tn31-cats:after{content:''!important;display:block!important;height:1px!important;pointer-events:none!important}#tn13Services .tn31-cats:before{flex:0 0 10px!important;width:10px!important}#tn13Services .tn31-cats:after{flex:0 0 25px!important;width:25px!important}
      #tn13Services .tn31-cat{border-color:rgba(255,255,255,.20)!important;color:#d2d2d2!important;background:rgba(255,255,255,.03)!important}
      #tn13Services .tn31-cat.active{background:#f7f2eb!important;border-color:#f7f2eb!important;color:#2f2926!important}
      #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
      #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
      #tn13Services .tn31-service-detail{color:#bdbdbd!important}
      #tn13Services .tn31-service-book{color:#e0e0e0!important}
      #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.24)!important;background:rgba(255,255,255,.04)!important;color:#f2f2f2!important}
      #tn13Services .tn31-service-more span:last-child{color:#d3d3d3!important}

      /* ABOUT — keep salon name serif, supporting copy modern; facts a brighter warm tone. */
      #tn38About .tn42-card{background:#fff!important;border-color:rgba(66,55,49,.14)!important}
      #tn38About .tn42-body{background:#fff!important}
      #tn38About .tn42-lead{font:400 27px/1.08 'Cormorant Garamond',Georgia,serif!important}
      #tn38About .br-about-brand{display:block!important;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.032em!important;color:#1d1a18!important}
      #tn38About .br-about-kind{display:block!important;margin-top:9px!important;font:500 12px/1.35 'Manrope',Arial,sans-serif!important;letter-spacing:.015em!important;color:#665c56!important}
      #tn38About .tn42-copy{font:400 12.8px/1.62 'Manrope',Arial,sans-serif!important;color:#58504a!important}
      #tn38About .tn42-fact{background:#f3f4f5!important;border-color:rgba(64,52,45,.10)!important;box-shadow:none!important}


      #tn13Team{margin:0!important;padding:0!important;background:#242424!important;color:#f5f5f5!important}
      #tn13Team .tn22-team{padding:42px 28px 38px!important;overflow:hidden!important}
      #tn13Team .tn22-kicker{color:#bdbdbd!important}
      #tn13Team h2{font-size:40px!important;color:#f5f5f5!important}
      #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;gap:14px!important;margin:30px 0 0!important;padding:0 0 8px!important;overflow-x:auto!important;overflow-y:hidden!important;overscroll-behavior-x:contain!important;overscroll-behavior-y:auto!important;touch-action:pan-x pan-y!important;-webkit-overflow-scrolling:touch!important;scroll-snap-type:x proximity!important;scrollbar-width:none!important}
      #tn13Team .tn22-master-card{flex:0 0 136px!important;width:auto!important;min-width:136px!important;scroll-snap-align:start!important;border:0!important;background:none!important;padding:0!important;text-align:center!important;color:#f5f5f5!important;touch-action:manipulation!important}
      #tn13Team .tn22-master-circle{width:100%!important;aspect-ratio:1/1!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#4a4542,#34302e)!important;overflow:hidden!important;color:#d8d0ca!important;border:1px solid rgba(255,255,255,.08)!important}
      #tn13Team .tn22-master-name{display:block!important;margin-top:11px!important;font:500 20px/1 'Cormorant Garamond',Georgia,serif!important;color:#f5f5f5!important;white-space:normal!important}
      #tn13Team .tn22-master-role{display:block!important;margin-top:5px!important;font:400 10px/1.3 'Manrope',Arial,sans-serif!important;color:#bdb5b0!important}
      #tn13Team .tn42-team-hint{display:block!important;margin-top:8px!important;text-align:right!important;color:#b7afa9!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important}

      /* REVIEWS — one infinite carousel; every slide = exactly three stacked reviews. */
      #tn13Reviews{margin:0!important;padding:0!important;background:#F7F4EF!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07)!important;border-bottom:1px solid rgba(62,51,44,.07)!important}
      #tn13Reviews .br-reviews{padding:44px 0 46px!important}
      #tn13Reviews .br-reviews>.tn22-kicker,#tn13Reviews .br-reviews>h2{margin-left:24px!important;margin-right:24px!important}
      #tn13Reviews .br-reviews .tn22-kicker{color:#746c66!important}
      #tn13Reviews .br-reviews h2{margin:16px 24px 0!important;font:500 46px/.96 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.03em!important;color:#171513!important}
      #tn13Reviews .br-score{text-align:center!important;margin-top:43px!important}
      #tn13Reviews .br-score strong{display:block!important;font:500 84px/.82 'Cormorant Garamond',Georgia,serif!important;color:#171513!important}
      #tn13Reviews .br-stars{margin-top:20px!important;color:#E4AD35!important;font-size:27px!important;letter-spacing:6px!important}
      #tn13Reviews .br-count{margin-top:14px!important;font:400 13px/1 'Manrope',Arial,sans-serif!important;color:#716862!important}
      #tn13Reviews .br-review-viewport{margin-top:37px!important;overflow:hidden!important;touch-action:pan-y!important;user-select:none!important;cursor:grab!important}
      #tn13Reviews .br-review-viewport.dragging{cursor:grabbing!important}
      #tn13Reviews .br-review-track{display:flex!important;align-items:stretch!important;gap:12px!important;width:max-content!important;will-change:transform!important}
      #tn13Reviews .br-review-page{flex:0 0 calc(100vw - 52px)!important;width:calc(100vw - 52px)!important;box-sizing:border-box!important;display:grid!important;gap:12px!important}
      #tn13Reviews .br-review-card{box-sizing:border-box!important;height:184px!important;min-height:184px!important;padding:16px 17px 17px!important;border:1px solid rgba(66,55,49,.15)!important;border-radius:13px!important;background:#f6f7f8!important;text-decoration:none!important;color:#171513!important;overflow:hidden!important}
      #tn13Reviews .br-review-head{display:grid!important;grid-template-columns:45px minmax(0,1fr)!important;gap:12px!important;align-items:center!important}
      #tn13Reviews .br-review-avatar{width:43px!important;height:43px!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:#e4e6e8!important;border:1px solid rgba(66,55,49,.1)!important;font:500 22px/1 'Cormorant Garamond',Georgia,serif!important;color:#514943!important}
      #tn13Reviews .br-review-name{display:block!important;font:600 19px/1 'Cormorant Garamond',Georgia,serif!important;color:#2a2522!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
      #tn13Reviews .br-review-meta{display:flex!important;align-items:center!important;gap:7px!important;margin-top:5px!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important;color:#8a817a!important}
      #tn13Reviews .br-review-meta-stars{color:#E4AD35!important;letter-spacing:1px!important;font-size:10px!important}
      #tn13Reviews .br-review-card p{margin:14px 0 0!important;font:400 12.5px/1.5 'Manrope',Arial,sans-serif!important;color:#4f4843!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:4!important;overflow:hidden!important}
      #tn13Reviews .br-review-open{display:block!important;margin-top:10px!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;color:#655b54!important}
      #tn13Reviews .br-review-all{display:flex!important;align-items:center!important;justify-content:center!important;margin:28px 22px 0!important;height:46px!important;border:1px solid rgba(66,55,49,.18)!important;border-radius:7px!important;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.15em!important;text-transform:uppercase!important;background:rgba(255,255,255,.18)!important}

      /* CONTACTS + TANEM. */
      #tn13Visit{background:#2f2926!important}
      #tn13Visit .tn22-contact[href^="tel:"] strong{font:400 15.5px/1.2 'Manrope',Arial,sans-serif!important;letter-spacing:.01em!important}
      #tn13Visit .tn22-footer{margin:28px -24px 0!important;height:88px!important;min-height:88px!important;background:#11100f!important;color:#fff!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;padding:10px 24px 12px!important;text-decoration:none!important;border:0!important}
      #tn13Visit .br-tanem-mark{width:30px!important;height:30px!important;border:1px solid rgba(255,255,255,.42)!important;border-radius:8px!important;display:grid!important;place-items:center!important;font:500 21px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
      #tn13Visit .br-tanem-copy{display:block!important;max-width:none!important;text-align:center!important;font:400 10px/1.2 'Manrope',Arial,sans-serif!important;color:#cfc8c4!important}
      #tn13Visit .br-tanem-copy strong{display:inline!important;font:500 15px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
    }
    @media(max-width:1023px) and (orientation:landscape){
      html,body{overflow-x:hidden!important}
      #salon-mobile .tn13-hero{height:744px!important;min-height:744px!important}
      #salon-mobile .tn22-media{height:372px!important}
      #salon-mobile .tn22-card{
        top:343px!important;
        left:50%!important;
        right:auto!important;
        width:min(calc(100vw - 30px),520px)!important;
        transform:translateX(-50%)!important;
      }
    }
    `;
    document.head.appendChild(style);

    /* Remove only the client-rejected descriptive sentence. */
    const heroCopy=document.querySelector('#salon-mobile .tn22-copy');
    if(heroCopy) heroCopy.remove();

    /* Update only About copy/typography. */
    const aboutLead=document.querySelector('#salon-mobile #tn38About .tn42-lead');
    if(aboutLead){
      aboutLead.innerHTML='<span class="br-about-brand">SALON NAME</span><span class="br-about-kind">Салон красоты</span>';
    }
    const aboutCopy=document.querySelector('#salon-mobile #tn38About .tn42-copy');
    if(aboutCopy){
      aboutCopy.textContent='Описание салона будет добавлено при заполнении шаблона.';
    }

    /* Client migration compatibility removed in the clean template. */

    /* Rebuild only reviews: 3 stacked cards per slide, centered with neighbor edges visible. */
    const reviewsRoot=document.querySelector('#salon-mobile #tn13Reviews');
    if(reviewsRoot){
      const REVIEW_URL='#tn13Reviews';
      const reviewData=[["Клиент 1","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 2","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 3","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 4","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 5","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 6","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 7","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 8","Текст отзыва клиента будет добавлен при заполнении шаблона."],["Клиент 9","Текст отзыва клиента будет добавлен при заполнении шаблона."]];
      const initial=name=>([...String(name).trim()][0]||'B').toUpperCase();
      const card=r=>`<a class="br-review-card" href="${REVIEW_URL}" aria-disabled="true"><div class="br-review-head"><span class="br-review-avatar">${initial(r[0])}</span><span><strong class="br-review-name">${r[0]}</strong><span class="br-review-meta"><span>Источник отзыва</span><span class="br-review-meta-stars">★★★★★</span></span></span></div><p>${r[1]}</p><span class="br-review-open">Подробнее →</span></a>`;
      const groups=[];
      for(let i=0;i<reviewData.length;i+=3){const group=reviewData.slice(i,i+3);while(group.length<3)group.push(reviewData[(i+group.length)%reviewData.length]);groups.push(group)}
      const page=g=>`<div class="br-review-page">${g.map(card).join('')}</div>`;
      const loop=[groups[groups.length-1],...groups,groups[0]];
      reviewsRoot.innerHTML=`<div class="br-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="br-score"><strong>—</strong><div class="br-stars">★★★★★</div><div class="br-count">Отзывы будут добавлены</div></div><div class="br-review-viewport"><div class="br-review-track">${loop.map(page).join('')}</div></div><a class="br-review-all" href="${REVIEW_URL}" aria-disabled="true">Смотреть все отзывы →</a></div>`;

      const viewport=reviewsRoot.querySelector('.br-review-viewport');
      const track=reviewsRoot.querySelector('.br-review-track');
      let pageIndex=1,startX=0,startY=0,dx=0,dragging=false,moved=false,autoTimer=0,gestureAxis=null,capturedPointer=null;
      const total=groups.length;
      const gap=12;
      const metrics=()=>{
        const page=track.querySelector('.br-review-page');
        const width=page?page.getBoundingClientRect().width:Math.max(0,window.innerWidth-52);
        return {width,step:width+gap,edge:Math.max(0,(viewport.clientWidth-width)/2)};
      };
      const paint=(animate=true,drag=0)=>{
        const {step,edge}=metrics();
        track.style.transition=animate?'transform 650ms cubic-bezier(.22,.66,.24,1)':'none';
        track.style.transform=`translate3d(${edge-pageIndex*step+drag}px,0,0)`;
      };
      const schedule=()=>{
        clearTimeout(autoTimer);
        autoTimer=setTimeout(()=>{
          pageIndex+=1;
          paint(true);
        },3200);
      };
      const normalize=()=>{
        if(pageIndex===0){
          pageIndex=total;
          paint(false);
        }else if(pageIndex===total+1){
          pageIndex=1;
          paint(false);
        }
      };
      track.addEventListener('transitionend',()=>{
        normalize();
        schedule();
      });
      viewport.addEventListener('pointerdown',e=>{
        clearTimeout(autoTimer);
        dragging=true;
        moved=false;
        gestureAxis=null;
        capturedPointer=null;
        dx=0;
        startX=e.clientX;
        startY=e.clientY;
      });
      viewport.addEventListener('pointermove',e=>{
        if(!dragging)return;
        const x=e.clientX-startX,y=e.clientY-startY;
        if(!gestureAxis){
          if(Math.max(Math.abs(x),Math.abs(y))<7)return;
          if(Math.abs(y)>Math.abs(x)){
            gestureAxis='vertical';
            dragging=false;
            viewport.classList.remove('dragging');
            schedule();
            return;
          }
          gestureAxis='horizontal';
          viewport.classList.add('dragging');
          capturedPointer=e.pointerId;
          try{viewport.setPointerCapture(e.pointerId)}catch(_){}
        }
        if(gestureAxis!=='horizontal')return;
        moved=true;
        dx=x;
        paint(false,dx);
      });
      const endDrag=e=>{
        if(!dragging)return;
        dragging=false;
        viewport.classList.remove('dragging');
        if(capturedPointer!==null){try{viewport.releasePointerCapture(capturedPointer)}catch(_){}}
        capturedPointer=null;
        gestureAxis=null;
        const {step}=metrics();
        if(moved&&Math.abs(dx)>Math.min(70,step*.16)) pageIndex+=dx<0?1:-1;
        pageIndex=Math.max(0,Math.min(total+1,pageIndex));
        dx=0;
        paint(true);
        if(!moved)schedule();
      };
      viewport.addEventListener('pointerup',endDrag);
      viewport.addEventListener('pointercancel',endDrag);
      viewport.addEventListener('click',e=>{
        if(moved){e.preventDefault();e.stopPropagation();moved=false}
      },true);
      window.addEventListener('resize',()=>paint(false),{passive:true});
      paint(false);
      schedule();
    }

    /* Replace only the TANEM footer content with the compact badge. */
    const tanemFooter=document.querySelector('#salon-mobile #tn13Visit .tn22-footer');
    if(tanemFooter){
      tanemFooter.innerHTML='<span class="br-tanem-mark">T</span><span class="br-tanem-copy">Создано в <strong>TANEM.ru</strong></span>';
    }

    /* Make browser/system chrome dark whenever the contacts section is visible. */
    let themeMeta=document.querySelector('meta[name="theme-color"]');
    if(!themeMeta){
      themeMeta=document.createElement('meta');
      themeMeta.name='theme-color';
      document.head.appendChild(themeMeta);
    }
    let appleStatus=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if(!appleStatus){
      appleStatus=document.createElement('meta');
      appleStatus.name='apple-mobile-web-app-status-bar-style';
      document.head.appendChild(appleStatus);
    }
    const lightTheme='#f8f4ee',darkTheme='#11100f';
    const visit=document.querySelector('#salon-mobile #tn13Visit');
    const applySystemTheme=dark=>{
      themeMeta.setAttribute('content',dark?darkTheme:lightTheme);
      appleStatus.setAttribute('content',dark?'black-translucent':'default');
      document.documentElement.style.backgroundColor=dark?darkTheme:lightTheme;
      document.body.style.backgroundColor=dark?darkTheme:lightTheme;
    };
    const syncSystemTheme=()=>{
      if(!visit){applySystemTheme(false);return}
      const rect=visit.getBoundingClientRect();
      applySystemTheme(rect.top<window.innerHeight && rect.bottom>0);
    };
    syncSystemTheme();
    window.addEventListener('scroll',syncSystemTheme,{passive:true});
    window.addEventListener('resize',syncSystemTheme,{passive:true});
    window.addEventListener('orientationchange',syncSystemTheme,{passive:true});

    /* All external destinations open separately from the site. */
    document.querySelectorAll('#salon-mobile a[href]').forEach(a=>{
      const href=(a.getAttribute('href')||'').trim();
      if(/^(https?:|viber:)/i.test(href)){
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener');
      }
    });

})();

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  const VIBER_URL="#tn13Visit";

  function ensureStyle(){
    if(document.getElementById('salon-mobile-booking-style')) return;
    const style=document.createElement('style');
    style.id='salon-mobile-booking-style';
    style.textContent=`
      @media(max-width:1023px){
        /* Booking sheet: smooth entrance from the bottom, not a sudden appear. */
        #salon-mobile #tn13BookSheet{
          display:flex!important;
          align-items:flex-end!important;
          background:rgba(37,29,26,.34)!important;
          opacity:0!important;
          visibility:hidden!important;
          pointer-events:none!important;
          transition:opacity .28s ease,visibility .28s ease!important;
        }
        #salon-mobile #tn13BookSheet.open{
          opacity:1!important;
          visibility:visible!important;
          pointer-events:auto!important;
          z-index:700!important;
          overscroll-behavior:contain!important;
          touch-action:none!important;
        }
        #salon-mobile #tn13BookSheet.open .tn13-panel{
          touch-action:pan-y!important;
        }
        #salon-mobile #tn13Gallery.open{
          z-index:700!important;
          overscroll-behavior:contain!important;
          touch-action:pan-y!important;
        }
        #salon-mobile #tn13BookSheet .tn13-panel{
          transform:translate3d(0,104%,0)!important;
          transition:transform .42s cubic-bezier(.22,.76,.26,1)!important;
          will-change:transform!important;
          background:#f8f4ee!important;
        }
        #salon-mobile #tn13BookSheet.open .tn13-panel{
          transform:translate3d(0,0,0)!important;
        }

        /* Phone/Мессенджер choices: oval, filled beige, no decorative looping animation. */
        #salon-mobile #tn13BookSheet .tn50-book-options{
          gap:10px!important;
          margin-top:20px!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-option{
          min-height:60px!important;
          border:1px solid rgba(92,72,62,.13)!important;
          border-radius:999px!important;
          padding:9px 15px!important;
          background:#e6d9cf!important;
          color:#2c2521!important;
          box-shadow:none!important;
          animation:none!important;
          transition:transform .12s ease,background .12s ease,border-color .12s ease!important;
          -webkit-tap-highlight-color:transparent!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-option:active{
          transform:translateY(2px) scale(.985)!important;
          background:#d7c6b9!important;
          border-color:rgba(92,72,62,.22)!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-icon{
          border-radius:50%!important;
          background:#f4ece6!important;
          color:#6f574d!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-icon.phone,
        #salon-mobile #tn13BookSheet .tn50-book-icon.viber-generic{
          background:#f4ece6!important;
          color:#6f574d!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-arrow{
          color:#725d54!important;
        }
        #salon-mobile #tn13BookSheet .tn13-close{
          animation:none!important;
          transition:transform .12s ease,background .12s ease!important;
          -webkit-tap-highlight-color:transparent!important;
        }
        #salon-mobile #tn13BookSheet .tn13-close:active{
          transform:scale(.92)!important;
          background:#dfd1c7!important;
        }

        /* Booking buttons use only a clean press response. */
        #salon-mobile [data-book],
        #salon-mobile .tn22-call,
        #salon-mobile .tn22-route{
          -webkit-tap-highlight-color:transparent!important;
        }
        #salon-mobile [data-book]:active,
        #salon-mobile .tn22-call:active,
        #salon-mobile .tn22-route:active{
          transform:translateY(2px) scale(.985)!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function forceExternalLinks(scope){
    (scope||document).querySelectorAll('a[href]').forEach(a=>{
      const raw=(a.getAttribute('href')||'').trim();
      const label=(a.textContent||'').trim().toLowerCase();

      if(/^viber:/i.test(raw) || label.includes('viber')){
        if(raw!==VIBER_URL) a.setAttribute('href',VIBER_URL);
      }

      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        if(a.getAttribute('target')!=='_blank') a.setAttribute('target','_blank');
        if(a.getAttribute('rel')!=='noopener noreferrer') a.setAttribute('rel','noopener noreferrer');
      }
    });
  }

  function patchBooking(root){
    const sheet=root.querySelector('#tn13BookSheet');
    if(!sheet) return false;

    const panel=sheet.querySelector('.tn13-panel');
    if(panel){
      panel.querySelectorAll('.br-book-phone-art').forEach(el=>el.remove());
    }

    const phoneOption=[...sheet.querySelectorAll('.tn50-book-option')].find(a=>(a.textContent||'').toLowerCase().includes('телефон'));
    if(phoneOption){
      const phoneIcon=phoneOption.querySelector('.tn50-book-icon');
      if(phoneIcon && phoneIcon.dataset.brPhoneReady!=='1'){
        phoneIcon.dataset.brPhoneReady='1';
        phoneIcon.classList.add('phone');
        phoneIcon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg>';
      }
    }

    sheet.querySelectorAll('.tn50-book-option').forEach(a=>{
      const label=(a.textContent||'').toLowerCase();
      if(label.includes('viber')){
        if(a.getAttribute('href')!==VIBER_URL) a.setAttribute('href',VIBER_URL);
        if(a.getAttribute('target')!=='_blank') a.setAttribute('target','_blank');
        if(a.getAttribute('rel')!=='noopener noreferrer') a.setAttribute('rel','noopener noreferrer');
      }
    });

    return true;
  }

  let pageLocked=false;
  let lockedScrollY=0;

  function setPageLock(shouldLock){
    if(shouldLock && !pageLocked){
      pageLocked=true;
      lockedScrollY=window.scrollY||window.pageYOffset||0;
      document.documentElement.style.overflow='hidden';
      document.body.style.position='fixed';
      document.body.style.top='-'+lockedScrollY+'px';
      document.body.style.left='0';
      document.body.style.right='0';
      document.body.style.width='100%';
      document.body.style.overflow='hidden';
      document.body.style.touchAction='';
      return;
    }
    if(!shouldLock && pageLocked){
      pageLocked=false;
      const previousScrollBehavior=document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior='auto';
      document.documentElement.style.overflow='';
      document.body.style.position='';
      document.body.style.top='';
      document.body.style.left='';
      document.body.style.right='';
      document.body.style.width='';
      document.body.style.overflow='';
      document.body.style.touchAction='';
      window.scrollTo({top:lockedScrollY,left:0,behavior:'auto'});
      requestAnimationFrame(()=>{document.documentElement.style.scrollBehavior=previousScrollBehavior});
    }
  }

  function syncPageLock(root){
    if(!root) return;
    const active=!!root.querySelector('#tn13BookSheet.open,#tn13Gallery.open,#tn13Gallery.closing,#tn13MasterSheet.open,.tn22-master-page.open,.tn22-master-page.closing,.tn22-viewer.open');
    setPageLock(active);
  }

  function apply(){
    ensureStyle();
    forceExternalLinks(document);

    const root=document.getElementById('salon-mobile');
    if(!root) return false;

    patchBooking(root);
    forceExternalLinks(root);
    syncPageLock(root);

    if(!root.dataset.brExternalObserver){
      root.dataset.brExternalObserver='1';
      const observer=new MutationObserver(()=>syncPageLock(root));
      observer.observe(root,{subtree:true,attributes:true,attributeFilter:['class']});
    }
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    if(apply() || attempts>80) clearInterval(timer);
  },100);
  apply();
})();

/* Salon template media assets integration — 2026-09-18 */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  const BRAND_SRC='logo-placeholder.svg';
  const ABOUT_SRC='media-placeholder.svg';
  const VIDEO_SRC='';

  function ensureStyle(){
    if(document.getElementById('salon-mobile-media-style')) return;
    const style=document.createElement('style');
    style.id='salon-mobile-media-style';
    style.textContent=`
      @media(max-width:1023px){
        /* Top-left text is replaced by the supplied logo asset. */
        #salon-mobile .tn22-brand.br-logo-brand{
          display:flex!important;
          align-items:center!important;
          justify-content:flex-start!important;
          margin-left:0!important;
          height:52px!important;
          width:auto!important;
          max-width:250px!important;
          overflow:visible!important;
        }
        #salon-mobile .tn22-brand.br-logo-brand img{
          display:block!important;
          width:auto!important;
          height:64px!important;
          max-width:235px!important;
          object-fit:contain!important;
          object-position:left center!important;
          transform:translateX(-18px)!important;filter:none!important;
        }


        #salon-mobile .tn22-media.br-video-media{
          position:absolute!important;
          overflow:hidden!important;
          background:#eee!important;
        }
        #salon-mobile .tn22-media.br-video-media .br-hero-video{
          position:absolute!important;
          inset:0!important;
          width:100%!important;
          height:100%!important;
          display:block!important;
          object-fit:cover!important;
          object-position:center center!important;
          border:0!important;
          margin:0!important;
          padding:0!important;
          background:#eee!important;
          pointer-events:none!important;
        }
        #salon-mobile .tn22-media.br-video-media:after{
          content:''!important;
          position:absolute!important;
          z-index:2!important;
          left:0!important;
          right:0!important;
          bottom:0!important;
          height:120px!important;
          background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.32) 44%,#fff 96%)!important;
          pointer-events:none!important;
        }

        /* About card photo from the supplied asset. */
        #salon-mobile #tn38About .tn42-photo img.br-about-image{
          width:100%!important;
          height:100%!important;
          object-fit:cover!important;
          object-position:center center!important;
          display:block!important;
          filter:none!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function applyBrand(root){
    const brand=root.querySelector('.tn22-brand');
    if(!brand || brand.dataset.brLogoReady==='1') return;
    brand.dataset.brLogoReady='1';
    brand.classList.add('br-logo-brand');
    brand.setAttribute('aria-label','SALON NAME');
    brand.innerHTML='<img src="'+BRAND_SRC+'" alt="SALON NAME" decoding="async">';
  }

  function applyHeroVideo(root){
    const media=root.querySelector('.tn22-media');
    if(!media || media.dataset.brVideoReady==='1') return;
    media.dataset.brVideoReady='1';
    media.classList.add('br-video-media');
    media.setAttribute('aria-label','Видео SALON NAME');
    media.innerHTML=VIDEO_SRC?'<video class="br-hero-video" muted autoplay loop playsinline webkit-playsinline preload="metadata" poster="media-placeholder.svg" src="'+VIDEO_SRC+'"></video>':'<img class="br-hero-video" src="media-placeholder.svg" alt="Фото салона">';
    const video=media.querySelector('video');
    if(video){
      video.muted=true;
      video.defaultMuted=true;
      const tryPlay=()=>{const p=video.play();if(p&&typeof p.catch==='function')p.catch(()=>{});};
      video.addEventListener('loadeddata',tryPlay,{once:true});
      video.addEventListener('canplay',tryPlay,{once:true});
      window.requestAnimationFrame(tryPlay);
      document.addEventListener('visibilitychange',()=>{if(!document.hidden) tryPlay()});
      document.addEventListener('pointerdown',tryPlay,{once:true,passive:true});
    }
  }

  function applyAbout(root){
    const img=root.querySelector('#tn38About .tn42-photo img');
    if(!img || img.dataset.brAboutReady==='1') return;
    img.dataset.brAboutReady='1';
    img.classList.add('br-about-image');
    img.src=ABOUT_SRC;
    img.alt='SALON NAME';
    img.loading='lazy';
  }

  function removeDropText(scope){
    const root=scope||document.body;
    if(!root) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const value=node.nodeValue||'';
      if(/drop\s*n/i.test(value)){
        node.nodeValue=value.replace(/drop\s*n(?:\s+drop\s*n)?/gi,'').trim();
      }
    });
  }

  function openExternalLinks(root){
    root.querySelectorAll('a[href]').forEach(a=>{
      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        if(a.target!=='_blank') a.target='_blank';
        if(a.rel!=='noopener noreferrer') a.rel='noopener noreferrer';
      }
    });
  }

  function apply(){
    ensureStyle();
    const root=document.getElementById('salon-mobile');
    if(!root) return false;
    applyBrand(root);
    applyHeroVideo(root);
    applyAbout(root);
    removeDropText(root);
    openExternalLinks(root);
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    if(apply() || attempts>100) clearInterval(timer);
  },80);
  apply();
})();

/* Salon template multilingual interface — HY / RU / EN */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  var STORAGE_KEY='salon-template-language';
  var currentLang='hy';
  var root=null;

  var meta={
    ru:{
      title:'SALON NAME',
      description:'Универсальный шаблон цифрового офиса салона.'
    },
    hy:{
      title:'SALON NAME',
      description:'Универсальный шаблон цифрового офиса салона.'
    },
    en:{
      title:'SALON NAME',
      description:'Универсальный шаблон цифрового офиса салона.'
    }
  };

  var rows=[
    ["Окрашивание волос средней длины","Միջին երկարության մազերի ներկում","Medium-length hair coloring"],
    ["Сложное мелирование","Բարդ մելիրավորում","Advanced highlights"],
    ["Сложная покраска волос с заливкой","Մազերի բարդ ներկում՝ գույնի լցմամբ","Complex hair coloring with color filling"],
    ["Привет, это описание. Оно очень необходимо для того, чтобы вы понимали, что это такое. Но это мелирование, поэтому действуйте именно вот так.","Բարև, սա ծառայության նկարագրությունն է։ Այն անհրաժեշտ է, որպեսզի հասկանաք, թե ինչ է այս ծառայությունը։ Սա մելիրավորում է, ուստի պետք է գործել հենց այսպես։","Hello, this is a description. It is important so you understand what this service is. Since this is highlighting, follow these instructions."],
    ["если ваши волосы когда-то испортились или вы обожгли их утюгом, есть специальное средство для того, чтобы выйти из этого состояния и вновь обрести хорошие, свежие, красивые волосы. Чтобы всё было хорошо, запишитесь к нам на услугу, и мы примем вас, как только вы возьмёте.","Եթե ձեր մազերը երբևէ վնասվել են կամ այրվել են արդուկից, կա հատուկ միջոց, որը կօգնի վերականգնել դրանք և վերադարձնել առողջ, թարմ ու գեղեցիկ տեսքը։ Գրանցվեք այս ծառայությանը, և մենք ձեզ կընդունենք հենց որ ամրագրեք այցը։","If your hair was damaged or burned with a straightener, there is a special treatment to help restore it and bring back a healthy, fresh, beautiful look. Book this service and we will welcome you as soon as you make an appointment."],
    ["Подробнее…","Ավելին…","Read more…"],
    ["5 000–10 000 ֏","5 000–10 000 ֏","5,000–10,000 AMD"],
    ["15 000 ₽","15 000 ₽","15,000 RUB"],
    ["от 6 000 ₽","սկսած 6 000 ₽","from 6,000 RUB"],
    ['Меню','Մենյու','Menu'],
    ['Открыть меню','Բացել մենյուն','Open menu'],
    ['Салон красоты','Գեղեցկության սրահ','Beauty salon'],
    ['Описание салона.','Գեղեցկության սրահ Քաղաքի սրտում։','A beauty salon in the heart of City.'],
    ['Проверяем','Ստուգում ենք','Checking'],
    ['режим работы','աշխատանքային ժամերը','opening hours'],
    ['Город,','Քաղաք,','City,'],
    ['Адрес салона','Սրահի հասցե','Адрес салона'],
    ['Записаться','Ամրագրել','Book now'],
    ['Записаться →','Ամրագրել →','Book now →'],
    ['Записаться онлайн','Ամրագրել առցանց','Book online'],
    ['Смотреть работы','Դիտել աշխատանքները','View our work'],
    ['Портфолио','Պորտֆոլիո','Portfolio'],
    ['Услуги','Ծառայություններ','Services'],
    ['О салоне','Սրահի մասին','About'],
    ['Команда','Թիմ','Team'],
    ['Отзывы','Կարծիքներ','Reviews'],
    ['Контакты','Կոնտակտներ','Contacts'],
    ['Визит','Այց','Visit'],
    ['Разведите двумя пальцами, чтобы увеличить','Մեծացնելու համար երկու մատով բացեք պատկերը','Pinch with two fingers to zoom'],
    ['Закрыть','Փակել','Close'],
    ['Фото SALON NAME','SALON NAME-ի լուսանկար','SALON NAME photo'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],
    ['Галерея','Պատկերասրահ','Gallery'],
    ['Салон','Սրահ','Salon'],
    ['Ногти','Եղունգներ','Nails'],
    ['Волосы','Մազեր','Hair'],
    ['Брови и ресницы','Հոնքեր և թարթիչներ','Brows & lashes'],
    ['Эпиляция','Էպիլյացիա','Hair removal'],
    ['Макияж','Դիմահարդարում','Makeup'],
    ['Массаж','Մերսում','Massage'],
    ['Другое','Այլ','Other'],
    ['Косметология','Կոսմետոլոգիա','Cosmetology'],
    ['Все','Բոլորը','All'],
    ['Фото ресниц пока не добавлены','Թարթիչների լուսանկարները դեռ չեն ավելացվել','Eyelash photos have not been added yet'],
    ['Наши работы','Մեր աշխատանքները','Our work'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],
    ['Наши услуги','Մեր ծառայությունները','Our services'],
    ['Свернуть','Փակել ցանկը','Show less'],
    ['Наша команда','Մեր թիմը','Our team'],
    ['Мастера своего дела','Իրենց գործի վարպետները','Experts in their craft'],
    ['Листайте','Սահեցրեք','Swipe'],
    ['Nail-мастер','Մատնահարդարման վարպետ','Nail specialist'],
    ['Парикмахер','Վարսահարդար','Hair stylist'],
    ['Косметолог','Կոսմետոլոգ','Cosmetologist'],
    ['Маникюр · педикюр','Մատնահարդարում · ոտնահարդարում','Manicure · pedicure'],
    ['Волосы · укладки','Մազեր · հարդարում','Hair · styling'],
    ['Профиль','Պրոֆիլ','Profile'],
    ['О мастере','Մասնագետի մասին','About the specialist'],
    ['Пока нет данных об услугах.','Ծառայությունների մասին տվյալներ դեռ չկան։','No service information yet.'],
    ['Пока нет фото.','Լուսանկարներ դեռ չկան։','No photos yet.'],
    ['Пока нет отзывов.','Կարծիքներ դեռ չկան։','No reviews yet.'],
    ['рейтинг салона','սրահի վարկանիշ','salon rating'],
    ['Что говорят о нас','Ինչ են ասում մեր մասին','What clients say about us'],
    ['Подробнее →','Ավելին →','Read more →'],
    ['Смотреть все отзывы →','Դիտել բոլոր կարծիքները →','View all reviews →'],
    ['Ждём вас','Սպասում ենք ձեզ','We look forward to seeing you'],
    ['Город, Адрес салона','Քաղաք, Սրահի հասցե','City, salon address'],
    ['Открыть карту','Բացել քարտեզը','Open map'],
    ['Нажмите, чтобы позвонить','Սեղմեք զանգահարելու համար','Tap to call'],
    ['Написать в салон','Գրել սրահին','Message the salon'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],
    ['Уточняется','Կավելացվի','To be added'],
    ['Загружаем карту…','Քարտեզը բեռնվում է…','Loading map…'],
    ['Позвонить','Զանգահարել','Call'],
    ['Построить маршрут','Ստանալ երթուղին','Get directions'],
    ['Цифровой офис для салонов красоты','Թվային գրասենյակ գեղեցկության սրահների համար','Digital office for beauty salons'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],
    ['Открыто','Բաց է','Open'],
    ['Закрыто','Փակ է','Closed'],
    ['Уточняется','Կավելացվի','To be added'],
    ['Уточняется','Կավելացվի','To be added'],
    ['О нас','Մեր մասին','About us'],
    ['Салон красоты в городе','Գեղեցկության սրահ Քաղաքում','Beauty salon in City'],
    ['SALON NAME — салон красоты.','SALON NAME — գեղեցկության սրահ Քաղաքում։','SALON NAME — a beauty salon in City.'],
    ['Описание услуг салона.','Մատնահարդարում, մազեր, հոնքեր և թարթիչներ, դիմահարդարում, կոսմետոլոգիա, էպիլյացիա և մերսում՝ մեկ վայրում։','Manicure, hair, brows and lashes, makeup, cosmetology, hair removal and massage — all in one place.'],
    ['Описание салона будет добавлено при заполнении шаблона.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և ձեր խնամքը վստահել տարբեր ուղղությունների մասնագետների։ Մենք կարևորում ենք կոկիկ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Here you can comfortably choose the services you need and trust your care to specialists in different fields. We value precise work, comfort and attentive service for every guest.'],
    ['Мастера разных направлений','Տարբեր ուղղությունների մասնագետներ','Specialists in different fields'],
    ['Комфортная атмосфера','Հարմարավետ մթնոլորտ','Comfortable atmosphere'],
    ['Индивидуальный подход','Անհատական մոտեցում','Personal approach'],
    ['Запись','Ամրագրում','Booking'],
    ['Как вам удобнее записаться?','Ինչպե՞ս է ձեզ հարմար ամրագրել։','How would you like to book?'],
    ['Выберите удобный способ связи.','Ընտրեք ձեզ հարմար կապի տարբերակը։','Choose the most convenient way to contact us.'],
    ['Телефон','Հեռախոս','Phone'],
    ['Создано в','Ստեղծված է','Created with'],
    ['Создано в TANEM.ru','Ստեղծված է TANEM.ru-ում','Created with TANEM.ru'],
    ['ежедневно','ամեն օր','daily'],
    ['рейтинг','վարկանիշ','rating'],
    ['оценок','գնահատական','ratings'],
    ['услуг','ծառայություն','services'],
    ['Педикюр','Ոտնահարդարում','Pedicure'],
    ['Процедуры для бровей','Հոնքերի խնամքի ծառայություններ','Brow treatments'],
    ['Свадебные прически','Հարսանեկան սանրվածքներ','Bridal hairstyles'],
    ['Тридинг бровей','Հոնքերի թրիդինգ','Brow threading'],
    ['Удаление волос нитью','Մազահեռացում թելով','Threading hair removal'],
    ['Укладка волос','Մազերի հարդարում','Hair styling'],
    ['Прокалывание ушей','Ականջների ծակում','Ear piercing'],
    ['Шугаринг','Շուգարինգ','Sugaring'],
    ['Стрижка волос','Մազերի կտրում','Haircut'],
    ['Электроэпиляция игловая','Ասեղային էլեկտրոէպիլյացիա','Needle electrolysis'],
    ['Окрашивание волос','Մազերի ներկում','Hair coloring'],
    ['Уход за волосами восстановление повреждённых волос','Մազերի խնամք և վնասված մազերի վերականգնում','Hair care and damaged hair restoration'],
    ['Спа процедура для волос','ՍՊԱ խնամք մազերի համար','Hair spa treatment'],
    ['Наращивание ногтей','Եղունգների երկարացում','Nail extensions'],
    ['Маникюр + покрытие гельлак','Մատնահարդարում + գել-լաք ծածկույթ','Manicure + gel polish'],
    ['Маникюр + покрытие лак','Մատնահարդարում + լաք ծածկույթ','Manicure + nail polish'],
    ['Парафинотерапия для рук','Ձեռքերի պարաֆինաթերապիա','Paraffin hand treatment'],
    ['Карбокси терапия','Կարբոքսիթերապիա','Carboxytherapy'],
    ['Ультразвуковая чистка лица','Դեմքի ուլտրաձայնային մաքրում','Ultrasonic facial cleansing'],
    ['Восковая эпиляция','Մոմային էպիլյացիա','Waxing'],
    ['Коррекция формы бровей','Հոնքերի ձևի շտկում','Brow shaping'],
    ['Косы','Հյուսքեր','Braids'],
    ['Ламинирование бровей','Հոնքերի լամինացիա','Brow lamination'],
    ['Ламинирование ресниц','Թարթիչների լամինացիա','Lash lamination'],
    ['Маникюр','Մատնահարդարում','Manicure'],
    ['Мытье головы шампунем и кондиционирование','Մազերի լվացում շամպունով և կոնդիցիոներով','Shampoo and conditioning'],
    ['Наращивание волос','Մազերի երկարացում','Hair extensions'],
    ['Наращивание ресниц','Թարթիչների երկարացում','Eyelash extensions']
  ];

  var direct={};
  rows.forEach(function(row){ direct[row[0]]=row; });

  var langIndex={ru:0,hy:1,en:2};

  function getSaved(){
    try{
      var v=localStorage.getItem(STORAGE_KEY);
      return /^(hy|ru|en)$/.test(v||'')?v:null;
    }catch(_){ return null; }
  }

  function detect(){
    var saved=getSaved();
    if(saved) return saved;
    var langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en']).map(function(x){return String(x||'').toLowerCase()});
    if(langs.some(function(x){return x.indexOf('hy')===0})) return 'hy';
    if(langs.some(function(x){return x.indexOf('ru')===0})) return 'ru';
    return 'en';
  }

  function save(lang){
    try{ localStorage.setItem(STORAGE_KEY,lang); }catch(_){}
  }

  function dynamicValue(source,lang){
    var serviceMatch=source.match(/^Услуга (\d+)$/);
    if(serviceMatch) return lang==='hy'?'Ծառայություն '+serviceMatch[1]:lang==='en'?'Service '+serviceMatch[1]:source;
    var masterMatch=source.match(/^Мастер (\d+)$/);
    if(masterMatch) return lang==='hy'?'Մասնագետ '+masterMatch[1]:lang==='en'?'Specialist '+masterMatch[1]:source;
    var m;
    m=source.match(/^Показать ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m) return lang==='hy'?'Ցույց տալ ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Доступно (\d+) (?:услуг|услуги|услугу)$/);
    if(m) return lang==='hy'?'Հասանելի է '+m[1]+' ծառայություն':lang==='en'?m[1]+' services available':source;
    if(source==='Сведения уточняются') return lang==='hy'?'Տվյալները շուտով':lang==='en'?'Details coming soon':source;
    if(source==='Информация о мастере появится после подтверждения салоном.') return lang==='hy'?'Մասնագետի տվյալները կհրապարակվեն հաստատումից հետո։':lang==='en'?'The master profile will be published after confirmation.':source;
    m=source.match(/^(\d+) отзыв(?:ов|а)?(?: на сайте)? · Источник отзывов$/);
    if(m) return lang==='hy'?'Կարծիքները կավելացվեն':lang==='en'?'Reviews will be added':'Отзывы будут добавлены';
    m=source.match(/^(\d{1,2}) из (\d{1,2})$/);
    if(m) return lang==='hy'?m[1]+' / '+m[2]:lang==='en'?m[1]+' of '+m[2]:source;
    return null;
  }

  function canTranslate(source){
    return !!direct[source] || dynamicValue(source,'ru')!==null;
  }

  function outputFor(source,lang){
    var row=direct[source];
    if(row) return row[langIndex[lang]];
    var dyn=dynamicValue(source,lang);
    return dyn===null?source:dyn;
  }

  function skipText(node){
    var el=node.parentElement;
    if(!el) return true;
    if(el.closest('.br-lang-switch')) return true;
    if(el.closest('.tn30-review-card p,.br-review-card p,.tn22-master-review p')) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName);
  }

  function translateTree(scope,lang){
    if(!scope) return;
    var walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    var nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      if(skipText(node)) return;
      var raw=node.nodeValue||'';
      var trimmed=raw.trim();
      if(!trimmed) return;
      var canonical=node.__brI18nCanonical;
      if(!canonical && canTranslate(trimmed)){
        canonical=trimmed;
        node.__brI18nCanonical=canonical;
      }
      if(!canonical) return;
      var next=outputFor(canonical,lang);
      var leading=(raw.match(/^\s*/)||[''])[0];
      var trailing=(raw.match(/\s*$/)||[''])[0];
      node.nodeValue=leading+next+trailing;
    });
  }

  function translateAttributes(scope,lang){
    if(!scope) return;
    ['aria-label','title','alt'].forEach(function(attr){
      scope.querySelectorAll('['+attr+']').forEach(function(el){
        var key='brI18n'+attr.replace(/-([a-z])/g,function(_,c){return c.toUpperCase();}).replace(/^./,function(c){return c.toUpperCase();});
        var source=el.dataset[key];
        var current=(el.getAttribute(attr)||'').trim();
        if(!source && canTranslate(current)){
          source=current;
          el.dataset[key]=source;
        }
        if(source) el.setAttribute(attr,outputFor(source,lang));
      });
    });
  }

  function ensureStyle(){
    if(document.getElementById('salon-mobile-i18n-style')) return;
    var style=document.createElement('style');
    style.id='salon-mobile-i18n-style';
    style.textContent=[
      '@media(max-width:1023px){',
      '#salon-mobile .br-lang-switch{position:absolute;z-index:66;top:0;right:57px;height:52px;display:flex;align-items:center;gap:3px;font-family:Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}',
      '#salon-mobile .br-lang-switch button{border:0;background:transparent;padding:0 3px;min-width:27px;height:36px;color:#8b817b;font:600 11.5px/1 Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;letter-spacing:.035em;-webkit-tap-highlight-color:transparent}',
      '#salon-mobile .br-lang-switch button.active{color:#171513}',
      '#salon-mobile .br-lang-switch .sep{color:#c7bbb3;font-size:10px;line-height:1;pointer-events:none}',
      '#salon-mobile .br-lang-switch button:active{transform:scale(.92)}',
      '@media(max-width:360px){#salon-mobile .br-lang-switch{right:52px;gap:1px}#salon-mobile .br-lang-switch button{min-width:23px;padding:0 1px;font-size:10.5px}}',
      'body[data-br-lang="hy"] #tn13Portfolio .tn22-port h2{font-size:38px!important;line-height:1!important;letter-spacing:-.035em!important;max-width:100%!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-services h2{font-size:39px!important;line-height:1!important;letter-spacing:-.035em!important;white-space:normal!important;max-width:100%!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-row{grid-template-columns:minmax(0,1fr) 92px!important;gap:10px!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-copy{min-width:0!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-name{font-weight:500!important;line-height:1.2!important;max-width:100%!important;overflow-wrap:anywhere!important;word-break:normal!important;-webkit-line-clamp:3!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-detail{white-space:normal!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Visit h2{font-size:39px!important;line-height:1!important;white-space:nowrap!important;letter-spacing:-.035em!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-contact:last-child strong{font-size:13.2px!important;white-space:nowrap!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-contact:last-child>span:last-child>span{font-size:8.8px!important;white-space:nowrap!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-route{font-size:11.5px!important;white-space:nowrap!important}',
      '#salon-mobile .tn22-master-top{display:grid!important;grid-template-columns:40px minmax(0,1fr) 40px!important;align-items:center!important}',
      '#salon-mobile .tn22-master-brand{text-align:center!important;justify-self:center!important;max-width:100%!important;font-size:14px!important;letter-spacing:.12em!important;white-space:nowrap!important}',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function ensureSwitcher(){
    if(!root) return;
    var top=root.querySelector('.tn22-top');
    if(!top || top.querySelector('.br-lang-switch')) return;
    var sw=document.createElement('div');
    sw.className='br-lang-switch';
    sw.setAttribute('role','group');
    sw.setAttribute('aria-label','Language');
    sw.innerHTML='<button type="button" data-lang="hy">HY</button><span class="sep">/</span><button type="button" data-lang="ru">RU</button><span class="sep">/</span><button type="button" data-lang="en">EN</button>';
    sw.addEventListener('pointerdown',function(e){e.stopPropagation();});
    sw.addEventListener('click',function(e){
      var btn=e.target.closest('[data-lang]');
      if(!btn) return;
      e.preventDefault();
      e.stopPropagation();
      setLanguage(btn.getAttribute('data-lang'),true);
    });
    var menu=top.querySelector('.tn22-menu');
    top.insertBefore(sw,menu||null);
  }

  function updateSwitcher(){
    if(!root) return;
    root.querySelectorAll('.br-lang-switch [data-lang]').forEach(function(btn){
      var active=btn.getAttribute('data-lang')===currentLang;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }

  function applySpecials(){
    if(!root) return;
    var credit=root.querySelector('.br-tanem-copy');
    if(credit){
      if(currentLang==='hy') credit.innerHTML='Ստեղծված է <strong>TANEM.ru</strong>-ում';
      else if(currentLang==='en') credit.innerHTML='Created with <strong>TANEM.ru</strong>';
      else credit.innerHTML='Создано в <strong>TANEM.ru</strong>';
    }

    var galleryHeading=root.querySelector('#tn13Gallery .tn22-gallery-title strong');
    if(galleryHeading) galleryHeading.textContent=currentLang==='ru'?'Галерея':'Gallery';
    var masterBrand=root.querySelector('.tn22-master-brand');
    if(masterBrand) masterBrand.textContent='SALON NAME';

    if(currentLang==='hy'){
      var team=root.querySelector('#tn13Team');
      var masterPage=root.querySelector('.tn22-master-page');
      if(team){
        translateTree(team,'en');
        translateAttributes(team,'en');
      }
      if(masterPage){
        translateTree(masterPage,'en');
        translateAttributes(masterPage,'en');
      }
    }
  }

  function updateMeta(){
    var m=meta[currentLang]||meta.hy;
    document.documentElement.lang=currentLang;
    document.documentElement.dir='ltr';
    document.title=m.title;
    var desc=document.querySelector('meta[name="description"]');
    if(desc) desc.setAttribute('content',m.description);
  }

  function applyLanguage(){
    if(!root) return;
    ensureSwitcher();
    translateTree(root,currentLang);
    translateAttributes(root,currentLang);
    const fixedNav=document.querySelector('.salon-template-fixed-nav');
    if(fixedNav){translateTree(fixedNav,currentLang);translateAttributes(fixedNav,currentLang)}
    updateSwitcher();
    applySpecials();
    updateMeta();
    document.body.dataset.brLang=currentLang;
    window.dispatchEvent(new CustomEvent('salon-template:languagechange',{detail:{lang:currentLang}}));
  }

  function setLanguage(lang,userChoice){
    if(!/^(hy|ru|en)$/.test(lang)) lang='en';
    currentLang=lang;
    if(userChoice) save(lang);
    applyLanguage();
    setTimeout(applyLanguage,0);
    setTimeout(applyLanguage,80);
    setTimeout(applyLanguage,260);
  }

  function start(){
    ensureStyle();
    currentLang=detect();
    var attempts=0;
    var timer=setInterval(function(){
      attempts++;
      root=document.getElementById('salon-mobile');
      if(!root){
        if(attempts>100) clearInterval(timer);
        return;
      }
      clearInterval(timer);
      setLanguage(currentLang,false);
      [250,700,1400].forEach(function(ms){setTimeout(applyLanguage,ms);});
      root.addEventListener('click',function(e){
        if(e.target.closest('.br-lang-switch')) return;
        setTimeout(applyLanguage,0);
        setTimeout(applyLanguage,90);
      },true);
      setInterval(function(){
        var statusRoot=root.querySelector('#tn22Status');
        var heroStatus=root.querySelector('.tn50-hero-status');
        if(statusRoot) translateTree(statusRoot,currentLang);
        if(heroStatus) translateTree(heroStatus,currentLang);
      },1000);
    },80);
  }

  start();
})();

/* salon-template-cold-neutral-20260924 */
(function(){if(document.getElementById('salon-template-cold-neutral-20260924'))return;const style=document.createElement('style');style.id='salon-template-cold-neutral-20260924';style.textContent="\n@media(max-width:1023px){\n:root{--salon-template-white:#fafaf9;--salon-template-soft:#f2f2f0;--salon-template-menu:#f5f5f3;--salon-template-ink:#181818;--salon-template-dark:#242424;--salon-template-mid:#e8e8e6}\nhtml,body,#salon-mobile{background:var(--salon-template-white)!important;color:var(--salon-template-ink)!important}\n#salon-mobile .tn13-hero,.tn22-card{background:var(--salon-template-white)!important}\n.tn22-top{background:var(--salon-template-menu)!important;border-bottom:1px solid rgba(24,24,24,.06)!important}\n.tn22-navpop{background:rgba(245,245,243,.98)!important;border-color:rgba(24,24,24,.10)!important;box-shadow:0 18px 44px rgba(0,0,0,.10)!important}\n.tn22-navpop a{border-color:rgba(24,24,24,.08)!important;color:var(--salon-template-ink)!important}\nbody[data-br-lang=\"en\"] #salon-mobile .tn22-navpop{width:236px!important;padding:8px 13px!important;grid-auto-rows:44px!important}\nbody[data-br-lang=\"en\"] #salon-mobile .tn22-navpop a{min-height:44px!important;height:44px!important;display:flex!important;align-items:center!important;margin:0!important;padding:0 4px!important}\n.tn23-section-nav{background:rgba(245,245,243,.96)!important;border-color:rgba(24,24,24,.09)!important;box-shadow:0 8px 26px rgba(0,0,0,.06)!important}\n.tn22-cta{position:relative!important;overflow:hidden!important;background:var(--salon-template-ink)!important;border-color:var(--salon-template-ink)!important;color:#fff!important;box-shadow:0 10px 25px rgba(0,0,0,.14)!important}\n.tn22-cta:after{content:\"\"!important;position:absolute!important;top:-35%!important;bottom:-35%!important;left:-42%!important;width:30%!important;background:linear-gradient(100deg,transparent,rgba(255,255,255,.38),transparent)!important;transform:skewX(-20deg)!important;animation:salonTemplateBookSheen 4.4s ease-in-out infinite!important;pointer-events:none!important}\n@keyframes salonTemplateBookSheen{0%,66%{left:-42%;opacity:0}72%{opacity:1}90%{left:126%;opacity:1}91%,100%{left:126%;opacity:0}}\n.tn22-worklink{background:var(--salon-template-mid)!important;border-color:#d2d2cf!important;color:var(--salon-template-ink)!important;box-shadow:none!important}\n.tn50-hero-status.open .tn50-hero-status-main{color:#2f7d46!important}.tn50-hero-status.closed .tn50-hero-status-main{color:#c54b55!important}\n#tn13Portfolio{background:var(--salon-template-white)!important;color:var(--salon-template-ink)!important}\n#tn13Gallery,#tn13Gallery .tn22-gallery{background:var(--salon-template-soft)!important;color:var(--salon-template-ink)!important}\n#tn13Gallery .tn22-gallery-tabs{background:var(--salon-template-soft)!important;border-color:rgba(24,24,24,.12)!important}\n#tn13Gallery .tn22-gallery-tab{color:#595959!important}#tn13Gallery .tn22-gallery-tab.active{background:var(--salon-template-ink)!important;color:#fff!important}\n#tn13Services,#tn13Team,#tn13Visit{background:var(--salon-template-dark)!important;color:#f7f7f6!important;border-color:rgba(255,255,255,.08)!important}\n#tn13Services .tn31-cat.active{background:#f3f3f1!important;border-color:#f3f3f1!important;color:#181818!important}\n#tn13Services .tn31-service-name,#tn13Services .tn31-service-price,#tn13Services h2,#tn13Team h2,#tn13Visit h2{color:#f7f7f6!important}\n#tn13Services .tn31-service-detail,#tn13Services .tn31-service-book,#tn13Services .tn22-kicker,#tn13Team .tn22-kicker,#tn13Visit .tn22-kicker{color:#bdbdbb!important}\n#tn13Services .tn31-service-list,#tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}\n#tn13Team .tn22-master-circle{background:linear-gradient(145deg,#3a3a3a,#202020)!important;color:#e5e5e5!important;border-color:rgba(255,255,255,.10)!important}\n#tn13Reviews{background:var(--salon-template-soft)!important;color:var(--salon-template-ink)!important}\n#tn13Reviews .tn30-review-card{background:rgba(255,255,255,.34)!important;border-color:rgba(66,55,49,.15)!important}\n#tn13Reviews .tn30-review-avatar{background:#dededc!important;color:#404040!important}#tn13Reviews .tn30-stars{color:#444!important}\n#tn13Visit .tn22-contact{background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.13)!important;color:#f7f7f6!important}\n#tn13Visit .tn22-contact-icon{background:rgba(255,255,255,.08)!important;border-color:rgba(255,255,255,.08)!important}\n#tn13Visit .tn22-contact-icon svg{stroke:#ededeb!important}#tn13Visit .tn22-contact strong{color:#f7f7f6!important}#tn13Visit .tn22-contact>span:last-child>span{color:#bebebb!important}\n#tn13Visit .tn22-status.open{background:#203b2a!important;border-color:#315b40!important;color:#8fd0a1!important}#tn13Visit .tn22-status.closed{background:#46292e!important;border-color:#63383f!important;color:#ef9ea7!important}\n#tn13Visit .tn22-mapwrap{background:#333!important;border:1px solid rgba(255,255,255,.10)!important}#tn13Visit .tn22-route{background:#ededeb!important;color:#202020!important}#tn13Visit .tn22-footer{background:#181818!important}\n#tn38About{background:#f7f2eb!important;color:#181818!important}#tn38About .tn42-card{background:#e7ded5!important;box-shadow:0 14px 34px rgba(47,37,31,.08)!important;border-color:rgba(66,55,49,.14)!important}#tn38About .tn42-photo{background:#f2f2f0!important}.tn37-info-icon{color:#555!important;border-color:rgba(24,24,24,.12)!important}.tn37-info-copy{color:#555!important}\n#tn38About .tn42-photo img{object-position:center 38%!important}\n.tn22-gallery-title span,.tn42-kicker,.tn22-kicker{color:#696969}\n\n/* Approved monochrome/mobile refinements; maintained within the existing theme. */\n#salon-mobile #tn13Top{background:#fafaf9!important;border-bottom:0!important;box-shadow:none!important}\n#salon-mobile #tn13Top .tn22-card{background:#FAF8F4!important;box-shadow:none!important}\n#salon-mobile #tn13Top .tn22-media.br-video-media:after{background:linear-gradient(180deg,rgba(250,250,249,0),rgba(250,250,249,.38) 45%,#fafaf9 96%)!important}\n#salon-mobile #tn13Portfolio{margin-top:-1px!important;border-top:0!important;box-shadow:none!important}\n#salon-mobile #tn13Reviews{background:#e9e2da!important;border-color:rgba(24,24,24,.07)!important}\n#salon-mobile #tn13Reviews .br-review-card{background:rgba(255,255,255,.34)!important;border-color:rgba(66,55,49,.15)!important}\n#salon-mobile #tn13Reviews .br-review-card p{color:#393939!important}\n#salon-mobile #tn13Reviews .br-review-avatar{background:#d7cec6!important;color:#514943!important;border-color:rgba(66,55,49,.10)!important}\n#salon-mobile #tn13Reviews .br-review-date{display:block;margin-top:4px;color:#737373;font:500 10px/1.2 Manrope,Arial,sans-serif}\n#salon-mobile #tn13Services .tn31-service-row{border:1px solid rgba(255,255,255,.11)!important;border-radius:11px!important;background:rgba(255,255,255,.055)!important;padding:10px 19px!important;box-shadow:none!important;transition:background .18s ease,transform .18s ease!important}\n#salon-mobile #tn13Services .tn31-service-row:active{background:rgba(255,255,255,.12)!important;transform:translateY(1px)}\n#salon-mobile #tn13Services .tn31-service-name{font:500 16.5px/1.15 'Cormorant Garamond',Georgia,serif!important}\n#salon-mobile #tn13Services .tn31-service-detail{color:#bdbdbd!important;font:400 9px/1.3 Manrope,Arial,sans-serif!important}\n#salon-mobile #tn13Services .tn31-service-price{color:#f7f7f6!important;font:600 13px/1 Manrope,Arial,sans-serif!important}\n#salon-mobile #tn13Services .tn31-cat.active{background:#f3f3f1!important;border-color:#f3f3f1!important;color:#181818!important}\n#salon-mobile #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;overflow-x:auto!important;gap:14px!important;scroll-snap-type:x proximity!important}\n#salon-mobile #tn13Team .tn22-master-card{flex:0 0 136px!important;min-width:136px!important;scroll-snap-align:start!important}\n#salon-mobile #tn13Team .tn22-master-circle{background:linear-gradient(145deg,#3a3a3a,#202020)!important;color:#e5e5e5!important}\n#salon-mobile #tn13Team .tn22-master-name{color:#f5f5f5!important;white-space:normal!important}\n#salon-mobile #tn13Team .tn22-master-role{display:block!important;color:#bebebe!important}\n#salon-mobile #tn38About .tn42-photo{overflow:hidden!important}\n#salon-mobile #tn38About .tn42-photo img.br-about-image{height:calc(100% + 1cm)!important;max-height:none!important;transform:translateY(-1cm)!important;object-position:center 38%!important}\n#salon-mobile #tn13Sticky{left:50%!important;right:auto!important;width:min(calc(100% - 20px),500px)!important;max-width:500px!important;background:rgba(232,232,230,.97)!important;border-color:rgba(24,24,24,.13)!important;box-shadow:0 12px 32px rgba(0,0,0,.14)!important;color:#181818!important}\n#salon-mobile #tn13Sticky:not(.show){transform:translate(-50%,150%)!important}\n#salon-mobile #tn13Sticky.show{transform:translate(-50%,0)!important}\n#salon-mobile #tn13Sticky strong{color:#181818!important}\n#salon-mobile #tn13Sticky button{background:#181818!important;color:#fff!important;border-color:#181818!important}\n#salon-mobile #tn13BookSheet.open{background:rgba(12,12,12,.72)!important}\n#salon-mobile #tn13BookSheet .tn13-panel,#salon-mobile #tn13BookSheet.open .tn13-panel{background:#fafaf9!important;color:#181818!important;box-shadow:0 -16px 60px rgba(0,0,0,.28)!important}\n#salon-mobile #tn13BookSheet .tn50-book-option{background:#f2f2f0!important;border-color:rgba(24,24,24,.12)!important;color:#181818!important}\n#salon-mobile #tn13BookSheet .tn50-book-option:active{background:#e5e5e3!important}\n#salon-mobile #tn13BookSheet .tn50-book-icon{background:#e8e8e6!important;color:#202020!important}\n#salon-mobile #tn13BookSheet .tn50-book-arrow{color:#202020!important}\n#salon-mobile #tn13BookSheet .tn13-close{background:#e8e8e6!important;color:#181818!important}\n#salon-mobile #tn13Gallery{background:radial-gradient(430px 300px at 108% 2%,rgba(139,113,103,.13),transparent 68%),#2f2926!important;color:#f7f3f0!important}\n#salon-mobile #tn13Gallery .tn22-gallery{background:transparent!important;color:#f7f3f0!important;min-height:100dvh!important;padding:24px 18px 110px!important}\n#salon-mobile #tn13Gallery .tn22-gallery-back{color:#fff!important}\n#salon-mobile #tn13Gallery .tn22-gallery-title strong{color:#f7f3f0!important}\n#salon-mobile #tn13Gallery .tn22-gallery-title span{color:#b9ada7!important}\n#salon-mobile #tn13Gallery .tn22-gallery-tabs-wrap{position:sticky!important;top:0!important;z-index:45!important;margin:26px -18px 0!important;padding:8px 18px!important;background:rgba(47,41,38,.97)!important;backdrop-filter:blur(14px)!important;-webkit-backdrop-filter:blur(14px)!important;box-shadow:0 9px 24px rgba(0,0,0,.12)!important}\n#salon-mobile #tn13Gallery .tn22-gallery-tabs{display:flex!important;gap:0!important;margin:0!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:14px!important;overflow-x:auto!important;background:transparent!important}\n#salon-mobile #tn13Gallery .tn22-gallery-tab{height:43px!important;padding:0 18px!important;border:0!important;background:transparent!important;color:#cbc1bc!important;font:500 11px/1 Manrope,Arial,sans-serif!important;box-shadow:none!important}\n#salon-mobile #tn13Gallery .tn22-gallery-tile{background:#3a322e!important;border-radius:11px!important}\n#salon-mobile #tn13Gallery .tn22-gallery-grid{grid-template-columns:1fr 1fr!important;gap:7px!important;margin-top:18px!important}\n#salon-mobile #tn13Gallery .tn22-gallery-tabs{background:transparent!important}\n#salon-mobile #tn13Gallery .tn22-gallery-tab.active{background:#8b7167!important;color:#fff!important}\n\n#salon-mobile .tn22-cta:active{background:#654f48!important;border-color:#654f48!important}\n#salon-mobile .tn22-worklink:active{background:#DDC9B8!important;color:#49362D!important;border-color:#C7AD99!important}\n#salon-mobile #tn13BookSheet .tn50-book-copy{color:#555!important}\n#salon-mobile #tn13Visit .br-tanem-mark{background:#181818!important;border-color:rgba(255,255,255,.25)!important}\n\n\n/* Approved mobile adjustments, placed in the established neutral theme. */\nhtml{background:linear-gradient(to bottom,#fafaf9 0%,#fafaf9 58%,#181818 100%)!important}\n#salon-mobile #tn13Top{background:#f8f4ee!important;border-bottom:0!important;box-shadow:none!important}\n#salon-mobile #tn13Top .tn22-card{bottom:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 82%,rgba(248,244,238,0) 100%)!important;border:0!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(to bottom,#000 0%,#000 84%,transparent 100%)!important;mask-image:linear-gradient(to bottom,#000 0%,#000 84%,transparent 100%)!important}\n#salon-mobile #tn13Top .tn22-media.br-video-media:after{background:linear-gradient(180deg,rgba(248,244,238,0),rgba(248,244,238,.42) 43%,#f8f4ee 96%)!important}\n#salon-mobile #tn13Portfolio{position:relative!important;margin-top:-1px!important;border-top:0!important;box-shadow:none!important;background:#f7f2eb!important;overflow:visible!important;isolation:isolate!important}\n#salon-mobile #tn13Portfolio:before{content:''!important;position:absolute!important;z-index:0!important;left:-10px!important;right:-10px!important;top:-42px!important;height:122px!important;pointer-events:none!important;background:linear-gradient(180deg,rgba(250,248,244,.98) 0%,rgba(250,248,244,.90) 26%,rgba(250,248,244,.64) 52%,rgba(250,248,244,.30) 74%,rgba(250,248,244,0) 100%)!important;filter:blur(7px)!important;transform:translateZ(0)!important}\n#salon-mobile #tn13Portfolio .tn22-port{position:relative!important;z-index:1!important}\n#salon-mobile #tn13Sticky button{height:46px!important;min-width:142px!important;padding:0 24px!important;background:#171513!important;color:#fff!important;font-size:12px!important}\n#salon-mobile #tn13Sticky button:active{transform:translateY(1px) scale(.992)!important;background:#332b27!important}\n#salon-mobile #tn13Top .tn22-cta{background:#715b53!important;border-color:#715b53!important;color:#fff!important}\n#salon-mobile #tn13Top .tn22-cta:active{transform:translateY(1px) scale(.992)!important;background:#654f48!important}\n#salon-mobile #tn13Portfolio .tn22-port-all:active{transform:translateY(2px) scale(.988)!important;background:#715b53!important;color:#fff!important;border-color:#715b53!important}\n#tn38About .tn42-body{background:#e7ded5!important}\n#salon-mobile #tn13Portfolio:before{background:linear-gradient(180deg,#f8f4ee,rgba(247,242,235,0))!important}\n#salon-mobile #tn13Top .tn22-worklink{backdrop-filter:blur(9px)!important;-webkit-backdrop-filter:blur(9px)!important}\n#salon-mobile #tn13Top .tn22-top{background:#f8f4ee!important}\n#salon-mobile #tn13Portfolio .tn22-port-all{background:#efe7e1!important;border-color:rgba(113,91,83,.38)!important;color:#2f2926!important;backdrop-filter:blur(9px)!important;-webkit-backdrop-filter:blur(9px)!important}\n#salon-mobile #tn13Reviews .br-stars,#salon-mobile #tn13Reviews .br-review-meta-stars{color:#E4AD35!important}\n#salon-mobile #tn13Top .tn22-worklink{display:flex!important;min-height:48px!important;background:#efe7e1!important;border:1px solid rgba(113,91,83,.38)!important;color:#2f2926!important;box-shadow:0 6px 18px rgba(0,0,0,.10)!important;font-size:13px!important}\n#salon-mobile #tn13Top .tn22-worklink:active{background:#715b53!important;color:#fff!important;border-color:#715b53!important}\n@media(hover:hover){#salon-mobile #tn13Top .tn22-worklink:hover{background:#715b53!important;color:#fff!important;border-color:#715b53!important}}\n#salon-mobile #tn13Services .tn31-services{padding:32px 25px 40px!important}\n#salon-mobile #tn13Services .tn31-service-list{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:9px!important;width:calc(100% + 30px)!important;margin:18px -15px 0!important;border:0!important;padding:0!important;box-sizing:border-box!important}\n#salon-mobile #tn13Services .tn31-service-row{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;width:100%!important;min-height:60px!important;align-items:center!important;gap:11px!important;padding:12px 16px!important;border:1px solid rgba(255,255,255,.11)!important;border-radius:11px!important;background:rgba(255,255,255,.055)!important;color:#f7f7f6!important;text-align:left!important;box-shadow:none!important;box-sizing:border-box!important;transition:background .18s ease,transform .18s ease!important}\n#salon-mobile #tn13Services .tn31-service-row:active{background:rgba(255,255,255,.12)!important;transform:translateY(1px)!important}\n#salon-mobile #tn13Services .tn31-service-copy{min-width:0!important;padding:0!important}\n#salon-mobile #tn13Services .tn31-service-side{display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:7px!important;min-width:0!important;max-width:170px!important;margin:0!important;padding:0!important;text-align:right!important;flex-wrap:wrap!important}\n#salon-mobile #tn13Services .tn31-service-time{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:24px!important;padding:2px 7px!important;border:1px solid rgba(255,255,255,.13)!important;border-radius:999px!important;background:rgba(255,255,255,.10)!important;color:#dedede!important;font:600 9.5px/1 Manrope,Arial,sans-serif!important;white-space:nowrap!important}\n#salon-mobile #tn13Services .tn31-service-price{flex:0 0 auto!important;white-space:nowrap!important}\n@media(max-width:370px){#salon-mobile #tn13Services .tn31-service-row{padding:11px 13px!important;gap:8px!important}#salon-mobile #tn13Services .tn31-service-side{gap:5px!important;max-width:143px!important}#salon-mobile #tn13Services .tn31-service-time{font-size:9px!important;padding-inline:5px!important}}\n#salon-mobile #tn13Team,#salon-mobile #tn13Team .tn22-team{overflow:visible!important}\n#salon-mobile #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;gap:14px!important;margin:30px -28px 0!important;padding:0 28px 10px!important;overflow-x:auto!important;overflow-y:hidden!important;overscroll-behavior-x:contain!important;touch-action:pan-x pan-y!important;scroll-snap-type:x proximity!important;scroll-padding-left:28px!important;scroll-padding-right:28px!important;-webkit-overflow-scrolling:touch!important;scrollbar-width:none!important}\n#salon-mobile #tn13Team .tn22-team-grid::-webkit-scrollbar{display:none!important}\n#salon-mobile #tn13Team .tn22-master-card{flex:0 0 136px!important;width:136px!important;min-width:136px!important;scroll-snap-align:start!important;overflow:visible!important}\n#salon-mobile #tn13BookSheet .tn50-book-icon,#salon-mobile #tn13BookSheet .tn50-book-icon.phone,#salon-mobile #tn13BookSheet .tn50-book-icon.viber-generic{background:#e1e1df!important;color:#181818!important;border:1px solid rgba(24,24,24,.08)!important}\n#salon-mobile #tn13BookSheet .tn50-book-icon.phone svg,#salon-mobile #tn13BookSheet .tn50-book-icon.viber-generic svg{stroke:currentColor!important;color:#181818!important}\n#salon-mobile #tn13BookSheet .tn13-kicker,#salon-mobile #tn13BookSheet .tn50-book-title,#salon-mobile #tn13BookSheet .tn50-book-option strong{color:#181818!important}\n#salon-mobile #tn13BookSheet .tn13-close:active{background:#d9d9d7!important}\n#salon-mobile #tn38About .tn42-card,#salon-mobile #tn38About .tn42-body{background:#eee7df!important;border-color:rgba(66,55,49,.12)!important}\n#salon-mobile .tn22-master-page{background:#f2f2f0!important}\n#salon-mobile #tn38About .tn42-fact{background:#f3f3f1!important;color:#181818!important;border-color:rgba(24,24,24,.10)!important}\n#salon-mobile #tn13Visit{background:#242424!important}\n#salon-mobile #tn13Visit .tn22-footer{background:#181818!important}\n/* Mobile-only: use the portfolio's warm light tone in place of white accents. */\n#salon-mobile #tn13Services .tn31-cat.active{background:#f7f2eb!important;border-color:#f7f2eb!important;color:#181818!important}\n#salon-mobile #tn13Services .tn22-kicker,#salon-mobile #tn13Services h2{color:#f7f2eb!important}\n#salon-mobile #tn38About .tn42-fact{background:#f7f2eb!important;border-color:rgba(66,55,49,.12)!important}\n#salon-mobile #tn13Team .tn22-kicker,#salon-mobile #tn13Team h2,#salon-mobile #tn13Team .tn22-master-name{color:#f7f2eb!important}\n#salon-mobile #tn13Team .tn22-master-circle{background:linear-gradient(145deg,#3a3a3a,#202020)!important;color:#e5e5e5!important;border-color:rgba(255,255,255,.10)!important}\n#salon-mobile #tn13Visit .tn22-kicker,#salon-mobile #tn13Visit h2,#salon-mobile #tn13Visit .tn22-contact strong{color:#f7f2eb!important}\n#salon-mobile #tn13Visit .tn22-contact>span:last-child>span{color:#d5c9bf!important}\n#salon-mobile #tn13Visit .tn22-contact-icon{background:rgba(247,242,235,.13)!important;border-color:rgba(247,242,235,.20)!important}\n#salon-mobile #tn13Visit .tn22-contact-icon svg{stroke:#d5c3b4!important;color:#d5c3b4!important}\n#salon-mobile #tn13Visit .tn22-route{background:#f7f2eb!important;color:#2f2926!important}\n#salon-mobile #tn13Sticky{grid-template-columns:minmax(0,1fr) minmax(154px,44%)!important}\n#salon-mobile #tn13Sticky button{width:100%!important;min-width:154px!important;max-width:none!important;padding-inline:20px!important}\n@media(max-width:360px){#salon-mobile #tn13Sticky{grid-template-columns:minmax(0,1fr) minmax(142px,43%)!important}#salon-mobile #tn13Sticky button{min-width:142px!important;padding-inline:12px!important}}\n\n\n}\n@media(prefers-reduced-motion:reduce){.tn22-cta:after{animation:none!important}}\n\n@media(max-width:1023px){\n #salon-mobile #tn13Sticky{box-sizing:border-box!important;display:grid!important;grid-template-columns:minmax(0,1fr) max-content!important;align-items:center!important;gap:8px!important;padding:7px 7px 7px 12px!important;overflow:hidden!important}\n #salon-mobile #tn13Sticky>span{min-width:0!important;overflow-wrap:anywhere!important}\n #salon-mobile #tn13Sticky button{min-width:0!important;max-width:100%!important;padding-inline:clamp(11px,3.5vw,18px)!important;white-space:nowrap!important}\n body[data-br-lang=\"hy\"] #salon-mobile :is(h1,h2,h3,p,a,button,span,strong,small){font-weight:400!important}\n body[data-br-lang=\"hy\"] #salon-mobile #tn13Services .tn31-service-name{font-weight:400!important}\n body[data-br-lang=\"hy\"] #salon-mobile #tn13Sticky strong{font-size:clamp(10px,2.5vw,12px)!important;line-height:1.25!important;letter-spacing:-.03em!important;white-space:normal!important}\n}\n\n/* Existing mobile categories: align first pill with first service card, no extra row. */\n@media(max-width:1023px){\n#salon-mobile #tn13Services .tn31-cats:before{flex:0 0 2px!important;width:2px!important}\n#salon-mobile #tn13Services .tn31-cats{scroll-snap-type:none!important;scroll-behavior:auto!important}\n}\n@media(max-width:370px){\n#salon-mobile #tn13Services .tn31-cats{margin-left:-5px!important;width:calc(100% + 5px)!important}\n}\n\n/* Compact mobile service cards: center price on the initial height, then hold its position. */\n@media(max-width:1023px){\n #salon-mobile #tn13Services .tn31-service-row:not(.tn31-service-demo){\n   grid-template-columns:minmax(0,1fr) minmax(106px,118px)!important;\n   align-items:center!important\n }\n #salon-mobile #tn13Services .tn31-service-row:not(.tn31-service-demo) .tn31-service-side{\n   width:100%!important;max-width:none!important;align-self:center!important;\n   align-items:center!important;justify-content:center!important;flex-direction:column!important;\n   flex-wrap:nowrap!important;gap:4px!important;text-align:center!important\n }\n #salon-mobile #tn13Services .tn31-service-price{\n   max-width:100%!important;white-space:normal!important;text-align:center!important;\n   overflow-wrap:normal!important;line-height:1.25!important\n }\n #salon-mobile #tn13Services .tn31-service-row.tn31-service-demo{\n   position:relative!important;display:block!important;width:100%!important;min-height:0!important;\n   grid-template-columns:none!important;gap:0!important;padding:10px 14px!important;\n   align-items:initial!important\n }\n #salon-mobile #tn13Services .tn31-service-demo .tn31-service-primary{\n   display:block!important;position:static!important;width:100%!important;min-height:0!important;height:auto!important;\n   padding:0 121px 0 0!important;margin:0!important;border:0!important;\n   background:transparent!important;box-shadow:none!important;color:inherit!important;\n   text-align:left!important;font:inherit!important;cursor:pointer!important\n }\n #salon-mobile #tn13Services .tn31-service-demo .tn31-service-copy{display:block!important;min-width:0!important;padding:0!important}\n #salon-mobile #tn13Services .tn31-service-demo .tn31-service-name{\n   display:block!important;-webkit-line-clamp:unset!important;overflow:visible!important;line-height:1.15!important\n }\n #salon-mobile #tn13Services .tn31-service-demo .tn31-service-side{\n   position:absolute!important;right:14px!important;top:var(--service-price-y,50%)!important;\n   transform:translateY(-50%)!important;display:flex!important;flex-direction:column!important;\n   width:110px!important;min-width:0!important;max-width:110px!important;\n   align-items:center!important;justify-content:center!important;gap:5px!important;\n   margin:0!important;padding:0!important;text-align:center!important;flex-wrap:nowrap!important\n }\n #salon-mobile #tn13Services .tn31-service-demo .tn31-service-price{width:100%!important}\n #salon-mobile #tn13Services .tn31-service-demo-desc{\n   display:block!important;width:calc(100% - 121px)!important;max-width:calc(100% - 121px)!important;\n   padding:0!important;margin:4px 0 0!important;overflow-wrap:anywhere!important\n }\n #salon-mobile #tn13Services .tn31-service-demo-desc p{\n   display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;\n   overflow:hidden!important;margin:0!important;color:#bdbdbd!important;\n   font:400 11px/1.35 \"Manrope\",Arial,sans-serif!important\n }\n #salon-mobile #tn13Services .tn31-service-demo.is-expanded .tn31-service-demo-desc p{\n   display:block!important;-webkit-line-clamp:unset!important;overflow:visible!important\n }\n #salon-mobile #tn13Services .tn31-service-demo-more{\n   display:block!important;margin:4px 0 0!important;padding:2px 0!important;\n   border:0!important;background:transparent!important;box-shadow:none!important;\n   color:#ede1d6!important;text-align:left!important;cursor:pointer!important;\n   font:600 11px/1.25 \"Manrope\",Arial,sans-serif!important;\n   text-decoration:underline!important;text-underline-offset:3px!important\n }\n #salon-mobile #tn13Services .tn31-service-demo-more:focus-visible{\n   outline:2px solid #ede1d6!important;outline-offset:2px!important\n }\n}\n";document.head.appendChild(style);})();
