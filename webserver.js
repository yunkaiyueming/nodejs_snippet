var http = require("http");
var url = require("url");

http.createServer(function (request, response) {
	console.log(request.url);

	var pathname = url.parse(request.url).pathname;
    console.log("pathname:" + pathname);

    var querystr = url.parse(request.url).query;
    console.log("querystr:"+ querystr);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');