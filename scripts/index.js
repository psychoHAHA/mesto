// Переменные

const popupElement = document.querySelector('.popup')
const popupCardElement = document.querySelector('.popup_card')
const buttonEdit = document.querySelector('.profile__button-edit')
const buttonClose = document.querySelector('.popup__button-close')
const buttonCardClose = document.querySelector('.popup_card__button-close')
const buttonAdd = document.querySelector('.profile__button')
const popupCard = document.querySelector('.popup_card')
const templateElement = document.querySelector('#template-element').content
const group = document.querySelector('.group')
const groupForm = popupCard.querySelector('.popup_card__form')
const groupInputTitle = popupCard.querySelector('.popup__input_edit_image-name')
const groupInputUrl = popupCard.querySelector('.popup__input_edit_image-url')
const groupTitle = popupCard.querySelector('.group__title')
const groupImage = popupCard.querySelector('.group__image')
const popupImageElement = document.querySelector('.popup_image')
const buttonImageClose = document.querySelector('.popup_image__button-close')
const popupImagePhoto = document.querySelector('.popup_image__photo')
const popupImageTitle = document.querySelector('.popup_image__title')
const buttonCardAdd = document.querySelector('.popup_card__button')

let nameEdit = document.querySelector('.profile__title')
let infoEdit = document.querySelector('.profile__subtitle')
let inputEditName = document.querySelector('.popup__input_edit_profile-name')
let inputEditInfo = document.querySelector('.popup__input_edit_profile-info')
let formElement = document.querySelector('.popup__form')

// Закрываем и открываем попапы

function popupOpen() {
  popupElement.classList.add('popup_opened')
  nameEdit.textContent = inputEditName.value
  infoEdit.textContent = inputEditInfo.value
}

function popupClose(e) {

  if (e.target === e.currentTarget) {
    popupElement.classList.remove('popup_opened')
  }
}

// ПОПАП ДОБАВЛЕНИЯ КАРТИНКИ

function popupCardOpen() {
  popupCardElement.classList.add('popup_card_opened')
}

function popupCardClose(e) {

  if (e.target === e.currentTarget) {
    popupCardElement.classList.remove('popup_card_opened')
  }
}

// end 

// Редактируем профиль 

function handleFormSubmit (evt) {
  evt.preventDefault()
  nameEdit.textContent = inputEditName.value
  infoEdit.textContent = inputEditInfo.value
  popupElement.classList.remove('popup_opened')
}

// end

// Добавляем картинки на страницу через js

function createCard({name, link}) {
  const groupElement = templateElement.cloneNode(true)
  const groupTitle = groupElement.querySelector('.group__title')
  const buttonLike = groupElement.querySelector('.group__button')
  const buttonDelete = groupElement.querySelector('.group__button-delete')
  const groupImage = groupElement.querySelector('.group__image')

  groupTitle.textContent = name
  groupImage.src = link

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('group__button_active')
  })

  buttonDelete.addEventListener('click', () => {
    const groupDelete = buttonDelete.closest('.group__element')
    groupDelete.remove()
  })

  groupImage.addEventListener('click', () => {
    popupImageElement.classList.add('popup_image_opened')
    popupImagePhoto.src = link
    popupImageTitle.textContent = name
  })

  buttonImageClose.addEventListener('click', () => {
    popupImageElement.classList.remove('popup_image_opened')
  })

  return groupElement
}

function renderGroup(item) {
  group.append(createCard(item))
}

initialCards.forEach((item) => {
  renderGroup(item)
})

// end

function handleFormSubmit (evt) {
  evt.preventDefault()
  
  const newGroupCard = {}
  newGroupCard.name = groupInputTitle.value
  newGroupCard.link = groupInputUrl.value

  renderGroup(newGroupCard)

  popupCardClose(evt)
}

// Подключаем функции 

buttonEdit.addEventListener('click', popupOpen)
buttonAdd.addEventListener('click', popupCardOpen)

buttonClose.addEventListener('click', popupClose)
popupElement.addEventListener('click', popupClose)

buttonCardClose.addEventListener('click', popupCardClose)
popupCardElement.addEventListener('click', popupCardClose)

buttonCardAdd.addEventListener('submit', handleFormSubmit)

