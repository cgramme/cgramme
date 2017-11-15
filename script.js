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
    var scrollDistance = ($(this).scrollTop()/1.7);

    if(width >= 1200){
        $('.background-top-image').css({'top' : (scrollDistance)+"px"});


        if($(window).scrollTop() < 450){
            $('.first-row').css({'top' : -(($(this).scrollTop()/6)+100)+"px"}); 
        }

    }else{
        $('.background-top-image').css({'top' : "0px"});
        $('.first-row').css({'top' : '-125px'}); 
    }


    //$('.name-under-text').text($(window).scrollTop());


   //$('.background-top-image').css({'top' : scrollDistance+"px"}); 

   

   //$('.background-top').css({'transform' : 'translateY('+($(this).scrollTop()/2)+'px)'});

   //$('.background-top').css({'background-position' : '0px '+($(this).scrollTop()/2)+'px'});


   //$('.mountains').css({'top' : -($(this).scrollTop()/20)+"px"}); 

   if($('body').scrollTop() > 700 && width > 1200){
        $('.menu').addClass('opacity-in');
   }else if($('body').scrollTop() > 500 && width <= 1200 && width > 800){
        $('.menu').addClass('opacity-in');
   }else if($('body').scrollTop() > 350 && width < 800 && width <= 800){
        $('.menu').addClass('opacity-in');
   }


   

});



function resizeWindow() {
    var width = $(window).width();

    var mountainWidth = ($(window).width()/1350);

    

    

    $('.first-row, .second-row').css({'transform':'scale('+(mountainWidth)+')'});
   
  
    $('.child-3d').css({'height' : $('.child-3d').width()+"px"});
   
}
$(window).resize(function() {
    resizeWindow();
});