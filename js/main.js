const btnModal = document.querySelector('.nav__btn'),
    btnModalMobile = document.querySelector('.nav__btn--mobile'),
    cLosed = document.querySelector('[data-modal-closed]'),
    modal = document.querySelector('.modal');

btnModal.onclick = function () {
    modal.classList.add('modal-active');
};

btnModalMobile.onclick = function () {
    modal.classList.add('modal-active');
};

cLosed.onclick = function () {
    modal.classList.remove('modal-active');
};
