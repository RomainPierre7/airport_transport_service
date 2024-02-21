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
    console.log(routeID);
    db.query('SELECT * FROM ROUTES WHERE ROUTEID = ?', [routeID], (err, rows) => {
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