// CURSOR MOVE

$(document).mousemove(function(e){
	$('.cursor').css({'top': e.clientY + 2, 'left': e.clientX + 2})
})

// CURSOR HOVER 

$('img.cursor.white').css({'display':'none'});

$('a').hover(
	function(){
		$('img.cursor.black').css({'display':'none'});
		$('img.cursor.white').css({'display':'block'});
	},
	function(){
		$('img.cursor.black').css({'display':'block'});
		$('img.cursor.white').css({'display':'none'});
	}
)