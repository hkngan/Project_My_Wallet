const { Todo } = require('../model')

module.exports = {
 
    async post(req, res) {
        try {
            const todo = await Todo.create(req.body)
            res.status(200).send({
                Sucess: 'Create sucess'
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create'
            })
        }
    },
    async findOne(req, res) {
        try {
            const todo = await Todo.findAll({
                where: {
                    UserId: req.params.id
                }
            })
            res.send(todo)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch'
            })
        }
    },
    async findAll(req, res) {
        try {
            const todo = await Todo.findAll();
            res.send(todo)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch'
            })
        }
    },
   
    async delete(req, res) {
        try {
            if( await Todo.destroy({
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
   
    
}