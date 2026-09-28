(function(global){
  'use strict';
  // Fill client information in this file, then rename it to site-data.js.
  // Never publish a client site while mode is 'template'.
  const t=(ru='',en='',hy='',uz='',tg='')=>({ru,en,hy,uz,tg});
  const data={
    schemaVersion:1,
    mode:'template',
    country:'RU', // RU: ru/en; AM: ru/en/hy; UZ: ru/en/uz; TJ: ru/en/tg
    locales:['ru','en'],
    defaultLocale:'ru',
    salon:{name:t(),kind:t(),city:t(),address:t(),heroDescription:t(),about:t()},
    schedule:{timezone:'Europe/Moscow',periods:[],fallback:t()},
    contacts:{phone:'',phoneLabel:t('Позвонить','Call','Զանգահարել'),
      messengerUrl:'',messengerLabel:t('Написать','Message','Գրել'),messengerHandle:'',
      mapUrl:'',mapEmbedUrl:'',reviewsUrl:'',booking:[]},
    rating:{value:null,count:0},
    // Media contract: see RULES.md. hero[0] = master.00000.webp; heroDesktop = masterpc.00000.webp (optional); logo = logo.webp.
    media:{logo:'',hero:[],heroDesktop:'',about:'',portfolio:[],gallery:{},desktopGalleryLimits:{}},
    categoryLabels:{},
    categoryOrder:[],
    services:[], // No demo services. Add one object per actual client service.
    team:[],
    reviews:[]
  };
  global.TANEM_SITE_DATA=data;
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)rows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
