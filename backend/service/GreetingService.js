class GreetingService{
    sayHelloWorldService(user){
        let greeting='Hello World';
        console.log(user.firstName)
        if(user.firstName!=undefined && user.lastName!=undefined)
            greeting='Hello '+user.firstName+" "+user.lastName;
        else if(user.firstName!=undefined)
            greeting='Hello '+user.firstName;
        else if(user.lastName!=undefined)
            greeting='Hello '+user.lastName;

        return greeting;
    }
}
module.exports=new GreetingService();

