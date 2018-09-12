"use strict";

require("core-js/modules/es6.regexp.match");

function sort() {
  var portfolioBox = document.querySelector('.portfolio-menu'),
      linkItem = portfolioBox.getElementsByTagName('li'),
      no = document.querySelector('.portfolio-no'),
      portfolio = document.getElementsByClassName('portfolio-block');
  portfolioBox.addEventListener('click', function (event) {
    var target = event.target.className;
    console.log(target);

    for (var i = 0; i < linkItem.length; i++) {
      if (linkItem[i].classList.contains(target)) {
        linkItem[i].classList.add('active');

        for (var j = 0; j < portfolio.length; j++) {
          if (portfolio[j].classList.contains(target)) {
            portfolio[j].style.display = 'block';
          } else if (target == 'grandmother' || target == 'granddad') {
            no.style.display = 'block';
            portfolio[j].style.display = 'none';
          } else {
            portfolio[j].style.display = 'none';
            no.style.display = 'none';
          }
        }
      } else {
        if (target.match(/\bactive\b/)) {
          break;
        } else {
          linkItem[i].classList.remove('active');
        }
      }
    }
  });
}

module.exports = sort;