function calc() {

	let size = document.getElementById('size'),
		material = document.getElementById('material'),
		options = document.getElementById('options'),
		promocode = document.querySelector('.promocode'),
		totalValue = document.querySelector('.calc-price'),
		sizeSum = 0,
		materialSum = 0,
		optionsSum = 0,
		promocodeCode = 'IWANTPOPART',
		promocodeCodeSum = 0,
		total = 0;
		let a;

	size.addEventListener('change', function () {
		sizeSum = +this.value;
		clear();
	});

	material.addEventListener('change', function () {
		materialSum = +this.value;
		clear();
	});

	options.addEventListener('change', function () {
		optionsSum = +this.value;
		if (options.value == 0) {
			clear();
		} else {
			clear();
		}
		
	});

	promocode.addEventListener('change', function() {
		if (promocode.value == promocodeCode) {
			promocodeCodeSum = a * 0.3;
		} 
		clear();
	});

	function clear() {

		if (size.value == 0 || material.value == 0) {
			totalValue.textContent = ' Укажите материал и размер ';
		} else if (promocode.value == promocodeCode) {
			total = sizeSum + materialSum + optionsSum;
			a = total;
			totalValue.textContent = total - promocodeCodeSum;
		} else {
			total = sizeSum + materialSum + optionsSum;
			a = total;
			totalValue.textContent = a;
		}
	}
};

module.exports = calc;