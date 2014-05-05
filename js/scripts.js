$(document).ready(function(){	


	function delayedLink() {
		timeoutID = window.setTimeout(slowLink, 400);
	}
	
	function slowLink() {
		window.location = 'starfield.html';
	}
	$("#sl_1").click(function(){
		$(this).replaceWith("<h1 class='sl_1_done'>SOMETHING</h1>");
		$(".part2").fadeIn("slow");
	});
	
	$(".flicker").click(function(){
		$(".part3").fadeIn("slow");
		$('.rumble').jrumble({
			speed: 50
		});
		$('.rumble').trigger('startRumble');
	});
	
	$(".rumble").click(function(){
		$('.part4').fadeIn('slow');
	});
	$(".flash").click(function(){
		$("#light").fadeIn(200);
		$("#light").animate({backgroundColor: "fff"}, 200);
		delayedLink();
	});
	$("#everything").click(function(){
		$(".part5").fadeOut("fast");
		$(".part6").fadeIn("fast");
	});
	$("#sum").click(function(){
		$(".part6").fadeOut("fast");
		$(".part7").fadeIn("fast");
	});
	$("#molecule").click(function() {
 		newLocation = "thebeginning.html";
 		$('body').fadeOut('slow', newpage);
 	});
 	function newpage() {
 		window.location = newLocation
	}
});