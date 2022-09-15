require( 'dotenv' ).config()

const { connect, disconnect, Types: { ObjectId } } = require( 'mongoose' )
const { User, Reservation, Workspace, location } = require( '../../../models' )
const { NotFoundError } = require( 'errors' )
const createReservation = require( '.' )

const { env: { MONGO_URL_TEST } } = process

describe( 'createReservation', () => {
    beforeAll( () => connect( MONGO_URL_TEST ) )

    beforeEach( () => Promise.all( [User.deleteMany(), Reservation.deleteMany(), Workspace.deleteMany(), location.deleteMany()] ) )

    it( 'user manages to make a reservation of a space', () => { //happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const user = new User( { name, email, password } )
        const date = new Date

        const location = new location( {
            name: 'diagonal',
            address: 'Carrer de Santjoanistes',
            image: 'jpg'
        } )

        const workspace1 = new Workspace( {
            location: location.id,
            name: 'office1',
            price: 50,
            image: 'jpg',
        } )
        const reservation1 = new Reservation( {
            user: user.id,
            workspace: workspace1.id,
            date: new Date('2022-02-04'),

        } )

        return Promise.all( [
            //user.save(),
            location.save(),
            workspace1.save(),
            reservation1.save()
        ] )
            .then( ( [location, workspace1, reservation1] ) => {

                return User.create( { name, email, password } )
                    .then( user =>

                        createReservation( user.id, workspace1.id, date )
                            .then( res => {

                                expect( res ).toBeUndefined()

                                return Reservation.find()
                            } )
                            .then( reservations => {
                                expect( reservations ).toHaveLength( 1 )

                                const [reservation] = reservations
                                expect( reservation.workspace ).toEqual( workspace1._id )
                                expect( reservation.createdAt ).toBeInstanceOf( Date )
                                expect( reservation.modifiedAt ).toBeUndefined()
                            } )
                    )
            } )
    } )

    it( 'fails on non-existing user', () => {  //   unhappy path
        
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'
        
        const date = new Date
        const user = new User( { name, email, password } )

        const location = new location( {
            name: 'diagonal',
            address: 'Carrer de Santjoanistes',
            image: 'jpg'
        } )


        const workspace = new Workspace( {
            location: location.id,
            name: 'office1',
            date: new Date('2022-08-09'),
            price: 50,
            image: 'jpg',
        } )

        return Promise.all( [
            location.save(),
            workspace.save()
        ] )
            .then( ( [user, workspace] ) => {

                return createReservation( user.id, workspace.id, date)
                    .then( () => { throw new Error( 'should not reach this point' ) } )
                    .catch( error => {
                        expect( error ).toBeInstanceOf( NotFoundError )
                    } )
            } )
    } )

    afterAll( () => disconnect() )
} )

