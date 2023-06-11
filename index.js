const popupElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const profileContainer = document.querySelector('.profile__container');
const buttonSave = document.querySelector('.profile__button');


// Закрываем и открываем попап
function popupOpen() {
  popupElement.classList.add('popup__opened');
  console.log(buttonEdit);
  console.log(buttonSave);
}

function popupClose(e) {

  if (e.target === e.currentTarget) {
    popupElement.classList.remove('popup__opened');
  }
}

buttonEdit.addEventListener('click', popupOpen);

buttonClose.addEventListener('click', popupClose);
popupElement.addEventListener('click', popupClose);

// end

buttonSave.addEventListener('click', profileSave);

function addInfoContainer() {
  let profileName = document.querySelector('.profile__title');
  let profileInfo = document.querySelector('.profile__subtitle');
}
