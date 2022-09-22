import {  validateText, validateCallback } from 'validators'
import {  ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function deleteReservation(token, reservationId, callback) {
    validateText(token)
    validateText(reservationId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 204)
            callback(null)
    }


    xhr.open('DELETE', `${API_URL}/workspaces/${reservationId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send()
}


export default deleteReservation