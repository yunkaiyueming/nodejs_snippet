let promise = new Promise(((resolve, reject) => {
    console.log('Step1');
    resolve();
}));

promise.then(() => {
    console.log('Step3');
});

console.log('Step2');


//怎么样直接返回promise中resolve的结果？
//当promise前面加上await的时候，调用的代码就会停止直到 promise 被解决或被拒绝。注意await一定要放在async函数中
var p1 = function(){
	return new Promise(resolve => {
	console.log(2222);//立即执行

    setTimeout(() => resolve('小马哥'), 3000);//3s后执行异步
  });
}

console.log("3333");//不等上面立即执行
//p1.then(function(data){console.log("成功："+ data)}) //获取回调结果
// const logAsync = () => p1

var doSomething = async () =>{
	var resolveValue = await p1();
	console.log("获得返回值："+resolveValue);
	return resolveValue;
}

console.log('before')
var ret = doSomething();console.log(ret);
console.log('after')