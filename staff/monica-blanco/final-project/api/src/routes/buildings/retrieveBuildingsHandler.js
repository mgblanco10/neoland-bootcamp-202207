const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { buildings: { retrieveBuildings }} = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveBuildings(userId)
            .then(buildings => res.status(200).json(buildings))
    }, res, logger)
}