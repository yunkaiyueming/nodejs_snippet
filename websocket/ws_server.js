
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8089});

wss.on('connection', function(ws) {
    c = new client(ws);
    clients[c.clientId] = c;
    ws.c = c;

    function sendCallback(err) {
        if (err) console.error("send() error: " + err);
    }
    ws.on('message', function(message) {
        ws.c.process(message)
    });
    ws.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
        connection.end();
    });
    ws.on('close', function(reasonCode, description) {
        ws.c.close();
        delete clients[ws.c.clientId];
    });
});
console.log('server started websocket on port '+8089);
