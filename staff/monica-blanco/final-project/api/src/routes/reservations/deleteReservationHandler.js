const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { reservations: { deleteReservation } } = require('../../logic')
const logger = createLogger(module)


module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { params: { reservationId } } = req

        return deleteReservation(userId, reservationId)
            .then(()=> res.status(200).send())

    }, res, logger)
}