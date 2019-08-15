var dirname = __dirname;
var filename = __filename;

console.log("dirname:"+dirname);
console.log("filename:"+filename);


// console
// DTRACE_NET_SERVER_CONNECTION
// DTRACE_NET_STREAM_END
// DTRACE_HTTP_SERVER_REQUEST
// DTRACE_HTTP_SERVER_RESPONSE
// DTRACE_HTTP_CLIENT_REQUEST
// DTRACE_HTTP_CLIENT_RESPONSE
// global
// process
// Buffer
// clearImmediate
// clearInterval
// clearTimeout
// setImmediate
// setInterval
// setTimeout
for(var a in global){
	console.log(a);
}


for(var a in global){
	console.log(a, "=====>", global[a])
}
	

