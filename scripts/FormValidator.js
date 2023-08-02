class FormValidator {
  constructor(config, formSelector) {
    this._config = config
    this._formSelector = formSelector
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._config.inputSelector))
    this._buttonElement = this._formSelector.querySelector(this._config.submitButtonSelector)
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._config.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(this._config.errorClass)
  }

  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._config.inputErrorClass)
    errorElement.classList.remove(this._config.errorClass)
    errorElement.textContent = ''
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _enabledButton() {
    this._buttonElement.setAttribute('disabled', true)
    this._buttonElement.classList.add(this._config.inactiveButtonClass)
  }

  _disabledButton() {
    this._buttonElement.removeAttribute('disabled')
    this._buttonElement.classList.remove(this._config.inactiveButtonClass)
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._enabledButton()
    } else {
      this._disabledButton()
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  _setEventListeners() {
    this._formSelector.addEventListener('sumbit', (evt) => {
      evt.preventDefault()
    })
    this._toggleButtonState()
  
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      })
    })
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector))
  
    formList.forEach(() => {
      this._formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault()
      })
  
      this._setEventListeners()
    })
  }
}

export default FormValidator
