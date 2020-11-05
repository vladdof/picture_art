function popupDesign() {
	let btnDesign = document.getElementsByClassName('button-design'),
		designModal = document.querySelector('.popup-design');

	for (let i = 0; i < btnDesign.length; i++) {
		btnDesign[i].addEventListener('click', () => {
			designModal.style.display = 'flex';
			// hideGiftBtn();
		});
	}

	designModal.addEventListener('click', (event) => {
		let target = event.target;

		if (target.className == 'popup-close' || target.className == 'popup-design') {
			designModal.style.display = 'none';
			// showGiftBtn();
		}
	});
}

module.exports = popupDesign;
