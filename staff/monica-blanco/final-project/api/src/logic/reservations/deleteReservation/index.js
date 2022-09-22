const { User, Reservation, Workspace } = require('../../../models')
const { NotFoundError, SystemError, AuthError} = require('errors')
const { verifyObjectIdString } = require('../../../utils')


/**
 * Create a reservation for a user
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

function deleteReservation (userId, reservationId) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(reservationId, 'reservation id')
    
    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            return Reservation.findById(reservationId)
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })

        .then(reservation => {
            if (!reservation) throw new NotFoundError(`reservation with id ${reservationId} not found`)

            if (reservation.creator.toString() !== userId) throw new AuthError(`reservation with id ${reservationId} does not belong to user with id ${userId}`)

            return Reservation.deleteOne({ _id: reservationId })
        })

        .then(() => { })
}
    module.exports = deleteReservation







