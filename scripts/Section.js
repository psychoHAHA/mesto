import { initialCards } from "./constants"

export default class Section {
  constructor({ renderer }, groupSelector) {
    this._rendererItems = initialCards
    this._renderer = renderer
    this._groupElement = document.querySelector(groupSelector)
  }

  addItem(element) {
    this._groupElement.prepend(element)
  }

  clear() {
    this._groupElement.innerHTML = ''
  }

  renderItems() {
    this.clear()

    this._rendererItems.forEach((item) => {
      this._renderer(item)
    })
  }
}