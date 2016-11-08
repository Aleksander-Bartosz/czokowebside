"use strict";
document.addEventListener('DOMContentLoaded', function () {
   

   $("body > header > div > ul > li:nth-child(1)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > nav > div > div > div").offset().top
    }, 1500);
    });
    
    $("body > header > div > ul > li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > article > div > h1").offset().top
    }, 1500);
    });
    
    $("body > header > div > ul > li:nth-child(3)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > section > div > div.firstSectionText > h1").offset().top
    }, 1500);
    });  
    
    $("body > header > div > ul > li:nth-child(4)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > aside > div:nth-child(1) > div > h1").offset().top
    }, 1500);
    });
    
    $("body > header > div > ul > li:nth-child(5)").click(function() {
    $('html, body').animate({
        scrollTop: $("body > footer > div > div.cookietext > h1").offset().top
    }, 1500);
    }); 
          
       
       

});
