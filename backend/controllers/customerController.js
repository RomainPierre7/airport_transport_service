const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');
const jwt = require('jsonwebtoken');

exports.getCustomerInformation = asyncHandler(async (req, res, next) => {
    const login = req.user.login;
    console.log(login);
    db.query('SELECT CUSTOMERID, CUSTOMERNAME, CUSTOMERSURNAME FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    }
    );
}
);

exports.register = asyncHandler(async (req, res, next) => {
    const { login, password, name, surname, birthdate } = req.body;
    db.query('INSERT INTO CUSTOMERS (CUSTOMERLOGIN, CUSTOMERPASSWORD, CUSTOMERNAME, CUSTOMERSURNAME, CUSTOMERBIRTHDATE) VALUES (?, ?, ?, ?, ?)',
    [login, password, name, surname, birthdate], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    }
    );
});

exports.login = asyncHandler(async (req, res, next) => {
    const { login, password } = req.body;
    db.query('SELECT CUSTOMERPASSWORD FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length === 0 || rows[0].CUSTOMERPASSWORD !== password) {
            return res.status(401).send('Invalid login or password');
        }
        const token = jwt.sign({ login }, 'secret', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).send('Login successful');
    }
    );
});