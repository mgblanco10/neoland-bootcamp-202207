const { writeFile, readdir, readFile } = require('fs')
// const DuplicityError = require('../errors/DuplicityError')
// const SystemError = require('../errors/SystemError')
// const UnknownError = require('../errors/UnknownError')


function authentificateUser(email, password, callback) {
    const folder = './data/users/auth'

    readdir(folder, (error, files) => {
        try {
            if (error) {
                // res.status(500).json({error: error.message})
                callback(error, null)

                return
            }
            if (files.length) {
                let index = 0
                let file = files[index];

                (function iterate() {
                    readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                        if (error) {
                            // res.status(500).json({ error: error.message })
                            callback(error, null)

                            return
                        }

                        const user = JSON.parse(json)

                        if (user.email === email) {
                            if (user.password === password) {
                                // res.status(200).json({ userId: user.id })
                                callback(null, user.id)

                                return
                            } else {

                                // res.status(401).json({ error: 'wrong credentials' })
                                callback(error, null)
                            }

                            index++

                            if (index < files.length) {
                                file = files[index]
                                iterate()

                            }
                            // res.status(401).json({ error: 'wrong credentials' })
                            callback(error, null)
                        }
                    })() //iife
                    return

                })
            }
            }catch (error) {
                callback(error, null)
                // res.status(401).json({ error: 'wrongs credentials' })
            }
        })
    }



//// api.post('/api/users/auth', jsonBodyParser, (req, res) => {})

// api.listen(8080, () => console.log("api started"))

module.exports = authentificateUser

