$(document).ready(function(){

	$('.diceslider').slick({
		infinite: false,
		dots: true,
		accessibility: true,
		arrows: false,
		speed: 200,
		swipe: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					swipe: true
			  	}
			}
		]
	});

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

		//create a random number with its max the value of the dice
		var randomNumber = Math.floor(Math.random() * currentDice) + 1;

		if (randomNumber == badRoll) {
			$('#result').css( "color", "#dc3838" );
		} else {
			$('#result').css( "color", "#18495b" );
		}

		//send the output to the screen
		$('#result').hide().fadeIn(500).text("You rolled: " + randomNumber);
	});

		$('#loading').fadeOut();
});

//If you're reading this, I'm sorry there's nothing worthwhile to see.
//So here's a row of ducklings:
//          _      _      _
//       __(.)< __(.)> __(.)=
//       \___)  \___)  \___)