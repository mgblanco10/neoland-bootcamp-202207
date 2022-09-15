const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { retrieveLocationsHandler } = require('./locations')
const {createReservationHandler, deleteReservationHandler, retrieveReservationsOfUserHandler} =require('./reservations')
const{retrieveWorkspacesHandler} = require ('./workspaces')
const { workspace } = require( '../models/schemas' )
const { workspaces } = require( '../logic' )

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
usersRouter.patch('/users/email/',jsonBodyParser, updateUserEmailHandler)
usersRouter.patch('/users/password/',jsonBodyParser, updateUserPasswordHandler)

const locationsRouter = Router ()

locationsRouter.get('/locations/:locationsId/workspaces', retrieveWorkspacesHandler)
locationsRouter.get('/locations', retrievelocationsHandler)

const workspacesRouter = Router()
workspacesRouter.get('/workspaces/:userId/reservations', retrieveReservationsOfUserHandler)
//workspacesRouter.patch('/workspaces/:workspaceId/reservation', jsonBodyParser, createReservationHandler)
//deleteReservations



module.exports = {
    usersRouter,
    locationsRouter,
    workspacesRouter
}

