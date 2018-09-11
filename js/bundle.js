(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function() {

	let gift = require('./parts/gift-get.js');
	let	hoverPic = require('./parts/hoverPicture.js');
	let	style = require('./parts/more-styles.js');
	let	showPopup = require('./parts/popup-consultation.js');
	let	popupDesign = require('./parts/popup-design.js');
	let	sliderFeedback = require('./parts/slider-feedback.js');
	let	sliderMain = require('./parts/slider-main.js');
	let	sort = require('./parts/sort.js');
	let form = require('./parts/work-form.js');
	let calc = require('./parts/calc.js');


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
});
},{"./parts/calc.js":2,"./parts/gift-get.js":3,"./parts/hoverPicture.js":4,"./parts/more-styles.js":5,"./parts/popup-consultation.js":6,"./parts/popup-design.js":7,"./parts/slider-feedback.js":8,"./parts/slider-main.js":9,"./parts/sort.js":10,"./parts/work-form.js":11}],2:[function(require,module,exports){
function calc() {

	let size = document.getElementById('size'),
		material = document.getElementById('material'),
		options = document.getElementById('options'),
		promocode = document.querySelector('.promocode'),
		totalValue = document.querySelector('.calc-price'),
		sizeSum = 0,
		materialSum = 0,
		optionsSum = 0,
		promocodeCode = 'IWANTPOPART',
		promocodeCodeSum = 0,
		total = 0;
		let a;

	size.addEventListener('change', function () {
		sizeSum = +this.value;
		clear();
	});

	material.addEventListener('change', function () {
		materialSum = +this.value;
		clear();
	});

	options.addEventListener('change', function () {
		optionsSum = +this.value;
		if (options.value == 0) {
			clear();
		} else {
			clear();
		}
		
	});

	promocode.addEventListener('change', function() {
		if (promocode.value == promocodeCode) {
			promocodeCodeSum = a * 0.3;
		} 
		clear();
	});

	function clear() {

		if (size.value == 0 || material.value == 0) {
			totalValue.textContent = ' Укажите материал и размер ';
		} else if (promocode.value == promocodeCode) {
			total = sizeSum + materialSum + optionsSum;
			a = total;
			totalValue.textContent = total - promocodeCodeSum;
		} else {
			total = sizeSum + materialSum + optionsSum;
			a = total;
			totalValue.textContent = a;
		}
	}
};

module.exports = calc;
},{}],3:[function(require,module,exports){
function gift() {

	let giftBtn = document.querySelector('.fixed-gift'),
		giftModal = document.querySelector('.popup-gift'),
		isClicker = false;

	function hideGift() {
		giftBtn.style.display = 'flex';
		giftModal.style.display = 'none';
	};

	giftBtn.addEventListener('click', function() {
		isClicker = true;
		this.style.display = 'none';
		giftModal.style.display = 'flex';
	});

	giftModal.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == 'popup-close' || target.className == 'popup-gift') {
			hideGift();
		};
	});

	// var hideGiftBtn = function() {
	// 	giftBtn.style.display = 'none';
	// }
	// var showGiftBtn = function() {
	// 	giftBtn.style.display = 'flex';
	// }
	let buttonAll = document.getElementsByTagName('button');

		for (let i = 0; i < buttonAll.length; i++) {
			buttonAll[i].onclick = function () {
				isClicker = true;
			}
		}

	window.onscroll = function() {
		// размер скролла
	  let scrolled = window.pageYOffset || document.documentElement.scrollTop,
	  	// высота окна
	  	  heightWindow = window.innerHeight || document.documentElement.clientHeight,
	  	// высота всего документа
	  	  heightDocument = document.body.clientHeight;

		if ( scrolled+heightWindow >= heightDocument && isClicker == false) {
			giftModal.style.display = 'flex';
			giftBtn.style.display = 'none';
		} else {
		 	giftModal.style.display = 'none';
		 	giftBtn.style.display = 'flex';
		}
	}
}

