import PopupWithImage from './PopupWithImage.js'

export default class Card {
  constructor(data, openPopup) {
    this._name = data.name
    this._link = data.link
    this._alt = data.name
    this._openPopup = openPopup
  }

  _getTemplate() {
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

  _handleOpenPopup() {
    const popupImage = new PopupWithImage('.popup-image')
    popupImage.open(this._name, this._link)
  }

  _handleClosePopup() {
    const popupImage = new PopupWithImage('.popup-image')
    popupImage.close()
  }

  _setListeners() {
    const likeButton = this._newCard.querySelector('.group__button')
    likeButton.addEventListener('click', () => likeButton.classList.toggle('group__button_active'))

    const deleteButton = this._newCard.querySelector('.group__button-delete')
    deleteButton.addEventListener('click', () => this._handleClickDelete())

    const cardImage = this._newCard.querySelector('.group__image')
    cardImage.addEventListener('click', () => this._handleOpenPopup())
  }

  generateCard() {
    this._newCard = this._getTemplate()
    this._setData()
    this._setListeners()

    return this._newCard
  }
}