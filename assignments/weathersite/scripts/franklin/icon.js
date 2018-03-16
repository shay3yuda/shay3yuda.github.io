var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById("icon").src = weatherInfo
.current_observation.icon_url;
}

