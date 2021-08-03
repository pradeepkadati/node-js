var fs = require('fs');

var greetSync = fs.readFileSync(__dirname+'/greet.txt','utf-8');
console.log(greetSync);

var greet = fs.readFile(__dirname+'/greet.txt','utf-8', 
function(err,data){
    console.log(data);
});

console.log('Done!');