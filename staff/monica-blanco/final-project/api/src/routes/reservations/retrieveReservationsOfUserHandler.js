const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { reservations: { retrieveReservationsOfUser } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveReservationsOfUser(userId)
            .then(reservations => res.status(200).json(reservations))
    }, res, logger)
}