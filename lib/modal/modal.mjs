import validateData from '../validation/index.mjs';

/**
 * IMPROVED: launch modal form callback
 */
const modalCallback = () => {
	const modalBody = document.querySelector('.modal-body');
	const modalSuccess = document.querySelector('.modal-success');
	const modalbg = document.querySelector('.bground');
	modalbg.style.display = 'block';
	modalBody.style.display = 'block';
	modalSuccess.style.display = 'none';
};

/**
 * IMPROVED: addEventLister "click" to btn to launch modal
 */
const launchModal = () => {
	const modalBtn = document.querySelectorAll('.modal-btn');
	modalBtn.forEach((btn) => btn.addEventListener('click', modalCallback));
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
 *  IMPROVED: get input values from form
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
	newsletter: document.querySelector('#checkbox2').checked,
});

/**
 * form process
 * IMPROVED:
 */
const dataFormProcess = () => {
	const form = document.querySelector('form');
	const modalBody = document.querySelector('.modal-body');
	const modalSuccess = document.querySelector('.modal-success');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		/**
		 * SUCCESS:
		 * Get Data
		 * Check Validation
		 * Show success modal
		 *  */
		if (validateData(getFormData()) === 0) {
			modalBody.style.display = 'none';
			modalSuccess.style.display = 'block';
		}
	});
};

// Edit navigation menu
const editNav = () => {
	const x = document.getElementById('myTopnav');
	x.addEventListener('click', (e) => {
		if (x.className === 'topnav') {
			x.className += ' responsive';
		} else {
			x.className = 'topnav';
		}
	});
};

export { launchModal, closeModalFunc, dataFormProcess, editNav };
