var serviceData = new XMLHttpRequest();
		serviceData.open('GET', 'https://shay3yuda.github.io/mountainspokes/data/servicetable.json', true );
		
		serviceData.send();
		
		serviceData.onload = function (){
			
			var tableInfo = JSON.parse(serviceData.responseText);
			
			
		
		console.log(tableInfo);	
			
			//Tune Ups
		document.getElementById("tuneUps").innerHTML = tableInfo.titleTune;	
			
			document.getElementById("tune1").innerHTML = tableInfo.type1;
			document.getElementById("tune2").innerHTML = tableInfo.type2;
			document.getElementById("tune3").innerHTML = tableInfo.type3;
			document.getElementById("tune4").innerHTML = tableInfo.type4;

			document.getElementById("tune_c1").innerHTML = tableInfo.cost1;
			document.getElementById("tune_c2").innerHTML = tableInfo.cost2;	
			document.getElementById("tune_c3").innerHTML = tableInfo.cost3;	
			document.getElementById("tune_c4").innerHTML = tableInfo.cost4;

			//Breaks			
		document.getElementById("breaks").innerHTML = tableInfo.titlebrakes;	
			
			
			document.getElementById("brake1").innerHTML = tableInfo.braketype1;
			document.getElementById("brake2").innerHTML = tableInfo.braketype2;
			document.getElementById("brake3").innerHTML = tableInfo.braketype3;
			document.getElementById("brake4").innerHTML = tableInfo.braketype4;
			
			document.getElementById("brake_c1").innerHTML = tableInfo.brakecost1;
			document.getElementById("brake_c2").innerHTML = tableInfo.brakecost2;
			document.getElementById("brake_c3").innerHTML = tableInfo.brakecost3;
			document.getElementById("brake_c4").innerHTML = tableInfo.brakecost4;
			
			
			//Wheels	
		document.getElementById("wheels").innerHTML = tableInfo.titleWheels;
			
			document.getElementById("wheel1").innerHTML = tableInfo.wheelstype1;
			document.getElementById("wheel2").innerHTML = tableInfo.wheelstype2;
			document.getElementById("wheel3").innerHTML = tableInfo.wheelstype3;
			document.getElementById("wheel4").innerHTML = tableInfo.wheelstype4;
			
			document.getElementById("wheel_c1").innerHTML = tableInfo.wheelscost1;
			document.getElementById("wheel_c2").innerHTML = tableInfo.wheelscost2;
			document.getElementById("wheel_c3").innerHTML = tableInfo.wheelscost3;
			document.getElementById("wheel_c4").innerHTML = tableInfo.wheelscost4;
			
			//Installs
		document.getElementById("installs").innerHTML = tableInfo.titleInstalls;
			
			document.getElementById("install1").innerHTML = tableInfo.installstype1;
			document.getElementById("install2").innerHTML = tableInfo.installstype2;
			document.getElementById("install3").innerHTML = tableInfo.installstype3;
			document.getElementById("install4").innerHTML = tableInfo.installstype4;
			
			document.getElementById("install_c1").innerHTML = tableInfo.installscost1;
			document.getElementById("install_c2").innerHTML = tableInfo.installscost2;
			document.getElementById("install_c3").innerHTML = tableInfo.installscost3;
			document.getElementById("install_c4").innerHTML = tableInfo.installscost4;
			
		}