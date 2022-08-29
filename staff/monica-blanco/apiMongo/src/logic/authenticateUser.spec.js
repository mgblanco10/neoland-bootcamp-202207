const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { expect } = require('chai')
const { User } = require('../models')
const { AuthError } = require('../errors')
const { autenticateUser } = require('.')

describe('autenticateUser', () => {

    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    it('succeds authenticating on existing user', () => { // happy path
        // const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const user = { id: `user-${Math.round(Math.random() * Date.now())}`, email, password }
        // const json = JSON.stringify(user)

        return autenticateUser(email, password)
            .then((userId) => {
                expect(userId).to.equal(null)
                return User.findOne({ email })
                //busca el email en base de datos y recoge el userId
            })
            .then(user => {
                //comprueba los datos 
                expect(user.id).to.equal(userId)
                expect(user.email).to.equal(email)
                expect(user.password).to.equal(password)
            })

    })
//VERIFICAR DONDE ESTA EL ERROR... PROBLEMAS DE LLAVES
    it('fails with wrong credentials', () => { // unhappy path
        // const id = 'user-123123123123'
        // const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123!'

        const user = { email, password }

        return autenticateUser(email, password)
            .then(() => User.find({ email }))
            .catch(error => {
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.menssage).to.equal('credentials wrong')
            })
        
    })
    after(() => disconnect())
})
