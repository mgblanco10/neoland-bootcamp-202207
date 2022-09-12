const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { reservations: { retrieveUserReservation } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveUserReservation(userId)
            .then(reservartions => res.status(200).json(reservations))
    }, res, logger)
}