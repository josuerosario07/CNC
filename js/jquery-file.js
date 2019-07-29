
$(document).ready(function(){
    $("#sliderPrincipal").on('slide.bs.carousel', function (e) {
        var currentDataSlide = $('.slider-indicator[data-slide-to="' + e.to + '"]');
    
        var lastDataSlide = $('.slider-indicator[data-slide-to="' + e.from + '"]');
    
    
        currentDataSlide.addClass('active');
        lastDataSlide.removeClass('active');
    
    });
    
  });

  AOS.init();
