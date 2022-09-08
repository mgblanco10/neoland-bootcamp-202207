const { User, Reservation, Workspace } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')
const { verifyObjectIdString } = require('../../../utils')
const { workspace } = require('../../../models/schemas')

/**
 * Creates a note for a user
 * 
 * @param {string} userId The user id.
 * @param {string} workspaces The space the work.
 * 
 * @returns {Promise}
 * 
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */

function createReservation (userId, workspaceId) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(workspaceId, 'workspace id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Reservation.create({ user: user._id, workspace: workspace._id })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(workspace => { })
}

module.exports = createReservation