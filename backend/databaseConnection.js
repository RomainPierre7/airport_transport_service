require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to the MYSQL database: ' + err.stack);
    return;
  }

  console.log('Connected to the MYSQL database as id ' + connection.threadId);
});

module.exports = connection;