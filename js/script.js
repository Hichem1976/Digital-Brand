$(window).on('load',function(){
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut();
});


$(function(){
	$("#team-members").owlCarousel({
		items:2
	});
	$(".progress-bar").each(function(){


		$(this).animate({
			width: $(this).attr("aria-valuenow")
		})
	});

});



$(function(){
	$('#services-tabs').responsiveTabs({
    	startCollapsed: 'accordion',
    	animation: 'scroll'
	});
});

$(function(){
	var $grid =$('.isotope-container').isotope();
	$('.isotope-filters').on('click','button',function(){
		 var filterValue = $(this).attr('data-filter');
  		$grid.isotope({ filter: filterValue });
	});

});


$(function(){
	$('#testimonial-slider').owlCarousel({
		items: 1,
		nav: true
	});

});


