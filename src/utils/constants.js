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

const VALIDATION_CONFIG = ({
  formElement: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
})

const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
    "Content-Type": "application/json",
    authorization: "f7d1dbf3-9b0e-433f-ae13-d2e6f8e642db",
  }
}

export { VALIDATION_CONFIG, popupElement, popupImageElement, popupImage, popupImageTitle, popupAvatar, popupProfileElement, popupCardElement, buttonEdit, buttonAdd, groupInputTitle, groupInputUrl, inputEditName, inputEditInfo, popupImageSelector, templateSelector, apiConfig }