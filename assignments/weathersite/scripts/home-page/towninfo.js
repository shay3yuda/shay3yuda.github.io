    var header = document.querySelector('header');

    var section = document.querySelector('section');


    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
        
    request.responseType = 'json';  
    request.send();
        
    request.onload = function() {
        var town = request.response;
        populateHeader(town);
        showTownInfo(town);
    }
    
    function populateHeader(jsonObj) {
        
        var myH1 = document.createElement('h1');
        header.appendChild(myH1);
        
        var myPara = document.createElement("p");
        header.appendChild(myPara);
    }
    
    function showTownInfo(jsonObj) {
        
        var townName = jsonObj["towns"];
        townName.splice(2,1);
    
        for (var i = 0; i < townName.length; i++) {
            
            var myArticle = document.createElement("article");
            var myH2 = document.createElement("h2");
            var myH3 = document.createElement("h3");
            var myPara1 = document.createElement("p");
            var myPara2 = document.createElement("p");
            var myPara3 = document.createElement("p");
            var myH4 = document.createElement("h4");
            var myList = document.createElement("ul");
            
            myH2.textContent = townName[i].name;
            myH3.textContent = "Motto: " + townName[i].motto;
            myPara1.textContent = "Year founded: " + townName[i].yearFounded;
            myPara2.textContent = "Current Population: " + townName[i].currentPopulation;
            myPara3.textContent = "Average Rainfall: " + townName[i].averageRainfall;
            myH4.textContent = "Events: ";
            
            var events = townName[i].events;
            for (var j = 0; j < events.length; j++) {
                var listItem =  document.createElement("li");
                listItem.textContent = events[j];
                myList.appendChild(listItem);
            }
            
        myArticle.appendChild(myH2); 
        myArticle.appendChild(myH3);    
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myH4);    
        myArticle.appendChild(myList);
            
        section.appendChild(myArticle);      
        }
    }