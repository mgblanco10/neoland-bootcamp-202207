const {Building, User} = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrieveBuildings(userId) {
    verifyObjectIdString(userId, 'user id')

    // return User.findById(userId).lean()
    //     .catch(error => {
    //         throw new SystemError(error.message)
    //     })
    //     .then(user => {
    //         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Building.find({}, 'name address image').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
// })
        .then(buildings => {
            buildings.forEach(building => {
              

                building.id = building._id.toString()
                delete building._id

                delete building.__v
            })

            return buildings
        })
}

module.exports = retrieveBuildings