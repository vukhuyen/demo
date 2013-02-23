var azure = require('azure');
var http = require('http');
var blobService = azure.createBlobService();
http.createServer(function(req, res) {

    if (req.method == 'GET') {
    }
    else if () {
    }
   
    function errorResponse(error) {
        res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
        if (error) {
            console.log(error);
            res.end(error.message);
        }    
    }   

}).listen( process.env.PORT || 3000, process.env.IP);