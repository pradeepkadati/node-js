var http = require('http');
var fs = require('fs');


http.createServer(function(req,res){

    if (req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        var html = fs.readFileSync(__dirname+'/index.html');
        res.end(html);
    }
    else if (req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/json'});
    
        var obj = {
            firstname:'pradeep',
            lastname:'kadati'
        };
    
        res.end(JSON.stringify(obj));
    }
    
    else{
        res.writeHead(404);
        res.end();
    }

}).listen(8080,'localhost');