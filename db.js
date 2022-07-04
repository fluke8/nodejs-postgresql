const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '123g123g',
    host: "localhost",
    port: 5432,
    database: "nodejs_postgresql"
})

module.exports = pool