    var wch = windChill(); 

function windChill() {  
    var high = 90
    
    var low = 60
    
    var s = 5
    
    var t = averageTemp(high, low);

    var sPow = Math.pow(s, .16);
    
    var f = 35.74 + (0.6215 * t) + (-35.75 * sPow) + (0.4275 * t * sPow);

    frounded =  f.toFixed(2);
    return frounded;
}

// AVERAGE TEMPATER FUNCTION    

function averageTemp(high, low) {
    
    var h = high
    var l = low
    
    var average = (h + l) / 2
    return average;
}
document.getElementById("windchill").innerHTML = wch + " &#8457;";