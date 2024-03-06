const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');
const cryptoUtils = require('../utils/cryptoUtils');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.isLoggedIn = asyncHandler(async (req, res, next) => {
    res.status(200).send('Logged in');
}
);

exports.getCustomerInformations = asyncHandler(async (req, res, next) => {
    const login = req.user.login;
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
    db.query('SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length > 0) {
            return res.status(400).send('Login already taken');
        }
        const { hashedKey, salt } = cryptoUtils.generateEncryptedPassword(password);
        const passwordToSave = salt + hashedKey;
        db.query('INSERT INTO CUSTOMERS (CUSTOMERLOGIN, CUSTOMERPASSWORD, CUSTOMERNAME, CUSTOMERSURNAME, CUSTOMERBIRTHDATE) VALUES (?, ?, ?, ?, ?)',
            [login, passwordToSave, name, surname, birthdate], (err, rows) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.status(500).send('Error executing query');
                }
                res.json(rows);
            }
        );
    });
});


exports.login = asyncHandler(async (req, res, next) => {
    const { login, password } = req.body;
    db.query('SELECT CUSTOMERPASSWORD FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length === 0) {
            return res.status(401).send('Invalid login');
        }
        const hashedPassword = rows[0].CUSTOMERPASSWORD;
        const salt = hashedPassword.substring(0, 32);
        const hashedKey = hashedPassword.substring(32);
        if (!cryptoUtils.validatePassword(password, salt, hashedKey)) {
            return res.status(401).send('Invalid password');
        }
        const token = jwt.sign({ login }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).send('Login successful');
    }
    );
});