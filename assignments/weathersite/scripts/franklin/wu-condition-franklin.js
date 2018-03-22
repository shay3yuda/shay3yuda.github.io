

var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
   var weatherInfo = JSON.parse(request.responseText);
    console.log(weatherInfo);
    
    document.getElementById('weatherCondition').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_in + " Inches Today";
    
    document.getElementById("windchill").innerHTML = weatherInfo.current_observation.windchill_f + " &deg;F";
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    var icon_path = weatherInfo.current_observation.icon_url;
    
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0) {
        icon_path = icon_path.replace("http","https");
    }
    
    document.getElementById('icon').src = icon_path
    
    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('writtenWeather').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}




















