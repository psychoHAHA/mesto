export default class Section {
  constructor({ renderer }, groupSelector) {
    this._renderer = renderer
    this._groupElement = document.querySelector(groupSelector)
  }

  addItem(element) {
    this._groupElement.prepend(element)
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item)
    })
  }
}