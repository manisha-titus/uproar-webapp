function ellipsis() {
		$(".card-text").each(function() {
			var height = $(this).height();
			if(height > 36) {
				$(this).css("height","36px");
				$(this).parent().addClass("ellipsis");
			}
		});
	}


$(document).ready(function() {
	// light and dark theme
	$(".switch input").click(function() {
		if($(this).is(":checked")) {
			$("body").addClass("theme-dark");
			$("body").removeClass("theme-light");
			$(this).parent().siblings("span").text("Dark Mode");
		}
		else {
			$("body").addClass("theme-light");
			$("body").removeClass("theme-dark");
			$(this).parent().siblings("span").text("Light Mode");
		}
	});

	// accordion
	$(".collapsible").click(function() {
		$(this).next().slideToggle(800)
		$(this).children().toggleClass("active");
	});

	// show contents 
	$(".toggle").click(function() {
		$(this).toggleClass("active").siblings().removeClass("active");
		var id = $(this).attr("data-content");
		$("#"+id).show().siblings().hide();
		ellipsis();
	});

	// selected language
	$(".select-options LI").click(function() {
		var lang = $(this).html();
		$(".selection").html(lang);
	});

	// offline 
	if(!$(".status").hasClass("active")){
		$(".status SPAN").text("Offline");
	}

	// oveflow-text tooltip
	$(".overflow-text").each(function() {
	var overflow = $(this).text();
	$(this).attr("data-overflow", overflow);
	$(this).next(".tooltip").text(overflow);
	overflow = "";
	});

	$(".overflow-text").hover(function() {
		$(this).next(".tooltip").toggle();
	});

	
});