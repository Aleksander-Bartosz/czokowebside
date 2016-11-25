"use strict";
document.addEventListener('DOMContentLoaded', function () {
   

   $(".menu > ul > li:nth-child(1)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > nav > div > div > div").offset().top
    }, 1500);
    });
    
    $(".menu > ul > li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > article > div > h1").offset().top
    }, 1500);
    });
    
    $(".menu > ul > li:nth-child(3)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > section > div > div.firstSectionText > h1").offset().top
    }, 1500);
    });  
    
    $(".menu > ul > li:nth-child(4)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > aside > div:nth-child(1) > div > h1").offset().top
    }, 1500);
    });
    
    $(".menu > ul > li:nth-child(5)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > aside > footer > div > div.cookietext > h1").offset().top
    }, 1100);
    }); 
    $(window).on('resize', function () {
        var wid = $(this).width();
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
