import { validateCallback, validateText } from "validators"

const API_URL = process.env.REACT_APP_API_URL

function retrieveWorkspacesOfBuilding( buildingId, callback) {
    validateText(buildingId, 'buildingId')
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest

    xhr.onload = function() {
        const status = xhr.status

        const json = xhr.responseText

        const buildings = JSON.parse(json)


        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {



            callback(null, buildings)
        }
    }

    xhr.open('GET', `${API_URL}/buildings/:buildingId/workspaces`)

    xhr.setRequestHeader('Authorization')

    xhr.send()
}

export default retrieveWorkspacesOfBuilding