function hoverPic() {
	let wrapPicture = document.querySelector('.sizes-wrapper'),
		img = wrapPicture.getElementsByTagName('img'),
		imgHover = [
			'sizes-1-1',
			'sizes-2-1',
			'sizes-3-1',
			'sizes-4-1'
		],
		imgDefault = [
			'sizes-1',
			'sizes-2',
			'sizes-3',
			'sizes-4'
		],
		count = 0;

	if (isTouchDevice() === true) {

		wrapPicture.addEventListener('mouseenter', function(event) {

			let target = event.target;
			event.preventDefault();

			if (target.tagName == 'IMG') {
				for ( let i = 0; i < img.length; i++ ) {
					if (target == img[i]) {
						showPic(i);
						break;
					}
				}
			} else {
				img.forEach(function(i) {
					hidePic(i);
				});
			}
		}, false);

	} else {

		for ( let i = 0; i < img.length; i++ ) {
			img[i].addEventListener('mouseover', function() {
				showPic(i);
			});

			img[i].addEventListener('mouseout', function() {
				hidePic(i);
			});
		}

	}

	function isTouchDevice() {
		return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
	}

	function showPic(b) {
		img[b].style.position = 'relative';
		img[b].style.zIndex = '100';
		img[b].src = `img/${imgHover[b]}.png`;
	}

	function hidePic(i) {
		img[i].style.position = '';
		img[i].style.zIndex = '';
		img[i].src = `img/${imgDefault[i]}.png`;
	}
}

module.exports = hoverPic;
