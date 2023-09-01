export default class UserInfo {
  constructor({titleSelector, subtitleSelector, avatarSelector}) {
    this._name = document.querySelector(titleSelector)
    this._about = document.querySelector(subtitleSelector)
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
    }
  }

  setUserInfo(data) {
    this._name.textContent = data.name
    this._about.textContent = data.about
    this._avatar.src = data.avatar
    this._userId = data._id
  }

  returnUserId() {
    return this._userId
  }
}