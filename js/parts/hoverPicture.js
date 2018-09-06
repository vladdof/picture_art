let wrapPicture = document.querySelector('.sizes-wrapper'),
	img = wrapPicture.getElementsByTagName('img'),
	imgHover = [
					"sizes-1-1", 
					"sizes-2-1",
					"sizes-3-1",
					"sizes-4-1"
				],
	imgDefault = [
					"sizes-1",
					"sizes-2",
					"sizes-3",
					"sizes-4"
				];

for ( let i = 0; i < img.length; i++ ) {
	img[i].addEventListener('mouseover', function () {
		img[i].style.position = 'relative';
		img[i].style.zIndex = '100';
		img[i].src = `img/${imgHover[i]}.png`;

	});

	img[i].addEventListener('mouseout', function (){
		img[i].style.position = '';
		img[i].style.zIndex = '';
		img[i].src = `img/${imgDefault[i]}.png`;
	});
	
}