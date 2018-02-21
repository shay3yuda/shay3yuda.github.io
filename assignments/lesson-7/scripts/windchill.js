function windchill(){
    
    var t = windspeed();
    var s = averageTemp();
    
    var f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16; 
    
    document.getElementById("windChill").innerHTML = f;
}


// WINDSPEED FUNCTION

function windspedd(){
    
    
}

// AVERAGE TEMPATER FUNCTION    

function averageTemp() {
    
    
}