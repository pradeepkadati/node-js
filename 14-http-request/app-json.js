var http = require('http');


http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'application/json'});
    
    var obj = {
        firstname:'pradeep',
        lastname:'kadati'
    };

    res.end(JSON.stringify(obj));

}).listen(8080,'localhost');