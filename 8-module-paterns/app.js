var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2');
greet2.greet();

var greet21 = require('./greet2').greet;
greet21();

var greet3 = require('./greet3');

greet3.greet();
greet3.greetings = "Changed Hello World";

var greet3b = require('./greet3');
greet3b.greet();

var greet4 = require('./greet4');

grtr = new greet4();
grtr.greet();

var greet5 = require('./greet5')

greet5.greet();


