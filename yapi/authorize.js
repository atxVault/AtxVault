const fs = require('fs')


const tokenStr = fs.readFileSync('.auth')

module.exports = (req, res, next) => {

	const atxAuth = req.headers['naked']
	if (atxAuth && atxAuth === tokenStr) {
		next()
	} else {
		const messageObj = {
			status: 'Error',
			code: -1,
			message: 'idk man'
		}
		res.status(401).json(messageObj)
	}
}
