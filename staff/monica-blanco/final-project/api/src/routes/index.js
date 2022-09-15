const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { retrievelocationsHandler } = require('./locations')
const {createReservationHandler, deleteReservationHandler, retrieveReservationsOfUserHandler} =require('./reservations')
const{retrieveWorkspacesHandler} = require ('./workspaces')


const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
usersRouter.patch('/users/email/',jsonBodyParser, updateUserEmailHandler)
usersRouter.patch('/users/password/',jsonBodyParser, updateUserPasswordHandler)

const locationsRouter = Router ()

locationsRouter.get('/locations/:locationId/workspaces', retrieveWorkspacesHandler)
locationsRouter.get('/locations', retrievelocationsHandler)

const workspacesRouter = Router()

// workspacesRouter.post('/reservations', jsonBodyParser, createReservationHandler)
//workspacesRouter.get('/reservations', retrieveReservationsOfUserHandler)

const reservationsRouter = Router()

reservationsRouter.post('/reservations', jsonBodyParser, createReservationHandler)



module.exports = {
    usersRouter,
    locationsRouter,
    workspacesRouter,
    reservationsRouter
}

