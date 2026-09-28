(function(global){
  'use strict';

  const t=(ru,en=ru,hy=ru)=>({ru,en,hy});
  const placeholder='media-placeholder.svg';
  const placeholderWork=()=>({src:placeholder,alt:t('Работа салона','Salon work','Սրահի աշխատանք')});
  const placeholderSalon=()=>({src:placeholder,alt:t('Фото салона','Salon photo','Սրահի լուսանկար')});

  const categoryLabels={
    'Маникюр':t('Маникюр','Manicure','Մատնահարդարում'),
    'Брови и ресницы':t('Брови и ресницы','Brows & lashes','Հոնքեր և թարթիչներ'),
    'Волосы':t('Волосы','Hair','Մազեր'),
    'Эпиляция':t('Эпиляция','Hair removal','Էպիլյացիա'),
    'Другое':t('Другое','Other','Այլ'),
    'Косметология':t('Косметология','Cosmetology','Կոսմետոլոգիա'),
    'Макияж':t('Макияж','Makeup','Դիմահարդարում'),
    'Массаж':t('Массаж','Massage','Մերսում')
  };

  // Four neutral service cards solely for testing the responsive layout.
  // Client sites always start from site-data.blank.js (zero demo services).
  const services=[
    {id:'demo-hair-01',category:'Волосы',title:t('Услуга 01','Service 01','Ծառայություն 01'),price:'',duration:'',description:t(''),variants:[]},
    {id:'demo-hair-02',category:'Волосы',title:t('Услуга 02','Service 02','Ծառայություն 02'),price:'',duration:'',description:t(''),variants:[]},
    {id:'demo-nails-03',category:'Маникюр',title:t('Услуга 03','Service 03','Ծառայություն 03'),price:'',duration:'',description:t(''),variants:[]},
    {id:'demo-nails-04',category:'Маникюр',title:t('Услуга 04','Service 04','Ծառայություն 04'),price:'',duration:'',description:t(''),variants:[]}
  ];

  const reviews=Array.from({length:9},(_,index)=>{
    const number=index+1;
    return {
      id:`review-${number}`,
      author:t(`Клиент ${number}`,`Client ${number}`,`Հաճախորդ ${number}`),
      text:t(
        'Текст отзыва клиента будет добавлен при заполнении шаблона.',
        'The client review will be added when the template is completed.',
        'Հաճախորդի կարծիքը կավելացվի ձևանմուշը լրացնելիս։'
      ),
      rating:5,source:t('Источник отзыва','Review source','Կարծիքի աղբյուր'),url:''
    };
  });

  const team=[
    {id:'master-1',name:t('Мастер 1','Specialist 1','Մասնագետ 1'),role:t('Специалист','Specialist','Մասնագետ'),about:t(''),categories:['Маникюр'],work:[placeholder,placeholder,placeholder],reviewIds:[]},
    {id:'master-2',name:t('Мастер 2','Specialist 2','Մասնագետ 2'),role:t('Специалист','Specialist','Մասնագետ'),about:t(''),categories:['Волосы'],work:[placeholder,placeholder,placeholder],reviewIds:[]},
    {id:'master-3',name:t('Мастер 3','Specialist 3','Մասնագետ 3'),role:t('Специалист','Specialist','Մասնագետ'),about:t(''),categories:['Косметология'],work:[],reviewIds:[]},
    {id:'master-4',name:t('Мастер 4','Specialist 4','Մասնագետ 4'),role:t('Специалист','Specialist','Մասնագետ'),about:t(''),categories:['Брови и ресницы'],work:[],reviewIds:[]}
  ];

  const siteData={
    schemaVersion:1,
    mode:'template',
    country:'AM',
    locales:['ru','en','hy'],
    defaultLocale:'ru',
    salon:{
      name:t('SALON NAME','SALON NAME','SALON NAME'),
      kind:t('Салон красоты','Beauty salon','Գեղեցկության սրահ'),
      city:t('Город','City','Քաղաք'),
      address:t('Адрес салона','Salon address','Սրահի հասցե'),
      heroDescription:t('Описание салона.','Salon description.','Սրահի նկարագրություն։'),
      about:t(
        'Описание салона будет добавлено при заполнении шаблона.',
        'The salon description will be added when the template is completed.',
        'Սրահի նկարագրությունը կավելացվի ձևանմուշը լրացնելիս։'
      )
    },
    schedule:{timezone:'Europe/Moscow',periods:[],fallback:t('Уточняется','To be added','Կավելացվի')},
    contacts:{phone:'',phoneLabel:t('Телефон салона','Salon phone','Սրահի հեռախոս'),messengerUrl:'',messengerLabel:t('Мессенджер','Messenger','Մեսենջեր'),mapUrl:'',reviewsUrl:'',booking:[]},
    rating:{value:null,count:0},
    media:{
      logo:'logo-placeholder.svg',hero:[placeholderSalon(),placeholderWork()],heroDesktop:'',about:placeholder,
      portfolio:Array.from({length:7},placeholderWork),
      gallery:{
        'Салон':Array.from({length:2},placeholderSalon),
        'Ногти':Array.from({length:10},placeholderWork),
        'Волосы':Array.from({length:9},placeholderWork),
        'Макияж':Array.from({length:3},placeholderWork)
      },
      desktopGalleryLimits:{'Салон':2,'Ногти':9,'Волосы':7,'Макияж':3}
    },
    categoryLabels,
    categoryOrder:['Волосы','Маникюр'],
    services,
    team,
    reviews
  };

  const localizedRows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)localizedRows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(siteData.salon);
  collect(siteData.categoryLabels);
  collect(siteData.services);
  collect(siteData.team);
  collect(siteData.reviews);
  collect(siteData.contacts);
  collect(siteData.schedule);
  collect(siteData.media);

  global.TANEM_SITE_DATA=siteData;
  global.TANEM_SITE_I18N_ROWS=localizedRows;
})(window);
