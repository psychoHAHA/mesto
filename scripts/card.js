<<<<<<< HEAD
const popupElement = document.querySelector('.popup-image')
const popupImage = document.querySelector('.popup-image__photo')
const popupImageTitle = document.querySelector('.popup-image__title')
 
=======
const groupTitle = document.querySelector('.group__title')
const buttonLike = document.querySelector('.group__button')
const buttonDelete = document.querySelector('.group__button-delete')
const groupImage = document.querySelector('.group__image')
const groupElement = document.querySelector('.group')

>>>>>>> 82b24f953e256f3687b76f955260586de516ed06
class Card {
  constructor(data, templateElement) {
    this._name = data.name
    this._image = data.link
    this._templateElement = templateElement
  }

  _getTemplate() {
<<<<<<< HEAD
    const newTemplate = document.querySelector("#template-element").content.querySelector('.group__element').cloneNode(true)

    return newTemplate
  }

  
  _setData() {
    const cardTitle = this._newCard.querySelector('.group__title')
    const cardImage = this._newCard.querySelector('.group__image')

    cardTitle.textContent = this._name
    cardImage.src = this._link
    cardImage.alt = this._alt
  }

  _handleClickDelete() {
    this._newCard.remove()
  }

  _handleOpenPopupImage() {
    popupImage.src = this._link
    popupImageTitle.textContent = this._name
    popupElement.classList.add('popup_opened')
  }

  _setListeners() {
    const likeButton = this._newCard.querySelector('.group__button')
    likeButton.addEventListener('click', () => likeButton.classList.toggle('group__button_active'))

    const deleteButton = this._newCard.querySelector('.group__button-delete')
    deleteButton.addEventListener('click', () => this._handleClickDelete())

    const cardImage = this._newCard.querySelector('.group__image')
    cardImage.addEventListener('click', () => {
      this._handleOpenPopupImage()
    })
=======
    const cardElement = document.querySelector(this._templateElement).content.querySelector('.group__element').cloneNode(true)
    
    return cardElement
>>>>>>> 82b24f953e256f3687b76f955260586de516ed06
  }

  generateCard() {
    this._element = this._getTemplate()

    this._element.querySelector('.group__title').textContent = this._name
    this._element.querySelector('.group__image').src = this._image

    return this._element
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, '.card')
  const cardElement = card.generateCard()

  document.querySelector('.group').prepend(cardElement)
})