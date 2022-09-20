import { validateCallback, validateString } from "validators"


const API_URL = process.env.REACT_APP_API_URL

function retrieveReservation (token, reservationId, callback) {
    if (typeof token !== 'string') throw new TypeError('Token is not a string')
    if (token.trim().length === 0) throw new Error('Token is empty or blank')
    validateString( reservationId, 'reservationId' )
    validateCallback( callback )


    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        
        if ( status >= 500 )
        callback( new Error( `server error (${status})` ) )
        else if ( status >= 400 )
        callback( new Error( `client error (${status})` ) )
        else if ( status === 200 ) {
            const json = xhr.responseText

            const reservation = JSON.parse( json )

            callback( null, reservation )
        }
    }

    xhr.open( 'GET', `${API_URL}/workspaces/${reservationId}` )

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    //xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
}

export default retrieveReservation