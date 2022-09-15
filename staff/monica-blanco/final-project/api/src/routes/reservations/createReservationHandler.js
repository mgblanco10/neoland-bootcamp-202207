
//REVISAR NO ESTOY SEGURA


const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { createReservation } = require('../../logic/reservations')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        debugger
        const userId = verifyToken(req)

        const { body: { date, workspace } } = req

        return createReservation(userId, workspace, new Date(date))
            .then(() => res.status(201).send())
    }, res, logger)
}