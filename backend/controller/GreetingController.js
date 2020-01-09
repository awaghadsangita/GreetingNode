let greetingService=require('../service/GreetingService');
class GreetingController{
    sayHello(req,res){
        console.log(req.params);
        let user={
            'firstName':req.params.firstName,
            'lastName':req.params.lastName
        }

        let greeting=greetingService.sayHelloWorldService(user);
        res.send(greeting);
    }
}
module.exports=new GreetingController();