//darle una vuelta text con mocha ojo 

require('dotenv').config()

const { connect, disconnect, Types:{ObjectId} } = require('mongoose')
const { User } = require('../../../models')
const { NotFoundError} = require('errors')
const retrieveUser = require('.')

const { env: { MONGO_URL_TEST } } = process

describe('updateUserPassword', () => {
beforeAll(()=> connect (MONGO_URL_TEST))

beforeEach(()=> User.deleteMany())

    it('succeeds when user exists and password is correct', () => {
        db.users.length = 0

        db.users.push(new User('Pepito Grillo', 'chocolater', '123123123'))

        updateUserPassword('chocolater', '123123123', '234234234', '234234234', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')

            expect(user.password).toBe('234234234')
        })

        db.users.length = 0
    })

    it('fails when user exists and password is incorrect', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserPassword('chocolater', '123123123' + '-wrong', '234234234', '234234234', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong password')
        })

        db.users.length = 0
    })

    it('fails when user exists and password is same as new password', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserPassword('chocolater', '123123123', '123123123', '123123123', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('current password and new password are the same')
        })

        db.users.length = 0
    })

    it('fails when user exists and new password is not the same as new password repeat', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserPassword('chocolater', '123123123', '234234234', '234234234' + '-wrong', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('new password and new password repeat are not the same')
        })

        db.users.length = 0
    })
})



import { validateJwt, validatePassword } from '../validators'


function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
    const logger = new Logger('updatePassword')

    logger.info('call')

    validateJwt(token)
    validatePassword(password)
    validatePassword(newPassword, 'new password')
    validatePassword(newPasswordRepeat, 'new password repeat')

    // if (!password)
    //     throw new Error('wrong password!')

    if (password === newPassword)
        throw new Error('password and new password are the same!')

    if (newPassword !== newPasswordRepeat)
        throw new Error('new password and new password repeat are not the same!')

    logger.info('request')

    const api = new Apium('http://localhost:8080/api')

    api.patch('users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 204)
            callback(null)
    })
}

export default updateUserPassword


darle la vuelta a esto