
(function(jQuery){
	jQuery(window).on('load', function() {
		(function($) {
			handlePreloader()
		})(jQuery);
	});
	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('body').removeClass('active-preloader-ovh');
			jQuery('.preloader').fadeOut();
		}
	}
})(jQuery);

(function($){
	jQuery('.step_area_carousel').owlCarousel({
		loop:false,
		margin: 0,
		items: 2,
		nav:false,
		dots:false,
		autoHeight:true,
		mouseDrag: false,
		touchDrag: true,
		responsiveClass:true,
		slideBy: 2,
		responsive:{
			0:{
				items:1,
				loop:false,
				nav:true,
				mouseDrag: true,
				slideBy: 1,
			},
			992:{
				items:2,
				nav:false,
				dots:false,
				mouseDrag: false,
			}
		}
	});


	jQuery( ".toggle_view_item h4" ).click(function(e) {
		if(jQuery(this).hasClass('active')) {
		} else {
			$( ".toggle_view_item h4" ).each(function() {
				if(jQuery(this).hasClass('active')) {
					jQuery(this).toggleClass('active');
					jQuery(this).next('.show_details').slideToggle('hide');
				}
			});
		}
		jQuery(this).toggleClass('active');
		jQuery(this).next('.show_details').slideToggle('slow');
		e.preventDefault();
	});
	jQuery( ".toggle_view_item h4" ).click(function(e) {
		if(jQuery(this).parent('.toggle_view_item').hasClass('active_bg')) {
		} else {
			$( ".toggle_view_item h4" ).each(function() {
				if(jQuery(this).parent('.toggle_view_item').hasClass('active_bg')) {
					jQuery(this).parent('.toggle_view_item').toggleClass('active_bg');
				}
			});
		}
		jQuery(this).parent('.toggle_view_item').toggleClass('active_bg');
		e.preventDefault();
	});
})(jQuery);



jQuery(document).ready(function(){
    if(matchMedia('only screen and (max-width: 991px)').matches) {
	    jQuery(".menu_left_item > span").click(function(){
	        jQuery(".main_menu").slideToggle("slow");
	        jQuery(this).toggleClass('active');
	        jQuery('.customer_box').toggleClass('add_remove');
	    });
	}
});


jQuery.fn.isInViewport = function() {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();

    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery(window).on('resize scroll', function() {
    if(jQuery('.sticky-footer-view').length > 0) {
        if (jQuery('.sticky-footer-view').isInViewport()) {
            jQuery('.footer-sticky').removeClass('footer_is_stuck');
        } else {
            jQuery('.footer-sticky').addClass('footer_is_stuck');
        }
    }
});

jQuery(window).on('resize scroll', function() {
    if(jQuery('.sticky-footer-view2').length > 0) {
        if (jQuery('.sticky-footer-view2').isInViewport()) {
            jQuery('.footer-sticky').removeClass('footer_is_stuck2');
        } else {
            jQuery('.footer-sticky').addClass('footer_is_stuck2');
        }
    }
});

// jQuery (function($) {
//     $('#flux').bind('scroll', function() {
// 	    if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
// 	    {
// 	      alert('end reached');
// 	    }
// 	 })
//   }
// );


jQuery(window).scroll(function(){
	if (jQuery(window).scrollTop() >= 82) {
		jQuery('.header-sticky').addClass('header_is_stuck');
	}
	else {
		jQuery('.header-sticky').removeClass('header_is_stuck');
	}
});

jQuery(function(){
	jQuery('.orange_view_button, .menu a').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top -60
		}, 1500);
		return false;
	});
});

(function($){
	$(".privacy-pop-link").click(function() { 
		$('.privacy-popup-area').fadeToggle('fast'); 
	});
	$(".privacy-popup-close").click(function() { 
		$('.privacy-popup-area').fadeOut('fast'); 
	});
})(jQuery);