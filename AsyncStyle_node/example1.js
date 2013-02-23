var fs = require('fs');

// fs is 'built it', comes with Node by default
fs.readFile("file.txt", "UTF-8", function(err, data) {
	console.log(data);	
});


//try with bad filename 
// add error handling
// pull function out
// use require to source function
// fs.readFile("file.txt", "UTF=8", helper.showFileContents);
