function formFooter() {
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Мы скоро вам позвоним';
	message.failure = 'Увы! Ничего не вышло...';

	// find input form
	let input = document.getElementsByTagName('input'),
		inputPhone = document.getElementsByName('phone'),
		// получили форму
		sub_form = document.getElementsByTagName('form'),
		// уведомление об отправке
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	for (let i = 0; i < sub_form.length; i++) {
		sub_form[i].addEventListener('submit', function(event) {
			event.preventDefault();
			sub_form[i].appendChild(statusMessage);

			let request = new XMLHttpRequest();

			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');

			let formData = new FormData(sub_form[i]);

			request.send(formData);

			request.onreadystatechange = ()=> {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage = message.success;
						sub_form[i].textContent = statusMessage;
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});
    }; 
    // конец отправки


    // форма по типу
   	let nameInput = document.getElementsByName('name'),
    	messageInput = document.getElementsByName('message'),
    	phoneInput = document.getElementsByName('phone');

    // проверка на русские буквы
    for (let i = 0; i < nameInput.length; i++) {
    	nameInput[i].oninput = function(e) {
    		checkInputText(e);
    	}
    }

    for (let i = 0; i < messageInput.length; i++) {
    	messageInput[i].oninput = function(e) {
    		checkInputText(e);
    	}
    }

    function checkInputText(e) {
    	let a = e.target.value;
    	if ( a.replace(/[^a-z|0-9]+/ig,'') ) {
    		e.target.value = '';
    	}
    }

    for (let i = 0; i < phoneInput.length; i++) {
    	phoneInput[i].onfocus = function() {
    		phoneInput[i].value = "+7";
    	}

    	phoneInput[i].onkeydown = function() {
    		let phone = phoneInput[i].value.length;

    		if (phone == 2) 
    			this.value = this.value + '(';
    		
    		if (phone == 6) 
    			this.value = this.value + ')';
    		  
    		if (phone == 10) 
    			this.value = this.value + '—'; 
    		
    		if (phone == 13)  
    			this.value = this.value + '—';
    		
    	}
    }

}
formFooter();

