-- PT. Limars Teknik Indonesia - D1 Database Seed Data

-- SEED PRODUCTS
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  1,
  'wok-range',
  'Wok Range',
  'Wok Range Stainless Jakarta',
  'Traditional Stoves',
  'Kompor Tradisional',
  'Professional wok range for high-heat Asian cooking.',
  'Kompor wajan profesional untuk masakan Asia dengan panas tinggi.',
  'High-performance wok range designed for Asian cuisine. Built with heavy-duty stainless steel and powerful burners for intense heat cooking.',
  'Kami menawarkan wok range stainless Jakarta berkinerja tinggi yang dirancang khusus untuk kebutuhan masakan Asia. Sebagai penunjang utama dapur profesional, unit wok range stainless Jakarta kami dibuat menggunakan baja tahan karat (stainless steel) tugas berat yang kokoh, higienis, dan mudah dibersihkan. Dilengkapi dengan pembakar (burner) bertenaga besar untuk teknik memasak dengan panas tinggi secara cepat, produk wok range stainless Jakarta ini adalah pilihan terbaik bagi restoran, katering, dan hotel yang mengutamakan kualitas dan efisiensi kerja.',
  '{"material":"Stainless Steel 304","burners":{"en":"2-4 Burners","id":"2-4 Tungku"},"btuOutput":"80,000 - 160,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"1200 x 800 x 850 mm"}',
  '/images/products/wok-range.webp',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  2,
  'kwali-range',
  'Kwali Range',
  'Kompor Kwali Dapur Restoran',
  'Traditional Stoves',
  'Kompor Tradisional',
  'Traditional kwali range for commercial kitchens.',
  'Kompor kwali tradisional untuk dapur komersial.',
  'Traditional kwali range perfect for Indonesian and Chinese cooking. Features adjustable flame control and robust construction for daily commercial use.',
  'Kami memproduksi kompor kwali tradisional yang sempurna untuk masakan Indonesia dan Tionghoa. Unit kompor kwali ini dirancang dengan fitur pengatur api yang dapat disesuaikan serta konstruksi tangguh dari baja tahan karat. Sangat ideal untuk penggunaan kompor kwali secara intensif di dapur komersial sehari-hari.',
  '{"material":"Stainless Steel 304","burners":{"en":"1-3 Burners","id":"1-3 Tungku"},"btuOutput":"60,000 - 120,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"900 x 800 x 850 mm"}',
  '/images/products/kwali-range.webp',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  3,
  'chinese-cooking-range',
  'Chinese Cooking Range',
  'Kompor Masakan Tionghoa',
  'Traditional Stoves',
  'Kompor Tradisional',
  'Specialized range for authentic Chinese cooking.',
  'Kompor khusus untuk masakan Tionghoa otentik.',
  'Specialized Chinese cooking range with waterfall spout and high-powered burners. Ideal for stir-frying, deep-frying, and steaming operations.',
  'Kami menawarkan kompor masakan Tionghoa khusus yang dilengkapi dengan pancuran air terjun dan pembakar berdaya tinggi. Didesain secara ergonomis, kompor masakan Tionghoa ini ideal untuk menumis cepat (stir-fry), menggoreng kering, serta mengukus makanan. Dapatkan unit kompor masakan Tionghoa berkualitas untuk meningkatkan kecepatan penyajian makanan di restoran Anda.',
  '{"material":"Stainless Steel 304","burners":{"en":"1-6 Burners","id":"1-6 Tungku"},"btuOutput":"100,000 - 200,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"1800 x 900 x 850 mm"}',
  '/images/products/chinese-cooking-range.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  4,
  'pizza-oven',
  'Pizza Oven',
  'Oven Pizza Komersial',
  'Regional Ovens',
  'Oven Regional',
  'Stone hearth pizza oven for authentic results.',
  'Oven pizza tungku batu untuk hasil otentik.',
  'Authentic pizza oven with stone hearth and dome construction. Achieves temperatures up to 500°C for perfect Neapolitan-style pizzas.',
  'Kami memproduksi oven pizza komersial otentik yang dilengkapi dengan tungku batu berkualitas dan konstruksi kubah standar industri. Unit oven pizza komersial ini mampu mencapai suhu tinggi hingga 500°C untuk menghasilkan pizza bergaya Neapolitan yang matang merata dalam hitungan menit. Percayakan kebutuhan oven pizza komersial Anda kepada kami untuk kualitas pemanggangan terbaik.',
  '{"material":{"en":"Stainless Steel + Refractory Brick","id":"Baja Tahan Karat + Bata Tahan Api"},"capacity":{"en":"4-12 Pizzas","id":"4-12 Pizza"},"maxTemperature":"500°C","fuelType":{"en":"Gas / Wood","id":"Gas / Kayu Bakar"},"dimensions":"1500 x 1200 x 1800 mm"}',
  '/images/products/pizza-oven.webp',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  5,
  'tandoor-oven',
  'Tandoor Oven',
  'Oven Tandoor Harga Jakarta',
  'Regional Ovens',
  'Oven Regional',
  'Clay-lined tandoor for authentic Indian cuisine.',
  'Tandoor berlapis tanah liat untuk masakan India otentik.',
  'Traditional tandoor oven for Indian and Middle Eastern cuisine. Clay-lined interior for authentic naan bread and tandoori dishes.',
  'Cari oven tandoor harga Jakarta yang bersahabat namun memiliki kualitas pengerjaan premium? Kami memproduksi oven tandoor tradisional terbaik untuk masakan India, roti naan, dan hidangan tandoori otentik. Dengan oven tandoor harga Jakarta yang terjangkau, unit kami dilapisi tanah liat khusus di bagian dalam untuk retensi panas optimal dan rasa masakan yang khas. Dapatkan penawaran oven tandoor harga Jakarta terbaik langsung dari produsen spesialis peralatan dapur komersial.',
  '{"material":{"en":"Stainless Steel + Clay Lining","id":"Baja Tahan Karat + Lapisan Tanah Liat"},"maxTemperature":"480°C","fuelType":{"en":"Gas / Charcoal","id":"Gas / Arang"},"dimensions":"800 x 800 x 1100 mm"}',
  '/images/products/tandoor-oven.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  6,
  'brick-oven',
  'Brick Oven',
  'Oven Bata Kustom',
  'Regional Ovens',
  'Oven Regional',
  'Custom brick oven for artisan baking.',
  'Oven bata kustom untuk memanggang artisan.',
  'Custom-built brick oven with excellent heat retention. Perfect for artisan bread, pizza, and roast dishes with authentic wood-fired flavor.',
  'Kami menawarkan oven bata kustom dengan rancangan khusus yang memberikan retensi panas yang sangat baik untuk pembakaran lambat. Sempurna untuk memanggang roti artisan, pizza, dan berbagai hidangan panggang, oven bata kustom kami menghadirkan aroma pembakaran kayu yang otentik. Setiap unit oven bata kustom dibangun menggunakan bata tahan api berkualitas tinggi dan rangka baja kokoh.',
  '{"material":{"en":"Refractory Brick + Steel Frame","id":"Bata Tahan Api + Rangka Baja"},"maxTemperature":"450°C","fuelType":{"en":"Wood / Gas","id":"Kayu Bakar / Gas"},"dimensions":{"en":"Custom","id":"Sesuai Pesanan"}}',
  '/images/products/brick-oven.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  7,
  'convection-oven',
  'Convection Oven',
  'Oven Konveksi - Produsen Oven Komersial Indonesia',
  'Modern Ovens',
  'Oven Modern',
  'Precision convection oven for commercial use.',
  'Oven konveksi presisi untuk penggunaan komersial.',
  'Professional convection oven with precise temperature control and even heat distribution. Ideal for baking, roasting, and reheating in commercial kitchens.',
  'Sebagai produsen oven komersial Indonesia terpercaya, kami menghadirkan oven konveksi profesional dengan sistem kontrol suhu presisi serta distribusi panas merata. Kami bangga menjadi produsen oven komersial Indonesia yang fokus pada durabilitas dan efisiensi energi untuk menunjang bisnis bakery, restoran, serta hotel. Jika Anda membutuhkan pasokan dari produsen oven komersial Indonesia yang memberikan garansi resmi dan dukungan teknis penuh, oven konveksi kami adalah solusi yang tepat.',
  '{"material":"Stainless Steel 304","capacity":{"en":"5-10 Trays","id":"5-10 Nampan"},"temperatureRange":"50°C - 300°C","power":{"en":"Electric / Gas","id":"Listrik / Gas"},"dimensions":"800 x 700 x 1500 mm"}',
  '/images/products/convection-oven.webp',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  8,
  'deck-oven',
  'Deck Oven',
  'Oven Dek Komersial',
  'Modern Ovens',
  'Oven Modern',
  'Multi-deck oven for bakeries and pastry shops.',
  'Oven multi-dek untuk toko roti dan kue.',
  'Multi-deck oven for bakeries and pastry shops. Stone deck provides superior heat transfer for crispy bread crusts and perfectly baked pastries.',
  'Kami menyediakan oven dek komersial (deck oven) berkapasitas besar yang ideal untuk toko roti, kue, dan pastry profesional. Dilengkapi dengan dek batu berkualitas tinggi, oven dek komersial ini memberikan perpindahan panas superior untuk menghasilkan kerak roti yang renyah dan kue yang mengembang sempurna. Pilihlah oven dek komersial kami untuk hasil pemanggangan yang konsisten.',
  '{"material":"Stainless Steel 304","decks":{"en":"2-4 Decks","id":"2-4 Dek"},"temperatureRange":"50°C - 350°C","power":{"en":"Electric / Gas","id":"Listrik / Gas"},"dimensions":"1200 x 900 x 1600 mm"}',
  '/images/products/deck-oven.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  9,
  'combi-oven',
  'Combi Oven',
  'Oven Combi Stainless',
  'Modern Ovens',
  'Oven Modern',
  'Versatile combi oven with steam and convection.',
  'Oven combi serbaguna dengan uap dan konveksi.',
  'Advanced combi oven combining steam and convection cooking. Programmable recipes, automatic cleaning, and versatile cooking modes for maximum kitchen efficiency.',
  'Kami menghadirkan oven combi stainless tingkat lanjut yang menggabungkan metode memasak uap (steam) dan konveksi dalam satu alat. Dengan oven combi stainless ini, Anda dapat memprogram berbagai resep masakan secara praktis dan melakukan pembersihan otomatis secara efisien. Didesain untuk fleksibilitas maksimal, oven combi stainless ini sangat menunjang produktivitas dapur hotel dan restoran modern.',
  '{"material":"Stainless Steel 304","capacity":{"en":"6-20 GN Trays","id":"6-20 Nampan GN"},"modes":{"en":"Steam / Convection / Combi","id":"Uap / Konveksi / Combi"},"power":{"en":"Electric / Gas","id":"Listrik / Gas"},"dimensions":"900 x 800 x 1800 mm"}',
  '/images/products/combi-oven.webp',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  10,
  'commercial-griddle',
  'Commercial Griddle',
  'Wajan Datar Griddle Komersial',
  'Kitchen Equipment',
  'Perlengkapan Dapur',
  'Heavy-duty griddle for high-volume cooking.',
  'Wajan datar tugas berat untuk memasak volume tinggi.',
  'Heavy-duty flat-top griddle for high-volume cooking. Uniform heat distribution and easy-to-clean surface for grilling, searing, and breakfast preparation.',
  'Kami memproduksi wajan datar griddle komersial tugas berat (heavy-duty flat-top griddle) yang dirancang untuk memasak makanan dalam volume besar secara cepat. Menyediakan distribusi panas yang seragam dan permukaan pelat yang tebal, wajan datar griddle komersial ini sangat mudah dibersihkan setelah digunakan untuk memanggang daging atau menyiapkan menu sarapan. Keandalan wajan datar griddle komersial kami menjadikannya investasi jangka panjang yang berharga.',
  '{"material":{"en":"Stainless Steel + Chrome Surface","id":"Baja Tahan Karat + Permukaan Krom"},"surfaceArea":"600 x 400 mm - 1200 x 600 mm","power":{"en":"Gas / Electric","id":"Gas / Listrik"}}',
  '/images/products/gas-griddle.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  11,
  'deep-fryer',
  'Deep Fryer',
  'Deep Fryer Penggorengan Komersial',
  'Kitchen Equipment',
  'Perlengkapan Dapur',
  'Commercial deep fryer with precise control.',
  'Penggorengan komersial dengan presisi tinggi.',
  'Commercial deep fryer with precise temperature control and safety features. Available in single and double tank configurations.',
  'Kami memproduksi deep fryer penggorengan komersial berkapasitas besar yang dilengkapi dengan kontrol suhu presisi serta fitur katup pengaman. Pilihan deep fryer penggorengan komersial ini tersedia dalam konfigurasi tangki tunggal maupun ganda untuk disesuaikan dengan kapasitas produksi dapur Anda. Desain tangki deep fryer penggorengan komersial kami meminimalkan pemborosan minyak dan menjaga hasil gorengan tetap renyah.',
  '{"material":"Stainless Steel 304","capacity":{"en":"8-25 Liters","id":"8-25 Liter"},"power":{"en":"Gas / Electric","id":"Gas / Listrik"}}',
  '/images/products/gas-deep-fryer.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  12,
  'bain-marie',
  'Bain Marie',
  'Bain Marie Pemanas Makanan',
  'Kitchen Equipment',
  'Perlengkapan Dapur',
  'Food warmer for buffet and serving stations.',
  'Penghangat makanan untuk prasmanan.',
  'Stainless steel bain marie for keeping food warm and at safe serving temperatures. Multiple pan configurations available.',
  'Kami menawarkan unit bain marie pemanas makanan berbahan baja tahan karat untuk menjaga masakan tetap hangat pada suhu penyajian yang aman. Sangat cocok untuk restoran prasmanan dan katering, unit bain marie pemanas makanan ini tersedia dalam berbagai pilihan konfigurasi wadah (pan) sesuai kebutuhan hidangan. Konstruksi wadah air pada bain marie pemanas makanan kami memastikan pemanasan yang stabil dan higienis.',
  '{"material":"Stainless Steel 304","pans":{"en":"3-6 GN Pans","id":"3-6 Nampan GN"},"power":{"en":"Electric","id":"Listrik"}}',
  '/images/products/hotel-bain-marie.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  13,
  'custom-coffee-bar-counter',
  'Custom Coffee Bar Counter',
  'Meja Bar Kopi Stainless Kustom',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Premium custom stainless steel coffee bar station.',
  'Stasiun meja bar kopi baja tahan karat premium kustom.',
  'Premium custom-built stainless steel coffee bar counter featuring built-in knock boxes, under-counter storage, sink stations, and dedicated space for espresso machines. Tailored specifically to your cafe layout.',
  'Kami memproduksi meja bar kopi stainless kustom premium yang dirancang khusus untuk kenyamanan alur kerja barista di kafe Anda. Dibuat dengan material berkualitas tinggi, meja bar kopi stainless kustom ini mengintegrasikan knock box ampas kopi, tempat es, sink wastafel, dan kompartemen penyimpanan bawah meja secara rapi. Dapatkan unit meja bar kopi stainless kustom yang disesuaikan secara presisi dengan layout dan ukuran kedai kopi Anda.',
  '{"material":"Stainless Steel 304 / 316","customizable":{"en":"Fully Customizable Layout","id":"Tata Letak Bebas Disesuaikan"},"features":{"en":"Sinks, Knock Boxes, Ice Bins","id":"Wastafel, Knock Box, Tempat Es"},"dimensions":{"en":"Customizable per Cafe Space","id":"Menyesuaikan Ruang Kafe"}}',
  '/images/products/coffee-bar-counter.webp',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  14,
  'pastry-display-warmer',
  'Pastry Display Warmer',
  'Etalase Pemanas Kue Pastry',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Elegant curved-glass pastry and food display warmer.',
  'Etalase pemanas pajangan makanan dan kue kaca melengkung yang elegan.',
  'Commercial curved-glass pastry display warmer with an elegant stainless steel finish. Perfect for bakeries and coffee shops offering warm croissants, pies, and savory treats with bright LED illumination.',
  'Kami menyediakan etalase pemanas kue pastry dengan kaca melengkung (curved glass) komersial yang elegan dan pencahayaan LED yang terang. Sempurna untuk kafe dan bakery, etalase pemanas kue pastry menjaga kehangatan serta kelembutan croissant, pie, dan aneka camilan gurih lainnya pada suhu ideal. Tampilan luar dari bahan baja tahan karat membuat etalase pemanas kue pastry ini terlihat premium dan menarik perhatian pelanggan.',
  '{"material":{"en":"Stainless Steel + Tempered Glass","id":"Baja Tahan Karat + Kaca Tempered"},"shelves":{"en":"2-4 Adjustable Shelves","id":"2-4 Rak yang dapat disesuaikan"},"temperatureRange":"30°C - 85°C","power":{"en":"Electric","id":"Listrik"}}',
  '/images/products/pastry-display-warmer.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  15,
  'automatic-water-boiler',
  'Automatic Water Boiler',
  'Mesin Pemanas Air Otomatis Jakarta',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Heavy-duty automatic hot water dispenser with digital control.',
  'Mesin dispenser air panas otomatis tugas berat dengan kontrol digital.',
  'Heavy-duty automatic hot water dispenser/boiler built for continuous commercial use in busy cafes and tea houses. Precise digital temperature control ensures perfect extractions every time.',
  'Kami memproduksi mesin pemanas air otomatis Jakarta tugas berat yang dibuat khusus untuk penggunaan komersial secara terus-menerus di kafe, restoran, dan kedai teh yang sibuk. Didukung dengan kontrol suhu digital presisi, mesin pemanas air otomatis Jakarta ini memastikan pasokan air panas selalu siap pada suhu konstan untuk ekstraksi teh atau kopi yang sempurna. Bodi tangki mesin pemanas air otomatis Jakarta dilapisi insulasi ganda untuk menghemat konsumsi daya listrik.',
  '{"material":"Stainless Steel 304","capacity":{"en":"10-30 Liters","id":"10-30 Liter"},"temperatureControl":{"en":"Digital Precision Thermostat","id":"Termostat Digital Presisi"},"power":{"en":"Electric","id":"Listrik"}}',
  '/images/products/automatic-water-boiler.webp',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  16,
  'stainless-sink-table',
  'Stainless Pre-rinse Sink Table',
  'Meja Sink Cuci Piring Stainless Jakarta',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Durable multi-compartment sink table for busy kitchens.',
  'Meja cuci multi-kompartemen tahan lama untuk dapur sibuk.',
  'Durable multi-compartment stainless steel sink table with a tall splashback. Designed for heavy dishwashing traffic in commercial food prep areas and cafe back-houses.',
  'Kami memproduksi meja sink cuci piring stainless Jakarta yang kuat dan tahan lama untuk menunjang higienitas area pencucian dapur komersial Anda. Menggunakan bahan baja tahan karat tebal (heavy-gauge SS 304), meja sink cuci piring stainless Jakarta ini dilengkapi dengan splashback tinggi untuk mencegah percikan air serta kaki yang dapat diatur tingginya. Dapatkan meja sink cuci piring stainless Jakarta kustom satu hingga tiga lubang bak cuci sesuai ruang dapur Anda.',
  '{"material":"Heavy Gauge Stainless Steel 304","bowls":{"en":"1-3 Compartments","id":"1-3 Kompartemen Bak"},"features":{"en":"High Backsplash, Adjustable Bullet Feet","id":"Pelindung Percikan Tinggi, Kaki-kaki yang Dapat Disetel"},"dimensions":{"en":"Custom Sizes Available","id":"Tersedia Ukuran Kustom"}}',
  '/images/products/stainless-sink-table.webp',
  0
);

