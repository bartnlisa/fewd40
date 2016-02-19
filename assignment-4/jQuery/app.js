

$(document).ready(function() {
	
	$('.readmore').click(function(){
		$(".readmore").hide();
		$("#show-this-on-click").slideDown("slow", function(){});
		$(".readless").show()
	})


	$('.readless').click(function(){
		$(".readless").hide();
		$("#show-this-on-click").slideUp();
		$(".readmore").show();
	})

	$('.learnmore').click(function(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	})

	$(".button blue").on('click', function(event){
    event.preventDefault();});

});



