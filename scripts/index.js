// Переменные

// Попапы
const popupProfileElement = document.querySelector('.popup-profile')
const popupCardElement = document.querySelector('.popup-card')
const popupImageElement = document.querySelector('.popup-image')

const buttonProfileClose = document.querySelector('.popup-profile__button-close')
const buttonCardClose = document.querySelector('.popup-card__button-close')
const buttonImageClose = document.querySelector('.popup-image__button-close')

const buttonEdit = document.querySelector('.profile__button-edit')
const buttonAdd = document.querySelector('.profile__button')
const buttonCardAdd = document.querySelector('.popup-card__button')
const popupProfileButton = document.querySelector('.popup-profile__button')

const profileForm = document.querySelector('.popup-profile__form')
const popupCard = document.querySelector('.popup-card')
const templateElement = document.querySelector('#template-element').content
const group = document.querySelector('.group')
const cardForm = popupCard.querySelector('.popup-card__form')
const groupInputTitle = popupCard.querySelector('.popup-card__input_edit_image-name')
const groupInputUrl = popupCard.querySelector('.popup-card__input_edit_image-url')
const groupTitle = popupCard.querySelector('.group__title')
const groupImage = popupCard.querySelector('.group__image')
const popupImagePhoto = document.querySelector('.popup-image__photo')
const popupImageTitle = document.querySelector('.popup-image__title')

const nameEdit = document.querySelector('.profile__title')
const infoEdit = document.querySelector('.profile__subtitle')
const inputEditName = document.querySelector('.popup__input_edit_profile-name')
const inputEditInfo = document.querySelector('.popup__input_edit_profile-info')
const formElement = document.querySelector('.popup__form')

// Закрываем и открываем попапы


function openPopup(e) {
  e.classList.add('popup_opened')
}

function closePopup(e) {
  e.classList.remove('popup_opened')
}

// end 

// Редактируем профиль 

function profileFormSubmit (evt) {
  evt.preventDefault()
  nameEdit.textContent = inputEditName.value
  infoEdit.textContent = inputEditInfo.value

  closePopup(popupProfileElement)
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
  groupImage.alt = name

  groupImage.addEventListener('click', () => {
    popupImagePhoto.src = link
    popupImageTitle.textContent = name

    openPopup(popupImageElement)
  })

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('group__button_active')
  })

  buttonDelete.addEventListener('click', () => {
    const cardDelete = buttonDelete.closest('.group__element')
    cardDelete.remove()
  })

  return groupElement
}

function renderCard(item) {
  group.prepend(createCard(item))
}

// Добавление новой карточки 

function cardFormSubmit (e) {
  e.preventDefault()
  
  const newGroupCard = {name: groupInputTitle.value, link: groupInputUrl.value}

  renderCard(newGroupCard)
  closePopup(popupCardElement)
}

// end

// Достаем элементы из массива

initialCards.forEach((item) => {
  renderCard(item)
})

// end

// Подключаем функции 

buttonEdit.addEventListener('click', () => {
  openPopup(popupProfileElement)
})

buttonAdd.addEventListener('click', () => {
  openPopup(popupCardElement)
})

buttonProfileClose.addEventListener('click', () => closePopup(popupProfileElement))
buttonCardClose.addEventListener('click', () => closePopup(popupCardElement))
buttonImageClose.addEventListener('click', () => closePopup(popupImageElement))

profileForm.addEventListener('submit', profileFormSubmit)
cardForm.addEventListener('submit', cardFormSubmit)
