const helloController = {}

helloController.get = (req,res) => {
	res.render('index')
}

module.exports = helloController