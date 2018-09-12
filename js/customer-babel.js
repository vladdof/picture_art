"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var gift = require('./parts-babel/gift-get.js');

  var hoverPic = require('./parts-babel/hoverPicture.js');

  var style = require('./parts-babel/more-styles.js');

  var showPopup = require('./parts-babel/popup-consultation.js');

  var popupDesign = require('./parts-babel/popup-design.js');

  var sliderFeedback = require('./parts-babel/slider-feedback.js');

  var sliderMain = require('./parts-babel/slider-main.js');

  var sort = require('./parts-babel/sort.js');

  var form = require('./parts-babel/work-form.js');

  var calc = require('./parts-babel/calc.js');

  var accord = require('./parts-babel/accordeon.js');

  var gamburger = require('./parts-babel/gamburger.js');

  sliderMain();
  form();
  gift();
  hoverPic();
  style();
  showPopup();
  popupDesign();
  sliderFeedback();
  sort();
  calc();
  accord();
  gamburger();
});