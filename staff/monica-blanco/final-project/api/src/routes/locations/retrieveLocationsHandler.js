const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { location: { retrievelocation }} = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrievelocation(userId)
            .then(location => res.status(200).json(location))
    }, res, logger)
}