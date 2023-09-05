export default class Card {
  constructor({ data, userId, templateSelector, handleCardClick, handlePopupConfirmationClick, handleAddLike, handleRemoveLike }) {
    this._name = data.name
    this._link = data.link
    this._alt = data.name
    this.cardId = data._id
    this._ownerId = data.owner._id
    this._userId = userId
    this._likes = data.likes
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._handlePopupConfirmationClick = handlePopupConfirmationClick
    this._handleAddLike = handleAddLike
    this._handleRemoveLike = handleRemoveLike
  }

  // Получение шаблона карточки

  _getTemplate() {
    const newTemplate = document.querySelector(this._templateSelector).content.querySelector('.group__element').cloneNode(true)
    
    return newTemplate
  }

  // Отправление данных о карточке
  
  _setData() {
    this._cardTitle = this._newCard.querySelector('.group__title')
    this._cardImage = this._newCard.querySelector('.group__image')
    this._deleteButton = this._newCard.querySelector('.group__button-delete')
    this._likeButton = this._newCard.querySelector('.group__button')
    this._likeCounter = this._newCard.querySelector('.group__like-counter')
    
    // Контент счетчика приравниваем к количеству элементов в массиве this._likes 

    this._likeCounter.textContent = this._likes.length

    this._cardTitle.textContent = this._name
    this._cardImage.src = this._link
    this._cardImage.alt = this._alt
  }

  // Удаление карточки

  handleClickDelete() {
    this._newCard.remove()
  }

  _handleClickLike() {
    if (this._likeButton.classList.contains('group__button_active')) {
      this._handleRemoveLike(this.cardId)
    } else {
      this._handleAddLike(this.cardId)
    }
  }

  _toggleLike() {
    this._likeButton.classList.toggle('group__button_active')
  }

  updateLike(data) {
    this._like = data.likes
    this._likeCounter.textContent = (this._like).length
    this._toggleLike()
  }

  // Слушатели

  _setListeners() {
    this._likeButton.addEventListener('click', () => this._handleClickLike(this, this.myLike))

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link))

    this._deleteButton.addEventListener('click', () => {
      this._handlePopupConfirmationClick(this)
    })
  }
  
  // Процесс генерации карточки

  generateCard() {
    this._newCard = this._getTemplate()
    this._setData()

    // Удаление кнопки "удалить" с чужих карточек

    if (this._ownerId !== this._userId) {
      this._deleteButton.remove()
    }

    this._setListeners()

    return this._newCard
  }
}