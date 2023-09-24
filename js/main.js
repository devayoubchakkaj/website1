$(document).ready(function(){
   
    $('.fa-bars').click(function(){
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
    });

    $(window).scroll(function(){
  

        if($(window).scrollTop()>30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

       


    });



});