//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "19 nov 2023 05:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
