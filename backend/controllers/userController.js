const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');

exports.getAllUsers = asyncHandler(async (req, res, next) => {
    db.query('SELECT * FROM CUSTOMERS', (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});