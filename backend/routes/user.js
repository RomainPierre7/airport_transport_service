const express = require('express');
const router = express.Router();

const user_controller = require("../controllers/userController");

router.get("/all", user_controller.users_list);

module.exports = router;