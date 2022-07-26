function authenticateUser(email, password, callback) {
 
    const xhr = new XMLHttpRequest

    xhr.onload = function (){
    
        const status = xhr.status

        if(status >= 500)
            callback (new Error (`server error (${status})`))
        else if (status >= 400)
             callback (new Error (`client error (${status})`))
        else if (status === 200){
            //recibo JSON en xhr.responseText
            const tokenJSON = xhr.responseText
            // parseo JSON a JS
            const tokenObject = JSON.parse (tokenJSON)
            // accedo al valor de la propiedad token
            const token = tokenObject.token
            // llamo a la callback con 'null'para el manejo de errores
            callback(null, token)
         }
    }
    
    xhr.open ('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
    
    xhr.setRequestHeader('Content-type', 'application/json')
    
    xhr.send(`{"username":"${email}", "password":"${password}"}`)

}
