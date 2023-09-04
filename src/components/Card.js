export default class Card {
  constructor(data, handleCardClick, handlePopupConfirmationClick, userId, handleClickLike, templateSelector) {
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
    this._handleClickLike = handleClickLike
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
    this._likeCounter.textContent = this._likes.length
    
    this.myLike = this._likes.some(like => like._id === this._userId)

    if (this.myLike) {
      this._likeButton.classList.add('group__button_active')
    }

    console.log(this.myLike);

    this._cardTitle.textContent = this._name
    this._cardImage.src = this._link
    this._cardImage.alt = this._alt
  }

  // Удаление карточки

  handleClickDelete() {
    this._newCard.remove()
  }

  addLike(like) {
    this._likeButton.classList.add('group__button_active')
    this._likeCounter.textContent = like
  }

  removeLike(like) {
    this._likeButton.classList.remove('group__button_active')
    this._likeCounter.textContent = like
  }

  // Слушатели

  _setListeners() {
    this._likeButton.addEventListener('click', () => this._handleClickLike(this, this.myLike))

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link))

    this._deleteButton.addEventListener('click', () => {
      this._handlePopupConfirmationClick(this)
    })
  }
 
  counterLike(card) {
    this._dataLikes = card.likes
  }

  // Процесс генерации карточки

  generateCard() {
    this._newCard = this._getTemplate()
    this._setData()
    this._setListeners()

    // Удаление кнопки "удалить" с чужих карточек

    if (this._ownerId !== this._userId) {
      this._deleteButton.remove()
    }

    return this._newCard
  }
}