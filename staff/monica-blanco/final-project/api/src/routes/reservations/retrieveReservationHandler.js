const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { reservations: { retrieveReservation } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)
        
        const { reservationId } = req.params
        
        return retrieveReservation(userId)
        .then ((reservationId)=> res.status(200).json(reservationId))
    }, res, logger)
}