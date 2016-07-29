$( document ).ready(function() {
    processListeners();
});

var filter_on = false;
function processListeners() {
	$("div.hex2").click(
		function() {
			current = $(this).css("opacity");
			if (current == 1 && filter_on) {
				$('.hex2').css("opacity",1);
				$('.course_filter').css("display","block");
				filter_on = false;
			} else {
				$('.hex2').css("opacity",0.5);
				$(this).css("opacity",1);
				$('.course_filter').css("display","none");
			
				courses_all = $(this).find('h4').attr("courses");
				courses = courses_all.split(' ');
				for (i = 0; i < courses.length; i++) { 
    				$('#'+courses[i]).css("display","block");
				}
				elearning_all = $(this).find('h4').attr("elearning");
				elearning = elearning_all.split(' ');
				for (i = 0; i < elearning.length; i++) { 
    				$('#'+elearning[i]).css("display","block");
				}
				filter_on = true;
			}
    	}
	);
	$("div.key_hex").hover(
		function() {
			var names = this.className;
			var type = names.split(' ')[2];
			//console.log(type);
   			$('.hex2').css("opacity",0.5);
   			$('.'+type).parent().css("opacity",1);
    	}, function() {
      		$('.hex2').css("opacity",1);
	  	}
	);
}