var fs = require('fs');
var zlib = require('zlib');


var readable = fs.createReadStream(__dirname+'/greet.txt',
                                {encoding:'utf-8',highWaterMark: 16 * 1024});

var writable = fs.createWriteStream(__dirname+'/greetcopy.txt');

var gzip = zlib.createGzip();


var compressable = fs.createWriteStream(__dirname+'/greet.txt.gz');

readable.pipe(writable);
readable.pipe(gzip).pipe(compressable);