$(document).ready(function(){
	$('.social-buttons li').mouseenter(function() {
		$(this).addClass('animate');
	$(this).mouseleave(function() {
		$(this).removeClass('animate');
	});
	});
});