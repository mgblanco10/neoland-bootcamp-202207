const { User, Reservation, Workspace } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')
const { verifyObjectIdString } = require('../../../utils')
const { workspace } = require('../../../models/schemas')
const validateDate = require('validators/src/validateDate')
const endOfDay = require ('date-fns/endOfDay')
const startOfDay = require ('date-fns/startOfDay')

/**
 * Creates a reservation for a user
 * 
 * @param {string} userId The user id.
 * @param {string} workspaces The space the work.
 * @Date
 * 
 * @returns {Promise}
 * 
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */

function createReservation (userId, workspaceId, date) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(workspaceId, 'workspace id')
    validateDate(date)

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) {
                throw new NotFoundError(`user with id ${userId} not found`)
            }

            return Workspace.findById(workspaceId).lean()
                .catch(error =>{
                    throw new SystemError(error.message)
                })
                .then (workspace => {
                    if(!workspace) throw new NotFoundError(`workspace with id ${workspaceId} not found`+' '+workspace)

                    return Reservation.find({workspace: workspaceId, date:{
                        $gte: startOfDay(new Date(date)),
                        $lte: endOfDay(new Date(date))
                    }})
                    .then(workspace => { })
                })  
        })
    }
    module.exports = createReservation
            
            
            //     .catch ()

            
            //     return Reservation.create({ user: user._id, workspace: workspace._id, date })
            //     .catch(error => {
            //     throw new SystemError(error.message)
            // })
            
                    // TODO
        
                    // search workspace and check it exists
        
                    // const year = date.getFullYear()
                    // const month = date.getMonth()
                    // const day = date.getDate()
        
                    // const start = new Date(year, month, day)
                    // const end = new Date(year, month, day + 1)
        
        
                    // operadores que tiene moongose
                    // const count = Reservation.find({ workspace: workspaceId, date: { $gte: start, $lt: end } }).count()
        
                    // if (count > workspace.limit) throw 
        
                    // return Reservation.create({ user: user._id, workspace: workspace._id, date })
                    //     .catch(error => {
                    //         throw new SystemError(error.message)
                    //     