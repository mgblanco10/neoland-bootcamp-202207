const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { workspaces: { retrieveWorkspacesOfBuilding } } = require('../../logic')
const { workspace } = require( '../../models/schemas' )
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveWorkspacesOfBuilding(buildingId, workspaceId)
            .then(workspaces => res.status(200).json(workspaces))
    }, res, logger)
}