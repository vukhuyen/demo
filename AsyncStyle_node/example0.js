var fs = require('fs');
// fs is 'built in', comes with Node by default
var content = fs.readFileSync("file.txt", "UTF-8");
console.log(content);