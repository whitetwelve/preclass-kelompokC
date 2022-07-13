const { Pool } = require('mysql');

const dbPool = new Pool({
    database: 'backendtest',
    port: '5000',
    user: 'root',
    password: null,
});

module.exports = dbPool;