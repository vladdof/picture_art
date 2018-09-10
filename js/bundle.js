(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function() {

	let gift = require('./parts/gift-get.js');
	let	hoverPic = require('./parts/hoverPicture.js');
	let	style = require('./parts/more-styles.js');
	let	popupConsultant = require('./parts/popup-consultation.js');
	let	popupDesign = require('./parts/popup-design.js');
	let	sliderFeedback = require('./parts/slider-feedback.js');
	let	sliderMain = require('./parts/slider-main.js');
	let	sort = require('./parts/sort.js');

	gift();
	hoverPic();
	style();
	popupConsultant();
	popupDesign();
	sliderFeedback();
	sliderMain();
	sort();
});
},{"./parts/gift-get.js":2,"./parts/hoverPicture.js":3,"./parts/more-styles.js":4,"./parts/popup-consultation.js":5,"./parts/popup-design.js":6,"./parts/slider-feedback.js":7,"./parts/slider-main.js":8,"./parts/sort.js":9}],2:[function(require,module,exports){
function gift() {

	let giftBtn = document.querySelector('.fixed-gift'),
		giftModal = document.querySelector('.popup-gift');

	function hideGift() {
		giftBtn.style.display = 'flex';
		giftModal.style.display = 'none';
	};

	giftBtn.addEventListener('click', function() {
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

}

module.exports = gift;
},{}],3:[function(require,module,exports){
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
	    	    imgDefault.forEach(function(i) {
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function popupConsultant() {
	let btnConsultant = document.querySelectorAll('.button-consultation'),
		consultantModal = document.querySelector('.popup-consultation');

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
}

module.exports = popupConsultant;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
				
			}	else if (target == 'active') {

				console.log('new new new');
			}	else {
					linkItem[i].classList.remove('active');	
			}
		}

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
	});
}

module.exports = sort;
},{}]},{},[1]);
