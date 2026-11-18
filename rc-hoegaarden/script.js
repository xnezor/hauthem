function makeAdr() {
  var mytext = "656D61696C2061647265733A20696E666F407263686F656761617264656E2E6265";
  var str = '';
  for (var i = 0; i < mytext.length; i += 2)
    str += String.fromCharCode(parseInt(mytext.substr(i, 2), 16));
  document.getElementById("emtext").innerHTML = str;
}

function makeCalendar(mydata) {
  var outstr;
  var line;
  var date = new Date();
  date.setDate(date.getDate() - 1);
  var testdate;
  mydata.split("\n").forEach(function (item) {
    line = item.split("!");
    if (line[0].length > 0) {
      testdate = new Date(line[0]);
      if (testdate > date) {
        outstr += "<li>" + line[1] + "</li>\n";
      }
    }
  });
  console.log(outstr);
  document.getElementById("kalender").innerHTML = outstr;
  return;
var date = new Date();
date.setDate(date.getDate() - 1);
var testdate;
var ul = document.getElementById("kalender");  
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  testdate = new Date(items[i].id);
  if (testdate < date) {
    document.getElementById(items[i].id).classList.add("old");
    }
  }
}

function getCalendar() {
fetch('-kalender.txt')
  .then(response => response.text())
  .then(data => makeCalendar(data));
//  .then((data) => document.getElementById("kalender").innerHTML = data.toString());
}

function getNews() {
fetch('-nieuws.txt')
  .then(response => response.text())
  .then((data) => document.getElementById("nieuws").innerHTML = data.toString());
}

function doAll() {
getNews();
getCalendar();
//makeCalendar();
makeAdr();
}
    
