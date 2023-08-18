import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { VALIDATION_CONFIG, initialCards, popupProfileElement, popupCardElement, buttonEdit, buttonAdd, groupInputTitle, groupInputUrl, inputEditName, inputEditInfo, popupImageSelector} from "./constants.js"
import Section from '../components/Section.js'
import PopupWithForm  from "../components/PopupWithForm.js"
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from "../components/UserInfo.js"

// Редактируем профиль 

const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle'
})

const popupProfileForm = new PopupWithForm('.popup-profile', () => {
  userInfo.setUserInfo({title: inputEditName.value, subtitle: inputEditInfo.value})
  popupProfileForm.close()
})

popupProfileForm.setEventListeners()

buttonEdit.addEventListener('click', () => {
  popupProfileForm.open()
  validPopupProfile.disabledButton()
})


// Рендер карточки и добавление новой

function createCard() {
  return new Card({name: groupInputTitle.value, link: groupInputUrl.value}, '.card',
  validPopupCard.disabledButton(),
  ).generateCard()
}

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, handleCardClick)
    const cardElement = card.generateCard()
    cardList.addItem(cardElement)
  },
}, '.group')

cardList.renderItems()

const popupCardForm = new PopupWithForm('.popup-card', (item) => {
  cardList.addItem(createCard(item))

  popupCardForm.close()
})

popupCardForm.setEventListeners()


buttonAdd.addEventListener('click', () => {
  popupCardForm.open()
})

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

