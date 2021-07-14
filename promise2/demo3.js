//es5正常写法
//getAjax(url, ()=>{})

//promise写法, j
//get(url).then(()=>{})

//async await写法
//let ret = await get(url)
// (async ()=>{
// 	let ret = await get(url)
// })()


//es4和promis写法，主要区别是写法的不同，可以让回调函数，划分出去在.then的函数里去执行，使用代码更加的清爽，
//async和promise的区别，在于async是promise的语法糖，这种形式需要底层编译之后会自动转化promise的写法

var fs = require('fs');


// var promise = new Promise(function (sucess_cb, failed_cb){

// 	fs.readFile('./input.txt', 'utf8', function (err, data) {
// 		if (err) {
// 		  //说明失败了，要执行失败的回调函数
// 		  console.log("好像失败了");
// 		  failed_cb(err);
// 		} else {
// 		  //成功的逻辑
// 		  console.log("好像成功了");
// 		  sucess_cb(data);
// 		}
// 	})
// });

var sucess_cb = function(data){
	console.log("====ok:"+data+"=====");

	return new Promise(function (sucess_cb, failed_cb){
		fs.readFile('./input.txt', 'utf8', function (err, data) {
			if (err) {
			  //说明失败了，要执行失败的回调函数
			  console.log("不行啊，失败了");
			  failed_cb(data);
			} else {
			  //成功的逻辑
			  console.log("没问题，再接再厉");
			  sucess_cb(data);
			}
		})
	});
}

var failed_cb = function(err){
	console.log("xxxxxxxwrong:"+ err +"xxxxxxx");

	return new Promise(function (sucess_cb, failed_cb){
		fs.readFile('./input.txt', 'utf8', function (err, data) {
			if (err) {
			  //说明失败了，要执行失败的回调函数
			  console.log("不行啊，失败了");
			  failed_cb(data);
			} else {
			  //成功的逻辑
			  console.log("没问题，再接再厉");
			  sucess_cb(data);
			}
		})
	});
}

var printok_cb = function(data){
	console.log("-------print ok:"+data+"-----");
}

var printerr_cb = function(err){
	console.log("-------print err:"+err+"-----");
}

//我们用then来将多个Promise连接起来，前一个promise resolve的结果是下一个promise中then的参数。
//promise.then(sucess_cb, failed_cb).then(printok_cb, printerr_cb);

//没有失败回调参数是，传catch时会，上面所有的promise如果其中一个有错误，
  //则终止下面所有的promise执行，且直接进入到catch中获取对应promise的异常错误信息
// promise.then(sucess_cb).then(printok_cb).catch(function(err){
// 	console.log("catch:"+err);
// }).finally(function(){
//   //无论失败成功都会执行
//   console.log('无论怎样，完成finally');
// });

// promise.then(function(data){
// 	console.log("成功后，返回给我："+data);
// },function(err){
// 	console.log("失败后，返回给我："+err);
// });

function getFilePath(path){
	return new Promise(function (sucess_cb, failed_cb){
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) {
			  //说明失败了，要执行失败的回调函数
			  //console.log("好像失败了");
			   failed_cb(err);
			} else {
			  //成功的逻辑
			   //console.log("好像成功了");
			   sucess_cb(data);
			}
		})

	});
}

var f1 = getFilePath("input.txt");
var f2 = getFilePath("2.txt");


// f1.then(
// 	function(data){console.log("sucess1:"+data); return f2},
// 	function(err){console.log("failed1:"+err); return f2}
// ).then(
// 	function(data){console.log("sucess2:"+data);},
// 	function(err){console.log("failed2:"+err);}
// );


