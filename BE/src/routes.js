const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ReportController = require('./controllers/ReportController')
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
}

