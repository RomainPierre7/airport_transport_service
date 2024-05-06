const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');
const generatePdf = require('../utils/pdfTicket');
const path = require('path');
const { TICKET_PRICE } = require('../utils/constants');

exports.getReservationsByCustomer = asyncHandler(async (req, res, next) => {
    const login = req.user.login;
    db.query('SELECT T.TRIPMAINDIRECTION, S.STOPNAME, R.*, SC.SCHEDULETIME, (SELECT SCHEDULETIME FROM SCHEDULES SC WHERE SC.TRIPID = T.TRIPID AND SC.STOPID = 1) AS AIRPORTTIME FROM RESERVATIONS R JOIN TRIPS T ON T.TRIPID = R.TRIPID JOIN STOPS S ON S.STOPID = R.STOPID JOIN SCHEDULES SC ON SC.STOPID = S.STOPID AND SC.TRIPID = T.TRIPID WHERE CUSTOMERID = (SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?)', [login], (err, rows) => {
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

exports.getTicketByReservationID = asyncHandler(async (req, res, next) => {
    const reservationID = req.params.reservationID;
    const login = req.user.login;

    db.query('SELECT T.TRIPMAINDIRECTION, R.TRIPID, S.STOPNAME, S.STOPID, C.CUSTOMERNAME, C.CUSTOMERSURNAME, R.RESERVATIONPRICE FROM RESERVATIONS R JOIN CUSTOMERS C ON R.CUSTOMERID = C.CUSTOMERID JOIN STOPS S ON S.STOPID = R.STOPID JOIN TRIPS T ON T.TRIPID = R.TRIPID WHERE RESERVATIONID = ?', [reservationID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length === 0) {
            return res.status(404).send('Reservation not found or not yours');
        }
        const tripMainDirection = rows[0].TRIPMAINDIRECTION;
        const tripID = rows[0].TRIPID;
        const stop = rows[0].STOPNAME;
        const stopID = rows[0].STOPID;
        const name = rows[0].CUSTOMERNAME;
        const surname = rows[0].CUSTOMERSURNAME;
        const price = rows[0].RESERVATIONPRICE;

        if (tripMainDirection === 1) {
            db.query('SELECT (SELECT STOPNAME FROM STOPS WHERE STOPID = 1) AS AIRPORTNAME, SCHEDULETIME FROM SCHEDULES WHERE STOPID = ? AND TRIPID = ?', [stopID, tripID], (err, rows) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.status(500).send('Error executing query');
                }
                const airportName = rows[0].AIRPORTNAME;
                const scheduleTime = rows[0].SCHEDULETIME;

                generatePdf.generatePDF(reservationID, tripID, stop, airportName, new Date(scheduleTime).toLocaleString(), name, surname, price)
                    .then(() => {
                        res.setHeader('Content-Type', 'application/pdf');
                        res.sendFile(path.join(__dirname, `../pdf/ticket_${reservationID}.pdf`));
                    })
            });
        } else {
            db.query('SELECT (SELECT STOPNAME FROM STOPS WHERE STOPID = 1) AS AIRPORTNAME, SCHEDULETIME FROM SCHEDULES WHERE STOPID = 1 AND TRIPID = ?', [tripID], (err, rows) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.status(500).send('Error executing query');
                }
                const airportName = rows[0].AIRPORTNAME;
                const scheduleTime = rows[0].SCHEDULETIME;

                generatePdf.generatePDF(reservationID, tripID, airportName, stop, new Date(scheduleTime).toLocaleString(), name, surname, price)
                    .then(() => {
                        res.setHeader('Content-Type', 'application/pdf');
                        res.sendFile(path.join(__dirname, `../pdf/ticket_${reservationID}.pdf`));
                    })
            });
        }
    });
});

exports.createReservation = asyncHandler(async (req, res, next) => {
    const { stopID, tripID } = req.body;
    const login = req.user.login;
    db.query('SELECT CUSTOMERID FROM CUSTOMERS WHERE CUSTOMERLOGIN = ?', [login], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        if (rows.length === 0) {
            return res.status(404).send('Customer not found');
        }
        db.query('INSERT INTO RESERVATIONS (CUSTOMERID, STOPID, TRIPID, RESERVATIONTIME, RESERVATIONPRICE) VALUES (?, ?, ?, ?, ?)', [rows[0].CUSTOMERID, stopID, tripID, new Date(), TICKET_PRICE], (err, rows) => {
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