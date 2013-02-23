var express = require('express');
app = express();



app.listen(process.env.PORT || 3000);





/*
app.configure( function() {
	app.set('title', 'Simple demo app (default)');
});

app.configure( 'prod', function() {
	app.set('title', 'Simple demo app (production)');
});

app.configure( 'dev', function() {
	app.set('title', 'Simple demo app (Development)');
});

*/