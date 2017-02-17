$(document).ready(function(){

	 $('.diceslider').slick({
	 	infinite: false,
	 	dots: false,
	 	arrows: false,
	  });

	$('.dice').click(function(){

		//find out what type of dice this is
		var currentDice = $(this).attr('value');
		console.log(currentDice);

		//create a random number with its max the value of the dice
		var randomNumber = Math.floor(Math.random() * currentDice) + 1

		//send the output to the screen
		$('#output').text("Your roll is: " + randomNumber);

	});

});