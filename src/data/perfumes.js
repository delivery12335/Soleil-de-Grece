import { assetUrl } from '../assets';

export const phone = '+373 688 42 987';
export const phoneHref = 'tel:+37368842987';
export const whatsappHref = 'https://wa.me/37368842987';
export const email = 'contact@soleildegrace.example';
export const fragranticaDesignerUrl = 'https://www.fragrantica.com/designers/Soleil-de-Grace.html';
export const facebookUrl = 'https://www.facebook.com/p/Soleil-De-Grace-61590532027610/';
export const instagramUrl = 'https://www.instagram.com/soleil.de.grace.md?igsh=MWRrM3dma25mODZuaQ==';
export const parfumoUrl = 'https://www.parfumo.com/Perfumes/soleil-de-grace';
export const officialBrandUrl = 'https://soleildegrace.com';

export const contactLinks = [
  { id: 'facebook', label: 'Facebook', icon: assetUrl('images/social/facebook.png'), href: facebookUrl },
  { id: 'instagram', label: 'Instagram', icon: assetUrl('images/social/instagram.png'), href: instagramUrl },
  { id: 'fragrantica', label: 'Fragrantica', icon: assetUrl('images/social/fragrantica.png'), href: fragranticaDesignerUrl },
  { id: 'parfumo', label: 'Parfumo', icon: assetUrl('images/social/parfumo.png'), href: parfumoUrl },
  { id: 'whatsapp', label: 'WhatsApp', icon: assetUrl('images/social/whatsapp.png'), href: whatsappHref },
];

export const informationLinks = [
  { id: 'about', label: { ru: 'О бренде', en: 'About Us' }, href: '/about-us' },
];

const perfumeImage = (name) => assetUrl(`images/perfumes/${name}.png`);
const perfumeHeroImage = (name) => assetUrl(`images/perfumes/${name}.png`);

export const collections = ['Все', 'NÉO Collection', 'The Origins Collection'];

