var azure = require('azure');
var http = require('http');
var blobService = azure.createBlobService();

var options = {
        contentType: 'image/jpeg'
      };
      
http.createServer(function(req, res) {
    var parts = req.url.split('/', 3);
    var containerName = parts[1];
    var blobName = parts[2];
    console.log(parts);
    if (req.method == 'PUT') {
        if (parts.length < 3) {
            blobService.createContainerIfNotExists(containerName, {
                publicAccessLevel: 'blob'}, errorResponse);
        }
        else {
            console.log("upload...");
            var size = req.headers["content-length"];
            blobService.createBlockBlobFromStream(containerName, blobName, req, size, 
              options, errorResponse);
        }
    }
    else if (req.method == 'DELETE') {
        if (parts.length < 3)
            blobService.deleteContainer(containerName, errorResponse);
        else
            blobService.deleteBlob(containerName, blobName, errorResponse);
    }
    else if (req.method == 'GET') {
        if (containerName == "") {
            //list containers
             blobService.listContainers(function (error, containers) {
                if (error) {
                   console.log(error);
                   res.write(error);
                } else {
                  containers.forEach(function (container) {
                    res.write(container.name + '\r\n');
                  });
                }
                res.end();
             });
        } else {
            // list blobs
            console.log(containerName);
             blobService.listBlobs(containerName, function (error, blobs) {
                if (error) {
                   console.log(error);
                   res.write(error.message);
                } else {
                  blobs.forEach(function (blob) { 
                    res.write(blob.name  + " (" + blob.url +  ')\r\n');
                  });
                }
                res.end();
             });
        }
    }

    function errorResponse(error) {
        res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
        if (error) {
            console.log(error);
            res.end(error.message);
        } else {
            res.end("OK");
        }
    }    

}).listen( process.env.PORT || 3000, process.env.IP);
console.log("rest service listening on " +  3000);