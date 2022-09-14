const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { retrieveBuildingsHandler } = require('./buildings')
//const {createReservationHandler, deleteReservationHandler, retrieveReservationForUserHandler} =require('./reservations')
const{retrieveWorkspacesOfBuildingHandler} = require ('./workspaces')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
usersRouter.patch('/users/email/',jsonBodyParser, updateUserEmailHandler)
usersRouter.patch('/users/password/',jsonBodyParser, updateUserPasswordHandler)

const buildingsRouter = Router ()

buildingsRouter.get('/buildings/:buildingId/workspaces', retrieveWorkspacesOfBuildingHandler)
buildingsRouter.get('/buildings', retrieveBuildingsHandler)

//const workspacesRouter = Router()

//workspacesRouter.patch('/workspaces/:workspaceId/reservations', jsonBodyParser, createReservationHandler)
//delete

//reservationRouter
//retrieveReservationsOfUser


module.exports = {
    usersRouter,
    buildingsRouter,
    //workspacesRouter
}

