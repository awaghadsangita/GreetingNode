const Message=require('../model/GreetingModel')
class GreetingService{
    saveMessage(user){
        const message=new Message({
            name:user.name||"unknown",
            message:user.message
        })
        return new Promise(function(resolve,reject){
            message.save().then(data=>{
                resolve(data)
            }).catch(error=>{
                reject(error)
            });
        });
    }
}
module.exports=new GreetingService();

