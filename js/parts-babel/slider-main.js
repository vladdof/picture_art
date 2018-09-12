"use strict";

// slider main / header
function sliderMain() {
  var slideIndex = 0,
      boxSlider = document.querySelector('.main-slider'),
      slides = document.getElementsByClassName('main-slider-item').length;
  showSlidesF(slideIndex); // show 1 slide

  function showSlidesF(n) {
    // return to first after scrolling to last
    if (n > slides - 1) {
      slideIndex = 0;
    }

    ;

    if (n < 0) {
      slideIndex = slides - 1;
    }

    ;
    var boxHeight = boxSlider.clientHeight,
        offset = -slideIndex * boxHeight;
    boxSlider.setAttribute('style', "transform: translateY(".concat(offset, "px)"));
  }

  function plusSlides(n) {
    showSlidesF(slideIndex += n);
  }

  function nextAuto() {
    plusSlides(1);
  }

  setInterval(function () {
    nextAuto();
  }, 5000);
}

module.exports = sliderMain;