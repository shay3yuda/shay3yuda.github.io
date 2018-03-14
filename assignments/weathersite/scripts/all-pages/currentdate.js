//current date. Week day, Month, Date, year.

var formatted = formatDate();

document.getElementById("currentdate").innerHTML = formatted;



function formatDate() { 
  var day = weekDayname();
  var month = monthName();
  
  var d = new Date();
  var date = d.getDate();
  var year = d.getFullYear();

  return day + ', ' + date + ' ' + month + ' ' + year;
}


function weekDayname() {
    
    var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
	var d = new Date();
    var dayIndex = d.getDay() - 1;
	
	var Day = day[dayIndex]
    
    return Day;
}

function monthName() {
    
    var names = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
    
	var d = new Date();
    var monthIndex = d.getMonth();
	
	var month = names[monthIndex]
    
    return month;
	}