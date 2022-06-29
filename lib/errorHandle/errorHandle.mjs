// const errorText = (message) => {
// 	const messageElement = document.createElement('div');
// 	messageElement.innerHTML = message;
// 	messageElement.style.color = 'red';
// 	messageElement.style.fontSize = '0.4em';
// 	messageElement.classList.add('text-control');
// 	return messageElement;
// };

const errorPrinter = ({ selector, message }) => {
	const element = document.querySelector(selector);
	const parent = element.parentNode;
	const input = parent.querySelector('input');
	let attribute = parent.getAttribute('data-error-visible');

	if (attribute === 'false') {
		parent.setAttribute('data-error-visible', 'true');
		parent.setAttribute('data-error', message);
	}

	parent.addEventListener('click', (e) => {
		errorMessage.innerHTML = '';
		parent.setAttribute('data-error-visible', 'false');
		errorMessage.classList.remove('text-control');
	});

	input.addEventListener('focus', (e) => {
		errorMessage.innerHTML = '';
		parent.setAttribute('data-error-visible', 'false');
		errorMessage.classList.remove('text-control');
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
