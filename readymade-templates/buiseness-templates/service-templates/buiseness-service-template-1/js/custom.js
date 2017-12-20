$(document).ready(function() {
    "use strict";
  
/*-------------------------------
         Typer plugin 
--------------------------------*/   

    
    
    /*--- Sicky navigation ---*/
     $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('.sticky-navbar').fadeIn(500);
        } else {
            $('.sticky-navbar').fadeOut(500);
        }
    });

    var scroll = new SmoothScroll('a[href*="#"]'); 
    
     $(window).on('load', function() {
            var filterizd = $('.filtr-container').filterizr({  
                layout: 'sameWidth'
            });
        });
    
    /*-- Calling plugin --*/
    $('.demo').progressBar();


    /*-- Skills bar black --*/
    $('.bar-black').progressBar({
        shadow: true,
        percentage: false,
        animation: true,
        animateTarget: true,
        barColor: "#777",
        height: "15"
    });
    
    /*-- Skills bar yellow --*/
    $('.bar-yellow').progressBar({
        shadow: true,
        percentage: false,
        animation: true,
        animateTarget: true,
        barColor: "#777",
        height: "#BF9865"
    });
    
        /*--- Portfolio filter ---*/
    $('.filtr-container').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    
    /*-- Counter --*/
    $('.counter-2').counterUp({
       delay: 10,
       time: 2500
    });
    
    
    
});
