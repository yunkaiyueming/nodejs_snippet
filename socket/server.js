var net = require('net');

var server = net.createServer(function(connection) { 
   console.log('client connected');

   connection.on('end', function() {
      console.log('a client disconnectd');
   });

   connection.on('connect', function(){
   		console.log('a new client has connect');
   });

   connection.on('data', function(msg){
   		console.log('c ====>', msg.toString());

   		connection.write(msg);
   		connection.pipe(connection);
   		console.log('s ====>'+ msg);
   });
});

server.listen(8089, function() { 
  console.log('server:8089 is listening');
});