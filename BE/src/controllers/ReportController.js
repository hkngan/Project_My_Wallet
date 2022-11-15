const { Report } = require('../model')

module.exports = {
    async index(req, res) {
        try {
            const report = await Report.findAll();
            res.send(report)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch'
            })
        }
    },
    async post(req, res) {
        try {
            const report = await Report.create(req.body)
            res.send(report)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create'
            })
        }
    }
}