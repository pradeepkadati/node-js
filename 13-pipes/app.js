var fs = require('fs');


var readable = fs.createReadStream(__dirname+'/greet.txt',
                                {encoding:'utf-8',highWaterMark: 16 * 1024});

var writable = fs.createWriteStream(__dirname+'/greetcopy.txt');

readable.pipe(writable);