// CURSOR MOVE

$(document).mousemove(function(e){
	$('.cursor').css({'top': e.clientY + 2, 'left': e.clientX + 2})
})

$(document).one('mousemove', function(){
	$('img.cursor.black').css({'display':'block'});
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


// ICON HOVER (GIF/PNG)

$('.title').hover(
	function(){
		$('.icon.gif').css({'display':'inline'})
		$('.icon.still').css({'display':'none'})
	},
	function(){
		$('.icon.gif').css({'display':'none'})
		$('.icon.still').css({'display':'inline'})
	}
)


// HOVER APPEAR IMAGE + IMAGE MOVE WITH CURSOR

$(document).mousemove(function(e){
	$('.hoverimg').css({'top': e.clientY + 27, 'left': e.clientX + 27})
})

$('#me').hover(
	function(){
		$('.hoverimg').css({'display':'block'})
	},
	function(){
		$('.hoverimg').css({'display':'none'})
	}
)