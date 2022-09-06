const { model } = require('mongoose')
const { user, workspace, building, reservation } = require('./schemas')

module.exports = {
    User: model('User', user),
    Workspace: model('Workspace', workspace),
    Building: model ('Building', building),
    Reservation: model ('Reservation', reservation )
}