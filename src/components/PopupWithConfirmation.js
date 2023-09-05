import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._confirmButton = this._popup.querySelector('.popup-confirm__button')
    this._buttonSubmit = this._popup.querySelector('.popup__button')
  }

  open(card) {
    super.open()
    this.card = card
  }

  renderLoading(loading, newText) {
    if (!this._buttonSubmit) return

    if (loading) {
      this._defaultText = this._buttonSubmit.textContent
      this._buttonSubmit.textContent = newText
    } else {
      this._buttonSubmit.textContent = this._defaultText
    }
  }

  setEventListeners() {
    super.setEventListeners()
    this._confirmButton.addEventListener('click', () => {
      this._submitCallback(this.card)
    })
  }
}