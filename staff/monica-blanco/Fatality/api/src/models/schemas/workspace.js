const { Schema, Types: { ObjectId }  } = require('mongoose')
const building = require ('./building')

const workspace = new Schema({
    building: {
        type: ObjectId,
        required: true,
        ref: 'Building'
    },

    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    }
})

module.exports = workspace

//nombre de las salas quizzas ponerle nombre unique para evitar que dos salas se llamen igual