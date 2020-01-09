class GreetingController{
    sayHello(req,res){
        res.send('hello world');
    }
}
module.exports=new GreetingController();