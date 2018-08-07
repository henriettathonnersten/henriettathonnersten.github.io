var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
var request = new XMLHttpRequest();

function search(stringToSearchFor) {
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    var requestData = request.response;

    for (var key in requestData) {
      if (requestData[key].nm == stringToSearchFor || requestData[key].cty == stringToSearchFor || requestData[key].hse == stringToSearchFor || requestData[key].yrs == stringToSearchFor) {
        var info = document.createElement("div");
        var name = document.createTextNode("Name: " + requestData[key].nm + ". \r\n");
        var city = document.createTextNode("City: " + requestData[key].cty + ". \r\n");
        var house = document.createTextNode("House: " + requestData[key].hse + ". \r\n");
        var years = document.createTextNode("Year(s): " + requestData[key].yrs + ". \r\n");
        info.appendChild(name);
        info.appendChild(city);
        info.appendChild(house);
        info.appendChild(years);
        document.body.appendChild(info);
      }
    }
  }
}
