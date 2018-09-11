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


	sliderMain();
	form();
	gift();
	hoverPic();
	style();
	showPopup();
	popupDesign();
	sliderFeedback();
	sort();
});