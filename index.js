const popupElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');

function popupOpen() {
  popupElement.classList.add('popup__opened');
}

function popupClose(e) {

  if (e.target === e.currentTarget) {
    popupElement.classList.remove('popup__opened');
  }
}

buttonEdit.addEventListener('click', popupOpen);

buttonClose.addEventListener('click', popupClose);
popupElement.addEventListener('click', popupClose);