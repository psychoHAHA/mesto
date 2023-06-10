const popupElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const profileContainer = document.querySelector('.profile__container');
const profileButtonSave = document.querySelector('.profile__button');
let groupButton = document.querySelector('.group__button');

// Закрываем и открываем попап
function popupOpen() {
  popupElement.classList.add('popup__opened');
}

function popupClose(e) {

  if (e.target === e.currentTarget) {
    popupElement.classList.remove('popup__opened');
  }
}

buttonEdit.addEventListener('click', popupOpen);

buttonClose.addEventListener('click', popupClose);
popupElement.addEventListener('click', popupClose);

// end

// Ставим/убираем лайк

function groupLike() {
  groupButton.classList.toggle('group__button_active');
}

groupButton.addEventListener('click', groupLike);

function addInfoContainer() {
  let profileName = document.querySelector('.profile__title');
  let profileInfo = document.querySelector('.profile__subtitle');
}
