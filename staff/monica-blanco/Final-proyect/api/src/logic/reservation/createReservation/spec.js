const {connect, disconnect, Types: {ObjectId}} = require('mongoose')
const {User, Reservation, Workspace} = require ('../../../models')
const {NotFoundError} = require ('../../../errors')
const createReservation = require('.')
const { reservation, workspace } = require('../../../models/schemas')

describe ('createReservation', ()=>{
    beforeAll(()=> connect ('mongodb://localhost:27017/workspaces-test'))

    beforeEach(()=> Promise.all([User.deleteMany(), Reservation.deleteMany()]))

    it('succeeds on correct reservation', ()=>{ //happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const workspace = workspace.id

        return User.create({ name, email, password })
            .then(user =>
                createReservation(user.id, workspace.id)
                    .then(res => {
                        expect(res).toBeUndefined()

                        return Reservation.find()
                    })
                    .then(reservation => {
                        expect(reservation).toHaveLength(1)

                        const [reservation] = reservation

                        expect(reservation.user.toString()).toEqual(user.id)
                        expect(reservation.createdAt).toBeInstanceOf(Date)
                        expect(reservation.modifiedAt).toBeUndefined()
                    })
            )

    })

    //date > user.fecha_nacimiento.toISOString().substring(0,10);
//> "2019-04-10"

    // it('fails on non-existing user', () => {  //   unhappy path
    //     const userId = new ObjectId().toString()
//truco para forzar un error porque si no falla saltaria el then y asi podriamos saber si realmente falla el test
        // return createNote(userId)
        // .then(()=>{throw new Error ('should not reach this point')})
        // .catch(error => {
        //     expect(error).toBeInstanceOf(NotFoundError)
        //     expect(error.message).toEqual(`user with id ${userId} not found`)
       // })

    //    return expect (createNote(userId)).rejects.toThrowError(NotFoundError, `user with id ${userId} not found`)
       //en mocha expect (createNote(userId)).to.eventually.be.rejectedWith(NotFoundError...)
//  })

    afterAll(() => disconnect())
})

