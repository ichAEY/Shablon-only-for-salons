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

  const placeholderCategories=[
    'Маникюр','Брови и ресницы','Волосы','Брови и ресницы','Эпиляция','Волосы','Другое','Эпиляция','Волосы','Эпиляция',
    'Волосы','Волосы','Волосы','Маникюр','Маникюр','Маникюр','Маникюр','Косметология','Косметология','Эпиляция',
    'Брови и ресницы','Волосы','Брови и ресницы','Брови и ресницы','Макияж','Маникюр','Массаж','Волосы','Волосы','Брови и ресницы'
  ];

  const services=[
    {
      id:'demo-hair-range',category:'Волосы',
      title:t('Окрашивание волос средней длины','Medium-length hair coloring','Միջին երկարության մազերի ներկում'),
      price:'5 000–10 000 ֏',duration:'2 ч',description:t(''),variants:[]
    },
    {
      id:'demo-highlights',category:'Волосы',
      title:t('Сложное мелирование','Advanced highlights','Բարդ մելիրավորում'),
      price:'15 000 ₽',duration:'4 ч',
      description:t(
        'Привет, это описание. Оно очень необходимо для того, чтобы вы понимали, что это такое. Но это мелирование, поэтому действуйте именно вот так.',
        'Hello, this is a description. It is important so you understand what this service is. Since this is highlighting, follow these instructions.',
        'Բարև, սա ծառայության նկարագրությունն է։ Այն անհրաժեշտ է, որպեսզի հասկանաք, թե ինչ է այս ծառայությունը։ Սա մելիրավորում է, ուստի պետք է գործել հենց այսպես։'
      ),variants:[]
    },
    {
      id:'demo-color-fill',category:'Волосы',
      title:t('Сложная покраска волос с заливкой','Complex hair coloring with color filling','Մազերի բարդ ներկում՝ գույնի լցմամբ'),
      price:'от 6 000 ₽',duration:'1,5 ч',
      description:t(
        'если ваши волосы когда-то испортились или вы обожгли их утюгом, есть специальное средство для того, чтобы выйти из этого состояния и вновь обрести хорошие, свежие, красивые волосы. Чтобы всё было хорошо, запишитесь к нам на услугу, и мы примем вас, как только вы возьмёте.',
        'If your hair was damaged or burned with a straightener, there is a special treatment to help restore it and bring back a healthy, fresh, beautiful look. Book this service and we will welcome you as soon as you make an appointment.',
        'Եթե ձեր մազերը երբևէ վնասվել են կամ այրվել են արդուկից, կա հատուկ միջոց, որը կօգնի վերականգնել դրանք և վերադարձնել առողջ, թարմ ու գեղեցիկ տեսքը։ Գրանցվեք այս ծառայությանը, և մենք ձեզ կընդունենք հենց որ ամրագրեք այցը։'
      ),variants:[]
    },
    {id:'demo-mens-cut',category:'Волосы',title:t('Мужская стрижка',"Men's haircut",'Տղամարդու սանրվածք'),price:'4 600 ₽',duration:'3 ч',description:t(''),variants:[]},
    {id:'demo-color-no-mask',category:'Волосы',title:t('Окрашивание волос без маски','Hair coloring without a mask','Մազերի ներկում առանց դիմակի'),price:'от 15 000 ₽',duration:'5 ч',description:t(''),variants:[]},
    {id:'demo-highlighting',category:'Волосы',title:t('Мелирование мелирования','Highlighting highlights','Մելիրավորման մելիրավորում'),price:'от 4 000 ₽',duration:'',description:t(''),variants:[]},
    {
      id:'mens-cut-long',mobileDemoId:'tnDemoMensCutDesc',category:'Волосы',
      title:t('Мужская стрижка',"Men's haircut",'Տղամարդու սանրվածք'),price:'4 600 ₽',duration:'3 ч',
      description:t(
        'Для того чтобы постричься мужчине, нужно определить, какой уровень он имеет, для того чтобы сделать так-то, так-то. Без этого не получится сформулировать единогласное решение судей, которое пунктурирует невыносимое обстоятельство обстоятельств.',
        "To cut a man's hair, we first need to determine his level in order to do this and that. Without this, it is impossible to formulate the judges' unanimous decision, which punctures an unbearable set of circumstances.",
        'Տղամարդուն սանրվածք անելու համար նախ պետք է պարզել, թե ինչ մակարդակ ունի նա, որպեսզի ամեն ինչ ճիշտ արվի։ Առանց դրա հնարավոր չէ ձևակերպել դատավորների միաձայն որոշումը, որը վերացնում է անտանելի հանգամանքների հանգամանքները։'
      ),variants:[]
    },
    {
      id:'mens-cut-color',mobileDemoId:'tnDemoMensCutColorDesc',category:'Волосы',
      title:t('Мужская стрижка с покраской','Men\'s haircut and coloring','Տղամարդու սանրվածք և ներկում'),price:'1 000 ₽',duration:'',
      description:t('Мужская стрижка с последующим окрашиванием волос.','Men\'s haircut followed by hair coloring.','Տղամարդու սանրվածք՝ հետագա մազերի ներկմամբ։'),variants:[]
    },
    ...placeholderCategories.map((category,index)=>{
      const number=String(index+1).padStart(2,'0');
      return {
        id:`placeholder-${number}`,category,
        title:t(`Услуга ${number}`,`Service ${number}`,`Ծառայություն ${number}`),
        price:'',duration:'',description:t(''),variants:[]
      };
    })
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
      logo:'logo-placeholder.svg',hero:[placeholderSalon(),placeholderWork()],about:placeholder,
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
    categoryOrder:['Волосы','Маникюр','Брови и ресницы','Эпиляция','Другое','Косметология','Макияж','Массаж'],
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
  collect(siteData.contacts);

  global.TANEM_SITE_DATA=siteData;
  global.TANEM_SITE_I18N_ROWS=localizedRows;
})(window);
