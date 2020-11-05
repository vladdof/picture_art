window.addEventListener('DOMContentLoaded', function() {

	let gift = require('./parts-babel/gift-get.js');
	let	hoverPic = require('./parts-babel/hoverPicture.js');
	let	style = require('./parts-babel/more-styles.js');
	let	showPopup = require('./parts-babel/popup-consultation.js');
	let	popupDesign = require('./parts-babel/popup-design.js');
	let	sliderFeedback = require('./parts-babel/slider-feedback.js');
	let	sliderMain = require('./parts-babel/slider-main.js');
	let	sort = require('./parts-babel/sort.js');
	let form = require('./parts-babel/work-form.js');
	let calc = require('./parts-babel/calc.js');
	let accord = require('./parts-babel/accordeon.js');
	let gamburger = require('./parts-babel/gamburger.js');


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
