require('dotenv').config()
const { connect, disconnect} = require('mongoose')
const { User} = require('../../../models')
const { NotFoundError} = require('errors')


const { env: { MONGO_URL_TEST } } = process

describe('updateUserPassword', () => {
    beforeAll(() => connect(MONGO_URL_TEST))

    beforeEach(() => User.deleteMany())

    it('succeeds when user exists and password is correct', () => {
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(userId => updatePassword(userId, password, newPassword))
            .then(() => User.findOne({ email }))
            .then(user => expect(user.password).toBe(newPassword))
    })
    it('should fail with wrong old password', () => {
        const name = 'Pepita'
        const email = 'pepita@grilla.com'
        const password = '123123123'
        const newPassword = '124124124'
        return User.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(userId => updatePassword(userId, '123123124', newPassword))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual('wrong password')
            })
    })

    afterAll(() => disconnect())
})