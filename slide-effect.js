
function effect(){
		$(this).css({
			'opacity':'0.5',
			'transition':'all 0.5s ease',
			});
		
}





$(document).ready(function(){
	$('.slide-img').hover(
	function(){
		$(this).css({
			'opacity':'0.5',
			'transition':'all 0.5s ease',
			});
	},
	function(){
		$(this).css({
			'opacity':'1',
			'transition':'all 0.5s ease',
			});
	}
	)
	
	
	
	$('.slide1').each(function(){
		$(this).hover(
			function(){
				$(this).children('.circle-block,.stars').slideDown();
				$(this).css('transition','all 0.5s ease');
			},
			function(){
				$(this).children('.circle-block,.stars').slideUp();
				$(this).css('transition','all 0.5s ease');
			}
		);
	})

	
	
	
	
	
	
})