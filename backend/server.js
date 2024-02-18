const express = require('express');
const app = express();
const port = 5000;

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
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM CUSTOMERS', (err, rows, fields) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    rows.forEach(row => {
        console.log(row);
    });
});

const userRouter = require('./routes/user');

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Backend server started on port ${port}`);
});
