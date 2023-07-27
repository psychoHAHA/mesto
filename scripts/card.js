const groupTitle = document.querySelector('.group__title')
const buttonLike = document.querySelector('.group__button')
const buttonDelete = document.querySelector('.group__button-delete')
const groupImage = document.querySelector('.group__image')
const groupElement = document.querySelector('.group')

class Card {
  constructor(data, templateElement) {
    this._name = data.name
    this._image = data.link
    this._templateElement = templateElement
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateElement).content.querySelector('.group__element').cloneNode(true)
    
    return cardElement
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