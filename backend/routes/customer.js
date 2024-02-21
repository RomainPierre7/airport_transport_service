const express = require('express');
const router = express.Router();

const jwtAuth = require("../middlewares/jwtAuth");

const customerController = require("../controllers/customerController");

router.get("/information", jwtAuth.verify, customerController.getCustomerInformation); 

router.post("/register", customerController.register);
router.post("/login", customerController.login);

module.exports = router;