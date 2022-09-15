const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { reservations: { retrieveReservations } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveReservations(userId)
            .then(reservations => res.status(200).json(reservations))
    }, res, logger)
}