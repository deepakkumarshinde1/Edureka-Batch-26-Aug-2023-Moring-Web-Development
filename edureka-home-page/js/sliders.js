$(function () {
  $("#slide-1").owlCarousel({
    items: 4,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    // nav: true,
    dots: true,
    responsive: {
      1000: {
        items: 4,
      },
      700: {
        items: 2,
      },
      0: {
        items: 1,
        mouseDrag: true,
      },
    },
  });

  $("#main-slider").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    // nav: true,
    dots: true,
  });

  $(".back").on("click", function () {
    $("#main-slider").trigger("prev.owl.carousel", [500]);
    // window.location.assign('url')
  });
  $(".next").on("click", function () {
    $("#main-slider").trigger("next.owl.carousel", [500]);
  });

  $("#my-tab-section").tabs();

  $("#my-tab-section").draggable();
});
