$(document).ready(function(){

	/*Sticky Navigation*/

	$('.js--section-features').waypoint(function(direction){
		if(direction=='down')
			$('nav').addClass('sticky');
		else
			$('nav').removeClass('sticky');
	},{
		offset:'60px'
	});

	/*Scrolling to elements*/

	$("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },1000, function(){

        window.location.hash = hash;
      });
    } 
  });	

	/*Animations*/

	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	},{
		offset:'50%'
	});

	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInUp');
	},{
		offset:'50%'
	});

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	},{
		offset:'50%'
	});

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated pulse');
	},{
		offset:'50%'
	});

	/*Responsive Navigation*/

	$('.js--nav-icon').click(function(){

		var nav = $('.js--nav-icon');
		var menu = $('.js--main-nav');

		menu.slideToggle(200);

		var icon = $('.js--nav-icon i');

		if(icon.hasClass('ion-ios-list')){
			icon.addClass('ion-ios-close-circle-outline');
			icon.removeClass('ion-ios-list');
		}else{
			icon.addClass('ion-ios-list');
			icon.removeClass('ion-ios-close-circle-outline');
		}
	})
});