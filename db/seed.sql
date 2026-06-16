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
  '/images/products/wok-range.png',
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
  'Kami menawarkan kompor masakan Tionghoa khusus yang dilengkapi dengan pancuran air terjun dan pembakar berdaya tinggi. Didesain secara ergonomis, kompor masakan Tionghoa ini ideal untuk menumis cepat (stir-fry), menggoreng kering, serta mengukus makanan. Dapatkan unit kompor masakan Tionghoa berkualitas untuk meningkatkan kecepatan penyajian makanan di restoran Anda.',
  '{"material":"Stainless Steel 304","burners":{"en":"1-6 Burners","id":"1-6 Tungku"},"btuOutput":"100,000 - 200,000 BTU","fuelType":{"en":"LPG / Natural Gas","id":"LPG / Gas Alam"},"dimensions":"1800 x 900 x 850 mm"}',
  '/images/products/chinese-cooking-range.png',
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
  '/images/products/pizza-oven.png',
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
  '/images/products/tandoor-oven.png',
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
  '/images/products/brick-oven.png',
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
  '/images/products/convection-oven.png',
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
  '/images/products/deck-oven.png',
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
  '/images/products/combi-oven.png',
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
  '/images/products/gas-griddle.png',
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
  '/images/products/gas-deep-fryer.png',
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
  '/images/products/hotel-bain-marie.png',
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
  '/images/products/coffee-bar-counter.png',
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
  '/images/products/pastry-display-warmer.png',
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
  '/images/products/automatic-water-boiler.png',
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
  'Jasa Kitchen Set Restoran Jakarta',
  'Design & Installation',
  'Desain & Instalasi',
  'End-to-end kitchen set design and manufacturing using stainless steel and premium materials for restaurants, hotels, and catering businesses.',
  'Desain dan pembuatan kitchen set dari awal hingga akhir menggunakan baja tahan karat dan bahan premium untuk restoran, hotel, dan bisnis katering.',
  'We provide comprehensive restaurant kitchen set solutions from initial consultation and design through to manufacturing and installation. Our team of experienced engineers and fabricators work with premium stainless steel materials to create durable, hygienic, and efficient kitchen workspaces tailored to your specific needs.',
  'Kami adalah penyedia jasa kitchen set restoran Jakarta terpercaya yang menyediakan solusi komprehensif mulai dari desain, fabrikasi, hingga instalasi. Sebagai spesialis jasa kitchen set restoran Jakarta, tim insinyur dan fabrikator kami yang berpengalaman memproduksi peralatan dapur stainless steel premium. Layanan jasa kitchen set restoran Jakarta kami dirancang untuk menciptakan ruang kerja dapur yang aman, higienis, dan efisien sesuai standar bisnis kuliner Anda.',
  '/images/services/kitchen-set.png',
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
  '/images/services/ducting.png',
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
  '/images/services/gas-installation.png',
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
  '/images/services/well-drilling.png',
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
