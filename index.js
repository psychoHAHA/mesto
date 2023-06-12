const popupElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const profileContainer = document.querySelector('.profile__container');
const buttonSave = document.querySelector('.popup__button');

const nameEdit = document.querySelector('.profile__title');
const infoEdit = document.querySelector('.profile__subtitle');
const inputEdit = document.querySelector('.popup__input');

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

function profileEdit() {
  
}

profileEdit();

// Кнопка "Сохранить" закрывает попап
buttonSave.addEventListener('click', popupClose);
buttonSave.addEventListener('click', profileEdit);
