function main(){

// merged spreadsheet with all datas are used  
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1D0YidHZILN6Ru5aQvHw82n4kULVRd2VF9-GLgH03K6U/edit#gid=983225355/"); //  Sheet Url must have slash at end

// get the sheets for each station
var station1 = ss.getSheetByName("Station 1");
var station2 = ss.getSheetByName("Station 2");

// loop through station 1 and find the email in the tables of the other stations
for(var i =2 ;i<=station1.getLastRow(); i++){
  //loop through each row
  var email = station1.getRange(i,2).getValue(); // get email from SpreadSheet1 2nd column
  email = email.toLowerCase()
  var punkte = station1.getRange(i,3).getValue(); // get punkte from SpreadSheet1 3rd column

  // control variable
  var check_station2 = false

  //check on the other stations
  //Station 2
  punkte2 = check_station(email, station2)
  // if return value is not null, the email visited station 2
  if(punkte2 != null){ check_station2 = true; punkte = punkte + punkte2}
  //further Stations can be inserted here
  // ....
  
  // if the email is found at the other stations
  // check if email was not already sent and send email + document it
  if(check_station2 = true){
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
  var ss_email = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1adRWmuK87-F2xNuZbDUmSmWmHVkZ7SfJhCLsxQGnuN8/edit#gid=0");
  // get the sheet with email
  var sent_email = ss_email.getSheetByName("Tabellenblatt1");
  for(var j =1 ;j<=sent_email.getLastRow(); j++){
  //check if email was already sent
  var email2 = sent_email.getRange(j,1).getValue(); // get email from SpreadSheet 1st column
  email2 = email2.toLowerCase()
  if(email2 == email){
    return(true)
  }
  }
  return(false)
}


// Function to document email had been sent
function document_email(email){
  var ss_email = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1adRWmuK87-F2xNuZbDUmSmWmHVkZ7SfJhCLsxQGnuN8/edit#gid=0");
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
  var subject = "Deine Teilnahme an unserem Orientierungslauf";
  var htmlbody = getMessage(punkte);
  MailApp.sendEmail(email, subject, htmlbody, {htmlBody : htmlbody});
}
