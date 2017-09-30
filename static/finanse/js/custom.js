/*------------------------------
 * Copyright 2014 Pixelized
 * http://www.pixelized.cz
 *
 * Roxie theme v1.1
------------------------------*/

//FIXED NAVBAR
$(window).scroll(function(){
	if($(window).width() > 991) {
		if($(window).scrollTop() > 50) {
			$('.top-header').addClass('navbar-offset');
			$('.top-header').removeClass('navbar-static-top');
			$('.top-header').addClass('navbar-fixed-top');
			$('body').css("padding-top","50px");
		}
		else {
			$('.top-header').removeClass('navbar-offset');
			$('.top-header').removeClass('navbar-fixed-top');
			$('.top-header').addClass('navbar-static-top');
			$('body').css("padding-top","0px");
		}
	}
	
	else {
		if($(window).scrollTop()) {
			$('.top-header').addClass('navbar-offset');
			$('.top-header').removeClass('navbar-static-top');
			$('.top-header').addClass('navbar-fixed-top');
			$('body').css("padding-top","40px");
		}
		else {
			$('.top-header').removeClass('navbar-offset');
			$('.top-header').removeClass('navbar-fixed-top');
			$('.top-header').addClass('navbar-static-top');
			$('body').css("padding-top","0px");
		}
	}
});

function is_touch_device() {
  return !!('ontouchstart' in window);
}

//TWITTER SHARE BUTTON
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

$(document).ready(function() {	
	//NAVBAR
	$('.navbar-main-menu > li.dropdown').mouseenter(function() {
		$(this).addClass('open');
	});
	
	$('.navbar-main-menu > li.dropdown').mouseleave(function() {
		$(this).removeClass('open');
	});

	var fqm = true;

	$('.navbar-main-menu > li.dropdown').click(function() {
		if (!is_touch_device()) {
			document.location.href = $(this).children('a').attr('href');
		} else {
			if($(this).hasClass('open') && !fqm) {
				document.location.href = $(this).children('a').attr('href');
			}
		}
		fqm = false;
	});
	
	var minimum = 1250;
	var maximum = 1500;
	
	$( "#slider-range" ).slider({
      range: true,
      min: minimum,
      max: maximum,
      values: [ minimum, maximum ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] );
		$( "#amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
	$( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));
		
	//SCROLLING
	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 110}, 1000, function(){window.location.hash = hash;});
	});
	
	//TOOLTIP
	$('.tooltip-init').tooltip();
	
	//POPOVER
	$('.popover-init').popover();
	
	//PORTFOLIO - ISOTOPE
	var $container = $('.portfolio-wrapper');
	$container.isotope({
	  	itemSelector: '.portfolio-item',
	});
	
	$('.portfolio-filter li a').click(function(e) {
		$('.portfolio-filter li a').removeClass('active');
		$(this).addClass('active');
		
        var category = $(this).attr('data-filter');
		$container.isotope({
			filter: category
		});
    });
	
	//BLOG - ISOTOPE
	var $container2 = $('.blog-wrapper');
	$container2.isotope({
	  	itemSelector: '.blog-item',
	});
	
	$('.blog-filter li a').click(function(e) {
		$('.blog-filter li a').removeClass('active');
		$(this).addClass('active');
		
        var category = $(this).attr('data-filter');
		$container2.isotope({
			filter: category
		});
    });
	
	//FORM TOGGLE
	$('#reset-password-toggle').click(function() {
        $('#reset-password').slideToggle(500);
    });
	
	//ESHOP TOGGLE
	$(".addtocart").click(function() {
        $("#eshop-cart-alert").toggleClass("active");
    });
	
	$("#eshop-cart-alert .close").click(function() {
        $("#eshop-cart-alert").toggleClass("active");
    });
	
	$('#billing-address-toggle').click(function() {
        $('#billing-address').slideToggle(500);
    });	
		
	//MAGNIFIC POPUP
	$('.show-image').magnificPopup({type:'image'});
		
	//OWL CAROUSEL
	$("#section-partners #partners-slider").owlCarousel({
		autoPlay: 3000,
		pagination : false,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2]
  	});
		
	$("#jumbotron-slider").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		pagination : false,
		transitionStyle : "fade",
		autoPlay: 5000,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#about-slider").owlCarousel({
		autoPlay: 5000, 
		singleItem : true
  	});
	
	$("#jumbotron-eshop-slider").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		transitionStyle : "fade",
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#eshop-slider").owlCarousel({
		autoPlay: 5000, 
		scrollPerPage : true,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2]
  	});
	
	$('#eshop-slider .item img').mouseenter(function(e) {
		var source = $(this).attr("src");
		$("#product-detail-image").attr("src",source);
		$("#product-detail-image-link").attr("href",source);
    });
	
	$("#portfolio-slider").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#about-us-slider").owlCarousel({
		autoPlay: 5000, 
		singleItem : true,
		transitionStyle : "fade"
  	});
	
	$("#testimonials-slider").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		transitionStyle : "fadeUp"
  	});
	
	$("#features-default-carousel #owl-carousel-default").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});

  	$("#features-main-carousel #owl-carousel-main").owlCarousel({
		autoPlay: 7000, 
		navigation : false,
		singleItem : true,
		slideSpeed : 500,
		stopOnHover: true,
		scrollPerPage: true,

		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#features-fade-carousel #owl-carousel-fade").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		transitionStyle : "fade",
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#features-owl-carousel #carousel-wrapper").owlCarousel({
		autoPlay: 3000, 
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2],
  	});
	
	//OWL CAROUSEL - HIDDEN CONTROLS
	$(".owl-carousel.hidden-control").mouseenter(function(e) {
		$(this).find(".owl-prev").animate({opacity:1,left:"20px"});
		$(this).find(".owl-next").animate({opacity:1,right:"20px"});
    });
	
	$(".owl-carousel.hidden-control").mouseleave(function(e) {
		$(this).find(".owl-prev").animate({opacity:0,left:"40px"});
		$(this).find(".owl-next").animate({opacity:0,right:"40px"});
    });
		
	//PARTNER BRANDS

	$('.partner-logo').mouseover(function() {
		var cur = $(this).attr('src');
		$(this)
			.attr("src", $(this).data('alt'))
			.data('alt', cur)
			.attr('data-alt', cur);
	});
	$('.partner-logo').mouseleave(function() {
		var cur = $(this).attr('src');
		$(this)
			.attr("src", $(this).data('alt'))
			.data('alt', cur)
			.attr('data-alt', cur);
	});

	
	$('#section-statistics').waypoint(function(){
		$('#section-statistics .number').countTo();
		},{offset:'85%'}
	);
	
	//GOOGLE MAP
	if($('#map-canvas').length>0 && $('#map-canvas').data('coords')) {
		var coords = $('#map-canvas').data('coords').split(',');
		var myLatlng = new google.maps.LatLng(parseFloat(coords[0]),coords[1]);
		var mapOptions = {
		  zoom: 15,
		  center: myLatlng,
		  navigationControl: false,
		  mapTypeControl: false,
		  scaleControl: false,
		  draggable: true,
		  scrollwheel: false
		}

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
		});
	}
		
});

