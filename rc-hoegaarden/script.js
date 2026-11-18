function makeAdr(myid) {
  var mytext = "656D61696C2061647265733A20696E666F407263686F656761617264656E2E6265";
  var str = '';
  for (var i = 0; i < mytext.length; i += 2)
    str += String.fromCharCode(parseInt(mytext.substr(i, 2), 16));
  document.getElementById(myid).innerHTML = str;
}

function makeCalendar(mydata) {
  var outstr = "";
  var line;
  const regex = /^\d{4}[./-]\d{2}[./-]\d{2}$/;
  var date = new Date();
  date.setDate(date.getDate() - 1);
  var testdate;
  mydata.split("\n").forEach(function (item) {
    line = item.split("!");
    if (regex.test(line[0].replace(/\s/g,"")))  {
      testdate = new Date(line[0]);
      if (testdate > date) {
        outstr += "<li>" + line[1] + "</li>\n";
      }
    }
  });
  return outstr;
}

function getCalendar() {
fetch('-kalender.txt')
  .then(response => response.text())
  .then(data => document.getElementById("kalender").innerHTML = makeCalendar(data));
}

function getNews() {
fetch('-nieuws.txt')
  .then(response => response.text())
  .then((data) => document.getElementById("nieuws").innerHTML = data.toString());
}

function doAll() {
getNews();
getCalendar();
makeAdr("emtext1");
}
    
