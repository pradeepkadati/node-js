var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET,function(){
    console.log("Hey Hello, Some has emitted for first time");
});

emtr.on(eventConfig.GREET,function(){
    console.log("Hey Hola, Some has emitted for first time");
});

console.log(" Emit----");

emtr.emit(eventConfig.GREET);