const Message = require('../model/GreetingModel')

class GreetingService {
    saveMessage(user) {
        const message = new Message({
            name: user.name || "unknown",
            message: user.message
        })
        return new Promise(function (resolve, reject) {
            message.save().then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            Message.findOne({_id: id}).then(user => {
                if (!user) {
                    reject({message: "Message not found with id " + id});
                }
                resolve(user);
            }).catch(error => {
                if (error.kind === 'objectId') {
                    reject({message: "message not found with id" + id})
                }
                reject({message: "error occurred while retrieving message " + error})

            })
        })
    }

    getMessages(){
        return new Promise((resolve, reject) => {
            Message.find().then(users => {
                resolve(users);
            }).catch(error => {
                reject({message: "error occurred while retrieving message " + error})
            })
        })
    }

    updateMessage(user){
        return new Promise((resolve,reject)=>{
            Message.findOneAndUpdate({'_id':user.id},{$set:{'message':user.message}}).then(message=>{
                resolve(message);
            }).catch(error=>{
                reject({message: "error occurred while updating message " + error})
            })
        })
    }
}

module.exports = new GreetingService();

