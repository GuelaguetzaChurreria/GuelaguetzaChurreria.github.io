//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "06 January 2024 15:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
