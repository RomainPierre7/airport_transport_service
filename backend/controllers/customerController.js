const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');

exports.register = asyncHandler(async (req, res, next) => {
    console.log(req.body);
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