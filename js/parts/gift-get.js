let giftBtn = document.querySelector('.fixed-gift'),
	giftModal = document.querySelector('.popup-gift'),
	closeGift = giftModal.querySelector('.popup-close');

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