var express = require('express');
var router = express.Router();
var greetingController=require('../backend/controller/GreetingController');
router.get('/', greetingController.saveMessageController);

module.exports = router;
