const express = require('express');
const router = express.Router();

const checkingController = require('../controller/cheking.controller');
const loginController = require('../controller/login.controller');
const heartbeatController = require('../controller/heartbear.controller');
const gpsController = require('../controller/gps.controller');


router.route('/check').get(checkingController.checkModule);

router.route('/loginPacket').post(loginController.loginResponse);

router.route('/heartbeatPacket').post(loginController.loginCheck,heartbeatController.heartbeatResponse);

router.route('/gpsPacket').post(loginController.loginCheck, gpsController.gpsResponse); 


module.exports = router;