module.exports = gift;
},{}],4:[function(require,module,exports){
function hoverPic() {
	let wrapPicture = document.querySelector('.sizes-wrapper'),
		img = wrapPicture.getElementsByTagName('img'),
		imgHover = [
						"sizes-1-1", 
						"sizes-2-1",
						"sizes-3-1",
						"sizes-4-1"
					],
		imgDefault = [
						"sizes-1",
						"sizes-2",
						"sizes-3",
						"sizes-4"
					],
		count = 0;

	if (isTouchDevice() === true) {	

	    wrapPicture.addEventListener('mouseenter', function(event) {
	        
	        let target = event.target;
	    	event.preventDefault();
	        
	    	if (target.tagName == 'IMG') {
	    	    for ( let i = 0; i < img.length; i++ ) {
	    	        if (target == img[i]) {
		    		    showPic(i);
		    		    break;
	    	        }
	    	    }
	    	} else {
	    	    img.forEach(function(i) {
	    	        hidePic(i);
	    	    });
	    	}
	    }, false);

	} else {

		for ( let i = 0; i < img.length; i++ ) {
			img[i].addEventListener('mouseover', function () {
				showPic(i);
			});

			img[i].addEventListener('mouseout', function (){
				hidePic(i);
			});
		}
	    
	}

	function isTouchDevice() {
	    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	}

	function showPic(b) {
		img[b].style.position = 'relative';
		img[b].style.zIndex = '100';
		img[b].src = `img/${imgHover[b]}.png`;
	}

	function hidePic(i) {
		img[i].style.position = '';
		img[i].style.zIndex = '';
		img[i].src = `img/${imgDefault[i]}.png`;
	}
}

module.exports = hoverPic;
},{}],5:[function(require,module,exports){
function style() {
	let btnStyles = document.querySelector('.button-styles'),
		boxMore = document.getElementsByClassName('styles-2');

	btnStyles.addEventListener('click', function() {

		this.style.display = 'none';

		for (let i = 0; i < boxMore.length; i++) {
			boxMore[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			boxMore[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		}
	});
}

module.exports = style;
},{}],6:[function(require,module,exports){
function showPopup() {
let btnConsultant = document.querySelectorAll('.button-consultation'),
	consultantModal = document.querySelector('.popup-consultation');

	setTimeout(function() {
		if (document.querySelector('.popup-design').style.display == 'flex' || document.querySelector('.popup-gift').style.display == 'flex') {
			consultantModal.style.display = 'none';
		} else {
			consultantModal.style.display = 'flex';
		}
		
	}, 60000)
	

// function popupConsultant() {

	for (let i = 0; i < btnConsultant.length; i++) {
		btnConsultant[i].addEventListener('click', ()=> {
			consultantModal.style.display = 'flex';
			// hideGiftBtn();
		});
	}

	consultantModal.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == 'popup-close' || target.className == 'popup-consultation') {
			consultantModal.style.display = 'none';
			// showGiftBtn();
		};
	});
// }
}
module.exports = showPopup;
},{}],7:[function(require,module,exports){
function popupDesign() {
	let btnDesign = document.getElementsByClassName('button-design'),
		designModal = document.querySelector('.popup-design');

	for (let i = 0; i < btnDesign.length; i++) {
		btnDesign[i].addEventListener('click', ()=> {
			designModal.style.display = 'flex';
			// hideGiftBtn();
		});
	}

	designModal.addEventListener('click', (event)=> {
		let target = event.target;

		if (target.className == 'popup-close' || target.className == 'popup-design') {
			designModal.style.display = 'none';
			// showGiftBtn();
		}
	});
}

module.exports = popupDesign;
},{}],8:[function(require,module,exports){
// slider feedback
function sliderFeedback() {
	function nextAuto() {
		plusSlides(1);
	}
	
    setInterval(function() { 
        nextAuto();
    },5000);

	let slideIndex = 0,
		boxSlider = document.querySelector('.feedback-slider-box'),
		slidesF = document.getElementsByClassName('feedback-slider-item').length,
		prevF = document.querySelector('.main-prev-btn'),
		nextF = document.querySelector('.main-next-btn');

	showSlidesF(slideIndex);
	// show 1 slide
	function showSlidesF(n) {

		// return to first after scrolling to last
		if (n > slidesF-1) {
			slideIndex = 0;
		};

		if (n < 0) {
			slideIndex = slidesF - 1;
		};

		let boxWidth = boxSlider.clientWidth,
			offset = -slideIndex*boxWidth;

		boxSlider.setAttribute('style', `transform: translate(${offset}px)`);
	}

	function plusSlides(n) {
		showSlidesF(slideIndex += n);
	}

	prevF.addEventListener('click', ()=> {
		plusSlides(-1);
	});
	nextF.addEventListener('click', ()=> {
		plusSlides(1);
	});
}
module.exports = sliderFeedback;
},{}],9:[function(require,module,exports){
// slider main / header
function sliderMain() {
	let slideIndex = 0,
		boxSlider = document.querySelector('.main-slider'),
		slides = document.getElementsByClassName('main-slider-item').length;

	showSlidesF(slideIndex);
	// show 1 slide
	function showSlidesF(n) {

		// return to first after scrolling to last
		if (n > slides-1) {
			slideIndex = 0;
		};

		if (n < 0) {
			slideIndex = slides - 1;
		};

		let boxHeight = boxSlider.clientHeight,
			offset = -slideIndex*boxHeight;

		boxSlider.setAttribute('style', `transform: translateY(${offset}px)`);
	}

	function plusSlides(n) {
		showSlidesF(slideIndex += n);
	}

	function nextAuto() {
		plusSlides(1);
	}

	setInterval(function() { 
	    nextAuto();
	},5000);
}
module.exports = sliderMain;
},{}],10:[function(require,module,exports){
function sort() {
	let portfolioBox = document.querySelector('.portfolio-menu'),
		linkItem = portfolioBox.getElementsByTagName('li'),
		no = document.querySelector('.portfolio-no'),
		portfolio = document.getElementsByClassName('portfolio-block');

	portfolioBox.addEventListener('click', function(event) {
		let target = event.target.className;
		console.log(target);

		for (let i = 0; i < linkItem.length; i++) {

			if (linkItem[i].classList.contains(target)) {
				linkItem[i].classList.add('active');

			  	for (let j=0; j<portfolio.length; j++) {

				  	if (portfolio[j].classList.contains(target)) {
				    	portfolio[j].style.display = 'block';

				    } else if (target == 'grandmother' || target == 'granddad') {
						no.style.display = 'block';
						portfolio[j].style.display = 'none';

					}	else {
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
},{}],11:[function(require,module,exports){
function formFooter() {
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Мы скоро вам позвоним';
	message.failure = 'Увы! Ничего не вышло...';

	// find input form
	let input = document.getElementsByTagName('input'),
		inputPhone = document.getElementsByName('phone'),
		// получили форму
		sub_form = document.getElementsByTagName('form'),
		// уведомление об отправке
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	for (let i = 0; i < sub_form.length; i++) {
		sub_form[i].addEventListener('submit', function(event) {
			event.preventDefault();
			sub_form[i].appendChild(statusMessage);

			let request = new XMLHttpRequest();

			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');

			let formData = new FormData(sub_form[i]);

			request.send(formData);

			request.onreadystatechange = ()=> {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage = message.success;
						sub_form[i].textContent = statusMessage;
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});
    }; 
    // конец отправки


    // форма по типу
   	let nameInput = document.getElementsByName('name'),
    	messageInput = document.getElementsByName('message'),
    	phoneInput = document.getElementsByName('phone');

    // проверка на русские буквы
    for (let i = 0; i < nameInput.length; i++) {
    	nameInput[i].oninput = function(e) {
    		checkInputText(e);
    	}
    }

    for (let i = 0; i < messageInput.length; i++) {
    	messageInput[i].oninput = function(e) {
    		checkInputText(e);
    	}
    }

    function checkInputText(e) {
    	let a = e.target.value;
    	if ( a.replace(/[^a-z|0-9]+/ig,'') ) {
    		e.target.value = '';
    	}
    }

    for (let i = 0; i < phoneInput.length; i++) {
    	phoneInput[i].onfocus = function() {
    		phoneInput[i].value = "+7";
    	}

    	phoneInput[i].onkeydown = function() {
    		let phone = phoneInput[i].value.length;

    		if (phone == 2) 
    			this.value = this.value + '(';
    		
    		if (phone == 6) 
    			this.value = this.value + ')';
    		  
    		if (phone == 10) 
    			this.value = this.value + '—'; 
    		
    		if (phone == 13)  
    			this.value = this.value + '—';
    		
    	}
    }

}
module.exports = formFooter;


},{}]},{},[1]);
