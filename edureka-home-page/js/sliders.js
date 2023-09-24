$(function () {
  introJs()
    .setOptions({
      steps: [
        {
          title: "Welcome to edureka",
          intro: "Lets go with quick intro",
        },
        {
          element: document.querySelector(".new-offer section:first-child"),
          intro: "Make enquire with a call",
        },
        {
          element: document.querySelector(".offer-text-color"),
          intro: "Look at out new offers",
        },
        {
          element: document.querySelector(".sign-up"),
          intro: "Create a new account.",
          position: "left",
        },
      ],
      dontShowAgain: true,
    })
    .start();
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

  // setTimeout
  console.log("before timer");

  setTimeout(function () {
    $(".new-offer").removeClass("hide");
  }, 5000); // 1000ms = 1s

  console.log("after timer");
  // setInterval
  // let lastDate = new Date(2023, 8, 26, 23, 59, 0).valueOf();
  // let currentDate = new Date().valueOf();
  // let diff = lastDate - currentDate;
  // let dif = new Date(diff);
  // console.log(dif);
  setInterval(function () {
    // api call .. got a value in Milliseconds
    // let serverTime = 23456789876544567876543;
    let date = new Date();
    let time = date.toLocaleTimeString();

    $(".timer").html(time);
  }, 1000); // 1000ms == 1s

  // i run a interval which will stop after a time
  // clearInterval
  let counter = 120; // min
  let mainSec = counter * 60;
  let sec = 0;
  let min = 0;
  let hr = 0;

  let intervalId = setInterval(function () {
    sec = mainSec % 60;
    min = Math.trunc((mainSec / 60) % 60);
    hr = Math.trunc(mainSec / 60 / 60);

    $(".countdown").html(`${hr} : ${min} : ${sec}s`);
    if (mainSec === 0) {
      alert("Time-up !!!");
      clearInterval(intervalId);
    } else {
      mainSec--;
    }
  }, 1000);

  $(".hamburger-menu").on("click", function () {
    $(".header-menu").animate({
      right: "0%",
    });
  });
  $(".close-menu").on("click", function () {
    $(".header-menu").animate({
      right: "-50%",
    });
  });
});

// default javascript is synchronous in nature
// it works on only on thread
// Event loop --> makes javascript asynchronous
// API --> DOM, setTimeout, setInterval
