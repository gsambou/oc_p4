const errorPrinter = ({ selector, message }) => {
	const element = document.querySelector(selector);
	const parent = element.parentNode;
	const input = parent.querySelector('input');
	const errorMessage = document.createElement('div');

	errorMessage.innerHTML = message;
	errorMessage.style.color = 'red';
	errorMessage.style.fontSize = '16px';
	parent.append(errorMessage);
	parent.addEventListener('click', (e) => {
		errorMessage.innerHTML = '';
	});

	input.addEventListener('focus', (e) => {
		errorMessage.innerHTML = '';
	});
};

const errorMessage = {
	prenom: {
		selector: '#first',
		message: 'Le champ prenom ne doit pas être vide ou avec moins de 2 caractères',
	},
	nom: {
		selector: '#last',
		message: 'Le champ Nom ne doit pas être vide ou avec moins de 2 caractères',
	},
	email: { selector: '#email', message: `L'email doit être valide` },
	quantity: { selector: '#quantity', message: `Le nombre de tournois doit être un chiffre` },
	dateFormat: { selector: '#birthdate', message: `La date doit être valide` },
	radioBtn: { selector: '.checkbox-label', message: `Vous devez selectionner un tournoi` },
	checkboxBtn: { selector: '.checkbox2-label', message: `Les conditions générales sont obligatoires` },
};

export { errorMessage, errorPrinter };