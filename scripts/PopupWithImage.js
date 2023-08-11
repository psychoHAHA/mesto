import { popupImageElement, popupImage, popupImageTitle } from './constants.js'
import Popup from './Popup.js'

export default class PopupWithImage extends Popup{
  constructor(name, link) {
    super()
    this._name = name
    this._link = link
    this._alt = name
  }

  openPopup() {
    popupImage.src = this._link
    popupImageTitle.textContent = this._name
    popupImage.alt = this._alt

    popupImageElement.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }
}