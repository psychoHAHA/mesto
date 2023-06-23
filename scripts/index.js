// Переменные

const popupElement = document.querySelector('.popup');
const popupImageElement = document.querySelector('.popup-image');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const buttonImageClose = document.querySelector('.popup-image__button-close')
const buttonAdd = document.querySelector('.profile__button');

let nameEdit = document.querySelector('.profile__title');
let infoEdit = document.querySelector('.profile__subtitle');
let inputEditName = document.querySelector('.popup__input_edit_profile-name');
let inputEditInfo = document.querySelector('.popup__input_edit_profile-info');
let formElement = document.querySelector('.popup__form');

// Закрываем и открываем попапы

function popupOpen() {
  popupElement.classList.add('popup_opened');
  nameEdit.textContent = inputEditName.value;
  infoEdit.textContent = inputEditInfo.value;
}

function popupClose(e) {

  if (e.target === e.currentTarget) {
    popupElement.classList.remove('popup_opened');
  }
}

// ПОПАП ДОБАВЛЕНИЯ КАРТИНКИ

function popupImageOpen() {
  popupImageElement.classList.add('popup-image_opened');
}

function popupImageClose(e) {

  if (e.target === e.currentTarget) {
    popupImageElement.classList.remove('popup-image_opened');
  }
}

// end 

// Редактируем профиль 

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameEdit.textContent = inputEditName.value;
  infoEdit.textContent = inputEditInfo.value;
  popupElement.classList.remove('popup_opened');
}

// end 

// Ставим лайк

const groupElement = document.querySelector('.group');
const likeButton = groupElement.querySelectorAll('.group__button');

// Подключаем функции 

buttonEdit.addEventListener('click', popupOpen)
buttonAdd.addEventListener('click', popupImageOpen);

buttonClose.addEventListener('click', popupClose);
popupElement.addEventListener('click', popupClose);

buttonImageClose.addEventListener('click', popupImageClose);
popupImageElement.addEventListener('click', popupImageClose);

formElement.addEventListener('submit', handleFormSubmit);
