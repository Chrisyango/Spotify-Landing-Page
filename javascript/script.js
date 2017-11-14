$(document).ready(function() {

	// NAVIGATION -------------------------------------------------------------------
	$(document).scroll(function() {
		var $nav = $(".nav-overlay");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});

	$("#next").on('click', function(event) {

    	if (this.hash !== "") {
    		event.preventDefault();

    		var hash = this.hash;

    		$('html, body').animate({
    			scrollTop: $(hash).offset().top
    		}, 1000, function(){

    		window.location.hash = hash;
    		});
    	}
	});

	// HAMBURGER MENU -------------------------------------------------------------------
	var $open = $("#openbtn");
	var $close = $("#closebtn");
	var $navbtns = $(".navbtns");
	var $overlay = $(".wholebody-overlay");

	$open.click(function() {
		$navbtns.css("transform", "translateX(0)").css("opacity", "1");
		$overlay.css("display", "block").css("opacity", "0.6");
	});

	$close.click(function() {
		$navbtns.css("transform", "translateX(500px)").css("opacity", "0");
		$overlay.css("display", "none").css("opacity", "0");
	});

	// MAIN-CONTENT1 -------------------------------------------------------------------
	var $title = $(".main-content1-titles h5");
	$title.click(function() {
		$(".active-title").removeClass("active-title");
		$(this).addClass("active-title");
	});

	$("#trending").click(function() {
		$(".active-content").fadeOut(1).removeClass("active-content");
		$(".trending").addClass("active-content").fadeIn(300);
	});

	$("#new").click(function() {
		$(".active-content").fadeOut(1).removeClass("active-content");
		$(".new").addClass("active-content").fadeIn(300);
	});

	$("#playlists").click(function() {
		$(".active-content").fadeOut(1).removeClass("active-content");
		$(".playlists").addClass("active-content").fadeIn(300);
	});

	$("#podcasts").click(function() {
		$(".active-content").fadeOut(1).removeClass("active-content");
		$(".podcasts").addClass("active-content").fadeIn(300);
	});

	// CAROUSEL -------------------------------------------------------------------

	var animationSpeed = 600;
	var pause = 5000;
	var currentSlide = 1;

	var $content2 = $(".main-content2");
	var $carousel = $content2.find(".content2-carousel");
	var $carouselItem = $carousel.find(".carousel-item");
	var $right = $("#right");
	var $left = $("#left");

	var interval;

	var slideReset1 = function() {
		currentSlide++;
		if(currentSlide === $carouselItem.length) {
			currentSlide = 1;
			$carousel.css("margin-left", "100%");
		}
	};

	var slideReset2 = function() {
		currentSlide--;
		if(currentSlide === 0) {
			currentSlide = 4;
			$carousel.css("margin-left", "-400%")
		}
	};

	// START AND PAUSE CAROUSEL -------------------------------------------------------------------
		function startCarousel() {
			interval = setInterval(function() {
				$carousel.animate({"margin-left" : "-=100%"}, animationSpeed, slideReset1());
			}, pause);
		};

		function pauseCarousel() {
			clearInterval(interval);
		};

		$content2.on("mouseenter", pauseCarousel).on("mouseleave", startCarousel);

		startCarousel();
	
	// LEFT AND RIGHT BUTTONS -------------------------------------------------------------------
	$left.click(function() {
		$carousel.animate({"margin-left" : "+=100%"}, animationSpeed, slideReset2());
	});

	$right.click(function() {
		$carousel.animate({"margin-left" : "-=100%"}, animationSpeed, slideReset1());
	});

});