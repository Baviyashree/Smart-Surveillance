const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root33',
  password: 'admin',
  database: 'intern'
});

module.exports = pool.promise();
