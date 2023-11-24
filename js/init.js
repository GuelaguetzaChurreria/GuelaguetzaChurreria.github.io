//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "13 dec 2023 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
