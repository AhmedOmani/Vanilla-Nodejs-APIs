import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345ahmedsaber',
    port: 5432
});

export {
    pool
}