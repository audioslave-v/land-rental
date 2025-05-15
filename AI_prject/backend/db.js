const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Встановіть ваш пароль
  database: 'land_rental_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Перетворюємо pool на Promise-based
const promisePool = pool.promise();

module.exports = promisePool; 