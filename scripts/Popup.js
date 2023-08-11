const popupElement = document.querySelector('.popup')
const popupProfileElement = document.querySelector('.popup-profile')
const popupCardElement = document.querySelector('.popup-card')
const popupImageElement = document.querySelector('.popup-image')

const buttonProfileClose = document.querySelector('.popup-profile__button-close')
const buttonCardClose = document.querySelector('.popup-card__button-close')
const buttonImageClose = document.querySelector('.popup-image__button-close')

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
  }

  openPopup(evt) {
    evt.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  closePopup(evt) {
    evt.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('popup_opened')
      this.closePopup(popup)
    }
  }
  
  setEventListeners() {
    buttonProfileClose.addEventListener('click', () => this.closePopup(popupProfileElement))
    buttonCardClose.addEventListener('click', () => this.closePopup(popupCardElement))
    buttonImageClose.addEventListener('click', () => this.closePopup(popupImageElement))

    for (let i = 0; i < popupElement.length; ++i) {
      popupElement[i].addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
          this.closePopup(evt.target)
        }
      })
    }
  }
}