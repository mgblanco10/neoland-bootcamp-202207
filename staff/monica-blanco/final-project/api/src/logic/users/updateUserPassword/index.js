const { User } = require('../../../models')
const { validatePassword } = require('validators')
const { verifyObjectIdString } = require('../../../utils')
const { AuthError, NotFoundError, FormatError, SystemError, ServerError} = require('errors')


module.exports = function updateUserPassword(user, password, newPassword, newPasswordRepeat) {

    // verifyObjectIdString(userId, 'user id')
    // validatePassword(password)
    // validatePassword(newPassword)
    // validatePassword(newPasswordRepeat)
   
    return User.findById({ userId: `${user._id}` })
        .catch(error => {
            throw new ServerError(error.message)
        })
        .then(user => {
            if (!user) throw new AuthError(`user with id ${user._id} not found`)
            if (user.password !== oldPassword) throw new AuthError('wrong Password')
            if (newPassword !== newPasswordRepeat) throw new FormantError ('please enter same password')
           
            user.password = newPassword

            return user.save()

        })

        .then(() => { })

}