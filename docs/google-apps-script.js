function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var date = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  sheet.appendRow([date, data.type, data.name, data.email, data.details]);
  return ContentService.createTextOutput('{"status":"success"}').setMimeType(ContentService.MimeType.JSON);
}
