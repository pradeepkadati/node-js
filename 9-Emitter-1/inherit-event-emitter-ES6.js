'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {

    constructor(){
        super();
        this.greeting = 'Hello World';
        this.on('greet',function(){
            console.log('Someon has been greeted');
        });
    }

    greet(){
        console.log(this.greeting);
        this.emit('greet');
    }
}

var greeter = new Greetr();

greeter.on('greet',function(){
    console.log('Someon has been greeted');
});

greeter.greet();