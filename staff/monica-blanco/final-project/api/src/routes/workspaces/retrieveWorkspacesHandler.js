const { runWithErrorHandling, createLogger,verifyToken} = require( '../../utils' )
const { workspaces: { retrieveWorkspaces } } = require( '../../logic' )
const logger = createLogger( module )

module.exports = ( req, res ) => {
    runWithErrorHandling( () => {
        // const {userId} = verifyToken()
        const { locationId } = req.params

        return retrieveWorkspaces(locationId)
            .then( locations => res.status( 200 ).json( locations ) )
    }, res, logger )
}