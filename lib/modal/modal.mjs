import validateData from '../validation/index.mjs';

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
	const closeMessageModal = document.querySelector('#btn-close');

	const callback = (e) => {
		bgroundModal.style.display = 'none';
	};
	modalCloseBtn.addEventListener('click', callback);
	closeMessageModal.addEventListener('click', callback);
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
	const modalBody = document.querySelector('.modal-body');
	const modalSuccess = document.querySelector('.modal-success');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const data = getFormData();
		console.log(data);
		const err = validateData(data);

		if (err === 0) {
			modalBody.style.display = 'none';
			modalSuccess.style.display = 'block';
		}
	});
};

/* TODO: confirmation reussie */

export { listenBtnClick, closeModalFunc, dataFormProcess };
