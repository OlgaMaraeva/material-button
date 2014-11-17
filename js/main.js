jQuery(document).ready(function ($) {

    //left-floating-menu

var $mobileMenu = $('.mobile-menu');
	

 $mobileMenu.click(function(){
 $('.arrow-mobile').first().toggleClass('rotatePlus');
  $('.arrow-mobile').last().toggleClass('rotateMinus');
    $('span.arrow-mobile:odd').toggleClass('leftAlign');
});

});