-- SEED PROJECTS
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  1,
  'grand-hyatt-kitchen',
  'Royal Al-Jazeerah Kitchen Renovation',
  'Renovasi Dapur Royal Al-Jazeerah',
  'Kitchen Set',
  'Kitchen Set',
  'Jakarta',
  'Jakarta',
  'Complete kitchen renovation for Royal Al-Jazeerah, including custom stainless steel kitchen sets, commercial cooking equipment, and integrated ducting system.',
  'Renovasi dapur lengkap untuk Royal Al-Jazeerah, termasuk kitchen set baja tahan karat kustom, peralatan memasak komersial, dan sistem ducting terintegrasi.',
  '/images/projects/project-1-new.webp',
  '[{"en":"Kitchen layout & 3D design","id":"Desain layout & 3D dapur"},{"en":"Custom stainless fabrication","id":"Fabrikasi stainless kustom"},{"en":"Hot kitchen & cold storage prep","id":"Persiapan dapur panas & pendingin"},{"en":"Commercial exhaust integration","id":"Integrasi exhaust komersial"}]',
  NULL,
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  2,
  'central-al-jazeerah-pramuka-pizza-oven',
  'Central Al-Jazeerah Traditional Pizza Oven',
  'Pembuatan Oven Pizza Tradisional Central Al-Jazeerah',
  'Oven Installation',
  'Instalasi Oven',
  'Pramuka, Jakarta',
  'Pramuka, Jakarta',
  'Traditional pizza-style oven fabrication and installation for Central Al-Jazeerah restaurant in Pramuka, Jakarta (2015), continuing our track record in custom traditional oven engineering.',
  'Fabrikasi dan instalasi oven pizza tradisional untuk restoran Central Al-Jazeerah di Pramuka, Jakarta (2015), melanjutkan rekam jejak kami dalam rekayasa oven tradisional kustom.',
  '/images/projects/central-aljazeerah-pramuka/central-aljazeerah-pramuka-1.webp',
  '[{"en":"Traditional pizza oven design","id":"Desain oven pizza tradisional"},{"en":"Refractory brick installation","id":"Instalasi bata tahan api"},{"en":"Gas piping & burner calibration","id":"Pipa gas & kalibrasi burner"},{"en":"Testing and commissioning","id":"Pengujian dan commissioning"}]',
  2015,
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  3,
  'al-jazeerah-polonia-function-hall-pizza-oven',
  'Al-Jazeerah Polonia Function Hall Large Pizza Oven (180cm)',
  'Pembuatan Oven Pizza Besar (180cm) Al-Jazeerah Polonia Function Hall',
  'Oven Installation',
  'Instalasi Oven',
  'Polonia, East Jakarta',
  'Polonia, Jakarta Timur',
  'Large-format traditional pizza oven with 180cm internal diameter, custom-engineered for Al-Jazeerah Restaurant & Function Hall - Polonia (2016) to serve high-volume event catering needs.',
  'Oven pizza tradisional berukuran besar dengan diameter dalam 180cm, direkayasa khusus untuk Al-Jazeerah Restaurant & Function Hall - Polonia (2016) guna memenuhi kebutuhan katering acara berkapasitas tinggi.',
  '/images/projects/aljazeerah-polonia/aljazeerah-polonia-1.webp',
  '[{"en":"Large-diameter oven design (180cm)","id":"Desain oven diameter besar (180cm)"},{"en":"Large-scale refractory brick fabrication","id":"Fabrikasi bata tahan api skala besar"},{"en":"High-capacity gas & burner system","id":"Sistem gas & burner kapasitas tinggi"},{"en":"Performance testing and commissioning","id":"Uji performa dan commissioning"}]',
  2016,
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  4,
  'nanamia-pizzeria-yogyakarta-pizza-oven',
  'Nanamia Pizzeria Yogyakarta Traditional Italian Pizza Oven',
  'Proyek Oven Pizza Tradisional Itali Nanamia Pizzeria Yogyakarta',
  'Oven Installation',
  'Instalasi Oven',
  'Yogyakarta',
  'Yogyakarta',
  'Custom traditional Italian pizza oven fabrication and installation for Nanamia Pizzeria Yogyakarta. Authentic stone hearth oven with gas heating system.',
  'Fabrikasi dan instalasi oven pizza tradisional Itali khusus untuk Nanamia Pizzeria Yogyakarta. Oven tungku batu otentik dengan sistem pemanas gas.',
  '/images/projects/project-4-new.webp',
  '[{"en":"Italian stone hearth design","id":"Desain tungku batu Italia"},{"en":"High-temperature brickwork","id":"Konstruksi bata suhu tinggi"},{"en":"Gas heating system setup","id":"Pengaturan sistem pemanas gas"},{"en":"Chimney & ventilation","id":"Cerobong asap & ventilasi"}]',
  NULL,
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  5,
  'zahra-al-jazeerah-family-villas-cianjur',
  'Zahra Al-Jazeerah Restaurant & Family Villas Pizza Oven',
  'Pembuatan Oven Pizza Zahra Al-Jazeerah Restaurant & Family Villas',
  'Oven Installation',
  'Instalasi Oven',
  'Cipanas, Cianjur, West Java',
  'Cipanas, Cianjur, Jawa Barat',
  'Limars Teknik very first traditional pizza-style oven project, custom-built for Arab bread baking at Zahra Al-Jazeerah Restaurant & Family Villas in Cipanas, Cianjur (2014). This project laid the foundation for our expertise in traditional oven fabrication.',
  'Proyek oven pizza tradisional pertama Limars Teknik, dibuat khusus untuk pembuatan roti Arab di Zahra Al-Jazeerah Restaurant & Family Villas, Cipanas, Cianjur (2014). Proyek ini menjadi fondasi keahlian kami dalam fabrikasi oven tradisional.',
  '/images/projects/zahra-al-jazeerah-cianjur/zahra-aljazeerah-cianjur-1.webp',
  '[{"en":"Traditional pizza oven design","id":"Desain oven pizza tradisional"},{"en":"Custom steel & brick fabrication","id":"Fabrikasi baja & bata kustom"},{"en":"Gas piping & safety valves","id":"Pipa gas & katup pengaman"},{"en":"Temperature calibration for Arab bread","id":"Kalibrasi suhu untuk roti Arab"}]',
  2014,
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  6,
  'bakery-central-combi-oven',
  'Born-Ga Combi Oven Setup',
  'Pengaturan Oven Combi Born-Ga',
  'Oven Installation',
  'Instalasi Oven',
  'Jakarta',
  'Jakarta',
  'Multiple combi oven and deck oven installation for Born-Ga production facility.',
  'Instalasi ganda oven combi dan oven dek untuk fasilitas produksi Born-Ga.',
  '/images/projects/project-6-new.webp',
  '[{"en":"Combi oven capacity planning","id":"Perencanaan kapasitas oven combi"},{"en":"High-volume deck oven supply","id":"Penyediaan oven dek volume tinggi"},{"en":"Heavy-duty electrical wiring","id":"Pengkabelan listrik heavy-duty"},{"en":"Steam exhaust ventilation","id":"Ventilasi pembuangan uap"}]',
  NULL,
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  7,
  'dashi-chazuke-zenraku-kamado-oven',
  'Dashi Chazuke Zenraku Traditional Japanese Kamado Oven',
  'Pembuatan Tungku Kamado Tradisional Jepang Dashi Chazuke Zenraku',
  'Oven Installation',
  'Instalasi Oven',
  'Grand Indonesia Mall, Jakarta',
  'Mall Grand Indonesia, Jakarta',
  'Full kitchen fit-out project worth nearly Rp100 million for Dashi Chazuke Zenraku at Grand Indonesia Mall, Jakarta (2018). Scope covered a custom traditional Japanese Kamado oven with gas burner system, a commercial gas alarm & safety interlock system, exhaust hood/ducting installation, and several supporting kitchen equipment.',
  'Proyek fit-out dapur lengkap bernilai hampir Rp100 juta untuk Dashi Chazuke Zenraku di Mall Grand Indonesia, Jakarta (2018). Lingkup pekerjaan mencakup pembuatan tungku Kamado tradisional Jepang kustom dengan sistem burner gas, sistem alarm & pengaman gas komersial, instalasi ducting/exhaust hood, serta beberapa kitchen equipment pendukung.',
  '/images/projects/dashi-chazuke-zenraku-gi/dashi-chazuke-zenraku-gi-1.webp',
  '[{"en":"Custom Kamado oven design & construction","id":"Desain & konstruksi tungku Kamado kustom"},{"en":"Gas piping with alarm & safety interlock system","id":"Pemipaan gas dengan sistem alarm & pengaman"},{"en":"Exhaust hood & ducting installation","id":"Instalasi exhaust hood & ducting"},{"en":"Supporting kitchen equipment supply & install","id":"Penyediaan & instalasi kitchen equipment pendukung"}]',
  2018,
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, year_completed, featured) VALUES (
  8,
  'al-jazeerah-cikini-mandi-oven',
  'Al-Jazeerah Cikini Traditional "Mandi" Lamb Oven',
  'Pembuatan Oven "Mandi" Domba Tradisional Al-Jazeerah Cikini',
  'Oven Installation',
  'Instalasi Oven',
  'Cikini, Jakarta',
  'Cikini, Jakarta',
  'Custom traditional Mandi oven, sized like a large refrigerator, fabricated for Al-Jazeerah Cikini restaurant (2014-2015). Purpose-built to slow-roast multiple whole young lambs simultaneously, achieving fall-off-the-bone tenderness — a specialty Middle Eastern cooking technique.',
  'Oven Mandi tradisional kustom, berukuran seperti kulkas besar, dibuat untuk restoran Al-Jazeerah Cikini (2014-2015). Dirancang khusus untuk memanggang beberapa ekor anak domba utuh sekaligus hingga daging lepas dari tulang dengan sendirinya — teknik memasak khas Timur Tengah.',
  '/images/projects/aljazeerah-cikini-mandi-oven/aljazeerah-cikini-mandi-oven-1.webp',
  '[{"en":"Multi-lamb capacity oven design","id":"Desain oven berkapasitas multi-domba"},{"en":"Steel structure & refractory fabrication","id":"Fabrikasi struktur baja & bata tahan api"},{"en":"Heat circulation system","id":"Sistem sirkulasi panas"},{"en":"Safety and doneness testing","id":"Pengujian keselamatan & kematangan"}]',
  2015,
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, images, scope, year_completed, featured) VALUES (
  9,
  'istanbul-turkey-restaurant-kemang-oven',
  'Istanbul Turkey Restaurant Pizza & Tannur Oven',
  'Pembuatan Oven Pizza & Tannur Istanbul Turkey Restaurant',
  'Oven Installation',
  'Instalasi Oven',
  'Kemang Raya, Jakarta',
  'Jl. Kemang Raya, Jakarta',
  'Custom pizza-style Arab bread oven and traditional Tannur oven fabrication for Istanbul Turkey Restaurant on Jl. Kemang Raya, Jakarta (2018), a Middle Eastern restaurant requiring authentic dual-oven cooking setup for traditional bread and grilled dishes.',
  'Pembuatan oven pizza untuk roti Arab dan oven Tannur tradisional khusus untuk Istanbul Turkey Restaurant di Jl. Kemang Raya, Jakarta (2018), restoran Timur Tengah yang membutuhkan setup dua oven otentik untuk roti tradisional dan hidangan panggang.',
  '/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-1.webp',
  '["/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-1.webp","/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-2.webp","/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-3.webp","/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-4.webp","/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-5.webp","/images/projects/istanbul-turkey-kemang/istanbul-turkey-kemang-6.webp"]',
  '[{"en":"Custom pizza-style Arab bread oven construction","id":"Konstruksi oven pizza untuk roti Arab"},{"en":"Traditional Tannur oven pit construction","id":"Konstruksi lubang oven Tannur tradisional"},{"en":"Firebrick & refractory dome fabrication","id":"Fabrikasi kubah bata tahan api"},{"en":"Underground brick-lined pit installation","id":"Instalasi lubang berlapis bata bawah tanah"}]',
  2018,
  0
);

