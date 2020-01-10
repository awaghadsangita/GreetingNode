let greetingService = require('../service/GreetingService');

class GreetingController {
    saveMessageController(req, res) {
        let name="unknown";
        if(req.query.firstName!=undefined&&req.query.lastName!=undefined)
            name=req.query.firstName + " " + req.query.lastName;
        else if(req.query.firstName!=undefined)
            name=req.query.firstName;
        else if(req.query.lastName!=undefined)
            name=req.query.lastName;

        let user = {
            name: name,
            message: req.query.message
        }

        let message = greetingService.saveMessage(user)
        message.then(message => {
            res.send(message);
        }).catch(error => {
            res.status(500).send({
                message: error.message || "some error occurred while saving message"
            })
        })
    }
}

module.exports = new GreetingController();