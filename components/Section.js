export default class Section {
  constructor({ data, renderer }, groupSelector) {
    this._renderer = renderer
    this._renderedItems = data
    this._groupElement = document.querySelector(groupSelector)
  }

  addItem(element) {
    this._groupElement.prepend(element)
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item)
    })
  }
}