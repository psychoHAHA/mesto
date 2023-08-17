import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback ) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._form = document.querySelector('.popup__form')
    this._inputList = this._form.querySelectorAll('.popup__input')
    console.log(this._submitCallback)
  }

  _getInputValues() {
    this._inputElement = {}
    this._inputList.forEach((input) => {
      this._inputElement[input.name] = input.value
    })

    return this._inputElement
  }

  open() {
    super.open()
  }

  close() {
    super.close()
    this._form.reset()
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitCallback(this._getInputValues())
    })
  }
}
