var express = require('express');
var app = express();

app.configure(function() {
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
});

app.get('/:view', function(req, res) {
	res.render(req.params.view);
});


app.listen(process.env.PORT || 3000);


/*

app.get('/:view', function(req, res) {
	res.render(req.params.view);
});


*/