-- SEED SERVICES
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  1,
  'kitchen-sets',
  'Restaurant Kitchen Set',
  'Jasa Kitchen Set Restoran Jakarta',
  'Design & Installation',
  'Desain & Instalasi',
  'End-to-end kitchen set design and manufacturing using stainless steel and premium materials for restaurants, hotels, and catering businesses.',
  'Desain dan pembuatan kitchen set dari awal hingga akhir menggunakan baja tahan karat dan bahan premium untuk restoran, hotel, dan bisnis katering.',
  'We provide comprehensive restaurant kitchen set solutions from initial consultation and design through to manufacturing and installation. Our team of experienced engineers and fabricators work with premium stainless steel materials to create durable, hygienic, and efficient kitchen workspaces tailored to your specific needs.',
  'Kami adalah penyedia jasa kitchen set restoran Jakarta terpercaya yang menyediakan solusi komprehensif mulai dari desain, fabrikasi, hingga instalasi. Sebagai spesialis jasa kitchen set restoran Jakarta, tim insinyur dan fabrikator kami yang berpengalaman memproduksi peralatan dapur stainless steel premium. Layanan jasa kitchen set restoran Jakarta kami dirancang untuk menciptakan ruang kerja dapur yang aman, higienis, dan efisien sesuai standar bisnis kuliner Anda.',
  '/images/services/kitchen-set.webp',
  '🍳',
  '[{"en":"Custom stainless steel fabrication","id":"Fabrikasi baja tahan karat kustom"},{"en":"Professional 3D kitchen design","id":"Desain dapur 3D profesional"},{"en":"Full project management","id":"Manajemen proyek penuh"},{"en":"Quality materials (SS 304/316)","id":"Material berkualitas (SS 304/316)"},{"en":"Post-installation support","id":"Dukungan pasca instalasi"},{"en":"Compliance with health & safety standards","id":"Kepatuhan terhadap standar kesehatan & keselamatan"}]',
  '[{"step":1,"title":{"en":"Consultation","id":"Konsultasi"},"description":{"en":"We meet with you to understand your kitchen needs, space, and budget.","id":"Kami bertemu dengan Anda untuk memahami kebutuhan dapur, ruang, dan anggaran Anda."}},{"step":2,"title":{"en":"Design","id":"Desain"},"description":{"en":"Our team creates detailed 3D designs and floor plans for your approval.","id":"Tim kami membuat desain 3D rinci dan denah lantai untuk persetujuan Anda."}},{"step":3,"title":{"en":"Manufacturing","id":"Produksi"},"description":{"en":"Precision fabrication in our workshop using premium stainless steel.","id":"Fabrikasi presisi di bengkel kami menggunakan baja tahan karat premium."}},{"step":4,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Professional on-site installation by our experienced team.","id":"Instalasi on-site profesional oleh tim kami yang berpengalaman."}},{"step":5,"title":{"en":"Handover","id":"Serah Terima"},"description":{"en":"Final inspection, training, and project handover with warranty.","id":"Inspeksi akhir, pelatihan, dan serah terima proyek dengan garansi."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  2,
  'ducting',
  'Ducting Systems',
  'Jasa Ducting Restoran Jakarta',
  'Smoke Exhaust & Air Circulation',
  'Pembuangan Asap & Sirkulasi Udara',
  'Design and installation of smoke exhaust and air circulation ducting systems for commercial kitchens and industrial buildings.',
  'Desain dan instalasi sistem ducting pembuangan asap dan sirkulasi udara untuk dapur komersial dan bangunan industri.',
  'Our ducting services cover the complete design and installation of smoke exhaust and air circulation systems. We ensure proper ventilation, compliance with building codes, and efficient air flow to maintain a comfortable and safe kitchen environment.',
  'Kami menawarkan jasa ducting restoran Jakarta komprehensif yang mencakup desain tata letak, fabrikasi, hingga instalasi sistem pembuangan asap dapur. Melalui jasa ducting restoran Jakarta kami, kami memastikan sirkulasi udara di dapur komersial Anda berjalan optimal sehingga asap masakan dan bau menyengat dapat terbuang dengan efektif. Percayakan kebutuhan ventilasi Anda kepada penyedia jasa ducting restoran Jakarta berpengalaman untuk kenyamanan staf dan pelanggan Anda.',
  '/images/services/ducting.webp',
  '💨',
  '[{"en":"Kitchen exhaust systems","id":"Sistem pembuangan udara dapur"},{"en":"Fresh air intake installation","id":"Instalasi asupan udara segar"},{"en":"HVAC ducting integration","id":"Integrasi ducting HVAC"},{"en":"Grease trap systems","id":"Sistem perangkap lemak (Grease trap)"},{"en":"Fire damper installation","id":"Instalasi peredam api (Fire damper)"},{"en":"Regular maintenance programs","id":"Program pemeliharaan rutin"}]',
  '[{"step":1,"title":{"en":"Site Assessment","id":"Penilaian Lokasi"},"description":{"en":"Evaluate the space and ventilation requirements.","id":"Evaluasi ruang dan persyaratan ventilasi."}},{"step":2,"title":{"en":"System Design","id":"Desain Sistem"},"description":{"en":"Engineer the optimal ducting layout and specifications.","id":"Merancang tata letak dan spesifikasi ducting yang optimal."}},{"step":3,"title":{"en":"Fabrication","id":"Fabrikasi"},"description":{"en":"Custom fabrication of duct components in our workshop.","id":"Fabrikasi kustom komponen duct di bengkel kami."}},{"step":4,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Professional installation with minimal disruption.","id":"Instalasi profesional dengan gangguan minimal."}},{"step":5,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Air flow testing and system commissioning.","id":"Pengujian aliran udara dan komisioning sistem."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  3,
  'gas-installation',
  'Gas Installation',
  'Instalasi Gas Dapur Komersial Jakarta',
  'Professional & Certified',
  'Profesional & Bersertifikat',
  'Professional gas piping installation for commercial kitchens and buildings, with full safety compliance and pressure testing.',
  'Instalasi perpipaan gas profesional untuk dapur komersial dan bangunan, dengan kepatuhan keselamatan penuh dan pengujian tekanan.',
  'Our certified gas installation team provides safe and reliable gas piping solutions for restaurants, commercial kitchens, and buildings. We handle everything from LPG and natural gas systems to safety compliance and pressure testing, ensuring your gas infrastructure meets all regulatory requirements.',
  'Kami menyediakan layanan instalasi gas dapur komersial Jakarta yang aman, andal, dan bersertifikat resmi untuk restoran, hotel, dan katering. Tim teknisi kami yang berpengalaman menangani seluruh alur instalasi gas dapur komersial Jakarta mulai dari perpipaan gas LPG/LNG, pemasangan katup pengaman, hingga sistem deteksi kebocoran. Hubungi kami untuk mendapatkan layanan instalasi gas dapur komersial Jakarta dengan standar keselamatan industri tertinggi dan uji tekanan pipa yang lengkap.',
  '/images/services/gas-installation.webp',
  '🔥',
  '[{"en":"LPG & Natural Gas systems","id":"Sistem LPG & Gas Alam"},{"en":"Certified installation team","id":"Tim instalasi bersertifikat"},{"en":"Pressure testing & certification","id":"Pengujian tekanan & sertifikasi"},{"en":"Safety valve installation","id":"Instalasi katup pengaman"},{"en":"Gas leak detection systems","id":"Sistem deteksi kebocoran gas"},{"en":"Regulatory compliance","id":"Kepatuhan terhadap peraturan"}]',
  '[{"step":1,"title":{"en":"Survey","id":"Survei"},"description":{"en":"Assess gas requirements and plan the piping layout.","id":"Menilai persyaratan gas dan merencanakan tata letak perpipaan."}},{"step":2,"title":{"en":"Permitting","id":"Perizinan"},"description":{"en":"Handle all necessary permits and approvals.","id":"Menangani semua izin dan persetujuan yang diperlukan."}},{"step":3,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Install gas piping with certified materials and techniques.","id":"Memasang perpipaan gas dengan material dan teknik bersertifikat."}},{"step":4,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Comprehensive pressure testing and leak checks.","id":"Pengujian tekanan komprehensif dan pemeriksaan kebocoran."}},{"step":5,"title":{"en":"Certification","id":"Sertifikasi"},"description":{"en":"Provide official certification and documentation.","id":"Memberikan sertifikasi dan dokumentasi resmi."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  4,
  'well-drilling',
  'Well Drilling',
  'Jasa Pengeboran Sumur Jakarta',
  'Clean Water Supply',
  'Pasokan Air Bersih',
  'Professional well drilling services for clean water supply, including site survey, drilling, pump installation, and water quality testing.',
  'Layanan pengeboran sumur profesional untuk pasokan air bersih, termasuk survei lokasi, pengeboran, instalasi pompa, dan pengujian kualitas air.',
  'We offer professional well drilling services to ensure a reliable clean water supply for your property. Our experienced drilling team uses modern equipment to reach optimal water sources, and we handle everything from initial site surveys to pump installation and water quality testing.',
  'Kami menyediakan jasa pengeboran sumur Jakarta profesional untuk menjamin pasokan air bersih yang melimpah dan higienis bagi properti komersial maupun residensial Anda. Didukung peralatan bor modern dan tim ahli geologi, layanan jasa pengeboran sumur Jakarta kami mampu menjangkau sumber mata air berkualitas pada kedalaman optimal. Dapatkan solusi lengkap jasa pengeboran sumur Jakarta mulai dari survei lokasi, pengeboran casing, hingga instalasi pompa celup submersible bergaransi.',
  '/images/services/well-drilling.webp',
  '💧',
  '[{"en":"Professional site survey","id":"Survei lokasi profesional"},{"en":"Modern drilling equipment","id":"Peralatan pengeboran modern"},{"en":"Submersible pump installation","id":"Instalasi pompa celup (submersible)"},{"en":"Water quality testing","id":"Pengujian kualitas air"},{"en":"Piping & distribution setup","id":"Pengaturan perpipaan & distribusi"},{"en":"Maintenance support","id":"Dukungan pemeliharaan"}]',
  '[{"step":1,"title":{"en":"Site Survey","id":"Survei Lokasi"},"description":{"en":"Geological assessment to identify the best drilling location.","id":"Penilaian geologi untuk mengidentifikasi lokasi pengeboran terbaik."}},{"step":2,"title":{"en":"Drilling","id":"Pengeboran"},"description":{"en":"Professional drilling using modern equipment.","id":"Pengeboran profesional menggunakan peralatan modern."}},{"step":3,"title":{"en":"Casing","id":"Casing"},"description":{"en":"Install well casing and screen for clean water extraction.","id":"Memasang casing sumur dan saringan untuk ekstraksi air bersih."}},{"step":4,"title":{"en":"Pump Setup","id":"Pengaturan Pompa"},"description":{"en":"Install and configure submersible pump system.","id":"Instalasi dan konfigurasi sistem pompa celup."}},{"step":5,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Water quality and flow rate testing.","id":"Pengujian kualitas air dan laju aliran."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  5,
  'electrical',
  'Electrical Services',
  'Jasa Instalasi Listrik Restoran Jakarta',
  'Installation & Maintenance',
  'Instalasi & Pemeliharaan',
  'Electrical installation and maintenance for restaurants, homes, and buildings, covering wiring, panel installation, and power distribution.',
  'Instalasi dan pemeliharaan listrik untuk restoran, rumah, dan bangunan, meliputi pekerjaan kabel, instalasi panel, dan distribusi daya.',
  'Our electrical services team provides comprehensive solutions for restaurants, homes, and commercial buildings. From wiring and panel installation to lighting and power distribution, we ensure safe, efficient, and code-compliant electrical systems for all your needs.',
  'Kami menyediakan jasa instalasi listrik restoran Jakarta secara komprehensif untuk menjamin sistem kelistrikan dapur komersial Anda beroperasi dengan aman dan efisien. Dari pemasangan panel bagi beban daya besar hingga pekerjaan kabel stop kontak peralatan masak, jasa instalasi listrik restoran Jakarta kami dikerjakan oleh teknisi ahli bersertifikat. Lindungi bisnis kuliner Anda dengan mempercayakan perancangan daya kepada penyedia jasa instalasi listrik restoran Jakarta yang mematuhi standar keselamatan kelistrikan nasional.',
  '/images/services/electrical.webp',
  '⚡',
  '[{"en":"Wiring & rewiring","id":"Instalasi kabel & pasang ulang kabel"},{"en":"Electrical panel installation","id":"Instalasi panel listrik"},{"en":"Lighting systems","id":"Sistem pencahayaan"},{"en":"Power distribution","id":"Distribusi daya"},{"en":"Safety compliance","id":"Kepatuhan keselamatan"},{"en":"Emergency electrical repair","id":"Perbaikan listrik darurat"}]',
  '[{"step":1,"title":{"en":"Assessment","id":"Penilaian"},"description":{"en":"Evaluate electrical needs and existing infrastructure.","id":"Mengevaluasi kebutuhan kelistrikan dan infrastruktur yang ada."}},{"step":2,"title":{"en":"Design","id":"Desain"},"description":{"en":"Create electrical layout and load calculations.","id":"Membuat tata letak kelistrikan dan perhitungan beban."}},{"step":3,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Professional wiring and component installation.","id":"Instalasi kabel dan komponen secara profesional."}},{"step":4,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Comprehensive safety and load testing.","id":"Pengujian keselamatan dan beban komprehensif."}},{"step":5,"title":{"en":"Handover","id":"Serah Terima"},"description":{"en":"Documentation, certification, and client training.","id":"Dokumentasi, sertifikasi, dan pelatihan klien."}}]'
);

