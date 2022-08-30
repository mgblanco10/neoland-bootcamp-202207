const {User}= require ('../models')
const {NotFoundError, AuthError, SystemError, FormantError} = require ('../error')
const {validateText} = require ('../validators')
const {Types: {ObjectId}} = require ('mongoose')

function retrieveUser(userId) {
    // TODO implement me

    return Promise.resolve({ name: 'To Do', email: 'to@do.com' })
}

module.exports = retrieveUser