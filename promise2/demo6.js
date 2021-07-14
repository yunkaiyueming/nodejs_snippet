
//怎么样直接返回promise中resolve的结果？
//当promise前面加上await的时候，调用的代码就会停止直到 promise 被解决或被拒绝。注意await一定要放在async函数中
var addV = function(data){
	return new Promise(resolve => {
	console.log(2222);//立即执行
	data = data + 1;
    setTimeout(() => resolve(data), 3000);//3s后执行异步
  });
}

var Xv = function(data){
	return new Promise(resolve => {
	data = data * 2
    setTimeout(() => resolve(data), 3000);//3s后执行异步
  });
}

var Yv = function(data){
	return new Promise(resolve => {
	data = data / 3
    setTimeout(() => resolve(data), 3000);//3s后执行异步
  });
}

var doFirst = async(data)=>{
	var resloveValue = await addV(data);
	return resloveValue;
}

var doSecond = async(data)=>{
	var resloveValue = await Xv(data);
	return resloveValue;
}

console.log('before')

var one = doFirst(1);console.log(one);
var two = doSecond(one);console.log(two);

console.log('after')
