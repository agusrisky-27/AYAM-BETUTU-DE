# Setup order otomatis ke Google Sheets

Dengan setup ini, setiap pesanan yang masuk lewat form di website akan
otomatis tercatat sebagai baris baru di Google Sheets kamu, lengkap dengan
kolom **Status** yang bisa kamu ubah manual jadi "Done" setelah selesai.

## Langkah-langkah

1. **Buat Google Sheets baru**
   Buka [sheets.new](https://sheets.new), beri nama misalnya
   `Order Betutu Asap De`.

2. **Buka Apps Script**
   Di menu Sheets: `Extensions` → `Apps Script`.

3. **Salin kode**
   Hapus isi default `Code.gs`, lalu salin seluruh isi file
   `Code.gs` yang ada satu folder dengan README ini ke editor Apps Script.

4. **Deploy sebagai Web App**
   - Klik `Deploy` → `New deployment`.
   - Pilih tipe `Web app`.
   - **Execute as**: `Me`.
   - **Who has access**: `Anyone`.
   - Klik `Deploy`, lalu izinkan akses (Authorize access) saat diminta.
   - Salin **Web app URL** yang muncul (bentuknya seperti
     `https://script.google.com/macros/s/xxxxx/exec`).

5. **Tempel URL ke website**
   Buka file `src/config.js` di project React, isi:
   ```js
   export const SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/xxxxx/exec";
   ```

6. **Selesai.** Setiap pesanan dari form akan otomatis masuk ke sheet
   bernama `Orders` di spreadsheet kamu, dengan kolom:
   `Waktu | Nama | No HP | Alamat | Pesanan | Catatan | Status`.

## Cara menandai pesanan selesai

Buka spreadsheet, cari baris pesanan yang sudah diproses, lalu ubah isi
kolom **Status** dari `Baru` menjadi `Done` (atau status lain sesuai
kebutuhan, misal `Diproses`, `Dikirim`). Kamu juga bisa menambahkan
Data Validation (dropdown) di kolom Status lewat menu
`Data` → `Data validation` di Sheets supaya lebih rapi.

## Catatan penting

- Setiap kali kamu mengubah kode `Code.gs`, kamu perlu **Deploy ulang**
  (`Deploy` → `Manage deployments` → edit → `New version`) supaya
  perubahan aktif.
- URL Web App tidak berubah selama kamu tidak menghapus deployment-nya.
- Data pesanan juga tetap terkirim ke WhatsApp kamu sebagai backup,
  jadi kalau Sheets belum di-setup, order tetap tidak hilang.
