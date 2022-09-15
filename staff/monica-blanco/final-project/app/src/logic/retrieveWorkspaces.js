import { validateCallback, validateText } from "validators"
import Workspaces from "../Pages/Workspaces"

const API_URL = process.env.REACT_APP_API_URL

function retrieveWorkspaces( token, locationId, callback) {
    validateText(token, 'token')
    validateText(locationId, 'locationId')
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest

    xhr.onload = function() {
        const status = xhr.status

        const json = xhr.responseText

        const workspaces = JSON.parse(json)


        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {



            callback(null, workspaces)
        }
    }

    xhr.open('GET', `${API_URL}/locations/:locationId/workspaces`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveWorkspaces