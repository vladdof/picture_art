"use strict";

require("core-js/modules/es6.regexp.replace");

function formFooter() {
  var message = new Object();
  message.loading = 'Загрузка...';
  message.success = 'Спасибо! Мы скоро вам позвоним';
  message.failure = 'Увы! Ничего не вышло...'; // find input form

  var input = document.getElementsByTagName('input'),
      // inputPhone = document.getElementsByName('phone'),
  textarea = document.getElementsByTagName('textarea'),
      // получили форму
  boxMain = document.getElementsByClassName('main-form'),
      sub_form = document.getElementsByTagName('form'),
      // уведомление об отправке
  statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  var _loop = function _loop(i) {
    sub_form[i].addEventListener('submit', function (event) {
      event.preventDefault();
      var num = event.target.length;
      showMessage(num);
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');
      var formData = new FormData(sub_form[i]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.textContent = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            sub_form[i].style.display = 'none';
            statusMessage.textContent = message.success;
            statusMessage.classList.toggle('status-active');
          } else {
            sub_form[i].style.display = 'none';
            statusMessage.textContent = message.failure;
            statusMessage.classList.toggle('status-active');
          }
        }
      };

      for (var _i3 = 0; _i3 < input.length; _i3++) {
        input[_i3].value = '';
      }

      for (var _i4 = 0; _i4 < textarea.length; _i4++) {
        textarea[_i4].value = '';
      }

      setTimeout(function () {
        sub_form[i].style.display = 'block';
        statusMessage.classList.toggle('status-active');
        statusMessage.textContent = '';
        hideMessage(num);
      }, 3000);
    });
  };

  for (var i = 0; i < sub_form.length; i++) {
    _loop(i);
  }

  ;

  function showMessage(a) {
    if (a == 3) {
      boxMain[1].appendChild(statusMessage);
    }

    if (a == 7) {
      boxMain[2].appendChild(statusMessage);
    }

    if (a == 5) {
      boxMain[0].appendChild(statusMessage);
    }
  }

  function hideMessage(a) {
    if (a == 3) {
      boxMain[1].removeChild(statusMessage);
    }

    if (a == 7) {
      boxMain[2].removeChild(statusMessage);
    }

    if (a == 5) {
      boxMain[0].removeChild(statusMessage);
    }
  } // конец отправки
  // форма по типу


  var nameInput = document.getElementsByName('name'),
      messageInput = document.getElementsByName('message'),
      phoneInput = document.getElementsByName('phone'); // проверка на русские буквы

  for (var i = 0; i < nameInput.length; i++) {
    nameInput[i].oninput = function (e) {
      checkInputText(e);
    };
  }

  for (var _i = 0; _i < messageInput.length; _i++) {
    messageInput[_i].oninput = function (e) {
      checkInputText(e);
    };
  }

  for (var _i2 = 0; _i2 < phoneInput.length; _i2++) {
    phoneInput[_i2].oninput = function (e) {
      checkInputText(e);
    };

    mask(_i2);
  }

  function checkInputText(e) {
    var target = e.target;
    var a = e.target.value;

    if (target.getAttribute('name') == 'phone') {
      e.target.value = a.replace(/[a-z|а-яё]/ig, '');
    }

    if (target.getAttribute('name') == 'name' || target.getAttribute('name') == 'message') {
      if (a.replace(/[^a-z|0-9]+/ig, '')) {
        e.target.value = '';
      }
    }
  }

  function mask(b) {
    phoneInput[b].onfocus = function () {
      phoneInput[b].value = "+7";
    };

    phoneInput[b].onkeydown = function () {
      var phone = phoneInput[b].value.length;
      if (phone == 2) this.value = this.value + '(';
      if (phone == 6) this.value = this.value + ')';
      if (phone == 10) this.value = this.value + '—';
      if (phone == 13) this.value = this.value + '—';
    };
  }
}

module.exports = formFooter;