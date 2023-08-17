export default class UserInfo {
  constructor({selectorUserName, selectorUserAbout}) {
    this._profileName = document.querySelector(selectorUserName)
    this._profileAbout = document.querySelector(selectorUserAbout)
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
    }
  }

  setUserInfo({name, about}) {
    this._profileName.textContent = name
    this._profileAbout.textContent = about
  }
}