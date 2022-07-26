function retrieveUser(token, callback) {
    const xhr = new XMLHttpRequest
    
    xhr.onload = function (){
        const status = xhr.status

        if(status >= 500)
            callback (new Error (`server error (${status})`))
        else if (status >= 400) {
            debugger
             callback (new Error (`client error (${status})`))
        }
            
        else if (status === 200)
            callback(null)
    }

    xhr.open ('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    
    xhr.send()

}