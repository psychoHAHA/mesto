import Popup from './Popup'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitCallback }) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._inputList = Array.from(this._formSubmit.querySelectorAll('.popup__input'))

  }

  _getElement() {
    const formElement = document.querySelector(this._popup).content.querySelector('.popup__form').cloneNode(true)

    return formElement
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

  open() {
    super.open()
  }

  close() {
    super.close()
    this._formSubmit.reset()
  }

  _setEventListeners() {
    super.setEventListeners()
    this._submitForm.addEventListeners('submit', (evt) => {
      evt.preventDefault()
      this._submitCallback(this._getInputValues())
    })
  }

  generate() {
    this._element = this._getElement()
    this._setEventListeners()
    return this._element
  }
}