function combineSheets() {
  // Station 1
  var s1App = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/12tjRMfx_QMQsNLpsKj8iSZta1dPh1inmUmDcXF_rO1I/edit#gid=530051086");
  var s1Sheet = s1App.getSheetByName("Formularantworten 1");
  var mApp= SpreadsheetApp.getActiveSpreadsheet();
  var m1= mApp.getSheetByName("Station 1");
  
  var s1values = s1Sheet.getRange(1,1,s1Sheet.getLastRow(),4).getValues();
  
  //  Now, we can put out all together and stuff it in merge-Table - Sheet 1
  var mvalues = [];
  // mvalues =  s1values.concat(s2values,s3values);
  // mvalues =  s1values
  m1.getRange(1,1,s1values.length,4).setValues(s1values);

  // Station 2
  var s2App = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Ux2ryCkrCMnK9x9ot68JJld5z3gCTPBc0sJl_slgXIk/edit#gid=1344281306");
  var s2Sheet = s2App.getSheetByName("Formularantworten 2");
  var m2= mApp.getSheetByName("Station 2");
  
  var s2values = s2Sheet.getRange(1,1,s2Sheet.getLastRow(),4).getValues();
  
  //  Now, we can put out all together and stuff it in merge-Table - Sheet 2
  var mvalues = [];
  // mvalues =  s1values.concat(s2values,s3values);
  //mvalues =  s1values
  m2.getRange(1,1,s2values.length,4).setValues(s2values);
}