-- SEED FAQS
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  1,
  'Products',
  'Produk',
  'What types of kitchen equipment does Limars Teknik manufacture?',
  'Jenis peralatan dapur apa yang diproduksi Limars Teknik?',
  'We manufacture a wide range of kitchen equipment including traditional stoves (wok range, kwali range, Chinese cooking range), regional ovens (pizza oven, tandoor, brick oven), modern commercial ovens (convection, deck, combi), and various kitchen accessories (griddles, fryers, bain maries, and more).',
  'Kami memproduksi berbagai macam peralatan dapur termasuk kompor tradisional (kompor wajan, kompor kwali, kompor masakan Tionghoa), oven regional (oven pizza, tandoor, oven bata), oven komersial modern (konveksi, dek, combi), dan berbagai aksesoris dapur (wajan datar, penggorengan, pemanas makanan, dan banyak lagi).'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  2,
  'Products',
  'Produk',
  'Can you manufacture custom equipment to my specifications?',
  'Bisakah Anda memproduksi peralatan kustom sesuai spesifikasi saya?',
  'Yes! We specialize in custom manufacturing. Our engineering team can design and fabricate kitchen equipment tailored to your specific requirements, including custom sizes, configurations, and features. Contact us with your specifications for a consultation.',
  'Ya! Kami mengkhususkan diri dalam pembuatan kustom. Tim teknis kami dapat mendesain dan memfabrikasi peralatan dapur yang disesuaikan dengan kebutuhan spesifik Anda, termasuk ukuran, konfigurasi, dan fitur kustom. Hubungi kami dengan spesifikasi Anda untuk konsultasi.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  3,
  'Products',
  'Produk',
  'What materials do you use for your products?',
  'Material apa yang Anda gunakan untuk produk Anda?',
  'We primarily use food-grade Stainless Steel 304 and 316 for our products, ensuring durability, hygiene, and corrosion resistance. For specialized equipment like pizza ovens and tandoors, we also use refractory bricks and clay linings.',
  'Kami terutama menggunakan Stainless Steel 304 dan 316 food-grade untuk produk kami, memastikan daya tahan, higienitas, dan ketahanan terhadap korosi. Untuk peralatan khusus seperti oven pizza dan tandoor, kami juga menggunakan bata tahan api dan lapisan tanah liat.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  4,
  'Products',
  'Produk',
  'Do your products come with a warranty?',
  'Apakah produk Anda bergaransi?',
  'Yes, all our products come with a manufacturer warranty. The warranty period varies by product type, typically ranging from 1 to 3 years. We also offer extended warranty options and maintenance programs.',
  'Ya, semua produk kami dilengkapi dengan garansi pabrik. Masa garansi bervariasi berdasarkan jenis produk, biasanya berkisar antara 1 hingga 3 tahun. Kami juga menawarkan opsi garansi yang diperpanjang dan program pemeliharaan.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  5,
  'Services',
  'Layanan',
  'What areas do you serve?',
  'Area mana saja yang Anda layani?',
  'We serve clients across Indonesia, with our primary operations centered in Java (Jakarta, Surabaya, Bandung, Semarang). We also handle projects in Bali, Sumatra, Kalimantan, and other regions. Contact us to discuss your location.',
  'Kami melayani klien di seluruh Indonesia, dengan operasi utama kami berpusat di Pulau Jawa (Jakarta, Surabaya, Bandung, Semarang). Kami juga menangani proyek di Bali, Sumatera, Kalimantan, dan wilayah lainnya. Hubungi kami untuk mendiskusikan lokasi Anda.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  6,
  'Services',
  'Layanan',
  'How long does a kitchen set installation typically take?',
  'Berapa lama biasanya waktu instalasi kitchen set?',
  'The timeline depends on the project scope. A typical restaurant kitchen set project takes 4-8 weeks from design approval to completed installation. Larger projects like hotel kitchens may take 8-12 weeks. We provide detailed timelines during the consultation phase.',
  'Jangka waktu tergantung pada ruang lingkup proyek. Proyek kitchen set restoran yang khas memakan waktu 4-8 minggu dari persetujuan desain hingga instalasi selesai. Proyek yang lebih besar seperti dapur hotel bisa memakan waktu 8-12 minggu. Kami menyertakan garis waktu rinci selama fase konsultasi.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  7,
  'Services',
  'Layanan',
  'Do you provide after-sales service and maintenance?',
  'Apakah Anda menyediakan layanan purna jual dan pemeliharaan?',
  'Absolutely. We offer comprehensive after-sales support including routine maintenance programs, emergency repairs, spare parts supply, and equipment calibration. Our service team is available to assist you throughout the life of your equipment.',
  'Tentu saja. Kami menawarkan dukungan purna jual komprehensif termasuk program pemeliharaan rutin, perbaikan darurat, pasokan suku cadang, dan kalibrasi peralatan. Tim layanan kami tersedia untuk membantu Anda sepanjang umur peralatan Anda.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  8,
  'Services',
  'Layanan',
  'Are your gas installations certified?',
  'Apakah instalasi gas Anda bersertifikat?',
  'Yes, all our gas installations are performed by certified technicians and comply with Indonesian safety regulations. We provide full documentation, pressure test certificates, and safety compliance reports for every installation.',
  'Ya, semua instalasi gas kami dikerjakan oleh teknisi bersertifikat dan mematuhi peraturan keselamatan Indonesia. Kami menyertakan dokumentasi lengkap, sertifikat uji tekanan, dan laporan kepatuhan keselamatan untuk setiap instalasi.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  9,
  'Ordering',
  'Pemesanan',
  'How do I get a quotation?',
  'Bagaimana cara mendapatkan penawaran (quotation)?',
  'You can request a quotation through our website contact form, via WhatsApp, phone, or email. Please provide details about your requirements and we will respond with a detailed quotation within 1-3 business days.',
  'Anda dapat meminta penawaran melalui formulir kontak situs web kami, melalui WhatsApp, telepon, atau email. Berikan rincian tentang kebutuhan Anda dan kami akan merespons dengan penawaran rinci dalam 1-3 hari kerja.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  10,
  'Ordering',
  'Pemesanan',
  'What is the typical lead time for orders?',
  'Berapa batas waktu pengerjaan khusus (lead time) untuk pesanan?',
  'Standard products are typically available within 2-4 weeks. Custom-manufactured items may take 4-8 weeks depending on complexity. Rush orders can be accommodated for an additional fee. We will provide a specific timeline with your quotation.',
  'Produk standar biasanya tersedia dalam waktu 2-4 minggu. Item yang diproduksi secara kustom mungkin memakan waktu 4-8 minggu tergantung pada kompleksitasnya. Pesanan kilat dapat diakomodasi dengan biaya tambahan. Kami akan menyertakan garis waktu khusus dengan penawaran Anda.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  11,
  'Ordering',
  'Pemesanan',
  'Do you offer financing or payment plans?',
  'Apakah Anda menawarkan pembiayaan atau paket pembayaran cicilan?',
  'For larger projects, we offer flexible payment terms including installment plans. Typically, we work with a 30-50% down payment with the balance due upon completion. Contact us to discuss payment options for your project.',
  'Untuk proyek yang lebih besar, kami menawarkan persyaratan pembayaran yang fleksibel termasuk paket cicilan. Biasanya, kami bekerja dengan uang muka 30-50% dengan saldo jatuh tempo setelah selesai. Hubungi kami untuk mendiskusikan opsi pembayaran untuk proyek Anda.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  12,
  'Ordering',
  'Pemesanan',
  'Can you deliver and install outside of Java?',
  'Bisakah Anda mengirim dan memasang peralatan di luar Pulau Jawa?',
  'Yes, we can deliver and install equipment throughout Indonesia. Delivery costs and timelines vary by location. We also have partner networks in several major cities for ongoing support and maintenance.',
  'Ya, kami dapat mengirim dan memasang peralatan di seluruh Indonesia. Biaya pengiriman dan waktu bervariasi berdasarkan lokasi. Kami juga memiliki jaringan mitra di beberapa kota besar untuk dukungan dan pemeliharaan yang berkelanjutan.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  13,
  'General',
  'Umum',
  'How long has Limars Teknik been in business?',
  'Berapa lama Limars Teknik telah beroperasi?',
  'PT. Limars Teknik Indonesia has been serving the kitchen equipment and engineering industry for over a decade, building a strong reputation for quality manufacturing and reliable service across Indonesia.',
  'PT. Limars Teknik Indonesia telah melayani industri peralatan dan teknik dapur selama lebih dari satu dekade, membangun reputasi yang kuat untuk produksi berkualitas dan layanan yang dapat diandalkan di seluruh Indonesia.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  14,
  'General',
  'Umum',
  'Can I visit your workshop or showroom?',
  'Bisakah saya mengunjungi bengkel atau ruang pamer Anda?',
  'Yes, we welcome client visits to our workshop and showroom. Please contact us to schedule an appointment so we can arrange a guided tour and consultation with our team.',
  'Ya, kami menyambut kunjungan klien ke bengkel dan ruang pamer kami. Hubungi kami untuk menjadwalkan janji temu agar kami dapat mengatur tur berpemandu dan konsultasi dengan tim kami.'
);
INSERT INTO faqs (id, category_en, category_id, question_en, question_id, answer_en, answer_id) VALUES (
  15,
  'General',
  'Umum',
  'Do you work with architects and interior designers?',
  'Apakah Anda bekerja dengan asitek dan desainer interior?',
  'Yes, we regularly collaborate with architects, interior designers, and kitchen consultants. We can work from your design specifications or provide our own design recommendations to complement your overall project vision.',
  'Ya, kami secara teratur berkolaborasi dengan arsitek, desainer interior, dan konsultan dapur. Kami dapat bekerja berdasarkan spesifikasi desain Anda atau memberikan rekomendasi desain kami sendiri untuk melengkapi visi proyek Anda secara keseluruhan.'
);

