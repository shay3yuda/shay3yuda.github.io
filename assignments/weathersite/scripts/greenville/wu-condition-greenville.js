

var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/conditions/q/TX/Greenville.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_1hr_in;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    var icon_path = weatherInfo.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0){
        icon_path = icon_path.replace("http", "https");
    }
    
    document.getElementById('icon').src = icon_path;
    
}

/*
var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', '//api.wunderground.com/api/4326409d402b76d5/forecast/q/TX/Greenville.json', true);
forcastObject.send();

forcastObject.onload = function(){
    var forcastInfo= JSON.parse(forcastObject.responseText);
    console.log(forcastInfo);
    
    /* document.getElementById('hi').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('conditions').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].conditions;
    */
    /*
    document.getElementById('forcast').innerHTML = forcastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
}
*/