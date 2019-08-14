$( function() {
	$( "#accordion" ).accordion();
});

(function($){
	$(function() {
		$('.menu__icon').on('click', function() {
		$(this).closest('.hamburg__menu').toggleClass('menu_state_open');
		});
	});
})(jQuery);

$(document).ready(function(){
	$('.slider').bxSlider({
		responsive: true,
    	touchEnabled: true,
    	controls: true,
    	auto: true,
    	pause: 6000
	});
});