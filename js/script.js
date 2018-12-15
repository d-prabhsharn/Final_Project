$(document).ready(function(){


	$(".headerSection").height('100%');	
	$(".headerImage").show('slide', {direction: 'left'});	
	$(".headerInfo").fadeIn(1000);	

	$('#testimonial-slider').owlCarousel({
		items:3,
		itemsDesktop:[1000,3],
		itemsDesktopSmall:[979,2],
		itemsTablet:[786,3],
		itemsMobile:[650,1],
		pagination:true,
		autoPlay:true
	});
 

});
	function scrollMenu(){
		var scroll = $(document).scrollTop();
		if(scroll > 100)
		{
			
			$("nav").addClass("menu");
		}
		else{
			$("nav").removeClass("menu");
		}
		if(scroll > 400)
		{
			$('.contentBox').fadeIn(2000);
		}
		if(scroll > 1050)
		{
			$('.news').fadeIn(2000);
		}
		if(scroll > 1750)
		{
			$('.testi-slider').fadeIn(2000);
		}
		
	
	}$(document).ready(function(){
	$(".headerSection").height('100%');	
	$(".headerImage").show('slide', {direction: 'left'}, 1000);	
	$(".headerInfo").fadeIn(1000);	

	$('#testimonial-slider').owlCarousel({
		items:3,
		itemsDesktop:[1000,3],
		itemsDesktopSmall:[979,2],
		itemsTablet:[786,3],
		itemsMobile:[650,1],
		pagination:true,
		autoPlay:true
	})	

});
	function scrollMenu(){
		var scroll = $(document).scrollTop();
		if(scroll > 100)
		{
			
			$("nav").addClass("menu");
		}
		else{
			$("nav").removeClass("menu");
		}
		if(scroll > 400)
		{
			$('.contentBox').fadeIn(2000);
		}
		if(scroll > 1050)
		{
			$('.news').fadeIn(2000);
		}
		if(scroll > 1750)
		{
			$('.testi-slider').fadeIn(2000);
		}
		
	
	}

