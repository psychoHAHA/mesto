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

  getAllCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._getResponse)
  }

  deleteCard() {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: 'DELETE'
    }).then(this._getResponse)
  }
}