export const products = [
  {
    id: 1,
    name: {
      en: 'Wok Range',
      id: 'Kompor Wajan (Wok Range)'
    },
    slug: 'wok-range',
    category: {
      en: 'Traditional Stoves',
      id: 'Kompor Tradisional'
    },
    description: {
      en: 'High-performance wok range designed for Asian cuisine. Built with heavy-duty stainless steel and powerful burners for intense heat cooking.',
      id: 'Kompor wajan berkinerja tinggi yang dirancang untuk masakan Asia. Dibangun dengan baja tahan karat (stainless steel) tugas berat dan pembakar bertenaga untuk memasak dengan panas tinggi.'
    },
    shortDescription: {
      en: 'Professional wok range for high-heat Asian cooking.',
      id: 'Kompor wajan profesional untuk masakan Asia dengan panas tinggi.'
    },
    specs: {
      material: 'Stainless Steel 304',
      burners: { en: '2-4 Burners', id: '2-4 Tungku' },
      btuOutput: '80,000 - 160,000 BTU',
      fuelType: { en: 'LPG / Natural Gas', id: 'LPG / Gas Alam' },
      dimensions: '1200 x 800 x 850 mm',
    },
    image: '/images/products/wok-range.png',
    featured: true,
  },
  {
    id: 2,
    name: {
      en: 'Kwali Range',
      id: 'Kompor Kwali'
    },
    slug: 'kwali-range',
    category: {
      en: 'Traditional Stoves',
      id: 'Kompor Tradisional'
    },
    description: {
      en: 'Traditional kwali range perfect for Indonesian and Chinese cooking. Features adjustable flame control and robust construction for daily commercial use.',
      id: 'Kompor kwali tradisional yang sempurna untuk masakan Indonesia dan Tionghoa. Memiliki fitur pengatur api yang dapat disesuaikan dan konstruksi tangguh untuk penggunaan komersial sehari-hari.'
    },
    shortDescription: {
      en: 'Traditional kwali range for commercial kitchens.',
      id: 'Kompor kwali tradisional untuk dapur komersial.'
    },
    specs: {
      material: 'Stainless Steel 304',
      burners: { en: '1-3 Burners', id: '1-3 Tungku' },
      btuOutput: '60,000 - 120,000 BTU',
      fuelType: { en: 'LPG / Natural Gas', id: 'LPG / Gas Alam' },
      dimensions: '900 x 800 x 850 mm',
    },
    image: '/images/products/kwali-range.png',
    featured: true,
  },
  {
    id: 3,
    name: {
      en: 'Chinese Cooking Range',
      id: 'Kompor Masakan Tionghoa'
    },
    slug: 'chinese-cooking-range',
    category: {
      en: 'Traditional Stoves',
      id: 'Kompor Tradisional'
    },
    description: {
      en: 'Specialized Chinese cooking range with waterfall spout and high-powered burners. Ideal for stir-frying, deep-frying, and steaming operations.',
      id: 'Kompor khusus masakan Tionghoa dengan pancuran air terjun dan pembakar berdaya tinggi. Ideal untuk menumis, menggoreng kering, dan mengukus.'
    },
    shortDescription: {
      en: 'Specialized range for authentic Chinese cooking.',
      id: 'Kompor khusus untuk masakan Tionghoa otentik.'
    },
    specs: {
      material: 'Stainless Steel 304',
      burners: { en: '1-6 Burners', id: '1-6 Tungku' },
      btuOutput: '100,000 - 200,000 BTU',
      fuelType: { en: 'LPG / Natural Gas', id: 'LPG / Gas Alam' },
      dimensions: '1800 x 900 x 850 mm',
    },
    image: '/images/products/chinese-cooking-range.png',
  },
  {
    id: 4,
    name: {
      en: 'Pizza Oven',
      id: 'Oven Pizza'
    },
    slug: 'pizza-oven',
    category: {
      en: 'Regional Ovens',
      id: 'Oven Regional'
    },
    description: {
      en: 'Authentic pizza oven with stone hearth and dome construction. Achieves temperatures up to 500°C for perfect Neapolitan-style pizzas.',
      id: 'Oven pizza otentik dengan tungku batu dan konstruksi kubah. Mencapai suhu hingga 500°C untuk pizza bergaya Neapolitan yang sempurna.'
    },
    shortDescription: {
      en: 'Stone hearth pizza oven for authentic results.',
      id: 'Oven pizza tungku batu untuk hasil otentik.'
    },
    specs: {
      material: { en: 'Stainless Steel + Refractory Brick', id: 'Baja Tahan Karat + Bata Tahan Api' },
      capacity: { en: '4-12 Pizzas', id: '4-12 Pizza' },
      maxTemperature: '500°C',
      fuelType: { en: 'Gas / Wood', id: 'Gas / Kayu Bakar' },
      dimensions: '1500 x 1200 x 1800 mm',
    },
    image: '/images/products/pizza-oven.png',
    featured: true,
  },
  {
    id: 5,
    name: {
      en: 'Tandoor Oven',
      id: 'Oven Tandoor'
    },
    slug: 'tandoor-oven',
    category: {
      en: 'Regional Ovens',
      id: 'Oven Regional'
    },
    description: {
      en: 'Traditional tandoor oven for Indian and Middle Eastern cuisine. Clay-lined interior for authentic naan bread and tandoori dishes.',
      id: 'Oven tandoor tradisional untuk masakan India dan Timur Tengah. Bagian dalam berlapis tanah liat untuk roti naan dan hidangan tandoori yang otentik.'
    },
    shortDescription: {
      en: 'Clay-lined tandoor for authentic Indian cuisine.',
      id: 'Tandoor berlapis tanah liat untuk masakan India otentik.'
    },
    specs: {
      material: { en: 'Stainless Steel + Clay Lining', id: 'Baja Tahan Karat + Lapisan Tanah Liat' },
      maxTemperature: '480°C',
      fuelType: { en: 'Gas / Charcoal', id: 'Gas / Arang' },
      dimensions: '800 x 800 x 1100 mm',
    },
    image: '/images/products/tandoor-oven.png',
  },
  {
    id: 6,
    name: {
      en: 'Brick Oven',
      id: 'Oven Bata'
    },
    slug: 'brick-oven',
    category: {
      en: 'Regional Ovens',
      id: 'Oven Regional'
    },
    description: {
      en: 'Custom-built brick oven with excellent heat retention. Perfect for artisan bread, pizza, and roast dishes with authentic wood-fired flavor.',
      id: 'Oven bata rancangan khusus dengan retensi panas yang sangat baik. Sempurna untuk roti artisan, pizza, dan hidangan panggang dengan rasa pembakaran kayu otentik.'
    },
    shortDescription: {
      en: 'Custom brick oven for artisan baking.',
      id: 'Oven bata kustom untuk memanggang artisan.'
    },
    specs: {
      material: { en: 'Refractory Brick + Steel Frame', id: 'Bata Tahan Api + Rangka Baja' },
      maxTemperature: '450°C',
      fuelType: { en: 'Wood / Gas', id: 'Kayu Bakar / Gas' },
      dimensions: { en: 'Custom', id: 'Sesuai Pesanan' },
    },
    image: '/images/products/brick-oven.png',
  },
  {
    id: 7,
    name: {
      en: 'Convection Oven',
      id: 'Oven Konveksi'
    },
    slug: 'convection-oven',
    category: {
      en: 'Modern Ovens',
      id: 'Oven Modern'
    },
    description: {
      en: 'Professional convection oven with precise temperature control and even heat distribution. Ideal for baking, roasting, and reheating in commercial kitchens.',
      id: 'Oven konveksi profesional dengan kontrol suhu presisi dan distribusi panas merata. Ideal untuk memanggang roti, daging, dan memanaskan makanan di dapur komersial.'
    },
    shortDescription: {
      en: 'Precision convection oven for commercial use.',
      id: 'Oven konveksi presisi untuk penggunaan komersial.'
    },
    specs: {
      material: 'Stainless Steel 304',
      capacity: { en: '5-10 Trays', id: '5-10 Nampan' },
      temperatureRange: '50°C - 300°C',
      power: { en: 'Electric / Gas', id: 'Listrik / Gas' },
      dimensions: '800 x 700 x 1500 mm',
    },
    image: '/images/products/convection-oven.png',
    featured: true,
  },
  {
    id: 8,
    name: {
      en: 'Deck Oven',
      id: 'Oven Dek (Deck Oven)'
    },
    slug: 'deck-oven',
    category: {
      en: 'Modern Ovens',
      id: 'Oven Modern'
    },
    description: {
      en: 'Multi-deck oven for bakeries and pastry shops. Stone deck provides superior heat transfer for crispy bread crusts and perfectly baked pastries.',
      id: 'Oven multi-dek untuk toko roti dan kue. Dek batu memberikan perpindahan panas superior untuk kerak roti yang renyah dan kue yang dipanggang dengan sempurna.'
    },
    shortDescription: {
      en: 'Multi-deck oven for bakeries and pastry shops.',
      id: 'Oven multi-dek untuk toko roti dan kue.'
    },
    specs: {
      material: 'Stainless Steel 304',
      decks: { en: '2-4 Decks', id: '2-4 Dek' },
      temperatureRange: '50°C - 350°C',
      power: { en: 'Electric / Gas', id: 'Listrik / Gas' },
      dimensions: '1200 x 900 x 1600 mm',
    },
    image: '/images/products/deck-oven.png',
  },
  {
    id: 9,
    name: {
      en: 'Combi Oven',
      id: 'Oven Combi'
    },
    slug: 'combi-oven',
    category: {
      en: 'Modern Ovens',
      id: 'Oven Modern'
    },
    description: {
      en: 'Advanced combi oven combining steam and convection cooking. Programmable recipes, automatic cleaning, and versatile cooking modes for maximum kitchen efficiency.',
      id: 'Oven combi tingkat lanjut yang menggabungkan metode memasak uap dan konveksi. Resep yang dapat diprogram, pembersihan otomatis, dan mode memasak serbaguna untuk efisiensi dapur yang maksimal.'
    },
    shortDescription: {
      en: 'Versatile combi oven with steam and convection.',
      id: 'Oven combi serbaguna dengan uap dan konveksi.'
    },
    specs: {
      material: 'Stainless Steel 304',
      capacity: { en: '6-20 GN Trays', id: '6-20 Nampan GN' },
      modes: { en: 'Steam / Convection / Combi', id: 'Uap / Konveksi / Combi' },
      power: { en: 'Electric / Gas', id: 'Listrik / Gas' },
      dimensions: '900 x 800 x 1800 mm',
    },
    image: '/images/products/combi-oven.png',
    featured: true,
  },
  {
    id: 10,
    name: {
      en: 'Commercial Griddle',
      id: 'Wajan Datar Komersial (Griddle)'
    },
    slug: 'commercial-griddle',
    category: {
      en: 'Kitchen Equipment',
      id: 'Perlengkapan Dapur'
    },
    description: {
      en: 'Heavy-duty flat-top griddle for high-volume cooking. Uniform heat distribution and easy-to-clean surface for grilling, searing, and breakfast preparation.',
      id: 'Wajan datar tugas berat untuk memasak dalam volume tinggi. Distribusi panas seragam dan permukaan yang mudah dibersihkan untuk memanggang daging dan persiapan sarapan.'
    },
    shortDescription: {
      en: 'Heavy-duty griddle for high-volume cooking.',
      id: 'Wajan datar tugas berat untuk memasak volume tinggi.'
    },
    specs: {
      material: { en: 'Stainless Steel + Chrome Surface', id: 'Baja Tahan Karat + Permukaan Krom' },
      surfaceArea: '600 x 400 mm - 1200 x 600 mm',
      power: { en: 'Gas / Electric', id: 'Gas / Listrik' },
    },
    image: '/images/products/gas-griddle.png',
  },
  {
    id: 11,
    name: {
      en: 'Deep Fryer',
      id: 'Penggorengan (Deep Fryer)'
    },
    slug: 'deep-fryer',
    category: {
      en: 'Kitchen Equipment',
      id: 'Perlengkapan Dapur'
    },
    description: {
      en: 'Commercial deep fryer with precise temperature control and safety features. Available in single and double tank configurations.',
      id: 'Penggorengan komersial dengan kontrol suhu presisi dan fitur keselamatan. Tersedia dalam konfigurasi tangki tunggal dan ganda.'
    },
    shortDescription: {
      en: 'Commercial deep fryer with precise control.',
      id: 'Penggorengan komersial dengan presisi tinggi.'
    },
    specs: {
      material: 'Stainless Steel 304',
      capacity: { en: '8-25 Liters', id: '8-25 Liter' },
      power: { en: 'Gas / Electric', id: 'Gas / Listrik' },
    },
    image: '/images/products/gas-deep-fryer.png',
  },
  {
    id: 12,
    name: {
      en: 'Bain Marie',
      id: 'Pemanas Makanan (Bain Marie)'
    },
    slug: 'bain-marie',
    category: {
      en: 'Kitchen Equipment',
      id: 'Perlengkapan Dapur'
    },
    description: {
      en: 'Stainless steel bain marie for keeping food warm and at safe serving temperatures. Multiple pan configurations available.',
      id: 'Pemanas makanan baja tahan karat untuk menjaga makanan tetap hangat dan pada suhu penyajian yang aman. Tersedia berbagai konfigurasi nampan.'
    },
    shortDescription: {
      en: 'Food warmer for buffet and serving stations.',
      id: 'Penghangat makanan untuk prasmanan.'
    },
    specs: {
      material: 'Stainless Steel 304',
      pans: { en: '3-6 GN Pans', id: '3-6 Nampan GN' },
      power: { en: 'Electric', id: 'Listrik' },
    },
    image: '/images/products/hotel-bain-marie.png',
  },
  {
    id: 13,
    name: {
      en: 'Custom Coffee Bar Counter',
      id: 'Meja Bar Kopi Kustom'
    },
    slug: 'custom-coffee-bar-counter',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Premium custom-built stainless steel coffee bar counter featuring built-in knock boxes, under-counter storage, sink stations, and dedicated space for espresso machines. Tailored specifically to your cafe layout.',
      id: 'Meja bar kopi baja tahan karat kustom premium yang dilengkapi kotak ampas kopi bawaan (knock box), penyimpanan bawah meja, stasiun cuci piring, dan ruang khusus untuk mesin espresso. Disusun khusus untuk tata letak kafe Anda.'
    },
    shortDescription: {
      en: 'Premium custom stainless steel coffee bar station.',
      id: 'Stasiun meja bar kopi baja tahan karat premium kustom.'
    },
    specs: {
      material: 'Stainless Steel 304 / 316',
      customizable: { en: 'Fully Customizable Layout', id: 'Tata Letak Bebas Disesuaikan' },
      features: { en: 'Sinks, Knock Boxes, Ice Bins', id: 'Wastafel, Knock Box, Tempat Es' },
      dimensions: { en: 'Customizable per Cafe Space', id: 'Menyesuaikan Ruang Kafe' },
    },
    image: '/images/products/coffee-bar-counter.png',
    featured: true,
  },
  {
    id: 14,
    name: {
      en: 'Pastry Display Warmer',
      id: 'Etalase Pemanas Kue (Pastry Warmer)'
    },
    slug: 'pastry-display-warmer',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Commercial curved-glass pastry display warmer with an elegant stainless steel finish. Perfect for bakeries and coffee shops offering warm croissants, pies, and savory treats with bright LED illumination.',
      id: 'Etalase pemanas kue kaca melengkung komersial dengan lapisan luar baja tahan karat yang elegan. Sempurna untuk toko roti dan kedai kopi yang menawarkan croissant hangat, pai, dan camilan gurih dengan pencahayaan LED yang cerah.'
    },
    shortDescription: {
      en: 'Elegant curved-glass pastry and food display warmer.',
      id: 'Etalase pemanas pajangan makanan dan kue kaca melengkung yang elegan.'
    },
    specs: {
      material: { en: 'Stainless Steel + Tempered Glass', id: 'Baja Tahan Karat + Kaca Tempered' },
      shelves: { en: '2-4 Adjustable Shelves', id: '2-4 Rak yang dapat disesuaikan' },
      temperatureRange: '30°C - 85°C',
      power: { en: 'Electric', id: 'Listrik' },
    },
    image: '/images/products/pastry-display-warmer.png',
  },
  {
    id: 15,
    name: {
      en: 'Automatic Water Boiler',
      id: 'Mesin Pemanas Air Otomatis'
    },
    slug: 'automatic-water-boiler',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Heavy-duty automatic hot water dispenser/boiler built for continuous commercial use in busy cafes and tea houses. Precise digital temperature control ensures perfect extractions every time.',
      id: 'Mesin dispenser/pemanas air panas otomatis tugas berat yang dibuat untuk penggunaan komersial tersu-menerus di kafe dan kedai teh yang sibuk. Kontrol suhu digital presisi memastikan ekstraksi yang sempurna setiap saat.'
    },
    shortDescription: {
      en: 'Heavy-duty automatic hot water dispenser with digital control.',
      id: 'Mesin dispenser air panas otomatis tugas berat dengan kontrol digital.'
    },
    specs: {
      material: 'Stainless Steel 304',
      capacity: { en: '10-30 Liters', id: '10-30 Liter' },
      temperatureControl: { en: 'Digital Precision Thermostat', id: 'Termostat Digital Presisi' },
      power: { en: 'Electric', id: 'Listrik' },
    },
    image: '/images/products/automatic-water-boiler.png',
  },
  {
    id: 16,
    name: {
      en: 'Stainless Pre-rinse Sink Table',
      id: 'Meja Sink Cuci Piring Stainless'
    },
    slug: 'stainless-sink-table',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Durable multi-compartment stainless steel sink table with a tall splashback. Designed for heavy dishwashing traffic in commercial food prep areas and cafe back-houses.',
      id: 'Meja bak cuci piring (sink) baja tahan karat multi-kompartemen yang tahan lama dengan penyekat percikan air yang tinggi. Dirancang untuk arus pencucian piring yang berat di area persiapan makanan komersial dan dapur belakang kafe.'
    },
    shortDescription: {
      en: 'Durable multi-compartment sink table for busy kitchens.',
      id: 'Meja cuci multi-kompartemen tahan lama untuk dapur sibuk.'
    },
    specs: {
      material: 'Heavy Gauge Stainless Steel 304',
      bowls: { en: '1-3 Compartments', id: '1-3 Kompartemen Bak' },
      features: { en: 'High Backsplash, Adjustable Bullet Feet', id: 'Pelindung Percikan Tinggi, Kaki-kaki yang Dapat Disetel' },
      dimensions: { en: 'Custom Sizes Available', id: 'Tersedia Ukuran Kustom' }
    },
    image: '/images/products/stainless-sink-table.png',
  }
];

export const productCategories = [
  'All',
  'Traditional Stoves',
  'Regional Ovens',
  'Modern Ovens',
  'Kitchen Equipment',
  'Coffee Shop Equipment',
];
