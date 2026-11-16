function makeAdr() {
  var mytext = "656D61696C2061647265733A20696E666F407263686F656761617264656E2E6265";
  var str = '';
  for (var i = 0; i < mytext.length; i += 2)
    str += String.fromCharCode(parseInt(mytext.substr(i, 2), 16));
  document.getElementById("emtext").innerHTML = str;
}

function makeCalendar() {
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
