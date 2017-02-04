$(document).ready(function() {

	$('body').mousemove(function(event) {
		$('.stroke').css({
			"width": event.pageX
			"height": event.pageY
		});
	});

}); 