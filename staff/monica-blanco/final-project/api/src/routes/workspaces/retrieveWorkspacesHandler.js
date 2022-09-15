const { runWithErrorHandling, createLogger,verifyToken} = require( '../../utils' )
const { workspaces: { retrieveWorkspaces } } = require( '../../logic' )
const logger = createLogger( module )

module.exports = ( req, res ) => {
    runWithErrorHandling( () => {
        // const {userId} = verifyToken()
        const { locationId } = req.params

        return retrieveWorkspaces(locationId)
            .then( workspaces => res.status( 200 ).json( workspaces ) )
    }, res, logger )
}