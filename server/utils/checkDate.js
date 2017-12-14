const moment = require('moment')
const checkDate = {}

checkDate.date = (input) => {

	let output
	let jsonObj = {
		'unix':'',
		'natural':''
	}

	if (isNaN(input)) {
		output = moment(input,'MMMM D, YYYY')
	}
	else {
		output = moment.unix(input)
	}

	if (output.isValid()) {
		jsonObj = {
			'unix':output.format('X'),
			'natural':output.format('MMMM D, YYYY')
		}
		return jsonObj
	}
	else {
		jsonObj = {
			'unix':null,
			'natural':null
		}
		return jsonObj
	}

}

module.exports = checkDate

