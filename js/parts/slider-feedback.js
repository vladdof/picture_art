// slider feedback
let slideIndex = 1,
	slidesF = document.getElementsByClassName('feedback-slider-item'),
	prevF = document.querySelector('.main-prev-btn'),
	nextF = document.querySelector('.main-next-btn');

showSlidesF(slideIndex);
// show 1 slide
function showSlidesF(n) {

	// return to first after scrolling to last
	if (n > slidesF.length) {
		slideIndex = 1;
	};

	if (n < 1) {
		slideIndex = slidesF.length;
	};

	// Hide all slides, only one
	for (let i = 0; i < slidesF.length; i++) {
		// slidesF[i].style.display = 'none';
		slidesF[i].style.display = 'none';
	}

	slidesF[slideIndex - 1].style.display = 'flex';
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

function nextAuto() {
	plusSlides(1);
}

// window.onload = function() { // start slides before load
//     showSlidesF();
//     setInterval(function() { 
//         nextAuto();
//     },5000);
// };