-- SEED BLOG POSTS
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  1,
  'tips-perawatan-kompor-komersial',
  'Commercial Stove Maintenance Tips for Longevity and Top Performance',
  'Tips Perawatan Kompor Komersial Agar Awet dan Performa Maksimal',
  'Learn how to maintain your kwali range and wok stoves to keep them efficient and durable for your restaurant kitchen.',
  'Pelajari cara merawat kompor kwali range dan kompor wok Anda agar tetap efisien dan tahan lama untuk dapur restoran Anda.',
  '<h2>Why Stove Maintenance Matters?</h2>
        <p>A commercial stove is the heart of any professional kitchen. By maintaining equipment like your <a href="/en/products/wok-range/">wok range stainless Jakarta</a> or <a href="/en/products/kwali-range/">kwali range</a>, you can ensure fuel efficiency remains at its peak and avoid sudden breakdowns that disrupt operations.</p>
        
        <h2>Daily Maintenance Steps</h2>
        <ul>
          <li><strong>Clean the Burners:</strong> Ensure burner holes are not clogged by food debris or grease around the burners.</li>
          <li><strong>Wipe Stainless Steel Surfaces:</strong> Use a soft cloth and specialized stainless steel cleaner to prevent corrosion.</li>
          <li><strong>Check Gas Flow:</strong> Ensure there are no unusual gas smells around the stove connections.</li>
        </ul>

        <h2>Periodic Professional Inspection</h2>
        <p>In addition to daily care, it is highly recommended to perform routine service every 3-6 months by professional technicians like the Limars Teknik team to ensure the ignition system and gas pressure remain optimal on your commercial stoves.</p>',
  '<h2>Mengapa Perawatan Kompor Itu Penting?</h2>
        <p>Kompor komersial adalah jantung dari setiap dapur profesional. Dengan merawat peralatan secara berkala seperti <a href="/id/products/wok-range/">wok range stainless Jakarta</a> atau <a href="/id/products/kwali-range/">kompor kwali range</a>, Anda dapat memastikan efisiensi bahan bakar tetap maksimal dan menghindari risiko kerusakan mendadak yang mengganggu operasional bisnis Anda.</p>
        
        <h2>Langkah-Langkah Perawatan Harian</h2>
        <ul>
          <li><strong>Bersihkan Burner:</strong> Pastikan lubang api tidak tersumbat oleh sisa makanan atau lemak di sekitar tungku.</li>
          <li><strong>Lap Permukaan Stainless Steel:</strong> Gunakan kain lembut dan pembersih khusus stainless steel agar tidak korosi.</li>
          <li><strong>Cek Aliran Gas:</strong> Pastikan tidak ada bau gas yang tidak biasa di sekitar koneksi kompor.</li>
        </ul>

        <h2>Pemeriksaan Berkala oleh Ahli</h2>
        <p>Selain perawatan harian, sangat disarankan untuk melakukan servis rutin setiap 3-6 bulan oleh teknisi profesional seperti tim Limars Teknik untuk memastikan sistem pemantik dan tekanan gas tetap optimal pada kompor wajan komersial Anda.</p>',
  '/images/blog/stove-maintenance.jpg',
  '2026-03-14',
  '5 min read'
);
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  2,
  'manfaat-sistem-ducting-restoran',
  'Benefits of a Good Ducting System in Your Restaurant',
  'Manfaat Sistem Ducting yang Baik di Restoran Anda',
  'Poor air circulation can affect customer comfort and staff health. Find out why quality ducting is crucial for your business.',
  'Sistem sirkulasi udara yang buruk dapat mengganggu kenyamanan pelanggan dan kesehatan staf. Simak mengapa ducting berkualitas sangat krusial.',
  '<h2>Clean Air, Comfortable Customers</h2>
        <p>A restaurant with smoke lingering in the dining area will discourage customers. Using an efficient exhaust system near your <a href="/en/products/wok-range/">wok range stainless Jakarta</a> will effectively pull smoke and cooking odors out of the kitchen, maintaining clean indoor air.</p>
        
        <h2>Occupational Health and Safety</h2>
        <p>Kitchen staff work in high-heat environments. A ventilation system connected to our <a href="/en/services/ducting/">restaurant ducting service Jakarta</a> helps lower room temperature by circulating fresh air in and expelling hot air out.</p>',
  '<h2>Udara Bersih, Pelanggan Nyaman</h2>
        <p>Restoran dengan asap mengepul di area makan membuat pelanggan tidak betah. Penggunaan sistem penarikan asap yang efisien di dekat <a href="/id/products/wok-range/">wok range stainless Jakarta</a> Anda akan menarik asap dan bau masakan keluar dari dapur dengan sangat efektif. Hal ini juga membantu menjaga kebersihan seluruh peralatan dapur restoran.</p>
        
        <h2>Kesehatan dan Keselamatan Kerja</h2>
        <p>Staf dapur bekerja di lingkungan bersuhu tinggi. Sistem sirkulasi yang terhubung dengan <a href="/id/services/ducting/">jasa instalasi ducting restoran Jakarta</a> kami membantu menurunkan suhu ruangan dengan mengalirkan udara segar ke dalam (fresh air intake) dan membuang udara panas keluar dapur.</p>',
  '/images/blog/ducting-system.jpg',
  '2026-03-10',
  '5 min read'
);
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  3,
  'cara-memilih-oven-pizza-komersial',
  'How to Choose a Commercial Pizza Oven for Your Restaurant',
  'Cara Memilih Oven Pizza Komersial untuk Dapur Restoran Anda',
  'Looking for the best commercial pizza oven? Understand the oven types, power sources, and how to get the best commercial pizza oven price for your business.',
  'Mencari oven pizza komersial terbaik? Pahami jenis-jenis oven, sumber energi, dan cara mendapatkan oven pizza komersial harga terbaik untuk bisnis kuliner Anda.',
  '<p>Choosing the right commercial pizza oven is a crucial decision for your culinary business. Whether you are opening an authentic pizzeria, adding pizza to your menu, or upgrading your cafe kitchen, the oven type determines texture, cooking speed, and running costs. The market offers various models which affect the overall <strong>commercial pizza oven price</strong>. In this guide, we break down key factors to help you invest wisely.</p>

        <h2>1. Types of Commercial Pizza Ovens</h2>
        <p>Before comparing the <strong>commercial pizza oven price</strong>, understand the four main categories used in professional kitchens:</p>
        <ul>
          <li><strong>Stone Hearth / Brick Ovens:</strong> Uses refractory stone to absorb and radiate heat. Ideal for producing classic Neapolitan pizzas with a crispy crust. Available in wood-fired, gas, or hybrid models. View our custom builds at the <a href="/en/products/pizza-oven/">Commercial Pizza Oven</a> page.</li>
          <li><strong>Deck Ovens:</strong> Pizzas are placed directly on hot stone decks. Popular for New York style pizzas due to large capacity and excellent heat retention.</li>
          <li><strong>Convection Ovens:</strong> Uses internal fans to circulate hot air evenly. Versatile and cost-effective for cafes where pizza is a secondary menu item. Learn more at our <a href="/en/products/convection-oven/">Convection Oven</a> page.</li>
          <li><strong>Conveyor Ovens:</strong> Pizzas slide through a hot chamber on a conveyor belt. Recommended for fast food chains and delivery services with high production volume.</li>
        </ul>

        <h2>2. Heating Source Options</h2>
        <p>Power source dictates heating speed and pizza flavor. Gas ovens are popular due to fast heat-up times, easy temperature adjustments, and lower fuel cost compared to large electric units. Ensure all gas line setup for range and oven is done by certified technicians. Learn about our <a href="/en/services/gas-installation/">Commercial Gas Installation</a> services.</p>

        <h2>3. Factors Influencing Commercial Pizza Oven Price</h2>
        <p>Why do commercial pizza oven prices range so widely? Here are the main cost drivers:</p>
        <ul>
          <li><strong>Material Quality & Insulation:</strong> High-end ovens utilize food-grade Stainless Steel 304 exteriors and thick refractory clay interiors. Poor insulation wastes fuel and damages electronics.</li>
          <li><strong>Production Output:</strong> Larger decks and multi-tier deck setups accommodate more pizzas simultaneously, raising the price tag.</li>
          <li><strong>Temperature Control Systems:</strong> Digital precision controls and infrared thermometers increase safety and product cost compared to analog knobs.</li>
        </ul>

        <h2>FAQ on Commercial Pizza Ovens</h2>
        <div class="faq-container">
          <h3>What is the difference between stone hearth and standard gas ovens?</h3>
          <p>Stone hearth ovens transfer heat conductively and radiantly to produce the charred, crispy crust typical of Italian pizzas. Standard gas ovens without stone rely purely on convection, leading to softer crust textures.</p>
          
          <h3>What is the ideal temperature for baking Neapolitan pizza?</h3>
          <p>Authentic Neapolitan pizza requires high temperatures between 450°C and 500°C, baking the dough in just 60 to 90 seconds.</p>
          
          <h3>Why do commercial pizza oven prices vary so much?</h3>
          <p>Prices depend on fabrication materials (SS 304 vs SS 201), the quality of insulation refractories, termostat control accuracy, and capacity size.</p>
        </div>

        <h2>Conclusion</h2>
        <p>Purchasing a commercial oven requires planning around menu concept, capacity, and kitchen space. For custom solutions tailored to your kitchen or to get a direct quote, visit our <a href="/en/contact/">Contact Us</a> page.</p>',
  '<p>Memilih oven pizza komersial yang tepat adalah keputusan krusial bagi kelangsungan usaha kuliner Anda. Baik Anda baru membuka pizzeria otentik, menambahkan menu pizza ke restoran keluarga, atau mengupgrade dapur kafe, pemilihan jenis oven akan menentukan kualitas rasa adonan, kecepatan penyajian, hingga besaran pengeluaran bulanan. Pasar menawarkan beragam jenis tipe, ukuran, kapasitas, dan sumber bahan bakar yang dapat memengaruhi <strong>oven pizza komersial harga</strong> di pasaran. Dalam panduan lengkap ini, kami akan membedah secara mendalam faktor-faktor penting yang harus Anda pertimbangkan agar investasi alat masak Anda tidak terbuang sia-sia.</p>

        <h2>1. Kenali Jenis-Jenis Oven Pizza Komersial</h2>
        <p>Sebelum membahas kisaran <strong>oven pizza komersial harga</strong> di pasar Indonesia, Anda harus memahami empat kategori utama mesin pemanggang pizza yang biasa digunakan di dapur profesional:</p>
        <ul>
          <li><strong>Oven Pizza Batu (Brick / Stone Hearth Oven):</strong> Menggunakan batu tahan api berkualitas untuk menyerap dan memancarkan panas secara radiasi. Sangat ideal untuk menghasilkan pizza bergaya Neapolitan klasik yang memiliki kerak renyah dengan aroma pembakaran kayu yang khas. Oven jenis ini dapat dipanaskan dengan kayu bakar murni, gas, atau kombinasi keduanya. Anda bisa melihat model custom kami di halaman <a href="/id/products/pizza-oven/">Oven Pizza Komersial</a>.</li>
          <li><strong>Oven Dek (Deck Oven):</strong> Menggunakan dek batu tebal di mana pizza diletakkan langsung di atas permukaan batu panas tersebut. Oven ini sangat populer di restoran pizza New York style karena mampu menampung kapasitas besar dan mempertahankan panas dengan sangat baik saat pintu dibuka-tutup.</li>
          <li><strong>Oven Konveksi (Convection Oven):</strong> Memanfaatkan kipas internal untuk memutar udara panas secara merata di dalam ruang pemanggang. Oven jenis ini sangat serbaguna dan ekonomis untuk kafe atau restoran dengan menu pizza sebagai hidangan pendamping saja. Cek detail unit kami di halaman <a href="/id/products/convection-oven/">Oven Konveksi</a>.</li>
          <li><strong>Conveyor Oven:</strong> Menggunakan sabuk berjalan yang membawa pizza melewati terowongan udara panas dengan kecepatan dan suhu konstan. Sangat direkomendasikan untuk restoran cepat saji (fast food) atau layanan pengiriman pizza bervolume tinggi karena tidak membutuhkan keterampilan khusus dari operator.</li>
        </ul>

        <h2>2. Evaluasi Sumber Energi Pemanggang</h2>
        <p>Sumber energi pemanas sangat memengaruhi kecepatan pemanggangan dan profil rasa pizza Anda. Oven berbahan bakar gas adalah pilihan paling umum karena menawarkan pemanasan cepat, kontrol suhu yang mudah, serta biaya operasional yang cenderung lebih murah dibandingkan dengan oven bertenaga listrik berkekuatan besar. Selain itu, Anda harus memastikan bahwa instalasi pipa gas ke kompor dan oven Anda dilakukan oleh teknisi bersertifikat demi keamanan operasional restoran. Jika Anda membutuhkan bantuan setup, Anda dapat membaca informasi lengkap mengenai layanan <a href="/id/services/gas-installation/">Instalasi Gas Dapur Komersial Jakarta</a> kami.</p>

        <h2>3. Faktor Penentu Oven Pizza Komersial Harga</h2>
        <p>Mengapa <strong>oven pizza komersial harga</strong> bisa sangat bervariasi dari belasan juta hingga ratusan juta rupiah? Berikut beberapa variabel utama yang menentukan nilai jual alat pemanggang di pasaran:</p>
        <ul>
          <li><strong>Kualitas Material dan Insulasi:</strong> Oven berkualitas menggunakan Stainless Steel 304 food-grade tebal di bagian luar dan lapisan bata tahan api premium (refractory brick) di bagian dalam. Insulasi yang buruk akan membuat panas terbuang keluar ruangan, menaikkan konsumsi gas/listrik, dan mempercepat kerusakan komponen.</li>
          <li><strong>Kapasitas Produksi (Output):</strong> Kapasitas deck oven dihitung dari berapa banyak pizza ukuran personal (misal diameter 30cm) yang dapat dipanggang secara bersamaan dalam satu waktu. Semakin besar ukuran deck dan jumlah susunannya, semakin tinggi harganya.</li>
          <li><strong>Teknologi Kontrol Suhu:</strong> Sistem kontrol digital dengan termostat presisi tinggi dan pembaca suhu inframerah tentu akan menaikkan harga jual produk dibandingkan dengan sistem analog manual.</li>
        </ul>

        <h2>FAQ Mengenai Oven Pizza Komersial</h2>
        <div class="faq-container">
          <h3>Apa perbedaan utama oven pizza batu dan gas biasa?</h3>
          <p>Oven pizza batu (brick oven) menggunakan batu tahan api yang menahan panas secara konduktif dan radiatif untuk menghasilkan kerak renyah (charred crust) khas pizza Italia. Oven gas biasa tanpa batu umumnya mematangkan adonan menggunakan sirkulasi udara panas saja, sehingga keraknya cenderung lebih lunak.</p>
          
          <h3>Berapa suhu ideal untuk memanggang pizza Neapolitan?</h3>
          <p>Pizza Neapolitan otentik membutuhkan suhu pemanggangan yang sangat tinggi, berkisar antara 450°C hingga 500°C. Pada suhu optimal ini, pizza dapat matang dengan sempurna hanya dalam waktu 60 hingga 90 detik.</p>
          
          <h3>Mengapa oven pizza komersial harga bervariasi sangat jauh?</h3>
          <p>Perbedaan harga dipengaruhi oleh kualitas fabrikasi material (baja tahan karat SS 304 vs SS 201), tebal lapisan batu bata tahan api bagian dalam, keakuratan sistem termostat digital, serta kapasitas ruang pemanggang (jumlah loyang/deck).</p>
          
          <h3>Apakah oven deck lebih baik daripada conveyor oven?</h3>
          <p>Tergantung jenis restoran Anda. Oven deck sangat baik untuk menghasilkan pizza berkualitas tinggi dengan kerak otentik dan membutuhkan pengawasan koki. Conveyor oven lebih cocok untuk pizza cepat saji dengan hasil pemanggangan seragam tanpa perlu diputar manual oleh koki.</p>
        </div>

        <h2>Kesimpulan</h2>
        <p>Membeli alat pemanggang komersial membutuhkan riset mendalam agar sesuai dengan konsep menu, kapasitas produksi, dan ruang dapur Anda. Jika Anda ingin berdiskusi mengenai oven kustom yang dirancang khusus untuk restoran Anda atau membutuhkan penawaran harga terbaik, jangan ragu untuk menghubungi tim ahli kami melalui halaman <a href="/id/contact/">Hubungi Kami</a>.</p>',
  '/images/products/pizza-oven.webp',
  '2026-06-16',
  '5 min read'
);
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  4,
  'biaya-instalasi-gas-dapur-restoran',
  'How Much Does Restaurant Gas Installation Cost in Jakarta?',
  'Berapa Biaya Instalasi Gas Dapur Restoran di Jakarta?',
  'Plan your commercial kitchen layout safely. Learn about cost factors, price estimations table, and overall gas installation cost in Jakarta.',
  'Rencanakan dapur komersial Anda dengan aman. Pelajari rincian faktor penentu, tabel estimasi harga, dan total biaya instalasi gas dapur restoran di Jakarta.',
  '<p>Safety is the primary priority when designing a commercial kitchen. One of the most critical aspects requiring professional expertise is the gas piping system. A minor gas leak in a busy restaurant kitchen can lead to catastrophic business losses. Understanding the structure of your budget for <strong>restaurant kitchen gas installation cost</strong> is essential for any food business owner in the Jakarta region.</p>

        <h2>Why Commercial Kitchen Gas Installation Needs Specialized Piping</h2>
        <p>Many startup restaurateurs try to save money by using cheap flexible hoses. However, safety standards in Jakarta mandate high-strength metal piping (Black Steel Schedule 40 or thick copper pipes). These pipes require certified welding or high-pressure threaded fitting connections. Modern safety setups also utilize automatic gas leak detector sensors, shut-off solenoid valves, and pressure leakage testing. All of these configurations dictate the final project budget.</p>

        <h2>Key Cost Determinants</h2>
        <p>The total project quote is heavily influenced by the following variables:</p>
        <ul>
          <li><strong>Piping Run Length:</strong> The distance from the outdoor gas cylinder manifold station to the indoor cooking lines. Longer routes require more raw pipes and fittings.</li>
          <li><strong>Number of Appliance Drops:</strong> Every stove burner drop like a <a href="/en/products/wok-range/">wok range stainless Jakarta</a>, deep fryer, or commercial oven requires its own control ball valve and regulator drops.</li>
          <li><strong>Safety Control Panels:</strong> Installing automatic solenoid shut-off systems linked to leak detectors increases initial investment but provides peace of mind and strict legal compliance.</li>
        </ul>

        <h2>Estimated Gas Installation Pricing Table in Jakarta</h2>
        <p>Here is a cost estimation table for gas installation materials and services in Jakarta:</p>
        
        <table class="prices-table" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="border-bottom: 2px solid var(--light-blue); background-color: rgba(91,164,217,0.05);">
              <th style="padding: 12px; text-align: left; font-weight: 700;">Description</th>
              <th style="padding: 12px; text-align: left; font-weight: 700;">Unit</th>
              <th style="padding: 12px; text-align: right; font-weight: 700;">Estimated Cost (IDR)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Seamless Black Pipe Sch 40 (1" - 1.5")</td>
              <td style="padding: 12px;">Per Meter</td>
              <td style="padding: 12px; text-align: right;">Rp 280,000 - Rp 420,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Pipe Connection & Welding Labor</td>
              <td style="padding: 12px;">Per Meter</td>
              <td style="padding: 12px; text-align: right;">Rp 100,000 - Rp 150,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Flexible Stainless Steel Gas Hose</td>
              <td style="padding: 12px;">Per Drop</td>
              <td style="padding: 12px; text-align: right;">Rp 350,000 - Rp 600,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Gas Regulator (Medium / High Pressure)</td>
              <td style="padding: 12px;">Per Drop</td>
              <td style="padding: 12px; text-align: right;">Rp 400,000 - Rp 750,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Automatic Solenoid Cut-Off Valve</td>
              <td style="padding: 12px;">Per System</td>
              <td style="padding: 12px; text-align: right;">Rp 2,800,000 - Rp 4,500,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Gas Leak Detector Control Panel & Sensors</td>
              <td style="padding: 12px;">Per System</td>
              <td style="padding: 12px; text-align: right;">Rp 4,000,000 - Rp 6,500,000</td>
            </tr>
          </tbody>
        </table>

        <h2>Total Project Estimates Based on Kitchen Scale</h2>
        <ol>
          <li><strong>Small Scale (Cafes / Small Outlets):</strong> 2-3 drops, short piping runs under 10m. Expected cost: <strong>Rp 8,000,000 to Rp 15,000,000</strong>.</li>
          <li><strong>Medium Scale (Bistros / Restaurants):</strong> 4-6 drops, 10-25m piping, safety alarm panel. Expected cost: <strong>Rp 18,000,000 to Rp 35,000,000</strong>.</li>
          <li><strong>Large Scale (Hotels / Industrial Catering):</strong> 8+ drops, long large-diameter piping runs, full automatic safety system. Expected cost: <strong>Rp 40,000,000++</strong>.</li>
        </ol>

        <p>If you need comprehensive kitchen design solutions, browse our <a href="/en/services/kitchen-sets/">Restaurant Kitchen Set</a> page to integrate the gas line routing efficiently during initial planning drafts.</p>

        <h2>Hire a Trusted Gas Piping Partner</h2>
        <p>Leaving gas line setups to cheap uncertified laborers poses heavy safety hazards. Ensure your project is done by experienced engineers who perform official pressure leakage checks. Learn about our services at the <a href="/en/services/gas-installation/">Commercial Gas Installation</a> page, or contact us for a custom quote at our <a href="/en/contact/">Contact Us</a> page.</p>',
  '<p>Keselamatan adalah prioritas utama saat mendesain dapur restoran profesional. Salah satu aspek paling vital yang membutuhkan keahlian profesional dan sertifikasi resmi adalah sistem perpipaan gas. Kebocoran gas kecil di area komersial yang sibuk dapat berdampak fatal bagi staf, pelanggan, dan kelangsungan bisnis Anda. Oleh karena itu, pemilik bisnis kuliner wajib memahami secara mendalam struktur pengeluaran dan faktor-faktor penentu dalam menyusun anggaran <strong>biaya instalasi gas dapur restoran</strong> di wilayah Jakarta dan sekitarnya.</p>

        <h2>Mengapa Pemasangan Pipa Gas Dapur Restoran Membutuhkan Biaya Khusus?</h2>
        <p>Banyak pengusaha pemula tergoda untuk menggunakan selang gas biasa demi menekan pengeluaran. Namun, standar regulasi keselamatan di Jakarta mewajibkan dapur komersial menggunakan sistem perpipaan logam permanen yang kuat (pipa besi hitam Schedule 40 atau pipa tembaga seamless tebal). Pipa gas logam ini harus disambung dengan teknik pengelasan atau fitting ulir bertekanan tinggi yang dilapisi sealant khusus tahan panas. Selain pipa utama, sistem gas modern harus dilengkapi dengan perangkat keselamatan seperti solenoid valve otomatis, detektor kebocoran gas (gas leak detectors), katup pemutus darurat, pengatur tekanan (regulator), serta pengujian kebocoran dengan tekanan udara (pressure test). Semua standar keamanan ini memengaruhi perhitungan akhir <strong>biaya instalasi gas dapur restoran</strong>.</p>

        <h2>Faktor Penentu Biaya Instalasi Gas Dapur Restoran</h2>
        <p>Total pengeluaran proyek perpipaan gas dapur Anda sangat ditentukan oleh beberapa faktor berikut:</p>
        <ul>
          <li><strong>Panjang Jalur Pipa:</strong> Dihitung berdasarkan jarak dari ruang tangki/tabung gas (gas station) luar menuju stasiun memasak di dalam dapur. Semakin jauh jalurnya, semakin banyak material pipa dan fitting yang digunakan.</li>
          <li><strong>Jumlah Titik Koneksi Alat Masak:</strong> Setiap kompor gas komersial seperti <a href="/id/products/wok-range/">wok range stainless Jakarta</a>, deep fryer, griddle, atau oven membutuhkan jalur cabang, katup kontrol (ball valve) independen, dan regulator tekanan khusus.</li>
          <li><strong>Sistem Keselamatan Terintegrasi:</strong> Pemasangan panel deteksi kebocoran gas otomatis dengan katup solenoid penutup otomatis meningkatkan biaya investasi awal, namun memberikan keamanan maksimal dan kepatuhan hukum yang kuat.</li>
        </ul>

        <h2>Tabel Estimasi Biaya Instalasi Gas Dapur Restoran di Jakarta</h2>
        <p>Berikut adalah tabel perkiraan biaya komponen material dan jasa instalasi gas komersial standar industri di wilayah Jakarta (harga bersifat estimasi kasar dan dapat berubah sesuai kompleksitas proyek):</p>
        
        <table class="prices-table" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="border-bottom: 2px solid var(--light-blue); background-color: rgba(91,164,217,0.05);">
              <th style="padding: 12px; text-align: left; font-weight: 700;">Deskripsi Komponen / Jasa</th>
              <th style="padding: 12px; text-align: left; font-weight: 700;">Satuan Kerja</th>
              <th style="padding: 12px; text-align: right; font-weight: 700;">Estimasi Harga (IDR)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Pipa Besi Hitam Seamless Sch 40 (Ukuran 1" - 1.5")</td>
              <td style="padding: 12px;">Per Meter</td>
              <td style="padding: 12px; text-align: right;">Rp 280.000 - Rp 420.000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Penyambungan & Pengelasan Pipa Gas</td>
              <td style="padding: 12px;">Per Meter</td>
              <td style="padding: 12px; text-align: right;">Rp 100.000 - Rp 150.000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Flexible Gas Hose Heavy-Duty Stainless Steel</td>
              <td style="padding: 12px;">Per Unit Alat Masak</td>
              <td style="padding: 12px; text-align: right;">Rp 350.000 - Rp 600.000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Gas Regulator (Medium / High Pressure)</td>
              <td style="padding: 12px;">Per Unit Alat Masak</td>
              <td style="padding: 12px; text-align: right;">Rp 400.000 - Rp 750.000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Solenoid Valve Otomatis (Emergency Gas Cut-Off)</td>
              <td style="padding: 12px;">Per Sistem</td>
              <td style="padding: 12px; text-align: right;">Rp 2.800.000 - Rp 4.500.000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Panel Gas Detector Leak System & Sensor</td>
              <td style="padding: 12px;">Per Sistem (3 Sensor)</td>
              <td style="padding: 12px; text-align: right;">Rp 4.000.000 - Rp 6.500.000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px;">Uji Tekanan Pipa (Pressure Test Leakage) & Commissioning</td>
              <td style="padding: 12px;">Per Proyek</td>
              <td style="padding: 12px; text-align: right;">Termasuk dalam Jasa</td>
            </tr>
          </tbody>
        </table>

        <h2>Estimasi Total Anggaran Berdasarkan Skala Dapur</h2>
        <p>Berdasarkan pengalaman kami merancang perpipaan gas dapur komersial di kawasan Jakarta, berikut adalah perkiraan total anggaran kasar yang dibutuhkan:</p>
        <ol>
          <li><strong>Skala Kecil (Kafe / Depot Makanan kecil):</strong> Menggunakan 2-3 unit alat masak dengan panjang pipa di bawah 10 meter. Perkiraan biaya berkisar antara <strong>Rp 8.000.000 hingga Rp 15.000.000</strong>.</li>
          <li><strong>Skala Menengah (Restoran Rata-rata / Bistro):</strong> Menggunakan 4-6 unit alat masak dengan panjang pipa 10-25 meter serta dilengkapi sistem alarm keselamatan kebocoran gas. Perkiraan biaya berkisar antara <strong>Rp 18.000.000 hingga Rp 35.000.000</strong>.</li>
          <li><strong>Skala Besar (Dapur Hotel / Catering Industri):</strong> Menggunakan lebih dari 8 unit alat masak, jalur pipa panjang dengan diameter besar, sistem keselamatan otomatis penuh, dan sertifikasi uji kebocoran resmi. Perkiraan biaya mulai dari <strong>Rp 40.000.000++</strong>.</li>
        </ol>

        <p>Jika Anda tertarik untuk berdiskusi mengenai layout dapur restoran Anda, Anda dapat meninjau penawaran komprehensif kami untuk layanan <a href="/id/services/kitchen-sets/">Jasa Kitchen Set Restoran Jakarta</a> guna mengintegrasikan perpipaan gas secara rapi sejak tahap rancangan awal.</p>

        <h2>Hubungi Ahli Instalasi Gas Terpercaya</h2>
        <p>Menyerahkan instalasi gas kepada kontraktor abal-abal sangat berbahaya. Pastikan proyek Anda dikerjakan oleh tim insinyur berpengalaman yang memberikan sertifikasi uji tekanan pipa resmi untuk menjamin keselamatan bisnis kuliner Anda. Dapatkan informasi detail mengenai layanan perpipaan gas profesional kami di halaman khusus <a href="/id/services/gas-installation/">Instalasi Gas Dapur Komersial Jakarta</a> atau kirimkan denah dapur Anda untuk mendapatkan proposal penawaran harga gratis melalui halaman <a href="/id/contact/">Hubungi Kami</a>.</p>',
  '/images/services/gas-installation.webp',
  '2026-06-16',
  '5 min read'
);
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  5,
  'perbedaan-wok-range-dan-kwali-range',
  'Differences Between Wok Range and Kwali Range: Which is Right?',
  'Perbedaan Wok Range dan Kwali Range: Mana yang Tepat?',
  'Confused about choosing a commercial stove? Understand the differences, cooking styles, and comparison table for wok range vs kwali range.',
  'Kebingungan memilih kompor restoran? Pahami perbedaan mendasar, fungsi masak, dan tabel perbandingan wok range vs kwali range untuk dapur Anda.',
  '<p>When designing a commercial kitchen, selecting the right stove for your culinary style is key to efficiency. For Asian restaurants, hot stoves are critical tools. However, many owners confuse a wok range with a kwali range. While both feature stainless steel frames with cast iron burner rings, there are differences in function and burner tech between a <strong>wok range vs kwali range</strong>. Let''s compare them to help you choose the right one.</p>

        <h2>What is a Wok Range?</h2>
        <p>A wok range is a high-pressure commercial burner designed for rapid stir-frying (Chinese cooking style). It utilizes jet burners paired with electric air blowers. The blower forces extra air into the burner chamber, creating a jet-like blue flame. This achieves temperatures above 300°C in seconds, producing the caramelized flavor known as "Wok Hei". Browse our product lineup at our <a href="/en/products/wok-range/">Wok Range Stainless Jakarta</a> page.</p>

        <h2>What is a Kwali Range?</h2>
        <p>A kwali range typically features wider cast iron rings designed for cooking large volumes, such as boiling stock, deep frying, or general Indonesian cooking. It operates on medium to high pressure, with or without blowers. The rings accommodate double-handled kwali pans stably. View our builds at our <a href="/en/products/kwali-range/">Kwali Range</a> page.</p>

        <h2>Wok Range vs Kwali Range Comparison Table</h2>
        <p>Here is a detailed comparison table of the specifications between a <strong>wok range vs kwali range</strong>:</p>
        
        <table class="comparison-table" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="border-bottom: 2px solid var(--light-blue); background-color: rgba(91,164,217,0.05);">
              <th style="padding: 12px; text-align: left; font-weight: 700;">Criteria</th>
              <th style="padding: 12px; text-align: left; font-weight: 700;">Wok Range</th>
              <th style="padding: 12px; text-align: left; font-weight: 700;">Kwali Range</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Burner Pressure</td>
              <td style="padding: 12px;">Very High (High-Pressure Jet with Blower)</td>
              <td style="padding: 12px;">Medium to High (Optional Blower)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Cooking Functions</td>
              <td style="padding: 12px;">Fast stir-frying, fried rice, noodle bars</td>
              <td style="padding: 12px;">Boiling broth, large-portion braising, deep frying</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Ring Ring Diameter</td>
              <td style="padding: 12px;">Smaller ring, perfect for single-handle woks</td>
              <td style="padding: 12px;">Wider ring, stable for double-handle large kwali pans</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Wok Hei Effect</td>
              <td style="padding: 12px;">Very Strong (Essential for authentic Chinese stir-fries)</td>
              <td style="padding: 12px;">Medium</td>
            </tr>
          </tbody>
        </table>

        <h2>Which is Best for Your Restaurant?</h2>
        <ul>
          <li>Choose a <strong>Wok Range</strong> if your menu focuses on fast stir-frying, wok tossed noodles, or fried rice menus requiring extreme heat.</li>
          <li>Choose a <strong>Kwali Range</strong> if your culinary concept is buffet catering, Padang food, or large-batch Indonesian cooking requiring double-handled pans for deep frying and boiling stocks.</li>
        </ul>
        <p>If you are planning to build your restaurant kitchen from scratch and want to integrate gas line safety piping properly, check out our <a href="/en/services/kitchen-sets/">Restaurant Kitchen Set</a> page.</p>

        <h2>Contact the Best Commercial Kitchen Equipment Manufacturer</h2>
        <p>For expert advice on burner specs or custom stainless fabrication, contact Limars Teknik Indonesia today. Get a free consultation and project quote at our <a href="/en/contact/">Contact Us</a> page.</p>',
  '<p>Dalam merancang dapur komersial, memilih peralatan memasak yang sesuai dengan menu masakan adalah kunci efisiensi operasional. Bagi restoran yang menyajikan masakan Asia, Tionghoa (Chinese food), maupun hidangan lokal Indonesia, kompor bersuhu tinggi adalah alat tempur utama. Namun, banyak pemilik restoran pemula bingung membedakan antara kompor wok dengan kompor kwali di pasaran. Meskipun keduanya terlihat mirip sebagai dudukan wajan cekung stainless steel, ada beberapa perbedaan fundamental dalam hal fungsi dan sistem kerja yang membedakan <strong>wok range vs kwali range</strong>. Mari kita bedah perbandingannya agar Anda dapat menentukan pilihan yang tepat.</p>

        <h2>Apa itu Wok Range?</h2>
        <p>Wok range adalah kompor komersial bertekanan tinggi (high-pressure) yang didesain khusus untuk teknik memasak cepat khas masakan Tionghoa (stir-frying/tumis cepat). Karakteristik utama dari wok range adalah penggunaan burner jet bertenaga tinggi yang dipadukan dengan blower udara listrik terintegrasi. Blower ini menyemburkan udara tambahan ke dalam ruang pembakaran, menghasilkan semburan api biru terpusat yang sangat panas mirip mesin jet. Ini memungkinkan wajan mencapai suhu di atas 300°C dalam hitungan detik untuk menciptakan efek karamelisasi aroma masakan yang dikenal dengan istilah "Wok Hei". Temukan produk terbaik kami di halaman <a href="/id/products/wok-range/">Wok Range Stainless Jakarta</a>.</p>

        <h2>Apa itu Kwali Range?</h2>
        <p>Kwali range secara tradisional merujuk pada kompor berdiameter dudukan wajan lebih lebar yang dirancang untuk masakan umum volume besar, seperti merebus kaldu, menggoreng dalam porsi besar, atau menumis masakan Indonesia/Asia secara umum. Seringkali kwali range beroperasi pada tekanan sedang (medium pressure) hingga tinggi, dengan atau tanpa blower udara terintegrasi. Desain cincin dudukan kompor kwali biasanya lebih lebar untuk mengakomodasi ukuran kwali nomor besar secara stabil dan aman. Lihat unit produksi kami di halaman khusus <a href="/id/products/kwali-range/">Kompor Kwali Dapur Restoran</a>.</p>

        <h2>Tabel Perbandingan Wok Range vs Kwali Range</h2>
        <p>Untuk memudahkan Anda memahaminya, berikut adalah tabel perbandingan spesifikasi dan kegunaan antara <strong>wok range vs kwali range</strong>:</p>
        
        <table class="comparison-table" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="border-bottom: 2px solid var(--light-blue); background-color: rgba(91,164,217,0.05);">
              <th style="padding: 12px; text-align: left; font-weight: 700;">Kriteria Pembanding</th>
              <th style="padding: 12px; text-align: left; font-weight: 700;">Wok Range</th>
              <th style="padding: 12px; text-align: left; font-weight: 700;">Kwali Range</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Tekanan & Jenis Api</td>
              <td style="padding: 12px;">Sangat Tinggi (High-Pressure Jet dengan Blower)</td>
              <td style="padding: 12px;">Tekanan Sedang hingga Tinggi (Blower opsional)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Kegunaan Masak Utama</td>
              <td style="padding: 12px;">Tumis cepat (stir-fry) bervolume tinggi, mie goreng, nasi goreng</td>
              <td style="padding: 12px;">Merebus soup, menggoreng deep-fry wajan, semur, masakan porsi besar</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Ukuran Ring Dudukan</td>
              <td style="padding: 12px;">Cenderung lebih kecil, pas untuk wajan bertangkai satu (wok)</td>
              <td style="padding: 12px;">Lebih lebar, stabil menampung wajan kuping dua (kwali) ukuran besar</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Efek Wok Hei</td>
              <td style="padding: 12px;">Sangat Kuat (Kunci kelezatan Chinese food)</td>
              <td style="padding: 12px;">Sedang / Standar masakan Asia</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
              <td style="padding: 12px; font-weight: 600;">Konsumsi Gas & Listrik</td>
              <td style="padding: 12px;">Lebih tinggi (butuh daya listrik untuk menggerakkan blower)</td>
              <td style="padding: 12px;">Menengah hingga tinggi (tergantung spesifikasi burner)</td>
            </tr>
          </tbody>
        </table>

        <h2>Mana yang Tepat untuk Dapur Restoran Anda?</h2>
        <p>Menentukan pilihan terbaik antara <strong>wok range vs kwali range</strong> kembali pada konsep menu masakan yang Anda sajikan:</p>
        <ul>
          <li>Pilihlah <strong>Wok Range</strong> jika restoran Anda berfokus pada Chinese food otentik, oriental noodle bar, atau menu nasi goreng cepat saji yang mengutamakan kecepatan tinggi dan efek karamelisasi aroma masakan yang kuat.</li>
          <li>Pilihlah <strong>Kwali Range</strong> jika konsep kuliner Anda adalah katering prasmanan, masakan Padang, warung Sunda, atau masakan Indonesia bervolume besar yang membutuhkan wajan kuping ganda berdiameter besar untuk merebus, menyemur, dan menggoreng lauk dalam porsi melimpah.</li>
        </ul>
        <p>Apabila Anda berencana membangun dapur restoran dari awal dan ingin memastikan tata letak instalasi kompor gas Anda terintegrasi dengan benar, kami sarankan untuk berkonsultasi dengan penyedia jasa terpercaya kami di halaman <a href="/id/services/kitchen-sets/">Jasa Kitchen Set Restoran Jakarta</a>.</p>

        <h2>Hubungi Produsen Peralatan Dapur Komersial Terbaik</h2>
        <p>Apakah Anda masih ragu memilih spesifikasi burner dan ukuran kompor yang pas? Tim ahli teknik Limars Teknik Indonesia siap mendesain dan memfabrikasi kompor stainless steel kustom bergaransi yang paling pas untuk restoran Anda. Hubungi kami untuk berkonsultasi secara gratis dan dapatkan penawaran harga terbaik melalui halaman kontak <a href="/id/contact/">Hubungi Kami</a>.</p>',
  '/images/products/wok-range.webp',
  '2026-06-15',
  '5 min read'
);
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  6,
  'tips-merawat-kitchen-set-stainless-steel',
  'Tips for Maintaining Stainless Steel Kitchen Sets for Longevity',
  'Tips Merawat Kitchen Set Stainless Steel agar Tahan Lama',
  'Prevent rust and maintain commercial kitchen hygiene. Learn how to clean and care for a stainless steel restaurant kitchen set safely.',
  'Mencegah karat dan menjaga kebersihan dapur komersial. Pelajari cara merawat kitchen set restoran berbahan stainless steel dengan benar dan aman.',
  '<p>Food-grade stainless steel is the gold standard in professional kitchens due to its hygiene, durability, and corrosion resistance. However, "stainless" does not mean "stainproof". Without regular care, the protective chromium layer can degrade, leading to rust spots and dullness. Knowing <strong>how to clean restaurant kitchen set</strong> layouts made of stainless steel is essential for extending the lifespan of your kitchen assets.</p>

        <h2>1. Perform Daily Cleaning Routines</h2>
        <p>The most basic maintenance step is cleaning right after operations end. Food acids, salt, and grease can corrode metal if left for too long:</p>
        <ul>
          <li><strong>Use Warm Water & Mild Soap:</strong> Soft dishwashing liquid mixed with warm water is sufficient to clean worktables, shelves, and sink bowls.</li>
          <li><strong>Use Soft Cloths or Non-Abrasive Sponges:</strong> Wipe in the direction of the metal grain lines. Avoid circular rubbing which causes fine scratches.</li>
          <li><strong>Rinse and Dry Immediately:</strong> Tap water left to evaporate leaves mineral deposits (water spots) which dull the finish.</li>
        </ul>

        <h2>2. Avoid Harsh Chemicals and Scratchy Tools</h2>
        <p>Many kitchen staffers mistakenly clean stainless tables with steel wool or bathroom cleaners. This degrades the metal surface:</p>
        <ul>
          <li><strong>Never Use Bleach or Chlorine:</strong> Chlorine breaks down the protective chromium oxide barrier, triggering pitting rust.</li>
          <li><strong>Avoid Steel Wire Brushes:</strong> Steel wool leaves traces of carbon iron behind, which oxidize and form rust on the stainless steel surface. Use nylon scrubbers instead.</li>
        </ul>

        <h2>3. Clean Stubborn Grease and Stains Safely</h2>
        <p>For stubborn grease or hard water scales, utilize safe food-friendly ingredients:</p>
        <ul>
          <li><strong>Baking Soda Paste:</strong> Mix baking soda with water to make a paste. Apply gently onto stains along the grain direction, rinse, and dry.</li>
          <li><strong>White Vinegar:</strong> Spray vinegar on lime scales in sinks, leave for a few minutes, then wipe clean. View our heavy-duty tables at the <a href="/en/products/stainless-sink-table/">Stainless Pre-rinse Sink Table</a> page.</li>
        </ul>

        <p>To upgrade your workspace or customize your setup, visit our <a href="/en/services/kitchen-sets/">Restaurant Kitchen Set</a> page to learn more about our manufacturing standards.</p>

        <h2>Conclusion</h2>
        <p>Consistency in daily non-abrasive cleaning keeps your kitchen equipment shiny and hygienic. For custom steel counter designs or cafe installations, contact our engineers at the <a href="/en/contact/">Contact Us</a> page.</p>',
  '<p>Material baja tahan karat (stainless steel) adalah standar emas di industri kuliner dan dapur komersial profesional. Alasan utamanya adalah sifat higienisnya yang tinggi, ketahanan terhadap korosi, tampilan premium yang bersih, serta durabilitasnya saat menghadapi beban kerja yang berat setiap hari. Namun, kata "tahan karat" bukan berarti "kebal karat". Tanpa pemeliharaan berkala dan teknik pembersihan yang benar, lapisan pelindung kromium oksida pada logam dapat terkikis, memicu timbulnya bercak karat, kekusaman, hingga goresan dalam yang merusak estetika dapur. Bagi pemilik bisnis kuliner, mengetahui <strong>cara merawat kitchen set restoran</strong> berbahan stainless steel adalah kunci menjaga investasi aset dapur tetap awet dan bernilai tinggi dalam jangka panjang.</p>

        <h2>1. Rutin Melakukan Pembersihan Harian</h2>
        <p>Langkah paling mendasar dalam menjaga ketahanan kitchen set restoran adalah pembersihan segera setelah operasional selesai. Sisa bumbu, cipratan minyak, dan tumpahan asam dari bahan makanan (seperti jeruk nipis, cuka, atau tomat) bersifat korosif jika dibiarkan menempel terlalu lama:</p>
        <ul>
          <li><strong>Gunakan Air Hangat dan Sabun Ringan:</strong> Larutan sabun pencuci piring cair yang lembut dipadu dengan air hangat sudah cukup untuk membersihkan kotoran harian pada permukaan meja kerja (worktable), rak, dan sink cuci piring.</li>
          <li><strong>Gunakan Kain Lembut / Spons Non-Abrasif:</strong> Lap permukaan searah dengan serat kuasan logam (grain line). Hindari menggosok melingkar karena dapat menimbulkan goresan halus yang menumpuk lemak.</li>
          <li><strong>Bilas dan Keringkan:</strong> Bilas permukaan dengan air bersih dan segera lap hingga kering menggunakan kain mikrofiber. Air keran yang menguap sendiri akan meninggalkan mineral deposit (water spots) yang membuat stainless steel terlihat kusam.</li>
        </ul>

        <h2>2. Hindari Bahan Kimia dan Alat Gosok yang Merusak</h2>
        <p>Banyak staf dapur salah kaprah menggunakan sikat kawat kasar (steel wool) atau cairan pembersih keramik keras untuk menghilangkan kerak gosong pada kompor atau bak cuci piring. Ini adalah kesalahan fatal dalam <strong>cara merawat kitchen set restoran</strong>:</p>
        <ul>
          <li><strong>Jangan Gunakan Pemutih (Klorin/Bleach):</strong> Klorin sangat korosif terhadap stainless steel dan dapat merusak lapisan pasif pelindung logam dengan sangat cepat, menimbulkan bintik-bintik karat halus (pitting rust).</li>
          <li><strong>Hindari Sikat Kawat Besi:</strong> Menggosok dengan sikat kawat akan meninggalkan partikel besi biasa di permukaan stainless steel Anda. Partikel besi asing inilah yang nantinya akan berkarat dan merusak stainless steel. Gunakan sikat nilon lembut atau spons khusus non-gores.</li>
        </ul>

        <h2>3. Cara Mengatasi Noda Membandel Secara Alami</h2>
        <p>Jika meja stainless steel atau sink cuci piring Anda sudah terlanjur kusam atau terkena noda minyak membandel yang sulit hilang dengan sabun biasa, Anda dapat menggunakan bahan ramah lingkungan yang aman untuk makanan:</p>
        <ul>
          <li><strong>Pasta Baking Soda:</strong> Campurkan baking soda dengan sedikit air hingga membentuk pasta kental. Gosokkan pasta ini dengan lembut pada noda membandel searah serat logam menggunakan spons nilon, lalu bilas dan keringkan.</li>
          <li><strong>Cairan Cuka Putih:</strong> Semprotkan sedikit cuka putih pada noda kerak air di bak cuci piring, diamkan beberapa menit, lalu lap bersih dengan kain lembut. Cuka membantu mengikis mineral deposit tanpa merusak permukaan logam. Cek model meja cuci higienis kami di halaman <a href="/id/products/stainless-sink-table/">Meja Sink Cuci Piring Stainless Jakarta</a>.</li>
        </ul>

        <p>Jika Anda sedang menyusun rencana penataan ulang dapur atau membutuhkan setup meja kerja stainless steel kustom tahan karat berkualitas tinggi, jelajahi layanan fabrikasi kami di halaman <a href="/id/services/kitchen-sets/">Jasa Kitchen Set Restoran Jakarta</a>.</p>

        <h2>Kesimpulan</h2>
        <p>Konsistensi dalam pembersihan harian menggunakan metode non-abrasif adalah kunci utama menjaga peralatan dapur komersial Anda tetap mengkilap, higienis, dan tahan lama hingga puluhan tahun. Untuk berkonsultasi mengenai pembuatan kitchen set stainless kustom atau instalasi counter kafe kustom yang awet, silakan hubungi tim teknik terpercaya kami melalui halaman kontak <a href="/id/contact/">Hubungi Kami</a>.</p>',
  '/images/services/kitchen-set.webp',
  '2026-06-15',
  '5 min read'
);
INSERT INTO blog_posts (id, slug, title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, image, date, read_time) VALUES (
  7,
  'panduan-sistem-ducting-dapur-komersial',
  'Complete Guide to Commercial Kitchen Ducting Systems',
  'Panduan Lengkap Sistem Ducting Dapur Komersial',
  'Ensure clean air and smoke-free dining. Learn about the mechanics, safety regulations, and layout design of commercial kitchen ducting systems in Jakarta.',
  'Udara bersih dan bebas asap di restoran Anda. Pelajari cara kerja, regulasi teknis, dan rancangan sistem ducting dapur komersial Jakarta yang benar.',
  '<p>A busy commercial kitchen generates heavy smoke, vaporized grease, high moisture, and intense heat during peak hours. Without proper ventilation, the kitchen becomes suffocating and poses fire hazards. Accumulation of grease inside ducts is a leading cause of commercial fires. Pemasangan of high-efficiency exhaust hoods and grease ducting is strictly regulated by building codes. This guide discusses <strong>ducting dapur komersial Jakarta</strong> design standards to maintain safety and staff comfort.</p>

        <h2>How Does a Commercial Kitchen Exhaust Duct System Work?</h2>
        <p>Commercial kitchen ventilation works via balanced air exhaust and fresh air intake. The main components are:</p>
        <ul>
          <li><strong>Exhaust Hoods:</strong> Stainless steel hoods placed above hot ranges (like wok stoves, fryers, griddles) to capture hot grease using washable metal grease filters.</li>
          <li><strong>Exhaust Ducts:</strong> Heavy-gauge metal duct pipelines (minimum 1.2mm galvanized steel or stainless steel) routing dirty air outside. Joints must be sealed with fire-rated sealant.</li>
          <li><strong>Exhaust Fans:</strong> Powerful centrifugal blowers placed on building rooftops to pull hot grease and smoke through the duct runs.</li>
          <li><strong>Make-Up Air (MUA) Intake:</strong> Air supply fans bringing fresh outdoor air back into the kitchen to replace exhausted air volume. Proper air balance prevents vacuum drafts.</li>
        </ul>

        <h2>Regulatory Compliance for Kitchen Ducting in Jakarta</h2>
        <p>In Jakarta, fire departments and city planners strictly monitor grease exhaust installations, especially inside malls, office towers, or high-density districts:</p>
        <ul>
          <li><strong>Fire-Resistant and Leak-Proof Construction:</strong> PVC or thin tin conduits are illegal for grease extraction. Heavy galvanized steel is required to withstand extreme heat.</li>
          <li><strong>Carbon Filters for Odor Mitigation:</strong> Densely populated areas in Jakarta often require electrostatic precipitators (ESP) or active carbon filters to neutralize smoke and odors before they are discharged.</li>
          <li><strong>Regular Duct Cleaning:</strong> Regulations mandate periodic duct cleaning every 6 months to minimize grease accumulation and fire risks.</li>
        </ul>

        <p>Proper duct planning aligns with the thermal output of your kitchen range. Learn about our ranges at the <a href="/en/products/wok-range/">Wok Range Stainless Jakarta</a> product page to match exhaust capacity with cooking heat output.</p>

        <h2>Design Your Ventilation System with Limars Teknik</h2>
        <p>Sizing the exhaust fan incorrectly leads to smoke filling the customer dining area. Leave your ventilation calculations to our engineers who understand duct layout static pressure calculations. Read about our services at the <a href="/en/services/ducting/">Restaurant Ducting Service Jakarta</a> page, or contact us for a free site assessment at our <a href="/en/contact/">Contact Us</a> page.</p>',
  '<p>Dapur komersial yang sibuk menghasilkan asap tebal, partikel lemak menguap, kelembapan tinggi, panas berlebih, dan bau masakan menyengat setiap kali koki memasak. Tanpa sistem tata udara yang memadai, dapur akan menjadi sangat panas, pengap, berbau tidak sedap, dan membahayakan kesehatan staf. Lebih parah lagi, tumpukan uap lemak di saluran udara adalah pemicu kebakaran utama pada gedung bertingkat. Oleh karena itu, pemasangan sistem pembuangan asap dapur (exhaust hood & ducting) berkinerja tinggi adalah hal mutlak yang diatur ketat oleh hukum bangunan di Indonesia. Artikel ini akan membahas panduan lengkap perancangan sistem <strong>ducting dapur komersial Jakarta</strong> agar mematuhi standar keselamatan dan memberikan kenyamanan maksimal bagi bisnis kuliner Anda.</p>

        <h2>Bagaimana Cara Kerja Sistem Ducting Dapur Komersial?</h2>
        <p>Sistem ventilasi dapur komersial modern bekerja melalui kombinasi penarikan udara kotor dan pemasukan udara segar secara seimbang. Komponen utamanya meliputi:</p>
        <ul>
          <li><strong>Exhaust Hood (Kondensor Asap):</strong> Tudung logam stainless steel yang dipasang tepat di atas peralatan memasak bersuhu tinggi (seperti kompor wajan, penggorengan, griddle). Berfungsi menangkap uap panas, asap, dan partikel lemak menggunakan filter lemak (grease filters) logam yang mudah dicuci.</li>
          <li><strong>Exhaust Duct (Saluran Pembuangan):</strong> Pipa corong logam tebal (biasanya menggunakan plat galvanis tebal minimal 1.2mm atau stainless steel) yang mengalirkan udara kotor dari exhaust hood keluar gedung. Sambungan duct harus dilapisi sealant silikon tahan api agar lemak cair tidak bocor ke luar pipa.</li>
          <li><strong>Exhaust Fan (Blower Penarik):</strong> Kipas sentrifugal berdaya besar yang diletakkan di ujung luar sistem (biasanya di atap gedung / rooftop) untuk menghisap udara kotor melewati sepanjang jalur pipa ducting.</li>
          <li><strong>Make-up Air System (Fresh Air Intake):</strong> Kipas pendorong udara segar yang memasukkan udara bersih dari luar gedung kembali ke dalam dapur untuk menggantikan volume udara yang ditarik keluar oleh exhaust fan. Keseimbangan udara (air balance) sangat penting agar pintu restoran tidak sulit dibuka akibat tekanan udara negatif di dalam ruangan.</li>
        </ul>

        <h2>Pentingnya Kepatuhan Regulasi Ducting Dapur Komersial Jakarta</h2>
        <p>Di wilayah DKI Jakarta, dinas pemadam kebakaran dan instansi terkait melakukan pengawasan ketat terhadap sistem ducting dapur komersial, terutama untuk restoran yang berada di dalam mall, gedung perkantoran, atau ruko padat penduduk:</p>
        <ul>
          <li><strong>Bahan Anti Api dan Tahan Bocor:</strong> Saluran ducting lemak (grease duct) tidak boleh menggunakan pipa PVC atau seng tipis biasa. Plat galvanis tebal wajib digunakan demi menahan suhu tinggi saat terjadi kebakaran di area memasak.</li>
          <li><strong>Penggunaan Grease Trap & Filter Karbon:</strong> Di area Jakarta yang padat, udara pembuangan sering kali harus melewati filter karbon aktif atau scrubber air terlebih dahulu untuk mereduksi bau masakan menyengat sebelum dilepas bebas ke udara pemukiman sekitar, menghindari protes warga tetangga.</li>
          <li><strong>Perawatan Berkala (Duct Cleaning):</strong> Regulasi mewajibkan pembersihan lemak di dalam saluran ducting secara berkala minimal 6 bulan sekali untuk mencegah bahaya kebakaran lemak (grease fire).</li>
        </ul>

        <p>Perancangan ducting yang baik harus dilakukan bersamaan dengan tata letak kompor bersuhu tinggi di dapur Anda. Pelajari spesifikasi kompor kami di halaman produk <a href="/id/products/wok-range/">Wok Range Stainless Jakarta</a> untuk menyelaraskan kapasitas hisapan exhaust hood dengan besaran output panas kompor.</p>

        <h2>Rancang Sistem Ducting Anda Bersama Limars Teknik</h2>
        <p>Kesalahan dalam merancang kapasitas blower exhaust fan (under-capacity) akan membuat asap tetap mengepul memenuhi area makan pelanggan Anda. Percayakan rancangan ventilasi dapur Anda kepada teknisi bersertifikat kami yang mengerti perhitungan air change rate dan static pressure. Dapatkan informasi detail mengenai layanan perancangan kami di halaman khusus <a href="/id/services/ducting/">Jasa Ducting Restoran Jakarta</a> atau ajukan survei lokasi gratis dengan menghubungi tim kami melalui halaman <a href="/id/contact/">Hubungi Kami</a>.</p>',
  '/images/services/ducting.webp',
  '2026-06-15',
  '5 min read'
);
