$(document).ready(function(){

	$(".phone-button").hover(

		function(){

		$(".phone-button > i").addClass("phone-button-hover");

	}, function (){

		$(".phone-button > i").removeClass("phone-button-hover");

	});

});