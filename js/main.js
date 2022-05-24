// modal
const openModal = document.querySelector('#open_modal');
const openModal1 = document.querySelector('#open_modal1');
const openModal2 = document.querySelector('#open_modal2');
const openModal3 = document.querySelector('#open_modal3');
const openModal4 = document.querySelector('#open_modal4');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('#modal_open');
const modal1 = document.querySelector('#modal_open1');
const modal2 = document.querySelector('#modal_open2');
const modal3 = document.querySelector('#modal_open3');
const modal4 = document.querySelector('#modal_open4');
const modalClose = document.querySelector('#modal_close');
const modalClose1 = document.querySelector('#modal_close1');
const modalClose2 = document.querySelector('#modal_close2');
const modalClose3 = document.querySelector('#modal_close3');
const modalClose4 = document.querySelector('#modal_close4');

openModal.addEventListener('click', () => {
    modal.classList.add('is-active');
})
openModal1.addEventListener('click', () => {
    modal1.classList.add('is-active');
})
openModal2.addEventListener('click', () => {
    modal2.classList.add('is-active');
})
openModal3.addEventListener('click', () => {
    modal3.classList.add('is-active');
})
openModal4.addEventListener('click', () => {
    modal4.classList.add('is-active');
})


modalClose.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
modalClose1.addEventListener('click', () => {
    modal1.classList.remove('is-active');
})
modalClose2.addEventListener('click', () => {
    modal2.classList.remove('is-active');
})
modalClose3.addEventListener('click', () => {
    modal3.classList.remove('is-active');
})
modalClose4.addEventListener('click', () => {
    modal4.classList.remove('is-active');
})