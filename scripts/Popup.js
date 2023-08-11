const popupElement = document.querySelector('.popup')
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
  
  popupElement.forEach()
}