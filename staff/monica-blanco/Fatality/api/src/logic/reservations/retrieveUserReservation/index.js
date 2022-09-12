const { User, Reservation} = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')
const { reservation } = require('../../../models/schemas/reservation')

function retrieveUserReservation(userId) {
    verifyObjectIdString(userId, 'user id')


    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return retrieveUserReservation.find({ user: userId }, 'workspace reservationDate createdAt modifiedAt').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(reservations => {
            reservations.forEach(reservation => {
                // sanitize
                debugger

                reservation.id = reservation._id.toString()
                delete reservation._id

                delete reservation.__v
            })

            return reservations
        })
}

module.exports = retrieveUserReservation