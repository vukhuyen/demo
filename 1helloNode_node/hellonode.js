var http = require('http');
//Node function called each time a new HTTPrequest arrives
function onRequest(req,res) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello '+ req.connection.remoteAddress +'!');
	/*WritetheIPaddressesofourconnectingclienttoconsole*/
	console.log('Incoming connection from '+req.connection.remoteAddress);
}
//Listen for connectionson the port provided by the host process
var server=http.createServer(onRequest).listen(process.env.PORT || 8080);




