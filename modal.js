function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const form = document.querySelector('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}

/* TODO: Test application */

/* TODO: get input values*/

const getInputValues = () => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const data = {
			firstName: document.querySelector('#first').value,
			lastName: document.querySelector('#last').value,
			email: document.querySelector('#email').value,
			birthdate: document.querySelector('#birthdate').value,
			quantity: document.querySelector('#quantity').value,
			location: document.querySelector('.checkbox-input:checked').value,
			tos: document.querySelector('#checkbox1').checked,
			newsletter: document.querySelector('#checkbox2').checked,
		};
		console.log(data);
		inputValidation(data);
	});
};

/* TODO: input validation

 BUG: le formulaire doit être quand l'utilisateur on submit

*/

const checkData = (message) => {
	return message;
};
const inputValidation = (data) => {
	const { firstName, lastName, email } = data;

	console.log(firstName);
	console.log(lastName);
	if (lastName.length > 2) {
		document.querySelector(`#${'last'}`).value = 'error what';
	}
};
/* TODO: confirmation reussie */

/* VALIDAT: close modal */

const closeModalFunc = () => {
	const modalCloseBtn = document.querySelector('.close');

	const bgroundModal = document.querySelector('.bground');
	modalCloseBtn.addEventListener('click', (e) => {
		document.querySelector('.bground').style.display = 'none';
	});

	bgroundModal.addEventListener('click', (e) => {
		if (!e.target.closest('.content')) {
			document.querySelector('.bground').style.display = 'none';
		}
	});
};

closeModalFunc();
getInputValues();
