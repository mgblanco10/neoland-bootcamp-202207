const { connect, disconnect, Types: { ObjectId } } = require("mongoose")
const { User, Reservation, Workspace } = require('../../../models')
const { NotFoundError } = require ('errors')
const retrieveUserReservation  = require('.')
const { reservation } = require("../../../models/schemas")


describe('retrieveUserReservation', () => {
    beforeAll(() => connect('MONGO_URL_TEST'))

    beforeEach(() => Promise.all([User.deleteMany(), Reservation.deleteMany()]))

    it('succeeds on existing user and reservation', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const reservation1 = new Reservartion({
            reservationDate: '2022-09-23',
            createdAt: '2022-11-03',
            modifiedAt: '2023-10-01'
        })
        const reservartion2 = new Reservation({
            reservationDate: '2022-09-29',
            createdAt: '2022-10-03',
            modifiedAt: '2023-10-01'
        })
    
       const user = new User ({name, email, password})

        return Promise.all([
            user.save(),
            reservation1.save(),
            reservation2.save()

        ]).then(() =>
            retrieveUserReservation(user.id)
                .then(reservations => {
                    expect(reservations).toHaveLength(2)

                        const _reservation1 = reservations.find(reservation => reservation.id === reservation1.id)
                        expect(_reservation1).toBeDefined()
                        expect(_reservation1.user).toBeUndefined()
                        expect(_reservation1.createdAt).toEqual(reservation1.createdAt)
                        expect(_reservation1.modifiedAt).toBeUndefined()

                        const _reservation2 = reservations.find(reservation => reservation.id === reservation2.id)
                        expect(_reservation2).toBeDefined()
                        expect(_reservation2.user).toBeUndefined()
                        expect(_reservation2.createdAt).toEqual(reservation2.createdAt)
                        expect(_reservation2.modifiedAt).toBeUndefined()

                    })
            )
    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()

        return retrieveReservation(userId)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with id ${userId} not found`)
            })
    })

    afterAll(() => disconnect())
})