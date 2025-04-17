const Pool = require("pg");

const pool = new Pool.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345ahmedsaber',
    port: 5432
});

module.exports = pool;