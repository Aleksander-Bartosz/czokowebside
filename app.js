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
    var menu = $('body > header > div > div.menu > ul');
    $(window).on('resize', function () {
        var wid = $(this).outerWidth();
       console.log(wid);
        if ($(window).outerWidth()<970) {
            menu.css('opacity','0');
        }
        else {
             menu.css('opacity','0.9');
        }
        location.reload();
    });
    
    if ($(window).outerWidth()<970) {
        menu.css('opacity','0');
    }
     $('#nav-icon3').click(function(){
        
		$(this).toggleClass('open');
         var check = $(this).hasClass('open');
         if (check) {
             menu.css('opacity','0.9'); 
            menu.animate({
                width:'25%',
            },1000);
         }
         else {
            $('body > header > div > div.menu > ul').animate({
                width:'0%',
                opacity:'0'  
            },1000);
         }
	});    
      

});
