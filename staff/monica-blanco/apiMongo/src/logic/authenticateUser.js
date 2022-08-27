const { User } = require('../models')
const { DuplicityError, SystemError, AuthError } = require('../errors')
const {validateEmail, validatePassword } = require('../validators')
// darle una vuelt aún
function autenticateUser (email, password){
    validateEmail(email)
    validatePassword(password)

    return User.find({email})
    .then((userId) => User.find({email})
    .catch(error => {
        if (error.code === 11000)
            throw new AuthError ('credentials wrong')

        throw new SystemError(error.message)
    })
}
module.exports = autenticateUser
