-- PT. Limars Teknik Indonesia - D1 Database Seed Data

-- SEED PRODUCTS
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  1,
  'wok-range',
  'Wok Range',
  'Kompor Wajan (Wok Range)',
  'Traditional Stoves',
  'Kompor Tradisional',
  'Professional wok range for high-heat Asian cooking.',
  'Kompor wajan profesional untuk masakan Asia dengan panas tinggi.',
  'High-performance wok range designed for Asian cuisine. Built with heavy-duty stainless steel and powerful burners for intense heat cooking.',
  'Kompor wajan berkinerja tinggi yang dirancang untuk masakan Asia. Dibangun dengan baja tahan karat (stainless steel) tugas berat dan pembakar bertenaga untuk memasak dengan panas tinggi.',
  '{"material":"Stainless Steel 304","burners":{"en":"2-4 Burners","id":"2-4 Tungku"},"btuOutput":"80,000 - 160,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"1200 x 800 x 850 mm"}',
  '/images/products/wok-range.png',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  2,
  'kwali-range',
  'Kwali Range',
  'Kompor Kwali',
  'Traditional Stoves',
  'Kompor Tradisional',
  'Traditional kwali range for commercial kitchens.',
  'Kompor kwali tradisional untuk dapur komersial.',
  'Traditional kwali range perfect for Indonesian and Chinese cooking. Features adjustable flame control and robust construction for daily commercial use.',
  'Kompor kwali tradisional yang sempurna untuk masakan Indonesia dan Tionghoa. Memiliki fitur pengatur api yang dapat disesuaikan dan konstruksi tangguh untuk penggunaan komersial sehari-hari.',
  '{"material":"Stainless Steel 304","burners":{"en":"1-3 Burners","id":"1-3 Tungku"},"btuOutput":"60,000 - 120,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"900 x 800 x 850 mm"}',
  '/images/products/kwali-range.png',
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
  'Kompor khusus masakan Tionghoa dengan pancuran air terjun dan pembakar berdaya tinggi. Ideal untuk menumis, menggoreng kering, dan mengukus.',
  '{"material":"Stainless Steel 304","burners":{"en":"1-6 Burners","id":"1-6 Tungku"},"btuOutput":"100,000 - 200,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"1800 x 900 x 850 mm"}',
  '/images/products/chinese-cooking-range.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  4,
  'pizza-oven',
  'Pizza Oven',
  'Oven Pizza',
  'Regional Ovens',
  'Oven Regional',
  'Stone hearth pizza oven for authentic results.',
  'Oven pizza tungku batu untuk hasil otentik.',
  'Authentic pizza oven with stone hearth and dome construction. Achieves temperatures up to 500°C for perfect Neapolitan-style pizzas.',
  'Oven pizza otentik dengan tungku batu dan konstruksi kubah. Mencapai suhu hingga 500°C untuk pizza bergaya Neapolitan yang sempurna.',
  '{"material":{"en":"Stainless Steel + Refractory Brick","id":"Baja Tahan Karat + Bata Tahan Api"},"capacity":{"en":"4-12 Pizzas","id":"4-12 Pizza"},"maxTemperature":"500°C","fuelType":{"en":"Gas / Wood","id":"Gas / Kayu Bakar"},"dimensions":"1500 x 1200 x 1800 mm"}',
  '/images/products/pizza-oven.png',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  5,
  'tandoor-oven',
  'Tandoor Oven',
  'Oven Tandoor',
  'Regional Ovens',
  'Oven Regional',
  'Clay-lined tandoor for authentic Indian cuisine.',
  'Tandoor berlapis tanah liat untuk masakan India otentik.',
  'Traditional tandoor oven for Indian and Middle Eastern cuisine. Clay-lined interior for authentic naan bread and tandoori dishes.',
  'Oven tandoor tradisional untuk masakan India dan Timur Tengah. Bagian dalam berlapis tanah liat untuk roti naan dan hidangan tandoori yang otentik.',
  '{"material":{"en":"Stainless Steel + Clay Lining","id":"Baja Tahan Karat + Lapisan Tanah Liat"},"maxTemperature":"480°C","fuelType":{"en":"Gas / Charcoal","id":"Gas / Arang"},"dimensions":"800 x 800 x 1100 mm"}',
  '/images/products/tandoor-oven.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  6,
  'brick-oven',
  'Brick Oven',
  'Oven Bata',
  'Regional Ovens',
  'Oven Regional',
  'Custom brick oven for artisan baking.',
  'Oven bata kustom untuk memanggang artisan.',
  'Custom-built brick oven with excellent heat retention. Perfect for artisan bread, pizza, and roast dishes with authentic wood-fired flavor.',
  'Oven bata rancangan khusus dengan retensi panas yang sangat baik. Sempurna untuk roti artisan, pizza, dan hidangan panggang dengan rasa pembakaran kayu otentik.',
  '{"material":{"en":"Refractory Brick + Steel Frame","id":"Bata Tahan Api + Rangka Baja"},"maxTemperature":"450°C","fuelType":{"en":"Wood / Gas","id":"Kayu Bakar / Gas"},"dimensions":{"en":"Custom","id":"Sesuai Pesanan"}}',
  '/images/products/brick-oven.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  7,
  'convection-oven',
  'Convection Oven',
  'Oven Konveksi',
  'Modern Ovens',
  'Oven Modern',
  'Precision convection oven for commercial use.',
  'Oven konveksi presisi untuk penggunaan komersial.',
  'Professional convection oven with precise temperature control and even heat distribution. Ideal for baking, roasting, and reheating in commercial kitchens.',
  'Oven konveksi profesional dengan kontrol suhu presisi dan distribusi panas merata. Ideal untuk memanggang roti, daging, dan memanaskan makanan di dapur komersial.',
  '{"material":"Stainless Steel 304","capacity":{"en":"5-10 Trays","id":"5-10 Nampan"},"temperatureRange":"50°C - 300°C","power":{"en":"Electric / Gas","id":"Listrik / Gas"},"dimensions":"800 x 700 x 1500 mm"}',
  '/images/products/convection-oven.png',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  8,
  'deck-oven',
  'Deck Oven',
  'Oven Dek (Deck Oven)',
  'Modern Ovens',
  'Oven Modern',
  'Multi-deck oven for bakeries and pastry shops.',
  'Oven multi-dek untuk toko roti dan kue.',
  'Multi-deck oven for bakeries and pastry shops. Stone deck provides superior heat transfer for crispy bread crusts and perfectly baked pastries.',
  'Oven multi-dek untuk toko roti dan kue. Dek batu memberikan perpindahan panas superior untuk kerak roti yang renyah dan kue yang dipanggang dengan sempurna.',
  '{"material":"Stainless Steel 304","decks":{"en":"2-4 Decks","id":"2-4 Dek"},"temperatureRange":"50°C - 350°C","power":{"en":"Electric / Gas","id":"Listrik / Gas"},"dimensions":"1200 x 900 x 1600 mm"}',
  '/images/products/deck-oven.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  9,
  'combi-oven',
  'Combi Oven',
  'Oven Combi',
  'Modern Ovens',
  'Oven Modern',
  'Versatile combi oven with steam and convection.',
  'Oven combi serbaguna dengan uap dan konveksi.',
  'Advanced combi oven combining steam and convection cooking. Programmable recipes, automatic cleaning, and versatile cooking modes for maximum kitchen efficiency.',
  'Oven combi tingkat lanjut yang menggabungkan metode memasak uap dan konveksi. Resep yang dapat diprogram, pembersihan otomatis, dan mode memasak serbaguna untuk efisiensi dapur yang maksimal.',
  '{"material":"Stainless Steel 304","capacity":{"en":"6-20 GN Trays","id":"6-20 Nampan GN"},"modes":{"en":"Steam / Convection / Combi","id":"Uap / Konveksi / Combi"},"power":{"en":"Electric / Gas","id":"Listrik / Gas"},"dimensions":"900 x 800 x 1800 mm"}',
  '/images/products/combi-oven.png',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  10,
  'commercial-griddle',
  'Commercial Griddle',
  'Wajan Datar Komersial (Griddle)',
  'Kitchen Equipment',
  'Perlengkapan Dapur',
  'Heavy-duty griddle for high-volume cooking.',
  'Wajan datar tugas berat untuk memasak volume tinggi.',
  'Heavy-duty flat-top griddle for high-volume cooking. Uniform heat distribution and easy-to-clean surface for grilling, searing, and breakfast preparation.',
  'Wajan datar tugas berat untuk memasak dalam volume tinggi. Distribusi panas seragam dan permukaan yang mudah dibersihkan untuk memanggang daging dan persiapan sarapan.',
  '{"material":{"en":"Stainless Steel + Chrome Surface","id":"Baja Tahan Karat + Permukaan Krom"},"surfaceArea":"600 x 400 mm - 1200 x 600 mm","power":{"en":"Gas / Electric","id":"Gas / Listrik"}}',
  '/images/products/gas-griddle.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  11,
  'deep-fryer',
  'Deep Fryer',
  'Penggorengan (Deep Fryer)',
  'Kitchen Equipment',
  'Perlengkapan Dapur',
  'Commercial deep fryer with precise control.',
  'Penggorengan komersial dengan presisi tinggi.',
  'Commercial deep fryer with precise temperature control and safety features. Available in single and double tank configurations.',
  'Penggorengan komersial dengan kontrol suhu presisi dan fitur keselamatan. Tersedia dalam konfigurasi tangki tunggal dan ganda.',
  '{"material":"Stainless Steel 304","capacity":{"en":"8-25 Liters","id":"8-25 Liter"},"power":{"en":"Gas / Electric","id":"Gas / Listrik"}}',
  '/images/products/gas-deep-fryer.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  12,
  'bain-marie',
  'Bain Marie',
  'Pemanas Makanan (Bain Marie)',
  'Kitchen Equipment',
  'Perlengkapan Dapur',
  'Food warmer for buffet and serving stations.',
  'Penghangat makanan untuk prasmanan.',
  'Stainless steel bain marie for keeping food warm and at safe serving temperatures. Multiple pan configurations available.',
  'Pemanas makanan baja tahan karat untuk menjaga makanan tetap hangat dan pada suhu penyajian yang aman. Tersedia berbagai konfigurasi nampan.',
  '{"material":"Stainless Steel 304","pans":{"en":"3-6 GN Pans","id":"3-6 Nampan GN"},"power":{"en":"Electric","id":"Listrik"}}',
  '/images/products/hotel-bain-marie.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  13,
  'custom-coffee-bar-counter',
  'Custom Coffee Bar Counter',
  'Meja Bar Kopi Kustom',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Premium custom stainless steel coffee bar station.',
  'Stasiun meja bar kopi baja tahan karat premium kustom.',
  'Premium custom-built stainless steel coffee bar counter featuring built-in knock boxes, under-counter storage, sink stations, and dedicated space for espresso machines. Tailored specifically to your cafe layout.',
  'Meja bar kopi baja tahan karat kustom premium yang dilengkapi kotak ampas kopi bawaan (knock box), penyimpanan bawah meja, stasiun cuci piring, dan ruang khusus untuk mesin espresso. Disusun khusus untuk tata letak kafe Anda.',
  '{"material":"Stainless Steel 304 / 316","customizable":{"en":"Fully Customizable Layout","id":"Tata Letak Bebas Disesuaikan"},"features":{"en":"Sinks, Knock Boxes, Ice Bins","id":"Wastafel, Knock Box, Tempat Es"},"dimensions":{"en":"Customizable per Cafe Space","id":"Menyesuaikan Ruang Kafe"}}',
  '/images/products/coffee-bar-counter.png',
  1
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  14,
  'pastry-display-warmer',
  'Pastry Display Warmer',
  'Etalase Pemanas Kue (Pastry Warmer)',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Elegant curved-glass pastry and food display warmer.',
  'Etalase pemanas pajangan makanan dan kue kaca melengkung yang elegan.',
  'Commercial curved-glass pastry display warmer with an elegant stainless steel finish. Perfect for bakeries and coffee shops offering warm croissants, pies, and savory treats with bright LED illumination.',
  'Etalase pemanas kue kaca melengkung komersial dengan lapisan luar baja tahan karat yang elegan. Sempurna untuk toko roti dan kedai kopi yang menawarkan croissant hangat, pai, dan camilan gurih dengan pencahayaan LED yang cerah.',
  '{"material":{"en":"Stainless Steel + Tempered Glass","id":"Baja Tahan Karat + Kaca Tempered"},"shelves":{"en":"2-4 Adjustable Shelves","id":"2-4 Rak yang dapat disesuaikan"},"temperatureRange":"30°C - 85°C","power":{"en":"Electric","id":"Listrik"}}',
  '/images/products/pastry-display-warmer.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  15,
  'automatic-water-boiler',
  'Automatic Water Boiler',
  'Mesin Pemanas Air Otomatis',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Heavy-duty automatic hot water dispenser with digital control.',
  'Mesin dispenser air panas otomatis tugas berat dengan kontrol digital.',
  'Heavy-duty automatic hot water dispenser/boiler built for continuous commercial use in busy cafes and tea houses. Precise digital temperature control ensures perfect extractions every time.',
  'Mesin dispenser/pemanas air panas otomatis tugas berat yang dibuat untuk penggunaan komersial tersu-menerus di kafe dan kedai teh yang sibuk. Kontrol suhu digital presisi memastikan ekstraksi yang sempurna setiap saat.',
  '{"material":"Stainless Steel 304","capacity":{"en":"10-30 Liters","id":"10-30 Liter"},"temperatureControl":{"en":"Digital Precision Thermostat","id":"Termostat Digital Presisi"},"power":{"en":"Electric","id":"Listrik"}}',
  '/images/products/automatic-water-boiler.png',
  0
);
INSERT INTO products (id, slug, name_en, name_id, category_en, category_id, short_description_en, short_description_id, description_en, description_id, specs, image, featured) VALUES (
  16,
  'stainless-sink-table',
  'Stainless Pre-rinse Sink Table',
  'Meja Sink Cuci Piring Stainless',
  'Coffee Shop Equipment',
  'Peralatan Kedai Kopi',
  'Durable multi-compartment sink table for busy kitchens.',
  'Meja cuci multi-kompartemen tahan lama untuk dapur sibuk.',
  'Durable multi-compartment stainless steel sink table with a tall splashback. Designed for heavy dishwashing traffic in commercial food prep areas and cafe back-houses.',
  'Meja bak cuci piring (sink) baja tahan karat multi-kompartemen yang tahan lama dengan penyekat percikan air yang tinggi. Dirancang untuk arus pencucian piring yang berat di area persiapan makanan komersial dan dapur belakang kafe.',
  '{"material":"Heavy Gauge Stainless Steel 304","bowls":{"en":"1-3 Compartments","id":"1-3 Kompartemen Bak"},"features":{"en":"High Backsplash, Adjustable Bullet Feet","id":"Pelindung Percikan Tinggi, Kaki-kaki yang Dapat Disetel"},"dimensions":{"en":"Custom Sizes Available","id":"Tersedia Ukuran Kustom"}}',
  '/images/products/stainless-sink-table.png',
  0
);

