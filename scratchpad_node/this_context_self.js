function foo() {
    this.greeting = "hey";
    this.Hello = function() {
       return this.greeting;
    }
}

foo.prototype.Howdy = function () {
  	setTimeout( function() {
   		console.log(this.greeting);
   	}, 10);
    return this.greeting;
};

new foo().Howdy();
