function main(){

// merged spreadsheet with all datas are used  
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1yjKPIlEDip2rmyBC_hC_oM_SazxM8WVL5F7IrO3dq04/edit#gid=0"); //  Sheet Url must have slash at end

// get the sheets for each station
var station1 = ss.getSheetByName("Station 1");
var station2 = ss.getSheetByName("Station 2");
var station3 = ss.getSheetByName("Station 3");
var station4 = ss.getSheetByName("Station 4");
var station5 = ss.getSheetByName("Station 5");
var station6 = ss.getSheetByName("Station 6");
var station7 = ss.getSheetByName("Station 7");
var station8 = ss.getSheetByName("Station 8");
var station9 = ss.getSheetByName("Station 9");

// loop through station 1 and find the email in the tables of the other stations
for(var i =2 ;i<=station1.getLastRow(); i++){
  //loop through each row
  var email = station1.getRange(i,2).getValue(); // get email from SpreadSheet1 2nd column
  email = email.toLowerCase()
  var punkte = station1.getRange(i,3).getValue(); // get punkte from SpreadSheet1 3rd column

  //check on the other stations 
  // station 2
  var check_station2 = false
  punkte2 = check_station(email, station2)
  if(punkte2 != null){ check_station2 = true; punkte = punkte + punkte2}
  // station 3
  var check_station3 = false
  punkte3 = check_station(email, station3)
  if(punkte3 != null){ check_station3 = true; punkte = punkte + punkte3}
  // station 4
  var check_station4 = false
  punkte4 = check_station(email, station4)
  if(punkte4 != null){ check_station4 = true; punkte = punkte + punkte4}
  // station 5
  var check_station5 = false
  punkte5 = check_station(email, station5)
  if(punkte5 != null){ check_station5 = true; punkte = punkte + punkte5}
  // station 6
  var check_station6 = false
  punkte6 = check_station(email, station6)
  if(punkte6 != null){ check_station6 = true; punkte = punkte + punkte6}
  // station 7
  var check_station7 = false
  punkte7 = check_station(email, station7)
  if(punkte7 != null){ check_station7 = true; punkte = punkte + punkte7}
  // station 8
  var check_station8 = false
  punkte8 = check_station(email, station8)
  if(punkte8 != null){ check_station8 = true; punkte = punkte + punkte8}
   // station 9
  var check_station9 = false
  punkte9 = check_station(email, station9)
  if(punkte9 != null){ check_station9 = true; punkte = punkte + punkte9}
  
  // if the email is found at the other stations
  // check if email was not already sent and send email + document it
  if((check_station2 = true) && (check_station3 = true) && (check_station4 = true) && (check_station5 = true) && (check_station6 = true) && (check_station7 = true) && (check_station8 = true) && (check_station9 = true) ){
    already_sent = check_email(email)
    if(!already_sent){send_email(email, punkte); document_email(email)}
  }
}
}

// Function to check which stations were visited by the email
// it returns the received points from the quiz
function check_station(email, station) {
  for(var j =2 ;j<=station.getLastRow(); j++){
  var email2 = station.getRange(j,2).getValue(); // get email from SpreadSheet 2nd column
  email2 = email2.toString()
  email2 = email2.toLowerCase()
  if(email2 == email){
    var punkte2 = station.getRange(j,3).getValue(); // get punkte from SpreadSheet 3rd column
    return(punkte2)
  }
  return(null)
} 
}


// Function to check email had not yet been sent
function check_email(email){
  var ss_email = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1w5p-fwnkmLf4XrJ0zJBXeNh0hZ-jvft6nRvIzPABToI/edit#gid=0");
  // get the sheet with email
  var sent_email = ss_email.getSheetByName("Tabellenblatt1");
  for(var j =1 ;j<=sent_email.getLastRow(); j++){
  //check if email was already sent
  var email2 = sent_email.getRange(j,2).getValue(); // get email from SpreadSheet 2nd column
  email2 = email2.toString()
  email2 = email2.toLowerCase()
  if(email2 == email){
    return(true)
  }
  }
  return(false)
}


// Function to document email had been sent
function document_email(email){
  var ss_email = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1w5p-fwnkmLf4XrJ0zJBXeNh0hZ-jvft6nRvIzPABToI/edit#gid=0");
  // get the sheet with email
  var sent_email = ss_email.getSheetByName("Tabellenblatt1");
  // Set the range of cells
  var last_row = sent_email.getLastRow()
  last_row = last_row + 1
  last_row = String(last_row)
  var range_email = sent_email.getRange("A" + last_row);
  var range_timestamp = sent_email.getRange("B" + last_row);
  // timestamp
  var now = new Date();
  // Call the setValues method on range and pass in our values
  range_email.setValue(email);
  range_timestamp.setValue(now);
}

// Function to build html body for the email
function getMessage(punkte) {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('email'); // email is the name of the HTML file
  var message = htmlOutput.getContent();
  // insert Punktezahl into message body
  message = message.replace("%punkte", punkte);
  return message;
}

// Function to send the email with result
function send_email(email, punkte) {
  var subject = "Deine Teilnahme an der Open Data Ralley // Digitaltag 2021";
  var htmlbody = getMessage(punkte);
  MailApp.sendEmail(email, subject, htmlbody, {htmlBody : htmlbody});
}
