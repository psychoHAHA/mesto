const popupElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const profileContainer = document.querySelector('.profile__container');
const buttonSave = document.querySelector('.popup__button');

let nameEdit = document.querySelector('.profile__title');
let infoEdit = document.querySelector('.profile__subtitle');
let inputEditName = document.querySelector('.popup__edit-name');
let inputEditInfo = document.querySelector('.popup__edit-info');

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

function editProfile() {
  nameEdit.innerHTML = inputEditName.value;
  infoEdit.innerHTML = inputEditInfo.value;
}

// Кнопка "Сохранить" закрывает попап
buttonSave.addEventListener('click', popupClose);
buttonSave.addEventListener('click', editProfile);
