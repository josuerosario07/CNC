
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
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
  });

  $(document).ready(function(){

    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
    $('.nonloop').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
    
  });

  AOS.init();




