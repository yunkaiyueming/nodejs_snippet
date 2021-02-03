var os = require('os');

console.log(os.type());
console.log(os.endianness());

for(var k in os) console.log(k,"===>");