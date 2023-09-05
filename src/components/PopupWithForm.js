import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback ) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._form = this._popup.querySelector('.popup__form')
    this._inputList = this._form.querySelectorAll('.popup__input')
    this._buttonSubmit = this._popup.querySelector('.popup__button')
  }

  _getInputValues() {
    this._inputValues = {}
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value
    })

    return this._inputValues
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    })

  }

  open() {
    super.open()
  }

  close() {
    super.close()
    this._form.reset()
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
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitCallback(this._getInputValues())
    })
  }
}
