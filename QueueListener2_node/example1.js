var QueueListener = require('./queue');
var azure = require('azure');


var queueService = azure.createQueueService();
var listener = new QueueListener();
listener.on('message', function(message) {
	queueService.deleteMessage("taylor"
                , message.messageid
                , message.popreceipt
                , function(error){
                    if(!error){
                        console.log("deleted");
                    }
                });

});
listener.listen('taylor', queueService);
