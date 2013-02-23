var azure = require('azure');

var queueService = azure.createQueueService("taylor", "4FeA+XXWFlYHpmzhVB6hY3htvw8uj7H6VT9c56gxxVt/S+KAhJzxH3FhtDrkopPlcYEap+H7C6h5SS5Xxp3ecg==");

queueService.createMessage('taylor', "Hello world!", function(error){
    if(!error){
        // Message inserted
    }
});