$(document).ready(function(){
	var molecules = {
		name: "molecules",
		amount: 0,
		increment: 0,
		clicker: 1
	};
	var clicks = 0;
	var stellarNebula = {
		name:"Stellar Nebula",
		amount: 0,
		power: 0.1,
		price: 15
	};
	var planet = {
		name:"Planet",
		amount: 0,
		power: 0.5,
		price: 100
	};
	var star = {
		name:"Star",
		amount: 0,
		power: 4,
		price: 500
	};
	var solarSystem = {
		name:"Solar System",
		amount: 0,
		power: 10,
		price: 3000
	};
	var supergiant = {
		name:"Supergiant",
		amount: 0,
		power: 40,
		price: 10000
	};
	var galaxy = {
		name:"Galaxy",
		amount: 0,
		power: 100,
		price: 40000
	};
	var supernova = {
		name:"Supernova",
		amount: 0,
		power: 400,
		price: 200000
	};
	var blackHole = {
		name:"Black Hole",
		amount: 0,
		power: 1600,
		price: 1000000
	};
	var life = {
		name:"Life",
		amount: 0,
		power: 0,
		price: 10000000
	};
	
	var perksAmount = 0;
	var betterClicker = {
		name:"Better Clicks",
		amount: 0,
		power: 2,
		displayed: false,
		price: 30
	};
	
	function addCommas(val){
		while (/(\d+)(\d{3})/.test(val.toString())){
		  val = ((Math.round(val*10))/10).toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
		};
		return val;
	}
	
	function updateAmounts(){
		$("#moleculesAmount").text(addCommas(molecules.amount));
		$("#stellarNebulaAmount").text(addCommas(stellarNebula.amount));
		$("#stellarNebulaPrice").text(addCommas(stellarNebula.price));
		$("#planetAmount").text(addCommas(planet.amount));
		$("#planetPrice").text(addCommas(planet.price));
		$("#starAmount").text(addCommas(star.amount));
		$("#starPrice").text(addCommas(star.price));
		$("#solarSystemAmount").text(addCommas(solarSystem.amount));
		$("#solarSystemPrice").text(addCommas(solarSystem.price));
		$("#supergiantAmount").text(addCommas(supergiant.amount));
		$("#supergiantPrice").text(addCommas(supergiant.price));
		$("#galaxyAmount").text(addCommas(galaxy.amount));
		$("#galaxyPrice").text(addCommas(galaxy.price));
		$("#supernovaAmount").text(addCommas(supernova.amount));
		$("#supernovaPrice").text(addCommas(supernova.price));
		$("#blackHoleAmount").text(addCommas(blackHole.amount));
		$("#blackHolePrice").text(addCommas(blackHole.price));
		$("#lifeAmount").text(addCommas(life.amount));
		$("#lifePrice").text(addCommas(life.price));
		
		molecules.increment = (stellarNebula.amount * stellarNebula.power) + (planet.amount * planet.power) + (star.amount * star.power) + (solarSystem.amount * solarSystem.power) + (supergiant.amount * supergiant.power) + (galaxy.amount * galaxy.power) + (supernova.amount * supernova.power) + (blackHole.amount * blackHole.power);
	}
	updateAmounts();
	
	function checkUpgrades(){
		if(molecules.amount >= 12){
			$("#stellarNebulaClick").fadeIn("fast");
		}
		if(molecules.amount >= 75 && stellarNebula.amount >= 1){
			$("#planetClick").fadeIn("fast");
		}
		if(molecules.amount >= 375 && planet.amount >= 1){
			$("#starClick").fadeIn("fast");
		}
		if(molecules.amount >= 2250 && star.amount >= 1){
			$("#solarSystemClick").fadeIn("fast");
		}
		if(molecules.amount >= 7500 && solarSystem.amount >=  1){
			$("#supergiantClick").fadeIn("fast");
		}
		if(molecules.amount >= 30000 && supergiant.amount >=  1){
			$("#galaxyClick").fadeIn("fast");
		}
		if(molecules.amount >= 150000 && galaxy.amount >=  1){
			$("#supernovaClick").fadeIn("fast");
		}
		if(molecules.amount >= 750000 && supernova.amount >=  1){
			$("#blackHoleClick").fadeIn("fast");
		}
		if(molecules.amount >= 7500000 && supernova.amount >=  1){
			$("#lifeClick").fadeIn("fast");
		}
		
		if(molecules.amount >= stellarNebula.price){
			$("#stellarNebulaClick .title, #stellarNebulaClick .amount, #stellarNebulaClick .desc").css("color", "#fff");
		}else{
			$("#stellarNebulaClick .title, #stellarNebulaClick .amount, #stellarNebulaClick .desc").css("color", "#444");
		}
		if(molecules.amount >= planet.price){
			$("#planetClick .title, #planetClick .amount, #planetClick .desc").css("color", "#fff");
		}else{
			$("#planetClick .title, #planetClick .amount, #planetClick .desc").css("color", "#444");
		}
		if(molecules.amount >= star.price){
			$("#starClick .title, #starClick .amount, #starClick .desc").css("color", "#fff");
		}else{
			$("#starClick .title, #starClick .amount, #starClick .desc").css("color", "#444");
		}
		if(molecules.amount >= solarSystem.price){
			$("#solarSystemClick .title, #solarSystemClick .amount, #solarSystemClick .desc").css("color", "#fff");
		}else{
			$("#solarSystemClick .title, #solarSystemClick .amount, #solarSystemClick .desc").css("color", "#444");
		}
		if(molecules.amount >= supergiant.price){
			$("#supergiantClick .title, #supergiantClick .amount, #supergiantClick .desc").css("color", "#fff");
		}else{
			$("#supergiantClick .title, #supergiantClick .amount, #supergiantClick .desc").css("color", "#444");
		}
		if(molecules.amount >= galaxy.price){
			$("#galaxyClick .title, #galaxyClick .amount, #galaxyClick .desc").css("color", "#fff");
		}else{
			$("#galaxyClick .title, #galaxyClick .amount, #galaxyClick .desc").css("color", "#444");
		}
		if(molecules.amount >= supernova.price){
			$("#supernovaClick .title, #supernovaClick .amount, #supernovaClick .desc").css("color", "#fff");
		}else{
			$("#supernovaClick .title, #supernovaClick .amount, #supernovaClick .desc").css("color", "#444");
		}
		if(molecules.amount >= blackHole.price){
			$("#blackHoleClick .title, #blackHoleClick .amount, #blackHoleClick .desc").css("color", "#fff");
		}else{
			$("#blackHoleClick .title, #blackHoleClick .amount, #blackHoleClick .desc").css("color", "#444");
		}
		if(molecules.amount >= life.price){
			$("#lifeClick .title, #lifeClick .amount, #lifeClick .desc").css("color", "#fff");
		}else{
			$("#lifeClick .title, #lifeClick .amount, #lifeClick .desc").css("color", "#444");
		}
		
		if(clicks >=  20 && betterClicker.amount == 0 && betterClicker.displayed == false){
			$("#betterClicker").fadeIn("fast");
			betterClicker.displayed = true;
			perksAmount++;
		}
	}
	
	$("#betterClicker").click(function(){
		if(molecules.amount >= betterClicker.price){
			molecules.amount = molecules.amount - betterClicker.price;
			molecules.clicker = molecules.clicker * betterClicker.power;
			$("#betterClicker").fadeOut("fast");
			betterClicker.amount++;
			perksAmount--;
		}
	});
	
	  $(".perks").hover(
		function() {
		  $(this).animate({
			height: Math.ceil(perksAmount/7)*50
			}, 'fast'
		  );
		},
		function() {
		  $(this).animate({
			height: '50px'
			}, 'fast'
		  );
		}
	  );
	 
	
	$("#moleculesClick").click(function(){
		molecules.amount += molecules.clicker;
		clicks++;
		updateAmounts();
		checkUpgrades();
	});
	
	$("#stellarNebulaClick").click(function(){
		if(molecules.amount >= stellarNebula.price){
			molecules.amount -= stellarNebula.price;
			stellarNebula.amount++;
			stellarNebula.price = Math.round(stellarNebula.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#planetClick").click(function(){
		if(molecules.amount >= planet.price){
			molecules.amount -= planet.price;
			planet.amount++;
			planet.price = Math.round(planet.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#starClick").click(function(){
		if(molecules.amount >= star.price){
			molecules.amount -= star.price;
			star.amount++;
			star.price = Math.round(star.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#solarSystemClick").click(function(){
		if(molecules.amount >= solarSystem.price){
			molecules.amount -= solarSystem.price;
			solarSystem.amount++;
			solarSystem.price = Math.round(solarSystem.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#supergiantClick").click(function(){
		if(molecules.amount >= supergiant.price){
			molecules.amount -= supergiant.price;
			supergiant.amount++;
			supergiant.price = Math.round(supergiant.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#galaxyClick").click(function(){
		if(molecules.amount >= galaxy.price){
			molecules.amount -= galaxy.price;
			galaxy.amount++;
			galaxy.price = Math.round(galaxy.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#supernovaClick").click(function(){
		if(molecules.amount >= supernova.price){
			molecules.amount -= supernova.price;
			supernova.amount++;
			supernova.price = Math.round(supernova.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#blackHoleClick").click(function(){
		if(molecules.amount >= blackHole.price){
			molecules.amount -= blackHole.price;
			blackHole.amount++;
			blackHole.price = Math.round(blackHole.price * 1.2);
			updateAmounts();
			checkUpgrades();
		}
	});
	$("#lifeClick").click(function(){
		if(molecules.amount >= life.price){
			molecules.amount -= life.price;
			life.amount++;
			life.price = Math.round(life.price * 1.2);
			updateAmounts();
			window.location = "index.html";
		}
	});
	window.setInterval(function(){
  		molecules.amount += molecules.increment;
		updateAmounts();
	}, 1000);
	
});



