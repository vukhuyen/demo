var EventEmitter = require('events').EventEmitter;
var util = require('util');

exports = module.exports = QueueListener;

function QueueListener() {
}

util.inherits(QueueListener, EventEmitter);
QueueListener.prototype.listen = function(queueName, queueService) {
    var self = this;
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
	        for(var index in messages){
	        	var message = messages[index];
	        	self.emit('message', message);
	    	}
	    }
		});
	}
    process.nextTick(function() {
    	self.emit('start');
		var t = setInterval( msgs, 1000);
    });
}