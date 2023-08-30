export default class UserInfo {
  constructor({titleSelector, subtitleSelector}) {
    this._name = document.querySelector(titleSelector)
    this._about = document.querySelector(subtitleSelector)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    }
  }

  setUserInfo({name, about}) {
    this._name.textContent = name
    this._about.textContent = about
  }
}