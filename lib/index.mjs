import { launchModal, closeModalFunc, dataFormProcess, editNav } from './modal/index.mjs';

const launchFunc = () => {
	//  launch modal on 'click' event
	launchModal();

	// close modal
	closeModalFunc();
	// Process data get with form
	dataFormProcess();
	// launch edit nav
	editNav();
};
export default launchFunc;
