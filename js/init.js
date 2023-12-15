//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "02 Jan 2024 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
