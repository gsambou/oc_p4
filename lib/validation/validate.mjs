import validator from './validator.mjs';

const validateData = (data) => {
	const { firstName, lastName, email, location, quantity, tos, birthdate } = data;
	let errorFound = 0;

	// Le champ Prenom ou Nom doit avoir au minimum 2 caractères et non vide
	errorFound += validator.firstName(firstName);
	errorFound += validator.lastName(lastName);

	// L'adresse Email doit être valide
	errorFound += validator.email(email);

	// le nombre de concours doit être une valeur Numérique
	errorFound += validator.quantityValue(quantity);

	// date validation
	errorFound += validator.dateFormat(birthdate);

	//  Un bouton radio doit être selectionné
	errorFound += validator.radioBtn(location);

	// Les conditions générales toujours cochées, l'autre facultative

	errorFound += validator.checkboxBtn(tos);

	return errorFound;
};
export default validateData;
