// Показываем ошибку

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('popup__input_type_error')
  errorElement.textContent = errorMessage
  errorElement.classList.add('form__input-error_active')
}

// Прячем ошибку

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('popup__input_type_error')
  errorElement.classList.remove('form__input-error_active')
  errorElement.textContent = ''
}

// Проверяем поля на наличие ошибок

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement)
  }
}

// Добавляем класс disabled кнопке 

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled')
    buttonElement.disabled = 'true'
  } else {
    buttonElement.classList.remove('popup__button_disabled')
    buttonElement.disabled = 'false'
  }
}

// Проходим по массиву с полями ввода при помощи some 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

// Проходим по массивам с полями ввода при помощи forEach и навешиваем на них слушатель

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
  const buttonElement = formElement.querySelector('.popup__button')
  toggleButtonState(inputList, buttonElement)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement)
      toggleButtonState(inputList, buttonElement)
    })
  })
}

// Проходим по массиву с формами и отменяем событие submit

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'))

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })

    setEventListeners(formElement)
  })
}

enableValidation()