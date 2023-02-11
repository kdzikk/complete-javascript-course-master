'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const open = params => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const close = params => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeEsc = e => {
  if (e.key === 'Escape') {
    close();
  }
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', open);
}

btnCloseModal.addEventListener('click', close);
overlay.addEventListener('click', close);
document.addEventListener('keydown', closeEsc);
