const popupElement = document.querySelector('.popup');
const popupButtonOpened = document.querySelector('.profile__button-edit');
const popupButtonClosed = document.querySelector('.popup__button-close');

function handleClick() {
  popupElement.classList.add('profile__button-edit')
}

popupButtonOpened.addEventListener('click', handleClick)