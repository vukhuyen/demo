var express = require('express');

var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: 'secret abc123'}));

app.get('/', function(req,res) {
	req.session.counter = req.session.counter + 1;
	res.send("this is request number "+ req.session.counter);
});

app.listen(process.env.PORT || 3000);