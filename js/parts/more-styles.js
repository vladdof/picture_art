function style() {
	let btnStyles = document.querySelector('.button-styles'),
		boxMore = document.getElementsByClassName('styles-2');

	btnStyles.addEventListener('click', function() {

		this.style.display = 'none';

		for (let i = 0; i < boxMore.length; i++) {
			boxMore[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			boxMore[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		}
	});
}

module.exports = style;