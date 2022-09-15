const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { location: { retrieveLocation }} = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveLocation(userId)
            .then(location => res.status(200).json(location))
    }, res, logger)
}