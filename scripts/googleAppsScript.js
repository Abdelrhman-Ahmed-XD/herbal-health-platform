/**
 * Google Apps Script — Questionnaire → Google Sheets Integration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com → New Project
 * 2. Paste this entire file
 * 3. Replace SPREADSHEET_ID with your Google Sheet ID
 * 4. Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and set it as VITE_GOOGLE_SHEETS_WEBHOOK in .env
 * 
 * The frontend calls this URL with a POST request containing questionnaire answers.
 */

const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';

const COLUMN_HEADERS = [
  'Timestamp',
  'Session ID',
  'Primary Concern',
  'Symptoms',
  'Lifestyle',
  'Experience Level',
  'Wellness Goal',
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    appendToSheet(data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function appendToSheet(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName('Responses');

  // Create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('Responses');
    sheet.appendRow(COLUMN_HEADERS);
    sheet.getRange(1, 1, 1, COLUMN_HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  const answers = data.answers || {};
  const symptoms = Array.isArray(answers.symptoms)
    ? answers.symptoms.join(', ')
    : (answers.symptoms || '');

  sheet.appendRow([
    new Date().toISOString(),
    data.sessionId || 'anon_' + Math.random().toString(36).slice(2, 8),
    answers.primary_concern || '',
    symptoms,
    answers.lifestyle || '',
    answers.experience || '',
    answers.goal || '',
  ]);
}

// Optional: function to generate aggregated summary sheet
function generateSummary() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const responsesSheet = ss.getSheetByName('Responses');
  if (!responsesSheet) return;

  let summarySheet = ss.getSheetByName('Summary');
  if (!summarySheet) {
    summarySheet = ss.insertSheet('Summary');
  }
  summarySheet.clear();

  const data = responsesSheet.getDataRange().getValues();
  if (data.length < 2) return;

  // Count primary concerns
  const concernCounts = {};
  const symptomCounts = {};

  for (let i = 1; i < data.length; i++) {
    const concern = data[i][2];
    const symptoms = data[i][3] ? data[i][3].split(', ') : [];

    if (concern) concernCounts[concern] = (concernCounts[concern] || 0) + 1;
    symptoms.forEach(s => {
      if (s) symptomCounts[s] = (symptomCounts[s] || 0) + 1;
    });
  }

  summarySheet.appendRow(['Category', 'Count']);
  Object.entries(concernCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => summarySheet.appendRow([k, v]));

  summarySheet.appendRow(['']);
  summarySheet.appendRow(['Symptom', 'Count']);
  Object.entries(symptomCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => summarySheet.appendRow([k, v]));
}