export const perfumes = [
  {
    id: 1,
    title: 'Addictoud',
    slug: 'addictoud',
    collection: 'NÉO Collection',
    year: 2026,
    gender: 'унисекс',
    family: 'восточно-ванильный',
    perfumer: 'Özge Erdoğmuş Altınel',
    rating: '4.29',
    votes: 7,
    accords: ['уд', 'землистый', 'вино', 'карамель', 'амбра', 'сладкий'],
    description: 'Густой гурманский уд с винно-карамельным стартом, древесным сердцем и темной амбровой базой.',
    details: {
      ru: {
        intro: 'Addictoud от Soleil de Grâce — восточно-ванильный аромат для женщин и мужчин выпущенный в 2026 году в составе NÉO Collection. Парфюмер — Özge Erdoğmuş Altınel. Верхние ноты: карамель и красное вино; ноты сердца: жасмин мох кашемировое дерево сандал и кедр; базовые ноты: уд киприол бобы тонка лабданум сахарная вата ваниль амбра и мускус.',
        quote: 'Теплая гурманская сладость встречается здесь с темной древесной глубиной.',
        paragraphs: [
          'Красное вино и карамель создают насыщенное почти съедобное начало с современным восточно-гурманским характером.',
          'В сердце жасмин окутан кедром и сандалом а мох и кашемировое дерево добавляют фактуру и мягкий землистый фон.',
          'Постепенно аромат становится слаще и плотнее благодаря сахарной вате ванили и бобам тонка. Лабданум амбра мускус киприол и уд формируют темную смолистую и слегка дымную базу.',
        ],
      },
      en: {
        intro: 'Addictoud by Soleil de Grâce is an Oriental Vanilla fragrance for women and men launched in 2026 as part of the NÉO Collection. The perfumer is Özge Erdoğmuş Altınel. Top notes are caramel and red wine; heart notes are jasmine moss cashmere wood sandalwood and cedarwood; base notes are oud cypriol tonka bean labdanum cotton candy vanilla amber and musk.',
        quote: 'Warm gourmand sweetness meets a dark woody depth.',
        paragraphs: [
          'Red wine and caramel create a rich edible opening with a modern oriental-gourmand character.',
          'Jasmine is wrapped in cedarwood and sandalwood while moss and cashmere wood add texture and a soft earthy background.',
          'The fragrance grows sweeter and denser through cotton candy vanilla and tonka bean. Labdanum amber musk cypriol and oud shape a dark resinous and slightly smoky base.',
        ],
      },
    },
    notes: {
      top: ['Карамель', 'Красное вино'],
      middle: ['Жасмин', 'Мох', 'Кашемировое дерево', 'Сандал', 'Кедр'],
      base: ['Уд', 'Киприол', 'Бобы тонка', 'Лабданум', 'Сахарная вата', 'Ваниль', 'Амбра', 'Мускус'],
    },
    image: perfumeImage('addictoud'),
    heroImage: perfumeHeroImage('addictoud-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Addictoud-122312.html',
  },
  {
    id: 2,
    title: 'Eximious',
    slug: 'eximious',
    collection: 'NÉO Collection',
    year: 2026,
    gender: 'унисекс',
    family: 'древесно-цветочный мускус',
    perfumer: 'Ayşe Sirkecioğlu',
    rating: null,
    votes: null,
    accords: ['древесный', 'ароматический', 'пряный', 'пудровый', 'цитрус', 'мускус'],
    description: 'Сухая свежесть цитрусов, можжевельника и специй переходит в пудрово-древесный шлейф.',
    details: {
      ru: {
        intro: 'Eximious от Soleil de Grâce — древесно-цветочный мускусный аромат для женщин и мужчин выпущенный в 2026 году. Парфюмер — Ayşe Sirkecioğlu. Верхние ноты: кориандр бергамот можжевельник мускатный орех и лайм; ноты сердца: кашемировое дерево белые цветы пудровые ноты и пачули; базовые ноты: кедр ваниль ветивер амбра мускус и мох.',
        quote: 'Свежая пряность постепенно растворяется в мягком древесно-мускусном шлейфе.',
        paragraphs: [
          'Бергамот лайм можжевельник мускатный орех и кориандр формируют прозрачное цитрусовое начало с легкой пряностью.',
          'Белые цветы и пудровые ноты смягчают сердце а пачули и кашемировое дерево придают ему сухую древесную текстуру.',
          'Кедр ветивер мох ваниль амбра и мускус собираются в спокойную теплую базу с чистым и продолжительным звучанием.',
        ],
      },
      en: {
        intro: 'Eximious by Soleil de Grâce is a Woody Floral Musk fragrance for women and men launched in 2026. The perfumer is Ayşe Sirkecioğlu. Top notes are coriander bergamot juniper nutmeg and lime; heart notes are cashmere wood white flowers powdery notes and patchouli; base notes are cedarwood vanilla vetiver amber musk and moss.',
        quote: 'Fresh spice slowly melts into a smooth woody-musky trail.',
        paragraphs: [
          'Bergamot lime juniper nutmeg and coriander form a transparent citrus opening with gentle spice.',
          'White flowers and powdery notes soften the heart while patchouli and cashmere wood give it a dry woody texture.',
          'Cedarwood vetiver moss vanilla amber and musk settle into a calm warm base with a clean lasting character.',
        ],
      },
    },
    notes: {
      top: ['Кориандр', 'Бергамот', 'Можжевельник', 'Мускатный орех', 'Лайм'],
      middle: ['Кашемировое дерево', 'Белые цветы', 'Пудровые ноты', 'Пачули'],
      base: ['Кедр', 'Ваниль', 'Ветивер', 'Амбра', 'Мускус', 'Мох'],
    },
    image: perfumeImage('eximious'),
    heroImage: perfumeHeroImage('eximious-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Eximious-133575.html',
  },
  {
    id: 3,
    title: "L'Ambre Vanillé",
    slug: 'l-ambre-vanille',
    collection: 'NÉO Collection',
    year: 2026,
    gender: 'унисекс',
    family: 'восточно-ванильный',
    perfumer: 'Gökhan Şimşek',
    rating: '4.55',
    votes: 11,
    accords: ['амбра', 'сладкий', 'ваниль', 'теплые специи', 'бальзамический'],
    description: 'Молочно-кокосовый гурманский старт, смолистое сердце и мягкая ванильно-амбровая база.',
    details: {
      ru: {
        intro: "L'Ambre Vanillé от Soleil de Grâce — восточно-ванильный аромат для женщин и мужчин выпущенный в 2026 году. Парфюмер — Gökhan Şimşek. Верхние ноты: кокос и молоко; ноты сердца: мирра олибанум лабданум и можжевельник; базовые ноты: бобы тонка ваниль пралине амбра и мускус.",
        quote: 'Сливочная мягкость соединяется со смолами и теплой десертной базой.',
        paragraphs: [
          'Кокос и молоко открывают аромат мягким сливочным и тропическим впечатлением.',
          'В сердце можжевельник встречается с миррой лабданумом и олибанумом добавляя ароматические бальзамические и слегка дымные оттенки.',
          'Ваниль пралине и бобы тонка образуют плотную сладкую основу. Амбра и мускус усиливают тепло и оставляют стойкий смолисто-мускусный шлейф.',
        ],
      },
      en: {
        intro: "L'Ambre Vanillé by Soleil de Grâce is an Oriental Vanilla fragrance for women and men launched in 2026. The perfumer is Gökhan Şimşek. Top notes are coconut and milk; heart notes are myrrh olibanum labdanum and juniper; base notes are tonka bean vanilla praline amber and musk.",
        quote: 'Creamy softness meets aromatic resins and a warm dessert-like base.',
        paragraphs: [
          'Coconut and milk open the fragrance with a soft creamy tropical impression.',
          'Juniper meets myrrh labdanum and olibanum in the heart adding aromatic balsamic and slightly smoky facets.',
          'Vanilla praline and tonka bean form a dense sweet foundation. Amber and musk reinforce the warmth and leave a lingering resinous-musky trail.',
        ],
      },
    },
    notes: {
      top: ['Кокос', 'Молоко'],
      middle: ['Мирра', 'Олибанум', 'Лабданум', 'Можжевельник'],
      base: ['Бобы тонка', 'Ваниль', 'Пралине', 'Амбра', 'Мускус'],
    },
    image: perfumeImage('l-ambre-vanille'),
    heroImage: perfumeHeroImage('l-ambre-vanille-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/L-Ambre-Vanille-122313.html',
  },
  {
    id: 4,
    title: "Lux'Us",
    slug: 'lux-us',
    collection: 'NÉO Collection',
    year: 2026,
    gender: 'унисекс',
    family: 'восточно-древесный',
    perfumer: 'Özge Erdoğmuş Altınel',
    rating: '4.09',
    votes: 11,
    accords: ['морской', 'кожа', 'ароматический', 'белые цветы', 'ирис', 'уд'],
    description: 'Контраст морской прохлады, шафрана, кожи, уда и теплой амброво-мускусной базы.',
    details: {
      ru: {
        intro: "Lux'Us от Soleil de Grâce — восточно-древесный аромат для женщин и мужчин выпущенный в 2026 году. Парфюмер — Özge Erdoğmuş Altınel. Верхние ноты: акватические ноты розовый перец шафран и гвоздика; сердце: кожа ирис ландыш уд сандал дубовый мох жасмин и роза; база: лабданум бобы тонка амбервуд ванилин амбра и мускус.",
        quote: 'Морская прохлада вступает в контраст с кожей удом и теплой амброй.',
        paragraphs: [
          'Акватическая свежесть соединяется с шафраном розовым перцем и гвоздикой создавая прохладное пряное начало.',
          'Кожа ирис ландыш жасмин и роза переплетаются с удом сандалом и дубовым мхом в выразительном нео-восточном сердце.',
          'Лабданум бобы тонка амбервуд ванилин амбра и мускус придают базе насыщенное тепло сладость и объем.',
        ],
      },
      en: {
        intro: "Lux'Us by Soleil de Grâce is an Oriental Woody fragrance for women and men launched in 2026. The perfumer is Özge Erdoğmuş Altınel. Top notes are aquatic notes pink pepper saffron and clove; heart notes are leather iris lily of the valley oud sandalwood oakmoss jasmine and rose; base notes are labdanum tonka bean amberwood vanillin amber and musk.",
        quote: 'Marine coolness contrasts with leather oud and warm amber.',
        paragraphs: [
          'Aquatic freshness meets saffron pink pepper and clove in a cool spicy opening.',
          'Leather iris lily of the valley jasmine and rose intertwine with oud sandalwood and oakmoss in a distinctive neo-oriental heart.',
          'Labdanum tonka bean amberwood vanillin amber and musk give the base rich warmth sweetness and volume.',
        ],
      },
    },
    notes: {
      top: ['Акватические ноты', 'Розовый перец', 'Шафран', 'Гвоздика'],
      middle: ['Кожа', 'Ирис', 'Ландыш', 'Уд', 'Сандал', 'Дубовый мох', 'Жасмин', 'Роза'],
      base: ['Лабданум', 'Бобы тонка', 'Амбервуд', 'Ванилин', 'Амбра', 'Мускус'],
    },
    image: perfumeImage('lux-us'),
    heroImage: perfumeHeroImage('lux-us-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Lux-Us-122314.html',
  },
  {
    id: 5,
    title: 'Atlantis',
    slug: 'atlantis',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'древесно-акватический',
    perfumer: 'Özge Erdoğmuş Altınel',
    rating: '4.00',
    votes: 14,
    accords: ['морской', 'акватический', 'ароматический', 'мускус', 'пудровый', 'соленый'],
    description: 'Свежий морской профиль с бергамотом, прозрачными цветами и солоноватой древесной базой.',
    details: {
      ru: {
        intro: 'Atlantis от Soleil de Grâce — древесно-акватический аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Özge Erdoğmuş Altınel. Верхние ноты: морские ноты и бергамот; ноты сердца: цикламен жасмин и ландыш; базовые ноты: водоросли мускус амбра и сандал.',
        quote: 'Композиция которая поднимает чувства и переносит к спокойному морскому берегу.',
        paragraphs: [
          'Бергамот и морские ноты открывают аромат свежим океанским ветром и прозрачной солоноватой прохладой.',
          'Цикламен жасмин и ландыш раскрываются в чистом водянистом цветочном сердце.',
          'Водоросли мускус амбра и сандал добавляют минеральную глубину и оставляют мягкий древесно-морской шлейф.',
        ],
      },
      en: {
        intro: 'Atlantis by Soleil de Grâce is a Woody Aquatic fragrance for women and men launched in 2024. The perfumer is Özge Erdoğmuş Altınel. Top notes are marine notes and bergamot; heart notes are cyclamen jasmine and lily of the valley; base notes are seaweed musk amber and sandalwood.',
        quote: 'A composition that elevates the senses and carries them toward a serene seashore.',
        paragraphs: [
          'Bergamot and marine notes open the fragrance with an ocean breeze and transparent salty freshness.',
          'Cyclamen jasmine and lily of the valley unfold in a clean watery floral heart.',
          'Seaweed musk amber and sandalwood add mineral depth and leave a soft woody-marine trail.',
        ],
      },
    },
    notes: {
      top: ['Морские ноты', 'Бергамот'],
      middle: ['Цикламен', 'Жасмин', 'Ландыш'],
      base: ['Водоросли', 'Мускус', 'Амбра', 'Сандал'],
    },
    image: perfumeImage('atlantis'),
    heroImage: perfumeHeroImage('atlantis-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Atlantis-91013.html',
  },
  {
    id: 6,
    title: 'Black Tonka',
    slug: 'black-tonka',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'гурманский восточный',
    perfumer: 'Gökhan Şimşek',
    rating: '3.95',
    votes: 19,
    accords: ['теплые специи', 'ваниль', 'табак', 'корица', 'амбра', 'карамель'],
    description: 'Плотный сладко-пряный аромат с молоком, карамелью, табаком, цветами и тонкой ванилью.',
    details: {
      ru: {
        intro: 'Black Tonka от Soleil de Grâce — гурманский восточный аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Gökhan Şimşek. Верхние ноты: корица шафран карамель табак мускатный орех молоко и элеми; сердце: мимоза ландыш и жасмин; база: бобы тонка ваниль сандал пачули бензоин амбра и мускус.',
        quote: 'Захватывающий союз гурманских и восточных нот.',
        paragraphs: [
          'Молоко карамель корица элеми шафран мускатный орех и табак создают сильное насыщенное и сладко-пряное начало.',
          'Мимоза ландыш и жасмин смягчают композицию нежным цветочным сердцем.',
          'Пачули сандал бензоин бобы тонка ваниль амбра и мускус складываются в теплую плотную и стойкую базу.',
        ],
      },
      en: {
        intro: 'Black Tonka by Soleil de Grâce is a gourmand oriental fragrance for women and men launched in 2024. The perfumer is Gökhan Şimşek. Top notes are cinnamon saffron caramel tobacco nutmeg milk and elemi; heart notes are mimosa lily of the valley and jasmine; base notes are tonka bean vanilla sandalwood patchouli benzoin amber and musk.',
        quote: 'A breathtaking union of gourmand and oriental notes.',
        paragraphs: [
          'Milk caramel cinnamon elemi saffron nutmeg and tobacco create a strong rich sweet-spicy opening.',
          'Mimosa lily of the valley and jasmine soften the composition with a delicate floral heart.',
          'Patchouli sandalwood benzoin tonka bean vanilla amber and musk settle into a warm dense and lasting base.',
        ],
      },
    },
    notes: {
      top: ['Корица', 'Шафран', 'Карамель', 'Табак', 'Мускатный орех', 'Молоко', 'Элеми'],
      middle: ['Мимоза', 'Ландыш', 'Жасмин'],
      base: ['Бобы тонка', 'Ваниль', 'Сандал', 'Пачули', 'Бензоин', 'Амбра', 'Мускус'],
    },
    image: perfumeImage('black-tonka'),
    heroImage: perfumeHeroImage('black-tonka-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Black-Tonka-91023.html',
  },
  {
    id: 7,
    title: 'Carat Iris',
    slug: 'carat-iris',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'цветочно-древесный мускус',
    perfumer: 'Hüseyin Erdoğmuş',
    rating: '3.81',
    votes: 21,
    accords: ['ирис', 'фиалка', 'древесный', 'пудровый', 'амбра', 'дымный'],
    description: 'Пудровый ирис и жасмин на древесно-смолистой базе с амброй, ванилью и мхом.',
    details: {
      ru: {
        intro: 'Carat Iris от Soleil de Grâce — цветочно-древесный мускусный аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Hüseyin Erdoğmuş. Верхние ноты: ирис и жасмин; ноты сердца: кедр ладан и мирра; базовые ноты: амбра ваниль мускус и дубовый мох.',
        quote: 'Цветочный букет раскрывается как загадочное путешествие.',
        paragraphs: [
          'Ирис и жасмин создают сияющее пудровое начало напоминающее цветущий сад.',
          'Ладан и мирра добавляют сердцу тайну и дымную смолистость а кедр окружает его древесным теплом.',
          'Ваниль смешивается с амброй дубовым мхом и мускусом создавая мягкий землистый и гармоничный финал.',
        ],
      },
      en: {
        intro: 'Carat Iris by Soleil de Grâce is a Floral Woody Musk fragrance for women and men launched in 2024. The perfumer is Hüseyin Erdoğmuş. Top notes are iris and jasmine; heart notes are cedarwood incense and myrrh; base notes are amber vanilla musk and oakmoss.',
        quote: 'A floral bouquet unfolds like a mysterious journey.',
        paragraphs: [
          'Iris and jasmine create a radiant powdery opening reminiscent of a blooming garden.',
          'Incense and myrrh add mystery and smoky resin while cedarwood surrounds the heart with warmth.',
          'Vanilla blends with amber oakmoss and musk in a soft earthy and harmonious finish.',
        ],
      },
    },
    notes: {
      top: ['Ирис', 'Жасмин'],
      middle: ['Кедр', 'Ладан', 'Мирра'],
      base: ['Амбра', 'Ваниль', 'Мускус', 'Дубовый мох'],
    },
    image: perfumeImage('carat-iris'),
    heroImage: perfumeHeroImage('carat-iris-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Carat-Iris-91024.html',
  },
  {
    id: 8,
    title: 'Cherish Oud',
    slug: 'cherish-oud',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'фруктово-удовый',
    perfumer: 'Hüseyin Erdoğmuş',
    rating: '4.50',
    votes: 12,
    accords: ['вишня', 'сладкий', 'фруктовый', 'уд', 'пачули', 'пряный'],
    description: 'Сочная вишня и малина встречаются с корицей, пачули, розой, удом и ванильной амброй.',
    details: {
      ru: {
        intro: 'Cherish Oud от Soleil de Grâce — фруктово-удовый аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Hüseyin Erdoğmuş. Верхние ноты: вишня малина имбирь и корица; ноты сердца: пачули ландыш фиалка и роза; базовые ноты: уд амбра ваниль и мускус.',
        quote: 'Игривость и чувственность встречаются в путешествии на запретную территорию.',
        paragraphs: [
          'Сочная вишня и малина соединяются с ярким имбирем и теплой корицей создавая мощное фруктово-пряное начало.',
          'Роза ландыш бархатистая фиалка и пачули формируют глубокое соблазнительное сердце.',
          'Уд ваниль амбра и мускус завершают аромат темной теплотой и оставляют притягательный стойкий шлейф.',
        ],
      },
      en: {
        intro: 'Cherish Oud by Soleil de Grâce is a fruity oud fragrance for women and men launched in 2024. The perfumer is Hüseyin Erdoğmuş. Top notes are cherry raspberry ginger and cinnamon; heart notes are patchouli lily of the valley violet and rose; base notes are oud amber vanilla and musk.',
        quote: 'Playfulness meets sensuality on a journey into forbidden territory.',
        paragraphs: [
          'Juicy cherry and raspberry meet bright ginger and warm cinnamon in a powerful fruity-spicy opening.',
          'Rose lily of the valley velvety violet and patchouli shape a deep alluring heart.',
          'Oud vanilla amber and musk finish the fragrance with dark warmth and a magnetic lasting trail.',
        ],
      },
    },
    notes: {
      top: ['Вишня', 'Малина', 'Имбирь', 'Корица'],
      middle: ['Пачули', 'Ландыш', 'Фиалка', 'Роза'],
      base: ['Уд', 'Амбра', 'Ваниль', 'Мускус'],
    },
    image: perfumeImage('cherish-oud'),
    heroImage: perfumeHeroImage('cherish-oud-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Cherish-Oud-91026.html',
  },
  {
    id: 9,
    title: 'Floruits',
    slug: 'floruits',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'цветочно-фруктовый',
    perfumer: 'Gökhan Şimşek',
    rating: '4.07',
    votes: 30,
    accords: ['мох', 'белые цветы', 'землистый', 'свежий', 'цитрус', 'фруктовый'],
    description: 'Яркий мандарин и маракуйя, белые цветы в сердце и минерально-мшистая амбра в базе.',
    details: {
      ru: {
        intro: 'Floruits от Soleil de Grâce — цветочно-фруктовый аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Gökhan Şimşek. Верхние ноты: мандарин и маракуйя; ноты сердца: ландыш жасмин и фрезия; базовые ноты: дубовый мох и амбра.',
        quote: 'Твой мир и твое путешествие.',
        paragraphs: [
          'Свежая маракуйя и сочный мандарин образуют яркое энергичное начало.',
          'В сердце расцветают фрезия жасмин и ландыш превращая композицию в чистый белоцветочный букет.',
          'Солоноватый дубовый мох и чувственная амбра добавляют минеральную глубину и доводят аромат до выразительного финала.',
        ],
      },
      en: {
        intro: 'Floruits by Soleil de Grâce is a Floral Fruity fragrance for women and men launched in 2024. The perfumer is Gökhan Şimşek. Top notes are mandarin orange and passionfruit; heart notes are lily of the valley jasmine and freesia; base notes are oakmoss and amber.',
        quote: 'Your world and your journey.',
        paragraphs: [
          'Fresh passionfruit and zesty mandarin form a vivid energetic opening.',
          'Freesia jasmine and lily of the valley bloom in the heart creating a clean white-floral bouquet.',
          'Salty oakmoss and sensual amber add mineral depth and carry the fragrance into a distinctive finish.',
        ],
      },
    },
    notes: {
      top: ['Мандарин', 'Маракуйя'],
      middle: ['Ландыш', 'Жасмин', 'Фрезия'],
      base: ['Дубовый мох', 'Амбра'],
    },
    image: perfumeImage('floruits'),
    heroImage: perfumeHeroImage('floruits-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Floruits-91027.html',
  },
  {
    id: 10,
    title: 'Limerence',
    slug: 'limerence',
    collection: 'The Origins Collection',
    year: 2025,
    gender: 'унисекс',
    family: 'фруктово-пряный древесный',
    perfumer: 'Gökhan Şimşek',
    rating: '4.44',
    votes: 9,
    accords: ['цитрус', 'фрукты', 'роза', 'свежий', 'мускус', 'пряный'],
    description: 'Цитрусово-фруктовое начало, пикантное сердце с розой и кожано-древесная база.',
    details: {
      ru: {
        intro: 'Limerence от Soleil de Grâce — аромат для женщин и мужчин выпущенный в 2025 году. Парфюмер — Gökhan Şimşek. Верхние ноты: бергамот яблоко груша лимон кокос и ананас; сердце: роза красный перец чили кардамон и элеми; база: кедр мускус амбра сандал бобы тонка пачули кожа и ветивер.',
        quote: 'Живая цитрусовая свежесть раскрывается пряным сердцем и теплой древесной глубиной.',
        paragraphs: [
          'Бергамот и лимон соединяются с хрустящей сладостью яблока груши и ананаса а сливочный кокос смягчает открытие.',
          'Красный перец чили элеми кардамон и роза создают горячее ароматическое и одновременно цветочное сердце.',
          'Сандал пачули и кедр встречаются с дымной кожей и ветивером. Амбра мускус и бобы тонка оставляют теплый глубокий и обволакивающий шлейф.',
        ],
      },
      en: {
        intro: 'Limerence by Soleil de Grâce is a fragrance for women and men launched in 2025. The perfumer is Gökhan Şimşek. Top notes are bergamot apple pear lemon coconut and pineapple; heart notes are rose red chilli pepper cardamom and elemi; base notes are cedarwood musk amber sandalwood tonka bean patchouli leather and vetiver.',
        quote: 'Lively citrus freshness unfolds into a spicy heart and warm woody depth.',
        paragraphs: [
          'Bergamot and lemon meet the crisp sweetness of apple pear and pineapple while creamy coconut softens the opening.',
          'Red chilli pepper elemi cardamom and rose create a fiery aromatic yet floral heart.',
          'Sandalwood patchouli and cedarwood meet smoky leather and vetiver. Amber musk and tonka bean leave a warm deep embracing trail.',
        ],
      },
    },
    notes: {
      top: ['Бергамот', 'Яблоко', 'Груша', 'Лимон', 'Кокос', 'Ананас'],
      middle: ['Роза', 'Красный перец чили', 'Кардамон', 'Элеми'],
      base: ['Кедр', 'Мускус', 'Амбра', 'Сандал', 'Бобы тонка', 'Пачули', 'Кожа', 'Ветивер'],
    },
    image: perfumeImage('limerence'),
    heroImage: perfumeHeroImage('limerence-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Limerence-110702.html',
  },
  {
    id: 11,
    title: 'Monarchy',
    slug: 'monarchy',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'тропический гурманский',
    perfumer: 'Özge Erdoğmuş Altınel',
    rating: '3.60',
    votes: 20,
    accords: ['ваниль', 'пудровый', 'сладкий', 'цитрус', 'кокос', 'тропический'],
    description: 'Солнечная цитрусовая верхушка, тропические фрукты и мягкая ванильно-амбровая база.',
    details: {
      ru: {
        intro: 'Monarchy от Soleil de Grâce — аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Özge Erdoğmuş Altınel. Верхние ноты: апельсин мандарин и лимон; ноты сердца: пудровые ноты кокос ананас персик клубника и яблоко; базовые ноты: ваниль бобы тонка амбра и мускус.',
        quote: 'Он касается чувств проникает под кожу и очаровывает душу с первого знакомства с Monarchy.',
        paragraphs: [
          'Яркие верхние ноты создают сочное и освежающее начало из лимона апельсина и мандарина.',
          'В сердце пудровые ноты смешиваются с яблоком персиком кокосом клубникой и ананасом добавляя тропическую сладость.',
          'Композицию завершает насыщенная гурманская база в которой переплетаются ваниль бобы тонка амбра и мускус.',
        ],
      },
      en: {
        intro: 'Monarchy by Soleil de Grâce is a fragrance for women and men launched in 2024. The perfumer is Özge Erdoğmuş Altınel. Top notes are orange mandarin orange and lemon; heart notes are powdery notes coconut pineapple peach strawberry and apple; base notes are vanilla tonka bean amber and musk.',
        quote: 'Touching your senses penetrating your skin and enchanting your soul from the moment you infuse the Monarchy.',
        paragraphs: [
          'The vibrant top notes create a zesty and refreshing opening with lemon orange and mandarin.',
          'The heart unfolds with powdery notes blended with apple peach coconut strawberry and pineapple adding a tropical and sweet allure.',
          'The composition concludes with an indulgent base where vanilla tonka bean amber and musk intertwine.',
        ],
      },
    },
    notes: {
      top: ['Апельсин', 'Мандарин', 'Лимон'],
      middle: ['Пудровые ноты', 'Кокос', 'Ананас', 'Персик', 'Клубника', 'Яблоко'],
      base: ['Ваниль', 'Бобы тонка', 'Амбра', 'Мускус'],
    },
    image: perfumeImage('monarchy'),
    heroImage: perfumeHeroImage('monarchy-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Monarchy-91028.html',
  },
  {
    id: 12,
    title: 'Nirvana',
    slug: 'nirvana',
    collection: 'The Origins Collection',
    year: 2025,
    gender: 'унисекс',
    family: 'цитрусово-морской древесный',
    perfumer: 'Özge Erdoğmuş Altınel',
    rating: '4.29',
    votes: 7,
    accords: ['цитрус', 'морской', 'пряный', 'мускус', 'ароматический', 'свежий'],
    description: 'Цитрусы и специи ведут к морскому древесному сердцу и мягкой амброво-мускусной базе.',
    details: {
      ru: {
        intro: 'Nirvana от Soleil de Grâce — аромат для женщин и мужчин выпущенный в 2025 году. Парфюмер — Özge Erdoğmuş Altınel. Верхние ноты: апельсин бергамот мандарин имбирь грейпфрут и гвоздика; сердце: морские ноты ландыш агаровое и кашемировое дерево сандал ирис и пачули; база: мускус и амбра.',
        quote: 'Каждое знакомство с Nirvana обещает новое путешествие и открытие.',
        paragraphs: [
          'Бергамот апельсин грейпфрут мандарин имбирь и гвоздика создают бодрое цитрусово-пряное начало.',
          'Морские ноты ландыш ирис сандал пачули кашемировое и агаровое дерево добавляют сердцу глубину и изысканность.',
          'Теплая амбра и мускус формируют мягкий насыщенный и роскошный финал.',
        ],
      },
      en: {
        intro: 'Nirvana by Soleil de Grâce is a fragrance for women and men launched in 2025. The perfumer is Özge Erdoğmuş Altınel. Top notes are orange bergamot mandarin ginger grapefruit and clove; heart notes are marine notes lily of the valley agarwood cashmere wood sandalwood iris and patchouli; base notes are musk and amber.',
        quote: 'Each wear of Nirvana promises a new journey of discovery.',
        paragraphs: [
          'Bergamot orange grapefruit mandarin ginger and clove create an invigorating citrus-spicy opening.',
          'Marine notes lily of the valley iris sandalwood patchouli cashmere wood and agarwood add depth and refinement to the heart.',
          'Warm amber and musk form a soft rich and luxurious finish.',
        ],
      },
    },
    notes: {
      top: ['Апельсин', 'Бергамот', 'Мандарин', 'Имбирь', 'Грейпфрут', 'Гвоздика'],
      middle: ['Морские ноты', 'Ландыш', 'Агаровое дерево', 'Кашемировое дерево', 'Сандал', 'Ирис', 'Пачули'],
      base: ['Мускус', 'Амбра'],
    },
    image: perfumeImage('nirvana'),
    heroImage: perfumeHeroImage('nirvana-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Nirvana-110703.html',
  },
  {
    id: 13,
    title: 'Patchouli Dream',
    slug: 'patchouli-dream',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'древесный гурманский',
    perfumer: 'Ayşe Sirkecioğlu',
    rating: '4.28',
    votes: 18,
    accords: ['сладкий', 'ваниль', 'теплые специи', 'ром', 'карамель', 'пачули'],
    description: 'Ром, ваниль и кокос переходят в крем-брюле, карамель, шафран и темное пачули.',
    details: {
      ru: {
        intro: 'Patchouli Dream от Soleil de Grâce — древесный аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Ayşe Sirkecioğlu. Верхние ноты: ром ваниль и кокос; ноты сердца: крем-брюле шафран карамель роза и жасмин; база: ваниль пачули бобы тонка уд кашемировое дерево амбра мускус лабданум и кожа.',
        quote: 'В сердце тропического рая аромат раскрывается как королевское удовольствие.',
        paragraphs: [
          'Благородный ром густая ваниль и согретый солнцем кокос задают атмосферу роскошного островного путешествия.',
          'Роза и жасмин соединяются с крем-брюле насыщенной карамелью и шафраном создавая чувственное гурманское сердце.',
          'Пачули и уд переплетаются с кашемировым деревом кожей лабданумом ванилью бобами тонка амброй и мускусом в богатой теплой базе.',
        ],
      },
      en: {
        intro: 'Patchouli Dream by Soleil de Grâce is a Woody fragrance for women and men launched in 2024. The perfumer is Ayşe Sirkecioğlu. Top notes are rum vanilla and coconut; heart notes are crème brûlée saffron caramel rose and jasmine; base notes are vanilla patchouli tonka bean oud cashmere wood amber musk labdanum and leather.',
        quote: 'In the heart of a tropical paradise the fragrance unfolds like a royal indulgence.',
        paragraphs: [
          'Fine rum opulent vanilla and sun-warmed coconut set the mood of a luxurious island escape.',
          'Rose and jasmine meet crème brûlée rich caramel and saffron in a sensual gourmand heart.',
          'Patchouli and oud mingle with cashmere wood leather labdanum vanilla tonka bean amber and musk in a rich warm base.',
        ],
      },
    },
    notes: {
      top: ['Ром', 'Ваниль', 'Кокос'],
      middle: ['Крем-брюле', 'Шафран', 'Карамель', 'Роза', 'Жасмин'],
      base: ['Ваниль', 'Пачули', 'Бобы тонка', 'Агаровое дерево', 'Кашемировое дерево', 'Амбра', 'Мускус', 'Лабданум', 'Кожа'],
    },
    image: perfumeImage('patchouli-dream'),
    heroImage: perfumeHeroImage('patchouli-dream-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Patchouli-Dream-91029.html',
  },
  {
    id: 14,
    title: 'Route 66',
    slug: 'route-66',
    collection: 'The Origins Collection',
    year: 2024,
    gender: 'унисекс',
    family: 'ароматически-пряный',
    perfumer: 'Özge Erdoğmuş Altınel',
    rating: '4.42',
    votes: 26,
    accords: ['теплые специи', 'древесный', 'пачули', 'амбра', 'пудровый', 'бензин'],
    description: 'Сухие специи, корица и бергамот с индустриальной гранью бензина, пачули и сандала.',
    details: {
      ru: {
        intro: 'Route 66 от Soleil de Grâce — ароматический пряный аромат для женщин и мужчин выпущенный в 2024 году. Парфюмер — Özge Erdoğmuş Altınel. Верхние ноты: пряные ноты корица и бергамот; ноты сердца: пачули бензиновый аккорд и сандал; базовые ноты: амбра белый мускус бобы тонка и ваниль.',
        quote: 'Символ притягательной и загадочной ночи наполненной легким туманом.',
        paragraphs: [
          'Специи корица и бергамот воспламеняют чувства и создают живое яркое начало.',
          'Землистые пачули и мягкий сандал встречаются с неожиданным бензиновым аккордом который придает композиции туманное ночное настроение.',
          'Ваниль бобы тонка белый мускус и амбра завершают аромат теплой базой с долгим выразительным шлейфом.',
        ],
      },
      en: {
        intro: 'Route 66 by Soleil de Grâce is an Aromatic Spicy fragrance for women and men launched in 2024. The perfumer is Özge Erdoğmuş Altınel. Top notes are spicy notes cinnamon and bergamot; heart notes are patchouli a gasoline accord and sandalwood; base notes are amber white musk tonka bean and vanilla.',
        quote: 'A symbol of a captivating enigmatic night filled with haze.',
        paragraphs: [
          'Spices cinnamon and bergamot ignite the senses and create a lively bright opening.',
          'Earthy patchouli and smooth sandalwood meet an unexpected gasoline accord that gives the composition its hazy nocturnal mood.',
          'Vanilla tonka bean white musk and amber close the fragrance with a warm base and a lasting expressive trail.',
        ],
      },
    },
    notes: {
      top: ['Пряные ноты', 'Корица', 'Бергамот'],
      middle: ['Пачули', 'Бензиновый аккорд', 'Сандал'],
      base: ['Амбра', 'Белый мускус', 'Бобы тонка', 'Ваниль'],
    },
    image: perfumeImage('route-66'),
    heroImage: perfumeHeroImage('route-66-hero-scene'),
    source: 'https://www.fragrantica.com/perfume/Soleil-de-Grace/Route-66-91031.html',
  },
];

export const gallery = [
  perfumeImage('addictoud'),
  perfumeImage('l-ambre-vanille'),
  perfumeImage('lux-us'),
  perfumeImage('floruits'),
  perfumeImage('cherish-oud'),
  perfumeImage('patchouli-dream'),
];

export const featuredAccords = [
  {
    title: "L'Ambre Vanillé",
    text: 'Ваниль, тонка, амбра, пралине и карамель формируют теплую гурманскую сторону бренда.',
    image: perfumeImage('l-ambre-vanille'),
  },
  {
    title: 'Atlantis',
    text: 'Atlantis, Nirvana и Lux\'Us показывают соленые, акватические и минеральные акценты.',
    image: perfumeImage('atlantis'),
  },
  {
    title: 'Addictoud',
    text: 'Addictoud, Cherish Oud и Lux\'Us используют уд, лабданум, пачули и кожу для более плотного шлейфа.',
    image: perfumeImage('addictoud'),
  },
  {
    title: 'Floruits',
    text: 'Floruits, Monarchy и Limerence раскрывают цитрусы, тропические фрукты, розу и белые цветы.',
    image: perfumeImage('floruits'),
  },
];
