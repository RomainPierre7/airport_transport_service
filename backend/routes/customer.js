const express = require('express');
const router = express.Router();

const jwtAuth = require("../middlewares/jwtAuth");

const customerController = require("../controllers/customerController");

router.get("/isLoggedIn", jwtAuth.verify, customerController.isLoggedIn);
router.get("/informations", jwtAuth.verify, customerController.getCustomerInformations);

router.post("/register", customerController.register);
router.post("/login", customerController.login);

module.exports = router;