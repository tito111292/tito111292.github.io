

$(document).ready(function(){
	$('#open-block').hover(function(){
		$('#hide-elem').slideDown(1000);
	}
	)
	$('#hide-elem').mouseleave(function(){
		$(this).slideUp(1000);
	})
})