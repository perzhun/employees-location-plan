module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'employees',
        user: process.env.DB_USER || 'employees',
        user: process.env.DB_PASS || 'employees',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './employees.sqlite'
        }
    }
}