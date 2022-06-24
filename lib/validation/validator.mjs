import { errorMessage, errorPrinter } from '../errorHandle/index.mjs';

const firstValidation = (data) => {
	if (!data || data.length < 2) {
		errorPrinter(errorMessage.prenom);
		return -1;
	}
	return 0;
};
const lastValidation = (data) => {
	if (!data || data.length < 2) {
		errorPrinter(errorMessage.nom);
		return -1;
	}
	return 0;
};

const emailValidation = (email) => {
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!emailRegex.test(email)) {
		errorPrinter(errorMessage.email);
		return -1;
	}
	return 0;
};
const dateValidation = (date) => {
	// Date format: YYYY-MM-DD
	const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	if (!dateRegex.test(date)) {
		errorPrinter(errorMessage.dateFormat);
		return -1;
	}

	return 0;
};
const btnRadioValidation = (value) => {
	if (value === 'on' || value === null) {
		errorPrinter(errorMessage.radioBtn);
		return -1;
	}
	return 0;
};

const btncheckValidation = (data) => {
	if (data === false) {
		errorPrinter(errorMessage.checkboxBtn);
		return -1;
	}
	return 0;
};
const checkQuantityValidation = (data) => {
	if (!Number(data)) {
		errorPrinter(errorMessage.quantity);
		return -1;
	}
	return 0;
};

export default {
	quantityValue: checkQuantityValidation,
	radioBtn: btnRadioValidation,
	firstName: firstValidation,
	lastName: lastValidation,
	checkboxBtn: btncheckValidation,
	dateFormat: dateValidation,
	email: emailValidation,
};
