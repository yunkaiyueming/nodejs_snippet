const fs = require('fs')

function getFile(fileName){
	fs.readFile(fileName, (err, data) => {
		console.log(data);
	})
}

getFile('/etc/passwd');

setTimeout(()=>{
	console.log("timeout start...");
},1000);

console.log("end....");