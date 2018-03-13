
var forecastObject = new XMLHttpRequest();
forecastObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/forecast/q/MN/Greenville.json', true);

forecastObject.send();

forecastObject.onload = function() {
    
    var forecastInfo = JSON.parse(forecastObject.responseText);
    console.log(forecastInfo);
    
    document.getElementById("writtenWeather").innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
    

}