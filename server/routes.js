const express = require('express')
const routes = express()

const helloController = require('./controllers/helloController')
const timeController = require('./controllers/timeController')

// Basic Routes
routes.get('/', helloController.get)

routes.get('/:value', timeController.decodeURI)

module.exports = routes