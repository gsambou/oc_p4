import validateData from './lib/validation/index.mjs';

function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// launch modal form callback
const launchModal = () => {
	const modalbg = document.querySelector('.bground');
	modalbg.style.display = 'block';
};

// addEventLister "click" to btn
const listenBtnClick = () => {
	const modalBtn = document.querySelectorAll('.modal-btn');
	modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
};

/**
 * IMPROVED: close modal
 */
const closeModalFunc = () => {
	const modalCloseBtn = document.querySelector('.close');
	const bgroundModal = document.querySelector('.bground');

	const callback = (e) => {
		bgroundModal.style.display = 'none';
	};
	modalCloseBtn.addEventListener('click', callback);
	bgroundModal.addEventListener('click', (e) => {
		if (!e.target.closest('.content')) {
			callback(e);
		}
	});
};

/**
 *  IMPROVED: get input values
 */
const getFormData = () => ({
	firstName: document.querySelector('#first').value,
	lastName: document.querySelector('#last').value,
	email: document.querySelector('#email').value,
	birthdate: document.querySelector('#birthdate').value,
	quantity: document.querySelector('#quantity').value,
	location: document.querySelector('.checkbox-input:checked')
		? document.querySelector('.checkbox-input:checked').value
		: null,
	tos: document.querySelector('#checkbox1').checked,
	// newsletter: document.querySelector('#checkbox2').checked,
});

/**
 * form process
 * REVIEW:
 */
const dataFormProcess = () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const data = getFormData();
		console.log(validateData(data));
	});
};

/* TODO: confirmation reussie */

// listen btn click and launch modal event
listenBtnClick();
// close modal
closeModalFunc();
// Process data get with form
dataFormProcess();
