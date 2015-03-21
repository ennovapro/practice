$(document).ready(function(){
	
	
	$('#ennovapro').click(function(){
		$('html,body').animate({scrollTop:0},800,"swing");
	});
	$('#products').click(function(){
		$('html,body').animate({scrollTop:710},800,"swing");
	});
	$('#price').click(function(){
		$('html,body').animate({scrollTop:1420},800,"swing");
	});
	$('#promotions').click(function(){
		$('html,body').animate({scrollTop:2110},800,"swing");
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollBox').fadeIn();
		} else {
			$('#scrollBox').fadeOut();
		}
	});
	
	$('#scrollBox').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		
	});

});

$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('#description1').fadeIn(1000);
		}
		if($(this).scrollTop()>680){
			$('#description2').fadeIn(1000);
		}
		if($(this).scrollTop() > 1360){
			$('#description3').fadeIn(1000);
		}
		if($(this).scrollTop()>2040){
			$('#description4').fadeIn(1000);
			$('#video4').fadeIn(1000);
			
		}
});
	$(window).load(function(){
		
		if($(this).scrollTop()>2040){
		$('video').play();
		}
	
	});
	
	
	
	
	
	$('#dropDown').change(function(){
		var value=$('#dropDown').val();
		$('#list_feedback').val(value).css('border','2px solid yellow');
	});
	
	$('#list_feedback').keyup(function(){
		
		var feedback = $(this).val();
		
		$('#feedback2').html(feedback).css({'color':'white','border':'2px solid white'});
	});
		
	function m(){
	if($('#lookDown2').css('display')=="none"){
		alert("none");
	}else if($('#lookDown2').css('display')=="block"){
		alert("block");
	}
	}
	
	
	function m2(e){
	
		var tim= e*e;
		alert(tim);
	}
	
	$(window).mousemove(m2(3));
	
	$('#clicker').click(m);
	
	
	$('#look1').hover(function(){
		$('#ul1 > li').html("Stuff 1");
		$('#lookDown2').slideDown(700);
		
	});
	
	
	$('#look2').mouseover(function(){
		$('#ul1 > li').html("Stuff 2");
		$('#lookDown2').slideDown(700);
	});
	
	$('#look3').mouseover(function(){
		$('#ul1 > li').html("Stuff 3");
		$('#lookDown2').slideDown(700);
	});
	
	$('#look4').mouseover(function(){
		$('#ul1 > li').html("Stuff 4");
		$('#lookDown2').slideDown(700);
	});
	
	$('#hoverOver').mousemove(function(e){
		$('#map_feedback').text('X: '+ e.pageX + 'Y: '+ e.pageY);
	});
	
	$('#hoverOver2').mousemove(function(e){
		
		var popUpText= $(this).attr('hovertext');
		
		$('#popUp').show().text(popUpText).css("top", e.pageY+10).css("left", e.pageX+10);
		
		
		}).mouseout(function(){
			$('#popUp').hide();
		});
	
	
		$('#classChanger').click(function(){
			$('#classChanger2').toggleClass('glow');
		});
		
		$('#classChanger2').focus(function(){
			$(this).addClass('glow');
		}).blur(function(){
			$(this).removeClass('glow');
		});
	
	
	
	

	
	
	
	
	