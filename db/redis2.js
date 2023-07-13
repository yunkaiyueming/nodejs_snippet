var redis = require('redis')

var client = redis.createClient(6379, '127.0.0.1')
client.on('error', function (err) {
  console.log('Error ' + err);
});

// 1 键值对
client.set('color', 'red', redis.print);
client.get('color', function(err, value) {
  if (err) throw err;
  console.log('Got: ' + value)
  client.quit();
})

for(i=1;i<=100;i++){
	var filed="name".i;
	var filed2="age".i;
	data = {
		filed:"zs1",
		filed2:i
	}
	client.hmset('kitty', data, redis.print);
}

client.hkeys('kitty', function(err, keys) {
  if (err) throw err;
  keys.forEach(function(key, i) {
    console.log(key, i);
  });
  client.quit();
});

console.log("end");