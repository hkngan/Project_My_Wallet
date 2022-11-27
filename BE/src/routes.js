const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ReportController = require('./controllers/ReportController')
const TodoListController = require('./controllers/TodoListController')

module.exports = (app) => {
    app.post('/signup',
        AuthenticationControllerPolicy.signup,
        AuthenticationController.signup)

    app.post('/login',
        AuthenticationController.login)

    app.get('/reports',
        ReportController.index)
        
    app.post('/reports',
        ReportController.post)
        
    app.put('/reports',
        ReportController.update)
    
    app.get('/reports/:id',
        ReportController.indexSingle)
    
    app.delete('/reports/:id',
        ReportController.delete)

    app.get('/report/:id',
        ReportController.getData)
    
    app.post('/todolist',
        TodoListController.post)

    app.get('/todolist',
        TodoListController.findAll)

    app.get('/todolist/:id',
        TodoListController.findOne)
    
    app.delete('/todolist/:id',
        TodoListController.delete)
}

