$(document).ready(function () {
	
    var myPassword = "bimatrix";
    var isShow = false;
    
    function Hide(){
    	if(isShow){
        	$('.the-password').slideUp(500,function(){
        		isShow=false;
        	});
        }
    }
    
    function Show(){
    	if(!isShow){
        	$('.the-password').slideDown(500,function(){
        		isShow=true;
        	}).find('.field-password').focus();
        	
        }
    }
    
    function pwLoading(){
    	$('.field-password-loading')
        .removeClass('field-password-loading').css('background-position-x','-188px')
        .addClass('field-password');
    }
    
    
$('.the-username').click(function () { //click user name

    Hide();
    Show();
    pwLoading();
});

$('.try-again').click(function () { // click try again
	
	Hide();
	pwLoading();

});

$(document).keydown(function (e){ // press Esc
	if(e.keyCode == 27){
		
		Hide();
		pwLoading();
		
	}
});



$(".the-form").submit(function() { //submit event
    if($(".field-password").val() != myPassword){//키가 13이면 실행 (엔터는 13)
        $('.login').effect("shake",{times:3},15,function(){
        $('.field-password').focus();
        });
    }else{
    	
    	$('.field-password').val('')
        .blur()
        .addClass('field-password-loading')
        .animate( {backgroundPosition: "(0 0)"},
            1000, 
           function(){
        	alert("Login Successfully, Now you can try again.");
        }
        
       );
    
    }
    return false;
});

$('.the-username')	//username mouse on event
.mouseout(function(){
	$('.the-username').css("background-color","#E1E1E1");
})
.mouseover(function(){
	$('.the-username').css("background-color","lightsteelblue");
});





});


