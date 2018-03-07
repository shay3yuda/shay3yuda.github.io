/*var hTemp = document.querySelector("#highTemp");
var lTemp = document.querySelector("#lowTemp");
var currentTemp = document.querySelector ("#currentTemp");
var written = document.querySelector("#writtenWeather");
var windspeed = document.querySelector("#windspeed");
var icon = document.querySelector("icon");

var requestURL = 'https://api.wunderground.com/api/45c5dafb23a1ef08/forecast/q/MN/Franklin.json';

var request = new XMLHttpRequest();
request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
    
    var currentCon = request.response;
    currenttemp(currentCon);
}

function currenttemp(jsonObj) {
    
    var mytemp = jsonobj[]
}