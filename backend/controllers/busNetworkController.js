const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');
const { TICKET_PRICE } = require('../utils/constants');

exports.getAllRoutes = asyncHandler(async (req, res, next) => {
    db.query('SELECT * FROM ROUTES', (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getRouteByID = asyncHandler(async (req, res, next) => {
    const routeID = req.params.routeID;
    db.query('SELECT * FROM ROUTES WHERE ROUTEID = ?', [routeID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getStops = asyncHandler(async (req, res, next) => {
    db.query('SELECT * FROM STOPS', (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getStopsByRouteID = asyncHandler(async (req, res, next) => {
    const routeID = req.params.routeID;
    db.query('SELECT * FROM STOPS WHERE STOPID IN (SELECT STOPID FROM TOHAVE WHERE ROUTEID = ?)', [routeID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getStopByID = asyncHandler(async (req, res, next) => {
    const stopID = req.params.stopID;
    db.query('SELECT * FROM STOPS WHERE STOPID = ?', [stopID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getSchedulesByDirectionStopIDDayAndTimeToAirport = asyncHandler(async (req, res, next) => {
    const direction = req.params.direction;
    const stopID = req.params.stopID;
    const day = req.params.day;
    const time = req.params.time;
    const dayTime = day + ' ' + time;
    db.query('SELECT *, (SELECT SCHEDULETIME FROM SCHEDULES WHERE TRIPID = T.TRIPID ORDER BY SCHEDULETIME DESC LIMIT 1) AS ARRIVALTIME FROM SCHEDULES S JOIN TRIPS T ON S.TRIPID = T.TRIPID WHERE S.STOPID = ? AND T.TRIPMAINDIRECTION = ? AND DATE(S.SCHEDULETIME) = ? AND S.SCHEDULETIME >= ?', [stopID, direction, day, dayTime], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        rows.forEach(row => {
            row.PRICE = TICKET_PRICE;
        });

        res.json(rows);
    });
});

exports.getSchedulesByDirectionStopIDDayAndTimeFromAirport = asyncHandler(async (req, res, next) => {
    const direction = req.params.direction;
    const stopID = req.params.stopID;
    const day = req.params.day;
    const time = req.params.time;
    const dayTime = day + ' ' + time;
    db.query('SELECT *, (SELECT SCHEDULETIME FROM SCHEDULES WHERE TRIPID = T.TRIPID ORDER BY SCHEDULETIME ASC LIMIT 1) AS DEPARTURETIME FROM SCHEDULES S JOIN TRIPS T ON S.TRIPID = T.TRIPID WHERE S.STOPID = ? AND T.TRIPMAINDIRECTION = ? AND DATE(S.SCHEDULETIME) = ? AND S.SCHEDULETIME >= ?', [stopID, direction, day, dayTime], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        rows.forEach(row => {
            row.PRICE = TICKET_PRICE;
        });

        res.json(rows);
    });
});

exports.getSchedulesByTripID = asyncHandler(async (req, res, next) => {
    const tripID = req.params.tripID;
    db.query('SELECT * FROM SCHEDULES WHERE TRIPID = ?', [tripID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getScheduleByID = asyncHandler(async (req, res, next) => {
    const scheduleID = req.params.scheduleID;
    db.query('SELECT * FROM SCHEDULES WHERE SCHEDULEID = ?', [scheduleID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getTripByID = asyncHandler(async (req, res, next) => {
    const tripID = req.params.tripID;
    db.query('SELECT * FROM TRIPS WHERE TRIPID = ?', [tripID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});

exports.getVehicleByID = asyncHandler(async (req, res, next) => {
    const vehicleID = req.params.vehicleID;
    db.query('SELECT * FROM VEHICLES WHERE VEHICLEID = ?', [vehicleID], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
        res.json(rows);
    });
});