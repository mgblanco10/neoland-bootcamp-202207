// const API_URL = process.env.REACT_APP_API_URL

// function retrieveWorkspacesOfBuilding(buildingId, token, callback) {
//     verifyObjectIdString(buildingId, 'building id')


//     return Building.findById(buildingId).lean()
//         .catch(error => {
//             throw new SystemError(error.message)
//         })
//         .then(building => {
//             if (!building) throw new NotFoundError(`workspace with id ${buildingId} not found`)

//             return Workspace.find({ building: buildingId }, 'building name price image description').lean()
//                 .catch(error => {
//                     throw new SystemError(error.message)
//                 })
//         })
//         .then(workspaces => {
//             workspaces.forEach(workspace => {
    

//                 workspace.id = workspace._id.toString()
//                 delete workspace._id

//                 delete workspace.__v
//             })

//             return workspaces
//         })
// }

// module.exports = retrieveWorkspacesOfBuilding