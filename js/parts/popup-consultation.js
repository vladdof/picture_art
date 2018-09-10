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