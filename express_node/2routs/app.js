var express = require('express'),
	home = require('./routes/home.js');
var app = express();

app.listen(process.env.PORT || 3000);














/*
app.get('/', home.index);
app.get('/products', product.index);
app.get('/products/create', product.create);
*/