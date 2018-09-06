let giftBtn = document.querySelector('.fixed-gift'),
	giftModal = document.querySelector('.popup-gift'),
	closeGift = giftModal.querySelector('.popup-close');

console.log(giftBtn);
console.log(giftModal);
console.log(closeGift);

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


function hideGift() {
	giftBtn.style.display = 'flex';
	giftModal.style.display = 'none';
};