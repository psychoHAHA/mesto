import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._confirmButton = this._popup.querySelector('.popup-confirm__button')
  }

  open(card) {
    super.open()
    this._card = card
  }

  setEventListeners() {
    super.setEventListeners()
    this._confirmButton.addEventListener('click', () => {
      this._submitCallback(this._card)
    })
  }
}