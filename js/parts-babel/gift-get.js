"use strict";

function gift() {
  var giftBtn = document.querySelector('.fixed-gift'),
      giftModal = document.querySelector('.popup-gift'),
      isClicker = false;

  function hideGift() {
    giftModal.style.display = 'none';
  }

  ;
  giftBtn.addEventListener('click', function () {
    isClicker = true;
    this.style.display = 'none';
    giftModal.style.display = 'flex';
  });
  giftModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'popup-close' || target.className == 'popup-gift') {
      hideGift();
    }

    ;
  }); // var hideGiftBtn = function() {
  // 	giftBtn.style.display = 'none';
  // }
  // var showGiftBtn = function() {
  // 	giftBtn.style.display = 'flex';
  // }

  var buttonAll = document.getElementsByTagName('button');

  for (var i = 0; i < buttonAll.length; i++) {
    buttonAll[i].onclick = function () {
      isClicker = true;
    };
  }

  window.onscroll = function () {
    // размер скролла
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
        // высота окна
    heightWindow = window.innerHeight || document.documentElement.clientHeight,
        // высота всего документа
    heightDocument = document.body.clientHeight;

    if (scrolled + heightWindow >= heightDocument && isClicker == false) {
      giftModal.style.display = 'flex';
      giftBtn.style.display = 'none';
    } else {
      giftModal.style.display = 'none';
    }
  };
}

module.exports = gift;