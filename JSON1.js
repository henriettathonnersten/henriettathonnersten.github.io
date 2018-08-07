var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var requestData = request.response;
  var title = document.createElement("h1");
  title.textContent = requestData["squadName"];
  document.body.appendChild(title);

  var squadInfo = document.createElement("div");
  var homeTown = document.createTextNode("Hometown: " + requestData["homeTown"] + ". \r\n");
  var formed = document.createTextNode("Formed: " + requestData["formed"] + ". \r\n");
  var secretBase = document.createTextNode("Based at: " + requestData["secretBase"] + ". \r\n");
  var active = document.createTextNode("Active: " + requestData["active"] + ". \r\n");
  squadInfo.appendChild(homeTown);
  squadInfo.appendChild(formed);
  squadInfo.appendChild(secretBase);
  squadInfo.appendChild(active);
  document.body.appendChild(squadInfo);

  var members = document.createElement("h3");
  var membersTitle = document.createTextNode("Members: " );
  members.appendChild(membersTitle);
  document.body.appendChild(members);

  var membersList = requestData["members"];

  for (var key in membersList) {
    var membersInfo = document.createElement("div");
    var name = document.createTextNode("Name: " + membersList[key].name + ". \r\n");
    var age = document.createTextNode("Age: " + membersList[key].age + ". \r\n");
    var secretIdentity = document.createTextNode("Secret identity: " + membersList[key].secretIdentity + ". \r\n");
    var powers = document.createTextNode("Powers: " + membersList[key].powers + ". \r\n");
    membersInfo.appendChild(name);
    membersInfo.appendChild(age);
    membersInfo.appendChild(secretIdentity);
    membersInfo.appendChild(powers);
    document.body.appendChild(membersInfo);
  }
}
