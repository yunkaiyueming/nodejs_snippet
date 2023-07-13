var redis = require('redis')

var client
var p1 = new Promise(function(){
	redis.createClient(6379, '127.0.0.1')
	client.on('error', function (err) {
	  console.log('Error ' + err);

	});
})

function set1(){
	client.set('color', 'red', redis.print);
}

function conn_failed_cb(err){
 console.log('Error Cb: ' + err);
}

p1.then(set1, conn_failed_cb)

client.get('color', function(err, value) {
  if (err) throw err;
  console.log('Got: ' + value)
  client.quit();
})


