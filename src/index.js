import '../pages/index.css'
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { VALIDATION_CONFIG, initialCards, popupProfileElement, popupCardElement, buttonEdit, buttonAdd} from "../utils/constants.js"
import Section from '../components/Section.js'
import PopupWithForm  from "../components/PopupWithForm.js"
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from "../components/UserInfo.js"

// Редактируем профиль 

const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle'
})

const popupEditProfile = new PopupWithForm('.popup-profile', handleSubmitProfileForm)
popupEditProfile.setEventListeners()

function handleSubmitProfileForm(data) {
  userInfo.setUserInfo(data)
  popupEditProfile.close()
}

function handlePopupProfileClick() {
  popupEditProfile.open()
  popupEditProfile.setInputValues(userInfo.getUserInfo())
}

buttonEdit.addEventListener('click', () => handlePopupProfileClick())


// Рендер карточки и добавление новой

function createCard(data) {
  const card = new Card(data,
  handleCardClick);
  return card.generateCard()

}

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item)
    cardList.addItem(cardElement)
  },
}, '.group')

cardList.renderItems(initialCards)

const popupAddCard = new PopupWithForm('.popup-card', handleSubmitCardForm)

popupAddCard.setEventListeners()

function handleSubmitCardForm(item) {
  cardList.addItem(createCard(item))
  console.log(item);
  popupAddCard.close()
}

function handlePopupCardClick() {
  popupAddCard.open()

  validPopupCard.disabledButton()
}

buttonAdd.addEventListener('click', () => handlePopupCardClick())

//end


// Открытие попапа с каритнкой 

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

