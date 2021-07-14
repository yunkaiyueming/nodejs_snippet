var fs = require('fs');


fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) {
	  //说明失败了，要执行失败的回调函数
	  console.log("不行啊，失败了");
	} else {
	  //成功的逻辑
	  console.log("没问题，再接再厉");
	}
});
console.log("111111")

var p = new Promise(function(sucess_cb, failed_cb){
	fs.readFile('./input.txt', 'utf8', function (err, data) {
		if (err) {
		  //说明失败了，要执行失败的回调函数
		  console.log("不行啊，失败了");
		  failed_cb();
		} else {
		  //成功的逻辑
		  console.log("没问题，再接再厉");
		  sucess_cb();
		}
	});
});

console.log("2222");

var sucess_cb = function(){
	console.log("执行成功回调");
}

var failed_cb = function(){
	console.log("执行失败回调");
}

//promise是一个容器，保存着未来才会结束的操作的结果
p.then(sucess_cb, failed_cb);

// Promise的缺点
// 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
// 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
// 当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
