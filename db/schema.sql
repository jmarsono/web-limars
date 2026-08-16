-- PT. Limars Teknik Indonesia - D1 Database Schema

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name_en TEXT NOT NULL,
  name_id TEXT NOT NULL,
  category_en TEXT NOT NULL,
  category_id TEXT NOT NULL,
  short_description_en TEXT,
  short_description_id TEXT,
  description_en TEXT,
  description_id TEXT,
  specs TEXT, -- JSON string representation of specs object
  image TEXT NOT NULL,
  featured INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name_en TEXT NOT NULL,
  name_id TEXT NOT NULL,
  category_en TEXT NOT NULL,
  category_id TEXT NOT NULL,
  location_en TEXT,
  location_id TEXT,
  description_en TEXT,
  description_id TEXT,
  image TEXT NOT NULL,
  images TEXT, -- JSON string array of image paths for gallery/slideshow
  scope TEXT, -- JSON string of array of localized objects: [{"en": "Fabrication", "id": "Fabrikasi"}]
  year_completed INTEGER, -- Year the project was completed (public-facing, no financial data)
  video_url TEXT, -- Optional YouTube documentation video URL
  featured INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS services;
CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title_en TEXT NOT NULL,
  title_id TEXT NOT NULL,
  subtitle_en TEXT,
  subtitle_id TEXT,
  short_description_en TEXT,
  short_description_id TEXT,
  description_en TEXT,
  description_id TEXT,
  image TEXT,
  icon TEXT,
  features TEXT, -- JSON string of array of features
  process TEXT, -- JSON string of array of steps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS faqs;
CREATE TABLE faqs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_en TEXT NOT NULL DEFAULT 'General',
  category_id TEXT NOT NULL DEFAULT 'Umum',
  question_en TEXT NOT NULL,
  question_id TEXT NOT NULL,
  answer_en TEXT NOT NULL,
  answer_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS blog_posts;
CREATE TABLE blog_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title_en TEXT NOT NULL,
  title_id TEXT NOT NULL,
  excerpt_en TEXT,
  excerpt_id TEXT,
  content_en TEXT,
  content_id TEXT,
  image TEXT,
  date TEXT,
  read_time TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