$(function() {
	if($('#datepicker-mainpage').length>0 && $('#calendar-date').data('last')) {
		var last = new Date($('#calendar-date').data('last'));
		var current = new Date();
		var count = parseInt((last-current)/60/60/24/1000+1);
		$( "#datepicker-mainpage" ).datepicker({ 
			minDate: new Date(1999, 10 - 1, 25), 
			maxDate: +count, 
			onChangeMonthYear: function(){
				setTimeout(
					function(){
						checkDates();
					}, 
					100
				)
			}
		});
		var dates = new Array();
		for(var i=0;i<$('#calendar-date').children('span').length;i++) {
			dates[dates.length] = $('#calendar-date').children('span').eq(i).data('date');
		}
		
		function checkDates() {
			for (var i=0;i<$('#datepicker-mainpage td[data-handler="selectDay"]').length;i++) {
				var el = $('#datepicker-mainpage td[data-handler="selectDay"]').eq(i);
				var date = new Date(el.data('year'),el.data('month'),el.children('a').html());
				var active = false;
				for(var a=0;a<dates.length;a++) {
					var date1 = new Date(dates[a]);
					if(date1.getDate() == date.getDate() && date1.getMonth() == date.getMonth() && date1.getFullYear() == date.getFullYear()) {
						active = true;
						break;
					}
				}
				if(!active) {
					el.addClass('ui-state-disabled ui-datepicker-unselectable');
				} else {
					el.children('a')
						.attr('title', $('#calendar-date').children('span[data-date="'+dates[a]+'"]').html())
						.attr('data-url', $('#calendar-date').children('span[data-date="'+dates[a]+'"]').data('url'))
						.data('url', $('#calendar-date').children('span[data-date="'+dates[a]+'"]').data('url'));
					el.children('a').on('click', function(){
						document.location.href=$(this).data('url');
					})	
				}
			}
		}
		checkDates();
	}
});

$(function() {
	$('#go-question').click(function() {
		$('#q-name').parent('div').parent('div').removeClass('has-error');
		$('#q-name').parent('div').find('.text-danger').remove();
		$('#q-text').parent('div').parent('div').removeClass('has-error');
		$('#q-text').parent('div').find('.text-danger').remove();
		var submit = true;
		if($('#q-name').val().length<2) {
			submit = false;
			$('#q-name').parent('div').parent('div').addClass('has-error');
			$('#q-name').parent('div').append('<small class="help-block text-danger">это поле обязательно для заполнения</small>');
		}
		if($('#q-text').val().length<2) {
			submit = false;
			$('#q-text').parent('div').parent('div').addClass('has-error');
			$('#q-text').parent('div').append('<small class="help-block text-danger">это поле обязательно для заполнения</small>');
		}
		if(submit) {
			$('#questionform').submit();
		}
	})
});
$(function() {
	$('#go-courses').click(function() {
		$('#c-phone').parent('div').parent('div').removeClass('has-error');
		$('#c-phone').parent('div').find('.text-danger').remove();
		var submit = true;
		if($('#c-phone').val().length<5) {
			submit = false;
			$('#c-phone').parent('div').parent('div').addClass('has-error');
			$('#c-phone').parent('div').append('<small class="help-block text-danger">это поле обязательно для заполнения</small>');
		}
		if(submit) {
			$('#coursesform').submit();
		}
	})
});
function showFullAnswer(el) {
	if($(el).parent('div').children('.short-answer').is(':visible')) {
		$(el).parent('div').children('.short-answer').slideToggle(200);
		$(el).parent('div').children('.full-answer').slideToggle(200);
		$(el).children('span').html('свернуть');
	} else {
		$(el).parent('div').children('.short-answer').slideToggle(200);
		$(el).parent('div').children('.full-answer').slideToggle(200);
		$(el).children('span').html('развернуть ответ');
	}
}