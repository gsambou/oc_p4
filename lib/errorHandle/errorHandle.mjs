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
		parent.setAttribute('data-error-visible', 'false');
	});

	input.addEventListener('focus', (e) => {
		parent.setAttribute('data-error-visible', 'false');
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
