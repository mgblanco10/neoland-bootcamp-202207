const { Schema, Types: { ObjectId } } = require('mongoose')
const reservation = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    workspace: {
        type: ObjectId,
        required: true,
        ref: 'Workspace'
    },

    date: {
        type: Date,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now

    },

    modifiedAt: {
        type: Date
    }
})
// db.reservation.createIndex({"date":1, "workspace":1},{unique:true})
module.exports = reservation

