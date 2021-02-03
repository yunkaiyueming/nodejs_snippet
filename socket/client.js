var net = require('net');


var count = 10;
var index = 1;
var msg = "hello\n";

var client = net.connect({host:"192.168.8.51",port: 15004}, function() {
   console.log('连接到服务器！');  
});

client.on('data', function(data) {
   console.log("s ====> "+ data.toString());
 
   index++;
   if(index>count){
		this.end();
   }

   console.log("c ====> "+data.toString());
   client.write(data.toString())
});

client.on('end', function() { 
   console.log('断开与服务器的连接');
});


var msg = '1 {"cmd":"user.sync","params":{},"uid":4000036,"ts":1744555346,"logints":1625455700,"rnum":8,"zoneid":4,"access_token":"zQ0NTU1MzQ2TkRaa051c2VyLnN5bmNKbFpHRmxNemN5TkdSbVp","clientts":1744555346}'+"\r\n";
console.log("c ====> "+msg);
client.write(msg);


