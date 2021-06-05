function get_data(url){
	 // Station X
	var sXApp = SpreadsheetApp.openByUrl(url);
	var sXSheet = sXApp.getSheetByName("Formularantworten 1");
	var sXvalues = sXSheet.getRange(1,1,s1Sheet.getLastRow(),4).getValues();
	return(sXvalues)
}

function combineSheets() {
 
  // get the merge Sheet	
  var mApp= SpreadsheetApp.getActiveSpreadsheet();
  var m1= mApp.getSheetByName("Station 1");
  var m2= mApp.getSheetByName("Station 2");
  var m3= mApp.getSheetByName("Station 3");
  var m4= mApp.getSheetByName("Station 4");
  var m5= mApp.getSheetByName("Station 5");
  var m6= mApp.getSheetByName("Station 6");
  var m7= mApp.getSheetByName("Station 7");
  var m8= mApp.getSheetByName("Station 8");
  var m9= mApp.getSheetByName("Station 9");
  
  // get data
  s1values=get_data("https://docs.google.com/spreadsheets/d/11vxkzc75FGToMwutJLfEZL771-ssVH5pruyaI_NWQMI/edit#gid=717539461")#url
  s2values=get_data("https://docs.google.com/spreadsheets/d/1SxX9bIsj-ByJGQxD3Al3PM7W_MjY6BSSIhATVeVMLwA/edit#gid=777983279")#url
  s3values=get_data("https://docs.google.com/spreadsheets/d/1fhuwOQTV45OYMTVtR0oZGpmypu4zCqqvr7lDCTBHjBw/edit#gid=757609383")#url
  s4values=get_data("https://docs.google.com/spreadsheets/d/1PXmGqzb8O6_DVR-dMVSep6MLPSzxn3SfT5OCAtrm2bw/edit#gid=996990726")#url
  s5values=get_data("https://docs.google.com/spreadsheets/d/1pScZfFTKYkwaUC8fU_mKvOLp2vOmHTmAq0282-ts9-U/edit#gid=1371509309")#url
  s6values=get_data("https://docs.google.com/spreadsheets/d/1FeNaQ-SAMKRXhuPL7n4gXmaaCIf0OVatyjPYsxv9OB8/edit#gid=1792379924")#url
  s7values=get_data("https://docs.google.com/spreadsheets/d/1GsXQCkw8lJxElbebCk4XOJTNQPpUyAnguAXjmINo1xs/edit#gid=1875342309")#url
  s9values=get_data("https://docs.google.com/spreadsheets/d/1X4mY322FFWBfLQUJ00sPz77D5jLBG4y7Cb0I8xEpUW0/edit#gid=246502126")#url
  
 // set values
  m1.getRange(1,1,s1values.length,4).setValues(s1values);
  m2.getRange(1,1,s2values.length,4).setValues(s2values);
  m3.getRange(1,1,s3values.length,4).setValues(s3values);
  m4.getRange(1,1,s4values.length,4).setValues(s4values);
  m5.getRange(1,1,s5values.length,4).setValues(s5values);
  m6.getRange(1,1,s6values.length,4).setValues(s6values);
  m7.getRange(1,1,s7values.length,4).setValues(s7values);
  m8.getRange(1,1,s8values.length,4).setValues(s8values);
  m8.getRange(1,1,s9values.length,4).setValues(s9values);
}
