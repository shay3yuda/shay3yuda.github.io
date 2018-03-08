

var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById("currentTemp").innerHTML = weatherInfo.current_observation.temp_f + " &deg;F";
    
    document.getElementById("windspeed").innerHTML = weatherInfo.current_observation.wind_gust_mph + " MPH";
    
    document.getElementById("icon").src = weatherInfo.current_observation.icon_url;
    
    document.getElementById("windchill").innerHTML = weatherInfo.current_observation.windchill_f + " &deg;F";
    
    document.getElementById("precipitation").innerHTML = weatherInfo.current_observation.precip_today_in + " Inches Today";
}





















