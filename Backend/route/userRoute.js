const express = require('express');
const { registeruser } = require('../controller/usercontroller');
const router= express.Router();

router.route("/register").post(registeruser)


module.exports = router;