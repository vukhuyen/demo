var EventEmitter = require('events').EventEmitter;
var azure = require('azure');


var queueListen = function(queueName, queueService) {
	var e = new EventEmitter();
	
	//connect to queue
	queueService.createQueueIfNotExists(queueName, function(error){
      if(!error){
        // Queue exists
      }
    });

    var msgs = function() {
		queueService.getMessages(queueName, {numofmessages: 15}, function(error, messages) {
	    if(!error){
	        // Process the message in less than 30 seconds, the message
	        // text is available in messages[0].messagetext
	        console.log(messages.length +  'messages received')
 
	        for(var index in messages){
	        	var message = messages[index];
	        	e.emit('message', message);
	    	}
	    }
		});
	}
    process.nextTick(function() {
    	e.emit('start');
		var t = setInterval( msgs, 1000);
    });

	return e;
}

var queueService = azure.createQueueService();
var q = queueListen("taylor", queueService);
q.on('start', function() {
	console.log('listener started');
});

q.on('message', function(message) {
	console.log('message received');
});


