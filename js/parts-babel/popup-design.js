"use strict";

function popupDesign() {
  var btnDesign = document.getElementsByClassName('button-design'),
      designModal = document.querySelector('.popup-design');

  for (var i = 0; i < btnDesign.length; i++) {
    btnDesign[i].addEventListener('click', function () {
      designModal.style.display = 'flex'; // hideGiftBtn();
    });
  }

  designModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'popup-close' || target.className == 'popup-design') {
      designModal.style.display = 'none'; // showGiftBtn();
    }
  });
}

module.exports = popupDesign;