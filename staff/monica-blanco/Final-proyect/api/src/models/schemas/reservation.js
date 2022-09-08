const { Schema, Types: { ObjectId } } = require('mongoose')
const user = require ('./user')
const workspace = require ('./workspace')

const reservation = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    workspace:{
        type: ObjectId,
        required: true,
        ref: 'Workspace'

    },

    date:{
        type: Date,
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



