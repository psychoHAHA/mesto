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

  open(evt) {
    evt.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close(evt) {
    evt.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('popup_opened')
      this.close(popup)
    }
  }
  
  setEventListeners() {
    buttonProfileClose.addEventListener('click', () => this.close(popupProfileElement))
    buttonCardClose.addEventListener('click', () => this.close(popupCardElement))
    buttonImageClose.addEventListener('click', () => this.close(popupImageElement))

    for (let i = 0; i < popupElement.length; ++i) {
      popupElement[i].addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
          this.close(evt.target)
        }
      })
    }
  }
}