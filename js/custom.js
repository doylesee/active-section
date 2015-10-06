$(document).ready(function(){
	$('.section').height($(window).height());
	
	$(window).scroll( function(){
		$('.section').each(function(){
			if ($(window).scrollTop() >= $(this).position().top){
					$('.active').removeClass('active');
					$('.active').html('');
					
					$(this).addClass('active');
					$(this).html('<p>This is the active section</p>');
			}
		})
	});
});