const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');

exports.getReservationsByCustomer = asyncHandler(async (req, res, next) => {
    const login = req.user.login;
    db.query('SELECT * FROM RESERVATIONS WHERE CUSTOMERID = (SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?)', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    }
    )
});

exports.getReservationByID = asyncHandler(async (req, res, next) => {
    const reservationID = req.params.reservationID;
    const login = req.user.login;
    db.query('SELECT * FROM RESERVATIONS WHERE RESERVATIONID = ? AND CUSTOMERID = (SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?)', [reservationID, login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length === 0) {
            return res.status(404).send('Reservation not found or not yours');
        }
        res.json(rows);
    }
    );
});

exports.createReservation = asyncHandler(async (req, res, next) => {
    const { customerID, stopID, tripID, reservationPrice } = req.body;
    const login = req.user.login;
    db.query('SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length === 0) {
            return res.status(404).send('Customer not found');
        }
        if (rows[0].CUSTOMERID != customerID) {
            return res.status(403).send('Forbidden');
        }
        db.query('INSERT INTO RESERVATIONS (CUSTOMERID, STOPID, TRIPID, RESERVATIONTIME, RESERVATIONPRICE) VALUES (?, ?, ?, ?, ?)', [customerID, stopID, tripID, new Date(), reservationPrice], (err, rows) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return res.status(500).send('Error executing query');
            }
            res.json(rows);
        });
    });
});


exports.deleteReservation = asyncHandler(async (req, res, next) => {
    const reservationID = req.body.reservationID;
    const login = req.user.login;
    db.query('DELETE FROM RESERVATIONS WHERE RESERVATIONID = ? AND CUSTOMERID = (SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?)', [reservationID, login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.affectedRows === 0) {
            return res.status(404).send('Reservation not found or not yours');
        }
        res.json(rows);
    }
    );
}
);