var http = require('http');


http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World Http Server');

}).listen(8080,'localhost');