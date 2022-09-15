const { location, Workspace} = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const validateString = require('validators/src/validateString')
const { verifyObjectIdString } = require('../../../utils')


function retrieveWorkspaces(locationId) {
    verifyObjectIdString(locationId, 'location id')
 
    return location.findById(locationId).lean()
        .catch(error => {
        
            throw new SystemError(error.message)
        })
        .then(location => {
      
            if (!location) throw new NotFoundError(`workspace with id ${locationId} not found`)

            return Workspace.find({ location: locationId }, 'location name price image description').lean()
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

module.exports = retrieveWorkspaces