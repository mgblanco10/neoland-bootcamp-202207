const { User, Workspace} = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')
const { building, workspace } = require('../../../models/schemas')

function retrieveWorkspaces(buildingId) {
    verifyObjectIdString(buildingId, 'building id')


    return User.findById(buildingId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!building) throw new NotFoundError(`user with id ${buildingId} not found`)

            return Workspace.find({ workspace: workspaceId }, 'building name price image description').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(workspaces => {
            workspaces.forEach(workspace => {
    

                workspace.id = workspace._id.toString()
                delete workspace._id

                delete workspace.__v
            })

            return workspaces
        })
}

module.exports = retrieveWorkpaces