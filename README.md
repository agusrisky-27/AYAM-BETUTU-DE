# Betutu Asap De - Website

Website resmi untuk Betutu Asap De, dibangun dengan React + Vite.

## Menjalankan di komputer

npm install
npm run dev

Buka http://localhost:5173 di browser.

## Build untuk production

npm run build

Hasil build ada di folder dist/.

## Deploy ke Vercel

1. Push project ini ke GitHub.
2. Buka vercel.com, klik New Project, pilih repo ini.
3. Vercel otomatis mendeteksi Vite - klik Deploy.

## Yang perlu kamu edit sebelum go-live

- src/config.js -> Nomor WA, email, Instagram, harga menu, harga paket custom
- src/components/Gallery.jsx -> Ganti placeholder foto dengan foto asli
- src/components/Testimonials.jsx -> Ganti dengan testimoni asli pelanggan
- google-apps-script/ -> Ikuti panduan README untuk aktifkan order ke Google Sheets

## Struktur halaman

Hero -> Tentang (proses asap & presto) -> Menu satuan & paket complete ->
Kalkulator paket custom -> Galeri -> Testimoni -> Form order & kontak.

## Tema desain

- Warna: char (hitam arang/asap), ember (oranye bara api), turmeric (emas bumbu), coconut (krem/putih), lawar (hijau zaitun aksen).
- Font: Fraunces (display/judul), Plus Jakarta Sans (body), JetBrains Mono (harga & data).
- Signature element: animasi asap mengepul di Hero section.
