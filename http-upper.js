var http = require('http');

var map = require('through2-map');

upper = map(function(chunk) {
  return chunk.toString().toUpperCase();  
});

server = http.createServer(function(request, response) {
   if (request.method == 'POST') {
       request.pipe(upper).pipe(response);
   } 
});
server.listen(process.argv[2]);