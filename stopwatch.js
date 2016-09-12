
var time = 0;
var working = 0;
var stopwatch = { //stopwatch object
	// Start the stopwatch
	start: function() {
		if(working === 0) { // if the stopwatch is not running, run the function
			working = 1; // Stopwatch is running
			this.increment(); // Running the increment() function
		}
	},
	// Reset the stopwatch
	reset: function() {
		time = 0; // Setting the time to zero
		document.getElementById("timer").innerHTML = "00:00:00:00"; // Changing the HTML to 00:00:00:00
		working = 0; // Stopwatch is not running
	},
	// Stop the stopwatch
	stop: function() {
		if(working === 1) { // If the stopwatch is working, run the function
			clearInterval(timer); // Stop the setInterval function from running
			working = 0; // Stopwatch is not running
		}
	},
	// Creating a function for incrementing the time
	increment: function() {
		// Giving the setInterval function a property called "timer", so it can be called in the stop() function clearInterval call 
		timer = setInterval(function(){
			time++; // incrementing the time variable
			var hour = Math.floor(time/10/60/60); // Setting the hour variable
			var min = Math.floor(time/10/60); // Setting the minutes variable
			var sec = Math.floor(time/10%60); // Setting the seconds variable
			var ms = time % 10; // Setting the milliseconds variable

			// For better appearance, adding a zero infront of the minutes, in case it's less than 10
			if(min < 10) {
				min = "0" + min;
			}
			// For better appearance, adding a zero infront of the seconds, in case it's less than 10
			if(sec < 10) {
				sec = "0" + sec;
			}
			// For better appearance, adding a zero infront of the hours, in case it's less than 10
			if(hour < 10) {
				hour = "0" + hour;
			}
			// Changing HTML to display the time running
			document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec + ":" + "0" + ms;
		}, 100); // Waiting 100ms to run the function again
	}
}




