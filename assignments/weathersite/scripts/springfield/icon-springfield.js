var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/conditions/q/OR/Springfield.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById("icon").src = weatherInfo
.http://icons.wxug.com/i/c/k/partlycloudy.gif;
}

