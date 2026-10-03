(function(global){
  'use strict';
  const t=(ru,en,kk)=>({ru,en,kk});
  const photo=(ru,en,kk)=>({src:'tests/fixtures/photo.svg',alt:t(ru,en,kk)});
  const data={
    schemaVersion:1,
    mode:'production',
    country:'KZ',
    locales:['ru','en','kk'],
    defaultLocale:'ru',
    salon:{
      // Brand identity is intentionally NOT translated to KK.
      name:{ru:'MONROE',en:'MONROE'},
      kind:t('Салон красоты','Beauty salon','Сұлулық салоны'),
      city:t('Алматы','Almaty','Алматы'),
      address:t('Абая, 150','150 Abay Ave','Абай даңғылы, 150'),
      fullAddress:t('Казахстан, Алматы, проспект Абая, 150','150 Abay Ave, Almaty, Kazakhstan','Қазақстан, Алматы, Абай даңғылы, 150'),
      heroDescription:t('Ваша красота. Ваша уверенность.','Your beauty. Your confidence.','Сіздің сұлулығыңыз. Сіздің сенімділігіңіз.'),
      about:t(
        'В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.',
        'Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.',
        'Біздің жұмысымыздың негізі — кәсіби көзқарас, егжей-тегжейге мұқият болу және әр қонақтың даралығын құрметтеу. Біз сапа мен қамқорлық басты орында тұратын жайлы кеңістік жасаймыз.'
      )
    },
    schedule:{
      timezone:'Asia/Almaty',
      periods:[{days:[1,2,3,4,5,6,7],open:'09:00',close:'21:00'}],
      fallback:t('По записи','By appointment','Алдын ала жазылу бойынша')
    },
    contacts:{
      phone:'+7 777 123 45 67',
      phoneLabel:t('Позвонить','Call','Қоңырау шалу'),
      messengerUrl:'https://t.me/monroe_kz',
      messengerLabel:{ru:'Telegram',en:'Telegram',kk:'Telegram'},
      messengerHandle:'@monroe_kz',
      mapUrl:'https://www.google.com/maps/search/?api=1&query=Almaty+Abay+150',
      mapEmbedUrl:'https://www.google.com/maps?q=Almaty+Abay+150&output=embed',
      reviewsUrl:'https://example.com/reviews/monroe',
      booking:[{type:'online',label:t('Онлайн-запись','Book online','Онлайн жазылу'),url:'https://example.com/book/monroe'}]
    },
    rating:{value:5,count:128},
    media:{
      logo:'',
      hero:[photo('Интерьер салона','Salon interior','Салон интерьері')],
      about:'tests/fixtures/photo.svg',
      portfolio:[photo('Работа салона','Salon work','Салон жұмысы')],
      gallery:{'Волосы':[photo('Работа с волосами','Hair work','Шаш үлгісі')]},
      desktopGalleryLimits:{'Волосы':1}
    },
    categoryLabels:{'Волосы':t('Волосы','Hair','Шаш')},
    categoryOrder:['Волосы'],
    services:[{
      id:'complex-hair',
      category:'Волосы',
      title:t('Комплексное восстановление и уход за повреждёнными волосами','Advanced damaged-hair restoration and care','Зақымдалған шашты кешенді қалпына келтіру және кәсіби күтім'),
      price:'25 000 ₸',
      duration:'2 ч',
      description:t(
        'Комплексный уход с консультацией и подбором домашнего ухода.',
        'Complete treatment with consultation and home-care recommendations.',
        'Кеңес беру және үй күтімін таңдаумен бірге жүргізілетін кешенді кәсіби күтім.'
      ),
      variants:[]
    }],
    team:[{
      id:'aruzhan',
      // Person name is intentionally original; role/about are English for protected KK team.
      name:{ru:'Aruzhan',en:'Aruzhan'},
      role:{ru:'Стилист по волосам',en:'Hair stylist'},
      about:{ru:'Специалист по стрижкам и уходу за волосами.',en:'Haircut and hair-care specialist.'},
      photo:'tests/fixtures/photo.svg',
      categories:['Волосы'],
      work:['tests/fixtures/photo.svg'],
      reviewIds:[]
    }],
    reviews:[{
      id:'review-aigerim',
      // Real review is intentionally present only in its original form.
      author:{ru:'Айгерім'},
      text:{ru:'Керемет қызмет! Шебер өте мұқият жұмыс істеді.'},
      rating:5,
      source:{ru:'2GIS'},
      url:'https://example.com/reviews/monroe/aigerim'
    }]
  };
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&value.ru){
      rows.push([value.ru,value.en||value.ru,value.en||value.ru]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  global.TANEM_SITE_DATA=data;
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
