	$(document).ready(function() {

		$(".popup").magnificPopup({type:"image"});
		$(".popup_c").magnificPopup();

		$.stellar({
			responsive: true,
			horizontalOffset: 60
		});
		
		$(".carousel").owlCarousel({
			loop: true,
			responsiveClass:true,
			responsive : {
	    // breakpoint from 0 up
	    0 : {
	    	items:1,
	    	nav:true
	    } 
	  },
	  navText: ""
	});

		function wResize(){
			$("header").css("min-height", $(window).height())
		};
		wResize();
		$(window).resize(function(){
			wResize()
		});

		$(".bottom_phone .wrapper .tab").click(function() {
			$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".top_phone .wrapper .tab").click(function() {
			$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".tabs_header .wrapper .tab").click(function() {
			$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".contacts_top .tab").click(function() {
			$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		//Цели для Яндекс.Метрики и Google Analytics
		$(".count_element").on("click", (function() {
			ga("send", "event", "goal", "goal");
			yaCounterXXXXXXXX.reachGoal("goal");
			return true;
		}));

		//SVG Fallback
		if(!Modernizr.svg) {
			$("img[src*='svg']").attr("src", function() {
				return $(this).attr("src").replace(".svg", ".png");
			});
		};

		//Аякс отправка форм
		//Документация: http://api.jquery.com/jquery.ajax/
		$("form").submit(function(e) {
			var ths = $(this);
			e.preventDefault;
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				alert("Спасибо за заявку!");
				setTimeout(function() {
					var magnificPopup = $.magnificPopup.instance; 
					magnificPopup.close(); 
					ths.trigger("reset");
				}, 1000);
			});
			return false;
		});
		
	});

	$(window).load(function() {
		$(".top_header h1").animated("fadeInDown", "fadeInDown");
		$(".top_header h2").animated("fadeInUp", "fadeInUp");
		$(".tabs_header .wrapper").animated("flipInY", "flipInY");
		$(".profi_item").animated("fadeInRight", "fadeOutRight");
		$(".s_pofi form").animated("zoomInRight", "zoomInRight");
		$(".s_back h3").animated("fadeInUp", "fadeInUp");
		$("footer").animated("fadeInUp", "fadeInUp");

	});

	$(window).load(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

		$(".top_header").animated("fadeInDown", "fadeOut");
		$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
		$(".profi_item").animated("fadeInRight", "fadeOut");
		$(".s_pofi form").animated("zoomInRight", "fadeOut");
		$(".s_back h3").animated("fadeInUp", "fadeOut");
		$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
	});