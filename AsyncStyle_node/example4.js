var http = require('http');

http.createServer(function (req, res) {
    console.log('hi');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
}).listen(process.env.PORT || 3000);