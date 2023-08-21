export default class Card {
  constructor(data, handleCardClick, templateSelector) {
    this._name = data.name
    this._link = data.link
    this._alt = data.name
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    const newTemplate = document.querySelector(this._templateSelector).content.querySelector('.group__element').cloneNode(true)
    
    return newTemplate
  }

  
  _setData() {
    this._cardTitle = this._newCard.querySelector('.group__title')
    this._cardImage = this._newCard.querySelector('.group__image')

    this._cardTitle.textContent = this._name
    this._cardImage.src = this._link
    this._cardImage.alt = this._alt
  }

  _handleClickDelete() {
    this._newCard.remove()
  }


  _setListeners() {
    const likeButton = this._newCard.querySelector('.group__button')
    likeButton.addEventListener('click', () => likeButton.classList.toggle('group__button_active'))

    const deleteButton = this._newCard.querySelector('.group__button-delete')
    deleteButton.addEventListener('click', () => this._handleClickDelete())

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link))
  }

  generateCard() {
    this._newCard = this._getTemplate()
    this._setData()
    this._setListeners()

    return this._newCard
  }
}