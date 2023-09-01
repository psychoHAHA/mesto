export default class Card {
  constructor(data, handleCardClick, handlePopupConfirmationClick, userId,templateSelector) {
    this._name = data.name
    this._link = data.link
    this._alt = data.name
    this.cardId = data._id
    this._ownerId = data.owner._id
    this._userId = userId
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._handlePopupConfirmationClick = handlePopupConfirmationClick
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

    this._cardTitle.textContent = this._name
    this._cardImage.src = this._link
    this._cardImage.alt = this._alt
  }

  // Удаление карточки

  handleClickDelete() {
    this._newCard.remove()
  }

  // Слушатели

  _setListeners() {
    const likeButton = this._newCard.querySelector('.group__button')
    likeButton.addEventListener('click', () => likeButton.classList.toggle('group__button_active'))

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link))

    this._deleteButton.addEventListener('click', () => {
      this._handlePopupConfirmationClick(this)
    })
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