const { SystemError, AuthError } = require("../../../errors")
const { Note, User } = require("../../../models")
const { verifyObjectId } = require("../../../utils")

function retrieveNote (userId) {
    verifyObjectId(userId)
    
    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error)})
        .then(user => {
            if (!user) throw new AuthError ('not found error')
            return Note.find({ user: userId }).lean()
                .catch(error => {throw new SystemError(error)})
                .then(notes => notes)
        })
}
module.exports = retrieveNote