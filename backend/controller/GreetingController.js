let greetingService=require('../service/GreetingService');
class GreetingController{
    sayHello(req,res){
        let user={
            'firstName':req.query.firstName,
            'lastName':req.query.lastName
        }

        let greeting=greetingService.sayHelloWorldService(user);
        res.send(greeting);
    }
}
module.exports=new GreetingController();