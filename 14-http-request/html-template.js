var http = require('http');
var fs = require('fs');


http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    var htmlStr = fs.readFileSync(__dirname+'/template.html','utf-8');

    htmlStr = htmlStr.replace('{message}','Hello World Template');

    res.end(htmlStr);

}).listen(8080,'localhost');