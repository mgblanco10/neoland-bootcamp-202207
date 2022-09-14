const { runWithErrorHandling, createLogger,verifyToken} = require( '../../utils' )
const { workspaces: { retrieveWorkspacesOfBuilding } } = require( '../../logic' )
const logger = createLogger( module )

module.exports = ( req, res ) => {
    runWithErrorHandling( () => {
        // const {userId} = verifyToken()
        const { buildingId } = req.params

        return retrieveWorkspacesOfBuilding(buildingId)
            .then( workspaces => res.status( 200 ).json( workspaces ) )
    }, res, logger )
}