export default class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _getResponse(response) {
    if (response.ok) {
      return response.json()
    }

    return Promise.reject(new Error("Возникла ошибка"))
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._getResponse)
  }

  getAllCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._getResponse)
  }

  changeUserData(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getResponse)
  }

  createCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    }).then(this._getResponse)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: 'DELETE'
    }).then(this._getResponse)
  }
}