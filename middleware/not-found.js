const notFound = (req, res) => res.status(404).send('Route does not fucking exist')

module.exports = notFound
