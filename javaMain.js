$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollBox').fadeIn();
		} else {
			$('#scrollBox').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#scrollBox').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		
	});
	
	$('#random1').click(function(){
		if($(this).height() <300){
			$(this).animate({"height":"300px"},600, "linear");
		}else{
			$(this).animate({"height":"100px"},600, "linear");
		}
	});
	
	$('#down').click(function(){
		var scroller;
		scroller=100; 
		$('html,body').animate({scrollTop:scroller},800);
		scroller+=100;
	});
	
	$('#about').click(function(){
		$('html,body').animate({scrollTop:120},800,"swing");
	});
	$('#products').click(function(){
		$('html,body').animate({scrollTop:530},800,"swing");
	});
	$('#portfolio').click(function(){
		$('html,body').animate({scrollTop:940},800,"swing");
	});
	$('#contacts').click(function(){
		$('html,body').animate({scrollTop:1350},800,"swing");
	});
	
	
	$('div :text').focus(function(){
		$(this).css({'background-color': 'yellow', 'border': '2px solid black'});
		$(this).attr('value','I\'m focused in!'); 
	});
	$('div :text').blur(function(){
		$(this).css({'background-color': 'white', 'border': '0'}); 
		$(this).attr('value','No mo'); 
	});
	
	var counter=0;
	$(':submit[name="counter"]').click(function(){
	 
	counter++;
	
	if($(this).attr("value")=="bdasf1" || $(this).attr("value")=="Got clicked again " + (counter-1)+" times"){
		$(this).attr('value','I got clicked'+counter+ " times");	
	}else{
		$(this).attr("value","Got clicked again "+ counter + " times");
	}
	
	
	console.log(counter); 
	if(counter==3){
		$('#side3').append("<a class='google' title='Be Surprised!' href='http://google.com'>Click Me! </a>");
	}
	});

	$('#random1').click(function(){
		$('#article').toggle(1000,"linear"); 
		$('#article2').toggle(1000,"linear"); 
	});
	});
	
	$('#prepender').click(function(){
		$('#contentArea').prepend("<div id='sideArticle'><h3> Side content 3 </h3> <div> <input  type='text' value='Button1' /> </div> </div> ")
	});
	
	
	$(document).ready(function(){
	
	$('#table tr:even').addClass('highlight');
	$('#table p:even').addClass('highlight');
	$('#table p:odd').addClass('highlight');
	
	
	$('button[id=\'attributeButton\']').click(
		function(){
		$('p[id=\'attribute\']').toggle(1000);
		});
	
	
	var emailValue= "Please enter your email"; 
	$('input[type=\"email\"]').val(emailValue); 
	
	
	$('input[type=\"email\"]').focus(function(){
		if($(this).val()==emailValue){	
		
		$(this).val('');
		
		}
	}).blur(function(){if($(this).val()==''){
		$(this).val(emailValue);
	}
	});
	
	$('#searchBox').keyup(function(){
		
		$('#search p').removeClass('highlight');
		var searchWords=$(this).val(); 
		if(jQuery.trim(searchWords)!=''){
		$('#search p:contains("'+ searchWords  +'")').addClass('highlight');
		}
	});
	
	$('#disabler').click(function(){
		$(this).attr('disabled', true);
	});
	
	function changeFont(element,change){
		var fontSize=parseInt(element.css('font-size'));
		if(change=="bigger"){
			element.css('font-size',(fontSize+2)+"px");
		}else if(change=="smaller"){
			element.css('font-size',(fontSize-2)+"px");
		}
	};
	
	$('#bigger').click(function(){
	
	changeFont($('#h3'), "bigger");
	
	});
	$('#smaller').click(function(){
	
	changeFont($('#h3'), "smaller");
	
	});
	/*
	//One of the ways to disable an upload buton
	$('#file').change(function(){
		$('#submit').attr('disabled',false); 	
	});
	*/
	$('input[type="file"]').change(function(){
		
		$(this).next().attr('disabled',false);
	
				}).next().attr('disabled',true);
	
	
	
	
	
	});
	
	
/*
		$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").slideUp();
  });
  $(".btn2").click(function(){
    $("p").slideDown();
  });
});
		
		*/