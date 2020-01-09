class GreetingService{
    sayHelloWorldService(user){
        return 'Hello '+user.firstName+" "+user.lastName;
    }
}
module.exports=new GreetingService();