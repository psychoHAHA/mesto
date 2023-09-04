import '../pages/index.css'
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { VALIDATION_CONFIG, popupProfileElement, popupCardElement, popupAvatar, buttonEdit, buttonAdd, templateSelector} from "../utils/constants.js"
import Section from '../components/Section.js'
import PopupWithForm  from "../components/PopupWithForm.js"
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import UserInfo from "../components/UserInfo.js"
import Api from '../components/Api.js'

// Api

const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
    "Content-Type": "application/json",
    authorization: "f7d1dbf3-9b0e-433f-ae13-d2e6f8e642db",
  }
}

const api = new Api(apiConfig)

api.getAllCards()
  .then((data) => {
    cardList.renderItems(data)
  })

api.getUserData()
  .then((data) => {
    userInfo.setUserInfo(data)
  })

// end

// Редактируем профиль 

const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
})

const popupEditProfile = new PopupWithForm('.popup-profile', handleSubmitProfileForm)
popupEditProfile.setEventListeners()

function handleSubmitProfileForm (data) {
  api.changeUserData(data)
  .then((item) => {
    userInfo.setUserInfo(item)
    popupEditProfile.close()
  })
}

const handlePopupProfileClick = () => {
  popupEditProfile.open()
  popupEditProfile.setInputValues(userInfo.getUserInfo())
}

buttonEdit.addEventListener('click', () => handlePopupProfileClick())

// end

// Рендер карточки и добавление новой

const createCard = (data) => {
  const card = new Card(data,
  handleCardClick, handlePopupConfirmationClick, userInfo.returnUserId(), handleClickLike, templateSelector)
  return card.generateCard()

}

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item)
    cardList.addItem(cardElement)
  },
}, '.group')

const popupAddCard = new PopupWithForm('.popup-card', handleSubmitCardForm)

popupAddCard.setEventListeners()

function handleSubmitCardForm (data) {
  // cardList.addItem(createCard(item))
  api.createCard(data)
  .then((item) => {
    cardList.addItem(createCard(item))
    popupAddCard.close()
  })
}

const handlePopupCardClick = () => {
  popupAddCard.open()

  validPopupCard.disabledButton()
}

buttonAdd.addEventListener('click', () => handlePopupCardClick())

//end

// Удаление карточки

const popupConfirmationDelete = new PopupWithConfirmation('.popup-confirm', handleDeleteCard)

popupConfirmationDelete.setEventListeners()

function handleDeleteCard (card) {
  api.deleteCard(card.cardId)
  .then(() => {
    card.handleClickDelete()
    popupConfirmationDelete.close()
  })
}


const handlePopupConfirmationClick = (card) => {
  popupConfirmationDelete.open(card)
}

// end

// Ставим лайк, если его там еще нет, и убираем его, если он там уже стоит

function handleClickLike(card) {
  if (card.myLike) {
    api.deleteLike(card.cardId).then((res) => {
      card.removeLike(res.likes.length)
    })
  } else {
    api.handleLike(card.cardId).then((res) => {
      card.addLike(res.likes.length)
    })
  }
}

// end

// Изменение аватара

const popupEditAvatar = new PopupWithForm('.popup-avatar', handleSubmitAvatarForm)
popupEditAvatar.setEventListeners()

popupEditAvatar.setEventListeners()


const handleAvatarClick = () => {
  popupEditAvatar.open()
  popupEditAvatar.setInputValues(userInfo.getUserInfo())

  validPopupAvatar.disabledButton()
}

function handleSubmitAvatarForm(data) {
  api.changeAvatarData(data).then((item) => {
    userInfo.setUserInfo(item)
    popupEditAvatar.close()
  })
}

const buttonAvatar = document.querySelector('.profile__avatar')
buttonAvatar.addEventListener('click', () => {
  console.log('click');
  handleAvatarClick()
})

// end

// Открытие попапа с картинкой 

const popupCardImage = new PopupWithImage('.popup-image')
popupCardImage.setEventListeners()

function handleCardClick(name, link) {
  popupCardImage.open(name, link)
}

// end

// Валидация 

const validPopupProfile = new FormValidator(VALIDATION_CONFIG, popupProfileElement)
validPopupProfile.enableValidation()

const validPopupCard = new FormValidator(VALIDATION_CONFIG, popupCardElement)
validPopupCard.enableValidation()

const validPopupAvatar = new FormValidator(VALIDATION_CONFIG, popupAvatar)
validPopupAvatar.enableValidation()
