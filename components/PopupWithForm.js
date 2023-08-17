import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback ) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._form = this._popup.querySelector('.popup__form')
    this._inputList = document.querySelectorAll('.popup__input')
    console.log(this._submitCallback);

  }

  _getInputValues() {
    this._inputElement = {}
    this._inputList.forEach((input) => {
      this._inputElement[input.name] = input.value
    })
    console.log(this._inputElement)

    return this._inputElement
  }

  open() {
    super.open()
    console.log(this._inputElement)
  }

  close() {
    super.close()
    this._form.reset()
  }

  _setEventListeners() {
    super.setEventListeners()
    this._form.addEventListeners('submit', (evt) => {
      evt.preventDefault()
      this._submitCallback(this._getInputValues())
    })
  }

  generate() {
    this._element = this._getElement();
    this._setEventListeners();

  	return this._element;
  }
}
