/**
 * BETUTU ASAP DE - Order ke Google Sheets
 * ----------------------------------------
 * Script ini menerima data order dari website (form React) dan
 * menyimpannya sebagai baris baru di Google Sheets, lengkap dengan
 * status "Baru" yang bisa diubah manual jadi "Done" di spreadsheet.
 *
 * Cara pakai: lihat README.md di folder ini.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders");

  // Buat sheet + header kalau belum ada
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Orders");
    sheet.appendRow(["Waktu", "Nama", "No HP", "Alamat", "Pesanan", "Catatan", "Status"]);
    sheet.setFrozenRows(1);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.nama || "",
    data.noHp || "",
    data.alamat || "",
    data.pesanan || "",
    data.catatan || "",
    data.status || "Baru",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput("Betutu Asap De order endpoint aktif.")
    .setMimeType(ContentService.MimeType.TEXT);
}
