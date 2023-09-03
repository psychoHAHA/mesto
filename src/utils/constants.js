const popupElement = document.querySelector('.popup')
const popupImageElement = document.querySelector('.popup-image')
const popupImage = document.querySelector('.popup-image__photo')
const popupImageTitle = document.querySelector('.popup-image__title')
const popupAvatar = document.querySelector('.popup-avatar')

const popupProfileElement = document.querySelector('.popup-profile')
const popupCardElement = document.querySelector('.popup-card')

const buttonEdit = document.querySelector('.profile__button-edit')
const buttonAdd = document.querySelector('.profile__button')

const popupImageSelector = '.popup-image'

const groupInputTitle = document.querySelector('.popup-card__input_edit_image-name')
const groupInputUrl = document.querySelector('.popup-card__input_edit_image-url')
const inputEditName = document.querySelector('.popup__input_edit_profile-name')
const inputEditInfo = document.querySelector('.popup__input_edit_profile-info')

const templateSelector = "#template-element"

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

const VALIDATION_CONFIG = ({
  formElement: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
})

export { initialCards, VALIDATION_CONFIG, popupElement, popupImageElement, popupImage, popupImageTitle, popupAvatar, popupProfileElement, popupCardElement, buttonEdit, buttonAdd, groupInputTitle, groupInputUrl, inputEditName, inputEditInfo, popupImageSelector, templateSelector }