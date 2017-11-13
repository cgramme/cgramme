$(window).load(function(){
    resizeWindow();
	
	$('body').addClass('fade-in');

    setTimeout(function(){

        $('.dot').addClass('dot-in');

        $('.menu > ul').addClass('menu-in');

    },500);
	
});

$(document).ready(function(){
    resizeWindow();
});


$(document).on({
    mouseover: function () {
        $(this).find('.child-3d').css({'transition':'transform 1s','transform' : 'rotateY(180deg)'});
    },
    mouseleave: function () {
       $(this).find('.child-3d').css({'transform' : 'rotateY(0deg)'});
    }
}, '.parent-3d');


$(window).scroll(function () { 
    var width = $(window).width();
    var scrollDistance = ($(this).scrollTop()/2);

    if(width >= 1300){
        $('.background-top-image').css({'top' : scrollDistance+"px"});
        $('.first-row').css({'top' : -(($(this).scrollTop()/8)+100)+"px"}); 
    }else{
        $('.background-top-image').css({'top' : "0px"});
        $('.first-row').css({'top' : '-125px'}); 
    }
    //$('.name-under-text').text($(window).width());


   //$('.background-top-image').css({'top' : scrollDistance+"px"}); 

   

   //$('.background-top').css({'transform' : 'translateY('+($(this).scrollTop()/2)+'px)'});

   //$('.background-top').css({'background-position' : '0px '+($(this).scrollTop()/2)+'px'});


   //$('.mountains').css({'top' : -($(this).scrollTop()/20)+"px"}); 

   if($('body').scrollTop() > 700){
       $('.menu').addClass('opacity-in');
   }
   

});



function resizeWindow() {
    var width = $(window).width();

    var mountainWidth = ($(window).width()/1350);

    if(width >= 1300){
        $('.background-top').css({'height' : '800px'});
        $('.name-wrap').css({'top' : '190px'});
    }else{
        $('.background-top').css({'height' : '450px'});
        $('.name-wrap').css({'top' : '100px'});
    }

    

    $('.first-row, .second-row').css({'transform':'scale('+(mountainWidth)+')'});
   
  
    $('.child-3d').css({'height' : $('.child-3d').width()+"px"});
   
}
$(window).resize(function() {
    resizeWindow();
});