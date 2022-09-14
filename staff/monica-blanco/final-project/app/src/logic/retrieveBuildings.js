import { validateText,validateCallback } from "validators"
const API_URL = process.env.REACT_APP_API_URL

function retrieveBuildings(token, callback) {
    validateText(token, 'token')
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest

    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            
            const json = xhr.responseText

            const buildings = JSON.parse(json)

            callback(null, buildings)
        }
    }

    xhr.open('GET', `${API_URL}/buildings`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveBuildings