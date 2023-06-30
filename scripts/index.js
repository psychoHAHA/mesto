// Переменные

const popupElement = document.querySelector('.popup')
const popupCardElement = document.querySelector('.popup-card')
const buttonEdit = document.querySelector('.profile__button-edit')
const buttonClose = document.querySelector('.popup__button-close')
const buttonCardClose = document.querySelector('.popup-card__button-close')
const buttonAdd = document.querySelector('.profile__button')
const popupCard = document.querySelector('.popup-card')
const templateElement = document.querySelector('#template-element').content
const group = document.querySelector('.group')
const groupForm = popupCard.querySelector('.popup-card__form')
const groupInputTitle = popupCard.querySelector('.popup-card__input_edit_image-name')
const groupInputUrl = popupCard.querySelector('.popup-card__input_edit_image-url')
const groupTitle = popupCard.querySelector('.group__title')
const groupImage = popupCard.querySelector('.group__image')
const popupImageElement = document.querySelector('.popup-image')
const buttonImageClose = document.querySelector('.popup-image__button-close')
const popupImagePhoto = document.querySelector('.popup-image__photo')
const popupImageTitle = document.querySelector('.popup-image__title')
const buttonCardAdd = document.querySelector('.popup-card__button')

let nameEdit = document.querySelector('.profile__title')
let infoEdit = document.querySelector('.profile__subtitle')
let inputEditName = document.querySelector('.popup__input_edit_profile-name')
let inputEditInfo = document.querySelector('.popup__input_edit_profile-info')
let formElement = document.querySelector('.popup__form')

// end

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

// end 

// Попап добавления картинки

function popupCardOpen() {
  popupCardElement.classList.add('popup-card_opened')
}

function popupCardClose(e) {

  if (e.target === e.currentTarget) {
    popupCardElement.classList.remove('popup-card_opened')
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

  groupImage.addEventListener('click', () => {
    popupImageElement.classList.add('popup-image_opened')
    popupImagePhoto.src = link
    popupImageTitle.textContent = name
  })

  buttonImageClose.addEventListener('click', () => {
    popupImageElement.classList.remove('popup-image_opened')
  })

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('group__button_active')
  })

  buttonDelete.addEventListener('click', () => {
    const groupDelete = buttonDelete.closest('.group__element')
    groupDelete.remove()
  })

  return groupElement
}

function renderGroup(item) {
  group.prepend(createCard(item))
}

// Добавление новой карточки 

function handleFormSubmit (e) {
  e.preventDefault()
  
  const newGroupCard = {}
  newGroupCard.name = groupInputTitle.value
  newGroupCard.link = groupInputUrl.value

  renderGroup(newGroupCard)
  popupCardClose(e)
}

// end

// Достаем элементы из массива

initialCards.forEach((item) => {
  renderGroup(item)
})

// end

// Подключаем функции 

buttonEdit.addEventListener('click', popupOpen)
buttonAdd.addEventListener('click', popupCardOpen)

buttonClose.addEventListener('click', popupClose)
popupElement.addEventListener('click', popupClose)

buttonCardClose.addEventListener('click', popupCardClose)
popupCardElement.addEventListener('click', popupCardClose)

groupForm.addEventListener('submit', handleFormSubmit)
