import '../pages/index.css'
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { VALIDATION_CONFIG, popupProfileElement, popupCardElement, popupAvatar, buttonEdit, buttonAdd, apiConfig, templateSelector} from "../utils/constants.js"
import Section from '../components/Section.js'
import PopupWithForm  from "../components/PopupWithForm.js"
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import UserInfo from "../components/UserInfo.js"
import Api from '../components/Api.js'
let userId

// Api

const api = new Api(apiConfig)

Promise.all([api.getUserData(), api.getAllCards()])
.then(([user, cards]) => {
  userId = user._id
  userInfo.setUserInfo(user)
  cardList.renderItems(cards, userId)
})
.catch((err) => alert(err))

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
  popupEditProfile.renderLoading(true, 'Cохранение...')
  api.changeUserData(data)
  .then((res) => {
    userInfo.setUserInfo(res)
    popupEditProfile.close()
  })
  .catch((err) => alert(err))
  .finally(() => {
    popupEditProfile.renderLoading(false)
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
  const card = new Card({data, userId, templateSelector,
  handleCardClick: (name, link) => {
    popupCardImage.open(name, link)
  },
  handlePopupConfirmationClick: (card) => {
    popupConfirmationDelete.open(card)
  },
  handleAddLike: (cardId) => {
    api.handleLike(cardId).then((data) => {
      card.updateLike(data)
    })
  },
  handleRemoveLike: (cardId) => {
    api.deleteLike(cardId).then((data) => {
      card.updateLike(data)
    })
  }
})
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
  popupAddCard.renderLoading(true, 'Cохранение...')
  api.createCard(data)
  .then((res) => {
    cardList.addItem(createCard(res))
    popupAddCard.close()
  })
  .catch((err) => alert(err))
  .finally(() => {
    popupAddCard.renderLoading(false)
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
  popupConfirmationDelete.renderLoading(true, 'Cохранение...')
  api.deleteCard(card.cardId)
  .then(() => {
    card.handleClickDelete()
    popupConfirmationDelete.close()
  })
  .catch((err) => alert(err))
  .finally(() => {
    popupConfirmationDelete.renderLoading(false)
  })
}

// Изменение аватара

const popupEditAvatar = new PopupWithForm('.popup-avatar', handleSubmitAvatarForm)
popupEditAvatar.setEventListeners()

const handleAvatarClick = () => {
  popupEditAvatar.open()
  popupEditAvatar.setInputValues(userInfo.getUserInfo())

  validPopupAvatar.disabledButton()
}

function handleSubmitAvatarForm(data) {
  popupEditAvatar.renderLoading(true, 'Cохранение...')
  api.changeAvatarData(data)
  .then((res) => {
    userInfo.setUserInfo(res)
    popupEditAvatar.close()
  })
  .catch((err) => alert(err))
  .finally(() => {
    popupEditAvatar.renderLoading(false)
  })
}

const buttonAvatar = document.querySelector('.profile__avatar')
buttonAvatar.addEventListener('click', () => handleAvatarClick())

// end

// Открытие попапа с картинкой 

const popupCardImage = new PopupWithImage('.popup-image')
popupCardImage.setEventListeners()

// end

// Валидация 

const validPopupProfile = new FormValidator(VALIDATION_CONFIG, popupProfileElement)
validPopupProfile.enableValidation()

const validPopupCard = new FormValidator(VALIDATION_CONFIG, popupCardElement)
validPopupCard.enableValidation()

const validPopupAvatar = new FormValidator(VALIDATION_CONFIG, popupAvatar)
validPopupAvatar.enableValidation()
