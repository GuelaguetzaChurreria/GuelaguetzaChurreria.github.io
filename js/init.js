//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 February 2024 22:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
