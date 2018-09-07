// slider feedback

function nextAuto() {
	plusSlides(1);
}

window.onload = function() { // start slides before load
    showSlidesF();
    setInterval(function() { 
        nextAuto();
    },5000);
};

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