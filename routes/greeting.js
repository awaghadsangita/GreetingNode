var express = require('express');
var router = express.Router();
var greetingController=require('../backend/controller/GreetingController');

router.get('/:firstName/:lastName', greetingController.sayHello);
module.exports = router;
