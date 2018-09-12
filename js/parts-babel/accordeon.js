"use strict";

function accord() {
  var accordLink = document.querySelectorAll('.accordion-heading > span'),
      accordItem = document.querySelectorAll('.accordion-block'),
      accordBox = document.getElementById('accordion');
  accordBox.addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName == 'SPAN') {
      for (var i = 0; i < accordLink.length; i++) {
        hideAccord(i);

        if (target == accordLink[i]) {
          accordLink[i].classList.add('activeAccord');
          showAccord(i);
          break;
        }
      }
    }
  });

  function showAccord(b) {
    accordItem[b].style.display = 'flex';
  }

  function hideAccord(a) {
    for (var i = a; i < accordItem.length; i++) {
      accordItem[i].style.display = 'none';
      accordLink[i].classList.remove('activeAccord');
    }
  }
}

module.exports = accord;