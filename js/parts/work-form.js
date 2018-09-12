function formFooter() {
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Мы скоро вам позвоним';
	message.failure = 'Увы! Ничего не вышло...';

	// find input form
	let input = document.getElementsByTagName('input'),
		inputPhone = document.getElementsByName('phone'),
		// получили форму
        boxMain = document.querySelectorAll('.main-form'),
		sub_form = document.getElementsByTagName('form'),
		// уведомление об отправке
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	for (let i = 0; i < sub_form.length; i++) {
		sub_form[i].addEventListener('submit', function(event) {
			event.preventDefault();
			boxMain[i].appendChild(statusMessage);

			let request = new XMLHttpRequest();

			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');

			let formData = new FormData(sub_form[i]);

			request.send(formData);

			request.onreadystatechange = ()=> {
				if (request.readyState < 4) {
					statusMessage.innerHTML = "<p>" + message.loading + "</p>";
                    statusMessage.style.textAlign = 'center';
                    statusMessage.style.marginTop = '30px';
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = "<p>" + message.success + "</p>";
                        statusMessage.style.textAlign = 'center';
                        statusMessage.style.marginTop = '30px';
					} else {
						statusMessage.innerHTML = "<p>" + message.failure + "</p>";
                        statusMessage.style.textAlign = 'center';
                        statusMessage.style.marginTop = '30px';
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

    for (let i = 0; i < phoneInput.length; i++) {
        phoneInput[i].oninput = function(e) {
            checkInputText(e);
        }
        mask(i);
    }

    function checkInputText(e) {
        let target = e.target;
    	let a = e.target.value;

        if (target.getAttribute('name') == 'phone') {
            e.target.value = a.replace(/[a-z|а-яё]/ig, '');
        }

    	if (target.getAttribute('name') == 'name' || target.getAttribute('name') == 'message' ) {
            if (a.replace(/[^a-z|0-9]+/ig,'')) {
                e.target.value = '';
            }
    	}
    }

    function mask(b) {
    	phoneInput[b].onfocus = function() {
    		phoneInput[b].value = "+7";
    	}

    	phoneInput[b].onkeydown = function() {
    		let phone = phoneInput[b].value.length;
           
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
module.exports = formFooter;

