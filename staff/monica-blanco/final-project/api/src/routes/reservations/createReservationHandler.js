
const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const {createReservation} = require('../../logic/reservations/createReservation')
const {ConflictError} = require ("errors")
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { date, workspaceId } } = req

        return createReservation(userId, workspaceId, new Date (date))
        .then(() => res.status(201).send())
        .catch((error) => {
          if (error instanceof ConflictError)
            res.status(409).json({ error: error.message });
          else res.status(500).json({ error: "system error" });

          logger.error(error);

          return;
        });
    },res,logger);
};

