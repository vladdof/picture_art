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
	let accord = require('./parts/accordeon.js');
	let gamburger = require('./parts/gamburger.js');


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