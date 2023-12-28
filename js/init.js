//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "29 December 2023 19:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
