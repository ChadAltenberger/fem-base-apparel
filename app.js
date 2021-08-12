import validate from './validate.js';

const btn = document.querySelector('.btn');
const usrInput = document.querySelector('#email');
const message = document.querySelector('.message');
const errIcon = document.querySelector('.error');

btn.addEventListener('click', () => {
	let email = usrInput.value;
	let isValid = validate(email);

	if (isValid) {
		message.innerText = 'Thanks for submitting';
		usrInput.value = '';
	} else {
		errIcon.style.visibility = 'visible';
		message.innerText = 'Please enter a valid email address!';
	}
});
