const {connect, disconnect, Types: {ObjectId}} = require('mongoose')
const {User, Reservation, Workspace} = require ('../../../models')
const {NotFoundError} = require ('errors')
const createReservation = require('.')

const { env: { MONGO_URL_TEST } } = process

//date > user.fecha_nacimiento.toISOString().substring(0,10);
//> "2019-04-10"

// var testSchema = db.Schema({
//     "one": { "type": String, "required": true },
//     "two": { "type": String, "required": true }
// }, { "strict": false });

// testSchema.index({ "one": 1, "two": 1}, { "unique": true });
// var Test = db.model("Test", testSchema );

// You can enforce a unique constraint on compound indexes, and you can do this in Mongoose using the index() method of the schema, which defines indexes at the schema level:


describe ('createReservation', ()=>{
    beforeAll(()=> connect (MONGO_URL_TEST))

    beforeEach(()=> Promise.all([User.deleteMany(), Reservation.deleteMany()]))

    it('user manages to make a reservation of a space', ()=>{ //happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const workspace = 'office1'
        

        return User.create({ name, email, password })
        .then(user =>
            
            createReservation(user.id, workspace)
            .then(res => {
                debugger
                expect(res).toBeUndefined()
                
                return Reservation.find()
            })
            .then(reservations => {
                expect(reservations).toHaveLength(1)
                debugger

                        const [reservation] = reservations

                        expect (reservation.workspace).toEqual(workspace)
                        expect(reservation.createdAt).toBeInstanceOf(Date)
                        expect(reservation.modifiedAt).toBeUndefined()
                    })
            )

    }) 
    it('fails on non-existing user', () => {  //   unhappy path
        const userId = new ObjectId().toString()
    return createReservation(userId)
    .then(()=>{throw new Error ('should not reach this point')})
    .catch(error => {
            expect(error).toBeInstanceOf(NotFoundError)
            expect(error.message).toEqual(`user with id ${userId} not found`)
        })
     })
    
    afterAll(() => disconnect())
})


