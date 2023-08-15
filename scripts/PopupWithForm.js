import Popup from './Popup'

class PopupWithForm extends Popup {
  constructor(popupSelector, { submitCallback }) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._submitForm = this._popup.querySelector('.popup__form')
    this._inputList = Array.from(this._formSubmit.querySelectorAll('.popup__input'))

  }

  _getInputValues() {
    this._inputElement = {}
    this._inputList.forEach((input) => {
      this._inputElement[input.name] = input.value
    })

    return this._inputElement
  }

  setInput = (data) => {
    this._inputList.forEach((input, i) => {
      input.value = Object.values(data)[i]
    })
  }

  close() {
    super.close()
    this._formSubmit.reset()
  }

  setEventListeners() {
    super.setEventListeners()
    this._submitForm.addEventListeners('submit', (evt) => {
      evt.preventDefault()
      this._submitCallback(this._getInputValues())
    })
  }
}