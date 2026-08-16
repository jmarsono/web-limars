export const products = [
  {
    id: 6,
    name: {
      en: 'Traditional Pizza Oven',
      id: 'Oven Pizza Tradisional'
    },
    slug: 'brick-oven',
    category: {
      en: 'Regional Ovens',
      id: 'Oven Regional'
    },
    description: {
      en: 'Authentic custom-built brick & masonry dome pizza oven engineered for maximum heat retention (>500°C) and true wood-fired Neapolitan flavor. Handcrafted in Indonesia by Limars Teknik.',
      id: 'Oven pizza kubah bata refraktori otentik yang dirancang khusus oleh Limars Teknik untuk retensi panas maksimal (>500°C) dan aroma kayu bakar khas Neapolitan. Dibuat secara buatan tangan (handcrafted) di Indonesia dengan material refraktori berkualitas tinggi dan rangka kokoh.'
    },
    shortDescription: {
      en: 'Handcrafted brick dome pizza oven for authentic wood-fired baking.',
      id: 'Oven kubah bata tradisional untuk hasil panggang kayu bakar otentik.'
    },
    specs: {
      material: { en: 'Refractory Brick + Steel Frame', id: 'Bata Tahan Api + Rangka Baja' },
      maxTemperature: '500°C+',
      fuelType: { en: 'Wood / Gas / Hybrid', id: 'Kayu Bakar / Gas / Kombinasi' },
      dimensions: { en: 'Custom / Project-Based', id: 'Sesuai Pesanan Resto' },
    },
    image: '/images/products/brick-oven.webp',
    featured: true,
  },
  {
    id: 4,
    name: {
      en: 'Portable Pizza Oven',
      id: 'Oven Pizza Portable'
    },
    slug: 'pizza-oven',
    category: {
      en: 'Regional Ovens',
      id: 'Oven Regional'
    },
    description: {
      en: 'Compact and high-performance portable gas pizza oven designed for SMEs, pop-up kitchens, and catering setups. Reaches 450°C quickly for fast artisan pizza baking.',
      id: 'Oven pizza portable berbasis gas bertenaga tinggi yang dirancang khusus untuk UMKM, katering, dan restoran modern. Mencapai suhu 450°C dengan cepat dan efisien, memberikan hasil panggangan pizza berkualitas tinggi yang dapat dipindahkan dengan mudah.'
    },
    shortDescription: {
      en: 'Portable gas pizza oven for SMEs and mobile catering.',
      id: 'Oven pizza portable bertenaga gas untuk UMKM & resto.'
    },
    specs: {
      material: { en: 'Stainless Steel + Cordierite Stone', id: 'Baja Tahan Karat + Batu Cordierite' },
      capacity: { en: '1-2 Pizzas', id: '1-2 Pizza' },
      maxTemperature: '450°C',
      fuelType: { en: 'LPG Gas', id: 'Gas LPG' },
      dimensions: '650 x 550 x 400 mm',
    },
    image: '/images/products/pizza-oven.webp',
    featured: true,
  },
  {
    id: 1,
    name: {
      en: 'Wok Range',
      id: 'Wok Range Stainless Jakarta'
    },
    slug: 'wok-range',
    category: {
      en: 'Traditional Stoves',
      id: 'Kompor Tradisional'
    },
    description: {
      en: 'High-performance wok range designed for Asian cuisine. Built with heavy-duty stainless steel and powerful burners for intense heat cooking.',
      id: 'Kami menawarkan wok range stainless Jakarta berkinerja tinggi yang dirancang khusus untuk kebutuhan masakan Asia. Sebagai penunjang utama dapur profesional, unit wok range stainless Jakarta kami dibuat menggunakan baja tahan karat (stainless steel) tugas berat yang kokoh, higienis, dan mudah dibersihkan. Dilengkapi dengan pembakar (burner) bertenaga besar untuk teknik memasak dengan panas tinggi secara cepat, produk wok range stainless Jakarta ini adalah pilihan terbaik bagi restoran, katering, dan hotel yang mengutamakan kualitas dan efisiensi kerja.'
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
    image: '/images/products/wok-range.webp',
    featured: true,
  },
  {
    id: 2,
    name: {
      en: 'Kwali Range',
      id: 'Kompor Kwali Dapur Restoran'
    },
    slug: 'kwali-range',
    category: {
      en: 'Traditional Stoves',
      id: 'Kompor Tradisional'
    },
    description: {
      en: 'Traditional kwali range perfect for Indonesian and Chinese cooking. Features adjustable flame control and robust construction for daily commercial use.',
      id: 'Kami memproduksi kompor kwali tradisional yang sempurna untuk masakan Indonesia dan Tionghoa. Unit kompor kwali ini dirancang dengan fitur pengatur api yang dapat disesuaikan serta konstruksi tangguh dari baja tahan karat. Sangat ideal untuk penggunaan kompor kwali secara intensif di dapur komersial sehari-hari.'
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
    image: '/images/products/kwali-range.webp',
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
      id: 'Kami menawarkan kompor masakan Tionghoa khusus yang dilengkapi dengan pancuran air terjun dan pembakar berdaya tinggi. Didesain secara ergonomis, kompor masakan Tionghoa ini ideal untuk menumis cepat (stir-fry), menggoreng kering, serta mengukus makanan. Dapatkan unit kompor masakan Tionghoa berkualitas untuk meningkatkan kecepatan penyajian makanan di restoran Anda.'
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
    image: '/images/products/chinese-cooking-range.webp',
  },
  {
    id: 5,
    name: {
      en: 'Tandoor Oven',
      id: 'Oven Tandoor Harga Jakarta'
    },
    slug: 'tandoor-oven',
    category: {
      en: 'Regional Ovens',
      id: 'Oven Regional'
    },
    description: {
      en: 'Traditional tandoor oven for Indian and Middle Eastern cuisine. Clay-lined interior for authentic naan bread and tandoori dishes.',
      id: 'Cari oven tandoor harga Jakarta yang bersahabat namun memiliki kualitas pengerjaan premium? Kami memproduksi oven tandoor tradisional terbaik untuk masakan India, roti naan, dan hidangan tandoori otentik. Dengan oven tandoor harga Jakarta yang terjangkau, unit kami dilapisi tanah liat khusus di bagian dalam untuk retensi panas optimal dan rasa masakan yang khas. Dapatkan penawaran oven tandoor harga Jakarta terbaik langsung dari produsen spesialis peralatan dapur komersial.'
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
    image: '/images/products/tandoor-oven.webp',
  },
  {
    id: 7,
    name: {
      en: 'Convection Oven',
      id: 'Oven Konveksi - Produsen Oven Komersial Indonesia'
    },
    slug: 'convection-oven',
    category: {
      en: 'Modern Ovens',
      id: 'Oven Modern'
    },
    description: {
      en: 'Professional convection oven with precise temperature control and even heat distribution. Ideal for baking, roasting, and reheating in commercial kitchens.',
      id: 'Sebagai produsen oven komersial Indonesia terpercaya, kami menghadirkan oven konveksi profesional dengan sistem kontrol suhu presisi serta distribusi panas merata. Kami bangga menjadi produsen oven komersial Indonesia yang fokus pada durabilitas dan efisiensi energi untuk menunjang bisnis bakery, restoran, serta hotel. Jika Anda membutuhkan pasokan dari produsen oven komersial Indonesia yang memberikan garansi resmi dan dukungan teknis penuh, oven konveksi kami adalah solusi yang tepat.'
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
    image: '/images/products/convection-oven.webp',
    featured: true,
  },
  {
    id: 8,
    name: {
      en: 'Deck Oven',
      id: 'Oven Dek Komersial'
    },
    slug: 'deck-oven',
    category: {
      en: 'Modern Ovens',
      id: 'Oven Modern'
    },
    description: {
      en: 'Multi-deck oven for bakeries and pastry shops. Stone deck provides superior heat transfer for crispy bread crusts and perfectly baked pastries.',
      id: 'Kami menyediakan oven dek komersial (deck oven) berkapasitas besar yang ideal untuk toko roti, kue, dan pastry profesional. Dilengkapi dengan dek batu berkualitas tinggi, oven dek komersial ini memberikan perpindahan panas superior untuk menghasilkan kerak roti yang renyah dan kue yang mengembang sempurna. Pilihlah oven dek komersial kami untuk hasil pemanggangan yang konsisten.'
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
    image: '/images/products/deck-oven.webp',
  },
  {
    id: 9,
    name: {
      en: 'Combi Oven',
      id: 'Oven Combi Stainless'
    },
    slug: 'combi-oven',
    category: {
      en: 'Modern Ovens',
      id: 'Oven Modern'
    },
    description: {
      en: 'Advanced combi oven combining steam and convection cooking. Programmable recipes, automatic cleaning, and versatile cooking modes for maximum kitchen efficiency.',
      id: 'Kami menghadirkan oven combi stainless tingkat lanjut yang menggabungkan metode memasak uap (steam) dan konveksi dalam satu alat. Dengan oven combi stainless ini, Anda dapat memprogram berbagai resep masakan secara praktis dan melakukan pembersihan otomatis secara efisien. Didesain untuk fleksibilitas maksimal, oven combi stainless ini sangat menunjang produktivitas dapur hotel dan restoran modern.'
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
    image: '/images/products/combi-oven.webp',
    featured: true,
  },
  {
    id: 10,
    name: {
      en: 'Commercial Griddle',
      id: 'Wajan Datar Griddle Komersial'
    },
    slug: 'commercial-griddle',
    category: {
      en: 'Kitchen Equipment',
      id: 'Perlengkapan Dapur'
    },
    description: {
      en: 'Heavy-duty flat-top griddle for high-volume cooking. Uniform heat distribution and easy-to-clean surface for grilling, searing, and breakfast preparation.',
      id: 'Kami memproduksi wajan datar griddle komersial tugas berat (heavy-duty flat-top griddle) yang dirancang untuk memasak makanan dalam volume besar secara cepat. Menyediakan distribusi panas yang seragam dan permukaan pelat yang tebal, wajan datar griddle komersial ini sangat mudah dibersihkan setelah digunakan untuk memanggang daging atau menyiapkan menu sarapan. Keandalan wajan datar griddle komersial kami menjadikannya investasi jangka panjang yang berharga.'
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
    image: '/images/products/gas-griddle.webp',
  },
  {
    id: 11,
    name: {
      en: 'Deep Fryer',
      id: 'Deep Fryer Penggorengan Komersial'
    },
    slug: 'deep-fryer',
    category: {
      en: 'Kitchen Equipment',
      id: 'Perlengkapan Dapur'
    },
    description: {
      en: 'Commercial deep fryer with precise temperature control and safety features. Available in single and double tank configurations.',
      id: 'Kami memproduksi deep fryer penggorengan komersial berkapasitas besar yang dilengkapi dengan kontrol suhu presisi serta fitur katup pengaman. Pilihan deep fryer penggorengan komersial ini tersedia dalam konfigurasi tangki tunggal maupun ganda untuk disesuaikan dengan kapasitas produksi dapur Anda. Desain tangki deep fryer penggorengan komersial kami meminimalkan pemborosan minyak dan menjaga hasil gorengan tetap renyah.'
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
    image: '/images/products/gas-deep-fryer.webp',
  },
  {
    id: 12,
    name: {
      en: 'Bain Marie',
      id: 'Bain Marie Pemanas Makanan'
    },
    slug: 'bain-marie',
    category: {
      en: 'Kitchen Equipment',
      id: 'Perlengkapan Dapur'
    },
    description: {
      en: 'Stainless steel bain marie for keeping food warm and at safe serving temperatures. Multiple pan configurations available.',
      id: 'Kami menawarkan unit bain marie pemanas makanan berbahan baja tahan karat untuk menjaga masakan tetap hangat pada suhu penyajian yang aman. Sangat cocok untuk restoran prasmanan dan katering, unit bain marie pemanas makanan ini tersedia dalam berbagai pilihan konfigurasi wadah (pan) sesuai kebutuhan hidangan. Konstruksi wadah air pada bain marie pemanas makanan kami memastikan pemanasan yang stabil dan higienis.'
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
    image: '/images/products/hotel-bain-marie.webp',
  },
  {
    id: 13,
    name: {
      en: 'Custom Coffee Bar Counter',
      id: 'Meja Bar Kopi Stainless Kustom'
    },
    slug: 'custom-coffee-bar-counter',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Premium custom-built stainless steel coffee bar counter featuring built-in knock boxes, under-counter storage, sink stations, and dedicated space for espresso machines. Tailored specifically to your cafe layout.',
      id: 'Kami memproduksi meja bar kopi stainless kustom premium yang dirancang khusus untuk kenyamanan alur kerja barista di kafe Anda. Dibuat dengan material berkualitas tinggi, meja bar kopi stainless kustom ini mengintegrasikan knock box ampas kopi, tempat es, sink wastafel, dan kompartemen penyimpanan bawah meja secara rapi. Dapatkan unit meja bar kopi stainless kustom yang disesuaikan secara presisi dengan layout dan ukuran kedai kopi Anda.'
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
    image: '/images/products/coffee-bar-counter.webp',
    featured: true,
  },
  {
    id: 14,
    name: {
      en: 'Pastry Display Warmer',
      id: 'Etalase Pemanas Kue Pastry'
    },
    slug: 'pastry-display-warmer',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Commercial curved-glass pastry display warmer with an elegant stainless steel finish. Perfect for bakeries and coffee shops offering warm croissants, pies, and savory treats with bright LED illumination.',
      id: 'Kami menyediakan etalase pemanas kue pastry dengan kaca melengkung (curved glass) komersial yang elegan dan pencahayaan LED yang terang. Sempurna untuk kafe dan bakery, etalase pemanas kue pastry menjaga kehangatan serta kelembutan croissant, pie, dan aneka camilan gurih lainnya pada suhu ideal. Tampilan luar dari bahan baja tahan karat membuat etalase pemanas kue pastry ini terlihat premium dan menarik perhatian pelanggan.'
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
    image: '/images/products/pastry-display-warmer.webp',
  },
  {
    id: 15,
    name: {
      en: 'Automatic Water Boiler',
      id: 'Mesin Pemanas Air Otomatis Jakarta'
    },
    slug: 'automatic-water-boiler',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Heavy-duty automatic hot water dispenser/boiler built for continuous commercial use in busy cafes and tea houses. Precise digital temperature control ensures perfect extractions every time.',
      id: 'Kami memproduksi mesin pemanas air otomatis Jakarta tugas berat yang dibuat khusus untuk penggunaan komersial secara terus-menerus di kafe, restoran, dan kedai teh yang sibuk. Didukung dengan kontrol suhu digital presisi, mesin pemanas air otomatis Jakarta ini memastikan pasokan air panas selalu siap pada suhu konstan untuk ekstraksi teh atau kopi yang sempurna. Bodi tangki mesin pemanas air otomatis Jakarta dilapisi insulasi ganda untuk menghemat konsumsi daya listrik.'
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
    image: '/images/products/automatic-water-boiler.webp',
  },
  {
    id: 16,
    name: {
      en: 'Stainless Pre-rinse Sink Table',
      id: 'Meja Sink Cuci Piring Stainless Jakarta'
    },
    slug: 'stainless-sink-table',
    category: {
      en: 'Coffee Shop Equipment',
      id: 'Peralatan Kedai Kopi'
    },
    description: {
      en: 'Durable multi-compartment stainless steel sink table with a tall splashback. Designed for heavy dishwashing traffic in commercial food prep areas and cafe back-houses.',
      id: 'Kami memproduksi meja sink cuci piring stainless Jakarta yang kuat dan tahan lama untuk menunjang higienitas area pencucian dapur komersial Anda. Menggunakan bahan baja tahan karat tebal (heavy-gauge SS 304), meja sink cuci piring stainless Jakarta ini dilengkapi dengan splashback tinggi untuk mencegah percikan air serta kaki yang dapat diatur tingginya. Dapatkan meja sink cuci piring stainless Jakarta kustom satu hingga tiga lubang bak cuci sesuai ruang dapur Anda.'
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
    image: '/images/products/stainless-sink-table.webp',
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
