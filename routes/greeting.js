var express = require('express');
var router = express.Router();
var greetingController=require('../backend/controller/GreetingController');
router.get('/', greetingController.saveMessageController);
router.get('/getById',greetingController.getByIdController)
module.exports = router;
