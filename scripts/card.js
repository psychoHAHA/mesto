const popupElement = document.querySelector('.popup-image')
const popupImage = document.querySelector('.popup-image__photo')
const popupImageTitle = document.querySelector('.popup-image__title')

class Card {
  constructor(data) {
    this._name = data.name
    this._link = data.link
    this._alt = data.name
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

  _handleOpenPopupImage() {
    popupImage.src = this._link
    popupImageTitle.textContent = this._alt
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
  }

  generateCard() {
    this._newCard = this._getTemplate()
    this._setData()
    this._setListeners()

    return this._newCard
  }
}

export default Card