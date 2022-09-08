const { Schema } = require('mongoose')

const building = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    }
})

module.exports = building