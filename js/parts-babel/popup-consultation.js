"use strict";

function showPopup() {
  var btnConsultant = document.querySelectorAll('.button-consultation'),
      consultantModal = document.querySelector('.popup-consultation');
  setTimeout(function () {
    if (document.querySelector('.popup-design').style.display == 'flex' || document.querySelector('.popup-gift').style.display == 'flex') {
      consultantModal.style.display = 'none';
    } else {
      consultantModal.style.display = 'flex';
    }
  }, 60000); // function popupConsultant() {

  for (var i = 0; i < btnConsultant.length; i++) {
    btnConsultant[i].addEventListener('click', function () {
      consultantModal.style.display = 'flex'; // hideGiftBtn();
    });
  }

  consultantModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'popup-close' || target.className == 'popup-consultation') {
      consultantModal.style.display = 'none'; // showGiftBtn();
    }

    ;
  }); // }
}

module.exports = showPopup;