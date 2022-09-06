const { connect, disconnect } = require('mongoose')

const { User, Building, Workspace, Reservation } = require('./models')


connect('mongodb://localhost:27017/workspaces')
  
    .then(() => Promise.all([User.deleteMany(), Building.deleteMany(), Reservation.deleteMany(), Workspace.deleteMany()]))
    .then(() => {
        const pepito = new User({
            name: 'Pepito Grillo',
            email: 'pepito@grillo.com',
            password: '123123123'
        })

        const wendy = new User({
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            // email: 'pepito@grillo.com',
            password: '12312123'
        })

        const peter = new User({
            name: 'Peter Pan',
            email: 'peter@pan.com',
            password: '123123123'
        })

        const james = new User({
            name: 'James Hook',
            email: 'james@hook.com',
            password: '123123123'
        })
        // te devuelve el mismo modelo pero ya salvado .save y te permite seguir operando
        return Promise.all([
            pepito.save(),
            wendy.save(),
            peter.save(),
            james.save(),
            monica.save()
        ])
    })
    .then(()=>{
        const pobleNou = new Building({
            name:'pobleNou',
            address:'vvvvvvvvvv',
            image: ' 00000'
        })
        const diagonal = new Building({
            name:'pobleNou',
            address:'vvvvvvvvvv',
            image: ' 00000'
        })
        return Promise.all([
            pobleNou.save(),
            diagonal.save()])
    })
    .then(([pobleNou, diagonal])=>{
        const space1 = new Workspace({
            building: pobleNou.id,
            name: 'Sala 1',
            price: 100,
            image:'999',
            description:'muyyyy bueno'
        })
        const space2 = new Workspace({
            building: diagonal.id,
            name: 'Sala 1',
            price: 100,
            image:'999',
            description:'muyyyy malo'
        })
        return Promise.all([
            space1.save(),
            space2.save()])
    })

    .then(([pepito, wendy, peter, james]) => {
        const reservation1 = new Reservation ({
            workspace: space1.id,
            user: pepito.id,
            date: Date,
            createdAt: Date.now,
            modifiedAt: Date
            })
        const reservation2 = new Reservation({
            workspace: space1.id,
            user: wendy.id,
            date: Date,
            createdAt: Date.now,
            modifiedAt: Date
        })
        const reservation3 = new Reservation({
            workspace: space2.id,
            user: peter.id,
            date: Date,
            createdAt: Date.now,
            modifiedAt: Date
        })
        return Promise.all([
            reservation1.save(),
            reservation2.save(),
            reservation3.save()
        ])
    })
   
    .catch(error => {
    
    })
    .then(() => disconnect())

//npm run populate-inspect-cli
// exec error
//exec error.code