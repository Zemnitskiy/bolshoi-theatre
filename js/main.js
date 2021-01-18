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
    items: 1.5,
    loop: true,
    nav: false,
    dots: false,
  });
});
