var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", 'https://api.wunderground.com/api/45c5dafb23a1ef08/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {

var icon_path = weatherInfo.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0){
        icon_path = icon_path.replace("http", "https");
    }
    
    document.getElementById('w_icon').src = icon_path;
}

