$(document).ready(function() {


//when click submit button, takes value, compares city, changes background
	$('#submit-btn').click(function background(){

		//sets variable city, takes in input value
		var city = $('#city-type').val();
		console.log(city);

		// converts input value into white space-free
		city=city.trim();

		//compares, changes background accordingly
		if ((city === 'New York') || (city === 'New York City') || (city === 'NYC')){		
			$('body').attr('class','nyc');
	
			
		} else if ((city === 'San Francisco') || (city === 'SF') || (city === 'Bay Area')){
			$('body').attr('class','sf');
		

		} else if ((city === 'Los Angeles') || (city === 'LA') || (city === 'LAX')){
			$('body').attr('class','la');
		

		} else if ((city === "Austin") || (city === "ATX" )){
			$('body').attr('class','austin');
	

		} else if ((city === "Sydney") || (city === "SYD" )){
			$('body').attr('class','sydney');

		}


		// Resets input to placeholder text
		$('#city-type').val("");
		// $('#city-type').attr('placeholder', 'Enter a city name...');


	});


	// Prevent submit page reload
	 $("#submit-btn").on('click', function(event){
	    event.preventDefault();
	});


});