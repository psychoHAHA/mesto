import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { VALIDATION_CONFIG, initialCards } from "./constants.js"
import Section from '../components/Section.js'
import Popup from "../components/Popup.js"
import PopupWithForm  from "../components/PopupWithForm.js"

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
const groupImage = document.querySelector('.group__image')
const cardForm = popupCard.querySelector('.popup-card__form')
const groupInputTitle = popupCard.querySelector('.popup-card__input_edit_image-name')
const groupInputUrl = popupCard.querySelector('.popup-card__input_edit_image-url')

const nameEdit = document.querySelector('.profile__title')
const infoEdit = document.querySelector('.profile__subtitle')
const inputEditName = document.querySelector('.popup__input_edit_profile-name')
const inputEditInfo = document.querySelector('.popup__input_edit_profile-info')

// Экземпляры

const handlePopup = new Popup('.popup')
handlePopup.setEventListeners()

// end 

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

// function submitProfileForm (evt) {
//   evt.preventDefault()
//   nameEdit.textContent = inputEditName.value
//   infoEdit.textContent = inputEditInfo.value

//   handlePopup.close(popupProfileElement)
// }

// const popupEditProfile = new PopupWithForm({
//   selector: '.popup__form',
//   handleFormSubmit: (formData) => {
//     const formElement = form.
//   }
// })

const submitProfileForm = new PopupWithForm('.popup-profile', (item) => {
  
})

// end

// Добавление новой карточки 

// function submitCardForm (evt) {
//   evt.preventDefault()
  
//   const newGroupCard = {name: groupInputTitle.value, link: groupInputUrl.value}
//   cardForm.reset()

//   validPopupCard.disabledButton()

//   renderItems(newGroupCard)
//   handlePopup.close(popupCardElement)
// }

// end

// Рендер карточки

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card')
    const cardElement = card.generateCard()
    cardList.addItem(cardElement)
  },
}, '.group')

cardList.renderItems()

const submitCardForm = new PopupWithForm('.popup-card', (item) => {
  cardList.addItem(generateCard(item))

  submitCardForm.close()
  
})

submitCardForm.setEventListeners()


// end

// Подключаем функции

const openPopupProfile = () => {
  const handlePopupProfile = new Popup('.popup-profile')
  handlePopupProfile.open(popupProfileElement)
}

const openPopupCard = () => {
  const handlePopupCard = new Popup('.popup-card')
  handlePopupCard.open(popupCardElement)
}

buttonEdit.addEventListener('click', openPopupProfile)

buttonAdd.addEventListener('click', openPopupCard)

// profileForm.addEventListener('submit', submitProfileForm)
// cardForm.addEventListener('submit', submitCardForm)


cardForm.addEventListener('submit', (name, link) => {
  openPopupCard(name, link)
  console.log('click')
})
// Валидация 

const validPopupProfile = new FormValidator(VALIDATION_CONFIG, popupProfileElement)
validPopupProfile.enableValidation()

const validPopupCard = new FormValidator(VALIDATION_CONFIG, popupCardElement)
validPopupCard.enableValidation()

