# SEO Audit & Verification Checklist - limarsteknik.com

Dokumen ini berisi hasil akhir audit SEO menyeluruh untuk situs web PT. Limars Teknik Indonesia (limarsteknik.com).

## 📊 Status Checklist Audit SEO

| No | Elemen Audit | Status | Rincian / Temuan |
| :-: | :--- | :-: | :--- |
| 1 | **Unique Title & Meta Description** | ✅ Done | Diimplementasikan dinamis via `constructMetadata` di `lib/seo.js` dan dimuat di setiap server layout/page. Membaca data lokal dan entitas D1 untuk keunikan maksimal. Karakter dibatasi (title max 60, desc max 160). |
| 2 | **Tepat Satu H1 per Halaman** | ✅ Done | Setiap halaman (Beranda, Produk, Layanan, Tentang, Projek, FAQ, Kebijakan Privasi, Detail Produk/Layanan, dan Blog) memiliki tepat satu tag `<h1>` yang memuat keyword utama. |
| 3 | **Canonical URL** | ✅ Done | Ditambahkan otomatis di `<head>` oleh `constructMetadata` dengan struktur absolut `https://limarsteknik.com/[locale]/[path]/` untuk menghindari duplikasi konten. |
| 4 | **Broken Internal Links** | ✅ Done | Seluruh internal links dipastikan valid, mengarah ke slug yang terdaftar di database, dan mematuhi konfigurasi `trailingSlash: true` (semua tautan berakhiran `/`). |
| 5 | **Image Alt Text** | ✅ Done | Semua tag `<img>` telah dimigrasikan ke `next/image` dengan atribut `alt` yang deskriptif, terjemahan lokal, dan kaya akan kata kunci komersial. |
| 6 | **Schema Markup (JSON-LD)** | ✅ Done | Validasi schema lengkap:<br>- `LocalBusiness` & `Organization` (Beranda)<br>- `Product` (Detail Produk)<br>- `Service` & `OfferCatalog` (Detail Layanan)<br>- `BlogPosting` (Detail Blog)<br>- `BreadcrumbList` (Seluruh Halaman) |
| 7 | **Hreflang Alternates** | ✅ Done | Tag `<link rel="alternate" hreflang="..." />` diatur dinamis di `lib/seo.js` untuk bahasa `id`, `en`, dan default `x-default` dengan slug yang sesuai. |
| 8 | **Sitemap XML** | ✅ Done | File `sitemap.js` menghasilkan sitemap dinamis mencakup 72 URL (16 static path, 32 produk path, 10 layanan path, dan 14 blog path) lengkap dengan tag `lastmod`, `changefreq`, dan `priority`. |

---

## 🛠️ Ringkasan Sebelum dan Sesudah Perbaikan

### 1. Hierarki Heading (Semantik)
- **Sebelum**:
  - Halaman produk meloncat dari `H1` langsung ke `H3` (Spesifikasi), lalu ke `H2` (Produk Terkait).
  - Halaman layanan meloncat dari `H2` langsung ke `H4` (Langkah Proses).
- **Sesudah**:
  - Halaman produk menggunakan susunan terstruktur: `H1` (Nama Produk) &rarr; `H2` (Spesifikasi & Produk Terkait) &rarr; `H3` (Kartu Produk Terkait).
  - Halaman layanan menggunakan susunan: `H1` (Nama Layanan) &rarr; `H2` (Tentang Layanan, Keunggulan, & Proses Kami) &rarr; `H3` (Detail Langkah Proses).

### 2. Ketersediaan Call-to-Action (CTA) Ke /contact/
- **Sebelum**: Halaman Tentang Kami, Portfolio Projek, Kebijakan Privasi, Blog List, Blog Detail, dan FAQ tidak memiliki tombol CTA yang mengarah ke formulir kontak utama.
- **Sesudah**: Seluruh halaman tersebut kini memiliki banner/tombol CTA premium berwarna kontras yang memandu pengguna ke `/contact/` dan nomor WhatsApp resmi.

### 3. Internal Linking Antar Halaman
- **Sebelum**: Tidak ada keterkaitan tautan dinamis yang menghubungkan produk ke layanan, maupun konten edukasi blog ke halaman penawaran produk.
- **Sesudah**:
  - Halaman detail produk memiliki banner rekomendasi dinamis sesuai kategori produk yang menautkan ke jasa instalasi terkait (gas, listrik, atau kitchen set).
  - Artikel blog diisi dengan hyperlink yang mengarah ke halaman produk komersial relevan (seperti kompor kwali, wok range, dan sistem ducting).

---

## 📈 Rekomendasi SEO Lanjutan (Di Luar Codebase)

Untuk memaksimalkan peringkat di mesin pencari (SERP) setelah kode dideploy ke produksi, lakukan langkah-langkah berikut:

### 1. Google Search Console & Bing Webmaster
- Daftarkan domain `https://limarsteknik.com` ke Google Search Console.
- Kirimkan sitemap di menu sitemap dengan menginput URL: `https://limarsteknik.com/sitemap.xml`.
- Monitor error cakupan indeks (Index Coverage) secara rutin untuk memastikan tidak ada halaman produk yang terblokir.

### 2. Google Business Profile (Optimasi SEO Lokal)
- Klaim profil bisnis "PT. Limars Teknik Indonesia" di Google Maps.
- Lengkapi profil dengan informasi persis seperti pada schema LocalBusiness:
  - Alamat: **Jl. Raden Saleh II/6 No. 70C, DKI Jakarta**
  - Nomor Telepon: **+62 812-1267-1289**
  - Jam Operasional: **Senin-Jumat 08:00-17:00, Sabtu 08:00-14:00**
- Unggah foto-foto resolusi tinggi dari proses fabrikasi kitchen set stainless steel dan instalasi pipa gas proyek asli untuk meningkatkan konversi.

### 3. Akuisisi Backlink Berkualitas (Off-Page SEO)
- Daftarkan perusahaan ke direktori bisnis lokal Indonesia tepercaya (seperti YellowPages, IndoPages, Kaskus, dan direktori industri).
- Tulis artikel tamu (guest post) di media kuliner atau portal wirausaha mengenai pentingnya keselamatan gas komersial dan sistem ducting dapur, lalu berikan tautan balik (backlink) ke halaman layanan terkait limarsteknik.com.
