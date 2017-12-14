const checkDate = require('../utils/checkDate')
const moment = require('moment')
const timeController = {}

timeController.decodeURI = (req,res) => {
	let URI = req.params.value
	
	let result = checkDate.date(URI)

	res.status(200).json(result)
}

module.exports = timeController