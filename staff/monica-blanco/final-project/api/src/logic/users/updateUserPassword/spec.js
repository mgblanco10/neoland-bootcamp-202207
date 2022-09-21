// require('dotenv').config()
// const { connect, disconnect, Types:{ObjectId} } = require('mongoose')
// const { authenticateUser, updatePassword } = require('.')
// const { ServerError, AuthError } = require('errors')
// const { User } = require('../../../models')
// const updateUserPassword = require( '.' )
// const MONGO_URL_TEST = process.env.MONGO_URL_TEST

// describe('updateUserPassword', () => {
//     beforeAll(() => connect(MONGO_URL_TEST))

//     beforeEach(() => User.deleteMany())

//     it('should succeed updating password', () => {
//         const name = 'Pepito'
//         const email = 'pepito@grillo.com'
//         const password = '123123123'
//         const newPassword = '124124124'
//         const user = new User( { name, email, password } )

//     } )

//     return Promise.all( [
//         user.save(),

//     ] )
//         .then( () => {
//         return updateUserPassword ( name, email, password )
//             .then(() => authenticateUser(email, password))
//             .then(userId => updatePassword(userId, password, newPassword))
//             .then(() => User.findOne({ email }))
//             .then(user => expect(user.password).toBe(newPassword))
//     })

//     it('should fail with wrong old password', () => {
//         const name = 'Pepito'
//         const email = 'pepito@grillo.com'
//         const password = '123123123'
//         const newPassword = '124124124'
//         const user = new User( { name, email, password } )

//         return Promise.all([
//             user.save()
//         ])
//             // .then(userId => updatePassword(userId, '123123124', newPassword))
//             .then(() => {
//                 throw new Error('should not reach this point')
//             })
//             .catch(error => {
//                 expect(error).toBeInstanceOf(AuthError)
//                 expect(error.message).toEqual('wrong Password')
//             })
//     })

//     afterAll(() => disconnect())
// })