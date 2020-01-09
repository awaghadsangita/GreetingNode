let greetingService=require('../service/GreetingService');
class GreetingController{
    sayHello(req,res){
        let greeting=greetingService.sayHelloWorldService();
        res.send(greeting);
    }
}
module.exports=new GreetingController();