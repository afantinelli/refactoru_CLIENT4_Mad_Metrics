console.log("BEGIN NEW DATA SET");
var now = new Date();

var secondaryTimer = new Date();

masterTimer = secondaryTimer.getTime();

var firstClick = function() {
			//$('#first').on('click',firstClick);
			var timerStop = new Date();
			console.log(timerStop.getTime());

			var timeTotal = (timerStop - now) / 1000;
			console.log(timeTotal); 

		};

$(document).ready(function() {
		$('#first').text('SIGN UP');
		$('#first').on('click',firstClick);

		console.log(now.getTime());

});

		$(document).scroll(function() {
			var scrollAmount = $(window).scrollTop();
			var documentHeight = $(document).height();
			var scrollPercent = (scrollAmount / documentHeight) * 100;
			console.log(scrollPercent);
			console.log(scrollAmount + " pixels.");

			if(scrollPercent > 99) {
				doSomething();
			};
			function doSomething() {
				alert("You've reached the end of the page");
			};




//Track time spent in each page quadrant

// var sectionTime = function() {
var sectionTime = function() {
		var timerStop = new Date();
		var timerOne = timerStop.getTime();
		var timeTotal = (timerOne - masterTimer) / 1000;
		console.log(timeTotal + " seconds at Quadrant 1"); 

		var timerStop2 = new Date();
		var timerTwo = timerStop2.getTime();
		console.log("Is timerTwo working? " + timerTwo);


		var timeTotal = (timerOne - masterTimer) / 1000;
	
		var timeTotal2 = (timerTwo - masterTimer - timeTotal) / 1000;
		console.log(timeTotal2 + " seconds at Quadrant 2"); //Nan seconds

		var timerStop3 = new Date();
		var timerThree = timerStop3.getTime();
		
		console.log(timerThree + " milliseconds");

		var timeTotal3 = (timerThree - masterTimer - timeTotal2) / 1000;
		console.log(timeTotal3 + " seconds at Quadrant 3"); 

		var timerStop4 = new Date();
		var timerFour = timerStop4.getTime();
		
		console.log(timerFour + " milliseconds");

		var timeTotal4 = (timerFour - masterTimer - timeTotal3) / 1000;
		console.log(timeTotal4 + " seconds at Quadrant 4"); 

		console.log("Coffee = " + timerOne); //undefined
		console.log("Donut = " + masterTimer); //integer
		console.log("Bagel = " + timerTwo); //integer
		console.log("Banana = " + timerThree);
		console.log("Orange = " + timerFour);

		console.log(timeTotal);





		//Begin If statement
		if (scrollPercent < 25) {
		
		var timerStop = new Date();
		var timerOne = timerStop.getTime();
		console.log("Is timerOne working? " + timerOne);
		
		console.log(timerOne + " milliseconds");

		var timeTotal = (timerOne - masterTimer) / 1000;
		console.log(timeTotal + " seconds at Quadrant 1"); 
	

	} else if ((scrollPercent >= 25) && (scrollPercent <= 50)) {
		//Take time stamp as scrollPercent exceeds 25.
		var timerStop2 = new Date();

		var timerTwo = timerStop2.getTime();
		console.log("Is timerTwo working? " + timerTwo);


		//Log the number of milliseconds on the time stamp
		
		var timeTotal = (timerOne - masterTimer) / 1000;
		//Calculate new time stamp - (time spent in Quartile 1 + time of page load)
		var timeTotal2 = (timerTwo - masterTimer - timeTotal) / 1000;
		console.log(timeTotal2 + " seconds at Quadrant 2"); //Nan seconds
	

	} else if ((scrollPercent >= 50) && (scrollPercent <= 75)) {
		
		var timerStop3 = new Date();
		var timerThree = timerStop3.getTime();
		
		console.log(timerThree + " milliseconds");

		var timeTotal3 = (timerThree - masterTimer - timeTotal2) / 1000;
		console.log(timeTotal3 + " seconds at Quadrant 3"); 
	
	
	
	} else if (scrollPercent >= 75) {
		
		var timerStop4 = new Date();
		var timerFour = timerStop4.getTime();
		
		console.log(timerFour + " milliseconds");

		var timeTotal4 = (timerFour - masterTimer - timeTotal3) / 1000;
		console.log(timeTotal4 + " seconds at Quadrant 4"); 
	
	
	} else {
		console.log("WTF")
	};

//Utilize variables to calculate time values OUTSIDE the conditional



console.log("Coffee = " + timerOne); //undefined
console.log("Donut = " + masterTimer); //integer
console.log("Bagel = " + timerTwo); //integer
console.log("Banana = " + timerThree);
console.log("Orange = " + timerFour);








};
sectionTime();

// for (scrollPercent = 0; i = 25; i = i + 25) {
// 		var timerStop = new Date();
// 		var timerOne = timerStop.getTime();
		

// 		var timeTotal = (timerOne - masterTimer) / 1000;
		

// 		var timerStop2 = new Date();
// 		var timerTwo = timerStop2.getTime();
	
		
// 		var timeTotal2 = (timerTwo - masterTimer - timeTotal) / 1000;
	

// 		var timerStop3 = new Date();
// 		var timerThree = timerStop3.getTime();
		
	

// 		var timeTotal3 = (timerThree - masterTimer - timeTotal2) / 1000;
		

// 		var timerStop4 = new Date();
// 		var timerFour = timerStop4.getTime();
		
		

// 		var timeTotal4 = (timerFour - masterTimer - timeTotal3) / 1000;
		
// };

// console.log(timeTotal4);






//<canvas> to create heatmap
//Within canvas, create object that maps each pixel to time spent clicking/hovering


});