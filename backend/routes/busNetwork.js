const express = require('express');
const router = express.Router();

const busNetworkController = require("../controllers/busNetworkController");

router.get("/routes", busNetworkController.getAllRoutes);
router.get("/routes/:routeID", busNetworkController.getRouteByID);

router.get("/stops", busNetworkController.getStops);
router.get("/stops/routes/:routeID", busNetworkController.getStopsByRouteID);
router.get("/stops/:stopID", busNetworkController.getStopByID);

router.get("/schedules/direction/:direction/stops/:stopID/day/:day/time/:time/to", busNetworkController.getSchedulesByDirectionStopIDDayAndTimeToAirport);
router.get("/schedules/direction/:direction/stops/:stopID/day/:day/time/:time/from", busNetworkController.getSchedulesByDirectionStopIDDayAndTimeFromAirport);
router.get("/schedules/trips/:tripID", busNetworkController.getSchedulesByTripID);
router.get("/schedules/:scheduleID", busNetworkController.getScheduleByID);

router.get("/trips/:tripID", busNetworkController.getTripByID);

router.get("/vehicles/:vehicleID", busNetworkController.getVehicleByID);

module.exports = router;