function editNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}

/* TODO: Test application */

/* TODO: get input values*/

/* TODO: input validation
 BUG: le formulaire doit être quand l'utilisateur on submit

*/

/* TODO: confirmation reussie */

/* TODO: close modal */

const closeModalFunc = () => {
    const modalCloseBtn = document.querySelector('.close');

    const bgroundModal = document.querySelector('.bground');
    modalCloseBtn.addEventListener('click', (e) => {
        document.querySelector('.bground').style.display = 'none';
    });

    bgroundModal.addEventListener('click', (e) => {
        if (!e.target.closest('.content')) {
            document.querySelector('.bground').style.display = 'none';
        }
    });
};

closeModalFunc();