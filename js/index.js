$(window).load(function(){
	var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
$(document).ready(function(){
	
	// alert($(window).height());
	// $('.illustre').css('height',+height+'px')
	$(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 60;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('navbar-fixed-top');
			 }
			 else {
				 $('nav').removeClass('navbar-fixed-top');
			 }
		});

	$(function() {
        $('.chart').easyPieChart({
				easing: 'easeOutBounce',
				lineWidth: '16',
				trackWidth: '0',
				size: '154',
				trackColor: '#DDD',
				scaleLength: '-0.3',
				barColor: '#FF675F',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
    });
});