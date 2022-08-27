const { User } = require('../models')
const { DuplicityError, SystemError } = require('../errors')
const {validateEmail, validatePassword } = require('../validators')

function autenticateUser (email, password){
    validateEmail(email)
    validatePassword(password)

    return 

}
module.exports = autenticateUser
