import { listenBtnClick, closeModalFunc, dataFormProcess } from './lib/index.mjs';

function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// listen btn click and launch modal event
listenBtnClick();
// close modal
closeModalFunc();
// Process data get with form
dataFormProcess();
