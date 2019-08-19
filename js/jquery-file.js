$(document).ready(function() {
  $("#sliderPrincipal").on("slide.bs.carousel", function(e) {
    var currentDataSlide = $('.slider-indicator[data-slide-to="' + e.to + '"]');

    var lastDataSlide = $('.slider-indicator[data-slide-to="' + e.from + '"]');

    currentDataSlide.addClass("active");
    lastDataSlide.removeClass("active");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    animateOut: true,
    autoplay: true,
    checkVisible: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
});

AOS.init();

let currentCardId = null;
let lastCardId = null;
let isFirstClick = true;
let divJdn = document.getElementById("bigSee");
let btn = divJdn.getElementsByClassName("card-info");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var cambio = document.getElementsByClassName("active-txt");
    if (cambio.length > 0) {
      cambio[0].className = cambio[0].className.replace("active-txt", " ");
    }

    if (this.id != currentCardId || lastCardId != null) {
      this.className += " active-txt";
      isFirstClick = false;
      currentCardId = null;
    }
  });
}

function desactivarActiveClass(id) {
  if (!isFirstClick) {
    currentCardId = id;
    let card = document.getElementById(`${id}`);
    card.classList.remove("active-txt");
    isFirstClick = true;
    lastCardId = lastCardId != id ? (lastCardId = id) : null;
  } else {
    currentCardId = null;
    lastCardId = id;
  }
}

//navigation Responsive

var btnNav = document.getElementById("btn-navi");
btnNav.addEventListener("click", navResp);
function navResp() {
  var menu = document.getElementById("menu-r");
  menu.classList.toggle("active-nav");
}
//close
var close = document.getElementById("closin");
close.addEventListener("click", closeNav);
function closeNav() {
  var menuD = document.getElementById("menu-r");
  menuD.classList.remove("active-nav");
}

//other set for close - no me juzguen

var close = document.getElementById("optional-close");
close.addEventListener("click", closeNav);
function closeNav() {
  var menuD = document.getElementById("menu-r");
  menuD.classList.remove("active-nav");
}
