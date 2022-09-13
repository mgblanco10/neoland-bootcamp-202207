
//REVISAR NO ESTOY SEGURA


const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { reservations: { createReservation } } = require('../../logic/reservations/createReservation')
const { workspace } = require( '../../models/schemas' )
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { date } } = req

        return createReservation(userId, workspaceId, date)
            .then(() => res.status(201).send())
    }, res, logger)
}