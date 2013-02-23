// If input is an HTTP verb, print its purpose
// If input isn't a valid HTTP verb, error
var isHttpVerb = function(v, callback) {
	var result;
	var error;
	if (v == "GET" || v=="PUT" || v=="DELETE" || v=="POST") {
		callback(null, true);
	} else {
		callback(new Error(v + " is not a valid HTTP verb."));
	}
}

isHttpVerb("DELETE", function(err, response) { //anonymous function
   if (err) {
   	  console.log(err.message);
   } else {
   	  console.log(response);
   }
});
