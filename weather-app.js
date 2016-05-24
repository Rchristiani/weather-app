// a30713ae62fb4d00

var weatherWidget = {};

weatherWidget.apiUrl = 'http://api.wunderground.com/api/a30713ae62fb4d00/conditions/q/CANADA/Toronto.json';

weatherWidget.init = function() {
	//This code in here is used to initialize our application
	weatherWidget.getData();
};

//When the page loads get some data
//Make an AJAX call to the wundergrounds 
weatherWidget.getData = function() {
	$.ajax({
		url: weatherWidget.apiUrl,
		method: 'GET',
		dataType: 'json'
	})
	.then(function(weatherData) {
		// console.log(weatherData);
		// console.log(weatherData.current_observation);
		var observation = weatherData.current_observation;
		weatherWidget.displayWeather(observation);
	});
};
//When the data returns we want to display specific things(Found on the HTML page)

weatherWidget.displayWeather = function(weather) {
	console.log(weather);
	var city = weather.display_location.city;
	$('.city_name').text(city);
	var temp_c = weather.temp_c;
	$('.temp_c').text(temp_c);
	var time = weather.local_time_rfc822;
	$('.date_time').text(time);
	var condition = weather.weather;
	$('.weather_string').text(condition);
	var image = weather.icon_url;
	$('.weather_image').attr('src',image);
};


$(document).ready(function(){
  weatherWidget.init();
});