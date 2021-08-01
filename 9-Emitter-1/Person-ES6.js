'use strict';

class Person{

    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log("Hello "+this.firstname+" "+this.lastname);
    }

}

var pradeep = new Person('Pradeep','kadati');
var yogesh = new Person('Yogesh','kadati');

pradeep.greet();
yogesh.greet();

console.log(pradeep.__proto__);
console.log(yogesh.__proto__);
console.log(pradeep.__proto__.greet === yogesh.__proto__.greet);