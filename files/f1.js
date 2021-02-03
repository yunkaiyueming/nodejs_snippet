var fs = require('fs');
for(var k in fs){
	console.log(k,"===>");
}


console.log("查看 nodejs_snippet 目录");
fs.readdir("/Users/ray/Documents/nodejs/nodejs_snippet",function(err, files){
   if (err) {
       return console.error(err);
   }

   files.forEach(function (file){
       console.log( file );
   });

});