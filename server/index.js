require('dotenv').config()
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT

// App
const express = require('express')
const app = express()

// Routes

const routes = require('./routes')

app.use(cors())
app.use('/date', routes)
app.use('/', express.static('public'))
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})