-- SEED PROJECTS
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
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
  '/images/projects/project-1-new.png',
  '[{"en":"Kitchen layout & 3D design","id":"Desain layout & 3D dapur"},{"en":"Custom stainless fabrication","id":"Fabrikasi stainless kustom"},{"en":"Hot kitchen & cold storage prep","id":"Persiapan dapur panas & pendingin"},{"en":"Commercial exhaust integration","id":"Integrasi exhaust komersial"}]',
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
  2,
  'central-al-jazeerah-arab-bread-oven',
  'Central Al-Jazeerah Traditional Arab Bread Oven',
  'Pembuatan Oven Roti Arab Tradisional Central Al-Jazeerah',
  'Oven Installation',
  'Instalasi Oven',
  'Jakarta',
  'Jakarta',
  'Custom traditional Arab bread oven fabrication and installation for Central Al-Jazeerah restaurant.',
  'Fabrikasi dan instalasi oven roti Arab tradisional khusus untuk restoran Central Al-Jazeerah.',
  '/images/projects/project-2-new.png',
  '[{"en":"Custom Arab bread oven design","id":"Desain oven roti Arab kustom"},{"en":"Refractory brick installation","id":"Instalasi bata tahan api"},{"en":"Gas piping & burner calibration","id":"Pipa gas & kalibrasi burner"},{"en":"Heat retention testing","id":"Pengujian retensi panas"}]',
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
  3,
  'al-jazeerah-polonia-arab-bread-oven',
  'Al-Jazeerah Polonia Traditional Arab Bread Oven',
  'Pembuatan Oven Roti Tradisional Arab Al-Jazeerah Polonia',
  'Oven Installation',
  'Instalasi Oven',
  'Jakarta',
  'Jakarta',
  'Custom traditional Arab bread oven fabrication and installation for Al-Jazeerah Polonia.',
  'Fabrikasi dan instalasi oven roti tradisional Arab khusus untuk Al-Jazeerah Polonia.',
  '/images/projects/project-3-new.png',
  '[{"en":"Traditional oven design","id":"Desain oven tradisional"},{"en":"Refractory brick installation","id":"Instalasi bata tahan api"},{"en":"Gas piping & burner","id":"Pipa gas & burner"},{"en":"Testing and commissioning","id":"Pengujian dan commissioning"}]',
  1
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
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
  '/images/projects/project-4-new.png',
  '[{"en":"Italian stone hearth design","id":"Desain tungku batu Italia"},{"en":"High-temperature brickwork","id":"Konstruksi bata suhu tinggi"},{"en":"Gas heating system setup","id":"Pengaturan sistem pemanas gas"},{"en":"Chimney & ventilation","id":"Cerobong asap & ventilasi"}]',
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
  5,
  'zahra-al-jazeerah-arab-bread-oven',
  'Zahra Al-Jazeerah Traditional Arab Bread Oven',
  'Pembuatan Oven Roti Arab Tradisional Zahra Al-Jazeerah',
  'Oven Installation',
  'Instalasi Oven',
  'Puncak Bogor',
  'Puncak Bogor',
  'Custom traditional Arab bread oven fabrication and installation for Zahra Al-Jazeerah restaurant in Puncak Bogor.',
  'Fabrikasi dan instalasi oven roti Arab tradisional khusus untuk restoran Zahra Al-Jazeerah di Puncak Bogor.',
  '/images/projects/project-5-new.png',
  '[{"en":"Traditional Arab oven design","id":"Desain oven Arab tradisional"},{"en":"Custom steel & brick fabrication","id":"Fabrikasi baja & bata kustom"},{"en":"Gas piping & safety valves","id":"Pipa gas & katup pengaman"},{"en":"Temperature calibration","id":"Kalibrasi suhu"}]',
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
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
  '/images/projects/project-6-new.png',
  '[{"en":"Combi oven capacity planning","id":"Perencanaan kapasitas oven combi"},{"en":"High-volume deck oven supply","id":"Penyediaan oven dek volume tinggi"},{"en":"Heavy-duty electrical wiring","id":"Pengkabelan listrik heavy-duty"},{"en":"Steam exhaust ventilation","id":"Ventilasi pembuangan uap"}]',
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
  7,
  'dashi-chazuke-zenraku-kamado-oven',
  'Dashi Chazuke Zenraku Traditional Japanese Kamado Oven',
  'Pembuatan Tungku Kamado Tradisional Jepang Dashi Chazuke Zenraku',
  'Oven Installation',
  'Instalasi Oven',
  'Jakarta',
  'Jakarta',
  'Custom traditional Japanese Kamado oven fabrication and installation for Dashi Chazuke Zenraku restaurant.',
  'Fabrikasi dan instalasi tungku Kamado tradisional Jepang khusus untuk restoran Dashi Chazuke Zenraku.',
  '/images/projects/project-7-new.png',
  '[{"en":"Kamado oven design","id":"Desain tungku Kamado"},{"en":"Refractory material installation","id":"Instalasi material tahan api"},{"en":"Heat testing","id":"Pengujian panas"},{"en":"Traditional finishing","id":"Penyelesaian tradisional"}]',
  0
);
INSERT INTO projects (id, slug, name_en, name_id, category_en, category_id, location_en, location_id, description_en, description_id, image, scope, featured) VALUES (
  8,
  'al-jazeerah-cikini-mandi-oven',
  'Al-Jazeerah Cikini Mandi Oven',
  'Pembuatan Oven Mandi Al-Jazeerah Cikini',
  'Oven Installation',
  'Instalasi Oven',
  'Jakarta',
  'Jakarta',
  'Custom Mandi oven fabrication and installation for Al-Jazeerah Cikini restaurant.',
  'Fabrikasi dan instalasi oven Mandi khusus untuk restoran Al-Jazeerah Cikini.',
  '/images/projects/project-8-new.png',
  '[{"en":"Mandi pit & oven design","id":"Desain lubang & oven Mandi"},{"en":"Underground insulation","id":"Isolasi bawah tanah"},{"en":"Structural fabrication","id":"Fabrikasi struktural"},{"en":"Safety and smoke testing","id":"Pengujian keselamatan dan asap"}]',
  0
);

