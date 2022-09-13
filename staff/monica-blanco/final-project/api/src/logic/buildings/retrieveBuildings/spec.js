require('dotenv').config()
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const {Building, User} = require('../../../models')
const { NotFoundError } = require('errors')
const retrieveBuilding = require('.')
const { MONGO_URL_TEST } = process.env

describe('retrieveBuildings', () => {
    beforeAll(() => connect(MONGO_URL_TEST))

    beforeEach(() => Promise.all([User.deleteMany(), Building.deleteMany()]))

    it('retrieve buildings', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const building1 = new Building({
            name:'diagonal',
            address:'Carrer de Santjoanistes',
            image: 'jpg'
        })
        const building2 = new Building({
            name:'pobleNou',
            address:'Carrer de Llacuna',
            image: 'jpg'
        })

        const user = new User({ name, email, password })

        return Promise.all([
            user.save(),
            building1.save(),
            building2.save()

        ])
            .then(([user, building1, building2]) =>
                retrieveBuilding(user.id)
                    .then(buildings => {
                        expect(buildings).toHaveLength(2)

                        const _building1 = buildings.find(building => building.id === building1.id)
                        expect(_building1).toBeDefined()
                        expect(_building1.user).toBeUndefined()
   
                        const _building2 = buildings.find(building => building.id === building2.id)
                        expect(_building2).toBeDefined()
                        expect(_building2.user).toBeUndefined()
        
                    })
            )
    })

    // it('fails on non-existing user', () => {  // unhappy path
    //     const userId = new ObjectId().toString()

    //     return retrieveNotes(userId)
    //         .catch(error => {
    //             expect(error).toBeInstanceOf(NotFoundError)
    //             expect(error.message).toEqual(`user with id ${userId} not found`)
    //         })
    // })

    afterAll(() => disconnect())
})