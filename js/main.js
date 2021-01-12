$(document).ready(function () {
  $(".burger-wrapper").click(function (event) {
    $(".burger-wrapper, .offcanvas-menu").toggleClass("active");
  });

  $(".close-menu").click(function (event) {
    $(".offcanvas-menu").removeClass("active");
  });

  $(".owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      485: {
        items: 2,
        dots: false,
      },
      728: {
        items: 3,
        dots: false,
      },
      960: {
        items: 4,
        dots: false,
      },
      1200: {
        items: 5,
        dots: false,
      },
    },
  });
});
