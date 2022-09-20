const {validateDate, validateString} = require('validators')

const API_URL = process.env.REACT_APP_API_URL

function createReservation(token, workspaceId, date, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    validateString(workspaceId, 'workspace id')
    validateDate(date)
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest


    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201)
            callback(null)
    }


    xhr.open('POST', `${API_URL}/workspaces/${workspaceId}/reservations`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    const data = { date }
    const json = JSON.stringify(data)
    // const reservation = { workspaceId, data};
    // const json = JSON.stringify(reservation)

    xhr.send(json)
}