const formInput = formElement.querySelector('.popup__input')

const showInputError = (inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`)
  inputElement.classList.add('form__input-error')
  errorElement.textContent = errorMessage
  errorElement.classList.add('form__input-error_active')
}