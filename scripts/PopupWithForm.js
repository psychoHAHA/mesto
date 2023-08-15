import Popup from './Popup'

class PopupWithForm extends Popup {
  constructor(popupSelector, { submitCallback }) {
    super(popupSelector)
    this._submitCallback = submitCallback
    this._submitForm = this._popup.querySelector('.popup__form')
    this._inputList = Array.from(this._formSubmit.querySelectorAll('.popup__input'))

  }

  _getInputValues() {
    
  }
} 