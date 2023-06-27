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

// Добавляем картинки

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const groupElement = document.querySelector('.group__element');
const cardTitle = document.querySelector('.popup-image__title');
const cardImage = document.querySelector('.group__image');
const inputText = document.querySelector('.popup__input_edit_image-name');
const inputImage = document.querySelector('.popup__input_edit_image-url');
const cardButton = document.querySelector('.popup-image__button');
const templateElement = document.querySelector('#template-element')

const createCard = ({name, link}) => {
  const clone = templateElement.content.cloneNode(true);
  const cardElement = clone.querySelector('.group__element').cloneNode(true);
  cardElement.querySelector('.group__title').textContent = name;
  cardElement.querySelector('.group__image').src = link;

  return cardElement;
}

const handelSubmit = (e) => {

};


initialCards.forEach((item) => {
  const cardElement = createCard(item);
  groupElement.prepend(cardElement);
});

cardButton.addEventListener('submit', handelSubmit);

// Подключаем функции 

buttonEdit.addEventListener('click', popupOpen)
buttonAdd.addEventListener('click', popupImageOpen);

buttonClose.addEventListener('click', popupClose);
popupElement.addEventListener('click', popupClose);

buttonImageClose.addEventListener('click', popupImageClose);
popupImageElement.addEventListener('click', popupImageClose);

formElement.addEventListener('submit', handleFormSubmit);
