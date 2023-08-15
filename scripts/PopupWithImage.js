import Popup from './Popup.js'

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector)

    this._popupImage = this._popup.querySelector('.popup-image__photo')
    this._popupImageTitle = this._popup.querySelector('.popup-image__title')
  }

  open(name, link) {
    super.open()

    this._popupImage.src = link
    this._popupImageTitle.textContent = name
    this._popupImage.alt = name
  }
}