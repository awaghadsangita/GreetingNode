var express = require('express');
var router = express.Router();
var greetingController=require('../backend/controller/GreetingController');
router.get('/', greetingController.saveMessage);
router.get('/getById',greetingController.getById)
module.exports = router;
