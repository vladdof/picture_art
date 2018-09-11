function accord() {	
	let accordLink = document.querySelectorAll('.accordion-heading > span'),
		accordItem = document.querySelectorAll('.accordion-block'),
		accordBox = document.getElementById('accordion');

	accordBox.addEventListener('click', function(event) {
		let target = event.target;

		if (target.tagName == 'SPAN') {
			for (let i = 0; i < accordLink.length; i++) {
				
				hideAccord(i);
				if (target == accordLink[i]) {
					accordLink[i].classList.add('activeAccord');

					showAccord(i);
					break;
				}
			} 
		}
	});

	function showAccord(b) {
		accordItem[b].style.display = 'flex';
	}

	function hideAccord(a) {
		for (let i = a; i < accordItem.length; i++) {
			accordItem[i].style.display = 'none';
			accordLink[i].classList.remove('activeAccord');
		}
	}
}

module.exports = accord;