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