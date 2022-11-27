const { Report } = require('../model')

module.exports = {
    async indexSingle(req, res) {
        try {
            const report = await Report.findAll({
                where: {
                    UserId: req.params.id
                }
            })
            res.send(report)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch'
            })
        }
    },
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
            res.status(200).send({
                Sucess: 'Create sucess'
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create'
            })
        }
    },
    async update(req, res) {
        var data = req.body
        try {
            const report = await Report.update({ ExpenseDate: data.ExpenseDate, ExpenseItem: data.ExpenseItem, ExpenseCost: data.ExpenseCost },{where: {
                id: data.id
            }})
            res.send(report)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create'
            })
        }
    },
    async delete(req, res) {
        try {
            if( await Report.destroy({
                where: {
                    id: req.params.id
                }
            }))
                res.send({message: "Sucess"})
            else
                res.send({message: "Fail"})
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete'
            })
        }
    },
    async getData(req, res) {
        try {
            const report = await Report.findAll({
                where: {
                    id: req.params.id
                }
            })
            res.send(report)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch'
            })
        }
    },
    
}