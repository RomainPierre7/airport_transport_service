const express = require('express');
const router = express.Router();

const jwtAuth = require("../middlewares/jwtAuth");

const reservationController = require("../controllers/reservationController");

router.get("/customer/", jwtAuth.verify, reservationController.getReservationsByCustomer);
router.get("/:reservationID", jwtAuth.verify, reservationController.getReservationByID);

router.post("/book", jwtAuth.verify, reservationController.createReservation);

router.delete("/delete", jwtAuth.verify, reservationController.deleteReservation);

module.exports = router;