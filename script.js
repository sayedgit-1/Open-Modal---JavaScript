'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

console.log(btnShowModal);

// for (let i = 0; i < btnShowModal.length; i++) {
//   console.log(btnShowModal[i].textContent);
// }

// function of show modal
const showModal = function () {
  modal.classList.remove('hidden'); // classList is used to remove class's css property [❌('.hidden')] but [👉('hidden)]
  overlay.classList.remove('hidden');
};

// clickling on button to show modal
btnShowModal.forEach((item, index, arr) => {
  item.addEventListener('click', showModal);
});

//function of close the model with overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//clicking on cross to close modal
btnCloseModal.addEventListener('click', closeModal);

// clicliking on overlay to close modal
overlay.addEventListener('click', closeModal);

// on pressing on ESC button , closing the modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
