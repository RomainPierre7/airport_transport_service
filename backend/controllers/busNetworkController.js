const asyncHandler = require("express-async-handler");
const db = require('../databaseConnection');

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

exports.getSchedulesByStopIDAndDay = asyncHandler(async (req, res, next) => {
    const stopID = req.params.stopID;
    const day = req.params.day;
    db.query('SELECT * FROM SCHEDULES WHERE STOPID = ? AND DATE(SCHEDULETIME) = ?', [stopID, `${day}`], (err, rows) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).send('Error executing query');
        }
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