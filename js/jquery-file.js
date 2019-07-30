
$(document).ready(function(){
    $("#sliderPrincipal").on('slide.bs.carousel', function (e) {
        var currentDataSlide = $('.slider-indicator[data-slide-to="' + e.to + '"]');
    
        var lastDataSlide = $('.slider-indicator[data-slide-to="' + e.from + '"]');
    
    
        currentDataSlide.addClass('active');
        lastDataSlide.removeClass('active');
    
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        animateOut:true,
        autoplay:true,
        checkVisible:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    
  });

//   $(document).ready(function(){



    
//   });

  AOS.init();




