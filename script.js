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

    var scrollDistance = ($(this).scrollTop()/2);

    //$('.name-under-text').text(scrollDistance);


   //$('.background-top-image').css({'top' : scrollDistance+"px"}); 

   

   //$('.background-top').css({'transform' : 'translateY('+($(this).scrollTop()/2)+'px)'});

   //$('.background-top').css({'background-position' : '0px '+($(this).scrollTop()/2)+'px'});


   //$('.mountains').css({'top' : -($(this).scrollTop()/20)+"px"}); 
   $('.first-row').css({'top' : -(($(this).scrollTop()/8)+100)+"px"}); 

   if($('body').scrollTop() > 700){
       $('.menu').addClass('opacity-in');
   }
   

});



function resizeWindow() {
    var width = $(window).width();
   
  
    $('.child-3d').css({'height' : $('.child-3d').width()+"px"});
   
}
$(window).resize(function() {
    resizeWindow();
});