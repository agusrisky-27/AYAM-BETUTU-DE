// =====================================================================
// KONFIGURASI BETUTU ASAP DE
// Semua data bisnis, harga, dan kontak diatur di sini.
// Edit file ini kalau ada perubahan harga / kontak, tidak perlu ubah
// file komponen lainnya.
// =====================================================================

export const BRAND = {
  name: "Betutu Asap De",
  tagline: "Diasap sabut kelapa, dipresto sempurna",
  waNumber: "6283117282812", // format internasional tanpa + dan tanpa 0 di depan
  waDisplay: "0831-1728-2812",
  email: "agisriskir@gmail.com",
  instagram: "", // isi setelah akun IG dibuat, contoh: "betutuasapde"
  location: "Tabanan, Bali",
};

// Menu satuan / eceran
export const MENU_SATUAN = [
  {
    id: "ayam-utuh",
    nama: "Ayam Betutu Asap - 1 ekor (±1kg)",
    harga: 100000,
    deskripsi: "Ayam utuh, diasap sabut kelapa lalu dipresto empuk.",
  },
  {
    id: "ayam-paha",
    nama: "Ayam Betutu Asap - bagian paha",
    harga: 20000,
    deskripsi: "Potongan paha, empuk sampai tulang.",
  },
  {
    id: "ayam-dada",
    nama: "Ayam Betutu Asap - bagian dada",
    harga: 20000,
    deskripsi: "Potongan dada, gurih meresap sampai dalam.",
  },
  {
    id: "bebek-utuh",
    nama: "Bebek Betutu Asap - 1 ekor (±1kg)",
    harga: 150000,
    deskripsi: "Bebek utuh, proses asap lebih lama untuk hasil maksimal.",
  },
  {
    id: "ayam-merah",
    nama: "Ayam Merah Betutu Asap - 1 ekor (±1kg)",
    harga: 125000,
    deskripsi: "Varian ayam merah, tekstur lebih kenyal & gurih khas.",
  },
];

// Paket komplit (sudah termasuk sate & nasi)
export const PAKET_COMPLETE = [
  {
    id: "paket-ayam",
    nama: "Paket Complete Ayam",
    harga: 150000,
    isi: ["Ayam betutu asap 1kg", "Sate ayam", "Nasi"],
  },
  {
    id: "paket-bebek",
    nama: "Paket Complete Bebek",
    harga: 200000,
    isi: ["Bebek betutu asap 1kg", "Sate ayam", "Nasi"],
  },
  {
    id: "paket-ayam-merah",
    nama: "Paket Complete Ayam Merah",
    harga: 175000,
    isi: ["Ayam merah betutu asap 1kg", "Sate ayam", "Nasi"],
  },
];

// Harga satuan untuk PAKET CUSTOM (kalkulator).
// Ubah angka di bawah ini kapan saja sesuai keputusan harga terbaru.
export const HARGA_CUSTOM = {
  ayam: { label: "Ayam betutu asap (per ekor)", harga: 100000 },
  nasi: { label: "Nasi (per porsi)", harga: 5000 },
  sate: { label: "Sate ayam (per porsi)", harga: 15000 },
};

// URL Web App Google Apps Script (isi setelah deploy - lihat panduan di
// google-apps-script/README.md)
export const SHEETS_WEBHOOK_URL = "";
