module.exports = {
    port: 3307,
    db: {
        database: process.env.DB_NAME || 'mywallet',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'mysql'
        }

    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET  || 'secret'
    }
}