var city;
function getcityweather(){	
	this.city = $("#city").val();
	ajaxfunction();
}

function getcityweatherfromlist(sel){	
	var selectedcity = document.getElementById(sel);
	this.city = selectedcity.options[selectedcity.selectedIndex].text;	
	if(city == "Select City"){
		alert("Please select city");
	}else{
		ajaxfunction();
	}	
}

function ajaxfunction(){
	
	$.ajax({
              url:'http://api.openweathermap.org/data/2.5/weather',
              dataType:'json',
              type:'GET',
              data:{q:city, appid: 'PleaseProvideYourApiIdHere', units: 'metric'},

              success: function(dataresponse){
				  var weatherdata = '';
				  
					  //$.each(dataresponse.weather, function(index, val){					
					
						weatherdata += 	'<p>Current Weather Details for : '+ dataresponse.name + '</p><hr/>'+						
										'<p>Average Temperature : '+ dataresponse.main.temp + '*C</p>'+
										'<p>Wind Speed : '+ dataresponse.wind.speed + 'km/hr</p>'+
										'<p>Humidity : '+ dataresponse.main.humidity + '%</p>' +
										'<p>Visibility : '+ dataresponse.visibility + '</p>'
											

                //});                
               $(".showweather").html(weatherdata);
              }
			  
			  
            });
}

function populatecity(c1,c2){
	var s1 = document.getElementById(c1);
	var s2 = document.getElementById(c2);
	s2.innerHTML = "";
	if(s1.value == "India"){
		var optionArray = ["|Select City", "Delhi|Delhi", "Mumbai|Mumbai", "Pune|Pune", "Chennai|Chennai"];
	} else if(s1.value == "Poland"){
		var optionArray = ["|Select City", "Warsaw|Warsaw", "Gdansk|Gdansk", "Krakow|Krakow"];
	} else if(s1.value == "United States"){
		var optionArray = ["|Select City","New York|New York","Charlotte|Charlotte"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}	