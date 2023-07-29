'use strict';
// we are gonna build ui component and this model window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//nodelist is a little bit like an array it's not exactly like
//an array but here for now,it works as though it was an array.
const openModal = function () {
  //   console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//handling and esc keypress event
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    closeModal();
    // if (!modal.classList.contains('hidden')) {
    //   closeModal();
    // }
  }
});
