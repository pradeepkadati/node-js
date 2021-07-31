// function statement or implementation
function greet(){
    console.log("hi welcome to node js");
}

greet();

// first- clas functions
function logGreetings(fn){
    fn();
}

logGreetings(greet);

// function expression

var greetMe = function(){
    console.log("Hi Welcome to Node JS Pradeep");
}

greetMe();
logGreetings(greetMe);

// functions on the fly

logGreetings(function(){
    console.log("Hello Pradeep !");
});
