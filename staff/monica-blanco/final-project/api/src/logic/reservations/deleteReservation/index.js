//verificar


const { NotFoundError, AuthError, SystemError } = require("errors")
const { User, Reservation, Workspace } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")

module.exports = function deleteReservation(userId, workspaceId) {
    verifyObjectIdString(userId)
    verifyObjectIdString(workspaceId)
   
    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            return Workspaces.findById(workspaceId)
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })

        .then(workspace => {
            if (!workspace) throw new NotFoundError(`workspace with id ${workspaceId} not found`)

            if (workspace.creator.toString() !== userId) throw new AuthError(`workspace with id ${workspaceId} does not belong to user with id ${userId}`)

            return Workspace.deleteOne({ _id: workspaceId })
        })

        .then(() => { })
}