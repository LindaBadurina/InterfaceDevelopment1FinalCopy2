$(document).ready (function() {

var score = 0;

$(".orange").click (function() {
	score = score + 1;
	$(".score").html("Fruits Juiced = " + score);

	if (score == 2 ) {
		$(".jug").attr("src","img/jug2.png");
	}

	else if (score == 4 ) {
		$(".jug").attr("src","img/jug3.png");

	}

	else if (score == 6 ) {
		$(".jug").attr("src","img/jug4.png");

	}

	else if (score == 8 ) {
		$(".jug").attr("src","img/jug5.png");

	}

	else if (score == 10 ) {
		$(".jug").attr("src","img/jug6.png");

	}

	else if (score == 12 ) {
		$(".jug").attr("src","img/jug7.png");

	}

	else if (score == 14 ) {
		$(".jug").attr("src","img/jug8.png");

	}

	else if (score == 16 ) {
		$(".jug").attr("src","img/jug9.png");

	}

	else if (score == 18 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/strawberry.png");
		$(".orange").css("margin-top", "160px");
	}
	
	else if (score == 20 ) {
		$(".jug").attr("src","img/strawjug2.png");

	}

	else if (score == 22 ) {
		$(".jug").attr("src","img/strawjug3.png");

	}

	else if (score == 24 ) {
		$(".jug").attr("src","img/strawjug4.png");

	}

	else if (score == 26 ) {
		$(".jug").attr("src","img/strawjug5.png");

	}

	else if (score == 28 ) {
		$(".jug").attr("src","img/strawjug6.png");

	}

	else if (score == 30 ) {
		$(".jug").attr("src","img/strawjug7.png");

	}

	else if (score == 32 ) {
		$(".jug").attr("src","img/strawjug8.png");

	}

	else if (score == 34 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/chocolatebar.png");
		$(".orange").css("margin-top", "180px" );
	}

	else if (score == 36 ) {
		$(".jug").attr("src","img/chochjug2.png");

	}

	else if (score == 38 ) {
	$(".jug").attr("src","img/chochjug3.png");

	}

	else if (score == 40 ) {
	$(".jug").attr("src","img/chochjug4.png");

	}

	else if (score == 42 ) {
	$(".jug").attr("src","img/chochjug5.png");

	}

	else if (score == 44 ) {
	$(".jug").attr("src","img/chochjug6.png");

	}

	else if (score == 46 ) {
	$(".jug").attr("src","img/chochjug7.png");

	}

	else if (score == 48 ) {
	$(".jug").attr("src","img/chochjug8.png");

	}

	else if (score == 50 ) {
	$(".jug").attr("src","img/chochjug9.png");

	}




});

});


