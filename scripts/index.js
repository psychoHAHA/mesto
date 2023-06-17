const popupElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');

let nameEdit = document.querySelector('.profile__title');
let infoEdit = document.querySelector('.profile__subtitle');
let inputEditName = document.querySelector('.popup__input_name');
let inputEditInfo = document.querySelector('.popup__input_info');
let formElement = document.querySelector('.popup__form')

// Закрываем и открываем попап
function popupOpen() {
  popupElement.classList.add('popup_opened');

}

function popupClose(e) {

  if (e.target === e.currentTarget) {
    popupElement.classList.remove('popup_opened');
  }
}
// end 

function editProfile() {
  nameEdit.textContent = inputEditName.value;
  infoEdit.textContent = inputEditInfo.value;
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  editProfile();
  formElement.addEventListener('submit', popupClose);
}

buttonEdit.addEventListener('click', popupOpen);

buttonClose.addEventListener('click', popupClose);
popupElement.addEventListener('click', popupClose);

formElement.addEventListener('submit', handleFormSubmit);
