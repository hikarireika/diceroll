$(document).ready(function(){

	 $('.diceslider').slick({
	 	 infinite: false,
		 dots: true,
		 accessibility: true,
		 arrows: false,
		speed: 200,
		swipe: false,
	  });

	 // $('#btn-left').slickPrev();


	 $('#btn-right').click(function(){

	 	$('.diceslider').slick('slickNext');
	 
	 });
	
	$('#btn-left').click(function(){

	 	$('.diceslider').slick('slickPrev');
	 
	 });


	$('.dice').click(function(){

		//find out what type of dice this is
		var currentDice = $(this).attr('value');
		var badRoll = "1"
		// console.log(currentDice);

		

		//create a random number with its max the value of the dice
		var randomNumber = Math.floor(Math.random() * currentDice) + 1;

		if (randomNumber == badRoll) {
			console.log("it's one");
			$('#result').css( "color", "#dc3838" );
		} else {
			console.log("not the one");
			$('#result').css( "color", "#18495b" );
		}


		//send the output to the screen
		$('#result').hide().fadeIn(500).text("You rolled: " + randomNumber);


	});

});