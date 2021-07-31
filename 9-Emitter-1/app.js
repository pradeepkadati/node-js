var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log("Hey Hello, Some has emitted for first time");
});

emtr.on('greet',function(){
    console.log("Hey Hola, Some has emitted for first time");
});

console.log(" Emit----");

emtr.emit('greet');