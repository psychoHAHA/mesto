export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    console.log(this._popup)
    this.open = this.open.bind(this)
    this._buttonClose = document.querySelector('.popup__button-close')
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
    console.log('click');
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  _handleOverlayClosePopup = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    };
  }
  
  setEventListeners() {
    this._buttonClose.addEventListener('click', () => this.close())

    this._popup.addEventListener('mousedown', this._handleOverlayClosePopup);
  }
}