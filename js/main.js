$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-wrapper, .header-nav").addClass("active");
    $(".header-burger").addClass("header-burger-hide");
  });

  $(".header-burger-close").click(function (event) {
    $(".header-nav").removeClass("active");

    setTimeout(function () {
      $(".header-wrapper").removeClass("active");
      $(".header-burger").removeClass("header-burger-hide");
    }, 300);
  });

  const prevBtn = '<img src="img/arrow-prev.png" /><span>пред</span>';
  const nextBtn = '<span>след</span><img src="img/arrow-next.png" />';

  $(".owl-poster").owlCarousel({
    items: 1,
    loop: true,
    autoWidth: true,
    margin: 21,
    nav: true,
    dots: false,
    navText: [prevBtn, nextBtn],
  });

  $(".owl-projects").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
      },
      576: {
        items: 1.5,
      },
    },
  });

  $(".owl-partners").owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
});
