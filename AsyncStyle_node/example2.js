// If input is an HTTP verb, return true
// If input isn't a valid HTTP verb, error
var isHttpVerb = function(v, callback) {
	var result;
	var error;
	if (v == "GET" || v=="PUT" || v=="DELETE" || v=="POST") {
		result = true;
	} else {
		error = new Error(v + " is not a valid HTTP verb.");
	}
	callback(error, result);
}


var handler = function(err, response) {
   if (err) {
   	  console.log(err.message);
   } else {
   	  console.log(response);
   }
}

isHttpVerb("DELETE", handler);
isHttpVerb("COPY", handler);
