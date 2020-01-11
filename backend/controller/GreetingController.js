let greetingService = require('../service/GreetingService');

class GreetingController {
    saveMessage(req, res) {
        let name = "unknown";
        if (req.query.firstName != undefined && req.query.lastName != undefined)
            name = req.query.firstName + " " + req.query.lastName;
        else if (req.query.firstName != undefined)
            name = req.query.firstName;
        else if (req.query.lastName != undefined)
            name = req.query.lastName;

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

    getById(req, res) {
        let user = greetingService.getById(req.query.id);
        user.then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({
                message: error.message || "some error occurred while retrieving message"
            })
        })
    }

    getMessages(req, res) {
        let users = greetingService.getMessages();
        users.then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({
                message: error.message || "some error occurred while retrieving messages"
            })
        })
    }

    updateMessage(req, res) {
        console.log(req.body)
        let user = {
            id: req.body._id,
            message: req.body.message
        }
        let users = greetingService.updateMessage(user);
        users.then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({
                message: error.message || "some error occurred while retrieving messages"
            })
        })
    }

}

module.exports = new GreetingController();