-- SEED SERVICES
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  1,
  'kitchen-sets',
  'Restaurant Kitchen Set',
  'Kitchen Set Restoran',
  'Design & Installation',
  'Desain & Instalasi',
  'End-to-end kitchen set design and manufacturing using stainless steel and premium materials for restaurants, hotels, and catering businesses.',
  'Desain dan pembuatan kitchen set dari awal hingga akhir menggunakan baja tahan karat dan bahan premium untuk restoran, hotel, dan bisnis katering.',
  'We provide comprehensive restaurant kitchen set solutions from initial consultation and design through to manufacturing and installation. Our team of experienced engineers and fabricators work with premium stainless steel materials to create durable, hygienic, and efficient kitchen workspaces tailored to your specific needs.',
  'Kami menyediakan solusi kitchen set restoran yang komprehensif mulai dari konsultasi awal dan desain hingga produksi dan instalasi. Tim insinyur dan fabrikator kami yang berpengalaman bekerja dengan bahan baja tahan karat premium untuk menciptakan ruang kerja dapur yang tahan lama, higienis, dan efisien yang disesuaikan dengan kebutuhan spesifik Anda.',
  '/images/services/kitchen-set.png',
  '🍳',
  '[{"en":"Custom stainless steel fabrication","id":"Fabrikasi baja tahan karat kustom"},{"en":"Professional 3D kitchen design","id":"Desain dapur 3D profesional"},{"en":"Full project management","id":"Manajemen proyek penuh"},{"en":"Quality materials (SS 304/316)","id":"Material berkualitas (SS 304/316)"},{"en":"Post-installation support","id":"Dukungan pasca instalasi"},{"en":"Compliance with health & safety standards","id":"Kepatuhan terhadap standar kesehatan & keselamatan"}]',
  '[{"step":1,"title":{"en":"Consultation","id":"Konsultasi"},"description":{"en":"We meet with you to understand your kitchen needs, space, and budget.","id":"Kami bertemu dengan Anda untuk memahami kebutuhan dapur, ruang, dan anggaran Anda."}},{"step":2,"title":{"en":"Design","id":"Desain"},"description":{"en":"Our team creates detailed 3D designs and floor plans for your approval.","id":"Tim kami membuat desain 3D rinci dan denah lantai untuk persetujuan Anda."}},{"step":3,"title":{"en":"Manufacturing","id":"Produksi"},"description":{"en":"Precision fabrication in our workshop using premium stainless steel.","id":"Fabrikasi presisi di bengkel kami menggunakan baja tahan karat premium."}},{"step":4,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Professional on-site installation by our experienced team.","id":"Instalasi on-site profesional oleh tim kami yang berpengalaman."}},{"step":5,"title":{"en":"Handover","id":"Serah Terima"},"description":{"en":"Final inspection, training, and project handover with warranty.","id":"Inspeksi akhir, pelatihan, dan serah terima proyek dengan garansi."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  2,
  'ducting',
  'Ducting Systems',
  'Sistem Ducting',
  'Smoke Exhaust & Air Circulation',
  'Pembuangan Asap & Sirkulasi Udara',
  'Design and installation of smoke exhaust and air circulation ducting systems for commercial kitchens and industrial buildings.',
  'Desain dan instalasi sistem ducting pembuangan asap dan sirkulasi udara untuk dapur komersial dan bangunan industri.',
  'Our ducting services cover the complete design and installation of smoke exhaust and air circulation systems. We ensure proper ventilation, compliance with building codes, and efficient air flow to maintain a comfortable and safe kitchen environment.',
  'Layanan ducting kami mencakup desain lengkap dan instalasi sistem pembuangan asap dan sirkulasi udara. Kami memastikan ventilasi yang tepat, kepatuhan terhadap kode bangunan, dan aliran udara yang efisien untuk menjaga lingkungan dapur yang nyaman dan aman.',
  '/images/services/ducting.png',
  '💨',
  '[{"en":"Kitchen exhaust systems","id":"Sistem pembuangan udara dapur"},{"en":"Fresh air intake installation","id":"Instalasi asupan udara segar"},{"en":"HVAC ducting integration","id":"Integrasi ducting HVAC"},{"en":"Grease trap systems","id":"Sistem perangkap lemak (Grease trap)"},{"en":"Fire damper installation","id":"Instalasi peredam api (Fire damper)"},{"en":"Regular maintenance programs","id":"Program pemeliharaan rutin"}]',
  '[{"step":1,"title":{"en":"Site Assessment","id":"Penilaian Lokasi"},"description":{"en":"Evaluate the space and ventilation requirements.","id":"Evaluasi ruang dan persyaratan ventilasi."}},{"step":2,"title":{"en":"System Design","id":"Desain Sistem"},"description":{"en":"Engineer the optimal ducting layout and specifications.","id":"Merancang tata letak dan spesifikasi ducting yang optimal."}},{"step":3,"title":{"en":"Fabrication","id":"Fabrikasi"},"description":{"en":"Custom fabrication of duct components in our workshop.","id":"Fabrikasi kustom komponen duct di bengkel kami."}},{"step":4,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Professional installation with minimal disruption.","id":"Instalasi profesional dengan gangguan minimal."}},{"step":5,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Air flow testing and system commissioning.","id":"Pengujian aliran udara dan komisioning sistem."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  3,
  'gas-installation',
  'Gas Installation',
  'Instalasi Gas',
  'Professional & Certified',
  'Profesional & Bersertifikat',
  'Professional gas piping installation for commercial kitchens and buildings, with full safety compliance and pressure testing.',
  'Instalasi perpipaan gas profesional untuk dapur komersial dan bangunan, dengan kepatuhan keselamatan penuh dan pengujian tekanan.',
  'Our certified gas installation team provides safe and reliable gas piping solutions for restaurants, commercial kitchens, and buildings. We handle everything from LPG and natural gas systems to safety compliance and pressure testing, ensuring your gas infrastructure meets all regulatory requirements.',
  'Tim instalasi gas bersertifikat kami memberikan solusi perpipaan gas yang aman dan andal untuk restoran, dapur komersial, dan bangunan. Kami menangani semuanya mulai dari sistem LPG dan gas alam hingga kepatuhan keselamatan dan pengujian tekanan, memastikan infrastruktur gas Anda memenuhi semua persyaratan peraturan.',
  '/images/services/gas-installation.png',
  '🔥',
  '[{"en":"LPG & Natural Gas systems","id":"Sistem LPG & Gas Alam"},{"en":"Certified installation team","id":"Tim instalasi bersertifikat"},{"en":"Pressure testing & certification","id":"Pengujian tekanan & sertifikasi"},{"en":"Safety valve installation","id":"Instalasi katup pengaman"},{"en":"Gas leak detection systems","id":"Sistem deteksi kebocoran gas"},{"en":"Regulatory compliance","id":"Kepatuhan terhadap peraturan"}]',
  '[{"step":1,"title":{"en":"Survey","id":"Survei"},"description":{"en":"Assess gas requirements and plan the piping layout.","id":"Menilai persyaratan gas dan merencanakan tata letak perpipaan."}},{"step":2,"title":{"en":"Permitting","id":"Perizinan"},"description":{"en":"Handle all necessary permits and approvals.","id":"Menangani semua izin dan persetujuan yang diperlukan."}},{"step":3,"title":{"en":"Installation","id":"Instalasi"},"description":{"en":"Install gas piping with certified materials and techniques.","id":"Memasang perpipaan gas dengan material dan teknik bersertifikat."}},{"step":4,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Comprehensive pressure testing and leak checks.","id":"Pengujian tekanan komprehensif dan pemeriksaan kebocoran."}},{"step":5,"title":{"en":"Certification","id":"Sertifikasi"},"description":{"en":"Provide official certification and documentation.","id":"Memberikan sertifikasi dan dokumentasi resmi."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  4,
  'well-drilling',
  'Well Drilling',
  'Pengeboran Sumur',
  'Clean Water Supply',
  'Pasokan Air Bersih',
  'Professional well drilling services for clean water supply, including site survey, drilling, pump installation, and water quality testing.',
  'Layanan pengeboran sumur profesional untuk pasokan air bersih, termasuk survei lokasi, pengeboran, instalasi pompa, dan pengujian kualitas air.',
  'We offer professional well drilling services to ensure a reliable clean water supply for your property. Our experienced drilling team uses modern equipment to reach optimal water sources, and we handle everything from initial site surveys to pump installation and water quality testing.',
  'Kami menawarkan layanan pengeboran sumur profesional untuk memastikan pasokan air bersih yang andal untuk properti Anda. Tim pengeboran kami yang berpengalaman menggunakan peralatan modern untuk mencapai sumber air yang optimal, dan kami menangani semuanya mulai dari survei lokasi awal hingga instalasi pompa dan pengujian kualitas air.',
  '/images/services/well-drilling.png',
  '💧',
  '[{"en":"Professional site survey","id":"Survei lokasi profesional"},{"en":"Modern drilling equipment","id":"Peralatan pengeboran modern"},{"en":"Submersible pump installation","id":"Instalasi pompa celup (submersible)"},{"en":"Water quality testing","id":"Pengujian kualitas air"},{"en":"Piping & distribution setup","id":"Pengaturan perpipaan & distribusi"},{"en":"Maintenance support","id":"Dukungan pemeliharaan"}]',
  '[{"step":1,"title":{"en":"Site Survey","id":"Survei Lokasi"},"description":{"en":"Geological assessment to identify the best drilling location.","id":"Penilaian geologi untuk mengidentifikasi lokasi pengeboran terbaik."}},{"step":2,"title":{"en":"Drilling","id":"Pengeboran"},"description":{"en":"Professional drilling using modern equipment.","id":"Pengeboran profesional menggunakan peralatan modern."}},{"step":3,"title":{"en":"Casing","id":"Casing"},"description":{"en":"Install well casing and screen for clean water extraction.","id":"Memasang casing sumur dan saringan untuk ekstraksi air bersih."}},{"step":4,"title":{"en":"Pump Setup","id":"Pengaturan Pompa"},"description":{"en":"Install and configure submersible pump system.","id":"Instalasi dan konfigurasi sistem pompa celup."}},{"step":5,"title":{"en":"Testing","id":"Pengujian"},"description":{"en":"Water quality and flow rate testing.","id":"Pengujian kualitas air dan laju aliran."}}]'
);
INSERT INTO services (id, slug, title_en, title_id, subtitle_en, subtitle_id, short_description_en, short_description_id, description_en, description_id, image, icon, features, process) VALUES (
  5,
  'electrical',
  'Electrical Services',
  'Layanan Listrik',
  'Installation & Maintenance',
  'Instalasi & Pemeliharaan',
  'Electrical installation and maintenance for restaurants, homes, and buildings, covering wiring, panel installation, and power distribution.',
  'Instalasi dan pemeliharaan listrik untuk restoran, rumah, dan bangunan, meliputi pekerjaan kabel, instalasi panel, dan distribusi daya.',
  'Our electrical services team provides comprehensive solutions for restaurants, homes, and commercial buildings. From wiring and panel installation to lighting and power distribution, we ensure safe, efficient, and code-compliant electrical systems for all your needs.',
  'Tim layanan listrik kami menyediakan solusi komprehensif untuk restoran, rumah, dan bangunan komersial. Mulai dari pekerjaan kabel dan instalasi panel hingga pencahayaan dan distribusi daya, kami memastikan sistem kelistrikan yang aman, efisien, dan sesuai standar untuk semua kebutuhan Anda.',
  '/images/services/electrical.png',
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
  '
        <h2>Why Stove Maintenance Matters?</h2>
        <p>A commercial stove is the heart of any professional kitchen. Without proper maintenance, fuel efficiency can drop, and the risk of sudden breakdowns can disrupt your business operations.</p>
        
        <h2>Daily Maintenance Steps</h2>
        <ul>
          <li><strong>Clean the Burners:</strong> Ensure burner holes are not clogged by food debris or grease.</li>
          <li><strong>Wipe Stainless Steel Surfaces:</strong> Use a soft cloth and specialized stainless steel cleaner to prevent corrosion.</li>
          <li><strong>Check Gas Flow:</strong> Ensure there are no unusual gas smells around the connections.</li>
        </ul>

        <h2>Periodic Professional Inspection</h2>
        <p>In addition to daily care, it is highly recommended to perform routine service every 3-6 months by professional technicians like the Limars Teknik team to ensure the ignition system and gas pressure remain optimal.</p>
      ',
  '
        <h2>Mengapa Perawatan Kompor Itu Penting?</h2>
        <p>Kompor komersial adalah jantung dari setiap dapur profesional. Tanpa perawatan yang tepat, efisiensi bahan bakar dapat menurun, dan risiko kerusakan mendadak dapat mengganggu operasional bisnis Anda.</p>
        
        <h2>Langkah-Langkah Perawatan Harian</h2>
        <ul>
          <li><strong>Bersihkan Burner:</strong> Pastikan lubang api tidak tersumbat oleh sisa makanan atau lemak.</li>
          <li><strong>Lap Permukaan Stainless Steel:</strong> Gunakan kain lembut dan pembersih khusus stainless steel agar tidak korosi.</li>
          <li><strong>Cek Aliran Gas:</strong> Pastikan tidak ada bau gas yang tidak biasa di sekitar koneksi.</li>
        </ul>

        <h2>Pemeriksaan Berkala oleh Ahli</h2>
        <p>Selain perawatan harian, sangat disarankan untuk melakukan servis rutin setiap 3-6 bulan oleh teknisi profesional seperti tim Limars Teknik untuk memastikan sistem pemantik dan tekanan gas tetap optimal.</p>
      ',
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
  '
        <h2>Clean Air, Comfortable Customers</h2>
        <p>A restaurant with smoke lingering in the dining area will discourage customers. A properly designed ducting system will effectively pull smoke and cooking odors out of the kitchen.</p>
        
        <h2>Occupational Health and Safety</h2>
        <p>Kitchen staff work in high-heat environments. Ducting helps lower room temperature by circulating fresh air in and expelling hot air out.</p>
      ',
  '
        <h2>Udara Bersih, Pelanggan Nyaman</h2>
        <p>Restoran dengan asap yang mengepul di area makan akan membuat pelanggan tidak betah. Sistem ducting yang dirancang dengan benar akan menarik asap dan bau masakan keluar dari dapur dengan efektif.</p>
        
        <h2>Kesehatan dan Keselamatan Kerja</h2>
        <p>Staf dapur bekerja di lingkungan yang panas. Ducting membantu menurunkan suhu ruangan dengan mengalirkan udara segar ke dalam (fresh air intake) dan membuang udara panas keluar.</p>
      ',
  '/images/blog/ducting-system.jpg',
  '2026-03-10',
  '5 min read'
);
