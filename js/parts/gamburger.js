function gamburger() {	
	let menuBtn = document.querySelector('.burger'),
		menu = document.querySelector('.burger-menu');

	window.onresize = function() {
		let	width = window.innerWidth;

		if (width < 768) {
			menuBtn.addEventListener('click', function() {
				menu.style.display = 'block';
			});
		} 
		if (width > 768) {
			menu.style.display = 'none';
		}
	}
}

module.exports = gamburger;