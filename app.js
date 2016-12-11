"use strict";
document.addEventListener('DOMContentLoaded', function () {
  var heigth = $('header').height();

   $(".menu > ul > li:nth-child(1)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > nav").offset().top-heigth
    }, 1500);
    });
    
    $(".menu > ul > li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > article > div > h1").offset().top-heigth
    }, 1500);
    });
    
    $(".menu > ul > li:nth-child(3)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > section > div > div.firstSectionText > h1").offset().top-heigth
    }, 1500);
    });  
    
    $(".menu > ul > li:nth-child(4)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > aside > div:nth-child(1) > div > h1").offset().top-heigth
    }, 1500);
    });
    
    $(".menu > ul > li:nth-child(5)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > footer > div > div.downFooter").offset().top-heigth
    }, 1100);
    }); 
    $(window).on('resize', function () {
        var wid = $(this).outerWidth();
       console.log(wid); 
    });      
    $('#nav-icon3').click(function(){
        
		$(this).toggleClass('open');
        if ($(this).hasClass("open")) {
            $('.menu ul').css({'width':'25%','display':'block'});
        }
        else {
             $('.menu ul').css('display','none');
        }
	});   
      

});
