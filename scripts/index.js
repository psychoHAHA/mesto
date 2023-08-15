import Card from "./card.js"
import FormValidator from "./FormValidator.js"
import { VALIDATION_CONFIG, initialCards } from "./constants.js"
import Popup from "./Popup.js"
import PopupWithImage from "./PopupWithImage.js"

// Переменные

// Попапы

const popups = document.querySelectorAll('.popup')
const popupProfileElement = document.querySelector('.popup-profile')
const popupCardElement = document.querySelector('.popup-card')
const popupImageElement = document.querySelector('.popup-image')

const buttonEdit = document.querySelector('.profile__button-edit')
const buttonAdd = document.querySelector('.profile__button')

const profileForm = document.querySelector('.popup-profile__form')
const popupCard = document.querySelector('.popup-card')
const group = document.querySelector('.group')
const cardForm = popupCard.querySelector('.popup-card__form')
const groupInputTitle = popupCard.querySelector('.popup-card__input_edit_image-name')
const groupInputUrl = popupCard.querySelector('.popup-card__input_edit_image-url')

const nameEdit = document.querySelector('.profile__title')
const infoEdit = document.querySelector('.profile__subtitle')
const inputEditName = document.querySelector('.popup__input_edit_profile-name')
const inputEditInfo = document.querySelector('.popup__input_edit_profile-info')

// // Закрываем и открываем попапы

// function openPopup(evt) {
//   evt.classList.add('popup_opened')
//   document.addEventListener('keydown', closePopupByEsc)
// }

// function closePopup(evt) {
//   evt.classList.remove('popup_opened')
//   document.removeEventListener('keydown', closePopupByEsc)
// }

// function closePopupByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened')
//     closePopup(popup)
//   }
// }

// for (let i = 0; i < popups.length; ++i) {
//   popups[i].addEventListener('click', (evt) => {
//     if (evt.currentTarget === evt.target) {
//       closePopup(evt.target)
//     }
//   })
// }

// // end

// Редактируем профиль 

function submitProfileForm (evt) {
  evt.preventDefault()
  nameEdit.textContent = inputEditName.value
  infoEdit.textContent = inputEditInfo.value

  handlePopup.close(popupProfileElement)
}

// end

// Добавление новой карточки 

function submitCardForm (evt) {
  evt.preventDefault()
  
  const newGroupCard = {name: groupInputTitle.value, link: groupInputUrl.value}
  cardForm.reset()

  validPopupCard.disabledButton()

  renderCard(newGroupCard)
  handlePopup.close(popupCardElement)
}

// end

// Рендер карточки

const renderCard = (item) => {
  const handlePopup = new Popup()
  const card = new Card(item, handlePopup)
  group.prepend(card.generateCard())
} 

// Достаем элементы из массива

initialCards.forEach((item) => {
  renderCard(item)
})

// end

// Подключаем функции

buttonEdit.addEventListener('click', () => {
 handlePopup.open(popupProfileElement)
})

buttonAdd.addEventListener('click', () => {
  handlePopup.open(popupCardElement)
})



profileForm.addEventListener('submit', submitProfileForm)
cardForm.addEventListener('submit', submitCardForm)

// Валидация 

const validPopupProfile = new FormValidator(VALIDATION_CONFIG, popupProfileElement)
validPopupProfile.enableValidation()

const validPopupCard = new FormValidator(VALIDATION_CONFIG, popupCardElement)
validPopupCard.enableValidation()

const handlePopup = new Popup()
handlePopup.setEventListeners()

