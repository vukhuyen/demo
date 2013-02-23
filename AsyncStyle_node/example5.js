var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    console.log('hi');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
});

server.listen(process.env.PORT || 3000);