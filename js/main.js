$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-wrapper, .header-nav").addClass("active");
    $(".header-burger").addClass("header-burger-hide");
  });

  $(".header-burger-close").click(function (event) {
    $(".header-wrapper, .header-nav").removeClass("active");
    $(".header-burger").removeClass("header-burger-hide");
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
        items: 2,
        dots: false,
      },
      960: {
        items: 2,
        dots: false,
      },
    },
    loop: true,
  });
});
